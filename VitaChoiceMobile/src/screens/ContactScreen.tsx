import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GradientButton } from '../components';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

const { width } = Dimensions.get('window');

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    inquiry_type: 'general',
    message: '',
    consent: false
  });

  const contactMethods = [
    {
      iconName: "mail-outline" as const,
      title: "Email Support",
      description: "Get detailed answers to your questions",
      contact: "support@vita-choice.com",
      responseTime: "24-48 hours"
    },
    {
      iconName: "call-outline" as const,
      title: "Phone Consultation",
      description: "Speak directly with our medical team",
      contact: "+1 (555) 123-4567",
      responseTime: "Mon-Fri 9AM-6PM EST"
    },
    {
      iconName: "chatbubble-outline" as const,
      title: "Live Chat",
      description: "Instant answers to quick questions",
      contact: "Available on website",
      responseTime: "Mon-Fri 9AM-9PM EST"
    },
    {
      iconName: "medical-outline" as const,
      title: "Medical Review",
      description: "Complex health questions require review",
      contact: "medical@vita-choice.com",
      responseTime: "3-5 business days"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Health Plaza, Suite 450",
      address2: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@vita-choice.com"
    },
    {
      city: "Los Angeles",
      address: "456 Wellness Boulevard",
      address2: "Los Angeles, CA 90210",
      phone: "+1 (555) 987-6543",
      email: "la@vita-choice.com"
    },
    {
      city: "London",
      address: "789 Nutrition Street",
      address2: "London, UK SW1A 1AA",
      phone: "+44 20 7123 4567",
      email: "london@vita-choice.com"
    }
  ];

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.consent) {
      Alert.alert('Missing Information', 'Please fill in all required fields and accept the consent.');
      return;
    }

    try {
      // Submit to the API endpoint
      const response = await fetch('https://vita-choice-backend.onrender.com/api/contact/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Alert.alert('Success', 'Your message has been sent successfully!');
        console.log('Form submitted successfully:', formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          subject: '',
          inquiry_type: 'general',
          message: '',
          consent: false
        });
      } else {
        const errorData = await response.text();
        console.error('API Error:', response.status, errorData);
        Alert.alert('Error', 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      Alert.alert('Error', 'Network error. Please check your connection and try again.');
    }
  };

  const handlePhoneCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
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
              <Text style={styles.badgeText}>GET IN TOUCH</Text>
            </View>

            <Text style={styles.heroTitle}>
              Let's Talk About{'\n'}
              <Text style={styles.gradientText}>Your Health Goals</Text>
            </Text>

            <Text style={styles.heroSubtitle}>
              Our team of nutritional scientists and medical professionals
              is here to guide you on your personalized wellness journey.
            </Text>
          </View>
        </View>

        {/* Contact Methods */}
        <View style={styles.contactMethodsSection}>
          <View style={styles.contactMethodsGrid}>
            {contactMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={styles.contactMethodCard}
                activeOpacity={0.8}
                onPress={() => {
                  if (method.contact.includes('@')) {
                    handleEmailPress(method.contact);
                  } else if (method.contact.includes('+')) {
                    handlePhoneCall(method.contact);
                  }
                }}
              >
                <LinearGradient
                  colors={[COLORS.surface, COLORS.cardBackground]}
                  style={styles.contactMethodBackground}
                />
                <Ionicons 
                  name={method.iconName} 
                  size={32} 
                  color={COLORS.accentTeal} 
                  style={styles.contactMethodIcon} 
                />
                <Text style={styles.contactMethodTitle}>{method.title}</Text>
                <Text style={styles.contactMethodDescription}>{method.description}</Text>
                <Text style={styles.contactMethodContact}>{method.contact}</Text>
                <Text style={styles.contactMethodTime}>{method.responseTime}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <LinearGradient
            colors={[COLORS.surface, COLORS.cardBackground]}
            style={styles.formBackground}
          />
          
          <Text style={styles.formTitle}>Send Us a Message</Text>

          <View style={styles.formRow}>
            <View style={styles.formHalfWidth}>
              <Text style={styles.inputLabel}>Full Name *</Text>
              <TextInput
                style={styles.textInput}
                value={formData.name}
                onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                placeholder="Your full name"
                placeholderTextColor={COLORS.textMuted}
              />
            </View>

            <View style={styles.formHalfWidth}>
              <Text style={styles.inputLabel}>Email Address *</Text>
              <TextInput
                style={styles.textInput}
                value={formData.email}
                onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                placeholder="your.email@example.com"
                placeholderTextColor={COLORS.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.formHalfWidth}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.textInput}
                value={formData.phone_number}
                onChangeText={(text) => setFormData(prev => ({ ...prev, phone_number: text }))}
                placeholder="+1 (555) 123-4567"
                placeholderTextColor={COLORS.textMuted}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.formHalfWidth}>
              <Text style={styles.inputLabel}>Inquiry Type</Text>
              <View style={styles.selectContainer}>
                <Text style={styles.selectText}>
                  {formData.inquiry_type === 'general' ? 'General Questions' :
                   formData.inquiry_type === 'medical' ? 'Medical/Health Questions' :
                   formData.inquiry_type === 'technical' ? 'Technical Support' :
                   formData.inquiry_type === 'billing' ? 'Billing & Orders' :
                   formData.inquiry_type === 'partnership' ? 'Partnerships' :
                   'Media Inquiries'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.formFullWidth}>
            <Text style={styles.inputLabel}>Subject *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.subject}
              onChangeText={(text) => setFormData(prev => ({ ...prev, subject: text }))}
              placeholder="Brief subject line"
              placeholderTextColor={COLORS.textMuted}
            />
          </View>

          <View style={styles.formFullWidth}>
            <Text style={styles.inputLabel}>Message *</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={formData.message}
              onChangeText={(text) => setFormData(prev => ({ ...prev, message: text }))}
              placeholder="Please provide as much detail as possible about your question or concern..."
              placeholderTextColor={COLORS.textMuted}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.consentContainer}>
            <TouchableOpacity
              style={[styles.checkbox, formData.consent && styles.checkboxChecked]}
              onPress={() => setFormData(prev => ({ ...prev, consent: !prev.consent }))}
            >
              {formData.consent && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.consentText}>
              I agree to receive communications from Vita-Choice and understand that my information
              will be processed according to the{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>.
              I can unsubscribe at any time.
            </Text>
          </View>

          <GradientButton
            title="Send Message"
            onPress={handleSubmit}
            size="large"
            style={styles.submitButton}
          />
        </View>

        {/* Office Locations */}
        <View style={styles.locationsSection}>
          <Text style={styles.sectionTitle}>Our Locations</Text>
          
          {officeLocations.map((location, index) => (
            <View key={index} style={styles.locationCard}>
              <LinearGradient
                colors={[COLORS.surface, COLORS.cardBackground]}
                style={styles.locationCardBackground}
              />
              
              <Text style={styles.locationCity}>{location.city}</Text>
              <Text style={styles.locationAddress}>{location.address}</Text>
              <Text style={styles.locationAddress}>{location.address2}</Text>
              
              <TouchableOpacity
                style={styles.locationContact}
                onPress={() => handlePhoneCall(location.phone)}
              >
                <Ionicons name="call" size={18} color={COLORS.accentTeal} />
                <Text style={styles.locationPhone}>{location.phone}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.locationContact}
                onPress={() => handleEmailPress(location.email)}
              >
                <Ionicons name="mail" size={18} color={COLORS.accentTeal} />
                <Text style={styles.locationEmail}>{location.email}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Business Hours */}
        <View style={styles.businessHoursSection}>
          <LinearGradient
            colors={[COLORS.surface, COLORS.cardBackground]}
            style={styles.businessHoursBackground}
          />
          
          <Text style={styles.businessHoursTitle}>Business Hours</Text>
          
          <View style={styles.hoursRow}>
            <Text style={styles.hoursDay}>Monday - Friday</Text>
            <Text style={styles.hoursTime}>9:00 AM - 6:00 PM EST</Text>
          </View>
          
          <View style={styles.hoursRow}>
            <Text style={styles.hoursDay}>Saturday</Text>
            <Text style={styles.hoursTime}>10:00 AM - 4:00 PM EST</Text>
          </View>
          
          <View style={styles.hoursRow}>
            <Text style={styles.hoursDay}>Sunday</Text>
            <Text style={styles.hoursClosed}>Closed</Text>
          </View>
          
          <Text style={styles.emergencyNote}>
            Emergency medical questions are reviewed within 24 hours,
            including weekends and holidays.
          </Text>
        </View>

        {/* Emergency Contact */}
        <View style={styles.emergencySection}>
          <LinearGradient
            colors={['#FF5A5F10', '#FF5A5F05']}
            style={styles.emergencyBackground}
          />
          
          <Text style={styles.emergencyIcon}>🚨</Text>
          <Text style={styles.emergencyTitle}>Medical Emergency?</Text>
          <Text style={styles.emergencyText}>
            For serious adverse reactions or medical emergencies, contact your physician immediately
            or call emergency services. Do not rely on email or contact forms for urgent medical issues.
          </Text>
          
          <View style={styles.emergencyButtons}>
            <TouchableOpacity
              style={styles.emergencyButton}
              onPress={() => handlePhoneCall('911')}
            >
              <Text style={styles.emergencyButtonText}>Emergency: 911</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.emergencySecondaryButton}
              onPress={() => handlePhoneCall('+15551234567')}
            >
              <Text style={styles.emergencySecondaryButtonText}>Medical Hotline: +1 (555) 123-4567</Text>
            </TouchableOpacity>
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
  contactMethodsSection: {
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  contactMethodsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactMethodCard: {
    width: '48%',
    position: 'relative',
    marginBottom: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  contactMethodBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  contactMethodIcon: {
    fontSize: 32,
    marginBottom: SPACING.md,
  },
  contactMethodTitle: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  contactMethodDescription: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  contactMethodContact: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '600',
    color: COLORS.accentTeal,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  contactMethodTime: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  formSection: {
    position: 'relative',
    margin: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  formBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  formTitle: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xl,
    zIndex: 1,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
    zIndex: 1,
  },
  formHalfWidth: {
    width: '48%',
  },
  formFullWidth: {
    width: '100%',
    marginBottom: SPACING.lg,
    zIndex: 1,
  },
  inputLabel: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.background,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
  },
  selectText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textPrimary,
  },
  consentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.xl,
    zIndex: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 4,
    marginRight: SPACING.md,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  checkboxChecked: {
    backgroundColor: COLORS.accentTeal,
    borderColor: COLORS.accentTeal,
  },
  checkmark: {
    color: COLORS.background,
    fontSize: 12,
    fontWeight: 'bold',
  },
  consentText: {
    flex: 1,
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    lineHeight: 18,
  },
  linkText: {
    color: COLORS.accentTeal,
  },
  submitButton: {
    width: '100%',
    zIndex: 1,
  },
  locationsSection: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.lg,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xl,
  },
  locationCard: {
    position: 'relative',
    marginBottom: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  locationCardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  locationCity: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.accentTeal,
    marginBottom: SPACING.sm,
    zIndex: 1,
  },
  locationAddress: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
    zIndex: 1,
  },
  locationContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
    zIndex: 1,
  },
  contactIcon: {
    fontSize: 16,
    marginRight: SPACING.sm,
  },
  locationPhone: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textPrimary,
  },
  locationEmail: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.accentTeal,
  },
  businessHoursSection: {
    position: 'relative',
    margin: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  businessHoursBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  businessHoursTitle: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    zIndex: 1,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
    zIndex: 1,
  },
  hoursDay: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
  },
  hoursTime: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textPrimary,
  },
  hoursClosed: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
  },
  emergencyNote: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textMuted,
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    zIndex: 1,
  },
  emergencySection: {
    position: 'relative',
    margin: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.xl,
    borderWidth: 1,
    borderColor: '#FF5A5F33',
    alignItems: 'center',
  },
  emergencyBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BORDER_RADIUS.xl,
  },
  emergencyIcon: {
    fontSize: 32,
    marginBottom: SPACING.md,
    zIndex: 1,
  },
  emergencyTitle: {
    fontSize: TYPOGRAPHY.h5,
    fontWeight: '700',
    color: COLORS.error,
    marginBottom: SPACING.md,
    textAlign: 'center',
    zIndex: 1,
  },
  emergencyText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    zIndex: 1,
  },
  emergencyButtons: {
    width: '100%',
    gap: SPACING.md,
    zIndex: 1,
  },
  emergencyButton: {
    backgroundColor: COLORS.error,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  emergencyButtonText: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.white,
  },
  emergencySecondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.error,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  emergencySecondaryButtonText: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.error,
  },
});