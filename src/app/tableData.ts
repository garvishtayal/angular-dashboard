// tableData.ts

export interface FarmingMetrics {
  id: number;
  crop: string;
  yield: number;
  area: number;
  revenue: number;
}

export const farmingMetricsData: FarmingMetrics[] = [
  { id: 1, crop: 'Wheat', yield: 1000, area: 10, revenue: 5000 },
  { id: 2, crop: 'Corn', yield: 800, area: 8, revenue: 4000 },
  { id: 3, crop: 'Rice', yield: 1200, area: 12, revenue: 6000 },
  { id: 4, crop: 'Soybean', yield: 900, area: 9, revenue: 4500 },
  { id: 5, crop: 'Barley', yield: 1100, area: 11, revenue: 5500 },
  { id: 6, crop: 'Oats', yield: 750, area: 7.5, revenue: 3750 },
  { id: 7, crop: 'Potatoes', yield: 850, area: 8.5, revenue: 4250 },
  { id: 8, crop: 'Tomatoes', yield: 950, area: 9.5, revenue: 4750 },
  { id: 9, crop: 'Apples', yield: 1300, area: 13, revenue: 6500 },
  { id: 10, crop: 'Oranges', yield: 1250, area: 12.5, revenue: 6250 },
  { id: 11, crop: 'Grapes', yield: 1400, area: 14, revenue: 7000 },
  { id: 12, crop: 'Strawberries', yield: 1050, area: 10.5, revenue: 5250 },
  { id: 13, crop: 'Carrots', yield: 800, area: 8, revenue: 4000 },
  { id: 14, crop: 'Lettuce', yield: 700, area: 7, revenue: 3500 },
  { id: 15, crop: 'Cabbage', yield: 600, area: 6, revenue: 3000 },
];
