import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to the newsletter API endpoint
      const response = await fetch('https://vita-choice-backend.onrender.com/api/newsletter/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Alert.alert(
          'Success!', 
          'Thank you for subscribing! You\'ll receive our latest updates and exclusive offers.',
          [{ text: 'OK', onPress: () => setEmail('') }]
        );
      } else {
        const errorData = await response.text();
        console.error('Newsletter API Error:', response.status, errorData);
        Alert.alert('Error', 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter Network Error:', error);
      Alert.alert('Error', 'Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LinearGradient
      colors={['#071018', '#0B0C0E']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.title}>Stay in the Loop</Text>
        <Text style={styles.subtitle}>
          Join our early access list to get launch updates, exclusive discounts,
          and clinical insights. No spam — only what matters.
        </Text>

        {/* Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#B7C0CD"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          <TouchableOpacity 
            style={styles.subscribeButton} 
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            <LinearGradient
              colors={['#2EE6D6', '#2EA7FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Privacy text */}
        <Text style={styles.privacyText}>
          You can unsubscribe anytime. Your privacy is always protected.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  content: {
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#B7C0CD',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    maxWidth: 500,
  },
  formContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#0B0C0E',
    borderWidth: 1,
    borderColor: '#16202a',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  subscribeButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
  },
  privacyText: {
    fontSize: 12,
    color: '#9fb0c9',
    textAlign: 'center',
    opacity: 0.75,
  },
});