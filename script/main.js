alert("Sunday Update: Still need to finish the last 2 collages & add tv effect to all of them. Will work on this Monday! :) ");



/* POWER SWITCH */
    const powerSwitch = document.querySelector('.power-switch');
    const turnOnAnimation = document.querySelector('.tv__start-animation');
    const turnOffAnimation = document.querySelector('.tv__off-animation');
    let clicks = 0;
    const powerSwitchSound = new Audio('assets/power-switch-click.mp3');
    const arrow = document.querySelector('.arrow');
    const indicators = document.querySelector('.carousel__nav');
    const arrowRemoveR = document.querySelector('.carousel__button--right');
    const arrowRemoveL = document.querySelector('.carousel__button--left');

    // Check if number of clicks on the Power Switch are Odd (Turn on) or Even (Turn off)
    function powerSwitchClick(clicks) {
        if (clicks%2 == 0) {
            console.log('The number is even');
            turnOffAnimation.play();
            arrowRemoveR.classList.add('hidden-power-off');
            arrowRemoveL.classList.add('hidden-power-off');
            myMedia.pause();
            turnOffAnimation.addEventListener('ended',turnOff,false);
                function turnOff(e) {
                    turnOnAnimation.style.display = "block";
                    turnOnAnimation.currentTime = 0;
                    turnOffAnimation.style.display = "none";
                }
        } else {
            console.log('The number is odd');
            turnOnAnimation.play();
            arrowRemoveR.classList.remove('hidden-power-off');
            arrowRemoveL.classList.remove('hidden-power-off');
            playBGMusic(.30);
            turnOnAnimation.addEventListener('ended',turnOn,false);
                function turnOn(e) {
                    turnOnAnimation.style.display = "none";
                    turnOffAnimation.style.display = "block";
                    turnOffAnimation.currentTime = 0;
                }
            }
    }

    // Event for Power Switch click
    powerSwitch.addEventListener('click', e => {
        clicks += 1;
        powerSwitchSound.play();
        powerSwitchClick(clicks);
    })


/* VOLUME SLIDER (BG-MUSIC) (Jquery) */

$("#volume").slider({
    min: 0,
    max: 100,
    value: 30,
    range: "min",
    orientation: 'vertical',
    slide: function(event, ui) {
    setVolume(ui.value / 100);
    }
  });
  
  // Create HTML <audio class="myMedia">
  var myMedia = document.createElement('audio');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";
  myMedia.src = 'assets/dream-a-little-dream-of-me.mp3';

  function playBGMusic(myVolume) {
          myMedia.setAttribute('loop', 'loop');
          setVolume(myVolume);
          myMedia.play();
  }
  
  function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
  }