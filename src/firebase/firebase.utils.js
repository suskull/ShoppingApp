import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

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


//create asynchronous because we are using api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        //create query reference document(tao. 1 dia chi?)
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        
        //create query snapshot with document using method .get() (present data dua. tren dia/ chi do)

        const snapShot = await userRef.get();

        if(!snapShot.exsits) {
                const {displayName, email} = userAuth;
                const createAt = new Date();

                try {
                     await userRef.set({
                            displayName,
                            email,
                            createAt,
                            ...additionalData    
                        })
                }catch(err) {
                        console.log("error",err.message);
                }
        }

        return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
