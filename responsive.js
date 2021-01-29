var button = document.getElementById("button");
var menu1 = document.getElementById("menu1");

button.onclick = function(){
	if(menu1.classList.contains("menu2")){
		menu1.classList.remove("menu2")
	}
	else{
		menu1.classList.add("menu2")
	}
}

