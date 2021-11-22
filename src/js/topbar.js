import {chatParams} from "../data/dataChat";

export const topbar = {
	view: "toolbar",
	height: 60,
	rows: [
		{
			view: "template",
			css: "topBar",
			borderless: true,
			template(obj) {
				return `
					<div class="topBarRow">
						<div class="flex alignCenter">
							<h3 class="channel">${obj.channel}</h3>
							<span class='star mdi mdi-star mdi-18px'></span>
						</div>
						<button class="webix_icon_button infoBtn">
							<span class="mdi mdi-information mdi-24px"></span>
						</button>
					</div>
					<div class="flex smText textLight">
						<div class="topBarSection">
							<span class="mdi mdi-account"></span>
							<span>${obj.users}</span>
						</div>
						<div class="topBarSection">
							<span class="mdi mdi-pin"></span>
							<span>${obj.pinned}</span>	
						</div>
						<div class="topBarSection">
							<span>Add a topic</span>
						</div>
					</div>
				`;
			},
			data: chatParams
		}
	]
};
