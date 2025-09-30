import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants';

const { width } = Dimensions.get('window');

interface FloatingTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const FloatingTabBar: React.FC<FloatingTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const getTabIcon = (routeName: string, isFocused: boolean) => {
    const iconColor = isFocused ? COLORS.background : COLORS.textMuted;
    const iconSize = 22;
    
    switch (routeName) {
      case 'Home':
        return (
          <Ionicons 
            name={isFocused ? "home" : "home-outline"} 
            size={iconSize} 
            color={iconColor} 
          />
        );
      case 'Shop':
        return (
          <Ionicons 
            name={isFocused ? "storefront" : "storefront-outline"} 
            size={iconSize} 
            color={iconColor} 
          />
        );
      case 'Menu':
        return (
          <Ionicons 
            name={isFocused ? "menu" : "menu-outline"} 
            size={iconSize} 
            color={iconColor} 
          />
        );
      default:
        return (
          <Ionicons 
            name="ellipse" 
            size={iconSize} 
            color={iconColor} 
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#14161A', '#262A31']}
        style={styles.tabBar}
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined 
            ? options.tabBarLabel 
            : options.title !== undefined 
            ? options.title 
            : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              {isFocused && (
                <LinearGradient
                  colors={[COLORS.accentTeal, COLORS.accentBlue]}
                  style={styles.activeBackground}
                />
              )}
              <View style={styles.tabContent}>
                {getTabIcon(route.name, isFocused)}
                <Text style={[
                  styles.label,
                  { color: isFocused ? COLORS.background : COLORS.textMuted }
                ]}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 1000,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  activeTab: {
    // Active tab styles handled by gradient
  },
  activeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  icon: {
    fontSize: 20,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});