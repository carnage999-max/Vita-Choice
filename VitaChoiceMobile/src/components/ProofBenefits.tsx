import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants';

const { width } = Dimensions.get('window');

// Clean Label SVG Icon Component
const CleanLabelIcon = ({ size = 40, color = "#15E3A6" }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 512 512">
    <G>
      <Path 
        fill="#15E3A6"
        d="M256.003,267.494c9.121-24.725,21.538-41.209,35.824-51.538c71.209-51.538,189.451,51.538,189.451,51.538S310.948,415.846,256.003,267.494z"
      />
      <Path 
        fill="#15E3A6"
        d="M256.003,267.494c0,0,0,0.11-0.11,0.33c-55.055,147.802-225.165-0.33-225.165-0.33s118.242-103.077,189.451-51.538C234.464,226.286,246.882,242.769,256.003,267.494z"
      />
      <Path 
        fill="#15E3A6"
        d="M291.387,219.692c-9.231,7.363-20.879,13.846-35.385,19.231c-14.505-5.385-26.154-11.868-35.385-19.231c-85.385-67.363,35.385-206.044,35.385-206.044S376.772,152.33,291.387,219.692z"
      />
    </G>
    <G>
      <Path 
        fill="#0DD398"
        d="M291.387,159.253c-9.231,7.363-20.879,13.846-35.385,19.231c-14.505-5.385-26.154-11.868-35.385-19.231c-13.188-10.404-21.433-22.516-25.989-35.551c-9.098,34.619-6.402,70.434,25.989,95.99c9.231,7.363,20.879,13.846,35.385,19.231c14.505-5.385,26.154-11.868,35.385-19.231c32.392-25.556,35.087-61.371,25.99-95.99C312.82,136.736,304.575,148.848,291.387,159.253z"
      />
      <Path 
        fill="#0DD398"
        d="M310.948,267.494c9.121-24.725,21.538-41.209,35.824-51.538c6.733-4.873,13.888-8.354,21.321-10.68c-26.644-6.432-53.796-5.584-76.266,10.68c-14.286,10.33-26.703,26.813-35.824,51.538c23.612,63.753,68.53,72.652,112.085,62.137C344.909,322.396,324.441,303.925,310.948,267.494z"
      />
      <Path 
        fill="#0DD398"
        d="M220.179,215.956c-22.47-16.264-49.623-17.112-76.266-10.68c7.434,2.326,14.589,5.808,21.321,10.68c14.286,10.33,26.703,26.813,35.824,51.538c0,0,0,0.11-0.11,0.33c-13.491,36.218-33.909,54.592-57.021,61.804c43.486,10.5,88.329,1.654,111.966-61.804c0.11-0.22,0.11-0.33,0.11-0.33C246.882,242.769,234.464,226.286,220.179,215.956z"
      />
    </G>
  </Svg>
);

export default function ProofBenefits() {
  // Animation refs for floating elements
  const float1 = useRef(new Animated.Value(0)).current;
  const float2 = useRef(new Animated.Value(0)).current;
  const float3 = useRef(new Animated.Value(0)).current;
  const float4 = useRef(new Animated.Value(0)).current;
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create floating animations
    const createFloatingAnimation = (animatedValue: Animated.Value, duration: number, delay: number = 0) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 }
      );
    };

    // Create rotation animations
    const createRotationAnimation = (animatedValue: Animated.Value, duration: number) => {
      return Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        { iterations: -1 }
      );
    };

    // Start all animations
    setTimeout(() => {
      Animated.parallel([
        createFloatingAnimation(float1, 3000),
        createFloatingAnimation(float2, 2500, 500),
        createFloatingAnimation(float3, 4000, 1000),
        createFloatingAnimation(float4, 3500, 1500),
        createRotationAnimation(rotate1, 8000),
        createRotationAnimation(rotate2, 6000),
      ]).start();
    }, 1000);
  }, []);

  const benefits = [
    {
      icon: require('../../assets/images/dna-molecule.png'),
      title: 'Fully Methylated Forms',
      description: 'Superior bioavailability with methylfolate (5-MTHF) and methylcobalamin. No genetic conversion barriers—your body absorbs what it needs, when it needs it.',
      gradient: [COLORS.accentTeal, '#1dd1c4'] as const,
      isImage: true,
    },
    {
      icon: 'clean-label-svg',
      title: 'Clean Label Promise',
      description: 'Gluten-free, zero artificial colors or sweeteners. Pure, potent ingredients without the fillers. What you see is what your body gets.',
      gradient: ['#2ECC71', '#27ae60'] as const,
      isImage: false,
    },
    {
      icon: require('../../assets/images/vegan.png'),
      title: 'Vegan-Friendly Science',
      description: 'Plant-based excellence without compromise. Every ingredient is ethically sourced and scientifically validated for maximum efficacy.',
      gradient: [COLORS.accentBlue, '#2980b9'] as const,
      isImage: true,
    },
    {
      icon: require('../../assets/images/global-shipping.png'),
      title: 'Global Shipping & Guarantee',
      description: 'Worldwide delivery with full money-back guarantee. Premium nutrition shouldn\'t have borders—we ship excellence everywhere.',
      gradient: ['#F5A623', '#f39c12'] as const,
      isImage: true,
    }
  ];

  return (
    <LinearGradient
      colors={[COLORS.background, COLORS.surface]}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Section Header */}
        <View style={styles.header}>
          
            <Text style={styles.title}>Science-Backed Excellence</Text>
          
          <Text style={styles.subtitle}>
            Every formula is engineered with precision, backed by research, and built for your body's optimal performance.
          </Text>
        </View>

        {/* Benefits Grid */}
        <View style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitCard}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.cardGradient}
              >
                {/* Top gradient line */}
                <LinearGradient
                  colors={benefit.gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.topLine}
                />

                {/* Icon Container */}
                <View style={styles.iconContainer}>
                  {benefit.isImage ? (
                    <Image
                      source={benefit.icon}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  ) : (
                    <CleanLabelIcon size={40} />
                  )}
                </View>

                {/* Content */}
                <Text style={styles.benefitTitle}>{benefit.title}</Text>
                <Text style={styles.benefitDescription}>{benefit.description}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>

        {/* Additional Visual Section */}
        <View style={styles.experienceSection}>
          <Text style={styles.experienceTitle}>
            Experience the Vita-Choice Difference
          </Text>
          <Text style={styles.experienceSubtitle}>
            Elevate your wellness journey with our meticulously crafted, science-driven supplements. Feel the transformation with every drop.
          </Text>

          {/* Product Visualization */}
          <View style={styles.productContainer}>
            <Image
              source={require('../../assets/images/vita-theme.png')}
              style={styles.productImage}
              resizeMode="contain"
            />
            
            {/* Floating elements with animations */}
            <Animated.View 
              style={[
                styles.floatingElement, 
                styles.floating1,
                {
                  transform: [
                    {
                      translateY: float1.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -15],
                      }),
                    },
                    {
                      rotate: rotate1.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                }
              ]} 
            />
            <Animated.View 
              style={[
                styles.floatingElement, 
                styles.floating2,
                {
                  transform: [
                    {
                      translateY: float2.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 12],
                      }),
                    },
                  ],
                }
              ]} 
            />
            <Animated.View 
              style={[
                styles.floatingElement, 
                styles.floating3,
                {
                  transform: [
                    {
                      translateY: float3.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -8],
                      }),
                    },
                    {
                      rotate: rotate2.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '-360deg'],
                      }),
                    },
                  ],
                }
              ]} 
            />
            <Animated.View 
              style={[
                styles.floatingElement, 
                styles.floating4,
                {
                  transform: [
                    {
                      translateX: float4.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 10],
                      }),
                    },
                    {
                      translateY: float4.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -6],
                      }),
                    },
                  ],
                }
              ]} 
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    marginBottom: 60,
  },
  titleGradient: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 40,
    fontWeight: '800',
    color: COLORS.background,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: width - 60,
  },
  benefitsGrid: {
    paddingHorizontal: SPACING.lg,
    gap: 20,
    marginBottom: 80,
  },
  benefitCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    position: 'relative',
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  benefitTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  benefitDescription: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 22,
  },
  experienceSection: {
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
  },
  experienceTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
  },
  experienceSubtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: width - 60,
  },
  productContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: '100%',
  },
  productImage: {
    width: width * 0.8,
    height: 240,
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: 12,
  },
  floating1: {
    width: 40,
    height: 40,
    backgroundColor: `${COLORS.accentTeal}20`,
    top: -10,
    left: -10,
  },
  floating2: {
    width: 40,
    height: 40,
    backgroundColor: `${COLORS.accentTeal}20`,
    bottom: -10,
    left: -10,
  },
  floating3: {
    width: 30,
    height: 30,
    backgroundColor: '#27ae6030',
    bottom: -20,
    right: -20,
    borderRadius: 8,
  },
  floating4: {
    width: 20,
    height: 20,
    backgroundColor: '#F5A62330',
    top: '50%',
    right: -30,
    borderRadius: 6,
  },
  title: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.md,
    lineHeight: TYPOGRAPHY.h1 * 1.2,
  },
});