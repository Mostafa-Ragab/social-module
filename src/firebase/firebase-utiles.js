import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAi27iJDCeBdpjIsyLfS0qRv_AeYb8eNLM",
	authDomain: "social-module-1b719.firebaseapp.com",
	projectId: "social-module-1b719",
	storageBucket: "social-module-1b719.appspot.com",
	messagingSenderId: "211192966317",
	appId: "1:211192966317:web:559277e60095c60b692a24",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
