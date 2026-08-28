export type ProductCategory = "vegetable" | "fruit" | "pulse" | "grain" | "powder";

export type AvailabilityStatus =
  | "AVAILABLE"
  | "SEASONAL"
  | "COMING_SOON"
  | "UNAVAILABLE";

export const STATUS_LABEL: Record<AvailabilityStatus, string> = {
  AVAILABLE: "Available Now",
  SEASONAL: "Seasonal",
  COMING_SOON: "Coming Soon",
  UNAVAILABLE: "Not Currently Available",
};

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  image: string;
  status: AvailabilityStatus;
  seasonInfo?: string;
  unit: string;
  quantityStep?: number;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  // ---------------- VEGETABLES ----------------
  {
    id: "veg-potato",
    category: "vegetable",
    name: "Potato",
    description: "Fresh, organic potatoes naturally grown and harvested from our farm.",
    image: "/potatoes(1).png",
    status: "AVAILABLE",
    unit: "kg",
  },
  {
    id: "veg-tomato",
    category: "vegetable",
    name: "Tomato",
    description: "Juicy, naturally ripened tomatoes grown in our fields.",
    image:
      "https://images.pexels.com/photos/5451692/pexels-photo-5451692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "veg-bhindi",
    category: "vegetable",
    name: "Bhindi / Okra",
    description: "Fresh seasonal okra harvested from the farm.",
    image:
      "https://images.pexels.com/photos/33828862/pexels-photo-33828862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "veg-cauliflower",
    category: "vegetable",
    name: "Cauliflower",
    description: "Crisp, farm-fresh cauliflower grown through the cooler months.",
    image:
      "https://images.pexels.com/photos/18121431/pexels-photo-18121431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    seasonInfo: "Winter Season",
    unit: "kg",
    featured: true,
  },
  {
    id: "veg-carrot",
    category: "vegetable",
    name: "Carrot",
    description: "Sweet, earthy carrots pulled fresh from our fields.",
    image:
      "https://images.pexels.com/photos/35810240/pexels-photo-35810240.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    seasonInfo: "Winter Season",
    unit: "kg",
    featured: true,
  },
  {
    id: "veg-broccoli",
    category: "vegetable",
    name: "Broccoli",
    description: "Naturally grown broccoli, harvested according to season.",
    image:
      "https://images.pexels.com/photos/10862299/pexels-photo-10862299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "COMING_SOON",
    unit: "kg",
  },
  {
    id: "veg-seasonal",
    category: "vegetable",
    name: "Seasonal Vegetables",
    description:
      "A rotating selection of vegetables grown according to what is naturally available on the farm.",
    image:
      "https://images.pexels.com/photos/15578632/pexels-photo-15578632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    unit: "kg",
  },

  // ---------------- FRUITS ----------------
  {
    id: "fruit-apple",
    category: "fruit",
    name: "Apples",
    description: "Crisp, naturally ripened apples from our orchard.",
    image:
      "https://images.pexels.com/photos/28968704/pexels-photo-28968704.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    seasonInfo: "Autumn Harvest",
    unit: "kg",
    featured: true,
  },
  {
    id: "fruit-mango",
    category: "fruit",
    name: "Mangoes",
    description: "Sweet, sun-ripened mangoes harvested as they ripen naturally.",
    image:
      "https://images.pexels.com/photos/28903096/pexels-photo-28903096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    seasonInfo: "Summer Season",
    unit: "kg",
    featured: true,
  },
  {
    id: "fruit-grapes",
    category: "fruit",
    name: "Grapes",
    description: "Sweet farm-grown grapes, harvested at peak ripeness.",
    image:
      "https://images.pexels.com/photos/20327984/pexels-photo-20327984.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "COMING_SOON",
    unit: "kg",
    featured: true,
  },

  // ---------------- PULSES / OTHER PRODUCE ----------------
  {
    id: "pulse-black-chana",
    category: "pulse",
    name: "Black Chana",
    description: "Farm-grown black chickpeas, naturally cultivated and harvested.",
    image: "/chickpeas.png",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "pulse-white-chana",
    category: "pulse",
    name: "White Chana",
    description: "Farm-grown white chickpeas, sourced directly from our fields.",
    image:
      "https://images.pexels.com/photos/10111952/pexels-photo-10111952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "pulse-masoor-dal",
    category: "pulse",
    name: "Masoor Dal",
    description: "Naturally grown masoor dal, cleaned and prepared from our own harvest.",
    image:
      "/pexels-enginakyurt-10111851.jpg",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "pulse-turmeric",
    category: "powder",
    name: "Turmeric Powder",
    description: "Farm-grown turmeric, sun-dried and ground close to source.",
    image:
      "https://images.pexels.com/photos/30688214/pexels-photo-30688214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "AVAILABLE",
    unit: "kg",
    featured: true,
  },
  {
    id: "pulse-moringa",
    category: "powder",
    name: "Moringa Powder",
    description: "Moringa powder made from farm-grown moringa leaves, dried naturally.",
    image:
      "https://images.pexels.com/photos/7149595/pexels-photo-7149595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "AVAILABLE",
    unit: "100g",
    featured: true,
  },

  // ---------------- GRAINS ----------------
  {
    id: "grain-wheat",
    category: "grain",
    name: "Wheat",
    description: "Naturally grown wheat, harvested with care from our fields.",
    image: "/melissa-askew-y4xZxzN754M-unsplash.jpg",
    status: "AVAILABLE",
    unit: "kg",
    quantityStep: 10,
    featured: true,
  },
  {
    id: "grain-corn",
    category: "grain",
    name: "Corn",
    description: "Farm-grown corn, harvested fresh and offered according to season.",
    image:
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    status: "SEASONAL",
    seasonInfo: "Seasonal Harvest",
    unit: "kg",
    featured: true,
  },
  {
    id: "grain-rice",
    category: "grain",
    name: "Rice",
    description: "Naturally grown rice, carefully harvested and selected for quality.",
    image: "/rice_under_1mb.png",
    status: "AVAILABLE",
    unit: "KG",
    featured: true,
  },
];

export const getProductsByCategory = (category: ProductCategory) =>
  PRODUCTS.filter((p) => p.category === category);

export const getFeaturedByCategory = (category: ProductCategory) =>
  PRODUCTS.filter((p) => p.category === category && p.featured);
