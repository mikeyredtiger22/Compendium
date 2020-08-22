import * as firebase from "firebase";
import { firebaseConfig } from "./database-config";

export function setupDatabase() {
  firebase.initializeApp(firebaseConfig);
}

export function testFirebase() {
  firebase
    .database()
    .ref("test/a")
    .on("value", snapshot => {
      const { testField } = snapshot.val();
      console.log("Listener: " + testField);
    });
  firebase
    .database()
    .ref("test/a")
    .set(
      {
        testField: true,
      },
      res => console.log("mpf added data. Error: ", res),
    );
}
