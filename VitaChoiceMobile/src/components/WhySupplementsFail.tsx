import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants';

const { width } = Dimensions.get('window');

interface WhySupplementsFailProps {
  onLearnMore?: () => void;
}

export default function WhySupplementsFail({ onLearnMore }: WhySupplementsFailProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.grid}>
          {/* Left Content */}
          <View style={styles.leftContent}>
            <Text style={styles.title}>
              Why Traditional{'\n'}
              <LinearGradient
                colors={[COLORS.accentTeal, COLORS.accentBlue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.highlightGradient}
              >
                <Text style={styles.highlightText}>Supplements Fail</Text>
              </LinearGradient>
            </Text>

            <LinearGradient
              colors={[COLORS.accentTeal, COLORS.accentBlue]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.divider}
            />

            <Text style={styles.description}>
              Most pills are packed with fillers, dyes, binders and casings. Only a small portion is the actual nutrient.{' '}
              <Text style={styles.highlight}>
                You'd need $2.30, or even $4 pills per day
              </Text>{' '}
              to match what Vita-Choice delivers in one premium liquid serving.
            </Text>
          </View>

          {/* Right Visual */}
          <View style={styles.rightContent}>
            <LinearGradient
              colors={['#14161A', '#262A31']}
              style={styles.visualContainer}
            >
              <Image
                source={require('../../assets/images/tomato.png')}
                style={styles.comparisonImage}
                resizeMode="contain"
              />
            </LinearGradient>

            {/* Floating elements */}
            <View style={[styles.floatingElement, styles.redElement]} />
            <View style={[styles.floatingElement, styles.greenElement]} />
            <View style={[styles.floatingElement, styles.blueElement]} />
          </View>
        </View>

        {/* Bottom CTA Section */}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={['#14161A80', '#262A3180']}
            style={styles.ctaContainer}
          >
            <Text style={styles.ctaTitle}>
              Stop Wasting Money on Ineffective Supplements
            </Text>
            <Text style={styles.ctaDescription}>
              Experience the difference of scientifically optimized, fully methylated nutrition
              that your body can actually use.
            </Text>
            
            <TouchableOpacity style={styles.ctaButton} onPress={onLearnMore}>
              <LinearGradient
                colors={[COLORS.accentTeal, COLORS.accentBlue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Discover</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: 60,
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: SPACING.lg,
    width: '100%',
  },
  grid: {
    gap: 40,
    marginBottom: 60,
  },
  leftContent: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.textPrimary,
    lineHeight: 44,
    marginBottom: 24,
  },
  highlightGradient: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
  },
  highlightText: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.background,
  },
  divider: {
    width: 60,
    height: 4,
    borderRadius: 2,
    marginBottom: 24,
  },
  description: {
    fontSize: 18,
    color: COLORS.textMuted,
    lineHeight: 28,
  },
  highlight: {
    color: COLORS.accentTeal,
    fontWeight: '600',
  },
  rightContent: {
    flex: 1,
    position: 'relative',
    marginTop: 20,
  },
  visualContainer: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  comparisonImage: {
    width: '100%',
    height: 100,
    borderRadius: 16,
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: 8,
  },
  redElement: {
    width: 24,
    height: 24,
    backgroundColor: '#FF5A5F60',
    top: -10,
    right: -10,
  },
  greenElement: {
    width: 36,
    height: 36,
    backgroundColor: '#2ECC7140',
    bottom: -20,
    left: -20,
    borderRadius: 12,
  },
  blueElement: {
    width: 18,
    height: 18,
    backgroundColor: '#2EA7FF50',
    top: '50%',
    right: -24,
    borderRadius: 9,
  },
  ctaSection: {
    alignItems: 'center',
  },
  ctaContainer: {
    borderRadius: 20,
    padding: 32,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}10`,
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaDescription: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  ctaButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.background,
    fontWeight: '700',
    fontSize: 16,
  },
});

// Add the divider gradient after the component
const DividerGradient = () => (
  <LinearGradient
    colors={[COLORS.accentTeal, COLORS.accentBlue]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.divider}
  />
);