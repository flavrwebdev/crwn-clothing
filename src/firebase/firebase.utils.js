import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXieUHn0tpankBKSPEiFwa6fzVK6iygKQ",
  authDomain: "crwn-db-9c70a.firebaseapp.com",
  databaseURL: "https://crwn-db-9c70a.firebaseio.com",
  projectId: "crwn-db-9c70a",
  storageBucket: "",
  messagingSenderId: "134857794878",
  appId: "1:134857794878:web:fac85d4f046aff19"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;