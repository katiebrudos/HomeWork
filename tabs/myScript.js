window.onload = function(){

	var container = document.getElementById("container");
	var tabList = container.querySelector(".tabHeaders ul li");
	var currentTab = tabList.id.split("_")[1];
	
	tabList.parentNode.setAttribute("data-current", currentTab);
	tabList.setAttribute("class", "tabActiveHeader");
	
	//hide the tabs we don't need right now
	var contents = container.querySelectorAll(".tabContent");
	for (var j = 1; j<contents.length; j++){
		contents[j].style.display = "none";
	}
	
	//adding click events to tabs
	var tabs = container.querySelectorAll(".tabHeaders ul li");
	for(var i = 0; i<tabs.length; i++){
		tabs[i].onclick = showTab;
	}
}

function showTab(){
	var current = this.parentNode.getAttribute("data-current");
	
  //remove class of activetabheader and hide old contents
  document.getElementById("header_" + current).removeAttribute("class");
  document.getElementById("class_" + current).style.display="none";

  var currentTab = this.id.split("_")[1];
  //add class of activetabheader to new active tab and show contents
  this.setAttribute("class","tabActiveHeader");
  document.getElementById("class_" + currentTab).style.display="block";
  this.parentNode.setAttribute("data-current",currentTab);
}
