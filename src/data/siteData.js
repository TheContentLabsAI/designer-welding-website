import { MapPin, Phone, Mail, Clock, ShieldCheck, PenTool, Hammer } from "lucide-react";

export const companyInfo = {
  name: "Designer Welding Inc.",
  license: "Fully Licensed & Bonded (#939723)",
  address: "Garden Grove, CA 92841",
  phone: "(714) 580-6994",
  email: "designerwelding1@gmail.com",
  tagline: "Specialized expertise in Orange County’s premium iron works and metal fabrication industry.",
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
    icon: PenTool
  },
  {
    id: "gates",
    title: "Gates",
    shortDesc: "Security and ornamental solutions for homes and driveways.",
    fullDesc: "From grand driveway entrances to secure pedestrian access, our gates combine security with curb appeal. We specialize in motorization and custom hardware integration.",
    features: ["Double Entry Gates", "Sliding Patio Gates", "Motorized Systems", "High-Security Builds"],
    icon: ShieldCheck
  },
  {
    id: "fences",
    title: "Fences",
    shortDesc: "Durable metal fencing for security and curb appeal.",
    fullDesc: "Secure your perimeter without sacrificing aesthetics. Our metal fencing solutions offer sound-of-mind security with ornamental designs available for pool safety and property lines.",
    features: ["Ornamental Iron", "Pool Safety Codes", "Perimeter Security", "Privacy Panels"],
    icon: Hammer
  },
  {
    id: "doors-windows",
    title: "Doors & Windows",
    shortDesc: "Modern and secure ironwork for home entry points.",
    fullDesc: "Enhance your home's security and style with custom iron doors and window guards. We integrate wood and glass for modern, secure entry points.",
    features: ["Modern Iron Doors", "Security Window Guards", "Wood-Integrated Gates", "Custom Pivots"],
    icon: ShieldCheck
  }
];

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
