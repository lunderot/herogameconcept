window.onload = function() {
	if(window.location.hash) {
		var link = window.location.hash.substring(1);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				var data = JSON.parse(xhr.responseText)["hero"][link];
				var source = document.getElementById("template").innerHTML;
				var template = Handlebars.compile(source);
				console.log(data);
				
				data.link = link;
				document.getElementById("content").innerHTML = template(data);
			}
		}
		xhr.open("GET", "/data.json");
		xhr.send();
		
		
		
		//var xhr = new XMLHttpRequest();
		//xhr.onreadystatechange = function() {
		//	if (xhr.readyState == XMLHttpRequest.DONE) {
		//		var data = JSON.parse(xhr.responseText);
		//		data.link = link;
		//		document.title = data.name + " - " + data.title;
		//		document.getElementById("content").innerHTML = template.supplant(data);
		//	}
		//}
		//xhr.open("GET", "/hero/"+link+".json");
		//xhr.send();
	}
	else
	{
		document.getElementById("content").innerHTML = "Error";
	}
}