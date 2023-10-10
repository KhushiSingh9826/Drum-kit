for(var i=0; i<document.querySelectorAll(".drum").length ;i++){
document.querySelectorAll(".drum ")[i].addEventListener("click" , function() {

var soundPlay = this.innerHTML;

  makeSound(soundPlay);
  buttonAnimation(soundPlay);
   
});

}
document.addEventListener("keypress", function(event){
  makeSound(event.key) ;
  buttonAnimation(event.key);
});
function makeSound(key){
   switch(key) {
      case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
   tom1.play();
   break;
   
   case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
   
      case "s":
     var tom3 = new Audio("./sounds/tom-3.mp3");
     tom3.play();
     break;
   
     case "d":
     var tom4 =  new Audio("./sounds/tom-4.mp3");
     tom4.play();
     break;
   
     case "j":
      var crashd =  new Audio("./sounds/crash.mp3");
      crashd.play();
      break;
   
      case "k":
      var kk =  new Audio("./sounds/kick-bass.mp3");
      kk.play();
      break;
   
      case "l":
      var ll =  new Audio("./sounds/snare.mp3");
      ll.play();
      break;
   }

}
function buttonAnimation(currentKey){
   var active = document.querySelector("." + currentKey);
   active.classList.add("pressed");
   setTimeout(function(){
      active.classList.remove("pressed");},100);

   }





/*var audio = new Audio("./sounds/tom-1.mp3");
audio.play();*/