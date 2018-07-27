(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

new Vue({
  el: "#newRoadmap",
  data: {
    swiper: null,
    isOpenPop: false,
    nowPhotos: [],
    selectidx: 0,
    selectState: ["all", "documentation", "application", "education", "event"],
    roadmapData: [{
      tag: ['all', 'documentation'],
      chapterName: "Documentation",
      flags: [{
        title: 'Propose a pull request for MetaMask to integration ENS with IPFS',
        content: 'MetaMask browser extension is great project helps users to interact with Ethereum, and furthermore can be more powerful by add content resolve by ENS, so Portal Network build a way to resolves ENS domains (.eth) to IPFS hash and redirects to url content.',
        photos: [],
        location: '',
        time: '5/29',
        progress: 100,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/MetaMask/metamask-extension/pull/4405'
        }],
        files: [],
        videos: []
      }, {
        title: 'Propose multihash functions to support ECNS Public Resolver smart contract',
        content: 'Propose multihash functions to support ECNS Public Resolver smart contract Implementation of ECIP - 1044',
        photos: [],
        location: '',
        time: '5/12',
        progress: 100,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/EthereumCommonwealth/ECNS/pull/3'
        }],
        files: [],
        videos: []
      }, {
        title: 'Ethereum Classic Improvement Proposal, ECIP-1044',
        content: '1. Create an ECIP to “Formalize IPFS hash into ECNS resolver”<br>2. Propose functions to convert between IPFS and Ethereum Classic',
        photos: [],
        location: '',
        time: '5/12',
        progress: 100,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/ethereumproject/ECIPs/pull/94'
        }],
        files: [],
        videos: []
      }, {
        title: 'ENS public resolver smart contract contribution',
        content: 'Propose multihash functions to support ENS Public Resolver smart contract Implementation of EIP - 1062',
        photos: [],
        location: '',
        time: '5/10',
        progress: 100,
        links: [{
          title: '',
          url: 'https://eips.ethereum.org/'
        }],
        githubs: [{
          title: '',
          url: 'https://github.com/ensdomains/ens/pull/279'
        }],
        files: [],
        videos: []
      }, {
        title: 'Ethereum Improvement Proposal, EIP-1062',
        content: '1. Create an EIP to “Formalize IPFS hash into ENS resolver”<br>2. Propose functions to convert between IPFS and Ethereum',
        photos: [],
        location: '',
        time: '5/7',
        progress: 100,
        links: [{
          title: '',
          url: 'https://eips.ethereum.org'
        }],
        githubs: [{
          title: '',
          url: 'https://github.com/ethereum/EIPs/pull/1062'
        }],
        files: [],
        videos: []
      }]
    }, {
      tag: ['all', 'application'],
      chapterName: "Application",
      flags: [{
        title: 'Portal Network Marketplace',
        content: 'In addition to ENS, ECNS, Portal Network now supports WNS as well.',
        photos: [],
        location: '',
        time: '7/12',
        progress: 60,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Decentralized Webuilder',
        content: '1. “blog” function added<br>2. Gnosis & DappCon template implemented',
        photos: [],
        location: '',
        time: '7/12',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Marketplace',
        content: '1. Support domain bidding',
        photos: [],
        location: '',
        time: '6/22',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portalnetwork intergration with Wanchain',
        content: '1. Deploy wanchain public resolver <a href="https://explorer.wanchain.org/block/addr/0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014" target="_blank" class="link_text">0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014</span>',
        photos: [],
        location: '',
        time: '6/20',
        progress: 100,
        links: [{
          title: '',
          url: 'https://explorer.wanchain.org/block/addr/0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Marketplace',
        content: '1. Support wanchain domain name searching',
        photos: [],
        location: '',
        time: '6/13',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portalnetwork intergration with Wanchain',
        content: '1. Deploy wanchain infura <a href="http://wanchain.portal.network/" target="_blank" class="link_text">wanchain.portal.network</a>',
        photos: [],
        location: '',
        time: '6/12',
        progress: 100,
        links: [{
          title: '',
          url: 'http://wanchain.portal.network/'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Decetentralized Web Builder',
        content: '1. User registration flow.<br>2. Personal profile builder.<br>3. Decentralized website deploy history.',
        photos: [],
        location: '',
        time: '5/30',
        progress: 100,
        links: [{
          title: '',
          url: ' https://web.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Marketplace',
        content: 'Design an user dashboard for user settings, domain manager, domain purchase history',
        photos: [],
        location: '',
        time: '5/30',
        progress: 100,
        links: [{
          title: '',
          url: ' https://beta.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Protal Network Chrome Extension Enhancement',
        content: '1. Support .eth and .etc domains, .wan is under development<br>2. Use multihash function to convert ENS, ECNS, WNS Public Resolver data<br/>3. Let users can directly visit decentralized website',
        photos: [],
        location: '',
        time: '5/12',
        progress: 100,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/PortalNetwork/portal-network-browser-extension'
        }],
        files: [],
        videos: []
      }, {
        title: 'Metamask Enhancement',
        content: 'Enhancement MetaMask to integrate with ENS resolver to redirect to decentralize web',
        photos: [],
        location: '',
        time: '5/9',
        progress: 100,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/PortalNetwork/metamask-extension'
        }],
        files: [],
        videos: []
      }, {
        title: 'Deep learning model',
        content: '1. Enhance trading matching rate <br>2. We collect over 1m top value domains from centralize domains and all the Ethereum domains. With deep learning we are able to make AI systems which can predict the domains value. We have two kinds of systems, one is to find high value domains , the other is to predict the possible price of the domains.',
        photos: [],
        location: '',
        time: '5/2',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'WHOIS',
        content: '1. Paring and cleaning all the domains on Ethereum.<br>2. Begin to build up Ethereum Classic WHOIS system and collect datas on it.',
        photos: [],
        location: '',
        time: '5/2',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Online Decentralized Website Builder',
        content: '1. Personal profile builder<br>2. Customized website deployment<br>3. Backend contrucstion',
        photos: [],
        location: '',
        time: '4/19',
        progress: 100,
        links: [{
          title: '',
          url: ' http://h1.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Portal Network Marketplace',
        content: '1. User registration improvement Refactoring the usability Refactoring and Integration with ethereum UI/UX design enhancement Constructing the backend architecture Security Enhancement<br>2. Constructing user profile dashboard',
        photos: [],
        location: '',
        time: '4/16',
        progress: 100,
        links: [{
          title: '',
          url: ' https://beta.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }]
    }, {
      tag: ['all', 'education'],
      chapterName: "Education",
      flags: [{
        title: 'IT Seed',
        content: 'Portal Network and Mr. Block team were very honored to get invited by New Taipei City Computer Associate to speak at IT Seed x Technology training program. IT Seed is an education community that let graduating students learn various trends around the world, so they can be well prepared for their career path in the future. Basic concept of Blockchain & Application of Blockchain & Future development of Blockchain',
        photos: ['event/ITSeed/IMG_0939.jpg', 'event/ITSeed/IMG_0941.jpg', 'event/ITSeed/IMG_0943.jpg', 'event/ITSeed/IMG_0944.jpg', 'event/ITSeed/IMG_0945.jpg', 'event/ITSeed/IMG_0946.jpg', 'event/ITSeed/IMG_0948.jpg', 'event/ITSeed/IMG_0949.jpg', 'event/ITSeed/IMG_0950.jpg', 'event/ITSeed/IMG_0951.jpg', 'event/ITSeed/IMG_0954.jpg', 'event/ITSeed/IMG_0958.jpg', 'event/ITSeed/IMG_0961.jpg', 'event/ITSeed/IMG_0965.jpg', 'event/ITSeed/IMG_0967.jpg', 'event/ITSeed/IMG_0969.jpg', 'event/ITSeed/IMG_0971.jpg', 'event/ITSeed/IMG_0974.jpg', 'event/ITSeed/IMG_0980.jpg', 'event/ITSeed/IMG_0983.jpg'],
        location: 'Taipei, Taiwan',
        time: '5/19',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Education Platform',
        content: 'Our co-founder, Christopher Shen, was presenting at the "Young Entrepreneur" Panel during the event. Assist university students to join the international SUSS events, to not only bring the blockchain trends to Taiwan, but also educate more students to have the ability to develop blockchain technology. It’s our goal to cultivate more blockchain developers, to thrive the whole community, and we start this mission from Taiwan.',
        photos: ['education/1.jpg', 'education/2.jpg', 'education/3.jpg', 'education/4.jpg', 'education/5.jpg', 'education/6.jpg', 'education/7.jpg', 'education/8.jpg', 'education/9.jpg', 'education/10.jpg', 'education/11.jpg', 'education/12.jpg', 'education/13.jpg'],
        location: 'Singapore',
        time: '4/17-18',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }]
    }, {
      tag: ['all', 'event'],
      chapterName: "Event",
      flags: [{
        title: 'World Blockchain Conference',
        content: 'Vincent Tu, Co-founder of Portal Network',
        photos: ['event/event37.jpg'],
        location: 'Singapore',
        time: '7/17 - 18',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Wanchain Roadshow Aisa speech',
        content: 'Andy, Community lead of Portal Network',
        photos: [],
        location: 'Seoul, Korea Wanchain Roadshow',
        time: '7/14',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Hosted Hackathon with teamw.e and SOPT',
        content: '',
        photos: ['event/kr_Hackathon/DSC03295.jpg', 'event/kr_Hackathon/DSC03265.jpg', 'event/kr_Hackathon/DSC03266.jpg', 'event/kr_Hackathon/DSC03275.jpg', 'event/kr_Hackathon/DSC03279.jpg', 'event/kr_Hackathon/DSC03281.jpg', 'event/kr_Hackathon/DSC03283.jpg', 'event/kr_Hackathon/DSC03294.jpg', 'event/kr_Hackathon/DSC03303.jpg', 'event/kr_Hackathon/DSC03307.jpg', 'event/kr_Hackathon/DSC03308.jpg', 'event/kr_Hackathon/DSC03314.jpg', 'event/kr_Hackathon/DSC03329.jpg', 'event/kr_Hackathon/DSC03333.jpg', 'event/kr_Hackathon/DSC03339.jpg', 'event/kr_Hackathon/DSC03340.jpg', 'event/kr_Hackathon/DSC03397.jpg', 'event/kr_Hackathon/DSC03400.jpg', 'event/kr_Hackathon/DSC03418.jpg', 'event/kr_Hackathon/DSC03424.jpg', 'event/kr_Hackathon/DSC03425.jpg', 'event/kr_Hackathon/DSC03427.jpg'],
        location: 'Seoul, Korea',
        time: '7/14 - 15',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'RISE, "The largest tech conference in Asia"',
        content: 'Vincent Tu,  Co-founder of Portal Network',
        photos: ['event/event35.png'],
        location: 'Hong Kong',
        time: '7/8 - 11',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Wanchain Roadshow Aisa speech',
        content: 'Christopher, founder of Portal Network',
        photos: ['event/event34.jpg'],
        location: 'Kuala Lumpur, Malysia',
        time: '7/7',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Wanchain Roadshow Aisa speech',
        content: 'Christopher, founder of Portal Network',
        photos: ['event/event33.jpg'],
        location: 'Jakarta, Indonesia',
        time: '7/5',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Blockchain Festival: Vietnam ',
        content: 'Blockchain Festival is hosted by Huobi.pro and co-hosted by Kyber Network',
        photos: ['event/Vietnam/1.jpg', 'event/Vietnam/2.jpg', 'event/Vietnam/3.jpg', 'event/Vietnam/4.jpg', 'event/Vietnam/5.jpg', 'event/Vietnam/6.jpg', 'event/Vietnam/7.jpg', 'event/Vietnam/8.jpg', 'event/Vietnam/9.jpg', 'event/Vietnam/10.jpg', 'event/Vietnam/11.jpg', 'event/Vietnam/12.jpg', 'event/Vietnam/13.jpg', 'event/Vietnam/14.jpg', 'event/Vietnam/15.jpg', 'event/Vietnam/16.jpg', 'event/Vietnam/17.jpg', 'event/Vietnam/18.jpg', 'event/Vietnam/19.jpg', 'event/Vietnam/20.jpg', 'event/Vietnam/21.jpg', 'event/Vietnam/1012.png', 'event/Vietnam/1416.png', 'event/Vietnam/1435.png', 'event/Vietnam/1458.png', 'event/Vietnam/1548.png', 'event/Vietnam/1613.png', 'event/Vietnam/1705.png', 'event/Vietnam/1738.png', 'event/Vietnam/1820.png', 'event/Vietnam/1914.png', 'event/Vietnam/1942.png', 'event/Vietnam/2029.png', 'event/Vietnam/2108.png'],
        location: 'Ho Chi Minh, Vietnam',
        time: '5/24 - 25',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.youtube.com/watch?v=8wzfvF5Vt-M&list=PLh7yM-DPEDYhEMpj3vHbBaeSobFDLTqrS'
        }]
      }, {
        title: 'BBS - Korea meet-up ',
        content: 'Portal Network and Mr. Block team were very honored to get invited by New Taipei City Computer Associate to speak at IT Seed x Technology training program. IT Seed is an education community that let graduating students learn various trends around the world, so they can be well prepared for their career path in the future.',
        photos: ['event/BBS/0860.jpg', 'event/BBS/0864.jpg', 'event/BBS/0897.jpg', 'event/BBS/0900.jpg', 'event/BBS/0907.jpg', 'event/BBS/0910.jpg', 'event/BBS/0911.jpg', 'event/BBS/0912.jpg', 'event/BBS/0914.jpg', 'event/BBS/0915.jpg', 'event/BBS/0917.jpg', 'event/BBS/0923.jpg'],
        location: 'Seoul, Korea',
        time: '5/10 - 12',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Bluzelle x Portal.Network Hackathon',
        content: 'Co-hosted hackathon with Bluzelle at Canada Vancouver',
        photos: [],
        location: 'Canada',
        time: '4/29.30',
        progress: 100,
        links: [{
          title: '',
          url: 'http://h1.portal.network'
        }],
        githubs: [],
        files: [{
          title: '',
          url: 'https://drive.google.com/file/d/1l1GxD0SF5NQKeLqhOCWqQUYHPRAoBfHn/view'
        }],
        videos: []
      }, {
        title: 'Mr.Block X Malaysia',
        content: 'Portal Network pitch - Phyrex',
        photos: [],
        location: 'Malaysia',
        time: '4/29',
        progress: 100,
        links: [],
        githubs: [],
        files: [{
          title: '',
          url: 'https://drive.google.com/file/d/1IjiDTu8vXqWUjbjICllfz_Lf-97Vgiwq/view'
        }],
        videos: [{
          title: '',
          url: 'https://www.facebook.com/mrblock.tw/videos/1877831622235293/'
        }]
      }, {
        title: 'Blockchain Universe',
        content: 'Co-hosted Blockchain Universe Event with Mr. Block',
        photos: ['event/event1.jpg', 'event/event2.jpg', 'event/event3.jpg', 'event/event4.jpg', 'event/event5.jpg', 'event/event6.jpg', 'event/event7.jpg', 'event/event8.jpg', 'event/event9.jpg', 'event/event10.jpg', 'event/event11.jpg', 'event/event12.jpg', 'event/event13.jpg', 'event/event14.jpg', 'event/event15.jpg', 'event/event16.jpg', 'event/event17.jpg', 'event/event18.jpg', 'event/event19.jpg', 'event/event20.jpg', 'event/event21.jpg', 'event/event22.jpg', 'event/event23.jpg', 'event/event24.jpg', 'event/event25.jpg', 'event/event26.jpg', 'event/event27.jpg', 'event/event28.jpg', 'event/event29.jpg', 'event/event30.jpg', 'event/event31.jpg', 'event/event32.jpg'],
        location: 'Taiwan',
        time: '4/27',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.facebook.com/mrblock.tw/videos/1875961702422285/'
        }]
      }, {
        title: 'Beyond Block Tokyo Summit',
        content: 'Beyond Block Livestream Media Partner',
        photos: [],
        location: 'Tokyo, Japan',
        time: '4/3-5',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: 'video 1',
          url: 'https://www.facebook.com/mrblock.tw/videos/1851330701552052/'
        }, {
          title: 'video 2',
          url: 'https://www.facebook.com/mrblock.tw/videos/1851646398187149/'
        }, {
          title: 'video 3',
          url: 'https://www.facebook.com/mrblock.tw/videos/1852404714777984/'
        }, {
          title: 'video 4',
          url: 'https://www.facebook.com/mrblock.tw/videos/1852659514752504/'
        }]
      }, {
        title: 'Deconomy',
        content: 'Media Team Sponsor',
        photos: [],
        location: 'Seoul, South Korea',
        time: '4/2-4',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Cafe & Crypto',
        content: 'Portal Network pitch - Phyrex Tsai, Founder of Portal Network',
        photos: [],
        location: 'Taipei, Taiwan',
        time: '3/30',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.facebook.com/mrblock.tw/videos/1846505082034614/'
        }]
      }, {
        title: 'Token2049',
        content: 'Media Team Sponsor',
        photos: [],
        location: 'HongKong',
        time: '3/20-21',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.youtube.com/watch?v=AmNQa7JvwB0&list=PLh7yM-DPEDYjtXO1EkwMerV2EJ8Bcbe4F'
        }]
      }, {
        title: 'Money 20/20 Asia',
        content: 'Media Team Sponsor',
        photos: [],
        location: 'Singapore',
        time: '3/12-14',
        progress: 100,
        links: [],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.youtube.com/watch?v=Ubd09OoVP0M&list=PLh7yM-DPEDYisiTsCAWhDFN_0TgXasg39'
        }]
      }, {
        title: 'Blockshow Cointelegraph x Mr.Block',
        content: 'Portal Network pitch - Vincent Tu, Co-founder of Portal Network',
        photos: [],
        location: 'Taipei, Taiwan',
        time: '3/9',
        progress: 100,
        links: [{
          title: '',
          url: 'https://www.accupass.com/event/1802251255491941418397'
        }],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.facebook.com/mrblock.tw/videos/1822744367744019/'
        }]
      }, {
        title: 'eToro X Mr. Block',
        content: 'NEO development experience as a Python Developer Johnny Hsieh, Co-founder of Portal Network, Python Developer',
        photos: [],
        location: 'Taipei',
        time: '2/24',
        progress: 100,
        links: [{
          title: '',
          url: 'https://www.accupass.com/event/1802080453545695696800'
        }],
        githubs: [],
        files: [],
        videos: [{
          title: 'video 1',
          url: 'https://www.facebook.com/mrblock.tw/videos/1807825282569261/'
        }, {
          title: 'video 2',
          url: 'https://www.facebook.com/mrblock.tw/videos/1808005792551210/'
        }]
      }]
    }],
    newData: [{
      time: 'Jul 06, 2018',
      title: 'What is ENS & What problem it solved ?',
      url: './blogs/what-is-ens-What-problem-it-solved.html'
    }, {
      time: 'Jun 29, 2018',
      title: 'Portal Network Hackathon Korea 2018 — Protal Network Announcement.',
      url: './blogs/announcement.html'
    }, {
      time: 'Jun 29, 2018',
      title: 'Portal Network in Wanchain Asia Tour 2018 Indonesia / Malaysia / South Korea.',
      url: './blogs/wanchain.html'
    }, {
      time: 'Jun 21, 2018',
      title: 'How to use MetaMask Extension ?',
      url: './blogs/metaMask.html'
    }, {
      time: 'May 25, 2018',
      title: 'Key Findings of Our Data Analysis of ENS.',
      url: './blogs/key-findings.html'
    }, {
      time: 'May 23, 2018',
      title: 'Decentralized Database Hackathon Takeaways : Bluzelle X Portal Network.',
      url: './blogs/decentralized.html'
    }]
  },
  watch: {
    isOpenPop: function isOpenPop() {
      var _this = this;

      this.$nextTick(function () {
        _this.swiper.update();
      });
    }
  },
  computed: {
    filterItem: function filterItem() {
      var selected = this.selectState[this.selectidx];
      return this.roadmapData.filter(function (item) {
        return item.tag.indexOf(selected) !== -1;
      });
    },

    photosInModal: function photosInModal() {
      return this.nowPhotos;
    }
  },
  methods: {
    handActive: function handActive(idx) {
      this.selectidx = idx;
    },
    filterTag: function filterTag() {
      var selected = this.selectState[this.selectidx];
      this.roadmapData.filter(function (item) {
        debugger;
        return item.tag.indexOf(selected) !== -1;
      });
    },

    openContentFn: function openContentFn(idx) {
      this.mapData[idx].open = !this.mapData[idx].open;
    },
    openModal: function openModal(photoArr) {
      this.isOpenPop = true;
      this.nowPhotos = photoArr;
    },
    closeModal: function closeModal() {
      this.isOpenPop = false;
      this.nowPhotos = [];
    }
  },
  mounted: function mounted() {
    this.swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvbmV3cm9hZG1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLGFBREU7QUFFTixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosZUFBVyxDQUpQO0FBS0osaUJBQWEsQ0FBQyxLQUFELEVBQU8sZUFBUCxFQUF3QixhQUF4QixFQUF1QyxXQUF2QyxFQUFvRCxPQUFwRCxDQUxUO0FBTUosaUJBQWEsQ0FDWDtBQUNFLFdBQUssQ0FBQyxLQUFELEVBQU8sZUFBUCxDQURQO0FBRUUsbUJBQWEsZUFGZjtBQUdFLGFBQU8sQ0FDTDtBQUNFLGVBQU8sa0VBRFQ7QUFFRSxpQkFBUyxnUUFGWDtBQUdFLGdCQUFRLEVBSFY7QUFJRSxrQkFBVSxFQUpaO0FBS0UsY0FBTSxNQUxSO0FBTUUsa0JBQVUsR0FOWjtBQU9FLGVBQU8sRUFQVDtBQVFFLGlCQUFTLENBQ1A7QUFDRSxpQkFBTyxFQURUO0FBRUUsZUFBSztBQUZQLFNBRE8sQ0FSWDtBQWNFLGVBQU8sRUFkVDtBQWVFLGdCQUFRO0FBZlYsT0FESyxFQWtCTDtBQUNFLGVBQU8sNEVBRFQ7QUFFRSxpQkFBUywwR0FGWDtBQUdFLGdCQUFRLEVBSFY7QUFJRSxrQkFBVSxFQUpaO0FBS0UsY0FBTSxNQUxSO0FBTUUsa0JBQVUsR0FOWjtBQU9FLGVBQU8sRUFQVDtBQVFFLGlCQUFTLENBQ1A7QUFDRSxpQkFBTyxFQURUO0FBRUUsZUFBSztBQUZQLFNBRE8sQ0FSWDtBQWNFLGVBQU8sRUFkVDtBQWVFLGdCQUFRO0FBZlYsT0FsQkssRUFtQ0w7QUFDRSxlQUFPLGtEQURUO0FBRUUsaUJBQVMsb0lBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFP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T0FEZ0M7QUFLNUMsa0JBQVk7QUFDVixnQkFBUSxxQkFERTtBQUVWLGdCQUFRO0FBRkU7QUFMZ0MsS0FBaEMsQ0FBZDtBQVVEO0FBcjJCSyxDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5uZXcgVnVlKHtcbiAgZWw6IFwiI25ld1JvYWRtYXBcIixcbiAgZGF0YToge1xuICAgIHN3aXBlcjogbnVsbCxcbiAgICBpc09wZW5Qb3A6IGZhbHNlLFxuICAgIG5vd1Bob3RvczogW10sXG4gICAgc2VsZWN0aWR4OiAwLFxuICAgIHNlbGVjdFN0YXRlOiBbXCJhbGxcIixcImRvY3VtZW50YXRpb25cIiwgXCJhcHBsaWNhdGlvblwiLCBcImVkdWNhdGlvblwiLCBcImV2ZW50XCJdLFxuICAgIHJvYWRtYXBEYXRhOiBbXG4gICAgICB7XG4gICAgICAgIHRhZzogWydhbGwnLCdkb2N1bWVudGF0aW9uJ10sXG4gICAgICAgIGNoYXB0ZXJOYW1lOiBcIkRvY3VtZW50YXRpb25cIixcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb3Bvc2UgYSBwdWxsIHJlcXVlc3QgZm9yIE1ldGFNYXNrIHRvIGludGVncmF0aW9uIEVOUyB3aXRoIElQRlMnLFxuICAgICAgICAgICAgY29udGVudDogJ01ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIGlzIGdyZWF0IHByb2plY3QgaGVscHMgdXNlcnMgdG8gaW50ZXJhY3Qgd2l0aCBFdGhlcmV1bSwgYW5kIGZ1cnRoZXJtb3JlIGNhbiBiZSBtb3JlIHBvd2VyZnVsIGJ5IGFkZCBjb250ZW50IHJlc29sdmUgYnkgRU5TLCBzbyBQb3J0YWwgTmV0d29yayBidWlsZCBhIHdheSB0byByZXNvbHZlcyBFTlMgZG9tYWlucyAoLmV0aCkgdG8gSVBGUyBoYXNoIGFuZCByZWRpcmVjdHMgdG8gdXJsIGNvbnRlbnQuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NZXRhTWFzay9tZXRhbWFzay1leHRlbnNpb24vcHVsbC80NDA1JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVDTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFQ0lQIC0gMTA0NCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vRXRoZXJldW1Db21tb253ZWFsdGgvRUNOUy9wdWxsLzMnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gQ2xhc3NpYyBJbXByb3ZlbWVudCBQcm9wb3NhbCwgRUNJUC0xMDQ0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUNJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRUNOUyByZXNvbHZlcuKAnTxicj4yLiBQcm9wb3NlIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGJldHdlZW4gSVBGUyBhbmQgRXRoZXJldW0gQ2xhc3NpYycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW1wcm9qZWN0L0VDSVBzL3B1bGwvOTQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRU5TIHB1YmxpYyByZXNvbHZlciBzbWFydCBjb250cmFjdCBjb250cmlidXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUlQIC0gMTA2MicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMTAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbnNkb21haW5zL2Vucy9wdWxsLzI3OScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBJbXByb3ZlbWVudCBQcm9wb3NhbCwgRUlQLTEwNjInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVOUyByZXNvbHZlcuKAnTxicj4yLiBQcm9wb3NlIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGJldHdlZW4gSVBGUyBhbmQgRXRoZXJldW0nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtL0VJUHMvcHVsbC8xMDYyJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdGFnOiBbJ2FsbCcsJ2FwcGxpY2F0aW9uJ10sXG4gICAgICAgIGNoYXB0ZXJOYW1lOiBcIkFwcGxpY2F0aW9uXCIsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnSW4gYWRkaXRpb24gdG8gRU5TLCBFQ05TLCBQb3J0YWwgTmV0d29yayBub3cgc3VwcG9ydHMgV05TIGFzIHdlbGwuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNy8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNjAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2VudHJhbGl6ZWQgV2VidWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiDigJxibG9n4oCdIGZ1bmN0aW9uIGFkZGVkPGJyPjIuIEdub3NpcyAmIERhcHBDb24gdGVtcGxhdGUgaW1wbGVtZW50ZWQnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IGRvbWFpbiBiaWRkaW5nJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8yMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gcHVibGljIHJlc29sdmVyIDxhIGhyZWY9XCJodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+MHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0PC9zcGFuPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9leHBsb3Jlci53YW5jaGFpbi5vcmcvYmxvY2svYWRkci8weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCB3YW5jaGFpbiBkb21haW4gbmFtZSBzZWFyY2hpbmcnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzEzJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbG5ldHdvcmsgaW50ZXJncmF0aW9uIHdpdGggV2FuY2hhaW4nLFxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBpbmZ1cmEgPGEgaHJlZj1cImh0dHA6Ly93YW5jaGFpbi5wb3J0YWwubmV0d29yay9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImxpbmtfdGV4dFwiPndhbmNoYWluLnBvcnRhbC5uZXR3b3JrPC9hPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2V0ZW50cmFsaXplZCBXZWIgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gZmxvdy48YnI+Mi4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyLjxicj4zLiBEZWNlbnRyYWxpemVkIHdlYnNpdGUgZGVwbG95IGhpc3RvcnkuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly93ZWIucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnRGVzaWduIGFuIHVzZXIgZGFzaGJvYXJkIGZvciB1c2VyIHNldHRpbmdzLCBkb21haW4gbWFuYWdlciwgZG9tYWluIHB1cmNoYXNlIGhpc3RvcnknLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2JldGEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm90YWwgTmV0d29yayBDaHJvbWUgRXh0ZW5zaW9uIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TLCBFQ05TLCBXTlMgUHVibGljIFJlc29sdmVyIGRhdGE8YnIvPjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvcG9ydGFsLW5ldHdvcmstYnJvd3Nlci1leHRlbnNpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNZXRhbWFzayBFbmhhbmNlbWVudCcsXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlZXAgbGVhcm5pbmcgbW9kZWwnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIEVuaGFuY2UgdHJhZGluZyBtYXRjaGluZyByYXRlIDxicj4yLiBXZSBjb2xsZWN0IG92ZXIgMW0gdG9wIHZhbHVlIGRvbWFpbnMgZnJvbSBjZW50cmFsaXplIGRvbWFpbnMgYW5kIGFsbCB0aGUgRXRoZXJldW0gZG9tYWlucy4gV2l0aCBkZWVwIGxlYXJuaW5nIHdlIGFyZSBhYmxlIHRvIG1ha2UgQUkgc3lzdGVtcyB3aGljaCBjYW4gcHJlZGljdCB0aGUgZG9tYWlucyB2YWx1ZS4gV2UgaGF2ZSB0d28ga2luZHMgb2Ygc3lzdGVtcywgb25lIGlzIHRvIGZpbmQgaGlnaCB2YWx1ZSBkb21haW5zICwgdGhlIG90aGVyIGlzIHRvIHByZWRpY3QgdGhlIHBvc3NpYmxlIHByaWNlIG9mIHRoZSBkb21haW5zLicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dIT0lTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQYXJpbmcgYW5kIGNsZWFuaW5nIGFsbCB0aGUgZG9tYWlucyBvbiBFdGhlcmV1bS48YnI+Mi4gQmVnaW4gdG8gYnVpbGQgdXAgRXRoZXJldW0gQ2xhc3NpYyBXSE9JUyBzeXN0ZW0gYW5kIGNvbGxlY3QgZGF0YXMgb24gaXQuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnT25saW5lIERlY2VudHJhbGl6ZWQgV2Vic2l0ZSBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXI8YnI+Mi4gQ3VzdG9taXplZCB3ZWJzaXRlIGRlcGxveW1lbnQ8YnI+My4gQmFja2VuZCBjb250cnVjc3Rpb24nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHtcbiAgICAgICAgdGFnOiBbJ2FsbCcsJ2VkdWNhdGlvbiddLFxuICAgICAgICBjaGFwdGVyTmFtZTogXCJFZHVjYXRpb25cIixcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0lUIFNlZWQnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuIEJhc2ljIGNvbmNlcHQgb2YgQmxvY2tjaGFpbiAmIEFwcGxpY2F0aW9uIG9mIEJsb2NrY2hhaW4gJiBGdXR1cmUgZGV2ZWxvcG1lbnQgb2YgQmxvY2tjaGFpbicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDkzOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTU0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2OS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTcxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk4MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnNS8xOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24gUGxhdGZvcm0nLFxuICAgICAgICAgICAgY29udGVudDogJ091ciBjby1mb3VuZGVyLCBDaHJpc3RvcGhlciBTaGVuLCB3YXMgcHJlc2VudGluZyBhdCB0aGUgXCJZb3VuZyBFbnRyZXByZW5ldXJcIiBQYW5lbCBkdXJpbmcgdGhlIGV2ZW50LiBBc3Npc3QgdW5pdmVyc2l0eSBzdHVkZW50cyB0byBqb2luIHRoZSBpbnRlcm5hdGlvbmFsIFNVU1MgZXZlbnRzLCB0byBub3Qgb25seSBicmluZyB0aGUgYmxvY2tjaGFpbiB0cmVuZHMgdG8gVGFpd2FuLCBidXQgYWxzbyBlZHVjYXRlIG1vcmUgc3R1ZGVudHMgdG8gaGF2ZSB0aGUgYWJpbGl0eSB0byBkZXZlbG9wIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gSXTigJlzIG91ciBnb2FsIHRvIGN1bHRpdmF0ZSBtb3JlIGJsb2NrY2hhaW4gZGV2ZWxvcGVycywgdG8gdGhyaXZlIHRoZSB3aG9sZSBjb21tdW5pdHksIGFuZCB3ZSBzdGFydCB0aGlzIG1pc3Npb24gZnJvbSBUYWl3YW4uJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEuanBnJywgJ2VkdWNhdGlvbi8yLmpwZycsICdlZHVjYXRpb24vMy5qcGcnLCAnZWR1Y2F0aW9uLzQuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vNS5qcGcnLCAnZWR1Y2F0aW9uLzYuanBnJywgJ2VkdWNhdGlvbi83LmpwZycsICdlZHVjYXRpb24vOC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi85LmpwZycsICdlZHVjYXRpb24vMTAuanBnJywgJ2VkdWNhdGlvbi8xMS5qcGcnLCAnZWR1Y2F0aW9uLzEyLmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0YWc6IFsnYWxsJywnZXZlbnQnXSxcbiAgICAgICAgY2hhcHRlck5hbWU6IFwiRXZlbnRcIixcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dvcmxkIEJsb2NrY2hhaW4gQ29uZmVyZW5jZScsXG4gICAgICAgICAgICBjb250ZW50OiAnVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzcuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnNy8xNyAtIDE4JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dhbmNoYWluIFJvYWRzaG93IEFpc2Egc3BlZWNoJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBbmR5LCBDb21tdW5pdHkgbGVhZCBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgS29yZWEgV2FuY2hhaW4gUm9hZHNob3cnLFxuICAgICAgICAgICAgdGltZTogJzcvMTQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSG9zdGVkIEhhY2thdGhvbiB3aXRoIHRlYW13LmUgYW5kIFNPUFQnLFxuICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzI5NS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjY1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMyNjYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzI3NS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjc5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMyODEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzI4My5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjk0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzMDMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzMwNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzA4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzMTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzMyOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzMzLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzMzkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzM0MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzk3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDM0MDAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzQxOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzNDI0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDM0MjUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzQyNy5qcGcnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzcvMTQgLSAxNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdSSVNFLCBcIlRoZSBsYXJnZXN0IHRlY2ggY29uZmVyZW5jZSBpbiBBc2lhXCInLFxuICAgICAgICAgICAgY29udGVudDogJ1ZpbmNlbnQgVHUsICBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNS5wbmcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG9uZyBLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzggLSAxMScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQ2hyaXN0b3BoZXIsIGZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDM0LmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdLdWFsYSBMdW1wdXIsIE1hbHlzaWEnLFxuICAgICAgICAgICAgdGltZTogJzcvNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQ2hyaXN0b3BoZXIsIGZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDMzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdKYWthcnRhLCBJbmRvbmVzaWEnLFxuICAgICAgICAgICAgdGltZTogJzcvNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIEZlc3RpdmFsOiBWaWV0bmFtICcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmxvY2tjaGFpbiBGZXN0aXZhbCBpcyBob3N0ZWQgYnkgSHVvYmkucHJvIGFuZCBjby1ob3N0ZWQgYnkgS3liZXIgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS81LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS84LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTAxMi5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDE2LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MzUucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQ1OC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNTQ4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE2MTMucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTcwNS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzM4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE4MjAucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTkxNC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTQyLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIwMjkucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjEwOC5wbmcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG8gQ2hpIE1pbmgsIFZpZXRuYW0nLFxuICAgICAgICAgICAgdGltZTogJzUvMjQgLSAyNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTh3emZ2RjVWdC1NJmxpc3Q9UExoN3lNLURQRURZaEVNcGozdkhiQmFlU29iRkRMVHFyUycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JCUyAtIEtvcmVhIG1lZXQtdXAgJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBhbmQgTXIuIEJsb2NrIHRlYW0gd2VyZSB2ZXJ5IGhvbm9yZWQgdG8gZ2V0IGludml0ZWQgYnkgTmV3IFRhaXBlaSBDaXR5IENvbXB1dGVyIEFzc29jaWF0ZSB0byBzcGVhayBhdCBJVCBTZWVkIHggVGVjaG5vbG9neSB0cmFpbmluZyBwcm9ncmFtLiBJVCBTZWVkIGlzIGFuIGVkdWNhdGlvbiBjb21tdW5pdHkgdGhhdCBsZXQgZ3JhZHVhdGluZyBzdHVkZW50cyBsZWFybiB2YXJpb3VzIHRyZW5kcyBhcm91bmQgdGhlIHdvcmxkLCBzbyB0aGV5IGNhbiBiZSB3ZWxsIHByZXBhcmVkIGZvciB0aGVpciBjYXJlZXIgcGF0aCBpbiB0aGUgZnV0dXJlLicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODYwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg2NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4OTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTAwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkwNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTExLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MjMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYScsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMCAtIDEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JsdXplbGxlIHggUG9ydGFsLk5ldHdvcmsgSGFja2F0aG9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDby1ob3N0ZWQgaGFja2F0aG9uIHdpdGggQmx1emVsbGUgYXQgQ2FuYWRhIFZhbmNvdXZlcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdDYW5hZGEnLFxuICAgICAgICAgICAgdGltZTogJzQvMjkuMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2gxLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbDFHeEQwU0Y1TlFLZUxxaE9DV3FRVVlIUFJBb0JmSG4vdmlldycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTXIuQmxvY2sgWCBNYWxheXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXgnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTWFsYXlzaWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMjknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJamlEVHU4dlhxV1VqYmpJQ2xsZnpfTGYtOTdWZ2l3cS92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NzgzMTYyMjIzNTI5My8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gVW5pdmVyc2UnLFxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBCbG9ja2NoYWluIFVuaXZlcnNlIEV2ZW50IHdpdGggTXIuIEJsb2NrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxLmpwZycsICdldmVudC9ldmVudDIuanBnJywgJ2V2ZW50L2V2ZW50My5qcGcnLCAnZXZlbnQvZXZlbnQ0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDUuanBnJywgJ2V2ZW50L2V2ZW50Ni5qcGcnLCAnZXZlbnQvZXZlbnQ3LmpwZycsICdldmVudC9ldmVudDguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50OS5qcGcnLCAnZXZlbnQvZXZlbnQxMC5qcGcnLCAnZXZlbnQvZXZlbnQxMS5qcGcnLCAnZXZlbnQvZXZlbnQxMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxMy5qcGcnLCAnZXZlbnQvZXZlbnQxNC5qcGcnLCAnZXZlbnQvZXZlbnQxNS5qcGcnLCAnZXZlbnQvZXZlbnQxNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxNy5qcGcnLCAnZXZlbnQvZXZlbnQxOC5qcGcnLCAnZXZlbnQvZXZlbnQxOS5qcGcnLCAnZXZlbnQvZXZlbnQyMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyMS5qcGcnLCAnZXZlbnQvZXZlbnQyMi5qcGcnLCAnZXZlbnQvZXZlbnQyMy5qcGcnLCAnZXZlbnQvZXZlbnQyNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyNS5qcGcnLCAnZXZlbnQvZXZlbnQyNi5qcGcnLCAnZXZlbnQvZXZlbnQyNy5qcGcnLCAnZXZlbnQvZXZlbnQyOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyOS5qcGcnLCAnZXZlbnQvZXZlbnQzMC5qcGcnLCAnZXZlbnQvZXZlbnQzMS5qcGcnLCAnZXZlbnQvZXZlbnQzMi5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI3JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc1OTYxNzAyNDIyMjg1LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JleW9uZCBCbG9jayBUb2t5byBTdW1taXQnLFxuICAgICAgICAgICAgY29udGVudDogJ0JleW9uZCBCbG9jayBMaXZlc3RyZWFtIE1lZGlhIFBhcnRuZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVG9reW8sIEphcGFuJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzMtNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTEzMzA3MDE1NTIwNTIvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTE2NDYzOTgxODcxNDkvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI0MDQ3MTQ3Nzc5ODQvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gNCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI2NTk1MTQ3NTI1MDQvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlY29ub215JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIFNvdXRoIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzItNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDYWZlICYgQ3J5cHRvJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCBUc2FpLCBGb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODQ2NTA1MDgyMDM0NjE0LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUb2tlbjIwNDknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIb25nS29uZycsXG4gICAgICAgICAgICB0aW1lOiAnMy8yMC0yMScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUFtTlFhN0p2d0IwJmxpc3Q9UExoN3lNLURQRURZanRYTzFFa3dNZXJWMkVKOEJjYmU0RicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01vbmV5IDIwLzIwIEFzaWEnLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzMvMTItMTQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1VYmQwOU9vVlAwTSZsaXN0PVBMaDd5TS1EUEVEWWlzaVRzQ0FXaERGTl8wVGdYYXNnMzknLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja3Nob3cgQ29pbnRlbGVncmFwaCB4IE1yLkJsb2NrJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFZpbmNlbnQgVHUsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjI1MTI1NTQ5MTk0MTQxODM5NycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODIyNzQ0MzY3NzQ0MDE5LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ2VUb3JvIFggTXIuIEJsb2NrJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdORU8gZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZSBhcyBhIFB5dGhvbiBEZXZlbG9wZXIgSm9obm55IEhzaWVoLCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrLCBQeXRob24gRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaScsXG4gICAgICAgICAgICB0aW1lOiAnMi8yNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjA4MDQ1MzU0NTY5NTY5NjgwMCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDc4MjUyODI1NjkyNjEvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDgwMDU3OTI1NTEyMTAvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuZXdEYXRhOiBbXG4gICAgICB7XG4gICAgICAgIHRpbWU6ICdKdWwgMDYsIDIwMTgnLFxuICAgICAgICB0aXRsZTogJ1doYXQgaXMgRU5TICYgV2hhdCBwcm9ibGVtIGl0IHNvbHZlZCA/JyxcbiAgICAgICAgdXJsOiAnLi9ibG9ncy93aGF0LWlzLWVucy1XaGF0LXByb2JsZW0taXQtc29sdmVkLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVuIDI5LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBIYWNrYXRob24gS29yZWEgMjAxOCDigJQgUHJvdGFsIE5ldHdvcmsgQW5ub3VuY2VtZW50LicsXG4gICAgICAgIHVybDogJy4vYmxvZ3MvYW5ub3VuY2VtZW50Lmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVuIDI5LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBpbiBXYW5jaGFpbiBBc2lhIFRvdXIgMjAxOCBJbmRvbmVzaWEgLyBNYWxheXNpYSAvIFNvdXRoIEtvcmVhLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3Mvd2FuY2hhaW4uaHRtbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpbWU6ICdKdW4gMjEsIDIwMTgnLFxuICAgICAgICB0aXRsZTogJ0hvdyB0byB1c2UgTWV0YU1hc2sgRXh0ZW5zaW9uID8nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL21ldGFNYXNrLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnTWF5IDI1LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdLZXkgRmluZGluZ3Mgb2YgT3VyIERhdGEgQW5hbHlzaXMgb2YgRU5TLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3Mva2V5LWZpbmRpbmdzLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnTWF5IDIzLCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdEZWNlbnRyYWxpemVkIERhdGFiYXNlIEhhY2thdGhvbiBUYWtlYXdheXMgOiBCbHV6ZWxsZSBYIFBvcnRhbCBOZXR3b3JrLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3MvZGVjZW50cmFsaXplZC5odG1sJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgd2F0Y2g6e1xuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xuICAgICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJJdGVtKCl7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFN0YXRlW3RoaXMuc2VsZWN0aWR4XTtcbiAgICAgIHJldHVybiB0aGlzLnJvYWRtYXBEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udGFnLmluZGV4T2Yoc2VsZWN0ZWQpIT09IC0xKTtcbiAgICB9LFxuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kQWN0aXZlKGlkeCkge1xuICAgICAgdGhpcy5zZWxlY3RpZHggPSBpZHg7XG4gICAgfSxcbiAgICBmaWx0ZXJUYWcoKXtcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0U3RhdGVbdGhpcy5zZWxlY3RpZHhdO1xuICAgICAgdGhpcy5yb2FkbWFwRGF0YS5maWx0ZXIoXG4gICAgICAgIChpdGVtKT0+e1xuICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgIHJldHVybiBpdGVtLnRhZy5pbmRleE9mKHNlbGVjdGVkKSE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIG9wZW5Db250ZW50Rm46IGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgIHRoaXMubWFwRGF0YVtpZHhdLm9wZW4gPSAhdGhpcy5tYXBEYXRhW2lkeF0ub3BlbjtcbiAgICB9LFxuICAgIG9wZW5Nb2RhbDogZnVuY3Rpb24ocGhvdG9BcnIpIHtcbiAgICAgIHRoaXMuaXNPcGVuUG9wID0gdHJ1ZTtcbiAgICAgIHRoaXMubm93UGhvdG9zID0gcGhvdG9BcnI7XG4gICAgfSxcbiAgICBjbG9zZU1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaXNPcGVuUG9wID0gZmFsc2U7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IFtdO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgfSxcbiAgICB9KTsgXG4gIH1cbn0pOyJdfQ==
