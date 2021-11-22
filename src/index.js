import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {topbar} from "./js/topbar";
import {chat} from "./js/chat";
import {details} from "./js/details";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.i18n.pager = {
		next: "<span class='mdi mdi-arrow-right'></span>"
	};

	webix.ui({
		type: "clean",
		rows: [
			header,
			{
				cols: [
					sidebar,
					{
						rows: [
							topbar,
							chat
						]
					},
					details
				]
			}
		]
	});
	webix.$$("comments").focus();
});
