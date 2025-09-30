import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

export const PrivacyPolicyScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <LinearGradient
        colors={[COLORS.background, COLORS.surface]}
        style={styles.gradient}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.badge}>
              <Ionicons name="shield-checkmark" size={16} color={COLORS.accentTeal} />
              <Text style={styles.badgeText}>PRIVACY POLICY</Text>
            </View>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.subtitle}>Last updated: January 2024</Text>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <LinearGradient
              colors={['#14161A', '#262A31']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardTitle}>Your Privacy Matters</Text>
              <Text style={styles.cardDescription}>
                At Vita-Choice, we understand that your health information is deeply personal. This Privacy Policy explains
                how we collect, use, protect, and share your information when you use our services. We are committed to
                maintaining the highest standards of data protection and transparency.
              </Text>
            </LinearGradient>
          </View>

          {/* Sections */}
          <View style={styles.sections}>
            {/* Information We Collect */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Information We Collect</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Health Information</Text>
                <Text style={styles.text}>We collect health-related information you provide, including:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Medical history, current medications, and health conditions</Text>
                  <Text style={styles.bulletItem}>• Laboratory test results and genetic testing data</Text>
                  <Text style={styles.bulletItem}>• Dietary preferences, allergies, and lifestyle information</Text>
                  <Text style={styles.bulletItem}>• Symptom tracking and health outcomes</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Personal Information</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Name, email address, phone number, and mailing address</Text>
                  <Text style={styles.bulletItem}>• Date of birth, gender, and emergency contact information</Text>
                  <Text style={styles.bulletItem}>• Payment information and billing details</Text>
                  <Text style={styles.bulletItem}>• Account credentials and preferences</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Technical Information</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• IP address, browser type, and device information</Text>
                  <Text style={styles.bulletItem}>• Website usage data and interaction patterns</Text>
                  <Text style={styles.bulletItem}>• Cookies and similar tracking technologies</Text>
                </View>
              </View>
            </View>

            {/* How We Use Your Information */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Personalized Formulations</Text>
                <Text style={styles.text}>
                  We use your health information to create customized supplement formulations tailored to your unique biology, 
                  health goals, and laboratory results.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Medical Review</Text>
                <Text style={styles.text}>
                  Our licensed healthcare providers review your information to ensure safety, identify potential interactions, 
                  and provide appropriate recommendations.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Service Delivery</Text>
                <Text style={styles.text}>
                  We process your information to fulfill orders, process payments, provide customer support, and communicate 
                  about your account and services.
                </Text>
              </View>
            </View>

            {/* Information Sharing */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Information Sharing and Disclosure</Text>
              <Text style={styles.text}>
                We do not sell, rent, or trade your personal information. We may share your information only in these limited circumstances:
              </Text>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Healthcare Providers</Text>
                <Text style={styles.text}>
                  With your explicit consent, we may share relevant information with your personal healthcare providers to coordinate care.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Service Providers</Text>
                <Text style={styles.text}>We work with trusted third parties who help us provide our services, including:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Laboratory partners for test processing</Text>
                  <Text style={styles.bulletItem}>• Manufacturing facilities for product creation</Text>
                  <Text style={styles.bulletItem}>• Shipping and logistics providers</Text>
                  <Text style={styles.bulletItem}>• Payment processors and technology providers</Text>
                </View>
              </View>
            </View>

            {/* Data Security */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Data Security</Text>
              <Text style={styles.text}>We implement industry-leading security measures to protect your information:</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• End-to-end encryption for data transmission and storage</Text>
                <Text style={styles.bulletItem}>• HIPAA-compliant data handling procedures</Text>
                <Text style={styles.bulletItem}>• Multi-factor authentication and access controls</Text>
                <Text style={styles.bulletItem}>• Regular security audits and vulnerability assessments</Text>
                <Text style={styles.bulletItem}>• Secure data centers with 24/7 monitoring</Text>
              </View>
            </View>

            {/* Your Rights */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Your Rights and Choices</Text>
              <Text style={styles.text}>You have the following rights regarding your personal information:</Text>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Access and Portability</Text>
                <Text style={styles.text}>
                  You can request a copy of all personal information we have about you in a portable format.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Correction and Updates</Text>
                <Text style={styles.text}>
                  You can update or correct your information at any time through your account settings or by contacting us.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Deletion</Text>
                <Text style={styles.text}>
                  You can request deletion of your account and associated data, subject to legal retention requirements.
                </Text>
              </View>
            </View>

            {/* Contact */}
            <View style={styles.contactCard}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.cardGradient}
              >
                <Text style={styles.cardTitle}>Contact Information</Text>
                <Text style={styles.cardDescription}>
                  If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us:
                </Text>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Email: </Text>
                    <Text style={styles.contactValue}>privacy@vita-choice.com</Text>
                  </Text>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Phone: </Text>
                    <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
                  </Text>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Mail: </Text>
                    <Text style={styles.contactValue}>Vita-Choice Privacy Officer{'\n'}123 Health Plaza, Suite 450{'\n'}New York, NY 10001</Text>
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: 20,
    paddingBottom: 30,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.accentTeal}10`,
    borderColor: `${COLORS.accentTeal}30`,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.accentTeal,
    marginLeft: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  introCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: 30,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
  },
  sections: {
    paddingHorizontal: SPACING.lg,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.accentTeal,
    marginBottom: 16,
  },
  subsection: {
    marginBottom: 20,
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
    marginBottom: 8,
  },
  bulletList: {
    marginLeft: 8,
    marginTop: 8,
  },
  bulletItem: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
    marginBottom: 4,
  },
  contactCard: {
    marginTop: 20,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  contactInfo: {
    marginTop: 16,
  },
  contactItem: {
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  contactValue: {
    fontSize: 15,
    color: COLORS.accentTeal,
  },
});