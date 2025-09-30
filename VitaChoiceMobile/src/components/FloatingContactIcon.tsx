import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';

const { width, height } = Dimensions.get('window');

export const FloatingContactIcon: React.FC = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5;
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          // @ts-ignore
          x: pan.x._value,
          // @ts-ignore
          y: pan.y._value,
        });
        Animated.spring(scale, {
          toValue: 1.1,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        pan.flattenOffset();
        
        // Snap to edges
        // @ts-ignore
        const newX = pan.x._value;
        // @ts-ignore
        const newY = pan.y._value;
        
        // Boundary checks
        const maxX = width - 70;
        const maxY = height - 200;
        const minX = 0;
        const minY = 100;
        
        let finalX = newX;
        let finalY = newY;
        
        if (newX < width / 2) {
          finalX = 20; // Snap to left
        } else {
          finalX = maxX - 20; // Snap to right
        }
        
        if (newY < minY) finalY = minY;
        if (newY > maxY) finalY = maxY;
        
        Animated.parallel([
          Animated.spring(pan, {
            toValue: { x: finalX, y: finalY },
            useNativeDriver: false,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: false,
          }),
        ]).start();
      },
    })
  ).current;

  const quickActions = [
    {
      id: 'contact',
      title: 'Contact Us',
      iconName: 'call-outline' as const,
      onPress: () => {
        setIsExpanded(false);
        // @ts-ignore
        navigation.navigate('Contact');
      },
    },
    {
      id: 'faq',
      title: 'FAQ',
      iconName: 'help-circle-outline' as const,
      onPress: () => {
        setIsExpanded(false);
        // @ts-ignore
        navigation.navigate('FAQ');
      },
    },
    {
      id: 'support',
      title: 'Support',
      iconName: 'chatbubble-outline' as const,
      onPress: () => {
        setIsExpanded(false);
        // Handle support chat or email
      },
    },
  ];

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              { translateX: pan.x },
              { translateY: pan.y },
              { scale: scale },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
          style={styles.mainButton}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[COLORS.accentTeal, COLORS.accentBlue]}
            style={styles.buttonGradient}
          >
            {isExpanded ? (
              <Ionicons name="close" size={24} color={COLORS.background} />
            ) : (
              <Ionicons name="chatbubble" size={24} color={COLORS.background} />
            )}
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

      {/* Expanded Menu Modal */}
      <Modal
        visible={isExpanded}
        transparent
        animationType="fade"
        onRequestClose={() => setIsExpanded(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsExpanded(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={[
                  styles.expandedMenu,
                  {
                    transform: [
                      { translateX: pan.x },
                      { translateY: pan.y },
                    ],
                  },
                ]}
              >
                {quickActions.map((action, index) => (
                  <TouchableOpacity
                    key={action.id}
                    style={[
                      styles.actionButton,
                      { 
                        transform: [
                          { 
                            translateY: -60 * (index + 1) 
                          }
                        ] 
                      }
                    ]}
                    onPress={action.onPress}
                  >
                    <LinearGradient
                      colors={['#14161A', '#262A31']}
                      style={styles.actionGradient}
                    >
                      <Ionicons 
                        name={action.iconName} 
                        size={20} 
                        color={COLORS.textPrimary} 
                      />
                    </LinearGradient>
                    <Text style={styles.actionLabel}>{action.title}</Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 120, // Above the floating tab bar
    zIndex: 1001,
  },
  mainButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12,
  },
  buttonGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainIcon: {
    fontSize: 24,
    color: COLORS.background,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  expandedMenu: {
    position: 'absolute',
    right: 20,
    bottom: 120,
  },
  actionButton: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: 0,
  },
  actionGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textPrimary,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});