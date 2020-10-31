var x=1
function add(){
    if(x<3){
    var a=document.createElement("div");
    a.innerHTML=document.getElementsByClassName("imgview")[0].innerHTML;
    document.getElementsByClassName("imgview2")[0].appendChild(a); 
    x=x+1;


}
}
var x1=1
function add0(){
    if(x1<3){
    var a1=document.createElement("div");
    a1.innerHTML=document.getElementsByClassName("contentview2")[0].innerHTML;
    document.getElementsByClassName("contentview")[0].appendChild(a1); 
    x1=x1+1;
    }
}