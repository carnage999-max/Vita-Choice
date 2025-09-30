import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants';

export const MenuScreen: React.FC = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Learn about our mission and science',
      iconName: 'information-circle-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('About');
      },
    },
    {
      id: 'faq',
      title: 'FAQ',
      subtitle: 'Frequently asked questions',
      iconName: 'help-circle-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('FAQ');
      },
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Get in touch with our team',
      iconName: 'call-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('Contact');
      },
    },
  ];

  const supportItems = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      iconName: 'shield-checkmark-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('PrivacyPolicy');
      },
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      iconName: 'document-text-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('TermsOfService');
      },
    },
    {
      id: 'shipping',
      title: 'Shipping Policy',
      iconName: 'car-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('ShippingPolicy');
      },
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      iconName: 'arrow-back-circle-outline' as const,
      onPress: () => {
        // @ts-ignore
        navigation.navigate('RefundPolicy');
      },
    },
  ];

  const MenuItem = ({ item, isSupport = false }: { item: any; isSupport?: boolean }) => (
    <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
      <LinearGradient
        colors={['#14161A', '#262A31']}
        style={styles.menuItemGradient}
      >
        <View style={styles.menuItemContent}>
          <View style={styles.menuItemLeft}>
            <View style={styles.iconContainer}>
              <Ionicons 
                name={item.iconName} 
                size={24} 
                color={COLORS.accentTeal} 
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              {!isSupport && item.subtitle && (
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
              )}
            </View>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <LinearGradient
            colors={[COLORS.accentTeal, COLORS.accentBlue]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.titleGradient}
          >
            <Text style={styles.titleText}>Menu</Text>
          </LinearGradient>
          <Text style={styles.subtitle}>
            Navigate through our app sections
          </Text>
        </View>

        {/* Main Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Main</Text>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support & Policies</Text>
          {supportItems.map((item) => (
            <MenuItem key={item.id} item={item} isSupport />
          ))}
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>Vita-Choice Mobile</Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
  header: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: 40,
    alignItems: 'center',
  },
  titleGradient: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 12,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.background,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
    marginLeft: 4,
  },
  menuItem: {
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItemGradient: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.textMuted,
    fontWeight: '300',
  },
  appInfo: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: 40,
    alignItems: 'center',
  },
  appInfoText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  versionText: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
});