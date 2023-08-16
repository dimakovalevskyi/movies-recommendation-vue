import type { Filters } from '@/interfaces/Filters';
import type { Movie } from '@/interfaces/Movie';

export class RecommendationsService {
  private cachedDB = null;
  private apiUrl = null;

  constructor(private apiUrl: string = 'db.json') {
  }

  private filterListByFilters(list: Movie[], filters: Filters): Movie[] {
    return list.filter(movie => {
      let result = true;

      if (filters.genre) {
        result = result && movie.genre_type === filters.genre;
      }
      if (filters.year) {
        result = result && movie.year === filters.year;
      }
      if (filters.score) {
        result = result && movie.rating_score >= filters.score;
      }

      return result;
    });
  }

  private getDB(): Promise<Movie[]> {
    if (this.cachedDB) {
      return Promise.resolve(this.cachedDB);
    }
    return fetch(this.apiUrl)
      .then(res => res.json())
      .then((list: Movie[]) => {
        this.cachedDB = list;
        return list;
      });
  }

  private getAllMoviesForFilters(filters: Filters): Promise<Movie[]> {
    return this.getDB()
      .then((list: Movie[]) => this.filterListByFilters(list, filters));
  }

  private getRandomItemFromArray<T>(items: T[]): T|null {
    if (items.length === 0) {
      return null;
    }
    return items[Math.floor(Math.random() * items.length)];
  }

  getRecommendationByFilters(filters: Filters): Promise<Movie | null> {
    return this.getAllMoviesForFilters(filters)
      .then((list: Movie[]) => this.getRandomItemFromArray(list));
  }
}
