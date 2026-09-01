/**
 * Cores Oficiais da Marca IdeiasEmRede
 * Sem uso de branco puro (#FFFFFF).
 */
export const THEME_COLORS = {
  // Texto claro / Fundo claro
  white: '#ffffff31',
  bgLight: '#fdfcfb',
  bgLight2: '#f1dbcb',
  textLight: '#f7f5f4',

  // Texto escuro / Fundo escuro
  bgDark: '#291C19',
  textDark: '#5e4f4c',

  // Cor principal (Terracota)
  primary: '#b55b43',
  lightPrimary: '#f5e4de',

  // Cor de destaque / Accent (Laranja Vibrante)
  accent: '#de5737',
  lightAccent: '#ecb3a6',

  // Cor secundária (Azul Petróleo)
  secondary: '#4b788b',
  lightSecondary: '#dbeaf0',

  // Cinza Neutro
  gray: '#51595C',

  // Derivadas e tons de apoio (sem branco puro)
  cardBg: 'rgba(240, 231, 227, 0.65)',
  cardBgLight: '#fcf1e8',
  cardBgSolid: '#EAE3E1',
  borderLightBg: '#e9e5e4',
  borderLight: '#f3ebea',
  borderDark: '#3D2D29',
  primaryHover: '#9e4c36',
  accentHover: '#c4482b',
  secondaryHover: '#3b6170',
} as const;

export type ThemeColors = typeof THEME_COLORS;
