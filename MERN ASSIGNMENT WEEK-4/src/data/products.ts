import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-fidelity audio with active noise cancellation and premium build quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    description: "Advanced fitness tracking, heart monitoring, and seamless smartphone integration.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Ultra-Slim Laptop",
    price: 1299.99,
    description: "Powerful performance in an incredibly thin and light design.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    category: "Computers"
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    price: 699.99,
    description: "Immersive gaming experience with high refresh rate and HDR support.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    category: "Gaming"
  }
];