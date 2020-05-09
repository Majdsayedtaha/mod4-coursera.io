(function(window){
var byeSpeaker = {};

var speakWord = "Good Bye";

function speak(name) {
  console.log(speakWord + " " + name);
}("John");

window.byeSpeaker = byeSpeaker;

})(window);
