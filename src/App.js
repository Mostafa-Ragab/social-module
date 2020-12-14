import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { connect } from "react-redux";
import SignInSide from "./components/Login/SignInSide";

function App(user) {
	console.log(user);

	return (
		<div className="App">
			{user ? (
				<SignInSide />
			) : (
				<>
					<Header />
					<Sidebar />
				</>
			)}
		</div>
	);
}

const mapStateToProps = ({ user }) => ({
	user: user.currentUser,
});

export default connect(mapStateToProps)(App);
