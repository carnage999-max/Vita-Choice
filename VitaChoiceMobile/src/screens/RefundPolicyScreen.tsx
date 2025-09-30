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

export const RefundPolicyScreen: React.FC = () => {
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
              <Ionicons name="arrow-back-circle" size={16} color={COLORS.accentTeal} />
              <Text style={styles.badgeText}>REFUND POLICY</Text>
            </View>
            <Text style={styles.title}>Refund Policy</Text>
            <Text style={styles.subtitle}>Your satisfaction guaranteed</Text>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <LinearGradient
              colors={['#14161A', '#262A31']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardTitle}>100% Satisfaction Guarantee</Text>
              <Text style={styles.cardDescription}>
                We stand behind the quality and effectiveness of our personalized formulations. 
                If you're not completely satisfied, we'll make it right with our comprehensive refund policy.
              </Text>
            </LinearGradient>
          </View>

          {/* Sections */}
          <View style={styles.sections}>
            {/* Refund Eligibility */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Refund Eligibility</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Full Refund Conditions</Text>
                <Text style={styles.text}>You are eligible for a full refund within 60 days if:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• You're not satisfied with your personalized formulation</Text>
                  <Text style={styles.bulletItem}>• You experience adverse reactions (medical documentation required)</Text>
                  <Text style={styles.bulletItem}>• Your order was damaged or defective upon arrival</Text>
                  <Text style={styles.bulletItem}>• We made an error in your formulation</Text>
                  <Text style={styles.bulletItem}>• Your order was lost during shipping</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Partial Refund Conditions</Text>
                <Text style={styles.text}>Partial refunds may apply in these situations:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Refund requested after 60-day window (50% refund)</Text>
                  <Text style={styles.bulletItem}>• Used portion of subscription services</Text>
                  <Text style={styles.bulletItem}>• Consultation fees for completed medical reviews</Text>
                </View>
              </View>
            </View>

            {/* Refund Process */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. How to Request a Refund</Text>
              
              <View style={styles.processCard}>
                <LinearGradient
                  colors={['#14161A', '#262A31']}
                  style={styles.processGradient}
                >
                  <View style={styles.processStep}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepText}>1</Text>
                    </View>
                    <View style={styles.stepContent}>
                      <Text style={styles.stepTitle}>Contact Support</Text>
                      <Text style={styles.stepDescription}>
                        Email refunds@vita-choice.com or call +1 (555) 123-4567 within 60 days of delivery
                      </Text>
                    </View>
                  </View>

                  <View style={styles.processStep}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepText}>2</Text>
                    </View>
                    <View style={styles.stepContent}>
                      <Text style={styles.stepTitle}>Provide Information</Text>
                      <Text style={styles.stepDescription}>
                        Share your order number, reason for refund, and any relevant documentation
                      </Text>
                    </View>
                  </View>

                  <View style={styles.processStep}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepText}>3</Text>
                    </View>
                    <View style={styles.stepContent}>
                      <Text style={styles.stepTitle}>Return Product</Text>
                      <Text style={styles.stepDescription}>
                        We'll provide a prepaid return label for unopened products (if applicable)
                      </Text>
                    </View>
                  </View>

                  <View style={styles.processStep}>
                    <View style={styles.stepNumber}>
                      <Text style={styles.stepText}>4</Text>
                    </View>
                    <View style={styles.stepContent}>
                      <Text style={styles.stepTitle}>Receive Refund</Text>
                      <Text style={styles.stepDescription}>
                        Refund processed within 5-7 business days after approval
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>

            {/* Refund Timeframes */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Refund Timeframes</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Processing Time</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Review and approval: 1-2 business days</Text>
                  <Text style={styles.bulletItem}>• Credit card refunds: 3-5 business days</Text>
                  <Text style={styles.bulletItem}>• PayPal refunds: 1-2 business days</Text>
                  <Text style={styles.bulletItem}>• Bank transfers: 5-7 business days</Text>
                  <Text style={styles.bulletItem}>• International refunds: 7-10 business days</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Rush Processing</Text>
                <Text style={styles.text}>
                  For urgent refund requests due to medical reasons, we offer expedited processing 
                  within 24-48 hours upon receipt of medical documentation.
                </Text>
              </View>
            </View>

            {/* Subscription Refunds */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Subscription Refunds</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Monthly Subscriptions</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Cancel anytime before next billing cycle</Text>
                  <Text style={styles.bulletItem}>• Pro-rated refunds for unused portion</Text>
                  <Text style={styles.bulletItem}>• No refund for current month if product shipped</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Annual Subscriptions</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Full refund within first 60 days</Text>
                  <Text style={styles.bulletItem}>• Pro-rated refund based on unused months</Text>
                  <Text style={styles.bulletItem}>• Minimum 30-day notice required</Text>
                </View>
              </View>
            </View>

            {/* Non-Refundable Items */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Non-Refundable Services</Text>
              
              <View style={styles.warningCard}>
                <LinearGradient
                  colors={['#FF6B6B20', '#FF637320']}
                  style={styles.warningGradient}
                >
                  <View style={styles.warningHeader}>
                    <Ionicons name="information-circle" size={20} color="#FF6B6B" />
                    <Text style={styles.warningTitle}>Non-Refundable Items</Text>
                  </View>
                  <Text style={styles.warningText}>
                    The following services are non-refundable once completed:
                  </Text>
                  <View style={styles.bulletList}>
                    <Text style={styles.warningBullet}>• Initial consultation and health assessment fees</Text>
                    <Text style={styles.warningBullet}>• Laboratory test processing costs</Text>
                    <Text style={styles.warningBullet}>• One-time formulation design fees</Text>
                    <Text style={styles.warningBullet}>• Expedited processing charges</Text>
                  </View>
                </LinearGradient>
              </View>
            </View>

            {/* Special Circumstances */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Special Circumstances</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Medical Reactions</Text>
                <Text style={styles.text}>
                  If you experience adverse reactions, stop use immediately and contact your healthcare provider. 
                  We provide full refunds for medically documented adverse reactions, regardless of timeframe.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Quality Issues</Text>
                <Text style={styles.text}>
                  Products with quality defects, contamination, or manufacturing errors are eligible for 
                  immediate full refund plus replacement at no additional cost.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Compassionate Refunds</Text>
                <Text style={styles.text}>
                  We review requests for refunds due to financial hardship, serious illness, or other 
                  exceptional circumstances on a case-by-case basis.
                </Text>
              </View>
            </View>

            {/* Contact */}
            <View style={styles.contactCard}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.cardGradient}
              >
                <Text style={styles.cardTitle}>Need a Refund?</Text>
                <Text style={styles.cardDescription}>
                  Our refunds team is here to help process your request quickly and fairly:
                </Text>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Email: </Text>
                    <Text style={styles.contactValue}>refunds@vita-choice.com</Text>
                  </Text>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Phone: </Text>
                    <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
                  </Text>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Hours: </Text>
                    <Text style={styles.contactValue}>Mon-Fri 9AM-6PM EST</Text>
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
  processCard: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginBottom: 16,
  },
  processGradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
  },
  processStep: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accentTeal,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.background,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
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
    marginBottom: 8,
  },
  warningBullet: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 24,
    marginBottom: 4,
    marginLeft: 8,
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