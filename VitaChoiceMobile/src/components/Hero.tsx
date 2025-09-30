import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientButton } from './GradientButton';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

const { width, height } = Dimensions.get('window');

interface HeroProps {
  onOpenWaitlist: () => void;
  onShopPress: () => void;
  onLearnMorePress: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenWaitlist, 
  onShopPress, 
  onLearnMorePress 
}) => {
  const features = [
    "Fully Liquid - superior absorption vs. pills",
    "Made with real fruit extracts", 
    "Individually dosed for age, weight, and conditions",
    "Doctor reviewed for safety and efficacy",
    "Vegan, gluten-free, no artificial sweeteners"
  ];

  return (
    <View style={styles.container}>
      {/* Background Gradients */}
      <LinearGradient
        colors={[COLORS.background, COLORS.surface]}
        style={styles.backgroundGradient}
      />
      
      {/* Floating Elements */}
      <View style={styles.floatingElements}>
        <View style={[styles.floatingCircle, styles.circle1]} />
        <View style={[styles.floatingShape, styles.shape1]} />
        <View style={[styles.floatingCircle, styles.circle2]} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Badge */}
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>NUTRITION, ELEVATED</Text>
          </View>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <View style={styles.imageBackground} />
          <Image
            source={require('../../assets/images/hero-image-.png')}
            style={styles.productImage}
            resizeMode="contain"
          />
          
          {/* Floating decorative elements */}
          <View style={[styles.decorativeElement, styles.element1]} />
          <View style={[styles.decorativeElement, styles.element2]} />
          <View style={[styles.decorativeElement, styles.element3]} />
        </View>

        {/* Main Content */}
        <View style={styles.textContent}>
          <Text style={styles.title}>
            Customizable Liquid{'\n'}Multivitamin
          </Text>

          <Text style={styles.subtitle}>
            Every bottle is uniquely formulated for your body, based on lab results
            and doctor guidance. No fillers. No binders. Just real results.
          </Text>

          {/* Features List */}
          <View style={styles.featuresList}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.featureBullet}>
                  <View style={styles.featureDot} />
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          {/* CTA Buttons */}
          <View style={styles.ctaContainer}>
            <GradientButton
              title="Shop Vita‑Choice"
              onPress={onShopPress}
              size="large"
              style={styles.primaryButton}
            />
            
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onLearnMorePress}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.disclaimer}>
            No spam. Exclusive early access and launch offers only.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingCircle: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.1,
  },
  circle1: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.accentTeal,
    top: height * 0.15,
    left: width * 0.1,
  },
  circle2: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.accentBlue,
    bottom: height * 0.2,
    right: width * 0.15,
  },
  floatingShape: {
    position: 'absolute',
    opacity: 0.15,
  },
  shape1: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.accentTeal,
    top: height * 0.4,
    right: width * 0.1,
    transform: [{ rotate: '45deg' }],
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xxl,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: `${COLORS.accentTeal}10`,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}30`,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accentTeal,
    marginRight: SPACING.sm,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '600',
    color: COLORS.accentTeal,
    letterSpacing: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
    position: 'relative',
    height: 320, // Increased height for better visual presence
    width: '100%',
  },
  imageBackground: {
    position: 'absolute',
    width: 240, // Larger background
    height: 240,
    borderRadius: 120,
    backgroundColor: COLORS.accentTeal,
    opacity: 0.1,
    top: 40,
  },
  productImage: {
    width: width * 0.8, // Responsive width
    height: 280, // Larger image
    zIndex: 2,
  },
  decorativeElement: {
    position: 'absolute',
    borderRadius: BORDER_RADIUS.lg,
    opacity: 0.3,
  },
  element1: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.accentTeal,
    top: 20,
    left: 50,
    borderRadius: BORDER_RADIUS.full,
  },
  element2: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.accentBlue,
    bottom: 30,
    right: 40,
    borderRadius: BORDER_RADIUS.full,
  },
  element3: {
    width: 32,
    height: 32,
    backgroundColor: '#F5A623',
    top: 80,
    right: 20,
    transform: [{ rotate: '45deg' }],
  },
  textContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.md,
    lineHeight: TYPOGRAPHY.h1 * 1.2,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.sm,
  },
  featuresList: {
    width: '100%',
    marginBottom: SPACING.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.sm,
  },
  featureBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.accentTeal,
    backgroundColor: `${COLORS.accentTeal}20`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    marginTop: 2,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accentTeal,
  },
  featureText: {
    flex: 1,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },
  ctaContainer: {
    width: '100%',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  primaryButton: {
    width: '100%',
  },
  secondaryButton: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  disclaimer: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    textAlign: 'center',
    opacity: 0.75,
  },
});