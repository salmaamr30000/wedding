export interface WeddingConfig {
  brideName: string;
  groomName: string;
  initials: string;
  weddingDate: string; // YYYY-MM-DD
  weddingDisplayDate: string;
  weddingTime: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  whatsappNumber: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconName: 'clock' | 'heart' | 'utensils' | 'music' | 'sparkles';
}

export interface PaletteColor {
  name: string;
  hex: string;
  description: string;
}
