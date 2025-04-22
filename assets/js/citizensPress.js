const citizensPress = [
	{
		type: "news",
		date: "2025-03-17",
		title: "Citizen Leaves Capital City, Now a Rebel",
		desc: "On March 17, 2025, Hlivkovian citizen Starlyn <i>(Star)</i> Basiletti removed herself from the capital city of The Hlivkovian Republic."
	},
	{
		type: "poll",
		author: leaders[1].name,
		date: "2025-03-25",
		title: "Thoughs on Treason",
		desc: "Treason is...",
		answers: [["Good", 0], ["Bad", 11], ["I'd prefer not to say", 1]]
	},
	{
		type: "poll",
		author: leaders[0].name,
		date: "2025-03-26",
		title: "Election Day!",
		desc: "Welcome, as I'm sure you all know it is election day today. The candidates for Supreme Leader are listed below. Remember those in the running are not allowed to vote for themselves.",
		answers: [["Taylor Moore", 1], ["Johnathan Wissman", 2], ["Pierce Sobleski", 11], ["Bernie Smith", 2]],
	},
	{
		type: "news",
		date: "2025-03-26",
		time: "11:54am",
		title: "Supreme Leader Election Votes",
		desc: "Taylor Moore - 0<br>Johnathan Wissman - 1<br>Pierce Sobleski - 8<br>Bernie Smith - 1"
	},
	{
		type: "poll",
		author: leaders[1].name,
		date: "2025-03-26",
		title: "Check-Up",
		desc: "Recently you feel",
		answers: [["Very happy", 2], ["Happy", 2], ["Pretty happy", 3], ["Good", 2], ["Alright", 6]],
	},
	{
		type: "news",
		date: "2025-03-27",
		title: "Supreme Leader Election Winner",
		desc: "ATTENTION CITIZENS OF THE HLIVKOVIAN REPUBLIC\nI want to take this time to congratulate Pierce Sobleski on winning the Supreme Leader Election that occurred yesterday, March 26. I also want to inform citizens about the upcoming “we all explode” event happening later today. The event is posted on the agenda. That's all for NHC NEWS. And as always, HAIL HLIVKO."
	},
	{
		type: "news",
		date: "2025-04-08",
		title: "The Hlivkovian Republic Reaches Beyond the Stars",
		desc: "The Hlivkovian Space Association <i>(HSA)</i> has officially been established as of April 8. As a result of this establishment, The Hlivkovian Republic has sent 2 astronauts to investigate and gather information about our solar system. More information will be posted soon. Please wish the astronauts a safe investigation."
	},
	{
		type: "poll",
		author: leaders[0].name,
		date: "2025-04-08",
		title: "Going Green",
		desc: "Hello Citizens. How intrested would you be in making Hlivkovia more green by implementing bullet trains as our main form of transportation? I would like Hlivkovia to become more clean. You would be charged to ride the train, but with the way the Hlivkovian economy is going, I think we have the funding for this. Thank you for your time.",
		answers: [["Implement the trains.", 10], ["Do not implement the trains.", 1]],
	},
	{
		type: "news",
		date: "2025-04-09",
		title: "New Planet Discovered",
		desc: "The Hlivkovian Space Association <i>(HSA)</i> has announced the discovery of a terrestrial planet. Officially named Hlivk, this planet has 1 sun and 2 moons. More information regarding the planet of Hlivk will be posted soon."
	},
	{
		type: "news",
		date: "2025-04-09",
		title: "Recently Discovered Planet Capable of Life",
		desc: "The HSA has officially confirmed that the terrestrial planet of Hlivk is capable of supporting life. The Hlivkovian Republic's 3 unidentified astronauts discovered a sentient species now known as Hlivkians. There is still little information we know about this species."
	},
	{
		type: "news",
		date: "2025-04-10",
		title: "Photograph of Planet Taken by the Hlivkovian Space Association",
		desc: "As Hlivkovia's 3 unidentified astronauts approached the planet of Hlivk, one of them managed to snap a photograph of the beautiful planet. Hlivk is shown to have an excellent set of rings composed of meteorites with large amounts of space opal, which give the rings their color. The 3 astronauts also managed to confirm that Hlivk has a rotation period of 26 hours and an orbital period 428 days.",
		image: "hlivk.png",
		imagedesc: "Hlivk — Captured by the HSA"
	},
	{
		type: "news",
		date: "2025-04-11",
		title: "Purple Ice Planet Discovered",
		desc: "The three unnamed astronauts, who were dispatched by the Hlivkovian Space Association, captured a photograph of what appeared to be an “ice planet” while they were traveling through space. Instead of the typical blue or whitish hue, the ice giant seemed to have a purplish tint. One popular theory proposes that the planet is composed of iodine rather than ice. This would explain the planet's purple color. Another theory suggests that active ice volcanoes have been naturally polluting the atmosphere for thousands of years, which could also result in the ice giant's purplish tint. Regardless of which theory—if either of the two—is true, the planet would be uninhabitable as the gases released by both the iodine and the ice volcanoes are highly toxic.",
		image: "icePlanet.png",
		imagedesc: "Unknown Ice Planet — Captured by the HSA"
	}
]

/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	NEWS BLOCKS  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
function makeNewsBars(citizensPress) {
	const newsList = document.getElementsByClassName("newsList")[0];
	const fragment = document.createDocumentFragment();
	citizensPress.reverse().forEach((item, index) => {
		const listDiv = document.createElement("div");
		listDiv.setAttribute("onclick", `loadArticle(${citizensPress.length - 1 - index})`);

		const listIcon = document.createElement("p");
		listIcon.className = "fa-solid";
		listIcon.innerHTML = `&#x${item.type === "news" ? "f1ea" : item.type === "poll" ? "f681" : "f059"}`;
		listDiv.appendChild(listIcon);

		const listName = document.createElement("p");
		listName.className = "title";
		listName.innerHTML = item.title;
		listDiv.appendChild(listName);

		const listDate = document.createElement("p");
		listDate.className = "date";
		listDate.innerHTML = item.time ? `${item.date} <span>— ${item.time}</span>` : item.date;
		listDiv.appendChild(listDate);

		fragment.appendChild(listDiv);
	});
	newsList.appendChild(fragment);
}
makeNewsBars(citizensPress);

/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	ARTICLE LOADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
const newsList = document.getElementsByClassName("newsList")[0];
const newsArticle = document.getElementsByClassName("newsArticle")[0];
const watermark = document.querySelector(".newsArticle .watermark");
const articleImg = document.getElementsByClassName("articleImg")[0];
const barGraphContainer = document.getElementsByClassName("barGraph")[0];
const copyright = document.querySelector(".newsArticle .copyright");
const articleTitle = document.querySelector(".newsArticle .title");
const articleDesc = document.querySelector(".newsArticle .desc");
const articleDate = document.querySelector(".newsArticle .date");
const authorImage = document.querySelector(".newsArticle .author img");
const authorName = document.querySelector(".newsArticle .author p span");

function loadArticle(index) {
	newsList.style.display = "none";
	newsArticle.style.display = "block";
	const article = citizensPress[citizensPress.length - 1 - index];

	document.title = `The Hlivkovian Republic — Citizen's Press — ${article.title}`;
	articleDate.innerHTML = article.time ? `<span>${article.time} —</span> ${article.date}` : article.date;
	articleTitle.innerHTML = article.title;
	articleDesc.innerHTML = article.desc;
	if (article.type === "news") {
		article.author = members[4].name; // Kaleb Bethel
		loadNewsArticle(article);
	} else if (article.type === "poll") {
		loadPollArticle(article);
	}
	const formattedAuthor = article.author.split(" ").map((part, index) => index === 0 ? part.toLowerCase() : capitalizeFirstLetter(part)).join("");
	authorImage.src = `${linkBase}assets/images/members/${formattedAuthor}.jpg`;
	authorName.innerHTML = article.author;
}
function loadNewsArticle(article) {
	watermark.style.display = "block";
	articleImg.style.display = "block";
	copyright.style.display = "block";
	barGraphContainer.style.display = "none";

	if (article.image) {
		document.querySelector(".articleImg img").src = `${linkBase}assets/images/news/${article.image}`;
		document.querySelector(".articleImg p").innerHTML = article.imagedesc;
	} else {
		articleImg.style.display = "none";
	}
	copyright.innerHTML = `@COPYRIGHT ${article.date.slice(0, 4)}`;
}
function loadPollArticle(article) {
	watermark.style.display = "none";
	articleImg.style.display = "none";
	copyright.style.display = "none";
	barGraphContainer.style.display = "block";

	const answers = article.answers;
	const labels = answers.map(answer => answer[0]);
	const values = answers.map(answer => answer[1]);
	const totalVotes = values.reduce((acc, val) => acc + val, 0);
	barGraphContainer.innerHTML = "";
	values.forEach((value, index) => {
		const bar = document.createElement("div");
		bar.className = "bar";

		const filled = document.createElement("div");
		filled.className = "filled";
		filled.style.width = (totalVotes > 0) ? (value / totalVotes) * 100 + "%" : "0%";

		const label = document.createElement("div");
		label.className = "label";
		label.textContent = `${labels[index]} (${value})`;

		bar.appendChild(filled);
		bar.appendChild(label);
		barGraphContainer.appendChild(bar);
	});
}
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function returnToList() {
	document.title = "The Hlivkovian Republic — Citizen's Press";
	newsArticle.style.display = "none";
	newsList.style.display = "block";
}

/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	IMAGE PREVIEW  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
let isImagePreview = false;
window.addEventListener("keydown", function(event) {
	if (event.key === "Escape" || event.key === "Backspace") {
		if (isImagePreview === true) {
			viewImage();
		} else {
			returnToList();
		}
	}
});
function viewImage() {
	const imagePreview = document.getElementsByClassName("imagePreview")[0];
	if (imagePreview.style.display === "none") {
		isImagePreview = true;
		imagePreview.style.display = "block";
		document.querySelector(".imagePreview img").src = document.querySelector(".articleImg img").src;
		document.querySelector(".imagePreview p").innerHTML = document.querySelector(".articleImg p").innerHTML;
	} else {
		isImagePreview = false;
		imagePreview.style.display = "none";		
	}
}
