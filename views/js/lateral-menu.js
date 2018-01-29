function openNav() {
	closeNav()
	setTimeout(function(){
		document.getElementById("mySidenav").style.width = "20%";
		var block = document.getElementById("main-content");
		block.style.width = "80%";
		block.style.marginLeft = "20%";
	},300);
	
	
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main-content").style.width = "100%";
		document.getElementById("main-content").style.marginLeft = "0%";
}