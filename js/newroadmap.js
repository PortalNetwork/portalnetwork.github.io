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
        photos: ['event/event36.jpg'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvbmV3cm9hZG1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLGFBREU7QUFFTixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosZUFBVyxDQUpQO0FBS0osaUJBQWEsQ0FBQyxLQUFELEVBQU8sZUFBUCxFQUF3QixhQUF4QixFQUF1QyxXQUF2QyxFQUFvRCxPQUFwRCxDQUxUO0FBTUosaUJBQWEsQ0FDWDtBQUNFLFdBQUssQ0FBQyxLQUFELEVBQU8sZUFBUCxDQURQO0FBRUUsbUJBQWEsZUFGZjtBQUdFLGFBQU8sQ0FDTDtBQUNFLGVBQU8sa0VBRFQ7QUFFRSxpQkFBUyxnUUFGWDtBQUdFLGdCQUFRLEVBSFY7QUFJRSxrQkFBVSxFQUpaO0FBS0UsY0FBTSxNQUxSO0FBTUUsa0JBQVUsR0FOWjtBQU9FLGVBQU8sRUFQVDtBQVFFLGlCQUFTLENBQ1A7QUFDRSxpQkFBTyxFQURUO0FBRUUsZUFBSztBQUZQLFNBRE8sQ0FSWDtBQWNFLGVBQU8sRUFkVDtBQWVFLGdCQUFRO0FBZlYsT0FESyxFQWtCTDtBQUNFLGVBQU8sNEVBRFQ7QUFFRSxpQkFBUywwR0FGWDtBQUdFLGdCQUFRLEVBSFY7QUFJRSxrQkFBVSxFQUpaO0FBS0UsY0FBTSxNQUxSO0FBTUUsa0JBQVUsR0FOWjtBQU9FLGVBQU8sRUFQVDtBQVFFLGlCQUFTLENBQ1A7QUFDRSxpQkFBTyxFQURUO0FBRUUsZUFBSztBQUZQLFNBRE8sQ0FSWDtBQWNFLGVBQU8sRUFkVDtBQWVFLGdCQUFRO0FBZlYsT0FsQkssRUFtQ0w7QUFDRSxlQUFPLGtEQURUO0FBRUUsaUJBQVMsb0lBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFP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QUFLLFNBQUwsR0FBaUIsR0FBakI7QUFDRCxLQUhNO0FBSVAsYUFKTyx1QkFJSTtBQUNULFVBQUksV0FBVyxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxTQUF0QixDQUFmO0FBQ0EsV0FBSyxXQUFMLENBQWlCLE1BQWpCLENBQ0UsVUFBQyxJQUFELEVBQVE7QUFDTjtBQUNBLGVBQU8sS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixRQUFqQixNQUE4QixDQUFDLENBQXRDO0FBQ0QsT0FKSDtBQU1ELEtBWk07O0FBYVAsbUJBQWUsdUJBQVUsR0FBVixFQUFlO0FBQzVCLFdBQUssT0FBTCxDQUFhLEdBQWIsRUFBa0IsSUFBbEIsR0FBeUIsQ0FBQyxLQUFLLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLElBQTVDO0FBQ0QsS0FmTTtBQWdCUCxlQUFXLG1CQUFTLFFBQVQsRUFBbUI7QUFDNUIsV0FBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0QsS0FuQk07QUFvQlAsZ0JBQVksc0JBQVc7QUFDckIsV0FBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7QUF2Qk0sR0E1eUJIO0FBcTBCTixTQXIwQk0scUJBcTBCSTtBQUNSLFNBQUssTUFBTCxHQUFjLElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDO0FBQzVDLGtCQUFZO0FBQ1YsWUFBSSxvQkFETTtBQUVWLGNBQU07QUFGSSxPQURnQztBQUs1QyxrQkFBWTtBQUNWLGdCQUFRLHFCQURFO0FBRVYsZ0JBQVE7QUFGRTtBQUxnQyxLQUFoQyxDQUFkO0FBVUQ7QUFoMUJLLENBQVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbm5ldyBWdWUoe1xuICBlbDogXCIjbmV3Um9hZG1hcFwiLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICBzZWxlY3RpZHg6IDAsXG4gICAgc2VsZWN0U3RhdGU6IFtcImFsbFwiLFwiZG9jdW1lbnRhdGlvblwiLCBcImFwcGxpY2F0aW9uXCIsIFwiZWR1Y2F0aW9uXCIsIFwiZXZlbnRcIl0sXG4gICAgcm9hZG1hcERhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgdGFnOiBbJ2FsbCcsJ2RvY3VtZW50YXRpb24nXSxcbiAgICAgICAgY2hhcHRlck5hbWU6IFwiRG9jdW1lbnRhdGlvblwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBhIHB1bGwgcmVxdWVzdCBmb3IgTWV0YU1hc2sgdG8gaW50ZWdyYXRpb24gRU5TIHdpdGggSVBGUycsXG4gICAgICAgICAgICBjb250ZW50OiAnTWV0YU1hc2sgYnJvd3NlciBleHRlbnNpb24gaXMgZ3JlYXQgcHJvamVjdCBoZWxwcyB1c2VycyB0byBpbnRlcmFjdCB3aXRoIEV0aGVyZXVtLCBhbmQgZnVydGhlcm1vcmUgY2FuIGJlIG1vcmUgcG93ZXJmdWwgYnkgYWRkIGNvbnRlbnQgcmVzb2x2ZSBieSBFTlMsIHNvIFBvcnRhbCBOZXR3b3JrIGJ1aWxkIGEgd2F5IHRvIHJlc29sdmVzIEVOUyBkb21haW5zICguZXRoKSB0byBJUEZTIGhhc2ggYW5kIHJlZGlyZWN0cyB0byB1cmwgY29udGVudC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzI5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL01ldGFNYXNrL21ldGFtYXNrLWV4dGVuc2lvbi9wdWxsLzQ0MDUnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QnLFxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVDTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVDSVAgLSAxMDQ0JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FdGhlcmV1bUNvbW1vbndlYWx0aC9FQ05TL3B1bGwvMycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBDbGFzc2ljIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFQ0lQLTEwNDQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFQ0lQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFQ05TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bSBDbGFzc2ljJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bXByb2plY3QvRUNJUHMvcHVsbC85NCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFTlMgcHVibGljIHJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IGNvbnRyaWJ1dGlvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRU5TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFSVAgLSAxMDYyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2Vuc2RvbWFpbnMvZW5zL3B1bGwvMjc5JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFSVAtMTA2MicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRU5TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bScsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW0vRUlQcy9wdWxsLzEwNjInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0YWc6IFsnYWxsJywnYXBwbGljYXRpb24nXSxcbiAgICAgICAgY2hhcHRlck5hbWU6IFwiQXBwbGljYXRpb25cIixcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdJbiBhZGRpdGlvbiB0byBFTlMsIEVDTlMsIFBvcnRhbCBOZXR3b3JrIG5vdyBzdXBwb3J0cyBXTlMgYXMgd2VsbC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA2MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZW50cmFsaXplZCBXZWJ1aWxkZXInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIOKAnGJsb2figJ0gZnVuY3Rpb24gYWRkZWQ8YnI+Mi4gR25vc2lzICYgRGFwcENvbiB0ZW1wbGF0ZSBpbXBsZW1lbnRlZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzcvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgZG9tYWluIGJpZGRpbmcnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzIyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbG5ldHdvcmsgaW50ZXJncmF0aW9uIHdpdGggV2FuY2hhaW4nLFxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBwdWJsaWMgcmVzb2x2ZXIgPGEgaHJlZj1cImh0dHBzOi8vZXhwbG9yZXIud2FuY2hhaW4ub3JnL2Jsb2NrL2FkZHIvMHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJsaW5rX3RleHRcIj4weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQ8L3NwYW4+JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8yMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IHdhbmNoYWluIGRvbWFpbiBuYW1lIHNlYXJjaGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTMnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsbmV0d29yayBpbnRlcmdyYXRpb24gd2l0aCBXYW5jaGFpbicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRGVwbG95IHdhbmNoYWluIGluZnVyYSA8YSBocmVmPVwiaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+d2FuY2hhaW4ucG9ydGFsLm5ldHdvcms8L2E+JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vd2FuY2hhaW4ucG9ydGFsLm5ldHdvcmsvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZXRlbnRyYWxpemVkIFdlYiBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBmbG93Ljxicj4yLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXIuPGJyPjMuIERlY2VudHJhbGl6ZWQgd2Vic2l0ZSBkZXBsb3kgaGlzdG9yeS4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL3dlYi5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEZXNpZ24gYW4gdXNlciBkYXNoYm9hcmQgZm9yIHVzZXIgc2V0dGluZ3MsIGRvbWFpbiBtYW5hZ2VyLCBkb21haW4gcHVyY2hhc2UgaGlzdG9yeScsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb3RhbCBOZXR3b3JrIENocm9tZSBFeHRlbnNpb24gRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgLmV0aCBhbmQgLmV0YyBkb21haW5zLCAud2FuIGlzIHVuZGVyIGRldmVsb3BtZW50PGJyPjIuIFVzZSBtdWx0aWhhc2ggZnVuY3Rpb24gdG8gY29udmVydCBFTlMsIEVDTlMsIFdOUyBQdWJsaWMgUmVzb2x2ZXIgZGF0YTxici8+My4gTGV0IHVzZXJzIGNhbiBkaXJlY3RseSB2aXNpdCBkZWNlbnRyYWxpemVkIHdlYnNpdGUnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUG9ydGFsTmV0d29yay9wb3J0YWwtbmV0d29yay1icm93c2VyLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01ldGFtYXNrIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdFbmhhbmNlbWVudCBNZXRhTWFzayB0byBpbnRlZ3JhdGUgd2l0aCBFTlMgcmVzb2x2ZXIgdG8gcmVkaXJlY3QgdG8gZGVjZW50cmFsaXplIHdlYicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvbWV0YW1hc2stZXh0ZW5zaW9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVlcCBsZWFybmluZyBtb2RlbCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRW5oYW5jZSB0cmFkaW5nIG1hdGNoaW5nIHJhdGUgPGJyPjIuIFdlIGNvbGxlY3Qgb3ZlciAxbSB0b3AgdmFsdWUgZG9tYWlucyBmcm9tIGNlbnRyYWxpemUgZG9tYWlucyBhbmQgYWxsIHRoZSBFdGhlcmV1bSBkb21haW5zLiBXaXRoIGRlZXAgbGVhcm5pbmcgd2UgYXJlIGFibGUgdG8gbWFrZSBBSSBzeXN0ZW1zIHdoaWNoIGNhbiBwcmVkaWN0IHRoZSBkb21haW5zIHZhbHVlLiBXZSBoYXZlIHR3byBraW5kcyBvZiBzeXN0ZW1zLCBvbmUgaXMgdG8gZmluZCBoaWdoIHZhbHVlIGRvbWFpbnMgLCB0aGUgb3RoZXIgaXMgdG8gcHJlZGljdCB0aGUgcG9zc2libGUgcHJpY2Ugb2YgdGhlIGRvbWFpbnMuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV0hPSVMnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFBhcmluZyBhbmQgY2xlYW5pbmcgYWxsIHRoZSBkb21haW5zIG9uIEV0aGVyZXVtLjxicj4yLiBCZWdpbiB0byBidWlsZCB1cCBFdGhlcmV1bSBDbGFzc2ljIFdIT0lTIHN5c3RlbSBhbmQgY29sbGVjdCBkYXRhcyBvbiBpdC4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdPbmxpbmUgRGVjZW50cmFsaXplZCBXZWJzaXRlIEJ1aWxkZXInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFBlcnNvbmFsIHByb2ZpbGUgYnVpbGRlcjxicj4yLiBDdXN0b21pemVkIHdlYnNpdGUgZGVwbG95bWVudDxicj4zLiBCYWNrZW5kIGNvbnRydWNzdGlvbicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHA6Ly9oMS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBpbXByb3ZlbWVudCBSZWZhY3RvcmluZyB0aGUgdXNhYmlsaXR5IFJlZmFjdG9yaW5nIGFuZCBJbnRlZ3JhdGlvbiB3aXRoIGV0aGVyZXVtIFVJL1VYIGRlc2lnbiBlbmhhbmNlbWVudCBDb25zdHJ1Y3RpbmcgdGhlIGJhY2tlbmQgYXJjaGl0ZWN0dXJlIFNlY3VyaXR5IEVuaGFuY2VtZW50PGJyPjIuIENvbnN0cnVjdGluZyB1c2VyIHByb2ZpbGUgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNC8xNicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly9iZXRhLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIFxuICAgICAge1xuICAgICAgICB0YWc6IFsnYWxsJywnZWR1Y2F0aW9uJ10sXG4gICAgICAgIGNoYXB0ZXJOYW1lOiBcIkVkdWNhdGlvblwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSVQgU2VlZCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgYW5kIE1yLiBCbG9jayB0ZWFtIHdlcmUgdmVyeSBob25vcmVkIHRvIGdldCBpbnZpdGVkIGJ5IE5ldyBUYWlwZWkgQ2l0eSBDb21wdXRlciBBc3NvY2lhdGUgdG8gc3BlYWsgYXQgSVQgU2VlZCB4IFRlY2hub2xvZ3kgdHJhaW5pbmcgcHJvZ3JhbS4gSVQgU2VlZCBpcyBhbiBlZHVjYXRpb24gY29tbXVuaXR5IHRoYXQgbGV0IGdyYWR1YXRpbmcgc3R1ZGVudHMgbGVhcm4gdmFyaW91cyB0cmVuZHMgYXJvdW5kIHRoZSB3b3JsZCwgc28gdGhleSBjYW4gYmUgd2VsbCBwcmVwYXJlZCBmb3IgdGhlaXIgY2FyZWVyIHBhdGggaW4gdGhlIGZ1dHVyZS4gQmFzaWMgY29uY2VwdCBvZiBCbG9ja2NoYWluICYgQXBwbGljYXRpb24gb2YgQmxvY2tjaGFpbiAmIEZ1dHVyZSBkZXZlbG9wbWVudCBvZiBCbG9ja2NoYWluJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTM5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0My5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0Ni5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTUxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTYxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk3NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5ODMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbiBQbGF0Zm9ybScsXG4gICAgICAgICAgICBjb250ZW50OiAnT3VyIGNvLWZvdW5kZXIsIENocmlzdG9waGVyIFNoZW4sIHdhcyBwcmVzZW50aW5nIGF0IHRoZSBcIllvdW5nIEVudHJlcHJlbmV1clwiIFBhbmVsIGR1cmluZyB0aGUgZXZlbnQuIEFzc2lzdCB1bml2ZXJzaXR5IHN0dWRlbnRzIHRvIGpvaW4gdGhlIGludGVybmF0aW9uYWwgU1VTUyBldmVudHMsIHRvIG5vdCBvbmx5IGJyaW5nIHRoZSBibG9ja2NoYWluIHRyZW5kcyB0byBUYWl3YW4sIGJ1dCBhbHNvIGVkdWNhdGUgbW9yZSBzdHVkZW50cyB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIGRldmVsb3AgYmxvY2tjaGFpbiB0ZWNobm9sb2d5LiBJdOKAmXMgb3VyIGdvYWwgdG8gY3VsdGl2YXRlIG1vcmUgYmxvY2tjaGFpbiBkZXZlbG9wZXJzLCB0byB0aHJpdmUgdGhlIHdob2xlIGNvbW11bml0eSwgYW5kIHdlIHN0YXJ0IHRoaXMgbWlzc2lvbiBmcm9tIFRhaXdhbi4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMS5qcGcnLCAnZWR1Y2F0aW9uLzIuanBnJywgJ2VkdWNhdGlvbi8zLmpwZycsICdlZHVjYXRpb24vNC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi81LmpwZycsICdlZHVjYXRpb24vNi5qcGcnLCAnZWR1Y2F0aW9uLzcuanBnJywgJ2VkdWNhdGlvbi84LmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzkuanBnJywgJ2VkdWNhdGlvbi8xMC5qcGcnLCAnZWR1Y2F0aW9uLzExLmpwZycsICdlZHVjYXRpb24vMTIuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMTMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnNC8xNy0xOCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRhZzogWydhbGwnLCdldmVudCddLFxuICAgICAgICBjaGFwdGVyTmFtZTogXCJFdmVudFwiLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV29ybGQgQmxvY2tjaGFpbiBDb25mZXJlbmNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzE3IC0gMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2FuY2hhaW4gUm9hZHNob3cgQWlzYSBzcGVlY2gnLFxuICAgICAgICAgICAgY29udGVudDogJ0FuZHksIENvbW11bml0eSBsZWFkIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYSBXYW5jaGFpbiBSb2Fkc2hvdycsXG4gICAgICAgICAgICB0aW1lOiAnNy8xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdIb3N0ZWQgSGFja2F0aG9uIHdpdGggdGVhbXcuZSBhbmQgU09QVCcsXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNi5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzE0IC0gMTUnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUklTRSwgXCJUaGUgbGFyZ2VzdCB0ZWNoIGNvbmZlcmVuY2UgaW4gQXNpYVwiJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdWaW5jZW50IFR1LCAgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzUucG5nJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmcgS29uZycsXG4gICAgICAgICAgICB0aW1lOiAnNy84IC0gMTEnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2FuY2hhaW4gUm9hZHNob3cgQWlzYSBzcGVlY2gnLFxuICAgICAgICAgICAgY29udGVudDogJ0NocmlzdG9waGVyLCBmb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNC5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnS3VhbGEgTHVtcHVyLCBNYWx5c2lhJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2FuY2hhaW4gUm9hZHNob3cgQWlzYSBzcGVlY2gnLFxuICAgICAgICAgICAgY29udGVudDogJ0NocmlzdG9waGVyLCBmb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzMy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSmFrYXJ0YSwgSW5kb25lc2lhJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzUnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiBGZXN0aXZhbDogVmlldG5hbSAnLFxuICAgICAgICAgICAgY29udGVudDogJ0Jsb2NrY2hhaW4gRmVzdGl2YWwgaXMgaG9zdGVkIGJ5IEh1b2JpLnBybyBhbmQgY28taG9zdGVkIGJ5IEt5YmVyIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8zLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS82LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS85LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzExLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEzLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE2LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEwMTIucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQxNi5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDM1LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0NTgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTU0OC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNjEzLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3MDUucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTczOC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xODIwLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5MTQucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTk0Mi5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMDI5LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIxMDgucG5nJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvIENoaSBNaW5oLCBWaWV0bmFtJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzI0IC0gMjUnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj04d3pmdkY1VnQtTSZsaXN0PVBMaDd5TS1EUEVEWWhFTXBqM3ZIYkJhZVNvYkZETFRxclMnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCQlMgLSBLb3JlYSBtZWV0LXVwICcsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgYW5kIE1yLiBCbG9jayB0ZWFtIHdlcmUgdmVyeSBob25vcmVkIHRvIGdldCBpbnZpdGVkIGJ5IE5ldyBUYWlwZWkgQ2l0eSBDb21wdXRlciBBc3NvY2lhdGUgdG8gc3BlYWsgYXQgSVQgU2VlZCB4IFRlY2hub2xvZ3kgdHJhaW5pbmcgcHJvZ3JhbS4gSVQgU2VlZCBpcyBhbiBlZHVjYXRpb24gY29tbXVuaXR5IHRoYXQgbGV0IGdyYWR1YXRpbmcgc3R1ZGVudHMgbGVhcm4gdmFyaW91cyB0cmVuZHMgYXJvdW5kIHRoZSB3b3JsZCwgc28gdGhleSBjYW4gYmUgd2VsbCBwcmVwYXJlZCBmb3IgdGhlaXIgY2FyZWVyIHBhdGggaW4gdGhlIGZ1dHVyZS4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg2MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4NjQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODk3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkwMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MDcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTIzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzUvMTAgLSAxMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbHV6ZWxsZSB4IFBvcnRhbC5OZXR3b3JrIEhhY2thdGhvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIGhhY2thdGhvbiB3aXRoIEJsdXplbGxlIGF0IENhbmFkYSBWYW5jb3V2ZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2FuYWRhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5LjMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9oMS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxR3hEMFNGNU5RS2VMcWhPQ1dxUVVZSFBSQW9CZkhuL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01yLkJsb2NrIFggTWFsYXlzaWEnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ01hbGF5c2lhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWppRFR1OHZYcVdVamJqSUNsbGZ6X0xmLTk3Vmdpd3EvdmlldycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4Nzc4MzE2MjIyMzUyOTMvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LCAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIFVuaXZlcnNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDby1ob3N0ZWQgQmxvY2tjaGFpbiBVbml2ZXJzZSBFdmVudCB3aXRoIE1yLiBCbG9jaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MS5qcGcnLCAnZXZlbnQvZXZlbnQyLmpwZycsICdldmVudC9ldmVudDMuanBnJywgJ2V2ZW50L2V2ZW50NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ1LmpwZycsICdldmVudC9ldmVudDYuanBnJywgJ2V2ZW50L2V2ZW50Ny5qcGcnLCAnZXZlbnQvZXZlbnQ4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDkuanBnJywgJ2V2ZW50L2V2ZW50MTAuanBnJywgJ2V2ZW50L2V2ZW50MTEuanBnJywgJ2V2ZW50L2V2ZW50MTIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MTMuanBnJywgJ2V2ZW50L2V2ZW50MTQuanBnJywgJ2V2ZW50L2V2ZW50MTUuanBnJywgJ2V2ZW50L2V2ZW50MTYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MTcuanBnJywgJ2V2ZW50L2V2ZW50MTguanBnJywgJ2V2ZW50L2V2ZW50MTkuanBnJywgJ2V2ZW50L2V2ZW50MjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjEuanBnJywgJ2V2ZW50L2V2ZW50MjIuanBnJywgJ2V2ZW50L2V2ZW50MjMuanBnJywgJ2V2ZW50L2V2ZW50MjQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjUuanBnJywgJ2V2ZW50L2V2ZW50MjYuanBnJywgJ2V2ZW50L2V2ZW50MjcuanBnJywgJ2V2ZW50L2V2ZW50MjguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjkuanBnJywgJ2V2ZW50L2V2ZW50MzAuanBnJywgJ2V2ZW50L2V2ZW50MzEuanBnJywgJ2V2ZW50L2V2ZW50MzIuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnNC8yNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NTk2MTcwMjQyMjI4NS8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCZXlvbmQgQmxvY2sgVG9reW8gU3VtbWl0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCZXlvbmQgQmxvY2sgTGl2ZXN0cmVhbSBNZWRpYSBQYXJ0bmVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Rva3lvLCBKYXBhbicsXG4gICAgICAgICAgICB0aW1lOiAnNC8zLTUnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxMzMwNzAxNTUyMDUyLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxNjQ2Mzk4MTg3MTQ5LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDMnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNDA0NzE0Nzc3OTg0LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDQnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNjU5NTE0NzUyNTA0LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdEZWNvbm9teScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBTb3V0aCBLb3JlYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yLTQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FmZSAmIENyeXB0bycsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXggVHNhaSwgRm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg0NjUwNTA4MjAzNDYxNC8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sICAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVG9rZW4yMDQ5JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG9uZ0tvbmcnLFxuICAgICAgICAgICAgdGltZTogJzMvMjAtMjEnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1BbU5RYTdKdndCMCZsaXN0PVBMaDd5TS1EUEVEWWp0WE8xRWt3TWVyVjJFSjhCY2JlNEYnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNb25leSAyMC8yMCBBc2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzEyLTE0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VWJkMDlPb1ZQME0mbGlzdD1QTGg3eU0tRFBFRFlpc2lUc0NBV2hERk5fMFRnWGFzZzM5JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tzaG93IENvaW50ZWxlZ3JhcGggeCBNci5CbG9jaycsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIyNTEyNTU0OTE5NDE0MTgzOTcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgyMjc0NDM2Nzc0NDAxOS8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdlVG9ybyBYIE1yLiBCbG9jaycsXG4gICAgICAgICAgICBjb250ZW50OiAnTkVPIGRldmVsb3BtZW50IGV4cGVyaWVuY2UgYXMgYSBQeXRob24gRGV2ZWxvcGVyIEpvaG5ueSBIc2llaCwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaywgUHl0aG9uIERldmVsb3BlcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWknLFxuICAgICAgICAgICAgdGltZTogJzIvMjQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIwODA0NTM1NDU2OTU2OTY4MDAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA3ODI1MjgyNTY5MjYxLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA4MDA1NzkyNTUxMjEwLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbmV3RGF0YTogW1xuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVsIDA2LCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdXaGF0IGlzIEVOUyAmIFdoYXQgcHJvYmxlbSBpdCBzb2x2ZWQgPycsXG4gICAgICAgIHVybDogJy4vYmxvZ3Mvd2hhdC1pcy1lbnMtV2hhdC1wcm9ibGVtLWl0LXNvbHZlZC5odG1sJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogJ0p1biAyOSwgMjAxOCcsXG4gICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgSGFja2F0aG9uIEtvcmVhIDIwMTgg4oCUIFByb3RhbCBOZXR3b3JrIEFubm91bmNlbWVudC4nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL2Fubm91bmNlbWVudC5odG1sJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogJ0p1biAyOSwgMjAxOCcsXG4gICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgaW4gV2FuY2hhaW4gQXNpYSBUb3VyIDIwMTggSW5kb25lc2lhIC8gTWFsYXlzaWEgLyBTb3V0aCBLb3JlYS4nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL3dhbmNoYWluLmh0bWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiAnSnVuIDIxLCAyMDE4JyxcbiAgICAgICAgdGl0bGU6ICdIb3cgdG8gdXNlIE1ldGFNYXNrIEV4dGVuc2lvbiA/JyxcbiAgICAgICAgdXJsOiAnLi9ibG9ncy9tZXRhTWFzay5odG1sJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogJ01heSAyNSwgMjAxOCcsXG4gICAgICAgIHRpdGxlOiAnS2V5IEZpbmRpbmdzIG9mIE91ciBEYXRhIEFuYWx5c2lzIG9mIEVOUy4nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL2tleS1maW5kaW5ncy5odG1sJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogJ01heSAyMywgMjAxOCcsXG4gICAgICAgIHRpdGxlOiAnRGVjZW50cmFsaXplZCBEYXRhYmFzZSBIYWNrYXRob24gVGFrZWF3YXlzIDogQmx1emVsbGUgWCBQb3J0YWwgTmV0d29yay4nLFxuICAgICAgICB1cmw6ICcuL2Jsb2dzL2RlY2VudHJhbGl6ZWQuaHRtbCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHdhdGNoOntcbiAgICBpc09wZW5Qb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCk9PntcbiAgICAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZmlsdGVySXRlbSgpe1xuICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RTdGF0ZVt0aGlzLnNlbGVjdGlkeF07XG4gICAgICByZXR1cm4gdGhpcy5yb2FkbWFwRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZy5pbmRleE9mKHNlbGVjdGVkKSE9PSAtMSk7XG4gICAgfSxcbiAgICBwaG90b3NJbk1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vd1Bob3RvcztcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZEFjdGl2ZShpZHgpIHtcbiAgICAgIHRoaXMuc2VsZWN0aWR4ID0gaWR4O1xuICAgIH0sXG4gICAgZmlsdGVyVGFnKCl7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFN0YXRlW3RoaXMuc2VsZWN0aWR4XTtcbiAgICAgIHRoaXMucm9hZG1hcERhdGEuZmlsdGVyKFxuICAgICAgICAoaXRlbSk9PntcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICByZXR1cm4gaXRlbS50YWcuaW5kZXhPZihzZWxlY3RlZCkhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBvcGVuQ29udGVudEZuOiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XG4gICAgfSxcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKHBob3RvQXJyKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xuICAgIH0sXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBbXTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgIH0sXG4gICAgfSk7IFxuICB9XG59KTsiXX0=
