import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GradientButton } from '../components';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

const { width } = Dimensions.get('window');

export const AboutScreen: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const stats = [
    { number: "10,000+", label: "Lives Transformed" },
    { number: "500+", label: "Doctor Partners" },
    { number: "95%+", label: "Bioavailability Rate" },
    { number: "0", label: "Artificial Fillers" },
  ];

  const values = [
    { 
      title: "Science-First", 
      description: "Backed by peer-reviewed research and clinical validation.", 
      iconName: "flask-outline" as const
    },
    { 
      title: "Transparency", 
      description: "Full ingredient disclosure—no proprietary blends.", 
      iconName: "eye-outline" as const
    },
    { 
      title: "Personalization", 
      description: "Formulas tailored to your unique biology.", 
      iconName: "git-network-outline" as const
    },
    { 
      title: "Purity", 
      description: "No fillers, binders, or artificial additives.", 
      iconName: "checkmark-circle-outline" as const
    },
  ];

  const teamMembers = [
    { 
      name: "Dr. Juliana Silva", 
      role: "Chief Scientific Officer", 
      specialty: "PhD, Nutritional Biochemistry", 
      image: "https://via.placeholder.com/150x150/2EE6D6/000000?text=JS" 
    },
    { 
      name: "Dr. Claudia Alves", 
      role: "Medical Director", 
      specialty: "MD, Internal Medicine", 
      image: "https://via.placeholder.com/150x150/2EA7FF/000000?text=CA" 
    },
    { 
      name: "Dr. Takehiro Kanegi", 
      role: "Research Director", 
      specialty: "PhD, Molecular Biology", 
      image: "https://via.placeholder.com/150x150/9333EA/000000?text=TK" 
    },
  ];

  const handleStartAssessment = () => {
    setIsWaitlistModalOpen(true);
  };

  const handleContactTeam = () => {
    // Navigate to contact screen
    console.log('Navigate to contact');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={[COLORS.background, COLORS.surface]}
            style={styles.heroBackground}
          />
          
          {/* Floating Elements */}
          <View style={styles.floatingElements}>
            <View style={[styles.floatingShape, styles.shape1]} />
            <View style={[styles.floatingShape, styles.shape2]} />
            <View style={[styles.floatingShape, styles.shape3]} />
          </View>

          <View style={styles.heroContent}>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>ABOUT VITA-CHOICE</Text>
            </View>

            <Text style={styles.heroTitle}>
              Redefining{'\n'}
              <Text style={styles.gradientText}>Nutritional Science</Text>
            </Text>

            <Text style={styles.heroSubtitle}>
              We're pioneers in personalized nutrition—combining science and individual biology
              to create formulas that actually work.
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <LinearGradient
            colors={[COLORS.surface, COLORS.cardBackground]}
            style={styles.statsSectionBackground}
          />
          
          {/* Floating Icons */}
          <View style={styles.statsFloatingIcons}>
            <View style={[styles.floatingIcon, styles.icon1]}>
              <Ionicons name="git-network-outline" size={24} color={COLORS.accentTeal} />
            </View>
            <View style={[styles.floatingIcon, styles.icon2]}>
              <Ionicons name="flask-outline" size={24} color={COLORS.accentTeal} />
            </View>
            <View style={[styles.floatingIcon, styles.icon3]}>
              <Ionicons name="checkmark-circle-outline" size={24} color={COLORS.accentTeal} />
            </View>
            <View style={[styles.floatingIcon, styles.icon4]}>
              <Ionicons name="medical-outline" size={24} color={COLORS.accentTeal} />
            </View>
          </View>

          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mission Section */}
        <View style={styles.missionSection}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            Forget shelves of pill bottles—our customizable liquid multivitamin replaces them all.
            Each bottle is uniquely formulated for your body, using doctor guidance to personalize dosing by age, weight and condition.
            Because it's fully liquid, you absorb nutrients more efficiently and eliminate the binders, fillers and artificial ingredients found in pills.
            Made from real fruit extracts and certified vegan, gluten-free and additive-free,{' '}
            <Text style={styles.highlightText}>this is the world's first all-in-one multivitamin tailored to You</Text>
          </Text>
        </View>

        {/* Values Section */}
        <View style={styles.valuesSection}>
          <LinearGradient
            colors={[COLORS.surface, COLORS.cardBackground]}
            style={styles.valuesSectionBackground}
          />
          
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesGrid}>
            {values.map((value, index) => (
              <View key={index} style={styles.valueCard}>
                <LinearGradient
                  colors={[COLORS.surface, COLORS.cardBackground]}
                  style={styles.valueCardBackground}
                />
                <Ionicons 
                  name={value.iconName} 
                  size={32} 
                  color={COLORS.accentTeal} 
                  style={styles.valueIcon} 
                />
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Team Section */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Scientific Leadership</Text>
          <View style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.teamMember}>
                <View style={styles.teamImageContainer}>
                  <Image
                    source={{ uri: member.image }}
                    style={styles.teamImage}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.teamName}>{member.name}</Text>
                <Text style={styles.teamRole}>{member.role}</Text>
                <Text style={styles.teamSpecialty}>{member.specialty}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={[`${COLORS.surface}CC`, `${COLORS.cardBackground}CC`]}
            style={styles.ctaBackground}
          />
          
          <Text style={styles.ctaTitle}>
            Ready for{' '}
            <Text style={styles.gradientText}>Personalized Nutrition?</Text>
          </Text>
          
          <Text style={styles.ctaSubtitle}>
            Join thousands already experiencing formulas designed for their unique biology.
          </Text>
          
          <View style={styles.ctaButtons}>
            <GradientButton
              title="Start Your Assessment"
              onPress={handleStartAssessment}
              size="large"
              style={styles.ctaPrimaryButton}
            />
            
            <GradientButton
              title="Contact Our Team"
              onPress={handleContactTeam}
              variant="outline"
              size="large"
              style={styles.ctaSecondaryButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    paddingVertical: SPACING.xxl * 2,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  heroBackground: {
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
  floatingShape: {
    position: 'absolute',
    opacity: 0.2,
  },
  shape1: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.accentTeal,
    top: '20%',
    left: '15%',
  },
  shape2: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.accentBlue,
    bottom: '25%',
    right: '20%',
    transform: [{ rotate: '12deg' }],
  },
  shape3: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: `${COLORS.accentTeal}4D`,
    top: '50%',
    left: '30%',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
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
    marginBottom: SPACING.xl,
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
  heroTitle: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: TYPOGRAPHY.h1 * 1.2,
  },
  gradientText: {
    color: COLORS.accentTeal, // Fallback for gradient text
  },
  heroSubtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: width - SPACING.xxl,
  },
  statsSection: {
    position: 'relative',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  statsSectionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  statsFloatingIcons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1: {
    top: '15%',
    left: '10%',
  },
  icon2: {
    bottom: '20%',
    left: '25%',
  },
  icon3: {
    top: '30%',
    right: '15%',
  },
  icon4: {
    bottom: '15%',
    right: '30%',
  },
  iconEmoji: {
    fontSize: 32,
    opacity: 0.3,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  statItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  statNumber: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: '700',
    color: COLORS.accentTeal,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  missionSection: {
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  missionText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    lineHeight: 26,
    textAlign: 'center',
    maxWidth: width - SPACING.xxl,
  },
  highlightText: {
    color: COLORS.accentTeal,
    fontWeight: '600',
  },
  valuesSection: {
    position: 'relative',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  valuesSectionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueCard: {
    width: '48%',
    position: 'relative',
    marginBottom: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  valueCardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  valueIcon: {
    fontSize: 32,
    marginBottom: SPACING.md,
  },
  valueTitle: {
    fontSize: TYPOGRAPHY.h6,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  valueDescription: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    lineHeight: 18,
  },
  teamSection: {
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  teamMember: {
    width: '30%',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  teamImageContainer: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  teamImage: {
    width: '100%',
    height: '100%',
  },
  teamName: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  teamRole: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.accentTeal,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  teamSpecialty: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  ctaSection: {
    position: 'relative',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    margin: SPACING.xl,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}33`,
    alignItems: 'center',
  },
  ctaBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  ctaTitle: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    zIndex: 1,
  },
  ctaSubtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    zIndex: 1,
  },
  ctaButtons: {
    width: '100%',
    gap: SPACING.md,
    zIndex: 1,
  },
  ctaPrimaryButton: {
    width: '100%',
  },
  ctaSecondaryButton: {
    width: '100%',
  },
});