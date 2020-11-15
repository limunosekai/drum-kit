function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // 해당 key 이외의 값을 실행할 경우 stop
  audio.currentTime = 0; // term 없이 실행
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // event의 propertyName이 transform이 아닌 경우 skip
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);