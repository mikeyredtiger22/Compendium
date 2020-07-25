import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ArticleModel = types
  .model("Article")
  .props({
    title: types.string,
    content: types.string,
  })
  // .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  // .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ArticleType = Instance<typeof ArticleModel>
export interface Article extends ArticleType {}
type ArticleSnapshotType = SnapshotOut<typeof ArticleModel>
export interface ArticleSnapshot extends ArticleSnapshotType {}
