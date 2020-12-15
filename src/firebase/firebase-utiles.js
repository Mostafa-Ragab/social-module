import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBEwhRSlLnUVM2L18plX7ru_ZOO3pF6l-8",
	authDomain: "social-app-52e71.firebaseapp.com",
	projectId: "social-app-52e71",
	storageBucket: "social-app-52e71.appspot.com",
	messagingSenderId: "656511761256",
	appId: "1:656511761256:web:81816aad35d292ec9334dd",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = db.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
