(function(window){
var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.SpeakGoodBye = function speak(name) {
  console.log(speakWord + " " + name);
}("John");

window.byeSpeaker = byeSpeaker;

})(window);
