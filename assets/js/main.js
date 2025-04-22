const leaders = [
	{name: "Pierce Sobleski", role:"Supreme Leader"},
	{name: "johnathan wissman", role:"Right-Hand Man"},
	{name: "Wyland Blake", role:"Supreme Court Justice"},
	{name: "Taylor Moore"},
	{name: "zayden losh"}
]
const members = [
	{name: "Bernie Smith"},
	{name: "Hunter Vint"},
	{name: "Jaden Nice"},
	{name: "Josiah Ward"},
	{name: "Kaleb Bethel", role:"Head of the Citizens Press."},
	{name: "Leah Rapp"},
	{name: "lila kupsky"},
	{name: "Lindsay Heavilin", role:"Village Crazy Lady"},
	{name: "Lola Smith"},
	{name: "Lucille Tanner"},
	{name: "Saige Anthony"},
	{name: "Samuel Siragusano"},
	{name: "Star Basiletti"},
	{name: "Tyler Dolecki"},
	{name: "Tyler Patrick", role:"#420"},
]

/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	SIDEBAR  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
const sidebarItems = [
	{title:"Home", icon:"f015", link:"index"},
//	{title:"About Us", icon:"f059", link:"./pages/about"},
	{title:"Citizen's Press", icon:"f1ea", link:"./pages/citizensPress"},
//	{title:"Events", icon:"f8d7", link:"./pages/events"},
	{title:"The Crew", icon:"f2bd", link:"./pages/members"},
	{title:"Other Resources", icon:"f468",
		children: [
			{title:"Citizenship Test", icon:"f304", link:"https://docs.google.com/forms/d/e/1FAIpQLScf3SDDViUavvxqe9CvXtBwbcuhcy_leX6dn1DkkBqMfyHHMQ/viewform?usp=preview", external:true},
			{title:"Our Constitution", icon:"f70e", link:"pages/resources/constitution"}
		]
	},
	{title:"Social Media", icon:"f87c",
		children: [
			{title:"sportsYou", icon:"f433", link:"https://sportsyou.com/teams/te-79a0f7b1-5ec5-40f7-b39b-550fb34c40b3"}
		]
	}
];
const linkBase = window.location.href.split("hlivkovia/")[0] + "hlivkovia/";
const sidebar = document.createElement("div");

const logo = document.createElement("img");
logo.src = `${linkBase}assets/favicon.svg`;
sidebar.appendChild(logo);

sidebar.className = "sidebar";
sidebarItems.forEach(item => {
	if (item.children) {
		const details = document.createElement("details");
		const summary = document.createElement("summary");
		summary.innerHTML = `<span class="fa-solid">&#x${item.icon}</span> ${item.title}`
		details.appendChild(summary);

		const container = document.createElement("div");
		container.className = "sidebarDropdown";
		item.children.forEach(sub => {
			const link = document.createElement("a");
			if (sub.external) {
				link.target = "_blank";
				link.href = sub.link;
			} else {
				link.href = `${linkBase + sub.link}.html`;
			}
			link.innerHTML = `<span class="fa-solid">&#x${sub.icon}</span> ${sub.title}`;
			container.appendChild(link);
		});
		details.appendChild(container);
		sidebar.appendChild(details);
	} else {
		const link = document.createElement("a");
		link.href = `${linkBase + item.link}.html`;
		link.innerHTML = `<span class="fa-solid">&#x${item.icon}</span> ${item.title}`
		sidebar.appendChild(link);
	}
});
document.body.prepend(sidebar);