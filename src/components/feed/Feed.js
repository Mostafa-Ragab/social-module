import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../post/Post";
import { db } from "../../firebase/firebase-utiles";
function Feed() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
			);
	}, []);
	return (
		<div className="feed">
			<MessageSender />
			{posts.map((post) => (
				<Post
					key={post.id}
					// profilPic={post.profilPic}
					message={post.data.message}
					timestamp={post.data.timestamp}
					username={post.data.username}
					image={post.data.image}
				/>
			))}
		</div>
	);
}

export default Feed;
