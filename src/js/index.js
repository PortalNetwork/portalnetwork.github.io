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
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', this.scrollFn);
    axios.get("assets/json/blockchain.json").then(this.blockchainData).catch(err=> console.log(err));
  }
});