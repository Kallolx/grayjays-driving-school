export interface CartItem {
  id: string;
  name: string;
  price: number;
  requiresLocation: boolean;
  licenseType?: string;
  location?: string;
  hours?: number;
  date?: string;
  time?: string;
} 