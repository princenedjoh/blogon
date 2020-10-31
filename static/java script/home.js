//----------------------------------------------------------------------------------------------------------------------------------------------
//            changes menuitems background colors when clicked
//----------------------------------------------------------------------------------------------------------------------------------------------

function menuitems0(){
	  document.getElementsByClassName("menuitems1elements")[0].style.background = "#477b6061";
}
function menuitems1(){
	  document.getElementsByClassName("menuitems1elements")[1].style.background = "#477b6061";
}
function menuitems2(){
	  document.getElementsByClassName("menuitems1elements")[2].style.background = "#477b6061";
}
function menuitems3(){
	  document.getElementsByClassName("menuitems1elements")[3].style.background = "#477b6061";
}
//-------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------
//dropdown menu when dashboard icon is clicked
//--------------------------------------------
 function menudropdown(){
	if( document.getElementsByClassName("menuitems1")[0].style.display == "none"){
	    document.getElementsByClassName("menuitems1")[0].style.display = "block";
	}
	else {
		document.getElementsByClassName("menuitems1")[0].style.display = "none"
	}
 }

//--------------------------------------------


//------------------------------------------------------------------------------------------------------------
//    slideshow
//-------------------------------------------------------------------------------------------------------------
var a = 1
function slideshow(){
	
    if(a == 1){
	   document.getElementById("mainslide").src = "static/images/b8.jpg";
	   document.getElementsByClassName("slidetext1")[0].innerHTML = "bringing the news your way";
	   document.getElementsByClassName("news button")[0].innerHTML = "latest news";
	   document.getElementsByClassName("news button")[0].style.color = "white";
	   document.getElementsByClassName("news button")[0].style.border = "1px solid white";
	   document.getElementsByClassName("slidecontentmobile")[0].style.top = "220px";
	}
	else if(a == 2){
		document.getElementById("mainslide").setAttribute("src", "static/images/b15.jpg")
		document.getElementsByClassName("slidetext1")[0].innerHTML = "making your aware of the world";
		document.getElementsByClassName("news button")[0].innerHTML = "Entertainment";
		document.getElementsByClassName("news button")[0].style.color = "#8e12f3";
		document.getElementsByClassName("news button")[0].style.border = "1px solid #8e12f3";
		document.getElementsByClassName("slidecontentmobile")[0].style.top = "200px";
	 }
	 else if(a == 3){
		document.getElementById("mainslide").setAttribute("src", "static/images/b11.jpg")
		document.getElementsByClassName("slidetext1")[0].innerHTML = "the world as a global village";
		document.getElementsByClassName("news button")[0].innerHTML = "Sports";
		document.getElementsByClassName("news button")[0].style.color = "#0fe46e";
		document.getElementsByClassName("news button")[0].style.border = "1px solid #0fe46e";
		document.getElementsByClassName("slidecontentmobile")[0].style.top = "220px";
	 };
	 if(a == 1){
		 document.getElementsByClassName("slidenav1")[0].style.background = "#46846e"
	 }
	 else{
		document.getElementsByClassName("slidenav1")[0].style.background = "transparent"
	 };
	 if(a == 2){
		document.getElementsByClassName("slidenav2")[0].style.background = "#46846e"
	}
	else{
	   document.getElementsByClassName("slidenav2")[0].style.background = "transparent"
	};
	if(a == 3){
		document.getElementsByClassName("slidenav3")[0].style.background = "#46846e"
	}
	else{
	   document.getElementsByClassName("slidenav3")[0].style.background = "transparent"
	};
	 if (a < 3){
		 a = a + 1
	 }
	 else{
		 a = 1
	 };
	 setTimeout("slideshow()", 5000);
}
function clicknav1(){
	document.getElementById("mainslide").setAttribute("src", "{{url_for('static', filename='images/b8.jpg')}}");
	document.getElementsByClassName("slidenav1")[0].style.background = "#46846e";
	document.getElementsByClassName("slidenav2")[0].style.background = "transparent"
	document.getElementsByClassName("slidenav3")[0].style.background = "transparent";
	a = 1;

};
function clicknav2(){
	document.getElementById("mainslide").setAttribute("src", "images/b15.jpg");
	document.getElementsByClassName("slidenav2")[0].style.background = "#46846e";
	document.getElementsByClassName("slidenav1")[0].style.background = "transparent"
	document.getElementsByClassName("slidenav3")[0].style.background = "transparent"
	a = 2;
};
function clicknav3(){
	document.getElementById("mainslide").setAttribute("src", "images/b11.jpg");
	document.getElementsByClassName("slidenav3")[0].style.background = "#46846e";
	document.getElementsByClassName("slidenav1")[0].style.background = "transparent"
	document.getElementsByClassName("slidenav2")[0].style.background = "transparent"
	a = 3
};
document.addEventListener("DOMContentloaded", slideshow());


//----------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------
//            sliding of news highlight
//-------------------------------------------------------------------------------------------------------------
var slide = 0

function next(){
	if(document.getElementsByClassName("newshighlightcontainer")[0].style.transform = ""){
	document.querySelectorAll(".newshighlightcontainer")[0].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[1].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[2].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[3].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[4].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[5].style.transform = "translateX(-870px)";
	document.querySelectorAll(".newshighlightcontainer")[6].style.transform = "translateX(-870px)";
}
else{
	slide = slide - 290;
	document.querySelectorAll(".newshighlightcontainer")[0].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[1].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[2].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[3].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[4].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[5].style.transform = "translateX(${slide})";
	document.querySelectorAll(".newshighlightcontainer")[6].style.transform = "translateX(${slide})";
}
}




//-------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------
//             changing nav bar
//-------------------------------------------------------------------------------------------------------------

window.onscroll = function(){
	document.getElementById("navbar").style.background = "#477b60";
	document.getElementById("navbar").style.boxShadow = "0 0 20px 0";
}


//-------------------------------------------------------------------------------------------------------------