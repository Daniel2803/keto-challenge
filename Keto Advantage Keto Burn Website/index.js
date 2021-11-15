

var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-col");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
