import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"


const app = firebase.initializeApp({
    apiKey: "AIzaSyCXZS2T__nTwzXMpksxMbBayKAegDV7X28",
    authDomain: "application-71b43.firebaseapp.com",
    projectId: "application-71b43",
    storageBucket: "application-71b43.appspot.com",
    messagingSenderId: "162777729360",
    appId: "1:162777729360:web:b7d3a2ac176623d5cc8455",
    measurementId: "G-6DHVZ1YX1P"
   });

   export const fireDB = app.firestore();
   export default app;