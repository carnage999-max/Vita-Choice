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

export const ShippingPolicyScreen: React.FC = () => {
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
              <Ionicons name="car" size={16} color={COLORS.accentTeal} />
              <Text style={styles.badgeText}>SHIPPING POLICY</Text>
            </View>
            <Text style={styles.title}>Shipping Policy</Text>
            <Text style={styles.subtitle}>Fast, secure global delivery</Text>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <LinearGradient
              colors={['#14161A', '#262A31']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardTitle}>Worldwide Delivery</Text>
              <Text style={styles.cardDescription}>
                We ship personalized supplements worldwide with secure, temperature-controlled packaging. 
                Your custom formulations are carefully prepared and shipped to maintain maximum potency.
              </Text>
            </LinearGradient>
          </View>

          {/* Sections */}
          <View style={styles.sections}>
            {/* Shipping Coverage */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Shipping Coverage</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Domestic Shipping (United States)</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• All 50 states and territories</Text>
                  <Text style={styles.bulletItem}>• Standard delivery: 3-5 business days</Text>
                  <Text style={styles.bulletItem}>• Express delivery: 1-2 business days</Text>
                  <Text style={styles.bulletItem}>• FREE shipping on orders over $75</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>International Shipping</Text>
                <Text style={styles.text}>We ship to over 50 countries worldwide, including:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Canada: 5-7 business days</Text>
                  <Text style={styles.bulletItem}>• European Union: 7-10 business days</Text>
                  <Text style={styles.bulletItem}>• United Kingdom: 5-8 business days</Text>
                  <Text style={styles.bulletItem}>• Australia & New Zealand: 8-12 business days</Text>
                  <Text style={styles.bulletItem}>• Other regions: 10-15 business days</Text>
                </View>
              </View>
            </View>

            {/* Shipping Costs */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Shipping Costs</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Domestic Rates (US)</Text>
                <View style={styles.rateCard}>
                  <LinearGradient
                    colors={['#14161A', '#262A31']}
                    style={styles.rateGradient}
                  >
                    <Text style={styles.rateItem}>Standard Shipping: $8.99</Text>
                    <Text style={styles.rateItem}>Express Shipping: $19.99</Text>
                    <Text style={styles.rateItem}>Overnight Shipping: $29.99</Text>
                    <Text style={styles.freeShipping}>FREE on orders $75+</Text>
                  </LinearGradient>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>International Rates</Text>
                <Text style={styles.text}>International shipping rates vary by destination and package weight:</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Canada: $15.99 - $24.99</Text>
                  <Text style={styles.bulletItem}>• Europe: $19.99 - $34.99</Text>
                  <Text style={styles.bulletItem}>• Other regions: $24.99 - $49.99</Text>
                </View>
              </View>
            </View>

            {/* Processing Time */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Processing & Preparation</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Custom Formulation</Text>
                <Text style={styles.text}>
                  Each order requires personalized formulation based on your health profile:
                </Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Medical review: 1-2 business days</Text>
                  <Text style={styles.bulletItem}>• Custom formulation: 2-3 business days</Text>
                  <Text style={styles.bulletItem}>• Quality testing: 1 business day</Text>
                  <Text style={styles.bulletItem}>• Packaging & shipping: 1 business day</Text>
                </View>
                <Text style={styles.text}>
                  Total processing time: 5-7 business days before shipment
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Rush Processing</Text>
                <Text style={styles.text}>
                  Rush processing is available for urgent orders ($25 fee) and reduces processing time to 2-3 business days. 
                  Subject to medical team availability and approval.
                </Text>
              </View>
            </View>

            {/* Packaging & Handling */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Packaging & Temperature Control</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Secure Packaging</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Temperature-controlled insulated boxes</Text>
                  <Text style={styles.bulletItem}>• Gel packs for climate-sensitive formulations</Text>
                  <Text style={styles.bulletItem}>• Tamper-evident sealing</Text>
                  <Text style={styles.bulletItem}>• Discrete packaging for privacy</Text>
                  <Text style={styles.bulletItem}>• Eco-friendly, recyclable materials</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Special Handling</Text>
                <Text style={styles.text}>
                  Some formulations may require special handling or refrigeration during transport. 
                  We automatically apply appropriate packaging based on your specific formulation.
                </Text>
              </View>
            </View>

            {/* Delivery & Tracking */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Delivery & Tracking</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Tracking Information</Text>
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• Tracking number provided when shipped</Text>
                  <Text style={styles.bulletItem}>• Real-time tracking via email and SMS</Text>
                  <Text style={styles.bulletItem}>• Delivery confirmation required</Text>
                  <Text style={styles.bulletItem}>• Photo proof of delivery available</Text>
                </View>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Delivery Attempts</Text>
                <Text style={styles.text}>
                  If delivery is unsuccessful, carriers will make 2-3 additional attempts. 
                  Packages not delivered after final attempt will be returned to our facility.
                </Text>
              </View>
            </View>

            {/* Issues & Returns */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Shipping Issues</Text>
              
              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Lost or Damaged Packages</Text>
                <Text style={styles.text}>
                  We take full responsibility for packages lost or damaged during shipping. 
                  Contact us immediately if your package arrives damaged or doesn't arrive within expected timeframe.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Incorrect Address</Text>
                <Text style={styles.text}>
                  Packages shipped to incorrect addresses due to customer error may incur additional shipping charges 
                  for reshipment. Please verify your address carefully before placing orders.
                </Text>
              </View>

              <View style={styles.subsection}>
                <Text style={styles.subsectionTitle}>Customs & Duties</Text>
                <Text style={styles.text}>
                  International customers are responsible for any customs duties, taxes, or fees imposed by their country. 
                  These charges are separate from shipping costs and not collected by Vita-Choice.
                </Text>
              </View>
            </View>

            {/* Contact */}
            <View style={styles.contactCard}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.cardGradient}
              >
                <Text style={styles.cardTitle}>Shipping Questions?</Text>
                <Text style={styles.cardDescription}>
                  Contact our shipping team for assistance with orders, tracking, or delivery issues:
                </Text>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactItem}>
                    <Text style={styles.contactLabel}>Email: </Text>
                    <Text style={styles.contactValue}>shipping@vita-choice.com</Text>
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
  rateCard: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    marginTop: 8,
  },
  rateGradient: {
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
  },
  rateItem: {
    fontSize: 15,
    color: COLORS.textMuted,
    marginBottom: 8,
  },
  freeShipping: {
    fontSize: 15,
    color: COLORS.accentTeal,
    fontWeight: '600',
    marginTop: 4,
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