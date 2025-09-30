import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';

interface LoadingStateProps {
  message?: string;
  showSpinner?: boolean;
}

const { width } = Dimensions.get('window');

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  showSpinner = true,
}) => {
  return (
    <View style={styles.container}>
      {showSpinner && (
        <ActivityIndicator 
          size="large" 
          color={COLORS.accentTeal}
          style={styles.spinner}
        />
      )}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

// Grid loading component for shop page
export const LoadingGrid: React.FC = () => {
  const renderSkeletonCard = (index: number) => (
    <View key={index} style={styles.skeletonCard}>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonContent}>
        <View style={styles.skeletonText} />
        <View style={[styles.skeletonText, styles.skeletonTextSmall]} />
        <View style={[styles.skeletonText, styles.skeletonTextTiny]} />
      </View>
    </View>
  );

  return (
    <View style={styles.gridContainer}>
      {Array.from({ length: 6 }).map((_, index) => renderSkeletonCard(index))}
    </View>
  );
};

const cardWidth = (width - SPACING.xl * 3) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  spinner: {
    marginBottom: SPACING.lg,
  },
  message: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: SPACING.lg,
  },
  skeletonCard: {
    width: cardWidth,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 12,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
  },
  skeletonImage: {
    height: 140,
    backgroundColor: COLORS.border,
  },
  skeletonContent: {
    padding: SPACING.md,
  },
  skeletonText: {
    height: 16,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginBottom: SPACING.xs,
  },
  skeletonTextSmall: {
    width: '70%',
    height: 12,
  },
  skeletonTextTiny: {
    width: '40%',
    height: 14,
  },
});