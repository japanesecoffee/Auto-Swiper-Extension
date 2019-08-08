var keyWord = prompt("Enter a keyword to search for:");
keyWord = String(keyWord).toLowerCase();

var swiper = setInterval(function() {
	//used Chrome DevTools to find class names for profile button
	var openProfile = document.getElementsByClassName("Pos(a) End(16px) B(40px) Trsdu($normal) Sq(40px) Lh(40px) Bdrs(50%) Cur(p) Ta(c) Fl(end) Scale(1.2):h")[0];
	openProfile.click();

	setTimeout(function() {
		var profileBio = document.getElementsByClassName("P(16px) profileCard__bio Ta(start) Us(t) C($c-secondary) BreakWord Whs(pl) Fz($ms)")[0];
		var profileText = profileBio != null ? profileBio.innerText : "";
		console.log("Reading bio... \n"+profileText);

		profileText = profileText.toLowerCase();
		if(profileText.indexOf(keyWord) != -1) {
			console.log("Match found! Liking...");
			//clicking like button
			document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) End(15px) Scale(1.1):h")[0].click();
		}
		else {
			console.log("Match not found. Disliking...");
			//clicking dislike button
			document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) Start(15px) Scale(1.1):h")[0].click();
		}
	}, 2000);
}, 4000);

//clearInterval(swiper);