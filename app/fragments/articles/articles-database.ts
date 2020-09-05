import * as firebase from 'firebase';
import Constants from 'expo-constants';

function articleFavouritedData(articleId: string) {
  return firebase
    .database()
    .ref('userData')
    .child(Constants.installationId)
    .child('saved')
    .child('articles')
    .child(articleId);
}

export function toggleFavouriteArticle(articleId: string) {
  articleFavouritedData(articleId).once('value', snapshot => {
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
  articleFavouritedData(articleId).on('value', snapshot => {
    callback(snapshot.val());
  });
}

export function stopListenToArticleFavourited(articleId: string) {
  articleFavouritedData(articleId).off('value');
}
