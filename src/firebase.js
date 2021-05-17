
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAVfalxeakGHSKxMAlOdC9-_rJJThEwD9M",
    authDomain: "linkedin-clone-1649f.firebaseapp.com",
    projectId: "linkedin-clone-1649f",
    storageBucket: "linkedin-clone-1649f.appspot.com",
    messagingSenderId: "112483622255",
    appId: "1:112483622255:web:b7075303dba405003b1c9a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  export {db,auth};
