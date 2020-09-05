import * as firebase from 'firebase';
import { firebaseConfig } from '../database-config';

let initialised = false;
export function setupDatabase() {
  if (!initialised) {
    firebase.initializeApp(firebaseConfig);
    initialised = true;
  }
}
