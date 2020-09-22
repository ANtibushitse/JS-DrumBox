function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;// empêche la fonction de tourner en boucle 

  key.classList.add('playing');//Permets d'ajouter fonction play à key .remove et à toggle
  audio.currentTime = 0; //  rejoue le sample depuis le début
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transorm') return;
  console.log(this);

  //e.target.classList.remove('playing');
};
//Hello there :P 
const keys = Array.from(document.querySelectorAll('.key'));
// consol.log(keys) returen arrau
// keys.forEach(key => console.log('hgjg'));//  is this feasable? 
keys.forEach(key => key.addEventListener('transitioncancel', removeTransition));  
window.addEventListener('keydown', playSound);
