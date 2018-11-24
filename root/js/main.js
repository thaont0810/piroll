var video = document.getElementById('video');
var btn = document.getElementById('btn-video');
var arr = document.getElementsByClassName('arrow');
var pause = document.getElementsByClassName('pause');
function playPause() {
   if (video.paused) {
     video.play();
     if (arr) {
      btn.classList.remove("arrow");
      btn.classList.add("pause");

     } 
   } else {
     video.pause();
     if (pause) {
      btn.classList.remove("pause");
      btn.classList.add("arrow");

     } 
   }
}

$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    directionNav: false, 
  })
});