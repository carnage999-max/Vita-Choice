import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GradientButton } from '../components';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

const { width } = Dimensions.get('window');

export const FAQScreen: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How does personalized nutrition work?",
          answer: "Our process starts with comprehensive lab work (blood, saliva, or urine tests) that reveals your unique nutritional needs, genetic variations, and metabolic markers. We then formulate a liquid multivitamin specifically for your body's requirements, adjusting for factors like age, weight, health conditions, and absorption capabilities."
        },
        {
          question: "What lab tests do you recommend?",
          answer: "We work with standard comprehensive metabolic panels, vitamin D, B12, folate, iron studies, and genetic testing for methylation pathways (MTHFR, COMT, etc.). You can use existing lab results from your doctor or order tests through our partner laboratories. Our medical team reviews all results before formulation."
        },
        {
          question: "How long before I see results?",
          answer: "Most customers notice initial improvements in energy and mental clarity within 2-4 weeks. Full optimization typically occurs within 8-12 weeks as your body builds up optimal nutrient stores. We track progress through follow-up assessments and adjust formulations as needed."
        }
      ]
    },
    {
      title: "Product & Formulation",
      faqs: [
        {
          question: "Why liquid instead of pills or capsules?",
          answer: "Liquid formulations offer 95%+ bioavailability compared to 10-20% for most pills. Your body doesn't need to break down capsules or tablets, and nutrients are immediately available for absorption. Plus, we can include precise doses of each nutrient without the size constraints of pills."
        },
        {
          question: "What makes your ingredients different?",
          answer: "We exclusively use methylated, bioidentical forms of vitamins (like 5-MTHF instead of folic acid, methylcobalamin instead of cyanocobalamin). These bypass genetic variations that prevent many people from properly converting synthetic vitamins. All ingredients are third-party tested for purity and potency."
        },
        {
          question: "Are there any artificial ingredients?",
          answer: "Absolutely not. Our formulations contain zero artificial colors, flavors, sweeteners, or preservatives. We use natural fruit extracts for flavor and natural preservatives like vitamin E. Every ingredient serves a nutritional purpose—no fillers or binders."
        },
        {
          question: "How do you ensure product quality?",
          answer: "All products are manufactured in FDA-registered, cGMP-certified facilities. Every batch undergoes third-party testing for heavy metals, microorganisms, and nutrient potency. We maintain complete traceability from raw materials to your bottle."
        }
      ]
    },
    {
      title: "Safety & Medical",
      faqs: [
        {
          question: "Is medical supervision required?",
          answer: "While not required, we strongly recommend working with a healthcare provider. Our medical team reviews all formulations for safety, but your personal physician knows your complete medical history. We provide detailed ingredient lists and dosages for your doctor's review."
        },
        {
          question: "Can I take this with medications?",
          answer: "Our formulations are generally safe with most medications, but nutrient-drug interactions can occur. We flag potential concerns during formulation and recommend discussing with your prescribing physician. Common interactions include blood thinners (vitamin K), thyroid medications (iron, calcium), and certain antibiotics."
        },
        {
          question: "What about pregnancy and breastfeeding?",
          answer: "Pregnant and breastfeeding women have unique nutritional needs that require medical oversight. While our ingredients are high-quality and safe, we require consultation with your OB/GYN before creating prenatal formulations. We can adjust standard formulas for these special circumstances."
        },
        {
          question: "Are there any side effects?",
          answer: "Side effects are rare due to our personalized approach and high-quality ingredients. Some people may experience mild digestive adjustment during the first week. If you experience any concerns, contact our medical team immediately. We can adjust formulations to eliminate any issues."
        }
      ]
    },
    {
      title: "Ordering & Shipping",
      faqs: [
        {
          question: "How does the ordering process work?",
          answer: "1) Complete our health assessment, 2) Upload or order lab work, 3) Our medical team creates your personalized formula, 4) Receive your custom bottle within 7-10 business days. Each bottle is labeled with your name and specific formulation details."
        },
        {
          question: "What are the shipping options?",
          answer: "We offer free standard shipping (5-7 business days) within the US, Canada, EU, UK, and Australia. Express shipping (2-3 days) is available for additional cost. International orders may be subject to customs duties and take 10-14 business days."
        },
        {
          question: "How often will I need to reorder?",
          answer: "Each bottle contains a 30-day supply. We recommend subscription delivery to ensure you never run out. You can adjust, pause, or cancel anytime. We suggest retesting and formula updates every 6-12 months to optimize as your health evolves."
        },
        {
          question: "What's your return policy?",
          answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied, return the bottle (even if empty) for a full refund. Custom formulations make returns rare, but your satisfaction is our priority."
        }
      ]
    },
    {
      title: "Pricing & Subscriptions",
      faqs: [
        {
          question: "How much does Vita-Choice cost?",
          answer: "Pricing varies based on your individual formulation complexity and ingredients needed. Most formulations range from $89-149 per month. While this may seem premium compared to generic multivitamins, you'd need multiple high-quality supplements to match what we provide in one bottle."
        },
        {
          question: "Do you offer subscription discounts?",
          answer: "Yes! Subscription customers save 15% on every order plus get free shipping. You maintain full control—modify, skip, or cancel anytime. Subscribers also get priority access to new features and free periodic formula optimizations."
        },
        {
          question: "Are there additional costs for lab work?",
          answer: "Lab work is separate from your supplement cost. If you have recent labs (within 6 months), there's no additional cost. If you need new testing, our partner labs offer discounted rates ($150-300 depending on tests needed). Many insurance plans cover basic nutritional testing."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay. Subscription customers can also use bank transfers for additional savings. All transactions are encrypted and PCI-compliant."
        }
      ]
    }
  ];

  const handleContactTeam = () => {
    console.log('Navigate to contact screen');
  };

  const handleScheduleConsultation = () => {
    console.log('Schedule consultation');
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
              <Text style={styles.badgeText}>FREQUENTLY ASKED QUESTIONS</Text>
            </View>

            <Text style={styles.heroTitle}>
              Got Questions?{'\n'}
              <Text style={styles.gradientText}>We Have Answers</Text>
            </Text>

            <Text style={styles.heroSubtitle}>
              Everything you need to know about personalized nutrition, our process,
              and how Vita-Choice can transform your health.
            </Text>
          </View>
        </View>

        {/* FAQ Content */}
        <View style={styles.faqContent}>
          {faqCategories.map((category, categoryIndex) => (
            <View key={categoryIndex} style={styles.categorySection}>
              <View style={styles.categoryHeader}>
                <View style={styles.categoryNumber}>
                  <LinearGradient
                    colors={[COLORS.accentTeal, COLORS.accentBlue]}
                    style={styles.categoryNumberBackground}
                  />
                  <Text style={styles.categoryNumberText}>
                    {categoryIndex + 1}
                  </Text>
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </View>

              <View style={styles.faqList}>
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <View key={faqIndex} style={styles.faqItem}>
                      <LinearGradient
                        colors={[COLORS.surface, COLORS.cardBackground]}
                        style={styles.faqItemBackground}
                      />
                      
                      <TouchableOpacity
                        style={styles.faqQuestion}
                        onPress={() => toggleItem(globalIndex)}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.questionText}>{faq.question}</Text>
                        <View style={[
                          styles.expandIcon, 
                          isOpen && styles.expandIconOpen
                        ]}>
                          <Text style={styles.expandIconText}>+</Text>
                        </View>
                      </TouchableOpacity>

                      {isOpen && (
                        <View style={styles.faqAnswer}>
                          <View style={styles.answerDivider} />
                          <Text style={styles.answerText}>{faq.answer}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
        </View>

        {/* Still Have Questions CTA */}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={[COLORS.surface, COLORS.cardBackground]}
            style={styles.ctaSectionBackground}
          />
          
          <LinearGradient
            colors={[`${COLORS.surface}CC`, `${COLORS.cardBackground}CC`]}
            style={styles.ctaBackground}
          />
          
          <Ionicons 
            name="chatbubble-ellipses-outline" 
            size={48} 
            color={COLORS.accentTeal} 
            style={styles.ctaIcon} 
          />
          <Text style={styles.ctaTitle}>Still Have Questions?</Text>
          <Text style={styles.ctaSubtitle}>
            Our medical team and customer success specialists are here to help.
            Get personalized answers to your specific health questions.
          </Text>
          
          <View style={styles.ctaButtons}>
            <GradientButton
              title="Contact Our Team"
              onPress={handleContactTeam}
              size="large"
              style={styles.ctaPrimaryButton}
            />
            
            <GradientButton
              title="Schedule Consultation"
              onPress={handleScheduleConsultation}
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
    left: '10%',
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
    color: COLORS.accentTeal,
  },
  heroSubtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: width - SPACING.xxl,
  },
  faqContent: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  categorySection: {
    marginBottom: SPACING.xxl,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  categoryNumber: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.sm,
    marginRight: SPACING.md,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryNumberBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.sm,
  },
  categoryNumberText: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '700',
    color: COLORS.background,
    zIndex: 1,
  },
  categoryTitle: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.textPrimary,
    flex: 1,
  },
  faqList: {
    gap: SPACING.md,
  },
  faqItem: {
    position: 'relative',
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  faqItemBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.lg,
    zIndex: 1,
  },
  questionText: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
    flex: 1,
    marginRight: SPACING.md,
  },
  expandIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '0deg' }],
  },
  expandIconOpen: {
    borderColor: COLORS.accentTeal,
    backgroundColor: `${COLORS.accentTeal}10`,
    transform: [{ rotate: '45deg' }],
  },
  expandIconText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  faqAnswer: {
    zIndex: 1,
  },
  answerDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.lg,
  },
  answerText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    lineHeight: 22,
    padding: SPACING.lg,
  },
  ctaSection: {
    position: 'relative',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  ctaSectionBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ctaBackground: {
    position: 'absolute',
    top: SPACING.xl,
    left: SPACING.xl,
    right: SPACING.xl,
    bottom: SPACING.xl,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}33`,
  },
  ctaIcon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    zIndex: 1,
  },
  ctaTitle: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.md,
    zIndex: 1,
  },
  ctaSubtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.xl,
    maxWidth: width - SPACING.xxl * 2,
    alignSelf: 'center',
    zIndex: 1,
  },
  ctaButtons: {
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