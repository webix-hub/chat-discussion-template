export const dataSidebar = [
	{
		id: 1,
		value: "Starred",
		open: true,
		data: [
			{id: "1.1", value: "general", channel: true},
			{id: "1.2", value: "customer", channel: true},
			{id: "1.3", value: "events", channel: true},
			{id: "1.4", value: "Kristina Morrison", person: true, online: true}
		]
	},
	{
		id: 2,
		value: "Channels",
		open: true,
		data: [
			{id: "2.1", value: "business-ops", channel: true},
			{id: "2.2", value: "marketing", channel: true, messages: 5},
			{id: "2.3", value: "triage-issues", channel: true},
			{id: "2.4", value: "projects and tasks", channel: true}
		]
	},
	{
		id: 3,
		value: "Direct Messages",
		open: true,
		data: [
			{id: "3.1", value: "Brandon Hogins", person: true, online: true},
			{id: "3.2", value: "Terra Spitzner", person: true, online: true},
			{id: "3.3", value: "Kori Sotten", person: true, online: true, messages: 1},
			{id: "3.4", value: "Marta Nelson", person: true, online: false},
			{id: "3.5", value: "Matt Mewmon", person: true, online: false, messages: 3},
			{id: "3.6", value: "Jack Tinkley", person: true, online: true}
		]
	},
	{
		id: 4,
		value: "Private Channels",
		open: true,
		data: [
			{id: "4.1", value: "admin", channel: true}
		]
	}
];
