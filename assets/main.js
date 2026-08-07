document.addEventListener("DOMContentLoaded",function(){
  var t=document.querySelector(".menu-toggle"),n=document.querySelector(".nav-links");
  if(t&&n){t.addEventListener("click",function(){n.classList.toggle("open")});}
});
