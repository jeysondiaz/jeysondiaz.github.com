//clase .close

let links = document.querySelectorAll(".close");

links.forEach(function(link){

// agregar un evento click
	link.addEventListener("click",function(ev){
	ev.preventDefault();
	let content = document.querySelector('.content');

	//quitarle las clases a la animación

	content.classList.remove("fadeInDown");
	content.classList.remove("animated");

//agregar
	content.classList.add("fadeOutUp");
	content.classList.add("animated");

	setTimeout(function(){
		location.href = "../index.html";
		},600);



	return false;

});
});

