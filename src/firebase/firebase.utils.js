import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCNy9bBmaZvkEbBGnKgwTsfukLBkyaJsks",
        authDomain: "shopping-db-21d51.firebaseapp.com",
        databaseURL: "https://shopping-db-21d51.firebaseio.com",
        projectId: "shopping-db-21d51",
        storageBucket: "shopping-db-21d51.appspot.com",
        messagingSenderId: "1080409686821",
        appId: "1:1080409686821:web:f7911abab448bef83f50cc",
        measurementId: "G-BZ72T103V6"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
