import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, GRADIENTS, TYPOGRAPHY, BORDER_RADIUS, SPACING } from '../constants';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradient?: string[];
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  gradient = GRADIENTS.primary,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'medium',
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle = styles.button;
    let sizeStyle;
    
    switch (size) {
      case 'small':
        sizeStyle = styles.buttonSmall;
        break;
      case 'large':
        sizeStyle = styles.buttonLarge;
        break;
      default:
        sizeStyle = styles.buttonMedium;
    }
    
    return {
      ...baseStyle,
      ...sizeStyle,
      opacity: disabled ? 0.6 : 1,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle = styles.text;
    let sizeStyle;
    
    switch (size) {
      case 'small':
        sizeStyle = styles.textSmall;
        break;
      case 'large':
        sizeStyle = styles.textLarge;
        break;
      default:
        sizeStyle = styles.textMedium;
    }
    
    return {
      ...baseStyle,
      ...sizeStyle,
      color: variant === 'outline' ? COLORS.accentTeal : COLORS.black,
    };
  };

  if (variant === 'outline') {
    return (
      <TouchableOpacity
        style={[styles.outlineButton, getButtonStyle(), style]}
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.accentTeal} />
        ) : (
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradient as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.black} />
        ) : (
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  buttonSmall: {
    height: 36,
  },
  buttonMedium: {
    height: 48,
  },
  buttonLarge: {
    height: 56,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: COLORS.accentTeal,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  textSmall: {
    fontSize: TYPOGRAPHY.caption,
  },
  textMedium: {
    fontSize: TYPOGRAPHY.body,
  },
  textLarge: {
    fontSize: TYPOGRAPHY.h6,
  },
});