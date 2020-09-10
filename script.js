function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;// empeche la fonction de tourner en  boucle 

  key.classList.add('playing');//   permets däjouter pla fonction play   à key .remove  et à toggle
  audio.currentTime = 0;
  audio.play();
}
console.log("transition");
function removeTransition(e) {
  // 
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');

}

const keys = Array.from(document.querySelectorAll('.key'));
// consol.log(keys) returen arrau
keys.forEach(key => console.log('hgjg'));//  is this feasable? 
keys.forEach(key => key.addEventListener('transitioncancel', removeTransition));  
window.addEventListener('keydown', playSound);