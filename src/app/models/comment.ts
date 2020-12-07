export interface CommentInterface {
  content: string;
  createdAt: Date;
  upadatesAt?: Date;
}

export class CommentClass implements CommentInterface {
  content: string;
  createdAt: Date;
  upadatesAt?: Date;

  constructor(cntt: string, crtat: Date, updat: Date) {
    this.content = cntt;
    this.createdAt = crtat;
    this.upadatesAt = updat;
  }

  // Getters
  getContent(): string {
    return this.content;
  }
  getDateOfCreation(): Date {
    return this.createdAt;
  }
  getDateOfLastUpdate(): Date {
    return this.upadatesAt;
  }

  // Setters
  setContent(cntt: string): void {
    this.content = cntt;
  }
  setDateOfCreation(crtat: Date): void {
    this.createdAt = crtat;
  }
  setDateOfLastUpdate(updat: Date): void {
    this.upadatesAt = updat;
  }

  init(): void{
    this.content = '';
    this.createdAt = new Date();
    this.upadatesAt = this.createdAt;
  }
}
