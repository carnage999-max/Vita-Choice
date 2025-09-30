import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { 
  HomeScreen, 
  ShopScreen, 
  AboutScreen, 
  ContactScreen, 
  FAQScreen,
  MenuScreen,
  PrivacyPolicyScreen,
  TermsOfServiceScreen,
  ShippingPolicyScreen,
  RefundPolicyScreen
} from './src/screens';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { FloatingTabBar } from './src/components/FloatingTabBar';
import { FloatingContactIcon } from './src/components/FloatingContactIcon';
import { ModernHeader } from './src/components/ModernHeader';
import { COLORS } from './src/constants';

export type RootStackParamList = {
  Main: undefined;
  ProductDetail: { productId: number };
  About: undefined;
  Contact: undefined;
  FAQ: undefined;
  PrivacyPolicy: undefined;
  TermsOfService: undefined;
  ShippingPolicy: undefined;
  RefundPolicy: undefined;
};

export type TabParamList = {
  Home: undefined;
  Shop: undefined;
  Menu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
        },
        headerTintColor: COLORS.textPrimary,
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Vita Choice',
          headerShown: false, // Hide header for home to show custom content
        }}
      />
      <Tab.Screen 
        name="Shop" 
        component={ShopScreen}
        options={{
          title: 'Shop Products',
          headerShown: true,
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen}
        options={{
          title: 'Menu',
          headerShown: false, // Menu screen has its own header
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={COLORS.background} />
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.background,
              borderBottomWidth: 0, // Remove default border
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
            },
            headerTintColor: COLORS.textPrimary,
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 18,
            },
            cardStyle: { backgroundColor: COLORS.background },
          }}
        >
          <Stack.Screen 
            name="Main" 
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="ProductDetail" 
            component={ProductDetailScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Product Details"
                  subtitle="Supplement information"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="About" 
            component={AboutScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="About Us"
                  subtitle="Our mission & science"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="Contact" 
            component={ContactScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Contact"
                  subtitle="Get in touch"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="FAQ" 
            component={FAQScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="FAQ"
                  subtitle="Common questions"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="PrivacyPolicy" 
            component={PrivacyPolicyScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Privacy Policy"
                  subtitle="Your data protection"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="TermsOfService" 
            component={TermsOfServiceScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Terms of Service"
                  subtitle="Service agreement"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="ShippingPolicy" 
            component={ShippingPolicyScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Shipping Policy"
                  subtitle="Worldwide delivery"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
          <Stack.Screen 
            name="RefundPolicy" 
            component={RefundPolicyScreen}
            options={({ navigation }) => ({
              header: () => (
                <ModernHeader
                  title="Refund Policy"
                  subtitle="Satisfaction guarantee"
                  onBackPress={() => navigation.goBack()}
                  animated={true}
                />
              ),
            })}
          />
        </Stack.Navigator>
        
        {/* Floating Contact Icon */}
        <FloatingContactIcon />
      </View>
    </NavigationContainer>
  );
}
