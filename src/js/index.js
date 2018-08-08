// import animateScrollTo from 'animated-scroll-to';
import '../scss/index.scss';
new Vue({
  el: '#app',
  data: {
    isMenuOpen: false,
    isheaderFix: false,
    scroll: 0,
  },
  methods: {
    // toggleMenuFn() {
    //   this.isMenuOpen = !this.isMenuOpen;
    // },
    scrollFn() {
      this.scroll = document.documentElement.scrollTop;
      this.isheaderFix = this.scroll > 150;
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
  }
});