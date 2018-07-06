new Vue({
  el: '.blog',
  data: {
    isMenuOpen: false,
    isheaderFix: false,
    scroll: 0,
  },
  methods: {
    toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollFn() {
      this.scroll = document.documentElement.scrollTop;
      this.isheaderFix = this.scroll > 150;
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scrollFn);
  }
});