import "./sidebar-row.css";
import { Avatar } from "@material-ui/core";

function sidebarRow({ src, Icon, title }) {
	return (
		<div className="sidebarRow">
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
}

export default sidebarRow;
