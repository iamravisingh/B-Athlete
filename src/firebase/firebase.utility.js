import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxUh2z6h3Tu0LtRwo4Muli-BUxbI5s3tg",
    authDomain: "bathlete-56639.firebaseapp.com",
    databaseURL: "https://bathlete-56639.firebaseio.com",
    projectId: "bathlete-56639",
    storageBucket: "bathlete-56639.appspot.com",
    messagingSenderId: "491683164032",
    appId: "1:491683164032:web:036070f98a59acb4d55b65",
    measurementId: "G-XQ45KG3RFM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
