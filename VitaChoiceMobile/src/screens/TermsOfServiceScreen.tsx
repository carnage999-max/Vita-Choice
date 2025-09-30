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

export const TermsOfServiceScreen: React.FC = () => {
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
              <Ionicons name="document-text" size={16} color={COLORS.accentTeal} />
              <Text style={styles.badgeText}>TERMS OF SERVICE</Text>
            </View>
            <Text style={styles.title}>Terms of Service</Text>
            <Text style={styles.subtitle}>Last updated: January 2024</Text>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <LinearGradient
              colors={['#14161A', '#262A31']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardTitle}>Welcome to Vita-Choice</Text>
              <Text style={styles.cardDescription}>
                These Terms of Service govern your use of Vita-Choice's personalized nutrition services. 
                By using our services, you agree to these terms. Please read them carefully.
              </Text>
            </LinearGradient>
          </View>

          {/* Sections */}
          <View style={styles.sections}>
            {/* Service Description */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Service Description</Text>
              <Text style={styles.text}>
                Vita-Choice provides personalized liquid nutritional supplements based on individual health assessments, 
                laboratory results, and medical review. Our services include:
              </Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Health assessments and nutritional analysis</Text>
                <Text style={styles.bulletItem}>• Custom liquid supplement formulation</Text>
                <Text style={styles.bulletItem}>• Medical review by licensed healthcare professionals</Text>
                <Text style={styles.bulletItem}>• Ongoing support and formula optimization</Text>
                <Text style={styles.bulletItem}>• Educational resources and health guidance</Text>
              </View>
            </View>

            {/* Medical Disclaimer */}
            <View style={styles.section}>
              <View style={styles.warningCard}>
                <LinearGradient
                  colors={['#FF6B6B20', '#FF637320']}
                  style={styles.warningGradient}
                >
                  <View style={styles.warningHeader}>
                    <Ionicons name="warning" size={20} color="#FF6B6B" />
                    <Text style={styles.warningTitle}>Medical Disclaimer</Text>
                  </View>
                  <Text style={styles.warningText}>
                    Vita-Choice products are dietary supplements, not medications. Our services do not constitute 
                    medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting 
                    any supplement regimen. Do not stop prescribed medications without medical supervision.
                  </Text>
                </LinearGradient>
              </View>
            </View>

            {/* User Conduct */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. User Conduct</Text>
              <Text style={styles.text}>You agree to:</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Provide accurate, complete, and current health information</Text>
                <Text style={styles.bulletItem}>• Maintain the security of your account credentials</Text>
                <Text style={styles.bulletItem}>• Use our services only for lawful purposes</Text>
                <Text style={styles.bulletItem}>• Follow all applicable laws and regulations</Text>
                <Text style={styles.bulletItem}>• Inform us of any changes to your health status</Text>
              </View>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Information Accuracy</Text>
                <Text style={styles.text}>
                  Providing inaccurate health information may result in inappropriate formulations and potential health risks. 
                  You are responsible for ensuring all information provided is complete and accurate.
                </Text>
              </View>
            </View>

            {/* Limitation of Liability */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Limitation of Liability</Text>
              <Text style={styles.text}>To the maximum extent permitted by law:</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Vita-Choice provides services "as is" without warranties of any kind</Text>
                <Text style={styles.bulletItem}>• We are not liable for indirect, consequential, or punitive damages</Text>
                <Text style={styles.bulletItem}>• Our total liability shall not exceed the amount you paid for services</Text>
                <Text style={styles.bulletItem}>• We do not guarantee specific health outcomes or results</Text>
              </View>
            </View>

            {/* Orders and Acceptance */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Orders and Medical Review</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Order Process</Text>
                <Text style={styles.text}>
                  All orders are subject to acceptance and medical review by our licensed healthcare professionals. 
                  We reserve the right to refuse or cancel orders for safety reasons or if medical review indicates potential concerns.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Medical Review</Text>
                <Text style={styles.text}>
                  Our medical team reviews all health information and may request additional information or recommend 
                  consulting with your healthcare provider before proceeding with formulation.
                </Text>
              </View>
            </View>

            {/* Subscription Services */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Subscription Services</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Auto-Renewal</Text>
                <Text style={styles.text}>
                  Subscription services automatically renew unless cancelled. You may cancel at any time through 
                  your account settings or by contacting customer support.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Changes to Subscriptions</Text>
                <Text style={styles.text}>
                  We may adjust subscription terms, pricing, or formulations based on updated health information 
                  or medical recommendations. You will be notified of significant changes.
                </Text>
              </View>
            </View>

            {/* Termination */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Termination</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>By You</Text>
                <Text style={styles.text}>
                  You may cancel your account and subscriptions at any time through your account settings. 
                  Refunds will be processed according to our refund policy.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>By Vita-Choice</Text>
                <Text style={styles.text}>
                  We may suspend or terminate accounts for violations of these terms, safety concerns, 
                  or if continued service would be medically inadvisable.
                </Text>
              </View>
            </View>

            {/* Governing Law */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>7. Governing Law and Updates</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Governing Law</Text>
                <Text style={styles.text}>
                  These terms are governed by the laws of New York State. Any disputes will be resolved through 
                  binding arbitration in accordance with the American Arbitration Association rules.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Terms Updates</Text>
                <Text style={styles.text}>
                  We may update these terms from time to time. We will notify you of material changes via email 
                  or through our website. Your continued use indicates acceptance of the new terms.
                </Text>
              </View>
            </View>

            {/* Contact */}
            <View style={styles.contactCard}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.cardGradient}
              >
                <Text style={styles.cardTitle}>Questions About These Terms?</Text>
                <Text style={styles.cardDescription}>
                  If you have questions about these Terms of Service, please contact us:
                </Text>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Email: </Text>
                    <Text style={styles.contactValue}>legal@vita-choice.com</Text>
                  </Text>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Phone: </Text>
                    <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
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
  warningCard: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginBottom: 16,
  },
  warningGradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#FF6B6B40',
    borderRadius: BORDER_RADIUS.lg,
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF6B6B',
    marginLeft: 8,
  },
  warningText: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
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