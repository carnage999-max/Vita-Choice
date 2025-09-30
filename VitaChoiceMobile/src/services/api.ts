import axios, { AxiosResponse } from 'axios';
import { ApiProduct, Product } from '../types';

// API base configuration
const API_BASE_URL = 'https://vita-choice-backend.onrender.com/api';
const API_TIMEOUT = 10000; // 10 seconds

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging and error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Transform API product to internal product structure
export const transformApiProduct = (apiProduct: ApiProduct): Product => {
  console.log('🔄 Transforming API product:', apiProduct.name, 'Image URL:', apiProduct.image);
  
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    subtitle: apiProduct.subtitle || '',
    price: parseFloat(apiProduct.price),
    originalPrice: apiProduct.original_price 
      ? parseFloat(apiProduct.original_price) 
      : parseFloat(apiProduct.price),
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
    servingsPerBottle: apiProduct.servings_per_bottle 
      ? parseInt(apiProduct.servings_per_bottle) 
      : null,
    usage: apiProduct.usage,
    faqs: apiProduct.faqs || [],
    createdAt: apiProduct.created_at,
    updatedAt: apiProduct.updated_at,
    // Add some default properties for UI display
    isPopular: false,
    isBestseller: false,
    isNew: false,
    isSpecialized: false,
    inStock: true, // Default to in stock
  };
};

// API service functions
export const ApiService = {
  // Get all products
  async getProducts(): Promise<Product[]> {
    try {
      console.log('📦 Fetching all products...');
      const response = await apiClient.get<ApiProduct[]>('/product//');
      
      console.log(`📊 API Products received: ${response.data.length} products`);
      if (response.data.length > 0) {
        console.log('📄 First product sample:', response.data[0]);
      }
      
      const transformedProducts = response.data.map(transformApiProduct);
      console.log(`✨ Successfully transformed ${transformedProducts.length} products`);
      
      return transformedProducts;
    } catch (error) {
      console.error('🚨 Error fetching products:', error);
      throw error;
    }
  },

  // Get single product by ID
  async getProduct(id: number): Promise<Product> {
    try {
      console.log(`🔍 Fetching product with ID: ${id}`);
      const response = await apiClient.get<ApiProduct>(`/product//${id}/`);
      
      console.log('📄 Product received:', response.data.name);
      const transformedProduct = transformApiProduct(response.data);
      
      return transformedProduct;
    } catch (error) {
      console.error(`🚨 Error fetching product ${id}:`, error);
      throw error;
    }
  },
};

// Error handling utility
export const handleApiError = (error: any): string => {
  if (error.code === 'ECONNABORTED') {
    return 'Request timed out after 10 seconds';
  } else if (error.code === 'NETWORK_ERROR' || !error.response) {
    return 'Network error - Unable to connect to API server';
  } else if (error.response?.status === 404) {
    return 'Product not found';
  } else if (error.response?.status >= 500) {
    return 'Server error - Please try again later';
  } else {
    return error.message || 'An unexpected error occurred';
  }
};