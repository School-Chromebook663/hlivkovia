/*	--------------------------------------------------------------------------------------------------------------------------------	*/
/*	ADD MEMBERS  */
/*	--------------------------------------------------------------------------------------------------------------------------------	*/
function renderTeamMembers(containerId, teamMembers) {
	const container = document.getElementsByClassName(containerId)[0];
	const fragment = document.createDocumentFragment();
	teamMembers.forEach(member => {
		const memberDiv = document.createElement("div");
		memberDiv.className = "member";
		const normalizedName = member.name.split(" ").map((part, index) => index === 0 ? part.charAt(0).toLowerCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)).join("");

		const image = new Image();
		image.src = `${linkBase}assets/images/members/${normalizedName}.jpg`;
		const memberImg = document.createElement("img");
		memberImg.src = image.src;
		image.onerror = () => leaderImg.src = `${linkBase}assets/images/noIcon.svg`;
		memberImg.alt = member.name;
		memberImg.className = "image";
		memberDiv.appendChild(memberImg);

		const infoDiv = document.createElement("div");
		infoDiv.className = "info";

		const nameSpan = document.createElement("span");
		nameSpan.className = "name";
		nameSpan.textContent = member.name;
		infoDiv.appendChild(nameSpan);

		if (member.role) {
			const roleSpan = document.createElement("span");
			roleSpan.className = "role";
			roleSpan.textContent = member.role;
			infoDiv.appendChild(roleSpan);
		}
		memberDiv.appendChild(infoDiv);
		fragment.appendChild(memberDiv);
	});
	container.innerHTML = "";
	container.appendChild(fragment);
}
renderTeamMembers("leaders", leaders);
renderTeamMembers("members", members);