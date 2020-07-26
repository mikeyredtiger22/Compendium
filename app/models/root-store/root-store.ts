import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ArticleModel } from "../article/article"

// const articleData = require("./articleData.json")

/**
 * A RootStore model.
 */
//prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  articles: types.array(ArticleModel)
})
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
    {title: "Article 1: Stunning Landscape Images", content: "Press for more info"},
    {title: "Article 2: Stunning Landscape Images", content: "Press for more info"},
    {title: "Article 3: Stunning Landscape Images", content: "Press for more info"},
    {title: "Article 4: Stunning Landscape Images", content: "Press for more info"},
    {title: "Article 5: Stunning Landscape Images", content: "Press for more info"},
  ]
}
