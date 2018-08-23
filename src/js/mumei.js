import '../scss/mumei.scss';
import animateScrollTo from 'animated-scroll-to';

new Vue({
  el: '#app',
  data: {
    isActive: false,
    selectIdx: 0,
  },
  methods: {
    scrollTo(name){
      console.log(name);
      this.isActive = true;
      animateScrollTo(document.getElementById(name),{speed: 1500,maxDuration: 1500});
    },
    onActive(num){
      this.selectIdx = num;
    }
  }
});