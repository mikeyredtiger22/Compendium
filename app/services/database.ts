import * as firebase from "firebase";
import Constants from "expo-constants";
import { firebaseConfig } from "./database-config";

export function setupDatabase() {
  firebase.initializeApp(firebaseConfig);
}

function articleFavouritedData(articleId: string) {
  return firebase
    .database()
    .ref("userData")
    .child(Constants.installationId)
    .child("favouriteArticles")
    .child(articleId);
}

export function toggleFavouriteArticle(articleId: string) {
  articleFavouritedData(articleId).once("value", snapshot => {
    if (snapshot.val() != null) {
      articleFavouritedData(articleId).remove();
    } else {
      articleFavouritedData(articleId).set(true);
    }
  });
}

export function listenToArticleFavourited(
  articleId: string,
  callback: (value) => void,
) {
  articleFavouritedData(articleId).on("value", snapshot => {
    callback(snapshot.val());
  });
}

export function stopListenToArticleFavourited(articleId: string) {
  articleFavouritedData(articleId).off("value");
}
