import { ArticleModel, Article } from './article';

test('can be created', () => {
  const instance: Article = ArticleModel.create({});

  expect(instance).toBeTruthy();
});
