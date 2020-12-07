import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'http://localhost:3002/';

  constructor(private http: HttpClient) {}

  private stuff: Article[] = [
    {
      _id: '324sdfmoih3',
      title: 'My thing',
      description: 'All about my thing',
      imageUrl:
        'https://c.pxhere.com/photos/30/d6/photographer_camera_lens_slr_photography_hands-1079029.jpg!d',
      price: 4900,
      userId: 'will',
    },
    {
      _id: '324sdfmoih4',
      title: 'Another thing',
      description: 'All about my thing',
      imageUrl:
        'https://www.publicdomainpictures.net/pictures/10000/velka/1536-1249273362hbHb.jpg',
      price: 2600,
      userId: 'will',
    },
  ];
  public stuff$ = new Subject<Article[]>();

  getStuff() {
    this.http.get(this.url + 'api/stuff').subscribe(
      (stuff: Article[]) => {
        if (stuff) {
          this.stuff = stuff;
          this.emitStuff();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitStuff() {
    this.stuff$.next(this.stuff);
  }

  getArticleById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'api/stuff/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewArticle(thing: Article) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'api/stuff', thing).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewArticleWithFile(thing: Article, image: File) {
    return new Promise((resolve, reject) => {
      const thingData = new FormData();
      thingData.append('thing', JSON.stringify(thing));
      thingData.append('image', image, thing.title);
      this.http.post(this.url + 'api/stuff', thingData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyArticle(id: string, thing: Article) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'api/stuff/' + id, thing).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyArticleWithFile(id: string, thing: Article, image: File | string) {
    return new Promise((resolve, reject) => {
      let thingData: Article | FormData;
      if (typeof image === 'string') {
        thing.imageUrl = image;
        thingData = thing;
      } else {
        thingData = new FormData();
        thingData.append('thing', JSON.stringify(thing));
        thingData.append('image', image, thing.title);
      }
      this.http.put(this.url + 'api/stuff/' + id, thingData).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteArticle(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + 'api/stuff/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
