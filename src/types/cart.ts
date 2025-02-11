export interface CartItem {
  id: string;
  name: string;
  price: number;
  location?: string;
  licenseType?: string;
  hours?: number;
  requiresLocation: boolean;
  testDetails?: {
    fullName: string;
    phone: string;
    email: string;
    testType: "G" | "G2";
    testTime: string;
    testDate: string;
    licenseNumber: string;
    licenseExpiry: string;
    numberOfPeople: number;
  };
} 