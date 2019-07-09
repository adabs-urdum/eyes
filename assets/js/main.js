'use strict';

function Observer(initials){

  const observer = document.getElementsByClassName('observer')[0];
  const eyes = observer.getElementsByClassName('observer__sclera');
  const maxMoveIris = initials.maxMoveIris;
  const maxMovePupil = initials.maxMovePupil;
  const maxScaleIris = initials.maxScaleIris;
  const threshold = initials.threshold;

  function Eye(sclera, i){

    this.constructor = (sclera, i) => {
      this.sclera = sclera;
      this.iris = sclera.getElementsByClassName('observer__iris')[0];
      this.pupil = this.iris.getElementsByClassName('observer__pupil')[0];

      this.getEyePosition();
      this.bindEvents();
    }

    this.bindEvents = () => {
      window.addEventListener('mousemove', this.handleMouseMove);
    }

    this.getMousePosition = (e) => {
      this.difference = {
        x: e.clientX - this.eyeCenterX,
        y: e.clientY - this.eyeCenterY
      }

      this.differencePercentage = {
        x: this.difference.x,
        y: this.difference.y,
      };

    }

    this.handleMouseMove = (e) => {
      this.getMousePosition(e);
      this.setIrisOffset();
      this.setPupilOffset();
    }

    this.setPupilOffset = () => {
      let offsetX = maxMovePupil / 100 * this.differencePercentage.x - 50;
      let offsetY = maxMovePupil / 100 * this.differencePercentage.y - 50;

      this.pupil.style.transform = 'translate(' + offsetX + '%, ' + offsetY + '%)';
    }

    this.setIrisOffset = () => {
      let offsetX = maxMoveIris / 100 * this.differencePercentage.x;
      let offsetY = maxMoveIris / 100 * this.differencePercentage.y;
      const translate = 'translate(' + offsetX + '%, ' + offsetY + '%)';
      let scaleX = maxScaleIris / 100 * this.differencePercentage.x > 0 ? 1 - maxScaleIris / 100 * this.differencePercentage.x : 1 - maxScaleIris / 100 * this.differencePercentage.x * -1;
      let scaleY = maxScaleIris / 100 * this.differencePercentage.y > 0 ? 1 - maxScaleIris / 100 * this.differencePercentage.y : 1 - maxScaleIris / 100 * this.differencePercentage.y * -1;
      let scale = ' scaleX(' + scaleX + ')';
      scale += ' scaleY(' + scaleY + ')';
      this.iris.style.transform = translate + scale;
    }

    this.getEyePosition = () => {
      const eyeBox = this.sclera.getBoundingClientRect();
      this.eyeCenterX = eyeBox.left + eyeBox.width / 2;
      this.eyeCenterY = eyeBox.top + eyeBox.height / 2;
    }

    this.constructor(sclera);

  }

  let windowWidth,
      windowHeight,
      i;

  function init(){
    setVars();
    bindEvents();
    let i = 0;
    for (let sclera of eyes) {
      const eye = new Eye(sclera, i);
      i += 1;
    }
  }

  function setVars(){
    getWindowSize();
  }

  function bindEvents(){
    window.addEventListener('resize', handleWindowResize);
  }

  function handleWindowResize(){
    getWindowSize();
  }

  function getWindowSize(){
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  init();

}

Observer({
  maxMoveIris: 55,
  maxMovePupil: 15,
  maxScaleIris: 0.13,
  threshold: 100,
});
