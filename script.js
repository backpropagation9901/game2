var charicter = document.getElementById("charicter");
var block = document.getElementById("block");
function jump(){
    if(character.classList !="animate"){
      character.classList.add("animate");
    }
  setTimeout(function(){
    character.classList.remove("animate");
},500);

}

var checkDead = setInterval(function(){
  var charicterTop = 
      parseInt(windown.getComputedStyle(charicter).
               getPropertyValue("top"));
  var blockLeft = 
      parseInt(windown.getComputedStyle(block).
               getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && charicterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("You Are Weak!");
  }
    
},10);
