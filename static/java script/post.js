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



//----------------------------------------------------------------------------------------------------------------
//                                search input display and hide
//----------------------------------------------------------------------------------------------------------------
function searchinput(){
    if(document.getElementsByClassName("searchinput")[0].style.display=="none"){
        document.getElementsByClassName("searchinput")[0].style.display="block";
        document.getElementsByClassName("searchinput2")[0].click();
    }
    else{
        document.getElementsByClassName("searchinput")[0].style.display="none"
        document.getElementsByClassName("searchbutton2")[0].style.background="#e0e0e0"
    }
    document.getElementsByClassName("searchbutton2")[0].onmouseover = function(){
        document.getElementsByClassName("searchbutton2")[0].style.background="#477b60"
    }
}






//------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------
//                                     removing blog image from container at media query
//------------------------------------------------------------------------------------------------------------------------
if(window.matchMedia("(max-width: 600px)").matches){
    document.getElementsByClassName("postcontainer")[0].style.background="white";
    document.getElementsByClassName("postcontainer")[0].style.width="100%";
    document.getElementsByClassName("postcontainer")[0].style.paddingTop="5px";
}

if(window.matchMedia("(min-width: 600px)").matches){
    document.getElementsByClassName("postcontainer")[1].style.background="transparent";
    document.getElementsByClassName("postcontainer")[1].style.padding="0px";
}




//-------------------------------------------------------------------------------------------------------------------------