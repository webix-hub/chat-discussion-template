export const sidebarUser = {
	view: "template",
	css: "sidebarUser",
	height: 150,
	template() {
		let html = `
			<div class="userWrapp">
				<div class="userImg">
					<img src="./avatar/avatar.png">
					<span class="userStatus"></span>
				</div>
				<div class="userInfo">
					<span class="userName">Adam Stoum</span>
					<span class="userPosition">SEO</span>
				</div>
			</div>
		`;
		return html;
	}
};
