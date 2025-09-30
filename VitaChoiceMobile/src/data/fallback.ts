import { Product } from '../types';

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Core Vitamin Daily Stack",
    subtitle: "Essential nutrients for optimal health",
    price: 49.99,
    originalPrice: 59.99,
    category: "Daily Essentials",
    image: "https://via.placeholder.com/300x300/2EE6D6/000000?text=Core+Vitamin",
    rating: 4.8,
    reviewCount: 124,
    description: "Our comprehensive daily vitamin stack provides essential nutrients to support your overall health and wellness. Carefully formulated with premium ingredients for maximum absorption and effectiveness.",
    shortDescription: "Complete daily nutrition in one convenient stack",
    benefits: [
      "Supports immune system health",
      "Enhances energy levels",
      "Promotes healthy metabolism",
      "Supports cognitive function"
    ],
    keyActives: [
      "Vitamin D3 2000 IU",
      "Vitamin B Complex",
      "Magnesium Glycinate",
      "Omega-3 Fatty Acids"
    ],
    freeFrom: ["Gluten", "Dairy", "Artificial Colors"],
    servingSize: "2 capsules",
    servingsPerBottle: 30,
    usage: "Take 2 capsules daily with food",
    isPopular: true,
    isBestseller: true,
    isNew: false,
    isSpecialized: false,
    inStock: true,
    faqs: [
      {
        question: "When should I take this supplement?",
        answer: "Take 2 capsules daily with your morning meal for best absorption."
      }
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    id: 2,
    name: "Brain Performance Stack",
    subtitle: "Cognitive enhancement and mental clarity",
    price: 69.99,
    originalPrice: 79.99,
    category: "Cognitive Health",
    image: "https://via.placeholder.com/300x300/2EA7FF/000000?text=Brain+Stack",
    rating: 4.9,
    reviewCount: 89,
    description: "Advanced nootropic formula designed to enhance cognitive performance, memory, and mental clarity. Features clinically-studied ingredients for optimal brain health.",
    shortDescription: "Enhanced cognitive performance and focus",
    benefits: [
      "Improves mental clarity",
      "Enhances memory retention",
      "Supports focus and concentration",
      "Reduces brain fog"
    ],
    keyActives: [
      "Lion's Mane Extract",
      "Bacopa Monnieri",
      "Rhodiola Rosea",
      "Alpha-GPC"
    ],
    freeFrom: ["Gluten", "Dairy", "Soy"],
    servingSize: "3 capsules",
    servingsPerBottle: 30,
    usage: "Take 3 capsules in the morning with breakfast",
    isPopular: true,
    isBestseller: false,
    isNew: true,
    isSpecialized: true,
    inStock: true,
    faqs: [
      {
        question: "How long before I see results?",
        answer: "Most users report improved focus within 1-2 weeks of consistent use."
      }
    ],
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-20T00:00:00Z"
  },
  {
    id: 3,
    name: "Sleep Optimization Stack",
    subtitle: "Deep, restorative sleep support",
    price: 39.99,
    originalPrice: 49.99,
    category: "Sleep & Recovery",
    image: "https://via.placeholder.com/300x300/9333EA/000000?text=Sleep+Stack",
    rating: 4.7,
    reviewCount: 156,
    description: "Natural sleep support formula that helps you fall asleep faster, stay asleep longer, and wake up refreshed. Non-habit forming ingredients for better sleep quality.",
    shortDescription: "Natural sleep support for better rest",
    benefits: [
      "Promotes faster sleep onset",
      "Improves sleep quality",
      "Supports natural circadian rhythm",
      "Non-habit forming"
    ],
    keyActives: [
      "Melatonin 3mg",
      "L-Theanine",
      "Magnesium Bisglycinate",
      "Valerian Root"
    ],
    freeFrom: ["Gluten", "Dairy", "Artificial Additives"],
    servingSize: "2 capsules",
    servingsPerBottle: 30,
    usage: "Take 2 capsules 30 minutes before bedtime",
    isPopular: false,
    isBestseller: false,
    isNew: false,
    isSpecialized: false,
    inStock: false,
    faqs: [
      {
        question: "Is this safe for long-term use?",
        answer: "Yes, our formula uses natural ingredients that are safe for ongoing use."
      }
    ],
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-18T00:00:00Z"
  }
];

export default FALLBACK_PRODUCTS;