let overlay = document.getElementsByClassName("overlay")[0];
function openDiv() {
  overlay.style.transform = "scale(1)";
}
let open = document.getElementsByTagName("span")[1];
open.onclick = openDiv;

let close =document.getElementsByTagName("span")[0]
close.onclick = function (){
    overlay.style.transform = "scale(0)";
}