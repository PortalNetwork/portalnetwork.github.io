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
      "icon": "./images/icon/portal1.svg",
      "url": "https://www.portal.network/"
    },
    onePhotos: [],
    isOpenPop: false,
    isOpenPopMore: false,
    morePhotos: [],
    chainSelectidx: 0,
    isMediaOpen: false,
    feeds: []
  },
  computed: {
    chainStyle() {
      return {
        'chain': true,
        'default': this.chainSelectidx === 0,
        'eth': this.chainSelectidx === 1,
        'wan': this.chainSelectidx === 2,
        'etc': this.chainSelectidx === 3,
        'icon': this.chainSelectidx === 4,
        'qtum': this.chainSelectidx === 5,
        'neo': this.chainSelectidx === 6,
        'aelf': this.chainSelectidx === 7,
        'bch': this.chainSelectidx === 8,
        'qkc': this.chainSelectidx === 9
      }
    }
  },
  methods: {
    toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleMedia(){
      this.isMediaOpen = !this.isMediaOpen;
    },
    scrollFn() {
      this.scroll = document.documentElement.scrollTop;
      this.isheaderFix = this.scroll > 150;
    },
    blockchainData(res){
      this.blockchain = res.data;
      this.onChaeckBlock(res.data[0]);
    },
    onChaeckBlock(obj){
      this.detailItem = obj.detail;
      this.logoObj = {
        "title": obj.title,
        "icon": obj.icon,
        "url": obj.url
      }
    },
    resetBlock(){
      alert("coming soon");
      // this.detailItem = [];
      // this.logoObj = {
      //   "title": "PORTAL",
      //   "icon": "./images/icon/portal@2x.png",
      //   "url": "https://www.portal.network/"
      // }
    },
    openModal(name) {
      this.isOpenPop = true;
      let photo = [];
      switch(name){
        case "cli1":
          photo = ["./images/index/CLI_11.png"];
          break;
        case "cli2":
          photo = ["./images/index/CLI_22.png"];
          break;
        case "kb":
          photo = ["./images/index/kaizen_bitcoincash.png"];
          break;
        case "to":
          photo = ["./images/index/toolkit.png"];
          break;
        case "ha1":
          photo = ["./images/index/ha_b1.png"];
          break;
        case "ha2":
          photo = ["./images/index/ha_b2.png"];
          break;
        case "ha3":
          photo = ["./images/index/ha_b3.png"];
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
    },
    handActive(idx) {
      this.chainSelectidx = idx;
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
    axios.get("assets/json/blockchain.json").then(this.blockchainData).catch(err=> console.log(err));
    axios.get("assets/json/news_list.json")
      .then((res)=>{
        this.feeds = res.data;
      })
      .catch(err=> console.log(err));
    this.swipers = new Swiper('.swiper-container', {
      loop: false,
      watchOverflow: true,
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