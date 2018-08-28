import '../scss/index.scss';
import axios from 'axios';
import animateScrollTo from 'animated-scroll-to';
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
    isOpenPop: false,
    isOpenPopMore: false,
    morePhotos: [],
    chainSelectidx: 0,
    isMediaOpen: false,
    feeds: [],
    photoItems: [],
    githubItems: []
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
        'qkc': this.chainSelectidx === 9,
        'perl': this.chainSelectidx === 10,
        'zil': this.chainSelectidx === 11
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
    axios.get("https://api.github.com/orgs/PortalNetwork/repos")
    .then((res)=>{
      
      // const type = ['ens', 'wns', 'ECNS', 'ins', 'qns', 'nns', 'aens', 'bcns', 'qcns', 'pns', 'tns'];
      // const type = ['ens', 'wns', 'ECNS', 'ins', 'qns', 'nns'];
      // let typeArr = {};
      // debugger;
      // let result = [];
      // result.push(res.data);
      // type.map((obj, idx)=>{
      //   typeArr[obj] = result[0].filters((elem)=>{
      //     return elem.name === obj;
      //   });
      //   this.githubItems.push(typeArr[obj]);
      // });
      // debugger;
      let aaa = Object.values(res.data);
      this.githubItems.push(aaa[24]);
      this.githubItems.push(aaa[19]);
      this.githubItems.push(aaa[26]);
      this.githubItems.push(aaa[15]);
      this.githubItems.push(aaa[20]);
      this.githubItems.push(aaa[28]);
    


      // const ens = res.data.filters((elem)=>{
      //   return elem.name === 'ens';
      // });
    //   const wns = res.data.filters((elem)=>{
    //     return elem.name === 'wns';
    //   });
    //   const ecns = res.data.filters((elem)=>{
    //     return elem.name === 'ECNS';
    //   });
    //   const ins = res.data.filters((elem)=>{
    //     return elem.name === 'ins';
    //   });
    //   const qns = res.data.filters((elem)=>{
    //     return elem.name === 'qns';
    //   });
    //   const nns = res.data.filters((elem)=>{
    //     return elem.name === 'nns';
    //   });
    //   const aens = res.data.filters((elem)=>{
    //     return elem.name === 'aens';
    //   });
    //   const bcns = res.data.filters((elem)=>{
    //     return elem.name === 'bcns';
    //   });
    //   const qcns = res.data.filters((elem)=>{
    //     return elem.name === 'qcns';
    //   });
    //   const pns = res.data.filters((elem)=>{
    //     return elem.name === 'pns';
    //   });
    //   const tns = res.data.filters((elem)=>{
    //     return elem.name === 'tns';
    //   });


      // this.githubItems.push(ens);
      
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