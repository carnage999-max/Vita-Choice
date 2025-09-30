import { Product } from '../types';

// Fallback product data - same as the Next.js website
export const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Vita‑Choice™ Core Liquid Multivitamin",
    subtitle: "Fully Methylated",
    price: 149,
    originalPrice: 179,
    category: "Daily Essentials",
    image: "/products/core-vitamin.png",
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
    keyActives: [
      "Methylfolate (5‑MTHF) - 400mcg",
      "Methylcobalamin (B12) - 500mcg",
      "P5P (Active B6) - 25mg",
      "Chelated Magnesium - 200mg",
      "Zinc (Bisglycinate) - 15mg",
      "Selenium (Methionine) - 200mcg",
      "Iodine (Kelp) - 150mcg",
      "Vitamin D3 - 2000 IU (adjustable)",
      "Spirulina Complex - 500mg",
      "Seaweed Blend - 300mg",
    ],
    freeFrom: ["Gluten", "Artificial colors", "Artificial sweeteners", "GMOs", "Dairy", "Soy"],
    servingSize: "1 tablespoon (15ml)",
    servingsPerBottle: 30,
    usage: "Take 1 tablespoon daily with food, preferably in the morning. Can be taken directly or mixed with water or juice.",
    isPopular: true,
    isBestseller: true,
    inStock: true,
    faqs: [
      {
        question: "How is this different from regular multivitamins?",
        answer: "Our liquid formula uses fully methylated forms of vitamins that bypass genetic variations (like MTHFR) that prevent proper absorption of synthetic vitamins. Plus, liquid absorption is 95%+ vs 10-20% for pills."
      },
      {
        question: "Is this safe to take with medications?",
        answer: "While generally safe, we recommend consulting your healthcare provider before starting any new supplement, especially if you take medications or have health conditions."
      }
    ],
    createdAt: "2025-09-29T11:11:12.358101Z",
    updatedAt: "2025-09-29T11:11:12.358172Z"
  },
  {
    id: 2,
    name: "Diabetes Support Stack",
    subtitle: "Glucose Metabolism Support",
    price: 129,
    originalPrice: 159,
    category: "Targeted Stacks",
    image: "/products/diabetes-support-stack.png",
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
    keyActives: [
      "Chromium (picolinate) - 200mcg",
      "Ceylon cinnamon extract - 500mg",
      "Berberine HCl - 300mg",
      "ALA (R‑alpha‑lipoic acid) - 200mg",
      "Magnesium - 200mg",
      "Inositol - 500mg",
      "Pre‑/probiotics blend - 10B CFU"
    ],
    freeFrom: ["Gluten", "Dairy", "Soy", "Artificial additives"],
    servingSize: "2 capsules daily",
    servingsPerBottle: 60,
    usage: "Take 2 capsules daily with meals, or as directed by your healthcare provider.",
    isSpecialized: true,
    inStock: true,
    faqs: [
      {
        question: "Can this replace my diabetes medication?",
        answer: "No. This stack is intended as a nutritional support supplement. Always continue prescribed medication unless your doctor advises otherwise."
      }
    ],
    createdAt: "2025-09-29T11:11:12.358101Z",
    updatedAt: "2025-09-29T11:11:12.358172Z"
  },
  {
    id: 3,
    name: "Microplastics Cleanse Stack",
    subtitle: "Environmental Defense System",
    price: 169,
    originalPrice: 199,
    category: "Targeted Stacks",
    image: "/products/microplastic-cleanse-stack.png",
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
    keyActives: [
      "Soluble fiber complex - 2g",
      "Chlorella - 1000mg",
      "Activated charcoal - 500mg",
      "NAC - 600mg",
      "Glutathione precursors - 250mg",
      "Zinc‑carnosine - 75mg",
      "Lactobacillus/bifido strains - 25B CFU"
    ],
    freeFrom: ["GMOs", "Artificial additives", "Soy", "Dairy"],
    servingSize: "3 capsules daily",
    servingsPerBottle: 90,
    usage: "Take 3 capsules daily with water. For intensive detox protocols, consult a healthcare provider.",
    isNew: true,
    inStock: false,
    faqs: [
      {
        question: "Is this safe for daily use?",
        answer: "Yes, but we recommend periodic use (8–12 weeks) followed by breaks, depending on exposure and lifestyle factors."
      }
    ],
    createdAt: "2025-09-29T11:11:12.358101Z",
    updatedAt: "2025-09-29T11:11:12.358172Z"
  },
  {
    id: 4,
    name: "Daily Dosing Device",
    subtitle: "Precision Liquid Dispenser",
    price: 89,
    originalPrice: 109,
    category: "Accessories",
    image: "/products/daily-dosing-device.png",
    rating: 4.6,
    reviewCount: 542,
    description: "A precision-engineered device designed for accurate daily liquid supplement dosing. Ensures consistent serving size and minimal mess, perfect for maintaining your supplement routine.",
    shortDescription: "Accurate, mess-free, and convenient liquid dosing for daily supplement use.",
    benefits: [
      "Precise liquid measurement",
      "Mess-free dispensing",
      "Durable, medical-grade materials",
      "Easy cleaning & maintenance"
    ],
    keyActives: [
      "Engineered dispenser mechanism",
      "Calibrated markings",
      "BPA-free, food-safe materials"
    ],
    freeFrom: ["BPA", "Phthalates", "Lead"],
    servingSize: "Variable per use",
    servingsPerBottle: null,
    usage: "Use to measure and dispense the exact serving size of liquid supplements daily.",
    isNew: true,
    inStock: true,
    faqs: [
      {
        question: "Is this dishwasher safe?",
        answer: "Yes, it is fully dishwasher safe for easy cleaning."
      }
    ],
    createdAt: "2025-09-29T11:11:12.358101Z",
    updatedAt: "2025-09-29T11:11:12.358172Z"
  }
];