// Theme colors and styles for the BloemKracht app
// Hippie/Flower Power/Indian inspired color palette

export const colors = {
  // Primary colors
  primary: '#FF9800',    // Orange - warm, inviting
  secondary: '#9C27B0',  // Purple - spiritual, creative
  accent: '#E91E63',     // Pink - loving, compassionate
  
  // Background colors
  bgLight: '#FFF8E1',    // Cream - soft, warm background
  bgMedium: '#FFECB3',   // Light amber - spiritual warmth
  bgDark: '#FFCCBC',     // Light peach - earth tone
  
  // Text colors
  text: '#5D4037',       // Dark brown - grounded, earthy
  textLight: '#7D6E63',  // Medium brown - soft, readable
  
  // Specific session colors
  morning: '#FFC107',    // Amber - morning energy
  knee: '#4DB6AC',       // Teal - healing, therapeutic
  evening: '#9C27B0',    // Purple - calming, spiritual
  
  // Motivational elements
  success: '#8BC34A',    // Green - growth, achievement
  wisdom: '#3F51B5',     // Indigo - wisdom, insight
  
  // Misc
  mandala1: '#F06292',   // Pink
  mandala2: '#AB47BC',   // Purple
  mandala3: '#42A5F5',   // Blue
  mandala4: '#66BB6A',   // Green
  mandala5: '#FFCA28',   // Amber
  mandala6: '#FF7043',   // Deep Orange
  mandala7: '#EC407A',   // Pink
};

export const fonts = {
  primary: 'System',      // System font for readability
  // Note: In a real app, you'd use custom fonts
  // For example: 'Poppins', 'Quicksand', or 'Comfortaa'
  
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
  },
  
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

// Mandala patterns for the app's visual elements
export const mandalaPatterns = {
  // These would be SVG patterns in a real app
  simple: 'simple_mandala',
  detailed: 'detailed_mandala',
  progress: 'progress_mandala',
  achievement: 'achievement_mandala',
};

// Spacing system for consistent UI
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Shadow styles for elevation
export const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

// Border radius for consistent UI rounding
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  circle: 9999,
};
