function GetOffset(el) {
  const box = el.getBoundingClientRect();
  return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}

var app = new Vue({
  el: '#roadmap',
  data: {
    swiper: null,
    isOpenPop: false,
    nowPhotos: [],
    roadmapData: [
      {
        title: 'Education',
        icon: './images/roadmap/education.svg',
        flags: [
          {
            title: 'Education Platform',
            content: 'Our co-founder, Christopher Shen, was presenting at the "Young Entrepreneur" Panel during the event. Assist university students to join the international SUSS events, to not only bring the blockchain trends to Taiwan, but also educate more students to have the ability to develop blockchain technology. It’s our goal to cultivate more blockchain developers, to thrive the whole community, and we start this mission from Taiwan.',
            photos: [],
            location: 'Singapore',
            time: '4/17-18',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
        ],
      },
      {
        title: 'Event',
        icon: './images/roadmap/event.svg',
        flags: [
          {
            title: 'Portal.Network Hackathon',
            content: 'Co-hosted hackathon with Bluzelle at Canada Vancouver',
            photos: [],
            location: 'Canada',
            time: '4/29.30',
            progress: 0,
            links: [
              {
                title: 'pdf',
                url: 'https://drive.google.com/file/d/1l1GxD0SF5NQKeLqhOCWqQUYHPRAoBfHn/view',
              },
              {
                title: '活動頁',
                url: 'http://hackathon.portal.network',
              },
            ],
            githubs: [],
            files: [],
            videos: [],
          },

          {
            title: 'Mr.Block X Malaysia - 跨國際區塊鏈分享會',
            content: 'Portal Network pitch - Phyrex',
            photos: [],
            location: 'Malaysia',
            time: '4/29',
            progress: 0,
            links: [
              {
                title: '',
                url: 'https://drive.google.com/file/d/1IjiDTu8vXqWUjbjICllfz_Lf-97Vgiwq/view',
              },
            ],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1877831622235293/',
              }
            ],
          },       
          {
            title: 'Blockchain Universe',
            content: 'Co-hosted Blockchain Universe Event with Mr. Block',
            photos: [],
            location: 'Taiwan',
            time: '4/27',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1875961702422285/',
              }
            ],
          },
          {
            title: 'Beyond Block Tokyo Summit',
            content: 'Beyond Block Livestream Media Partner',
            photos: [],
            location: 'Tokyo, Japan',
            time: '4/3-5',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: 'video 1',
                url: 'https://www.facebook.com/mrblock.tw/videos/1851330701552052/',
              },
              {
                title: 'video 2',
                url: 'https://www.facebook.com/mrblock.tw/videos/1851646398187149/',
              },
              {
                title: 'video 3',
                url: 'https://www.facebook.com/mrblock.tw/videos/1852404714777984/',
              },
              {
                title: 'video 4',
                url: 'https://www.facebook.com/mrblock.tw/videos/1852659514752504/',
              },
            ],
          },
          {
            title: 'Deconomy',
            content: 'Media Team Sponsor',
            photos: [],
            location: 'Seoul, South Korea',
            time: '4/2-4',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Cafe & Crypto',
            content: 'Portal Network pitch - Phyrex Tsai, Founder of Portal Network',
            photos: [],
            location: 'Taipei, Taiwan',
            time: '3/30',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1846505082034614/',
              }
            ],
          },    
          {
            title: 'Token2049',
            content: 'Media Team Sponsor',
            photos: [],
            location: 'HongKong',
            time: '3/20-21',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.youtube.com/watch?v=AmNQa7JvwB0&list=PLh7yM-DPEDYjtXO1EkwMerV2EJ8Bcbe4F',
              }
            ],
          },
          {
            title: 'Money 20/20 Asia',
            content: 'Media Team Sponsor',
            photos: [],
            location: 'Singapore',
            time: '3/12-14',
            progress: 0,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.youtube.com/watch?v=Ubd09OoVP0M&list=PLh7yM-DPEDYisiTsCAWhDFN_0TgXasg39',
              }
            ],
          },
          {
            title: 'Blockshow Cointelegraph x Mr.Block',
            content: 'Portal Network pitch - Vincent Tu, Co-founder of Portal Network',
            photos: [],
            location: 'Taipei, Taiwan',
            time: '3/9',
            progress: 0,
            links: [
              {
                title: '',
                url: 'https://www.accupass.com/event/1802251255491941418397',
              }
            ],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1822744367744019/',
              }
            ],
          },
          {
            title: 'eToro X Mr. Block',
            content: 'NEO development experience as a Python Developer Johnny Hsieh, Co-founder of Portal Network, Python Developer',
            photos: [],
            location: 'Taipei',
            time: '2/24',
            progress: 0,
            links: [
              {
                title: '',
                url: 'https://www.accupass.com/event/1802080453545695696800',
              },
            ],
            githubs: [],
            files: [],
            videos: [
              {
                title: 'video 1',
                url: 'https://www.facebook.com/mrblock.tw/videos/1807825282569261/',
              },
              {
                title: 'video 2',
                url: 'https://www.facebook.com/mrblock.tw/videos/1808005792551210/',
              },
            ],
          },
        ],
      },
      {
        title: 'Documentation',
        icon: './images/roadmap/documentation.svg',
        flags: [
          {
            title: 'Propose multihash functions to support ECNS Public Resolver smart contract',
            content: 'Propose multihash functions to support ECNS Public Resolver smart contract Implementation of ECIP - 1044',
            photos: [],
            location: '',
            time: '5/12',
            progress: 0,
            links: [],
            githubs: [
              {
                title: '',
                url: 'https://github.com/EthereumCommonwealth/ECNS/pull/3',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Ethereum Classic Improvement Proposal, ECIP-1044',
            content: '1. Create an ECIP to “Formalize IPFS hash into ECNS resolver”<br>2. Propose functions to convert between IPFS and Ethereum Classic',
            photos: [],
            location: '',
            time: '5/12',
            progress: 0,
            links: [],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ethereumproject/ECIPs/pull/94',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'ENS public resolver smart contract contribution',
            content: 'Propose multihash functions to support ENS Public Resolver smart contract Implementation of EIP - 1062',
            photos: [],
            location: '',
            time: '5/10',
            progress: 0,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org/',
              }
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ensdomains/ens/pull/279',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Ethereum Improvement Proposal, EIP-1062',
            content: '1. Create an EIP to “Formalize IPFS hash into ENS resolver”<br>2. Propose functions to convert between IPFS and Ethereum',
            photos: [],
            location: '',
            time: '5/7',
            progress: 0,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org',
              }
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ethereum/EIPs/pull/1062',
              }
            ],
            files: [],
            videos: [],
          },
        ],
      },
      {
        title: 'Application',
        icon: './images/roadmap/documentation.svg',
        flags: [
          {
            title: '[product] Portal Network Marketplace',
            content: '1. User registration improvement Refactoring the usability Refactoring and Integration with ethereum UI/UX design enhancement Constructing the backend architecture Security Enhancement<br>2. Constructing user profile dashboard',
            photos: [],
            location: '',
            time: '4/16',
            progress: 0,
            links: [
              {
                title: '',
                url: ' https://beta.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
        ],
      },
    ],
  },
  watch:{
    isOpenPop: function() {
      this.$nextTick(()=>{
        this.swiper.update();
      });
    }
  },
  computed: {
    photosInModal: function() {
      return this.nowPhotos;
    },
  },
  methods: {
    openContentFn: function (idx) {
      this.mapData[idx].open = !this.mapData[idx].open;
    },
    openModal: function(photoArr) {
      this.isOpenPop = true;
      this.nowPhotos = photoArr;
    },
    closeModal: function() {
      this.isOpenPop = false;
      this.nowPhotos = [];
    },
    scrollToChapter: function(idx) {
      const chapters = document.querySelectorAll('.chapter');
      const targetChapter = chapters[idx];
      const elementTop = GetOffset(targetChapter);
      window.animateScrollTo(elementTop.top - 100);
    },
  },
  mounted: function() {
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
})