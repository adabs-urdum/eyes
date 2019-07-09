'use strict';

function Observer(){

  const observer = document.getElementsByClassName('observer')[0];
  const sclera = observer.getElementsByClassName('observer__sclera')[0];
  const iris = sclera.getElementsByClassName('observer__iris')[0];
  const pupil = iris.getElementsByClassName('observer__pupil')[0];
  const maxMoveIris = 55;
  const maxMovePupil = 15;
  const maxScaleIris = 0.13;

  let mouseX,
      mouseY,
      eyeCenterX,
      eyeCenterY,
      difference,
      differencePercentage,
      windowWidth,
      windowHeight;

  function init(){
    setVars();
    bindEvents();
  }

  function setVars(){
    getEyePosition();
    getWindowSize();
  }

  function bindEvents(){
    observer.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
  }

  function handleWindowResize(){
    getEyePosition();
    getWindowSize();
  }

  function getWindowSize(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  function handleMouseMove(e){
    getMousePosition(e);
    setIrisOffset();
    setPupilOffset();
  }

  function setPupilOffset(){
    const offsetX = maxMovePupil / 100 * differencePercentage.x - 50;
    const offsetY = maxMovePupil / 100 * differencePercentage.y - 50;
    pupil.style.transform = 'translate(' + offsetX + '%, ' + offsetY + '%)';
  }

  function setIrisOffset(){
    const offsetX = maxMoveIris / 100 * differencePercentage.x - 50;
    const offsetY = maxMoveIris / 100 * differencePercentage.y - 50;
    const translate = 'translate(' + offsetX + '%, ' + offsetY + '%)';
    const scaleX = maxScaleIris / 100 * differencePercentage.x > 0 ? 1 - maxScaleIris / 100 * differencePercentage.x : 1 - maxScaleIris / 100 * differencePercentage.x * -1;
    const scaleY = maxScaleIris / 100 * differencePercentage.y > 0 ? 1 - maxScaleIris / 100 * differencePercentage.y : 1 - maxScaleIris / 100 * differencePercentage.y * -1;
    let scale = ' scaleX(' + scaleX + ')';
    scale += ' scaleY(' + scaleY + ')';
    iris.style.transform = translate + scale;
  }

  function getMousePosition(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    difference = {
      x: mouseX - eyeCenterX,
      y: mouseY - eyeCenterY
    }

    differencePercentage = {
      x: 100 / eyeCenterX * difference.x,
      y: 100 / eyeCenterY * difference.y,
    };
  }

  function getEyePosition(){
    const eyeBox = sclera.getBoundingClientRect();
    eyeCenterX = eyeBox.left + eyeBox.width / 2;
    eyeCenterY = eyeBox.top + eyeBox.height / 2;
  }

  init();

}

Observer();
