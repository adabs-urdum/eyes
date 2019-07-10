'use strict';

import "babel-polyfill";

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
      window.addEventListener('resize', this.getEyePosition);
      window.addEventListener('mousemove', this.handleMouseMove);
    }

    this.getMousePosition = (e) => {

      const starts = {
        x: e.clientX,
        y: e.clientY
      };

      if(e.clientX > this.eyeCenterX + threshold){
        starts.x = this.eyeCenterX + threshold;
      }
      else if(e.clientX < this.eyeCenterX - threshold){
        starts.x = this.eyeCenterX - threshold;
      }

      if(e.clientY > this.eyeCenterY + threshold){
        starts.y = this.eyeCenterY + threshold;
      }
      else if(e.clientY < this.eyeCenterY - threshold){
        starts.y = this.eyeCenterY - threshold;
      }

      this.difference = {
        x: starts.x - this.eyeCenterX,
        y: starts.y - this.eyeCenterY
      }

    }

    this.handleMouseMove = (e) => {
      this.getMousePosition(e);
      this.setIrisOffset();
      this.setPupilOffset();
    }

    this.setPupilOffset = () => {
      let offsetX = maxMovePupil / 100 * this.difference.x - 50;
      let offsetY = maxMovePupil / 100 * this.difference.y - 50;

      this.pupil.style.transform = 'translate(' + offsetX + '%, ' + offsetY + '%)';
    }

    this.setIrisOffset = () => {
      let offsetX = maxMoveIris / 100 * this.difference.x;
      let offsetY = maxMoveIris / 100 * this.difference.y;
      if(offsetX > maxMoveIris){
        offsetX = maxMoveIris;
      }
      if(offsetY > maxMoveIris){
        offsetY = maxMoveIris;
      }
      const translate = 'translate(' + (offsetX - 50) + '%, ' + (offsetY - 50) + '%)';
      let scaleX = maxScaleIris / 100 * this.difference.x > 0 ? 1 - maxScaleIris / 100 * this.difference.x : 1 - maxScaleIris / 100 * this.difference.x * -1;
      let scaleY = maxScaleIris / 100 * this.difference.y > 0 ? 1 - maxScaleIris / 100 * this.difference.y : 1 - maxScaleIris / 100 * this.difference.y * -1;
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
  maxMoveIris: 18,
  maxMovePupil: 10,
  maxScaleIris: 0.10,
  threshold: 110,
});
