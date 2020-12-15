import "./sidebar.css";
import SidebarRow from "../sidebar-row/sidebar-row";

import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
	return (
		<div className="sidebar">
			<blockquote class="twitter-tweet">
				<p lang="ar" dir="rtl">
					مدربين التنمية البشرية{" "}
					<a href="https://t.co/y37qrBwMcX">pic.twitter.com/y37qrBwMcX</a>
				</p>
				&mdash; mohamed E&#39;esa (@MO3esa){" "}
				<a href="https://twitter.com/MO3esa/status/1338597211245080578?ref_src=twsrc%5Etfw">
					December 14, 2020
				</a>
			</blockquote>{" "}
			<script
				async
				src="https://platform.twitter.com/widgets.js"
				charset="utf-8"
			></script>
			<SidebarRow Icon={ExpandMoreOutlined} title="Market" />
		</div>
	);
}

export default Sidebar;
