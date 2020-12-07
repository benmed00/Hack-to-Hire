import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  private article: Article[] = [
    {
      id: 1000,
      name: 'Premier Article',
      reference: '324sdfmoih1',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      draft: true,
      createdAt: new Date('07-12-2020'),
      updateAt: new Date('07-12-2020'),
    },
    {
      id: 1001,
      name: 'Deusieme Article',
      reference: '324sdfmoih2',
      content:
        'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. ',
      draft: true,
      createdAt: new Date('07-12-2020'),
      updateAt: new Date('07-12-2020'),
    },
    {
      id: 1002,
      name: 'Troisieme Article',
      reference: '324sdfmoih3',
      content:
        'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners.',
      draft: true,
      createdAt: new Date('07-12-2020'),
      updateAt: new Date('07-12-2020'),
    },
    {
      id: 1003,
      name: 'Quatrieme Article',
      reference: '324sdfmoih4',
      content:
        'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small. Felicity now law securing breeding likewise extended and. Roused either who favour why ham.',
      draft: true,
      createdAt: new Date('07-12-2020'),
      updateAt: new Date('07-12-2020'),
    },
  ];
  public article$ = new Subject<Article[]>();

  getArticle() {
    this.http.get(this.url + 'api/article').subscribe(
      (article: Article[]) => {
        if (article) {
          this.article = article;
          this.emitArticle();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitArticle() {
    this.article$.next(this.article);
  }

  getArticleById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'api/article/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewArticle(article: Article) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'api/article', article).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // createNewArticleWithPisture(article: Article, image: File) {
  //   return new Promise((resolve, reject) => {
  //     const articleData = new FormData();
  //     articleData.append('article', JSON.stringify(article));
  //     articleData.append('image', image, article.title);
  //     this.http.post(this.url + 'api/article', articleData).subscribe(
  //       (response) => {
  //         resolve(response);
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  }

  modifyArticle(id: string, article: Article) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'api/article/' + id, article).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyArticleWithFile(id: string, article: Article, image: File | string) {
    return new Promise((resolve, reject) => {
      let articleData: Article | FormData;
      if (typeof image === 'string') {
        article.imageUrl = image;
        articleData = article;
      } else {
        articleData = new FormData();
        articleData.append('article', JSON.stringify(article));
        articleData.append('image', image, article.title);
      }
      this.http.put(this.url + 'api/article/' + id, articleData).subscribe(
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
      this.http.delete(this.url + 'api/article/' + id).subscribe(
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
