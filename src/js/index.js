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
    githubItems: [],
    repositorieCount: 0,
    openSubArea: false,
    isformPopupOpen: false,
    email: "",
    currentSelectedVote: "",
    votes: []
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
        'tomo': this.chainSelectidx === 11
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
      this.onCheckBlock(res.data[0]);
    },
    onCheckBlock(obj){
      this.detailItem = obj.detail;
      this.logoObj = {
        "title": obj.title,
        "icon": obj.icon,
        "url": obj.url,
        "description": obj.description
      }
    },
    formPopupOpen(){
      this.isformPopupOpen = true;
      $("body").addClass("fixBody");
      this.votes = [
        {
          id: 1,
          name: "Eosio",
          url: "images/index/eos.png",
          count: 0
        },
        {
          id: 2,
          name: "Cardano",
          url: "images/index/cardano.png",
          count: 0
        },
        {
          id: 3,
          name: "TRON",
          url: "images/index/tron.png",
          count: 0
        },
        {
          id: 4,
          name: "AION",
          url: "images/index/aion.png",
          count: 0
        }
      ];
      // axios.get("")
      // .then((res)=>{
      //   this.votes = res.data;
      // })
      // .catch(()=>{
      //   swal('Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.');
      // });
    },
    toggleSelected(event,params){
      this.currentSelectedVote = params;
    },
    formPopupClose(){
      this.isformPopupOpen = false;
      $("body").removeClass("fixBody");
    },
    onSubmit(){
      const isText = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      let errorMsg = "";

      if(!(isText).test(this.email)) errorMsg = "Incorrect Email.";
      if(this.currentSelectedVote === "") errorMsg = "Incorrect Select.";
      if(errorMsg !== "") swal(errorMsg);

      if(errorMsg === ""){
        let currentChain = this.votes.filter((elem)=>{
          return elem.name === this.currentSelectedVote;
        });
        const data = {
          email: this.email,
          id: currentChain[0].id
        };
        // axios.post('', data)
        // .then(function () {
        //   swal('Thank you for your participation');
        //   this.isformPopupOpen = false;
        //   $("body").removeClass("fixBody");
        // }).catch(function () {
        //   swal('Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.');
        // });
      }
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
      swal("Coming Soon");
    },
    handActive(idx) {
      this.chainSelectidx = idx;
    },
    goToBns(){
      animateScrollTo(document.querySelector('#bns'));
    },
    openArea(){
      this.openSubArea = !this.openSubArea;
    },
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
    axios.get("https://api.github.com/orgs/PortalNetwork/repos?per_page=100")
    .then((res)=>{
      const type = ['ens','wns','ecns','ins','qns','nns','aens','bcns','qcns','pns','enigma-ns','nem-ns'];
      let typeArr = {};
      this.repositorieCount = res.data.length;
      type.map((obj, idx)=>{
        typeArr[obj] = res.data.filter((elem)=>{
          return elem.name === obj;
        });
        this.githubItems.push(typeArr[obj][0]);
        setTimeout(() => {
          this.swipers.update();
        }, 500);
      });
    }).catch(err=> console.log(err));

    this.swipers = new Swiper('.swiper-container', {
      loop: false,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.swipers = new Swiper('.swiper-github', {
      loop: false,
      watchOverflow: true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 6,
      spaceBetween: 15,
      width: 560,
      slidesPerColumnFill : 'row',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      breakpoints: {
        720: {
          width: 330,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
        }
      }
    });
  }
});