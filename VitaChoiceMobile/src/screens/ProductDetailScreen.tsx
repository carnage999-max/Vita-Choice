import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants';

const { width } = Dimensions.get('window');

interface RouteParams {
  productId: number | string;
}

// Interface for API product response
interface ApiProduct {
  id: string;
  name: string;
  subtitle: string | null;
  price: string;
  original_price: string | null;
  category: string;
  image: string;
  rating: string;
  review_count: number;
  description: string;
  short_description: string;
  key_actives: string[];
  free_from: string[];
  benefits: string[];
  serving_size: string | null;
  servings_per_bottle: string | null;
  faqs: Array<{ question: string; answer: string }>;
  usage: string;
  created_at: string;
  updated_at: string;
}

// Interface for internal product structure
interface Product {
  id: number | string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  benefits: string[];
  keyActives: string[];
  freeFrom: string[];
  servingSize: string | null;
  servingsPerBottle: number | null;
  usage: string;
  isBestseller?: boolean;
  faqs: Array<{ question: string; answer: string }>;
}

// Function to transform API product to internal product structure
const transformApiProduct = (apiProduct: ApiProduct): Product => ({
  id: apiProduct.id,
  name: apiProduct.name,
  subtitle: apiProduct.subtitle || "",
  price: parseFloat(apiProduct.price),
  originalPrice: apiProduct.original_price ? parseFloat(apiProduct.original_price) : parseFloat(apiProduct.price),
  category: apiProduct.category,
  image: apiProduct.image,
  rating: parseFloat(apiProduct.rating),
  reviewCount: apiProduct.review_count,
  description: apiProduct.description,
  shortDescription: apiProduct.short_description,
  benefits: apiProduct.benefits || [],
  keyActives: apiProduct.key_actives || [],
  freeFrom: apiProduct.free_from || [],
  servingSize: apiProduct.serving_size,
  servingsPerBottle: apiProduct.servings_per_bottle ? parseInt(apiProduct.servings_per_bottle) : null,
  usage: apiProduct.usage,
  isBestseller: false,
  faqs: apiProduct.faqs || []
});

// Fallback products data
const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Vita-Choice™ Core Liquid Multivitamin",
    subtitle: "Fully Methylated",
    price: 149,
    originalPrice: 179,
    category: "Daily Essentials",
    image: "https://via.placeholder.com/400x400/2EE6D6/FFFFFF?text=Core+Vitamin",
    rating: 4.9,
    reviewCount: 2847,
    description: "A premium, fully methylated, gluten-free, vegan liquid multivitamin base with synergistic cofactors and superfoods (spirulina, seaweed). Designed for high bioavailability and gentle daily use.",
    shortDescription: "One premium liquid base. Fully methylated B-complex, bioavailable minerals, and synergistic co-factors for whole-body support. Clean, efficient, daily.",
    benefits: [
      "Energy metabolism support",
      "Cognitive clarity enhancement",
      "Stress resilience building",
      "Immune system support",
    ],
    keyActives: [
      "Methylfolate (5-MTHF) - 400mcg",
      "Methylcobalamin (B12) - 500mcg",
      "P5P (Active B6) - 25mg",
      "Chelated Magnesium - 200mg",
      "Zinc (Bisglycinate) - 15mg",
      "Selenium (Methionine) - 200mcg",
    ],
    freeFrom: ["Gluten", "Artificial colors", "Artificial sweeteners", "GMOs", "Dairy", "Soy"],
    servingSize: "1 tablespoon (15ml)",
    servingsPerBottle: 30,
    usage: "Take 1 tablespoon daily with food, preferably in the morning. Can be taken directly or mixed with water or juice.",
    isBestseller: true,
    faqs: [
      {
        question: "How is this different from regular multivitamins?",
        answer: "Our liquid formula uses fully methylated forms of vitamins that bypass genetic variations (like MTHFR) that prevent proper absorption of synthetic vitamins. Plus, liquid absorption is 95%+ vs 10-20% for pills."
      },
      {
        question: "Is this safe to take with medications?",
        answer: "While generally safe, we recommend consulting your healthcare provider before starting any new supplement, especially if you take medications or have health conditions."
      }
    ]
  }
];

export const ProductDetailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params as RouteParams;

  // State for product data
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Local UI state
  const [activeTab, setActiveTab] = useState("overview");
  const [quantity, setQuantity] = useState(1);

  // Fetch single product from API
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        navigation.goBack();
        return;
      }

      try {
        setLoading(true);
        setError(null);
        console.log('🔍 Fetching product with ID:', productId);
        
        const response = await fetch(`https://vita-choice-backend.onrender.com/api/product//${productId}/`);
        console.log('🚀 API Request: GET /product//' + productId + '/');
        
        if (!response.ok) {
          console.error('❌ API Response Error:', response.status, 'Request failed with status code', response.status);
          throw new Error(`Request failed with status code ${response.status}`);
        }
        
        const apiProduct: ApiProduct = await response.json();
        console.log('✅ API Response:', response.status, '/product//' + productId + '/');
        console.log('📄 Product received:', apiProduct.name);
        
        const transformedProduct = transformApiProduct(apiProduct);
        console.log('🔄 Transforming API product:', apiProduct.name, 'Image URL:', apiProduct.image);
        setProduct(transformedProduct);
        
      } catch (err) {
        console.error('🚨 Error fetching product ' + productId + ':', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
        console.warn('Failed to fetch product, using fallback data:', err);
        
        // Fallback to hardcoded products
        const numericId = typeof productId === 'string' ? parseInt(productId) : productId;
        const fallbackProduct = fallbackProducts.find((p) => p.id == numericId || p.id === productId);
        
        if (fallbackProduct) {
          setProduct(fallbackProduct);
        } else {
          navigation.goBack();
          return;
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigation]);

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        console.log('📦 Fetching all products...');
        const response = await fetch('https://vita-choice-backend.onrender.com/api/product//');
        console.log('🚀 API Request: GET /product//');
        
        if (response.ok) {
          const apiProducts: ApiProduct[] = await response.json();
          console.log('✅ API Response:', response.status, '/product//');
          const allProducts = apiProducts.map(transformApiProduct).filter(p => p.id !== productId);
          
          // Smart selection logic - same category first, then others
          const sameCategory = allProducts.filter(p => p.category === product!.category);
          const others = allProducts.filter(p => p.category !== product!.category);
          const related = [...sameCategory, ...others].slice(0, 2);
          
          setRelatedProducts(related);
          console.log('✨ Successfully transformed', related.length, 'related products');
        } else {
          // Fallback selection
          const available = fallbackProducts.filter(p => p.id !== productId);
          setRelatedProducts(available.slice(0, 2));
        }
      } catch (err) {
        console.error('Failed to fetch related products:', err);
        const available = fallbackProducts.filter(p => p.id !== productId);
        setRelatedProducts(available.slice(0, 2));
      }
    };

    if (product) {
      fetchRelatedProducts();
    }
  }, [product, productId]);

  const handleAddToCart = () => {
    Alert.alert(
      'Added to Cart',
      `${product?.name} (${quantity}x) has been added to your cart.`,
      [{ text: 'OK', style: 'default' }]
    );
  };

  const handleSubscribe = () => {
    Alert.alert(
      'Subscribe & Save',
      'Subscription feature coming soon! Save 15% on recurring orders.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  // Show loading state
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading product...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Show error state if no product found
  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>😔</Text>
          <Text style={styles.errorTitle}>Product Not Found</Text>
          <Text style={styles.errorText}>
            The product you're looking for doesn't exist or may have been removed.
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <LinearGradient
              colors={[COLORS.accentTeal, COLORS.accentBlue]}
              style={styles.backButtonGradient}
            >
              <Text style={styles.backButtonText}>Back to Shop</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "ingredients", label: "Ingredients" },
    { id: "usage", label: "How to Use" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      {/* API Error Notification */}
      {error && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorBannerText}>⚠️ API Connection Issue</Text>
          <Text style={styles.errorBannerSubtext}>
            Showing sample product data. Some information may not be current.
          </Text>
        </View>
      )}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Product Header */}
        <View style={styles.productHeader}>
          <View style={styles.productGrid}>
            {/* Product Image */}
            <View style={styles.imageSection}>
              <LinearGradient
                colors={['#14161A', '#262A31']}
                style={styles.imageContainer}
              >
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                  resizeMode="contain"
                />
              </LinearGradient>

              {/* Product badges */}
              <View style={styles.badgesContainer}>
                {product.isBestseller && (
                  <View style={styles.bestsellerBadge}>
                    <Text style={styles.bestsellerText}>BESTSELLER</Text>
                  </View>
                )}
                <View style={styles.stockBadge}>
                  <Text style={styles.stockText}>IN STOCK</Text>
                </View>
              </View>
            </View>

            {/* Product Info */}
            <View style={styles.infoSection}>
              <Text style={styles.category}>{product.category}</Text>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productSubtitle}>{product.subtitle}</Text>

              {/* Rating */}
              <View style={styles.ratingContainer}>
                <Text style={styles.stars}>
                  {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
                </Text>
                <Text style={styles.ratingText}>
                  {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                </Text>
              </View>

              {/* Short Description */}
              <Text style={styles.shortDescription}>{product.shortDescription}</Text>

              {/* Key Benefits */}
              <View style={styles.benefitsSection}>
                <Text style={styles.benefitsTitle}>Key Benefits</Text>
                {product.benefits.map((benefit, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <View style={styles.benefitDot} />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>

              {/* Pricing */}
              <LinearGradient
                colors={[COLORS.surface, COLORS.cardBackground]}
                style={styles.pricingCard}
              >
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${product.price}</Text>
                  {product.originalPrice > product.price && (
                    <>
                      <Text style={styles.originalPrice}>${product.originalPrice}</Text>
                      <View style={styles.saveBadge}>
                        <Text style={styles.saveText}>
                          SAVE ${product.originalPrice - product.price}
                        </Text>
                      </View>
                    </>
                  )}
                </View>
                <Text style={styles.pricingSubtext}>
                  per month • {product.servingsPerBottle || "—"} servings • Cancel anytime
                </Text>

                {/* Quantity and Add to Cart */}
                <View style={styles.quantityContainer}>
                  <Text style={styles.quantityLabel}>Quantity:</Text>
                  <View style={styles.quantitySelector}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityValue}>{quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => setQuantity(quantity + 1)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.ctaButtons}>
                  <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <LinearGradient
                      colors={[COLORS.accentTeal, COLORS.accentBlue]}
                      style={styles.addToCartGradient}
                    >
                      <Text style={styles.addToCartText}>
                        Add to Cart - ${product.price * quantity}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
                    <Text style={styles.subscribeText}>Subscribe & Save 15%</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Product Tabs */}
        <View style={styles.tabsSection}>
          {/* Tab Navigation */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabNavigation}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[styles.tab, activeTab === tab.id && styles.activeTab]}
                onPress={() => setActiveTab(tab.id)}
              >
                <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
                  {tab.label}
                </Text>
                {activeTab === tab.id && <View style={styles.tabIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Tab Content */}
          <View style={styles.tabContent}>
            {activeTab === "overview" && (
              <View style={styles.overviewTab}>
                <Text style={styles.tabContentTitle}>What it does</Text>
                <Text style={styles.tabContentText}>{product.description}</Text>
              </View>
            )}

            {activeTab === "ingredients" && (
              <View style={styles.ingredientsTab}>
                <View style={styles.ingredientsSection}>
                  <Text style={styles.tabContentTitle}>Active Ingredients</Text>
                  <View style={styles.ingredientsList}>
                    {product.keyActives.length > 0 ? (
                      product.keyActives.map((active, index) => (
                        <View key={index} style={styles.ingredientItem}>
                          <Text style={styles.ingredientName}>
                            {typeof active === 'string' && active.includes(' - ') ? active.split(" - ")[0] : active}
                          </Text>
                          <Text style={styles.ingredientAmount}>
                            {typeof active === 'string' && active.includes(' - ') ? active.split(" - ")[1] : ""}
                          </Text>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.noDataText}>No ingredients information available</Text>
                    )}
                  </View>
                </View>

                <View style={styles.ingredientsSection}>
                  <Text style={styles.tabContentTitle}>Free From</Text>
                  <View style={styles.freeFromGrid}>
                    {product.freeFrom && product.freeFrom.length > 0 ? (
                      product.freeFrom.map((item, index) => (
                        <View key={index} style={styles.freeFromItem}>
                          <Text style={styles.checkmark}>✓</Text>
                          <Text style={styles.freeFromText}>{item}</Text>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.noDataText}>No allergen information available</Text>
                    )}
                  </View>
                </View>
              </View>
            )}

            {activeTab === "usage" && (
              <View style={styles.usageTab}>
                <LinearGradient
                  colors={['#14161A', '#262A31']}
                  style={styles.usageCard}
                >
                  <Text style={styles.tabContentTitle}>How to Use</Text>
                  <View style={styles.usageInfo}>
                    <View style={styles.usageItem}>
                      <Text style={styles.usageLabel}>Serving Size:</Text>
                      <Text style={styles.usageValue}>{product.servingSize}</Text>
                    </View>
                    <View style={styles.usageItem}>
                      <Text style={styles.usageLabel}>Instructions:</Text>
                      <Text style={styles.usageInstructions}>{product.usage}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            )}

            {activeTab === "faqs" && (
              <View style={styles.faqsTab}>
                {product.faqs.map((faq, index) => (
                  <LinearGradient
                    key={index}
                    colors={['#14161A', '#262A31']}
                    style={styles.faqCard}
                  >
                    <Text style={styles.faqQuestion}>{faq.question}</Text>
                    <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  </LinearGradient>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>You might also like</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relatedScroll}>
              {relatedProducts.map((relatedProduct) => (
                <TouchableOpacity
                  key={relatedProduct.id}
                  style={styles.relatedCard}
                  onPress={() => {
                    // @ts-ignore
                    navigation.push('ProductDetail', { productId: relatedProduct.id });
                  }}
                >
                  <LinearGradient
                    colors={['#14161A', '#262A31']}
                    style={styles.relatedCardGradient}
                  >
                    <View style={styles.relatedImageContainer}>
                      <Image
                        source={{ uri: relatedProduct.image }}
                        style={styles.relatedImage}
                        resizeMode="contain"
                      />
                    </View>
                    <Text style={styles.relatedName} numberOfLines={2}>{relatedProduct.name}</Text>
                    <View style={styles.relatedFooter}>
                      <Text style={styles.relatedPrice}>${relatedProduct.price}</Text>
                      <Text style={styles.relatedRating}>
                        {"★".repeat(Math.floor(relatedProduct.rating))}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.xl,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: SPACING.lg,
  },
  errorTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h2,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  errorText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    lineHeight: 24,
  },
  backButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  backButtonGradient: {
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
  },
  backButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button,
    textAlign: 'center',
  },
  errorBanner: {
    backgroundColor: '#FFE5B4',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginHorizontal: SPACING.md,
    marginTop: SPACING.sm,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF8C00',
  },
  errorBannerText: {
    color: '#8B4513',
    fontSize: TYPOGRAPHY.caption,
  },
  errorBannerSubtext: {
    color: '#8B4513',
    fontSize: TYPOGRAPHY.small,
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
  },
  productHeader: {
    padding: SPACING.lg,
  },
  productGrid: {
    gap: SPACING.lg,
  },
  imageSection: {
    position: 'relative',
  },
  imageContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  badgesContainer: {
    position: 'absolute',
    top: SPACING.md,
    left: SPACING.md,
    gap: SPACING.xs,
  },
  bestsellerBadge: {
    backgroundColor: COLORS.accentTeal,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bestsellerText: {
    color: COLORS.background,
    fontSize: 10,
    letterSpacing: 0.5,
  },
  stockBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stockText: {
    color: COLORS.white,
    fontSize: 10,
    letterSpacing: 0.5,
  },
  infoSection: {
    gap: SPACING.md,
  },
  category: {
    color: COLORS.accentTeal,
    fontSize: TYPOGRAPHY.caption,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  productName: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h2,
    lineHeight: 32,
  },
  productSubtitle: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,
    marginTop: -SPACING.sm,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  stars: {
    color: '#FFD700',
    fontSize: 16,
  },
  ratingText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.caption,

  },
  shortDescription: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    lineHeight: 22,
  },
  benefitsSection: {
    marginTop: SPACING.sm,
  },
  benefitsTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h3,

    marginBottom: SPACING.sm,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
    gap: SPACING.sm,
  },
  benefitDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accentTeal,
  },
  benefitText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.caption,

    flex: 1,
  },
  pricingCard: {
    padding: SPACING.lg,
    borderRadius: 16,
    marginTop: SPACING.md,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  price: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h1,

  },
  originalPrice: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    textDecorationLine: 'line-through',
  },
  saveBadge: {
    backgroundColor: COLORS.accentTeal,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
  },
  saveText: {
    color: COLORS.background,
    fontSize: 10,

  },
  pricingSubtext: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.caption,

    marginBottom: SPACING.lg,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.lg,
  },
  quantityLabel: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body,

  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 8,
    overflow: 'hidden',
  },
  quantityButton: {
    backgroundColor: COLORS.surface,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h3,

  },
  quantityValue: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body,

    paddingHorizontal: SPACING.lg,
  },
  ctaButtons: {
    gap: SPACING.md,
  },
  addToCartButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  addToCartGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  addToCartText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button,

  },
  subscribeButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.accentTeal,
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  subscribeText: {
    color: COLORS.accentTeal,
    fontSize: TYPOGRAPHY.button,

  },
  tabsSection: {
    marginTop: SPACING.lg,
  },
  tabNavigation: {
    paddingHorizontal: SPACING.lg,
  },
  tab: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    marginRight: SPACING.md,
    position: 'relative',
  },
  activeTab: {
    // No background needed, we'll use the indicator
  },
  tabText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

  },
  activeTabText: {
    color: COLORS.accentTeal,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: SPACING.lg,
    right: SPACING.lg,
    height: 3,
    backgroundColor: COLORS.accentTeal,
    borderRadius: 2,
  },
  tabContent: {
    padding: SPACING.lg,
    minHeight: 200,
  },
  overviewTab: {
    gap: SPACING.md,
  },
  tabContentTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h3,

    marginBottom: SPACING.sm,
  },
  tabContentText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    lineHeight: 24,
  },
  ingredientsTab: {
    gap: SPACING.xl,
  },
  ingredientsSection: {
    gap: SPACING.md,
  },
  ingredientsList: {
    gap: SPACING.sm,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  ingredientName: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body,

    flex: 1,
  },
  ingredientAmount: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.caption,

  },
  freeFromGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  freeFromItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    gap: SPACING.xs,
  },
  checkmark: {
    color: '#10B981',
    fontSize: 14,

  },
  freeFromText: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.caption,

  },
  noDataText: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: SPACING.lg,
  },
  usageTab: {
    gap: SPACING.md,
  },
  usageCard: {
    padding: SPACING.lg,
    borderRadius: 16,
  },
  usageInfo: {
    gap: SPACING.md,
  },
  usageItem: {
    gap: SPACING.xs,
  },
  usageLabel: {
    color: COLORS.accentTeal,
    fontSize: TYPOGRAPHY.caption,

    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  usageValue: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body,

  },
  usageInstructions: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    lineHeight: 22,
  },
  faqsTab: {
    gap: SPACING.md,
  },
  faqCard: {
    padding: SPACING.lg,
    borderRadius: 16,
    gap: SPACING.sm,
  },
  faqQuestion: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body,

    lineHeight: 22,
  },
  faqAnswer: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.body,

    lineHeight: 22,
  },
  relatedSection: {
    padding: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  relatedTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h2,

    marginBottom: SPACING.lg,
  },
  relatedScroll: {
    gap: SPACING.md,
  },
  relatedCard: {
    width: width * 0.6,
    marginRight: SPACING.md,
    borderRadius: 16,
    overflow: 'hidden',
  },
  relatedCardGradient: {
    padding: SPACING.md,
    height: 280,
  },
  relatedImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  relatedImage: {
    width: '80%',
    height: '80%',
  },
  relatedName: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.caption,

    marginBottom: SPACING.xs,
    lineHeight: 18,
  },
  relatedFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  relatedPrice: {
    color: COLORS.accentTeal,
    fontSize: TYPOGRAPHY.body,
  },
  relatedRating: {
    color: '#FFD700',
    fontSize: 14,
  },
});
