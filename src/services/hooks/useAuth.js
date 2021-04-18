import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

async function authWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  provider.addScope("name");
  provider.addScope("user:email");

  const result = await firebase.auth().signInWithPopup(provider);

  return result;
}

export default firebase;
export { authWithGitHub };
