import { MapPin, Phone, Mail, Clock, ShieldCheck, PenTool, Hammer } from "lucide-react";

export const companyInfo = {
  name: "Designer Welding Inc.",
  license: "Fully Licensed & Bonded (CSLB: 1098805)",
  address: "Garden Grove, CA 92841",
  phone: "(714) 580-6994",
  email: "designerwelding1@gmail.com",
  tagline: "Specialized expertise in Orange County's premium iron works and metal fabrication industry.",
  businessHours: "Mon-Fri: 7:00 AM - 5:00 PM",
  socials: {
    facebook: "#",
    instagram: "#",
  }
};

export const services = [
  {
    id: "railings",
    title: "Railings",
    shortDesc: "High-end centerpieces for residential and commercial properties.",
    fullDesc: "Our custom railings serve as the architectural centerpiece of your property. Whether intricate wrought iron or sleek modern steel, we design matching styles that are both functional and decorative.",
    features: ["Custom Style Matching", "Stair & Balcony Focus", "Code Compliant Safety", "Interior & Exterior"],
    icon: PenTool,
    image: "/images/service-railings.png"
  },
  {
    id: "gates",
    title: "Gates",
    shortDesc: "Security and ornamental solutions for homes and driveways.",
    fullDesc: "From grand driveway entrances to secure pedestrian access, our gates combine security with curb appeal. We specialize in motorization and custom hardware integration.",
    features: ["Double Entry Gates", "Sliding Patio Gates", "Motorized Systems", "High-Security Builds"],
    icon: ShieldCheck,
    image: "/images/service-gates.png"
  },
  {
    id: "fences",
    title: "Fences",
    shortDesc: "Durable metal fencing for security and curb appeal.",
    fullDesc: "Secure your perimeter without sacrificing aesthetics. Our metal fencing solutions offer sound-of-mind security with ornamental designs available for pool safety and property lines.",
    features: ["Ornamental Iron", "Pool Safety Codes", "Perimeter Security", "Privacy Panels"],
    icon: Hammer,
    image: "/images/service-fences.png"
  },
  {
    id: "doors-windows",
    title: "Doors & Windows",
    shortDesc: "Modern and secure ironwork for home entry points.",
    fullDesc: "Enhance your home's security and style with custom iron doors and window guards. We integrate wood and glass for modern, secure entry points.",
    features: ["Modern Iron Doors", "Security Window Guards", "Wood-Integrated Gates", "Custom Pivots"],
    icon: ShieldCheck,
    image: "/images/service-doors.png"
  }
];

// Legacy flat array for backward compatibility
export const portfolioCategories = [
  "Balconies",
  "Commercial Gates",
  "Double Gates",
  "Double Gates with Design",
  "Entrance Doors",
  "Fences",
  "Modern Doors",
  "Security Doors",
  "Security Windows",
  "Side Gates",
  "Side Gates With Design",
  "Sliding Gates",
  "Sliding Patio",
  "Stair Railing",
  "Swimming Pool Fences Cover",
  "Wood Gates"
];

// Hierarchical portfolio structure for improved SEO and UX
export const portfolioStructure = {
  gates: {
    title: "Gates",
    slug: "gates",
    description: "Custom metal gates for residential and commercial properties in Orange County",
    seoTitle: "Custom Metal Gates | Driveway, Entry & Commercial Gates",
    seoDescription: "Premium custom metal gates including driveway gates, entry gates, side gates, and commercial gate solutions. Licensed & bonded in Orange County.",
    subcategories: {
      drivewayGates: {
        title: "Driveway Gates",
        slug: "driveway-gates",
        description: "Automated and manual driveway entry gates with custom designs",
        seoKeywords: ["driveway gates orange county", "automatic gate installation", "custom driveway gates"],
        oldCategories: ["Double Gates", "Double Gates with Design"]
      },
      entryGates: {
        title: "Entry Gates",
        slug: "entry-gates",
        description: "Elegant pedestrian entry gates for homes and businesses",
        seoKeywords: ["entry gates", "pedestrian gates", "front entry gates"],
        oldCategories: ["Entrance Doors"]
      },
      sideGates: {
        title: "Side Gates",
        slug: "side-gates",
        description: "Secure side yard access gates with custom designs",
        seoKeywords: ["side gates", "yard gates", "custom side gates"],
        oldCategories: ["Side Gates", "Side Gates With Design"]
      },
      gardenGates: {
        title: "Garden Gates",
        slug: "garden-gates",
        description: "Decorative garden and backyard gates",
        seoKeywords: ["garden gates", "backyard gates", "decorative gates"],
        oldCategories: ["Wood Gates"]
      },
      commercialGates: {
        title: "Commercial Gates",
        slug: "commercial-gates",
        description: "Heavy-duty commercial and industrial gate solutions",
        seoKeywords: ["commercial gates", "industrial gates", "business gates"],
        oldCategories: ["Commercial Gates", "Sliding Gates"]
      }
    }
  },
  security: {
    title: "Security",
    slug: "security",
    description: "Premium security solutions including doors, windows, and gates",
    seoTitle: "Security Doors & Windows | Orange County Security Solutions",
    seoDescription: "Custom security doors, windows, and gates for residential and commercial properties. Maximum protection with elegant design.",
    subcategories: {
      securityDoors: {
        title: "Security Doors",
        slug: "security-doors",
        description: "Heavy-duty security doors with modern designs",
        seoKeywords: ["security doors", "iron security doors", "modern security doors"],
        oldCategories: ["Security Doors", "Modern Doors"]
      },
      securityWindows: {
        title: "Security Windows",
        slug: "security-windows",
        description: "Protective window guards and security screens",
        seoKeywords: ["security windows", "window guards", "security screens"],
        oldCategories: ["Security Windows"]
      },
      securityGates: {
        title: "Security Gates",
        slug: "security-gates",
        description: "High-security gates for maximum protection",
        seoKeywords: ["security gates", "high security gates", "protective gates"],
        oldCategories: []
      }
    }
  },
  railings: {
    title: "Railings",
    slug: "railings",
    description: "Custom railings for stairs, balconies, decks, and porches",
    seoTitle: "Custom Railings | Stair, Balcony & Deck Railings Orange County",
    seoDescription: "Premium custom railings for residential and commercial properties. Stair railings, balcony railings, and more.",
    subcategories: {
      stairRailings: {
        title: "Stair Railings",
        slug: "stair-railings",
        description: "Interior and exterior stair railings with custom designs",
        seoKeywords: ["stair railings", "custom stair railings", "interior railings"],
        oldCategories: ["Stair Railing"]
      },
      balconyRailings: {
        title: "Balcony Railings",
        slug: "balcony-railings",
        description: "Elegant balcony railings for safety and style",
        seoKeywords: ["balcony railings", "balcony safety rails", "custom balcony railings"],
        oldCategories: ["Balconies"]
      },
      deckRailings: {
        title: "Deck Railings",
        slug: "deck-railings",
        description: "Durable deck railings for outdoor spaces",
        seoKeywords: ["deck railings", "outdoor railings", "patio railings"],
        oldCategories: []
      },
      porchRailings: {
        title: "Porch Railings",
        slug: "porch-railings",
        description: "Classic porch railings for front and back porches",
        seoKeywords: ["porch railings", "front porch railings", "custom porch rails"],
        oldCategories: []
      }
    }
  },
  specialty: {
    title: "Specialty",
    slug: "specialty",
    description: "Specialized metalwork including pool fencing, custom ironwork, and barriers",
    seoTitle: "Specialty Metalwork | Pool Fencing & Custom Ironwork",
    seoDescription: "Specialized metal fabrication including pool fencing, custom ironwork, and decorative barriers for Orange County properties.",
    subcategories: {
      poolFencing: {
        title: "Pool Fencing",
        slug: "pool-fencing",
        description: "Code-compliant pool fencing and safety barriers",
        seoKeywords: ["pool fencing", "pool safety fence", "swimming pool fence"],
        oldCategories: ["Swimming Pool Fences Cover", "Sliding Patio"]
      },
      customIronwork: {
        title: "Custom Ironwork",
        slug: "custom-ironwork",
        description: "Artistic custom ironwork and decorative pieces",
        seoKeywords: ["custom ironwork", "decorative ironwork", "artistic metalwork"],
        oldCategories: []
      },
      fencingBarriers: {
        title: "Fencing & Barriers",
        slug: "fencing-and-barriers",
        description: "Perimeter fencing and security barriers",
        seoKeywords: ["metal fencing", "security barriers", "perimeter fencing"],
        oldCategories: ["Fences"]
      }
    }
  }
};

// Helper function to get all subcategories as a flat array
export const getAllSubcategories = () => {
  const subcategories = [];
  Object.values(portfolioStructure).forEach(category => {
    Object.values(category.subcategories).forEach(subcategory => {
      subcategories.push({
        ...subcategory,
        parentCategory: category.title,
        parentSlug: category.slug
      });
    });
  });
  return subcategories;
};

// Helper function to map old category names to new structure
export const getCategoryMapping = (oldCategoryName) => {
  for (const [categoryKey, category] of Object.entries(portfolioStructure)) {
    for (const [subKey, subcategory] of Object.entries(category.subcategories)) {
      if (subcategory.oldCategories.includes(oldCategoryName)) {
        return {
          mainCategory: categoryKey,
          subcategory: subKey,
          mainCategoryTitle: category.title,
          subcategoryTitle: subcategory.title
        };
      }
    }
  }
  return null;
};

export const testimonials = [
  {
    id: 1,
    name: "Crystal R.",
    role: "Homeowner",
    text: "Praised the quote speed and the use of galvanized steel for long-lasting pool gate repairs. Professional and efficient service.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas More",
    role: "Client",
    text: "Great experience working with Henry. Commended his professional advice and quick communication on a custom fence and front gate project.",
    rating: 5
  }
];

export const projects = [
  {
    id: 1,
    title: "Laguna Beach Estate",
    category: "Railings",
    imageUrl: "/images/project-railings-v2.png",
    description: "Custom wrought iron balcony railings with intricate scrollwork, powder-coated in matte black for a timeless coastal look."
  },
  {
    id: 2,
    title: "Modern Farmhouse Gate",
    category: "Gates",
    imageUrl: "/images/project-gate-v2.png",
    description: "Automated driveway gate featuring horizontal slats and integrated privacy wood paneling, perfect for modern security."
  },
  {
    id: 3,
    title: "Newport Security Doors",
    category: "Doors",
    imageUrl: "/images/project-door-v2.png",
    description: "Heavy-duty security screen doors with geometric patterns that allow airflow while providing maximum protection."
  }
];
