function filter(classname) {
	window.location.hash = classname;
	var header = document.querySelector("#header img");
	header.src = "images/header/"+ classname + ".jpg";
	header.style.visibility = "visible";
	Array.prototype.forEach.call(document.querySelectorAll(".hero"), function (el) {
		if(el.classList.contains(classname)) {
			el.classList.remove("hidden")
		}
		else {
			el.classList.add("hidden")
		}
	});
}

window.onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			var data = JSON.parse(xhr.responseText);
			var source = document.getElementById("template").innerHTML;
			var template = Handlebars.compile(source);
			document.getElementById("content").innerHTML = template(data);
			if(window.location.hash) {
				filter(window.location.hash.substring(1));
			}
		}
	}
	xhr.open("GET", "/data.json");
	xhr.send();
}