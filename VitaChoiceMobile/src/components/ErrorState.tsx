import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { GradientButton } from './GradientButton';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';

interface ErrorStateProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onRetry?: () => void;
  showRetryButton?: boolean;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'We encountered an error while loading this content. Please try again.',
  buttonText = 'Try Again',
  onRetry,
  showRetryButton = true,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>⚠️</Text>
      </View>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      
      {showRetryButton && onRetry && (
        <GradientButton
          title={buttonText}
          onPress={onRetry}
          style={styles.retryButton}
          size="medium"
        />
      )}
    </View>
  );
};

// Network error specific component
export const NetworkError: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => {
  return (
    <ErrorState
      title="Connection Error"
      message="Unable to connect to our servers. Please check your internet connection and try again."
      buttonText="Retry"
      onRetry={onRetry}
    />
  );
};

// No products found component
export const NoProductsFound: React.FC<{ searchQuery?: string }> = ({ searchQuery }) => {
  const message = searchQuery 
    ? `No products found matching "${searchQuery}". Try adjusting your search terms.`
    : 'No products available at the moment. Please check back later.';

  return (
    <ErrorState
      title="No Products Found"
      message={message}
      showRetryButton={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  iconContainer: {
    marginBottom: SPACING.lg,
  },
  iconText: {
    fontSize: 64,
  },
  title: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  message: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.xl,
  },
  retryButton: {
    minWidth: 140,
  },
});