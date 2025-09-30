import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GradientButton } from '../components';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';

export const TestScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎉 Vita Choice Mobile App</Text>
        <Text style={styles.subtitle}>React Native Implementation</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✅ Features Implemented:</Text>
          <Text style={styles.feature}>• Product listing with API integration</Text>
          <Text style={styles.feature}>• Product detail screens</Text>
          <Text style={styles.feature}>• Gradient buttons matching website design</Text>
          <Text style={styles.feature}>• Loading and error states</Text>
          <Text style={styles.feature}>• Fallback data for offline mode</Text>
          <Text style={styles.feature}>• Dark theme design system</Text>
          <Text style={styles.feature}>• Navigation structure</Text>
        </View>

        <View style={styles.buttonContainer}>
          <GradientButton
            title="Test Primary Button"
            onPress={() => console.log('Primary button pressed')}
            size="medium"
          />
          
          <GradientButton
            title="Test Secondary Button"
            onPress={() => console.log('Secondary button pressed')}
            variant="outline"
            size="medium"
            style={styles.button}
          />
        </View>

        <View style={styles.statusSection}>
          <Text style={styles.statusTitle}>🚀 Development Status</Text>
          <Text style={styles.statusText}>
            The app is successfully running with Expo and ready for testing on physical devices or simulators.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.xl,
  },
  title: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.h5,
    color: COLORS.accentTeal,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  section: {
    marginBottom: SPACING.xl,
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.h5,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  feature: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
    paddingLeft: SPACING.sm,
  },
  buttonContainer: {
    marginBottom: SPACING.xl,
  },
  button: {
    marginTop: SPACING.md,
  },
  statusSection: {
    padding: SPACING.lg,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accentTeal,
  },
  statusTitle: {
    fontSize: TYPOGRAPHY.h6,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  statusText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textMuted,
    lineHeight: 22,
  },
});