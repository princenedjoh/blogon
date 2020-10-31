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

