/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	HEADER BG  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
const onScroll = (() => {
	let last = 0;
	const delay = 16;
	return function () {
		const now = performance.now();
		if (now - last >= delay) {
			last = now;
			const varWinY = window.scrollY || 0;
			const img = document.querySelector("section img");
			if (img) {
				img.style.transform = `translateY(${varWinY * .25}px)`;
			}
		}
	};
})();
window.addEventListener("scroll", onScroll);

/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	LEADER STRIP  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
function addLeaderStrip(leaders) {
	const leaderStrip = document.getElementsByClassName("leaderStrip")[0];
	const fragment = document.createDocumentFragment();
	leaders.forEach(leader => {
		const leaderDiv = document.createElement("div");
		const normalizedName = leader.name.split(" ").map((part, index) => index === 0 ? part.charAt(0).toLowerCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)).join("");

		const image = new Image();
		image.src = `${linkBase}assets/images/members/${normalizedName}.jpg`;
		const leaderImg = document.createElement("img");
		leaderImg.src = image.src;
		image.onerror = () => leaderImg.src = `${linkBase}assets/images/noIcon.svg`;
		leaderImg.alt = `${leader.name}`;
		leaderDiv.appendChild(leaderImg);

		const leaderName = document.createElement("h3");
		leaderName.innerHTML = leader.name;
		leaderDiv.appendChild(leaderName);

		if (leader.role) {
			const leaderRole = document.createElement("p");
			leaderRole.innerHTML = leader.role;
			leaderDiv.appendChild(leaderRole);
		}
		fragment.appendChild(leaderDiv);
	});
	leaderStrip.appendChild(fragment);
}
addLeaderStrip(leaders);