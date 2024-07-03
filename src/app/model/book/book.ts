import { Author } from '../author/author';

export class Book {
  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public author: Author,
    public synopsis: string,
    public cover: string
  ) {}
}
