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

export const createUserProfile = async (user,additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName,email,createdAt, ...additionalData})
        } catch(e){
            console.log('error in created the user<>>>>>>>>>>>>>>>>',e)
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (key,obj) => {
    const collectionRef = firestore.collection(key);
    console.log('collectionRef>>>>>>>>>>.', collectionRef);
    const batch = firestore.batch();
    obj.forEach(item => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,item)
    })

    return await batch.commit();
}  

export const convercollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((acc, curr) => {
        acc[curr.title.toLowerCase()] = curr;
        return acc;
    }, {})
}

export default firebase;
