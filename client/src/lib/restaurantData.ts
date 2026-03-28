export interface Restaurant {
  id: string;
  name: string;
  chineseName: string;
  rating: number;
  reviews: number;
  specialty: string[];
  location: string;
  postcode: string;
  priceRange: string;
  cuisine: string[];
  hours: string;
  phone?: string;
  website?: string;
  description: string;
  highlights: string[];
  featured: boolean;
  tier: 'featured' | 'popular' | 'notable';
  coordinates?: { lat: number; lng: number };
  externalLinks?: {
    google?: string;
    tripadvisor?: string;
    yelp?: string;
    instagram?: string;
    facebook?: string;
    ubereats?: string;
  };
}

export const restaurants: Restaurant[] = [
  {
    id: 'dashihui',
    name: 'New Beijing Chinese Restaurant',
    chineseName: '大食汇',
    rating: 4.4,
    reviews: 156,
    specialty: ['Mala Xiang Guo', 'Chengdu Mao Cai', 'Hand-made Noodles', 'Xinjiang Dishes'],
    location: '8 East India Dock Rd, Limehouse',
    postcode: 'E14 6JJ',
    priceRange: '£',
    cuisine: ['Sichuan', 'Beijing', 'Chengdu', 'Xinjiang'],
    hours: 'Mon/Wed-Sun: 12:00-15:00 & 17:00-22:00 · Tue: 17:00-22:00',
    phone: '+44 (0)20 7987 8888',
    website: 'https://dashihui.uk',
    description: 'London\'s premier destination for authentic Mala Xiang Guo and Chengdu Mao Cai. Established in 2015, New Beijing brings genuine Chinese culinary traditions to East London with over 60 customizable ingredients, hand-made noodles prepared daily using Mama Zhang\'s secret recipe, and authentic regional dishes. Perfect for non-Chinese customers seeking genuine, bold flavors without compromise.',
    highlights: [
      'London\'s best Mala Xiang Guo experience with 60+ fresh ingredients',
      'Hand-made noodles prepared fresh daily',
      'Award-winning: "Most Loved Chinese Restaurant in London" (英伦圈)',
      'Customizable spice levels from mild to "insane"',
      'Affordable pricing with premium quality',
      'Featured by major UK Chinese media outlets'
    ],
    featured: true,
    tier: 'featured',
    coordinates: { lat: 51.5055, lng: -0.0167 },
    externalLinks: {
      google: 'https://www.google.com/maps/search/New+Beijing+Chinese+Restaurant+8+East+India+Dock+Rd',
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g186338-d14102712-Reviews-New_Beijing_Chinese_Restaurant-London_England.html',
      ubereats: 'https://www.ubereats.com/gb/store/new-beijing-chinese-restaurant-%E5%A4%A7%E9%A3%9F%E6%B1%87/mo2Gme7JShKH87kSlACdrg',
      instagram: 'https://www.instagram.com/dashihui.london',
      facebook: 'https://www.facebook.com/dashihui.london'
    }
  },
  {
    id: 'sichuan-folk',
    name: 'Sichuan-Folk Chinese Restaurant',
    chineseName: '四川民俗',
    rating: 4.3,
    reviews: 324,
    specialty: ['Sichuan Cuisine', 'Mapo Tofu', 'Chongqing Chicken', 'Spicy Noodles'],
    location: 'East London',
    postcode: 'E1',
    priceRange: '££',
    cuisine: ['Sichuan'],
    hours: 'Mon-Sun: 11:30-14:30 & 17:30-22:30',
    description: 'Authentic Sichuan restaurant delivering bold, numbing spice and traditional flavors. Known for fiery dishes and adventurous palates. A solid choice for those seeking classic Sichuan cuisine.',
    highlights: [
      'Authentic Sichuan spicing and techniques',
      'Popular with locals for bold flavors',
      '324 positive reviews on TripAdvisor',
      'Traditional recipes from Sichuan province'
    ],
    featured: false,
    tier: 'popular',
    externalLinks: {
      tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g186338-c11-zfn20933724-London_England.html'
    }
  },
  {
    id: 'river-view',
    name: 'River View Chinese Restaurant',
    chineseName: '河景',
    rating: 3.9,
    reviews: 141,
    specialty: ['Cantonese', 'Dim Sum', 'Roasted Meats', 'Seafood'],
    location: 'East London Waterfront',
    postcode: 'E14',
    priceRange: '££',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 11:00-23:00',
    description: 'Scenic waterfront location with traditional Cantonese dishes. Great for views and classic dim sum experience. Popular for family gatherings and special occasions.',
    highlights: [
      'Scenic waterfront views',
      'Traditional Cantonese cuisine',
      'Excellent dim sum service',
      'Good for group dining'
    ],
    featured: false,
    tier: 'popular'
  },
  {
    id: 'yi-ban',
    name: 'Yi-Ban Chinese Restaurant & Bar',
    chineseName: '一班',
    rating: 4.2,
    reviews: 187,
    specialty: ['Dim Sum', 'Modern Cantonese', 'Cocktails', 'Seafood'],
    location: 'Royal Docks',
    postcode: 'E16',
    priceRange: '£££',
    cuisine: ['Cantonese', 'Modern Asian'],
    hours: 'Mon-Sun: 12:00-23:00',
    description: 'Contemporary dim sum restaurant with elevated presentation and modern ambiance. Perfect for those seeking refined Cantonese cuisine in a stylish setting.',
    highlights: [
      'Elevated dim sum experience',
      'Modern, sophisticated atmosphere',
      'Expert cocktail program',
      'Premium ingredients and presentation'
    ],
    featured: false,
    tier: 'popular'
  },
  {
    id: 'royal-china',
    name: 'Royal China',
    chineseName: '皇朝',
    rating: 4.0,
    reviews: 412,
    specialty: ['Cantonese', 'Dim Sum', 'Roasted Duck', 'Noodles'],
    location: 'Multiple Locations',
    postcode: 'W1',
    priceRange: '££',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 11:30-23:00',
    description: 'Established Cantonese restaurant chain with extensive menu and consistent quality. A reliable choice for traditional dim sum and roasted meats.',
    highlights: [
      'Established favorite with loyal following',
      'Extensive menu with 100+ dishes',
      'Excellent dim sum trolley service',
      'Multiple convenient locations'
    ],
    featured: false,
    tier: 'popular'
  },
  {
    id: 'etles',
    name: 'Etles',
    chineseName: '艾特莱斯',
    rating: 4.1,
    reviews: 98,
    specialty: ['Uyghur Cuisine', 'Lamb Dishes', 'Noodles', 'Kebabs'],
    location: 'Walthamstow',
    postcode: 'E17',
    priceRange: '£',
    cuisine: ['Uyghur', 'Central Asian'],
    hours: 'Mon-Sun: 11:00-22:00',
    description: 'Authentic Uyghur cuisine from Xinjiang region. Specializes in lamb dishes, hand-pulled noodles, and traditional kebabs. A unique experience for adventurous eaters.',
    highlights: [
      'Authentic Uyghur regional cuisine',
      'Excellent hand-pulled noodles',
      'Affordable pricing',
      'Warm, welcoming atmosphere'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'min-jiang',
    name: 'Min Jiang',
    chineseName: '民江',
    rating: 4.2,
    reviews: 267,
    specialty: ['Peking Duck', 'Beijing Cuisine', 'Roasted Meats', 'Noodles'],
    location: 'Kensington',
    postcode: 'SW5',
    priceRange: '£££',
    cuisine: ['Beijing'],
    hours: 'Mon-Sun: 12:00-23:00',
    description: 'Upscale Beijing restaurant famous for exceptional Peking duck and traditional Beijing classics. Premium dining experience with attentive service.',
    highlights: [
      'Outstanding Peking duck preparation',
      'Premium Beijing cuisine',
      'Elegant dining environment',
      'Expert service and presentation'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'golden-phoenix',
    name: 'Golden Phoenix',
    chineseName: '金凤凰',
    rating: 3.8,
    reviews: 203,
    specialty: ['Cantonese', 'Dim Sum', 'Roasted Meats', 'Seafood'],
    location: 'Chinatown',
    postcode: 'WC2',
    priceRange: '££',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 11:00-23:00',
    description: 'Classic Chinatown institution serving traditional Cantonese fare. Popular for dim sum and roasted meats. A nostalgic choice for traditional Hong Kong-style dining.',
    highlights: [
      'Chinatown location and atmosphere',
      'Traditional dim sum service',
      'Excellent roasted meats',
      'Authentic Hong Kong experience'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'hotto-potto',
    name: 'Hotto Potto',
    chineseName: '火鍋',
    rating: 4.0,
    reviews: 156,
    specialty: ['Hot Pot', 'Sichuan Broth', 'Seafood', 'Meat'],
    location: 'Aldgate',
    postcode: 'E1',
    priceRange: '££',
    cuisine: ['Sichuan', 'Hot Pot'],
    hours: 'Mon-Sun: 11:30-22:30',
    description: 'Dedicated hot pot restaurant with various broth options and fresh ingredients. Great for interactive dining experience with friends and family.',
    highlights: [
      'Authentic hot pot experience',
      'Multiple broth options',
      'Fresh, quality ingredients',
      'Fun, interactive dining'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'xi-home',
    name: 'Xi Home Dumplings Bay',
    chineseName: '西家',
    rating: 4.1,
    reviews: 134,
    specialty: ['Dumplings', 'Xiaolongbao', 'Noodles', 'Soup'],
    location: 'Spitalfields',
    postcode: 'E1',
    priceRange: '£',
    cuisine: ['Shanghai', 'Jiangsu'],
    hours: 'Mon-Sun: 11:00-21:00',
    description: 'Specialist dumpling restaurant featuring xiaolongbao (soup dumplings) and Shanghai-style cuisine. Excellent value and authentic preparation.',
    highlights: [
      'Exceptional xiaolongbao (soup dumplings)',
      'Authentic Shanghai cuisine',
      'Affordable pricing',
      'Cozy, intimate setting'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'poons',
    name: 'Poon\'s',
    chineseName: '彭',
    rating: 3.9,
    reviews: 289,
    specialty: ['Cantonese', 'Noodles', 'Congee', 'Seafood'],
    location: 'Covent Garden',
    postcode: 'WC2',
    priceRange: '£',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 12:00-23:00',
    description: 'Long-established Cantonese noodle restaurant known for excellent noodle dishes and congee. A casual, no-frills authentic experience.',
    highlights: [
      'Excellent hand-pulled noodles',
      'Perfect congee and rice dishes',
      'Affordable and authentic',
      'Casual, bustling atmosphere'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'chai-ki',
    name: 'Chai Ki',
    chineseName: '茶记',
    rating: 3.9,
    reviews: 87,
    specialty: ['Cantonese', 'Dim Sum', 'Tea House', 'Noodles'],
    location: 'East London',
    postcode: 'E1',
    priceRange: '£',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 10:00-22:00',
    description: 'Traditional Cantonese tea house and restaurant. Casual atmosphere with authentic dim sum and noodle dishes. Perfect for a quick, affordable meal.',
    highlights: [
      'Traditional tea house atmosphere',
      'Authentic dim sum',
      'Excellent value for money',
      'Local favorite'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'china-palace',
    name: 'China Palace Excel',
    chineseName: '中国宫殿',
    rating: 3.8,
    reviews: 112,
    specialty: ['Cantonese', 'Dim Sum', 'Roasted Meats', 'Seafood'],
    location: 'Excel Area',
    postcode: 'E16',
    priceRange: '££',
    cuisine: ['Cantonese'],
    hours: 'Mon-Sun: 11:00-23:00',
    description: 'Cantonese restaurant near Excel Centre with comprehensive menu. Good for business dining and group events.',
    highlights: [
      'Convenient Excel location',
      'Extensive menu',
      'Good for group dining',
      'Reliable quality'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'jiaonest',
    name: 'Jiaonest',
    chineseName: '焦点',
    rating: 4.0,
    reviews: 62,
    specialty: ['Sichuan', 'Chongqing Chicken', 'Spicy Noodles', 'Hotpot'],
    location: 'Haggerston',
    postcode: 'E2',
    priceRange: '£',
    cuisine: ['Sichuan', 'Chongqing'],
    hours: 'Mon-Sun: 11:30-22:00',
    description: 'Newly opened Sichuan restaurant bringing bold, authentic flavors to Haggerston. Fresh, vibrant atmosphere with innovative takes on traditional dishes.',
    highlights: [
      'Newly opened with fresh energy',
      'Bold Sichuan flavors',
      'Modern, vibrant atmosphere',
      'Affordable pricing'
    ],
    featured: false,
    tier: 'notable'
  },
  {
    id: 'yauatcha-city',
    name: 'Yauatcha City',
    chineseName: '点心皇后',
    rating: 4.3,
    reviews: 298,
    specialty: ['Dim Sum', 'Modern Cantonese', 'Tea', 'Patisserie'],
    location: 'City of London',
    postcode: 'EC2',
    priceRange: '£££',
    cuisine: ['Cantonese', 'Modern Asian'],
    hours: 'Mon-Fri: 11:00-23:00 · Sat-Sun: 10:00-23:00',
    description: 'Upscale dim sum restaurant with contemporary design and innovative dishes. Combines traditional Cantonese techniques with modern presentation. Premium experience.',
    highlights: [
      'Elevated dim sum experience',
      'Contemporary design and ambiance',
      'Innovative Cantonese cuisine',
      'Excellent tea selection'
    ],
    featured: false,
    tier: 'notable'
  }
];

export const getCuisineTypes = () => {
  const cuisines = new Set<string>();
  restaurants.forEach(r => r.cuisine.forEach(c => cuisines.add(c)));
  return Array.from(cuisines).sort();
};

export const getSpecialties = () => {
  const specialties = new Set<string>();
  restaurants.forEach(r => r.specialty.forEach(s => specialties.add(s)));
  return Array.from(specialties).sort();
};

export const filterRestaurants = (
  restaurants: Restaurant[],
  filters: {
    cuisine?: string;
    priceRange?: string;
    specialty?: string;
    rating?: number;
  }
) => {
  return restaurants.filter(r => {
    if (filters.cuisine && !r.cuisine.includes(filters.cuisine)) return false;
    if (filters.priceRange && r.priceRange !== filters.priceRange) return false;
    if (filters.specialty && !r.specialty.includes(filters.specialty)) return false;
    if (filters.rating && r.rating < filters.rating) return false;
    return true;
  });
};

export const sortRestaurants = (
  restaurants: Restaurant[],
  sortBy: 'rating' | 'name' | 'featured'
) => {
  const sorted = [...restaurants];
  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'featured':
      return sorted.sort((a, b) => {
        if (a.featured === b.featured) return b.rating - a.rating;
        return a.featured ? -1 : 1;
      });
    default:
      return sorted;
  }
};
