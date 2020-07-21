 #javaScript 
var charicter = documentgetElementById("charicter");
var block = document.getElementBYId("block");
function jump(){
character.classList.add("animate");
setTimeout(function(){
character.classList.remove("animate");
},500);

}
