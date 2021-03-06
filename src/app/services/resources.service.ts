import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../core/movie.interface';
import { Ebook } from '../core/ebook.interface';
import { VideoGame } from '../core/videogame.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private itemDataSubject = new BehaviorSubject<any>(null);
  private itemEditSubject = new BehaviorSubject<any>(null);
  private itemArrayToEdit = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
  ) { }

  updateItemDataSubject(data: any) {
    this.itemDataSubject.next(data);
  }

  updateItemEditSubject(data: any) {
    this.itemEditSubject.next(data);
  }

  updateItemArrayToEdit(data: any) {
    this.itemArrayToEdit.next(data);
  }

  onItemArrayToEditChange(): Observable<any> {
    return this.itemArrayToEdit.asObservable();
  }

  onItemEditChange(): Observable<any> {
    return this.itemEditSubject.asObservable();
  }

  onItemDataChange(): Observable<any> {
    return this.itemDataSubject.asObservable();
  }

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
        description: 'A??n no tenemos descripci??n para este juego',
        date: this.randomDate(new Date(2017, 0, 1), new Date()),
      };
      const {id, isFullyOptimized, isHighlightsSupported, status, ...rest  } = item;
      p.push(rest);
      return p;
    }, []);
    return videoGames;
  }

}
