export interface RouteProduct {
  id: string;
  title: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  description: string;
  type: "G" | "G2";
}

// Using a single image from Unsplash for all products
const ROUTE_IMAGE = "https://images.unsplash.com/photo-1496055401924-5e7fdc885742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Generate products for all locations and test types
export const ROUTE_PRODUCTS: RouteProduct[] = [
  // Locations array to help generate products
  "Missisauga", "Toronto Downsview", "Toronto Etobicoke", "Toronto Metro East",
  "Brampton", "Guelph", "Hamilton", "Newmarket", "Oakville", "Oshawa",
  "Port Hopes", "Toronto Port Union", "Burlington", "Barrie", "Collingwood",
  "Lindsay", "Orangeville", "Peterborough", "St. Catherines", "Stratford",
  "Balleville", "Brantford", "Clinton", "Haliburton", "Kitchener", "London",
  "Madoc", "Owen Sound", "Simcoe", "Tillsonburg", "Woodstock", "Bancroft",
  "Huntsville", "Orilia", "Parry Sound", "Walkerton", "Barrys Bay", "Kingston"
].sort().flatMap(location => [
  // Generate G2 route for each location
  {
    id: `${location.toLowerCase().replace(/\s+/g, '-')}-g2-route1`,
    title: `${location} G2 Route1 Drive Test Centre Routes`,
    location,
    originalPrice: 15.00,
    discountedPrice: 9.99,
    image: ROUTE_IMAGE,
    description: `Comprehensive guide for G2 test routes at ${location} Drive Test Centre`,
    type: 'G2' as const
  },
  // Generate G route for each location
  {
    id: `${location.toLowerCase().replace(/\s+/g, '-')}-g-route1`,
    title: `${location} G Route1 Drive Test Centre Routes`,
    location,
    originalPrice: 15.00,
    discountedPrice: 9.99,
    image: ROUTE_IMAGE,
    description: `Detailed routes for G test at ${location} Drive Test Centre`,
    type: 'G' as const
  }
]);

// Export locations array for filters
export const LOCATIONS = Array.from(new Set(ROUTE_PRODUCTS.map(product => product.location))).sort(); 