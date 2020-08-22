import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { ArticleModel } from "../article/article";

// const articleData = require("./articleData.json")

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  articles: types.array(ArticleModel),
});
// .actions(self => ({ // todo mpf add mock article JSON data
//   afterCreate() {
//     self.articles = articleData.articles
//   },
// }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

export const initialRootStoreState: SnapshotIn<typeof RootStoreModel> = {
  articles: [
    {
      id: "article-1",
      title: "Article 1: Stunning Landscape Images",
      content: "Press for more info",
    },
    {
      id: "article-2",
      title: "Article 2: Stunning Landscape Images",
      content: "Press for more info",
    },
    {
      id: "article-3",
      title: "Article 3: Stunning Landscape Images",
      content: "Press for more info",
    },
    {
      id: "article-4",
      title: "Article 4: Stunning Landscape Images",
      content: "Press for more info",
    },
    {
      id: "article-5",
      title: "Article 5: Stunning Landscape Images",
      content: "Press for more info",
    },
  ],
};
