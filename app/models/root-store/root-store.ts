import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ArticleModel } from ".."

/**
 * A RootStore model.
 */
//prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  // articles: types.array(ArticleModel)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

export const initalRootStoreState: SnapshotIn<typeof RootStoreModel> = {
  articles: [
    {title: "Article 1", content: "123.."},
    {title: "Article 2", content: "123.."},
    {title: "Article 3", content: "123.."},
  ]
}
