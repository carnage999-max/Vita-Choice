import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface WaitlistModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ visible, onClose }: WaitlistModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to the waitlist API endpoint
      const response = await fetch('https://vita-choice-backend.onrender.com/api/waitlist/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        Alert.alert(
          'Success!', 
          'Thank you for joining our waitlist! We\'ll be in touch soon.',
          [{ text: 'OK', onPress: () => {
            setName('');
            setEmail('');
            onClose();
          }}]
        );
      } else {
        const errorData = await response.text();
        console.error('Waitlist API Error:', response.status, errorData);
        Alert.alert('Error', 'Failed to join waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist Network Error:', error);
      Alert.alert('Error', 'Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        style={styles.overlay} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={['#071018', '#0f1720']}
            style={styles.modal}
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerText}>
                <Text style={styles.title}>Join the waitlist</Text>
                <Text style={styles.subtitle}>
                  Be the first to know when we launch. We'll send exclusive early access and offers.
                </Text>
              </View>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={20} color="#8E8E93" />
              </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Full name (optional)"
                placeholderTextColor="#9fb0c9"
                value={name}
                onChangeText={setName}
              />
              
              <TextInput
                style={styles.input}
                placeholder="you@domain.com"
                placeholderTextColor="#9fb0c9"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.joinButton} 
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text style={styles.joinButtonText}>
                    {isSubmitting ? 'Joining...' : 'Join'}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContainer: {
    width: '90%',
    maxWidth: 400,
  },
  modal: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#0f1720',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9fb0c9',
    lineHeight: 20,
  },
  closeButton: {
    padding: 4,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#0b1317',
    borderWidth: 1,
    borderColor: '#16202a',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  joinButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#071018',
    fontWeight: '600',
    fontSize: 16,
  },
  cancelButton: {
    padding: 8,
  },
  cancelText: {
    color: '#9fb0c9',
    fontSize: 14,
  },
});