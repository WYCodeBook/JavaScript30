

  function removeTransition(e) {
    if(e.propertyName != 'transform') return; //skip it if it's not a transform
    event.target.classList.remove('playing'); //used to remove the add class
  }

  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop the function from running all together

    key.classList.add('playing'); //adding a class to a pressed key
    audio.currentTime = 0; //rewind to the stop
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //items.forEach() instead of just forEach, which means it's a property of an array.
  window.addEventListener('keydown', playSound) //when we hit a key on the keyboard, meaning `keydown`, we would like to run the `playSound` function.
