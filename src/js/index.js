import '../scss/index.scss';
import axios from 'axios';
new Vue({
  el: '#app',
  data: {
    isMenuOpen: false,
    isheaderFix: false,
    scroll: 0,
    nowIdx: 0,
    blockchain:[],
    detailItem: [],
    logoObj: {
      "title": "PORTAL",
      "icon": "./images/icon/portal@2x.png",
    },
    isOpenChainHeight: false,
    onePhotos: [],
    isOpenPop: false,
    isOpenPopMore: false,
    morePhotos: [
      "./images/index/dom_01.png",
      "./images/index/dom_02.png",
      "./images/index/dom_03.png",
      "./images/index/dom_04.png",
      "./images/index/dom_05.png",
    ]
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
      }
    },
    resetBlock(){
      this.isOpenChainHeight = false;
      this.detailItem = [];
      this.logoObj = {
        "title": "PORTAL",
        "icon": "./images/icon/portal@2x.png",
      }
    },
    openModal: function(name) {
      this.isOpenPop = true;
      let pic = "";
      switch(name){
        case "cli":
          pic = `./images/index/cli.png`;
          break;
        case "deploy":
          pic = `./images/index/deploy.png`;
          break;
        case "toolkits":
          pic = `./images/index/toolkits.png`;
          break;
      }
      this.onePhotos.push(pic);
    },
    closeModal: function() {
      this.isOpenPop = false;
      this.onePhotos = [];
    },
    openMoreModal: function() {
      this.isOpenPopMore = true;
    },
    closeModalMore: function() {
      this.isOpenPopMore = false;
      this.morePhotos = [];
    },
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
    axios.get("assets/json/blockchain.json").then(this.blockchainData).catch(err=> console.log(err));
    this.swiper = new Swiper('.swiper-container', {
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