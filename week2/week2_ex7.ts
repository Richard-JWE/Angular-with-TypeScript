class Messages {
	display_message(){
		alert("Hello to you from the browser!!");
	}
	change_text(){
		let el = document.getElementById("p1");
		el.innerHTML = "Updated Text";
		el.style.color="red";
		el.style.fontSize = "14pt";
		
	}
}

let messages = new Messages();

document.getElementById("b1").addEventListener("click", function(){
	messages.change_text(); 
	messages.display_message();
}
);

