export const articleData: Array<Article> = require('../../../assets/content/content.json');

export type Article = {
  title: string;
  content: string;
  imageUrl: string;
};
