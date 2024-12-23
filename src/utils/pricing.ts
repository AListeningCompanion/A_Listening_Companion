export interface SessionPrice {
  duration: string;
  price: number;
  label: string;
}

export const sessionPrices: SessionPrice[] = [
  { duration: "15", price: 2500, label: "15 minutes - ₹25" },
  { duration: "30", price: 5000, label: "30 minutes - ₹50" },
  { duration: "60", price: 10000, label: "1 hour - ₹100" }
];

export const getSessionPrice = (duration: string): number => {
  const session = sessionPrices.find(s => s.duration === duration);
  return session?.price || 0;
};