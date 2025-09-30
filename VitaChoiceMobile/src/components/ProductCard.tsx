import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Product } from '../types';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../constants';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - SPACING.xl * 3) / 2; // Two cards per row with spacing

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(product)}
      activeOpacity={0.9}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        
        <Text style={styles.category} numberOfLines={1}>
          {product.category}
        </Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {formatPrice(product.price)}
          </Text>
          {product.originalPrice && product.originalPrice > product.price && (
            <Text style={styles.originalPrice}>
              {formatPrice(product.originalPrice)}
            </Text>
          )}
        </View>
        
        {product.inStock ? (
          <View style={styles.stockBadge}>
            <Text style={styles.inStockText}>In Stock</Text>
          </View>
        ) : (
          <View style={[styles.stockBadge, styles.outOfStockBadge]}>
            <Text style={styles.outOfStockText}>Out of Stock</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    height: 140,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS.lg,
    borderTopRightRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: SPACING.md,
  },
  name: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: SPACING.xs,
    minHeight: 44, // Ensure consistent height for 2 lines
  },
  category: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.accentTeal,
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  price: {
    fontSize: TYPOGRAPHY.h6,
    fontWeight: '700',
    color: COLORS.white,
    marginRight: SPACING.xs,
  },
  originalPrice: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    textDecorationLine: 'line-through',
  },
  stockBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.accentTeal,
    alignSelf: 'flex-start',
  },
  outOfStockBadge: {
    backgroundColor: COLORS.error,
  },
  inStockText: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '500',
    color: COLORS.black,
  },
  outOfStockText: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '500',
    color: COLORS.white,
  },
});