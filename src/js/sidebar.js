import {sidebarUser} from "./sidebarUser";
import {sidebarMenu} from "./sidebarMenu";

export const sidebar = {
	css: "sidebarDark",
	width: 280,
	margin: 10,
	rows: [
		sidebarUser,
		{
			view: "accordion",
			css: "sidebarAccordion",
			type: "line",
			rows: [
				{
					header: "Arti Group",
					body: sidebarMenu
				},
				{
					gravity: 0.01
				}
			]
		}
	]
};
