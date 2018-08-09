import '../scss/index.scss';
import axios from 'axios';
new Vue({
  el: '#app',
  data: {
    swipers: null,
    isMenuOpen: false,
    isheaderFix: false,
    scroll: 0,
    nowIdx: 0,
    blockchain:[],
    detailItem: [],
    logoObj: {
      "title": "PORTAL",
      "icon": "./images/icon/portal@2x.png",
      "url": "https://www.portal.network/"
    },
    isOpenChainHeight: false,
    onePhotos: [],
    isOpenPop: false,
    isOpenPopMore: false,
    morePhotos: [],
  },
  methods: {
    toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollFn() {
      this.scroll = document.documentElement.scrollTop;
      this.isheaderFix = this.scroll > 150;
    },
    blockchainData(res){
      this.blockchain = res.data;
    },
    onChaeckBlock(obj){
      this.detailItem = obj.detail;
      this.isOpenChainHeight = true;
      this.logoObj = {
        "title": obj.title,
        "icon": obj.icon,
        "url": obj.url
      }
    },
    resetBlock(){
      this.isOpenChainHeight = false;
      this.detailItem = [];
      this.logoObj = {
        "title": "PORTAL",
        "icon": "./images/icon/portal@2x.png",
        "url": "https://www.portal.network/"
      }
    },
    openModal(name) {
      this.isOpenPop = true;
      let photo = [];
      switch(name){
        case "deploy":
          photo = ["./images/index/deploys.png"];
          break;
        case "toolkits":
          photo = ["./images/index/toolkit.png"];
          break;
      }
      this.onePhotos = photo;
      $("body").addClass("fixBody");
    },
    closeModal() {
      this.isOpenPop = false;
      this.onePhotos = [];
      $("body").removeClass("fixBody");
    },
    openMoreModal(name) {
      this.isOpenPopMore = true;
      let photo = [];
      switch(name){
        case "cli":
          photo = [
            "./images/index/CLI_1.png",
            "./images/index/CLI_2.png",
            "./images/index/CLI_3.png",
            "./images/index/CLI_4.png",
          ];
          break;
        case "domain":
          photo = [
            "./images/index/dom_01.png",
            "./images/index/dom_02.png",
            "./images/index/dom_03.png",
            "./images/index/dom_04.png",
            "./images/index/dom_05.png",
          ];
          break;
      }
      this.morePhotos = photo;

      setTimeout(() => {
        this.swipers[0].update();
        this.swipers[1].update();
      }, 500);

      $("body").addClass("fixBody");
    },
    closeModalMore() {
      this.isOpenPopMore = false;
      this.morePhotos = [];
      $("body").removeClass("fixBody");
    },
    coming () {
      alert('coming soon');
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
    axios.get("assets/json/blockchain.json").then(this.blockchainData).catch(err=> console.log(err));

    this.swipers = new Swiper('.swiper-container', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});