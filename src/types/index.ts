export interface CartItem {
  id: string;
  name: string;
  price: number;
  location?: string;
  licenseType?: string;
  hours?: number;
  requiresLocation: boolean;
} 