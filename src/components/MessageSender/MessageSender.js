import React, { useState } from "react";
import "./messageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import firebase from "firebase";
import { selectCurrentUser } from "../../redux/user/user-select";
import { db } from "../../firebase/firebase-utiles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

function MessageSender(user) {
	console.log(user);
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault("");

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			// profilPic: user.user.photoURL,
			username: user.user.displayName,
			image: imageUrl,
		});
		setInput(" ");
		setImageUrl(" ");
	};
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.user.photoURL} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="messageSender__input"
						placeholder={`What's on your mind, ${user.user.displayName}?`}
					/>
					<input
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder="image URL (Optional)"
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden Submit
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>

				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>

				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser,
});

export default connect(mapStateToProps)(MessageSender);
