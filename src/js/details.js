import {files} from "./files";

export const details = {
	css: "bgLight",
	width: 340,
	rows: [
		{
			view: "toolbar",
			css: "bgLight",
			height: 60,
			cols: [
				{
					view: "template",
					borderless: true,
					css: "bgLight detailsHeader",
					template() {
						return `
							<div class="flex flexColumn detailsInfo">
								<span class="strong detailsTitle">Details</span>
								<span class="smText textLight">#general</span>
							</div>
						`;
					}
				},
				{
					view: "icon",
					css: "closeIcon",
					icon: "mdi mdi-close mdi-24px"
				}
			]
		},
		{
			css: "detailsIcons",
			height: 42,
			margin: 35,
			padding: {left: 10, right: 10},
			cols: [
				{
					view: "icon",
					icon: "mdi mdi-account-plus mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-file-document-box-search-outline mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-phone mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-dots-horizontal mdi-24px"
				}
			]
		},
		{
			view: "accordion",
			css: "detailsAccordion",
			type: "line",
			rows: [
				{header: "About Channel", body: "About Channel Content", collapsed: true},
				{header: "Members <span class='headerNum'>200</span>", body: "Members Content", collapsed: true},
				{header: "Pinned <span class='headerNum'>5</span>", body: "Pinned Content", collapsed: true},
				{header: "Shortcuts <span class='headerNum'>2</span>", body: "Shortcuts Content", collapsed: true},
				{
					header: "Shared Files <span class='headerNum'>50</span>",
					body: files
				},
				{header: "Notification Preference <span class='headerNum'>2</span>", body: "Notification Preference Content", collapsed: true}
			]
		}
	]
};
