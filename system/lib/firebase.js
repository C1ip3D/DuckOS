import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';


const firebaseConfig = {
  apiKey: 'AIzaSyBw9usYegbob1a1ov1Hpvqtb_K2eMi3qHQ',
  authDomain: 'savingdatausinghtmlform.firebaseapp.com',
  databaseURL: 'https://savingdatausinghtmlform-default-rtdb.firebaseio.com',
  projectId: 'savingdatausinghtmlform',
  storageBucket: 'savingdatausinghtmlform.appspot.com',
  messagingSenderId: '648910756900',
  appId: '1:648910756900:web:da800a2ec1a5046c408cb1',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 
const storage = firebase.storage(app);

export { app, auth, storage };
