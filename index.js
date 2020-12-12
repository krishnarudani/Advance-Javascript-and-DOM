var numberOfdrumsButton=document.querySelectorAll(".drums").length;

for(var i=0; i<numberOfdrumsButton; i++){

  document.querySelectorAll(".drum").[i].addEventListener("click",function(){

  var audio=new audio("sounds/tom-1.mp3");
  audio.play();

  });

}



