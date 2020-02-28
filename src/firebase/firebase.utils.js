import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCxEwsT8ciobp9Y8M3glpNJ0N6Bf3oqs9g',
    authDomain: 'e-clothing-d3dae.firebaseapp.com',
    databaseURL: 'https://e-clothing-d3dae.firebaseio.com',
    projectId: 'e-clothing-d3dae',
    storageBucket: 'e-clothing-d3dae.appspot.com',
    messagingSenderId: '822357149599',
    appId: '1:822357149599:web:dccc18871d0b1bb0c19faa',
    measurementId: 'G-K4ZXHFNDHR'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
