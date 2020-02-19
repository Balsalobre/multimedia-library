import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../core/movie.interface';
import { Ebook } from '../core/ebook.interface';
import { VideoGame } from '../core/videogame.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private http: HttpClient,
  ) { }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  async getAllMovies(): Promise<Movie[]> {
    const movies: any = await this.http.get('./assets/json/movies.json').toPromise();
    const transformData = movies.reduce((p, c) => {
      const item = {
        ...c,
        type: 'movie',
        date: new Date(c.released),
        description: c.plot
      };
      const { plot, released, rated, year, language, metascore,
        imdbRating, imdbID, writer, response, ...rest } = item;
      p.push(rest);
      return p;
    }, []);
    return transformData;
  }

  async getAllEbooks(): Promise<Ebook[]> {
    const data: any = await this.http.get('./assets/json/ebooks.json').toPromise();
    const eBooks = data.books.reduce((p, c) => {
      const item = { ...c, type: 'ebook', date: new Date(c.published), images: ['./assets/img/placeholder.jpg'] };
      const { published, ...rest } = item;
      p.push(rest);
      return p;
    }, []);
    return eBooks;
  }

  async getAllVideoGames(): Promise<VideoGame[]> {
    const data: any = await this.http.get('./assets/json/videogames.json').toPromise();
    const videoGames = data.reduce((p, c) => {
      const item = {
        ...c,
        type: 'videogame',
        images: ['./assets/img/placeholder.jpg'],
        description: 'Aún no tenemos descripción para este juego',
        date: this.randomDate(new Date(2017, 0, 1), new Date()),
      };
      const {id, isFullyOptimized, isHighlightsSupported, status, ...rest  } = item;
      p.push(rest);
      return p;
    }, []);
    return videoGames;
  }

}
