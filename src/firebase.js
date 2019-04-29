import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDxQH3UTpcwQXd-Rc3DDVifXHAU1K_-gQM",
  authDomain: "cheang-43c18.firebaseapp.com",
  databaseURL: "https://cheang-43c18.firebaseio.com",
  projectId: "cheang-43c18",
  storageBucket: "cheang-43c18.appspot.com",
  messagingSenderId: "401357491404"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;