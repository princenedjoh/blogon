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
       document.getElementById("mainslide").setAttribute("src", "images/b8.jpg")
	}
	else if(a == 2){
		document.getElementById("mainslide").setAttribute("src", "images/b15.jpg")
	 }
	 else if(a == 3){
		document.getElementById("mainslide").setAttribute("src", "images/b11.jpg")
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
	document.getElementById("mainslide").setAttribute("src", "images/b8.jpg");
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






//-------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------
//             changing nav bar
//-------------------------------------------------------------------------------------------------------------

window.onscroll = function(){
	document.getElementById("navbar").style.background = "#477b60";
	document.getElementById("navbar").style.boxShadow = "0 0 20px 0";
}


//-------------------------------------------------------------------------------------------------------------