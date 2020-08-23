import * as firebase from "firebase";
import { firebaseConfig } from "../database-config";

export function setupDatabase() {
  firebase.initializeApp(firebaseConfig);
}
