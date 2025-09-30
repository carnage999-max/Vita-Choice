import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

const { width } = Dimensions.get('window');

interface ModernHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  animated?: boolean;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  title,
  showBackButton = true,
  onBackPress,
  rightElement,
  subtitle,
  backgroundColor = COLORS.background,
  textColor = COLORS.textPrimary,
  animated = true,
}) => {
  const insets = useSafeAreaInsets();
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animated) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();

      // Continuous glow animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [animated]);

  const headerHeight = insets.top + 60;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Dynamic background with gradient */}
      <LinearGradient
        colors={[
          backgroundColor,
          `${backgroundColor}95`,
          `${backgroundColor}50`,
        ]}
        style={[styles.backgroundGradient, { height: headerHeight + 20 }]}
      />
      
      {/* Animated glow effect */}
      <Animated.View
        style={[
          styles.glowEffect,
          {
            opacity: glowAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.3],
            }),
            transform: [
              {
                scale: glowAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.1],
                }),
              },
            ],
          },
        ]}
      />

      {/* Main header content */}
      <Animated.View
        style={[
          styles.headerContent,
          {
            transform: [
              { translateY: slideAnim },
              { scale: scaleAnim },
            ],
            opacity: fadeAnim,
          },
        ]}
      >
        {/* Left section with back button */}
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackPress}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={[`${COLORS.accentTeal}20`, `${COLORS.accentTeal}10`]}
                style={styles.backButtonGradient}
              >
                <Ionicons 
                  name="arrow-back" 
                  size={20} 
                  color={COLORS.accentTeal} 
                />
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>

        {/* Center section with title */}
        <View style={styles.centerSection}>
          <View style={styles.titleContainer}>
            {/* Decorative elements */}
            <View style={styles.titleDecorations}>
              <View style={[styles.decorativeDot, styles.dot1]} />
              <View style={[styles.decorativeDot, styles.dot2]} />
              <View style={[styles.decorativeDot, styles.dot3]} />
            </View>

            <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
              {title}
            </Text>
            
            {subtitle && (
              <Text style={[styles.subtitle, { color: `${textColor}70` }]} numberOfLines={1}>
                {subtitle}
              </Text>
            )}

            {/* Animated underline */}
            <Animated.View
              style={[
                styles.titleUnderline,
                {
                  transform: [
                    {
                      scaleX: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>

        {/* Right section */}
        <View style={styles.rightSection}>
          {rightElement || <View style={styles.placeholderRight} />}
        </View>
      </Animated.View>

      {/* Floating particles effect */}
      <View style={styles.particlesContainer}>
        <Animated.View
          style={[
            styles.particle,
            styles.particle1,
            {
              opacity: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.2, 0.6],
              }),
              transform: [
                {
                  translateX: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                  }),
                },
                {
                  translateY: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -5],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.particle,
            styles.particle2,
            {
              opacity: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.1, 0.4],
              }),
              transform: [
                {
                  translateX: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -8],
                  }),
                },
                {
                  translateY: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 3],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.particle,
            styles.particle3,
            {
              opacity: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.15, 0.5],
              }),
              transform: [
                {
                  translateX: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 6],
                  }),
                },
                {
                  translateY: glowAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -8],
                  }),
                },
              ],
            },
          ]}
        />
      </View>

      {/* Bottom border gradient */}
      <LinearGradient
        colors={[
          'transparent',
          `${COLORS.accentTeal}30`,
          'transparent',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomBorder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.border}50`,
    overflow: 'hidden',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: BORDER_RADIUS.xl,
    borderBottomRightRadius: BORDER_RADIUS.xl,
  },
  glowEffect: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    backgroundColor: COLORS.accentTeal,
    borderRadius: BORDER_RADIUS.full,
    opacity: 0.1,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    height: 60,
  },
  leftSection: {
    width: 50,
    alignItems: 'flex-start',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: COLORS.accentTeal,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  backButtonGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}20`,
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  titleDecorations: {
    position: 'absolute',
    top: -15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  decorativeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accentTeal,
    opacity: 0.6,
  },
  dot1: {
    backgroundColor: COLORS.accentTeal,
  },
  dot2: {
    backgroundColor: COLORS.accentBlue,
  },
  dot3: {
    backgroundColor: '#F5A623',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  titleUnderline: {
    position: 'absolute',
    bottom: -8,
    width: 40,
    height: 2,
    backgroundColor: COLORS.accentTeal,
    borderRadius: 1,
  },
  rightSection: {
    width: 50,
    alignItems: 'flex-end',
  },
  placeholderRight: {
    width: 40,
    height: 40,
  },
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    borderRadius: 3,
  },
  particle1: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.accentTeal,
    top: '30%',
    left: '20%',
  },
  particle2: {
    width: 4,
    height: 4,
    backgroundColor: COLORS.accentBlue,
    top: '60%',
    right: '25%',
  },
  particle3: {
    width: 8,
    height: 8,
    backgroundColor: '#F5A623',
    top: '45%',
    left: '75%',
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },
});