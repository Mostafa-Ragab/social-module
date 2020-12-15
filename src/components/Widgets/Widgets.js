import "./Widgets.css";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widget1">
				<iframe
					title="vodafone"
					src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVodafone.Egypt%2Fvideos%2F383748986031862%2F&show_text=false&"
					max-width="360"
					min-width="150"
					height="100%"
					style={{ border: "1px" }}
					scrolling="yes"
					frameBorder="0"
					allowtransparency="true"
					allowfullscreen="true"
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				></iframe>
			</div>
			<div>
				<iframe
					title="Livepool"
					src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLiverpoolFC%2Fvideos%2F413811663137203%2F&show_text=true&"
					max-width="360"
					min-width="150"
					height="429"
					style={{ border: "none", overflow: "auto" }}
					scrolling="yes"
					frameborder="0"
					allowfullscreen="true"
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowFullScreen="true"
				></iframe>
			</div>
		</div>
	);
}

export default Widgets;
