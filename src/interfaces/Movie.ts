import { GENRES_MAP } from '@/services/GenresMap';

export type Genre = keyof typeof GENRES_MAP;

export interface Movie {
  id: number;
  title: string;
  year: number;
  description: string;
  image_path: string;
  genre_type: Genre;
  rating_score: number;
  trailer_link: string;
}
