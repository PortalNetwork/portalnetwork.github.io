import '../scss/index.scss';
import axios from 'axios';
import animateScrollTo from 'animated-scroll-to';
import en from '../assets/json/i18n_en.json';
import tw from '../assets/json/i18n_tw.json';

const messages = {
  en,
  tw
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  el: '#app',
  i18n,
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
    isOpenPop: false,
    isOpenPopMore: false,
    morePhotos: [],
    chainSelectidx: 0,
    isMediaOpen: false,
    feeds: [],
    photoItems: [],
    selectedMultiLang: "en"
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
    openModal(name,...more) {
      this.isOpenPop = true;
      let imgUrl = `./images/index/${name}.png`;
      let morePhoto = [...more];
      if(morePhoto !== undefined){
        morePhoto.forEach((elem)=>{
          this.photoItems.push(`./images/index/${elem}.png`);
        });
      }
      this.photoItems.push(imgUrl);  
      setTimeout(() => {
        this.swipers.update();
      }, 500);    
      $("body").addClass("fixBody");
    },
    closeModal() {
      this.isOpenPop = false;
      this.photoItems = [];
      $("body").removeClass("fixBody");
    },
    coming () {
      alert('coming soon');
    },
    handActive(idx) {
      this.chainSelectidx = idx;
    },
    goToBns(){
      animateScrollTo(document.querySelector('#bns'));
    },
    onChangeMultiLang(){
      i18n.locale = this.selectedMultiLang;
      axios.get("assets/json/blockchain_tw.json")
        .then(this.blockchainData)
        .catch(err=> console.log(err));
      axios.get("assets/json/landing_news_tw.json")
        .then((res)=>{
          this.feeds = res.data;
        }).catch(err=> console.log(err));
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
    axios.get("assets/json/blockchain_en.json").then(this.blockchainData).catch(err=> console.log(err));
    axios.get("assets/json/landing_news_en.json")
      .then((res)=>{
        this.feeds = res.data;
      }).catch(err=> console.log(err));
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