import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { connect } from "react-redux";
import SignInSide from "./components/Login/SignInSide";
import { setCurrentUser } from "./redux/user/user-actions";
import { auth, createUserProfileDocument } from "./firebase/firebase-utiles";
import Widgets from "./components/Widgets/Widgets";
import Feed from "./components/feed/Feed";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				{this.props.currentUser ? (
					<>
						<Header />
						<div className="app__body">
							{/* <Sidebar /> */}
							<Feed />
							<Widgets />
						</div>
					</>
				) : (
					<SignInSide />
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
