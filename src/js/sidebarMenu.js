import {dataSidebar} from "../data/dataSidebar";

export const sidebarMenu = {
	rows: [
		{
			view: "template",
			css: "sidebarDark",
			height: 24,
			template: "<span class='sidebarTitle'>All Threads</span>"
		},
		{
			view: "tree",
			id: "sidebar",
			borderless: true,
			select: true,
			css: "sidebarDark",
			template(obj) {
				if (obj.$level === 1) {
					const addBtn = '<span class="addIcon mdi mdi-18px mdi-plus-circle-outline"></span>';
					return `
						<span class="flex alignCenter">
							<span class="strong">${obj.value}</span>
							${obj.value !== "Starred" ? addBtn : ""}
						</span>`;
				}
				if (obj.$level === 2) {
					const channelType = '<span class="channelType">#</span>';
					const personType = `
										<span class="personType">
											<span class="personStatus ${obj.online ? "online" : "offline"}"></span>
										</span>`;
					const messages = `<span class="unreadMessages">${obj.messages}</span>`;
					return `
						<span class="flex alignCenter">
							${obj.person ? personType : channelType}
							<span ${obj.messages ? 'class="newMessages"' : null}>${obj.value}</span>
							${obj.messages ? messages : ""}
						</span>`;
				}
				return obj.value;
			},
			data: dataSidebar
		}
	]
};
