'use strict';

import "babel-polyfill";

function Observer(initials){

  const observer = document.getElementsByClassName('observer')[0];
  const eyes = observer.getElementsByClassName('observer__sclera');
  const bait = document.getElementById('observerBait');
  const maxMoveIris = initials.maxMoveIris;
  const maxMovePupil = initials.maxMovePupil;
  const maxScaleIris = initials.maxScaleIris;
  const threshold = initials.threshold;

  function Eye(sclera, i){

    this.constructor = (sclera, i) => {
      this.moveEyes = true;
      this.squintingEyes = false;

      this.difference = {
        x: 0,
        y: 0
      }

      this.windowScrollTop = window.scrollY;
      this.sclera = sclera;
      this.iris = sclera.getElementsByClassName('observer__iris')[0];
      this.pupil = this.iris.getElementsByClassName('observer__pupil')[0];

      this.getEyePosition();
      this.bindEvents();
    }

    this.bindEvents = () => {
      window.addEventListener('resize', this.getEyePosition);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('touchmove', this.handleTouchMove);
      observer.addEventListener('click', this.focusEyes);
    }

    this.focusEyes = (e) => {

      if(!this.moveEyes && this.squintingEyes){
        setTimeout(() => {
          sclera.classList.add('observer__sclera--squint');
        }, 300);
        this.sclera.classList.remove('observer__sclera--runAnimation');
      }
      else{
        this.sclera.classList.remove('observer__sclera--squint');
        let sclera = this.sclera;
        setTimeout(() => {
          sclera.classList.add('observer__sclera--runAnimation');
        }, 1000);
      }

      this.difference.x = 0;
      this.difference.y = 0;

      if(!this.moveEyes && this.squintingEyes){
        this.moveEyes = false;
        this.squintingEyes = false;
      }
      else if(this.moveEyes && !this.squintingEyes){
        this.moveEyes = false;
        this.squintingEyes = true;
      }
      else{
        this.getMousePosition(e);
        this.moveEyes = true;
        this.squintingEyes = false;
      }

      this.setIrisOffset();
      this.setPupilOffset();
    }

    this.getMousePosition = (e) => {

      const clientY = e.clientY + this.windowScrollTop;

      const starts = {
        x: e.clientX,
        y: clientY
      };

      if(e.clientX > this.eyeCenterX + threshold){
        starts.x = this.eyeCenterX + threshold;
      }
      else if(e.clientX < this.eyeCenterX - threshold){
        starts.x = this.eyeCenterX - threshold;
      }

      if(clientY > this.eyeCenterY + threshold){
        starts.y = this.eyeCenterY + threshold;
      }
      else if(clientY < this.eyeCenterY - threshold){
        starts.y = this.eyeCenterY - threshold;
      }

      this.difference = {
        x: starts.x - this.eyeCenterX,
        y: starts.y - this.eyeCenterY
      }

    }

    this.getTouchPosition = (e) => {

      const clientY = e.touches[0].clientY + this.windowScrollTop;

      const starts = {
        x: e.touches[0].clientX,
        y: clientY
      };

      if(e.clientX > this.eyeCenterX + threshold){
        starts.x = this.eyeCenterX + threshold;
      }
      else if(e.clientX < this.eyeCenterX - threshold){
        starts.x = this.eyeCenterX - threshold;
      }

      if(clientY > this.eyeCenterY + threshold){
        starts.y = this.eyeCenterY + threshold;
      }
      else if(clientY < this.eyeCenterY - threshold){
        starts.y = this.eyeCenterY - threshold;
      }

      this.difference = {
        x: starts.x - this.eyeCenterX,
        y: starts.y - this.eyeCenterY
      }

    }

    this.handleTouchMove = (e) => {
      this.getEyePosition(e);
      this.getTouchPosition(e);

      if(this.moveEyes && e.touches[0].clientY + window.scrollY <= windowHeight){
        this.setIrisOffset();
        this.setPupilOffset();
      }

    }

    this.handleMouseMove = (e) => {
      this.getEyePosition(e);
      this.getMousePosition(e);

      if(this.moveEyes && e.clientY + window.scrollY <= windowHeight){
        this.setIrisOffset();
        this.setPupilOffset();
      }

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
      this.eyeCenterY = this.windowScrollTop + eyeBox.top + eyeBox.height / 2;
    }

    this.constructor(sclera);

  }

  let windowWidth,
      windowHeight,
      baitToggleI,
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
    window.addEventListener('scroll', handleScroll);
    observer.addEventListener('mousemove', handleMouseMove);
    observer.addEventListener('touchmove', handleTouchMove);
  }

  function handleScroll(e){
    this.windowScrollTop = window.scrollY;
  }

  function handleMouseMove(e){
    this.windowScrollTop = window.scrollY;
    bait.style.left = e.clientX + 'px';
    const top = e.clientY + this.windowScrollTop < windowHeight ? e.clientY + this.windowScrollTop : windowHeight;
    bait.style.top = top + 'px';
  }

  function handleTouchMove(e){
    this.windowScrollTop = window.scrollY;
    bait.style.left = e.touches[0].clientX + 'px';
    const top = e.touches[0].clientY + this.windowScrollTop < windowHeight ? e.touches[0].clientY + this.windowScrollTop : windowHeight;
    bait.style.top = top + 'px';
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
