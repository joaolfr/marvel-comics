import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC3JhOROFkzuBcKfoe4COuFdIr0tR6epo",
  authDomain: "marvel-comics-db691.firebaseapp.com",
  projectId: "marvel-comics-db691",
  storageBucket: "marvel-comics-db691.appspot.com",
  messagingSenderId: "955985372749",
  appId: "1:955985372749:web:b44a7db55cc5eb4fd89e04",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

async function authWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  provider.addScope("name");
  provider.addScope("user:email");

  const result = await firebase.auth().signInWithPopup(provider);

  console.log("result firebase: ", result);

  return result;
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //   var token = result.credential.accessToken;
  // The signed-in user info.
  //   var user = result.user;
  // ...
}

export { authWithGitHub };
