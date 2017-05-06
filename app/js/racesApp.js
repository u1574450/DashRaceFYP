
var RaceApp=(function(){
	var navList;
	var contentDiv;
	var nameHeading;
	var linkDash;
	function createHandler(Race)
	{
		return function(){
			ajax.makeRequest("data/"+Race.id+".json",displayRaceDetails); 
		}
	}
	function displayRaceDetails(Race)
	{
		contentDiv.classList.remove("hide"); 
		navList.classList.add("hide"); 
		nameHeading.innerHTML=Race.name; 

	}

	function populateList(races)
	{
		navList=document.getElementById("nav");

		races.forEach(function(Race){
			
			var newLi=document.createElement("li"); 
			newLi.innerHTML=Race.name; 
		    newLi.addEventListener("click", createHandler(Race), false)
			navList.appendChild(newLi); 
		})
	}
	function backToList(){
		contentDiv.classList.add("hide"); 
		navList.classList.remove("hide"); 
	}
	function init(){
			
		navList=document.getElementById("nav"); 
		
		contentDiv=document.getElementById("content"); 
		nameHeading=document.getElementById("name"); 

		linkDash=document.getElementById("linkDash");
		ajax.makeRequest("data/races.json",populateList);
		backBtn=document.getElementById("backBtn"); 
		backBtn.addEventListener("click", backToList, false)
	}
	return{
		init:init
	}
})();

RaceApp.init();



