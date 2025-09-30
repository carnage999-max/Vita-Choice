import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants';
import { LoadingState, ErrorState } from '../components';

const { width } = Dimensions.get('window');

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
  keyActives: string | string[];
  freeFrom?: string[];
  usage?: string;
  isPopular?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  isSpecialized?: boolean;
}

// Fallback product data
const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Vita‑Choice™ Core Liquid Multivitamin",
    subtitle: "Fully Methylated",
    price: 149,
    originalPrice: 179,
    category: "daily-essentials",
    image: "https://via.placeholder.com/300x300/2EE6D6/FFFFFF?text=Core+Vitamin",
    rating: 4.9,
    reviewCount: 2847,
    description: "A premium, fully methylated, gluten‑free, vegan liquid multivitamin base with synergistic cofactors and superfoods (spirulina, seaweed). Designed for high bioavailability and gentle daily use.",
    shortDescription: "One premium liquid base. Fully methylated B‑complex, bioavailable minerals, and synergistic co‑factors for whole‑body support. Clean, efficient, daily.",
    benefits: [
      "Energy metabolism support",
      "Cognitive clarity enhancement", 
      "Stress resilience building",
      "Immune system support"
    ],
    keyActives: "Methylfolate (5‑MTHF), methylcobalamin, P5P (B6), chelated magnesium, zinc, selenium, iodine, vitamin D baseline 2000 IU (adjustable), spirulina + seaweed complex",
    freeFrom: ["Gluten", "artificial colors/sweeteners"],
    isPopular: true,
    isBestseller: true
  },
  {
    id: 2,
    name: "Diabetes Support Stack",
    subtitle: "Glucose Metabolism Support",
    price: 129,
    originalPrice: 159,
    category: "targeted-stacks",
    image: "https://via.placeholder.com/300x300/2EA7FF/FFFFFF?text=Diabetes+Stack",
    rating: 4.7,
    reviewCount: 1293,
    description: "Targeted nutrients supporting insulin sensitivity, glucose metabolism, mitochondrial function, and gut balance. Includes specific pre‑/probiotics, cinnamon extract, chromium, and other evidence‑aligned actives.",
    shortDescription: "Designed to support healthy glucose metabolism, insulin sensitivity, and metabolic flexibility.",
    benefits: [
      "Insulin sensitivity support",
      "Glucose metabolism optimization",
      "Mitochondrial function enhancement",
      "Gut balance maintenance"
    ],
    keyActives: "Chromium (picolinate), Ceylon cinnamon extract, berberine HCl, ALA (R‑alpha‑lipoic acid), magnesium, inositol, pre‑/probiotics blend",
    usage: "Daily with meals; see label for dosing; consult physician if on medication",
    isSpecialized: true
  },
  {
    id: 3,
    name: "Microplastics Cleanse Stack",
    subtitle: "Environmental Defense System",
    price: 169,
    originalPrice: 199,
    category: "targeted-stacks",
    image: "https://via.placeholder.com/300x300/2ECC71/FFFFFF?text=Cleanse+Stack",
    rating: 4.8,
    reviewCount: 876,
    description: "Supports binding, mobilization, and elimination pathways; promotes gut barrier integrity and antioxidant defense for modern environmental exposures.",
    shortDescription: "Supports binding and elimination pathways while reinforcing gut barrier and antioxidant systems.",
    benefits: [
      "Toxin binding & mobilization",
      "Elimination pathway support",
      "Gut barrier integrity",
      "Antioxidant defense enhancement"
    ],
    keyActives: "Soluble fiber complex, chlorella, activated charcoal (timed use), NAC, glutathione precursors, zinc‑carnosine, lactobacillus/bifido strains",
    usage: "Cyclic protocol; maintain hydration and mineral intake",
    isNew: true
  },
];

// Function to transform API product to internal product structure
const transformApiProduct = (apiProduct: ApiProduct): Product => ({
  id: apiProduct.id,
  name: apiProduct.name,
  subtitle: apiProduct.subtitle || "",
  price: parseFloat(apiProduct.price),
  originalPrice: apiProduct.original_price ? parseFloat(apiProduct.original_price) : parseFloat(apiProduct.price),
  category: apiProduct.category === 'stax' ? 'targeted-stacks' : 'daily-essentials',
  image: apiProduct.image,
  rating: parseFloat(apiProduct.rating),
  reviewCount: apiProduct.review_count,
  description: apiProduct.description,
  shortDescription: apiProduct.short_description,
  benefits: apiProduct.benefits || [],
  keyActives: apiProduct.key_actives || [],
  freeFrom: apiProduct.free_from || [],
  usage: apiProduct.usage,
  isPopular: false,
  isBestseller: false,
  isNew: false,
  isSpecialized: apiProduct.category === 'stax'
});

export const ShopScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeCollection, setActiveCollection] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setError(null);
      console.log('📦 Fetching all products...');
      
      const response = await fetch('https://vita-choice-backend.onrender.com/api/product//');
      console.log('🚀 API Request: GET /product//');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiProducts: ApiProduct[] = await response.json();
      console.log(`📊 API Products received: ${apiProducts.length} products`);
      
      if (apiProducts.length > 0) {
        console.log('📄 First product sample:', JSON.stringify(apiProducts[0]).substring(0, 200) + '...');
        
        const transformedProducts = apiProducts.map((product) => {
          console.log(`🔄 Transforming API product: ${product.name} Image URL: ${product.image}`);
          return transformApiProduct(product);
        });
        
        setProducts(transformedProducts);
        console.log('✨ Successfully transformed', transformedProducts.length, 'products');
      }
      
    } catch (err) {
      console.error('❌ Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.warn('🔄 Failed to fetch products, using fallback data:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts();
  };

  // Dynamic collections based on actual products
  const collections = [
    { name: "All Products", slug: "all", count: products.length },
    { name: "Daily Essentials", slug: "daily-essentials", count: products.filter((p: Product) => p.category === "daily-essentials").length },
    { name: "Targeted Stacks", slug: "targeted-stacks", count: products.filter((p: Product) => p.category === "targeted-stacks").length }
  ];

  const filteredProducts = products.filter((product: Product) =>
    activeCollection === "all" || product.category === activeCollection
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // Keep original order for "popular"
    }
  });

  const handleProductPress = (productId: string | number) => {
    // @ts-ignore
    navigation.navigate('ProductDetail', { productId });
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => handleProductPress(product.id)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#14161A', '#262A31']}
        style={styles.cardGradient}
      >
        {/* Product badges */}
        <View style={styles.badgeContainer}>
          {product.isBestseller && (
            <LinearGradient
              colors={[COLORS.accentTeal, COLORS.accentBlue]}
              style={styles.badge}
            >
              <Text style={styles.badgeText}>BESTSELLER</Text>
            </LinearGradient>
          )}
          {product.isNew && (
            <View style={[styles.badge, { backgroundColor: COLORS.success }]}>
              <Text style={[styles.badgeText, { color: COLORS.background }]}>NEW</Text>
            </View>
          )}
          {product.isSpecialized && (
            <View style={[styles.badge, { backgroundColor: COLORS.warning }]}>
              <Text style={[styles.badgeText, { color: COLORS.background }]}>SPECIALIZED</Text>
            </View>
          )}
        </View>

        {/* Discount badge */}
        {product.originalPrice > product.price && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              SAVE ${product.originalPrice - product.price}
            </Text>
          </View>
        )}

        {/* Product image */}
        <View style={styles.imageContainer}>
          <LinearGradient
            colors={[COLORS.background, COLORS.surface]}
            style={styles.imageGradient}
          >
            <Image 
              source={{ uri: product.image }} 
              style={styles.productImage}
              resizeMode="contain"
            />
          </LinearGradient>
        </View>

        {/* Product info */}
        <View style={styles.productInfo}>
          <Text style={styles.category}>{product.category.replace('-', ' ').toUpperCase()}</Text>
          <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
          <Text style={styles.productSubtitle} numberOfLines={1}>{product.subtitle}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.stars}>
              <Text style={styles.starsText}>
                {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
              </Text>
            </View>
            <Text style={styles.ratingText}>
              {product.rating} ({product.reviewCount} reviews)
            </Text>
          </View>

          {/* Short description */}
          <Text style={styles.description} numberOfLines={3}>
            {product.shortDescription}
          </Text>

          {/* Key benefits */}
          <View style={styles.benefitsContainer}>
            <Text style={styles.benefitsTitle}>KEY BENEFITS</Text>
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <View style={styles.benefitDot} />
                <Text style={styles.benefitText} numberOfLines={1}>{benefit}</Text>
              </View>
            ))}
          </View>

          {/* Pricing */}
          <View style={styles.pricingContainer}>
            <Text style={styles.price}>${product.price}</Text>
            {product.originalPrice > product.price && (
              <Text style={styles.originalPrice}>${product.originalPrice}</Text>
            )}
            <Text style={styles.perMonth}>/month</Text>
          </View>

          {/* CTA Button */}
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => handleProductPress(product.id)}
          >
            <LinearGradient
              colors={[COLORS.accentTeal, COLORS.accentBlue]}
              style={styles.ctaGradient}
            >
              <Text style={styles.ctaText}>View Details</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  if (loading) {
    return <LoadingState />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={[COLORS.background, COLORS.surface]}
            style={styles.heroGradient}
          >
            {/* Floating Shapes */}
            <View style={styles.floatingShapes}>
              <View style={[styles.shape, styles.shape1]} />
              <View style={[styles.shape, styles.shape2]} />
              <View style={[styles.shape, styles.shape3]} />
            </View>

            <View style={styles.heroContent}>
              <View style={styles.heroBadge}>
                <View style={styles.badgeDot} />
                <Text style={styles.herobadgeText}>VITA-CHOICE SHOP</Text>
              </View>

              <Text style={styles.heroTitle}>Find Your Formula</Text>
              <Text style={styles.heroSubtitle}>
                From daily essentials to targeted stacks.
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Filters & Collections */}
        <View style={styles.filtersSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.collectionsScroll}
          >
            {collections.map((collection) => (
              <TouchableOpacity
                key={collection.slug}
                style={[
                  styles.collectionButton,
                  activeCollection === collection.slug && styles.activeCollection
                ]}
                onPress={() => setActiveCollection(collection.slug)}
              >
                {activeCollection === collection.slug ? (
                  <LinearGradient
                    colors={[COLORS.accentTeal, COLORS.accentBlue]}
                    style={styles.activeCollectionGradient}
                  >
                    <Text style={styles.activeCollectionText}>
                      {collection.name} ({collection.count})
                    </Text>
                  </LinearGradient>
                ) : (
                  <Text style={styles.collectionText}>
                    {collection.name} ({collection.count})
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Sort dropdown */}
          <View style={styles.sortContainer}>
            <Text style={styles.sortLabel}>Sort by:</Text>
            <View style={styles.sortButtons}>
              {[
                { label: 'Popular', value: 'popular' },
                { label: 'Price ↑', value: 'price-low' },
                { label: 'Price ↓', value: 'price-high' },
                { label: 'Rating', value: 'rating' },
              ].map((sort) => (
                <TouchableOpacity
                  key={sort.value}
                  style={[
                    styles.sortButton,
                    sortBy === sort.value && styles.activeSortButton
                  ]}
                  onPress={() => setSortBy(sort.value)}
                >
                  <Text style={[
                    styles.sortButtonText,
                    sortBy === sort.value && styles.activeSortButtonText
                  ]}>
                    {sort.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Error State */}
        {error && (
          <View style={styles.errorContainer}>
            <View style={styles.errorCard}>
              <Text style={styles.errorIcon}>⚠️</Text>
              <Text style={styles.errorTitle}>API Connection Issue</Text>
              <Text style={styles.errorMessage}>
                We're having trouble connecting to our servers. Showing sample products instead.
              </Text>
              <Text style={styles.errorDetails}>Error: {error}</Text>
            </View>
          </View>
        )}

        {/* Products Grid */}
        <View style={styles.productsSection}>
          {sortedProducts.length > 0 ? (
            <View style={styles.productsGrid}>
              {Array.from({ length: Math.ceil(sortedProducts.length / 2) }, (_, rowIndex) => (
                <View key={rowIndex} style={styles.productRow}>
                  {sortedProducts.slice(rowIndex * 2, rowIndex * 2 + 2).map((product) => (
                    <View key={product.id} style={styles.productCardContainer}>
                      <ProductCard product={product} />
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.noProductsContainer}>
              <Text style={styles.noProductsIcon}>📦</Text>
              <Text style={styles.noProductsTitle}>No Products Found</Text>
              <Text style={styles.noProductsText}>
                No products match your current filter selection.
              </Text>
            </View>
          )}
        </View>

        {/* Coming Soon Section */}
        <View style={styles.comingSoonSection}>
          <LinearGradient
            colors={['#14161A80', '#262A3180']}
            style={styles.comingSoonContainer}
          >
            <Ionicons 
              name="flask-outline" 
              size={48} 
              color={COLORS.accentTeal} 
              style={styles.comingSoonIcon} 
            />
            <Text style={styles.comingSoonTitle}>More Formulas Coming Soon</Text>
            <Text style={styles.comingSoonText}>
              We're constantly developing new personalized formulations based on the latest research
              and customer feedback. Join our waitlist to be the first to know about new releases.
            </Text>
            <View style={styles.comingSoonButtons}>
              <TouchableOpacity style={styles.waitlistButton}>
                <LinearGradient
                  colors={[COLORS.accentTeal, COLORS.accentBlue]}
                  style={styles.waitlistGradient}
                >
                  <Text style={styles.waitlistButtonText}>Join Waitlist</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
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
    height: 280,
    overflow: 'hidden',
  },
  heroGradient: {
    flex: 1,
    position: 'relative',
  },
  floatingShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  shape: {
    position: 'absolute',
    borderRadius: 12,
  },
  shape1: {
    width: 48,
    height: 48,
    backgroundColor: `${COLORS.accentTeal}20`,
    top: 60,
    left: width * 0.15,
  },
  shape2: {
    width: 40,
    height: 40,
    backgroundColor: `${COLORS.accentBlue}20`,
    bottom: 80,
    right: width * 0.15,
  },
  shape3: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: `${COLORS.accentTeal}30`,
    top: '50%',
    left: '33%',
  },
  heroContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.accentTeal}10`,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}30`,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accentTeal,
    marginRight: 8,
  },
  herobadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.accentTeal,
  },
  heroTitle: {
    fontSize: 44,
    fontWeight: '800',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: COLORS.textMuted,
    textAlign: 'center',
    maxWidth: width - 80,
  },
  filtersSection: {
    paddingVertical: 24,
  },
  collectionsScroll: {
    paddingHorizontal: SPACING.lg,
    marginBottom: 20,
  },
  collectionButton: {
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  activeCollection: {},
  activeCollectionGradient: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  activeCollectionText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.background,
  },
  collectionText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
  },
  sortContainer: {
    paddingHorizontal: SPACING.lg,
  },
  sortLabel: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 8,
  },
  sortButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeSortButton: {
    backgroundColor: COLORS.accentTeal,
    borderColor: COLORS.accentTeal,
  },
  sortButtonText: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  activeSortButtonText: {
    color: COLORS.background,
    fontWeight: '600',
  },
  errorContainer: {
    paddingHorizontal: SPACING.lg,
    marginBottom: 20,
  },
  errorCard: {
    backgroundColor: `${COLORS.error}10`,
    borderWidth: 1,
    borderColor: `${COLORS.error}30`,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  errorIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: 8,
  },
  errorDetails: {
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  productsSection: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 120, // Account for floating nav
  },
  productsGrid: {
    gap: 16,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCardContainer: {
    flex: 1,
    maxWidth: '48%',
  },
  productCard: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 8,
  },
  cardGradient: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 24,
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.background,
  },
  discountBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: COLORS.error,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 2,
  },
  discountText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.white,
  },
  imageContainer: {
    height: 200,
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  productInfo: {
    padding: 20,
    paddingTop: 0,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.accentTeal,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  productSubtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    marginRight: 8,
  },
  starsText: {
    fontSize: 14,
    color: '#F5A623',
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  description: {
    fontSize: 13,
    color: COLORS.textMuted,
    lineHeight: 18,
    marginBottom: 16,
  },
  benefitsContainer: {
    marginBottom: 16,
  },
  benefitsTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.accentTeal,
    marginBottom: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  benefitDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accentTeal,
    marginRight: 8,
  },
  benefitText: {
    fontSize: 13,
    color: COLORS.textPrimary,
    flex: 1,
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: COLORS.textMuted,
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  perMonth: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  ctaButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  ctaGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.background,
  },
  noProductsContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  noProductsIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  noProductsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  noProductsText: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  comingSoonSection: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 140, // Extra space for floating nav
  },
  comingSoonContainer: {
    borderRadius: 24,
    padding: 40,
    borderWidth: 1,
    borderColor: `${COLORS.accentTeal}20`,
    alignItems: 'center',
  },
  comingSoonIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  comingSoonTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
  },
  comingSoonText: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  comingSoonButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  waitlistButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  waitlistGradient: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  waitlistButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.background,
  },
});