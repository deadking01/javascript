function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}
function insertAfter(newElelment,targetElement){
	var parent =targetElement.parentNode;
	if(parentNode.lastChild ==targetElement){
		parent.appentChild(newElelment);
	}else{
		parent.insertBefore(newElelment,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.png");
	placeholder.setAttribute("alt","my image gallery");

	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("choose an image");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	  links[i].onclick=function(){
	  	return showPic(this);
	  }
	  links[i].onkeypress=links[i].onclick;
	}
}
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text=whichpic.getAttribute("title");
	}else{
		var text="";
	}
	return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);