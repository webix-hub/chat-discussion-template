import {dataFiles} from "../data/dataFiles";

export const files = {
	rows: [
		{
			view: "pager",
			id: "listPager",
			css: "listPager",
			height: 50,
			size: 5,
			group: 5,
			template: "{common.pages()}{common.next()}",
			animate: {
				direction: "top"
			}
		},
		{
			view: "list",
			css: "bgLight",
			borderless: true,
			type: {
				height: 100,
				css: "fileItem",
				template(obj) {
					return `
						<div class="fileWrapp">
							<div class="fileImg">
								<img src="${obj.src}" alt="${obj.fileName}" />
							</div>
							<div class="fileInfo">
								<span class="fileName smText">${obj.fileName}.${obj.fileFormat}</span>
								<span class="smText textLight">${obj.owner}</span>
								<span class="smText textLight">${obj.date}</span>
							</div>
						</div>
					`;
				}
			},
			pager: "listPager",
			data: dataFiles
		}
	]
};
