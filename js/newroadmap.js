(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

new Vue({
  el: "#newRoadmap",
  data: {
    swiper: null,
    isMenuOpen: false,
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
      time: 'Jul 23, 2018',
      title: 'Portal Network at NIFTY Hackathon & Conference — Hong Kong',
      url: './blogs/nifty.html'
    }, {
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
    toggleMenuFn: function toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvbmV3cm9hZG1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLGFBREU7QUFFTixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZ0JBQVksS0FGUjtBQUdKLGVBQVcsS0FIUDtBQUlKLGVBQVcsRUFKUDtBQUtKLGVBQVcsQ0FMUDtBQU1KLGlCQUFhLENBQUMsS0FBRCxFQUFPLGVBQVAsRUFBd0IsYUFBeEIsRUFBdUMsV0FBdkMsRUFBb0QsT0FBcEQsQ0FOVDtBQU9KLGlCQUFhLENBQ1g7QUFDRSxXQUFLLENBQUMsS0FBRCxFQUFPLGVBQVAsQ0FEUDtBQUVFLG1CQUFhLGVBRmY7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLGtFQURUO0FBRUUsaUJBQVMsZ1FBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGVBQUs7QUFGUCxTQURPLENBUlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BREssRUFrQkw7QUFDRSxlQUFPLDRFQURUO0FBRUUsaUJBQVMsMEdBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGVBQUs7QUFGUCxTQURPLENBUlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BbEJLLEVBbUNMO0FBQ0UsZUFBTyxrREFEVDtBQUVFLGlCQUFTLG9JQUZYO0FBR0UsZ0JBQVEsRUFIVjtBQUlFLGtCQUFVLEVBSlo7QUFLRSxjQUFNLE1BTFI7QUFNRSxrQkFB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QWlCLEVBQWpCO0FBQ0Q7QUExQk0sR0F2MEJIO0FBbTJCTixTQW4yQk0scUJBbTJCSTtBQUNSLFNBQUssTUFBTCxHQUFjLElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDO0FBQzVDLGtCQUFZO0FBQ1YsWUFBSSxvQkFETTtBQUVWLGNBQU07QUFGSSxPQURnQztBQUs1QyxrQkFBWTtBQUNWLGdCQUFRLHFCQURFO0FBRVYsZ0JBQVE7QUFGRTtBQUxnQyxLQUFoQyxDQUFkO0FBVUQ7QUE5MkJLLENBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbm5ldyBWdWUoe1xuICBlbDogXCIjbmV3Um9hZG1hcFwiLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzTWVudU9wZW46IGZhbHNlLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICBzZWxlY3RpZHg6IDAsXG4gICAgc2VsZWN0U3RhdGU6IFtcImFsbFwiLFwiZG9jdW1lbnRhdGlvblwiLCBcImFwcGxpY2F0aW9uXCIsIFwiZWR1Y2F0aW9uXCIsIFwiZXZlbnRcIl0sXG4gICAgcm9hZG1hcERhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgdGFnOiBbJ2FsbCcsJ2RvY3VtZW50YXRpb24nXSxcbiAgICAgICAgY2hhcHRlck5hbWU6IFwiRG9jdW1lbnRhdGlvblwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBhIHB1bGwgcmVxdWVzdCBmb3IgTWV0YU1hc2sgdG8gaW50ZWdyYXRpb24gRU5TIHdpdGggSVBGUycsXG4gICAgICAgICAgICBjb250ZW50OiAnTWV0YU1hc2sgYnJvd3NlciBleHRlbnNpb24gaXMgZ3JlYXQgcHJvamVjdCBoZWxwcyB1c2VycyB0byBpbnRlcmFjdCB3aXRoIEV0aGVyZXVtLCBhbmQgZnVydGhlcm1vcmUgY2FuIGJlIG1vcmUgcG93ZXJmdWwgYnkgYWRkIGNvbnRlbnQgcmVzb2x2ZSBieSBFTlMsIHNvIFBvcnRhbCBOZXR3b3JrIGJ1aWxkIGEgd2F5IHRvIHJlc29sdmVzIEVOUyBkb21haW5zICguZXRoKSB0byBJUEZTIGhhc2ggYW5kIHJlZGlyZWN0cyB0byB1cmwgY29udGVudC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzI5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL01ldGFNYXNrL21ldGFtYXNrLWV4dGVuc2lvbi9wdWxsLzQ0MDUnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QnLFxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVDTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVDSVAgLSAxMDQ0JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FdGhlcmV1bUNvbW1vbndlYWx0aC9FQ05TL3B1bGwvMycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBDbGFzc2ljIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFQ0lQLTEwNDQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFQ0lQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFQ05TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bSBDbGFzc2ljJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bXByb2plY3QvRUNJUHMvcHVsbC85NCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFTlMgcHVibGljIHJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IGNvbnRyaWJ1dGlvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRU5TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFSVAgLSAxMDYyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2Vuc2RvbWFpbnMvZW5zL3B1bGwvMjc5JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFSVAtMTA2MicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRU5TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bScsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW0vRUlQcy9wdWxsLzEwNjInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0YWc6IFsnYWxsJywnYXBwbGljYXRpb24nXSxcbiAgICAgICAgY2hhcHRlck5hbWU6IFwiQXBwbGljYXRpb25cIixcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdJbiBhZGRpdGlvbiB0byBFTlMsIEVDTlMsIFBvcnRhbCBOZXR3b3JrIG5vdyBzdXBwb3J0cyBXTlMgYXMgd2VsbC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA2MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZW50cmFsaXplZCBXZWJ1aWxkZXInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIOKAnGJsb2figJ0gZnVuY3Rpb24gYWRkZWQ8YnI+Mi4gR25vc2lzICYgRGFwcENvbiB0ZW1wbGF0ZSBpbXBsZW1lbnRlZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzcvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgZG9tYWluIGJpZGRpbmcnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzIyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbG5ldHdvcmsgaW50ZXJncmF0aW9uIHdpdGggV2FuY2hhaW4nLFxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBwdWJsaWMgcmVzb2x2ZXIgPGEgaHJlZj1cImh0dHBzOi8vZXhwbG9yZXIud2FuY2hhaW4ub3JnL2Jsb2NrL2FkZHIvMHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJsaW5rX3RleHRcIj4weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQ8L3NwYW4+JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8yMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IHdhbmNoYWluIGRvbWFpbiBuYW1lIHNlYXJjaGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTMnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsbmV0d29yayBpbnRlcmdyYXRpb24gd2l0aCBXYW5jaGFpbicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRGVwbG95IHdhbmNoYWluIGluZnVyYSA8YSBocmVmPVwiaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+d2FuY2hhaW4ucG9ydGFsLm5ldHdvcms8L2E+JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vd2FuY2hhaW4ucG9ydGFsLm5ldHdvcmsvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZXRlbnRyYWxpemVkIFdlYiBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBmbG93Ljxicj4yLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXIuPGJyPjMuIERlY2VudHJhbGl6ZWQgd2Vic2l0ZSBkZXBsb3kgaGlzdG9yeS4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL3dlYi5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEZXNpZ24gYW4gdXNlciBkYXNoYm9hcmQgZm9yIHVzZXIgc2V0dGluZ3MsIGRvbWFpbiBtYW5hZ2VyLCBkb21haW4gcHVyY2hhc2UgaGlzdG9yeScsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb3RhbCBOZXR3b3JrIENocm9tZSBFeHRlbnNpb24gRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgLmV0aCBhbmQgLmV0YyBkb21haW5zLCAud2FuIGlzIHVuZGVyIGRldmVsb3BtZW50PGJyPjIuIFVzZSBtdWx0aWhhc2ggZnVuY3Rpb24gdG8gY29udmVydCBFTlMsIEVDTlMsIFdOUyBQdWJsaWMgUmVzb2x2ZXIgZGF0YTxici8+My4gTGV0IHVzZXJzIGNhbiBkaXJlY3RseSB2aXNpdCBkZWNlbnRyYWxpemVkIHdlYnNpdGUnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUG9ydGFsTmV0d29yay9wb3J0YWwtbmV0d29yay1icm93c2VyLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01ldGFtYXNrIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdFbmhhbmNlbWVudCBNZXRhTWFzayB0byBpbnRlZ3JhdGUgd2l0aCBFTlMgcmVzb2x2ZXIgdG8gcmVkaXJlY3QgdG8gZGVjZW50cmFsaXplIHdlYicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvbWV0YW1hc2stZXh0ZW5zaW9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVlcCBsZWFybmluZyBtb2RlbCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRW5oYW5jZSB0cmFkaW5nIG1hdGNoaW5nIHJhdGUgPGJyPjIuIFdlIGNvbGxlY3Qgb3ZlciAxbSB0b3AgdmFsdWUgZG9tYWlucyBmcm9tIGNlbnRyYWxpemUgZG9tYWlucyBhbmQgYWxsIHRoZSBFdGhlcmV1bSBkb21haW5zLiBXaXRoIGRlZXAgbGVhcm5pbmcgd2UgYXJlIGFibGUgdG8gbWFrZSBBSSBzeXN0ZW1zIHdoaWNoIGNhbiBwcmVkaWN0IHRoZSBkb21haW5zIHZhbHVlLiBXZSBoYXZlIHR3byBraW5kcyBvZiBzeXN0ZW1zLCBvbmUgaXMgdG8gZmluZCBoaWdoIHZhbHVlIGRvbWFpbnMgLCB0aGUgb3RoZXIgaXMgdG8gcHJlZGljdCB0aGUgcG9zc2libGUgcHJpY2Ugb2YgdGhlIGRvbWFpbnMuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV0hPSVMnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFBhcmluZyBhbmQgY2xlYW5pbmcgYWxsIHRoZSBkb21haW5zIG9uIEV0aGVyZXVtLjxicj4yLiBCZWdpbiB0byBidWlsZCB1cCBFdGhlcmV1bSBDbGFzc2ljIFdIT0lTIHN5c3RlbSBhbmQgY29sbGVjdCBkYXRhcyBvbiBpdC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdPbmxpbmUgRGVjZW50cmFsaXplZCBXZWJzaXRlIEJ1aWxkZXInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFBlcnNvbmFsIHByb2ZpbGUgYnVpbGRlcjxicj4yLiBDdXN0b21pemVkIHdlYnNpdGUgZGVwbG95bWVudDxicj4zLiBCYWNrZW5kIGNvbnRydWNzdGlvbicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHA6Ly9oMS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBpbXByb3ZlbWVudCBSZWZhY3RvcmluZyB0aGUgdXNhYmlsaXR5IFJlZmFjdG9yaW5nIGFuZCBJbnRlZ3JhdGlvbiB3aXRoIGV0aGVyZXVtIFVJL1VYIGRlc2lnbiBlbmhhbmNlbWVudCBDb25zdHJ1Y3RpbmcgdGhlIGJhY2tlbmQgYXJjaGl0ZWN0dXJlIFNlY3VyaXR5IEVuaGFuY2VtZW50PGJyPjIuIENvbnN0cnVjdGluZyB1c2VyIHByb2ZpbGUgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNC8xNicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly9iZXRhLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIFxuICAgICAge1xuICAgICAgICB0YWc6IFsnYWxsJywnZWR1Y2F0aW9uJ10sXG4gICAgICAgIGNoYXB0ZXJOYW1lOiBcIkVkdWNhdGlvblwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSVQgU2VlZCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgYW5kIE1yLiBCbG9jayB0ZWFtIHdlcmUgdmVyeSBob25vcmVkIHRvIGdldCBpbnZpdGVkIGJ5IE5ldyBUYWlwZWkgQ2l0eSBDb21wdXRlciBBc3NvY2lhdGUgdG8gc3BlYWsgYXQgSVQgU2VlZCB4IFRlY2hub2xvZ3kgdHJhaW5pbmcgcHJvZ3JhbS4gSVQgU2VlZCBpcyBhbiBlZHVjYXRpb24gY29tbXVuaXR5IHRoYXQgbGV0IGdyYWR1YXRpbmcgc3R1ZGVudHMgbGVhcm4gdmFyaW91cyB0cmVuZHMgYXJvdW5kIHRoZSB3b3JsZCwgc28gdGhleSBjYW4gYmUgd2VsbCBwcmVwYXJlZCBmb3IgdGhlaXIgY2FyZWVyIHBhdGggaW4gdGhlIGZ1dHVyZS4gQmFzaWMgY29uY2VwdCBvZiBCbG9ja2NoYWluICYgQXBwbGljYXRpb24gb2YgQmxvY2tjaGFpbiAmIEZ1dHVyZSBkZXZlbG9wbWVudCBvZiBCbG9ja2NoYWluJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTM5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0My5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0Ni5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTUxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTYxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk3NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5ODMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbiBQbGF0Zm9ybScsXG4gICAgICAgICAgICBjb250ZW50OiAnT3VyIGNvLWZvdW5kZXIsIENocmlzdG9waGVyIFNoZW4sIHdhcyBwcmVzZW50aW5nIGF0IHRoZSBcIllvdW5nIEVudHJlcHJlbmV1clwiIFBhbmVsIGR1cmluZyB0aGUgZXZlbnQuIEFzc2lzdCB1bml2ZXJzaXR5IHN0dWRlbnRzIHRvIGpvaW4gdGhlIGludGVybmF0aW9uYWwgU1VTUyBldmVudHMsIHRvIG5vdCBvbmx5IGJyaW5nIHRoZSBibG9ja2NoYWluIHRyZW5kcyB0byBUYWl3YW4sIGJ1dCBhbHNvIGVkdWNhdGUgbW9yZSBzdHVkZW50cyB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIGRldmVsb3AgYmxvY2tjaGFpbiB0ZWNobm9sb2d5LiBJdOKAmXMgb3VyIGdvYWwgdG8gY3VsdGl2YXRlIG1vcmUgYmxvY2tjaGFpbiBkZXZlbG9wZXJzLCB0byB0aHJpdmUgdGhlIHdob2xlIGNvbW11bml0eSwgYW5kIHdlIHN0YXJ0IHRoaXMgbWlzc2lvbiBmcm9tIFRhaXdhbi4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMS5qcGcnLCAnZWR1Y2F0aW9uLzIuanBnJywgJ2VkdWNhdGlvbi8zLmpwZycsICdlZHVjYXRpb24vNC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi81LmpwZycsICdlZHVjYXRpb24vNi5qcGcnLCAnZWR1Y2F0aW9uLzcuanBnJywgJ2VkdWNhdGlvbi84LmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzkuanBnJywgJ2VkdWNhdGlvbi8xMC5qcGcnLCAnZWR1Y2F0aW9uLzExLmpwZycsICdlZHVjYXRpb24vMTIuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMTMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnNC8xNy0xOCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRhZzogWydhbGwnLCdldmVudCddLFxuICAgICAgICBjaGFwdGVyTmFtZTogXCJFdmVudFwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV29ybGQgQmxvY2tjaGFpbiBDb25mZXJlbmNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzE3IC0gMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2FuY2hhaW4gUm9hZHNob3cgQWlzYSBzcGVlY2gnLFxuICAgICAgICAgICAgY29udGVudDogJ0FuZHksIENvbW11bml0eSBsZWFkIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYSBXYW5jaGFpbiBSb2Fkc2hvdycsXG4gICAgICAgICAgICB0aW1lOiAnNy8xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdIb3N0ZWQgSGFja2F0aG9uIHdpdGggdGVhbXcuZSBhbmQgU09QVCcsXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjk1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMyNjUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzI2Ni5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjc1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMyNzkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzI4MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMjgzLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMyOTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzMwMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzA3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzMDguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzMxNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzI5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzMzMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzMzOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzMzQwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDMzOTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzQwMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzNDE4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9rcl9IYWNrYXRob24vRFNDMDM0MjQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2tyX0hhY2thdGhvbi9EU0MwMzQyNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQva3JfSGFja2F0aG9uL0RTQzAzNDI3LmpwZydcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYScsXG4gICAgICAgICAgICB0aW1lOiAnNy8xNCAtIDE1JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1JJU0UsIFwiVGhlIGxhcmdlc3QgdGVjaCBjb25mZXJlbmNlIGluIEFzaWFcIicsXG4gICAgICAgICAgICBjb250ZW50OiAnVmluY2VudCBUdSwgIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDM1LnBuZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIb25nIEtvbmcnLFxuICAgICAgICAgICAgdGltZTogJzcvOCAtIDExJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dhbmNoYWluIFJvYWRzaG93IEFpc2Egc3BlZWNoJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDaHJpc3RvcGhlciwgZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzQuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0t1YWxhIEx1bXB1ciwgTWFseXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNy83JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dhbmNoYWluIFJvYWRzaG93IEFpc2Egc3BlZWNoJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDaHJpc3RvcGhlciwgZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0pha2FydGEsIEluZG9uZXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNy81JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gRmVzdGl2YWw6IFZpZXRuYW0gJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCbG9ja2NoYWluIEZlc3RpdmFsIGlzIGhvc3RlZCBieSBIdW9iaS5wcm8gYW5kIGNvLWhvc3RlZCBieSBLeWJlciBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS80LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS83LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMDEyLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MTYucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQzNS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDU4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE1NDgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYxMy5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzA1LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3MzgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTgyMC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTE0LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5NDIucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAyOS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMTA4LnBuZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIbyBDaGkgTWluaCwgVmlldG5hbScsXG4gICAgICAgICAgICB0aW1lOiAnNS8yNCAtIDI1JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OHd6ZnZGNVZ0LU0mbGlzdD1QTGg3eU0tRFBFRFloRU1wajN2SGJCYWVTb2JGRExUcXJTJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQkJTIC0gS29yZWEgbWVldC11cCAnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4NjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODY0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg5Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MDAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTA3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkyMy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwIC0gMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmx1emVsbGUgeCBQb3J0YWwuTmV0d29yayBIYWNrYXRob24nLFxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBoYWNrYXRob24gd2l0aCBCbHV6ZWxsZSBhdCBDYW5hZGEgVmFuY291dmVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NhbmFkYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOS4zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlqaURUdTh2WHFXVWpiaklDbGxmel9MZi05N1ZnaXdxL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiBVbml2ZXJzZScsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIEJsb2NrY2hhaW4gVW5pdmVyc2UgRXZlbnQgd2l0aCBNci4gQmxvY2snLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEuanBnJywgJ2V2ZW50L2V2ZW50Mi5qcGcnLCAnZXZlbnQvZXZlbnQzLmpwZycsICdldmVudC9ldmVudDQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50NS5qcGcnLCAnZXZlbnQvZXZlbnQ2LmpwZycsICdldmVudC9ldmVudDcuanBnJywgJ2V2ZW50L2V2ZW50OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ5LmpwZycsICdldmVudC9ldmVudDEwLmpwZycsICdldmVudC9ldmVudDExLmpwZycsICdldmVudC9ldmVudDEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEzLmpwZycsICdldmVudC9ldmVudDE0LmpwZycsICdldmVudC9ldmVudDE1LmpwZycsICdldmVudC9ldmVudDE2LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDE3LmpwZycsICdldmVudC9ldmVudDE4LmpwZycsICdldmVudC9ldmVudDE5LmpwZycsICdldmVudC9ldmVudDIwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDIxLmpwZycsICdldmVudC9ldmVudDIyLmpwZycsICdldmVudC9ldmVudDIzLmpwZycsICdldmVudC9ldmVudDI0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI1LmpwZycsICdldmVudC9ldmVudDI2LmpwZycsICdldmVudC9ldmVudDI3LmpwZycsICdldmVudC9ldmVudDI4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI5LmpwZycsICdldmVudC9ldmVudDMwLmpwZycsICdldmVudC9ldmVudDMxLmpwZycsICdldmVudC9ldmVudDMyLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMjcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NzU5NjE3MDI0MjIyODUvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmV5b25kIEJsb2NrIFRva3lvIFN1bW1pdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmV5b25kIEJsb2NrIExpdmVzdHJlYW0gTWVkaWEgUGFydG5lcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMy01JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTMzMDcwMTU1MjA1Mi8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTY0NjM5ODE4NzE0OS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAzJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjQwNDcxNDc3Nzk4NC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyA0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjY1OTUxNDc1MjUwNC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVjb25vbXknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgU291dGggS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMi00JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhZmUgJiBDcnlwdG8nLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4IFRzYWksIEZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NDY1MDUwODIwMzQ2MTQvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LCAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rva2VuMjA0OScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmdLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzIwLTIxJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QW1OUWE3SnZ3QjAmbGlzdD1QTGg3eU0tRFBFRFlqdFhPMUVrd01lclYyRUo4QmNiZTRGJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9uZXkgMjAvMjAgQXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnMy8xMi0xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVViZDA5T29WUDBNJmxpc3Q9UExoN3lNLURQRURZaXNpVHNDQVdoREZOXzBUZ1hhc2czOScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2Nrc2hvdyBDb2ludGVsZWdyYXBoIHggTXIuQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMjUxMjU1NDkxOTQxNDE4Mzk3JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MjI3NDQzNjc3NDQwMTkvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnZVRvcm8gWCBNci4gQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ05FTyBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIGEgUHl0aG9uIERldmVsb3BlciBKb2hubnkgSHNpZWgsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmssIFB5dGhvbiBEZXZlbG9wZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpJyxcbiAgICAgICAgICAgIHRpbWU6ICcyLzI0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMDgwNDUzNTQ1Njk1Njk2ODAwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwNzgyNTI4MjU2OTI2MS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwODAwNTc5MjU1MTIxMC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5ld0RhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgdGltZTogJ0p1bCAyMywgMjAxOCcsXG4gICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgYXQgTklGVFkgSGFja2F0aG9uICYgQ29uZmVyZW5jZeKAiuKAlOKAikhvbmcgS29uZycsXG4gICAgICAgIHVybDogJy4vYmxvZ3MvbmlmdHkuaHRtbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpbWU6ICdKdWwgMDYsIDIwMTgnLFxuICAgICAgICB0aXRsZTogJ1doYXQgaXMgRU5TICYgV2hhdCBwcm9ibGVtIGl0IHNvbHZlZCA/JyxcbiAgICAgICAgdXJsOiAnLi9ibG9ncy93aGF0LWlzLWVucy1XaGF0LXByb2JsZW0taXQtc29sdmVkLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVuIDI5LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBIYWNrYXRob24gS29yZWEgMjAxOCDigJQgUHJvdGFsIE5ldHdvcmsgQW5ub3VuY2VtZW50LicsXG4gICAgICAgIHVybDogJy4vYmxvZ3MvYW5ub3VuY2VtZW50Lmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVuIDI5LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBpbiBXYW5jaGFpbiBBc2lhIFRvdXIgMjAxOCBJbmRvbmVzaWEgLyBNYWxheXNpYSAvIFNvdXRoIEtvcmVhLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3Mvd2FuY2hhaW4uaHRtbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpbWU6ICdKdW4gMjEsIDIwMTgnLFxuICAgICAgICB0aXRsZTogJ0hvdyB0byB1c2UgTWV0YU1hc2sgRXh0ZW5zaW9uID8nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL21ldGFNYXNrLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnTWF5IDI1LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdLZXkgRmluZGluZ3Mgb2YgT3VyIERhdGEgQW5hbHlzaXMgb2YgRU5TLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3Mva2V5LWZpbmRpbmdzLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnTWF5IDIzLCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdEZWNlbnRyYWxpemVkIERhdGFiYXNlIEhhY2thdGhvbiBUYWtlYXdheXMgOiBCbHV6ZWxsZSBYIFBvcnRhbCBOZXR3b3JrLicsXG4gICAgICAgIHVybDogJy4vYmxvZ3MvZGVjZW50cmFsaXplZC5odG1sJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgd2F0Y2g6e1xuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xuICAgICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJJdGVtKCl7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFN0YXRlW3RoaXMuc2VsZWN0aWR4XTtcbiAgICAgIHJldHVybiB0aGlzLnJvYWRtYXBEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udGFnLmluZGV4T2Yoc2VsZWN0ZWQpIT09IC0xKTtcbiAgICB9LFxuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVNZW51Rm4oKSB7XG4gICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuO1xuICAgIH0sXG4gICAgaGFuZEFjdGl2ZShpZHgpIHtcbiAgICAgIHRoaXMuc2VsZWN0aWR4ID0gaWR4O1xuICAgIH0sXG4gICAgZmlsdGVyVGFnKCl7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFN0YXRlW3RoaXMuc2VsZWN0aWR4XTtcbiAgICAgIHRoaXMucm9hZG1hcERhdGEuZmlsdGVyKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICByZXR1cm4gaXRlbS50YWcuaW5kZXhPZihzZWxlY3RlZCkhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBvcGVuQ29udGVudEZuOiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XG4gICAgfSxcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKHBob3RvQXJyKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xuICAgIH0sXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBbXTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgIH0sXG4gICAgfSk7IFxuICB9XG59KTsiXX0=
