(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _animatedScrollTo = require('animated-scroll-to');

var _animatedScrollTo2 = _interopRequireDefault(_animatedScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetOffset(el) {
  var box = el.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  };
}
var app = new Vue({
  el: '#roadmap',
  data: {
    swiper: null,
    isOpenPop: false,
    nowPhotos: [],
    roadmapData: [{
      title: 'Documentation',
      icon: './images/roadmap/documentation.svg',
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
      title: 'Application',
      icon: './images/roadmap/documentation.svg',
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
      title: 'Education',
      icon: './images/roadmap/education.svg',
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
      title: 'Event',
      icon: './images/roadmap/event.svg',
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
    photosInModal: function photosInModal() {
      return this.nowPhotos;
    }
  },
  methods: {
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
    },
    scrollToChapter: function scrollToChapter(idx) {
      var chapters = document.querySelectorAll('.chapter');
      var targetChapter = chapters[idx];
      var elementTop = GetOffset(targetChapter);
      (0, _animatedScrollTo2.default)(elementTop.top - 100);
    }
  },
  mounted: function mounted() {

    // window.Intercom("boot", {
    //     app_id: "an50zjec"
    // });
    // window.Intercom("update");
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

},{"animated-scroll-to":2}],2:[function(require,module,exports){
(function() {
  'use strict';

  // desiredOffset - page offset to scroll to
  // speed - duration of the scroll per 1000px
  function __ANIMATE_SCROLL_TO(desiredOffset) {
    var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var options = {
      speed: 500,
      minDuration: 250,
      maxDuration: 1500,
      cancelOnUserAction: true,
      element: window,
      horizontal: false,
      onComplete: undefined,
      passive: true,
      offset: 0
    };

    var optionsKeys = Object.keys(options);

    // Override default options
    for (var i = 0; i < optionsKeys.length; i++) {
      var key = optionsKeys[i];

      if (typeof userOptions[key] !== 'undefined') {
        options[key] = userOptions[key];
      }
    }

    if (!options.cancelOnUserAction && options.passive) {
      options.passive = false;
      if (userOptions.passive) {
        console && console.warn(
          'animated-scroll-to:\n "passive" was set to "false" to prevent errors, ' +
          'as using "cancelOnUserAction: false" doesn\'t work with passive events.')
      }
    }

    if (desiredOffset instanceof HTMLElement) {
      if (userOptions.element && userOptions.element instanceof HTMLElement) {
        if (options.horizontal) {
          desiredOffset = (desiredOffset.getBoundingClientRect().left + userOptions.element.scrollLeft)
            - userOptions.element.getBoundingClientRect().left;
        } else {
          desiredOffset = (desiredOffset.getBoundingClientRect().top + userOptions.element.scrollTop)
            - userOptions.element.getBoundingClientRect().top;
        }
      } else if (options.horizontal) {
        var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        desiredOffset = scrollLeft + desiredOffset.getBoundingClientRect().left;
      } else {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        desiredOffset = scrollTop + desiredOffset.getBoundingClientRect().top;
      }
    }

    // Add additonal user offset
    desiredOffset += options.offset

    options.isWindow = options.element === window;

    var initialScrollPosition = null;
    var initialAxisScollPosition = 0;
    var maxScroll = null;

    if (options.isWindow) {
      if (options.horizontal) {
        // get cross browser scroll positions
        initialScrollPosition = window.scrollX || document.documentElement.scrollLeft;
        initialAxisScollPosition = window.scrollY || document.documentElement.scrollTop;
        // cross browser document height minus window height
        maxScroll = Math.max(
          document.body.scrollWidth, document.documentElement.scrollWidth,
          document.body.offsetWidth, document.documentElement.offsetWidth,
          document.body.clientWidth, document.documentElement.clientWidth
        ) - window.innerWidth;
      } else {
        // get cross browser scroll positions
        initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
        initialAxisScollPosition = window.scrollX || document.documentElement.scrollLeft;
        // cross browser document width minus window width
        maxScroll = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        ) - window.innerHeight;
      }
    } else {
      // DOM element
      if (options.horizontal) {
        initialScrollPosition = options.element.scrollLeft;
        maxScroll = options.element.scrollWidth - options.element.clientWidth;
      } else {
        initialScrollPosition = options.element.scrollTop;
        maxScroll = options.element.scrollHeight - options.element.clientHeight;
      }
    }

    // If the scroll position is greater than maximum available scroll
    if (desiredOffset > maxScroll) {
      desiredOffset = maxScroll;
    }

    // Calculate diff to scroll
    var diff = desiredOffset - initialScrollPosition;

    // Do nothing if the page is already there
    if (diff === 0) {
      // Execute callback if there is any
      if (options.onComplete && typeof options.onComplete === 'function') {
        options.onComplete()
      }

      return;
    }

    // Calculate duration of the scroll
    var duration = Math.abs(Math.round((diff / 1000) * options.speed));

    // Set minimum and maximum duration
    if (duration < options.minDuration) {
      duration = options.minDuration;
    } else if (duration > options.maxDuration) {
      duration = options.maxDuration;
    }

    var startingTime = Date.now();

    // Request animation frame ID
    var requestID = null;

    // Method handler
    var handleUserEvent = null;

    if (options.cancelOnUserAction) {
      // Set handler to cancel scroll on user action
      handleUserEvent = function() {
        removeListeners();
        cancelAnimationFrame(requestID);
      };
      window.addEventListener('keydown', handleUserEvent, { passive: options.passive });
      window.addEventListener('mousedown', handleUserEvent, { passive: options.passive });
    } else {
      // Set handler to prevent user actions while scroll is active
      handleUserEvent = function(e) { e.preventDefault(); };
      window.addEventListener('scroll', handleUserEvent, { passive: options.passive });
    }

    window.addEventListener('wheel', handleUserEvent, { passive: options.passive });
    window.addEventListener('touchstart', handleUserEvent, { passive: options.passive });

    var removeListeners = function () {
      window.removeEventListener('wheel', handleUserEvent);
      window.removeEventListener('touchstart', handleUserEvent);

      if (options.cancelOnUserAction) {
        window.removeEventListener('keydown', handleUserEvent);
        window.removeEventListener('mousedown', handleUserEvent);
      } else {
        window.removeEventListener('scroll', handleUserEvent);
      }
    };

    var step = function () {
      var timeDiff = Date.now() - startingTime;
      var t = (timeDiff / duration) - 1;
      var easing = t * t * t + 1;
      var scrollPosition = Math.round(initialScrollPosition + (diff * easing));

      var doScroll = function(position) {
        if (options.isWindow) {
          if (options.horizontal) {
            options.element.scrollTo(position, initialAxisScollPosition);
          } else {
            options.element.scrollTo(initialAxisScollPosition, position);
          }
        } else if (options.horizontal) {
          options.element.scrollLeft = position;
        } else {
          options.element.scrollTop = position;
        }
      }

      if (timeDiff < duration && scrollPosition !== desiredOffset) {
        // If scroll didn't reach desired offset or time is not elapsed
        // Scroll to a new position
        // And request a new step
        doScroll(scrollPosition);

        requestID = requestAnimationFrame(step);
      } else {
        // If the time elapsed or we reached the desired offset
        // Set scroll to the desired offset (when rounding made it to be off a pixel or two)
        // Clear animation frame to be sure
        doScroll(desiredOffset);

        cancelAnimationFrame(requestID);

        // Remove listeners
        removeListeners();

        // Animation is complete, execute callback if there is any
        if (options.onComplete && typeof options.onComplete === 'function') {
          options.onComplete()
        }
      }
    };

    // Start animating scroll
    requestID = requestAnimationFrame(step);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = __ANIMATE_SCROLL_TO;
      exports = module.exports;
    }
    exports.default = __ANIMATE_SCROLL_TO;
  } else if (window) {
    window.animateScrollTo = __ANIMATE_SCROLL_TO;
  }
}).call(this);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sZUFEVDtBQUVFLFlBQU0sb0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLGtFQURUO0FBRUUsaUJBQVMsZ1FBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGVBQUs7QUFGUCxTQURPLENBUlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BREssRUFrQkw7QUFDRSxlQUFPLDRFQURUO0FBRUUsaUJBQVMsMEdBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBhbmltYXRlU2Nyb2xsVG8gZnJvbSAnYW5pbWF0ZWQtc2Nyb2xsLXRvJztcclxuZnVuY3Rpb24gR2V0T2Zmc2V0KGVsKSB7XHJcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcclxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxyXG4gIH1cclxufVxyXG52YXIgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgZWw6ICcjcm9hZG1hcCcsXHJcbiAgZGF0YToge1xyXG4gICAgc3dpcGVyOiBudWxsLFxyXG4gICAgaXNPcGVuUG9wOiBmYWxzZSxcclxuICAgIG5vd1Bob3RvczogW10sXHJcbiAgICByb2FkbWFwRGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEb2N1bWVudGF0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIGEgcHVsbCByZXF1ZXN0IGZvciBNZXRhTWFzayB0byBpbnRlZ3JhdGlvbiBFTlMgd2l0aCBJUEZTJyxcclxuICAgICAgICAgICAgY29udGVudDogJ01ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIGlzIGdyZWF0IHByb2plY3QgaGVscHMgdXNlcnMgdG8gaW50ZXJhY3Qgd2l0aCBFdGhlcmV1bSwgYW5kIGZ1cnRoZXJtb3JlIGNhbiBiZSBtb3JlIHBvd2VyZnVsIGJ5IGFkZCBjb250ZW50IHJlc29sdmUgYnkgRU5TLCBzbyBQb3J0YWwgTmV0d29yayBidWlsZCBhIHdheSB0byByZXNvbHZlcyBFTlMgZG9tYWlucyAoLmV0aCkgdG8gSVBGUyBoYXNoIGFuZCByZWRpcmVjdHMgdG8gdXJsIGNvbnRlbnQuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NZXRhTWFzay9tZXRhbWFzay1leHRlbnNpb24vcHVsbC80NDA1JyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUNJUCAtIDEwNDQnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0V0aGVyZXVtQ29tbW9ud2VhbHRoL0VDTlMvcHVsbC8zJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gQ2xhc3NpYyBJbXByb3ZlbWVudCBQcm9wb3NhbCwgRUNJUC0xMDQ0JyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFQ0lQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFQ05TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bSBDbGFzc2ljJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bXByb2plY3QvRUNJUHMvcHVsbC85NCcsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUlQIC0gMTA2MicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZW5zZG9tYWlucy9lbnMvcHVsbC8yNzknLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBJbXByb3ZlbWVudCBQcm9wb3NhbCwgRUlQLTEwNjInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRU5TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bScsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvNycsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtL0VJUHMvcHVsbC8xMDYyJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0FwcGxpY2F0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdJbiBhZGRpdGlvbiB0byBFTlMsIEVDTlMsIFBvcnRhbCBOZXR3b3JrIG5vdyBzdXBwb3J0cyBXTlMgYXMgd2VsbC4nLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc3LzEyJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDYwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2VudHJhbGl6ZWQgV2VidWlsZGVyJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIOKAnGJsb2figJ0gZnVuY3Rpb24gYWRkZWQ8YnI+Mi4gR25vc2lzICYgRGFwcENvbiB0ZW1wbGF0ZSBpbXBsZW1lbnRlZCcsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzcvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgZG9tYWluIGJpZGRpbmcnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc2LzIyJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBwdWJsaWMgcmVzb2x2ZXIgPGEgaHJlZj1cImh0dHBzOi8vZXhwbG9yZXIud2FuY2hhaW4ub3JnL2Jsb2NrL2FkZHIvMHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJsaW5rX3RleHRcIj4weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQ8L3NwYW4+JyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNi8yMCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9leHBsb3Jlci53YW5jaGFpbi5vcmcvYmxvY2svYWRkci8weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgTWFya2V0cGxhY2UnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCB3YW5jaGFpbiBkb21haW4gbmFtZSBzZWFyY2hpbmcnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc2LzEzJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBpbmZ1cmEgPGEgaHJlZj1cImh0dHA6Ly93YW5jaGFpbi5wb3J0YWwubmV0d29yay9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImxpbmtfdGV4dFwiPndhbmNoYWluLnBvcnRhbC5uZXR3b3JrPC9hPicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzYvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly93YW5jaGFpbi5wb3J0YWwubmV0d29yay8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZXRlbnRyYWxpemVkIFdlYiBCdWlsZGVyJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIFVzZXIgcmVnaXN0cmF0aW9uIGZsb3cuPGJyPjIuIFBlcnNvbmFsIHByb2ZpbGUgYnVpbGRlci48YnI+My4gRGVjZW50cmFsaXplZCB3ZWJzaXRlIGRlcGxveSBoaXN0b3J5LicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMzAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL3dlYi5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdEZXNpZ24gYW4gdXNlciBkYXNoYm9hcmQgZm9yIHVzZXIgc2V0dGluZ3MsIGRvbWFpbiBtYW5hZ2VyLCBkb21haW4gcHVyY2hhc2UgaGlzdG9yeScsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMzAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2JldGEucG9ydGFsLm5ldHdvcmsnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvdGFsIE5ldHdvcmsgQ2hyb21lIEV4dGVuc2lvbiBFbmhhbmNlbWVudCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TLCBFQ05TLCBXTlMgUHVibGljIFJlc29sdmVyIGRhdGE8YnIvPjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUG9ydGFsTmV0d29yay9wb3J0YWwtbmV0d29yay1icm93c2VyLWV4dGVuc2lvbidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWV0YW1hc2sgRW5oYW5jZW1lbnQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvbWV0YW1hc2stZXh0ZW5zaW9uJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZWVwIGxlYXJuaW5nIG1vZGVsJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIEVuaGFuY2UgdHJhZGluZyBtYXRjaGluZyByYXRlIDxicj4yLiBXZSBjb2xsZWN0IG92ZXIgMW0gdG9wIHZhbHVlIGRvbWFpbnMgZnJvbSBjZW50cmFsaXplIGRvbWFpbnMgYW5kIGFsbCB0aGUgRXRoZXJldW0gZG9tYWlucy4gV2l0aCBkZWVwIGxlYXJuaW5nIHdlIGFyZSBhYmxlIHRvIG1ha2UgQUkgc3lzdGVtcyB3aGljaCBjYW4gcHJlZGljdCB0aGUgZG9tYWlucyB2YWx1ZS4gV2UgaGF2ZSB0d28ga2luZHMgb2Ygc3lzdGVtcywgb25lIGlzIHRvIGZpbmQgaGlnaCB2YWx1ZSBkb21haW5zICwgdGhlIG90aGVyIGlzIHRvIHByZWRpY3QgdGhlIHBvc3NpYmxlIHByaWNlIG9mIHRoZSBkb21haW5zLicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dIT0lTJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIFBhcmluZyBhbmQgY2xlYW5pbmcgYWxsIHRoZSBkb21haW5zIG9uIEV0aGVyZXVtLjxicj4yLiBCZWdpbiB0byBidWlsZCB1cCBFdGhlcmV1bSBDbGFzc2ljIFdIT0lTIHN5c3RlbSBhbmQgY29sbGVjdCBkYXRhcyBvbiBpdC4nLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPbmxpbmUgRGVjZW50cmFsaXplZCBXZWJzaXRlIEJ1aWxkZXInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyPGJyPjIuIEN1c3RvbWl6ZWQgd2Vic2l0ZSBkZXBsb3ltZW50PGJyPjMuIEJhY2tlbmQgY29udHJ1Y3N0aW9uJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8xOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHA6Ly9oMS5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBpbXByb3ZlbWVudCBSZWZhY3RvcmluZyB0aGUgdXNhYmlsaXR5IFJlZmFjdG9yaW5nIGFuZCBJbnRlZ3JhdGlvbiB3aXRoIGV0aGVyZXVtIFVJL1VYIGRlc2lnbiBlbmhhbmNlbWVudCBDb25zdHJ1Y3RpbmcgdGhlIGJhY2tlbmQgYXJjaGl0ZWN0dXJlIFNlY3VyaXR5IEVuaGFuY2VtZW50PGJyPjIuIENvbnN0cnVjdGluZyB1c2VyIHByb2ZpbGUgZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8xNicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9lZHVjYXRpb24uc3ZnJyxcclxuICAgICAgICBmbGFnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0lUIFNlZWQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgYW5kIE1yLiBCbG9jayB0ZWFtIHdlcmUgdmVyeSBob25vcmVkIHRvIGdldCBpbnZpdGVkIGJ5IE5ldyBUYWlwZWkgQ2l0eSBDb21wdXRlciBBc3NvY2lhdGUgdG8gc3BlYWsgYXQgSVQgU2VlZCB4IFRlY2hub2xvZ3kgdHJhaW5pbmcgcHJvZ3JhbS4gSVQgU2VlZCBpcyBhbiBlZHVjYXRpb24gY29tbXVuaXR5IHRoYXQgbGV0IGdyYWR1YXRpbmcgc3R1ZGVudHMgbGVhcm4gdmFyaW91cyB0cmVuZHMgYXJvdW5kIHRoZSB3b3JsZCwgc28gdGhleSBjYW4gYmUgd2VsbCBwcmVwYXJlZCBmb3IgdGhlaXIgY2FyZWVyIHBhdGggaW4gdGhlIGZ1dHVyZS4gQmFzaWMgY29uY2VwdCBvZiBCbG9ja2NoYWluICYgQXBwbGljYXRpb24gb2YgQmxvY2tjaGFpbiAmIEZ1dHVyZSBkZXZlbG9wbWVudCBvZiBCbG9ja2NoYWluJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDkzOS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQzLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0NC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDUuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ2LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0OC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDkuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTUwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTQuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTU4LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2MS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjUuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY3LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2OS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTc0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk4MC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5ODMuanBnJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzE5JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24gUGxhdGZvcm0nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnT3VyIGNvLWZvdW5kZXIsIENocmlzdG9waGVyIFNoZW4sIHdhcyBwcmVzZW50aW5nIGF0IHRoZSBcIllvdW5nIEVudHJlcHJlbmV1clwiIFBhbmVsIGR1cmluZyB0aGUgZXZlbnQuIEFzc2lzdCB1bml2ZXJzaXR5IHN0dWRlbnRzIHRvIGpvaW4gdGhlIGludGVybmF0aW9uYWwgU1VTUyBldmVudHMsIHRvIG5vdCBvbmx5IGJyaW5nIHRoZSBibG9ja2NoYWluIHRyZW5kcyB0byBUYWl3YW4sIGJ1dCBhbHNvIGVkdWNhdGUgbW9yZSBzdHVkZW50cyB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIGRldmVsb3AgYmxvY2tjaGFpbiB0ZWNobm9sb2d5LiBJdOKAmXMgb3VyIGdvYWwgdG8gY3VsdGl2YXRlIG1vcmUgYmxvY2tjaGFpbiBkZXZlbG9wZXJzLCB0byB0aHJpdmUgdGhlIHdob2xlIGNvbW11bml0eSwgYW5kIHdlIHN0YXJ0IHRoaXMgbWlzc2lvbiBmcm9tIFRhaXdhbi4nLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtcclxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEuanBnJywgJ2VkdWNhdGlvbi8yLmpwZycsICdlZHVjYXRpb24vMy5qcGcnLCAnZWR1Y2F0aW9uLzQuanBnJywgXHJcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi81LmpwZycsICdlZHVjYXRpb24vNi5qcGcnLCAnZWR1Y2F0aW9uLzcuanBnJywgJ2VkdWNhdGlvbi84LmpwZycsIFxyXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vOS5qcGcnLCAnZWR1Y2F0aW9uLzEwLmpwZycsICdlZHVjYXRpb24vMTEuanBnJywgJ2VkdWNhdGlvbi8xMi5qcGcnLCBcclxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEzLmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdFdmVudCcsXHJcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcclxuICAgICAgICBmbGFnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dvcmxkIEJsb2NrY2hhaW4gQ29uZmVyZW5jZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzcuanBnJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNy8xNyAtIDE4JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdBbmR5LCBDb21tdW5pdHkgbGVhZCBvZiBQb3J0YWwgTmV0d29yaycsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhIFdhbmNoYWluIFJvYWRzaG93JyxcclxuICAgICAgICAgICAgdGltZTogJzcvMTQnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvc3RlZCBIYWNrYXRob24gd2l0aCB0ZWFtdy5lIGFuZCBTT1BUJyxcclxuICAgICAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgICAgIHBob3RvczogW1xyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDM2LmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcclxuICAgICAgICAgICAgdGltZTogJzcvMTQgLSAxNScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUklTRSwgXCJUaGUgbGFyZ2VzdCB0ZWNoIGNvbmZlcmVuY2UgaW4gQXNpYVwiJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1ZpbmNlbnQgVHUsICBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzUucG5nJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdIb25nIEtvbmcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNy84IC0gMTEnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dhbmNoYWluIFJvYWRzaG93IEFpc2Egc3BlZWNoJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0NocmlzdG9waGVyLCBmb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MzQuanBnJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdLdWFsYSBMdW1wdXIsIE1hbHlzaWEnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNy83JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDaHJpc3RvcGhlciwgZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXHJcbiAgICAgICAgICAgIHBob3RvczogW1xyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDMzLmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSmFrYXJ0YSwgSW5kb25lc2lhJyxcclxuICAgICAgICAgICAgdGltZTogJzcvNScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiBGZXN0aXZhbDogVmlldG5hbSAnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQmxvY2tjaGFpbiBGZXN0aXZhbCBpcyBob3N0ZWQgYnkgSHVvYmkucHJvIGFuZCBjby1ob3N0ZWQgYnkgS3liZXIgTmV0d29yaycsXHJcbiAgICAgICAgICAgIHBob3RvczogW1xyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMy5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzQuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS81LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzcuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS84LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEzLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE2LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTcuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzEwMTIucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDE2LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQzNS5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0NTgucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNTQ4LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYxMy5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3MDUucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzM4LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTgyMC5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5MTQucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTQyLnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAyOS5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIxMDgucG5nJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdIbyBDaGkgTWluaCwgVmlldG5hbScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzI0IC0gMjUnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OHd6ZnZGNVZ0LU0mbGlzdD1QTGg3eU0tRFBFRFloRU1wajN2SGJCYWVTb2JGRExUcXJTJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JCUyAtIEtvcmVhIG1lZXQtdXAgJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODYwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODY0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODk3LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTAwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTA3LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTExLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEyLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE1LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE3LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTIzLmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTAgLSAxMicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmx1emVsbGUgeCBQb3J0YWwuTmV0d29yayBIYWNrYXRob24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIGhhY2thdGhvbiB3aXRoIEJsdXplbGxlIGF0IENhbmFkYSBWYW5jb3V2ZXInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NhbmFkYScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5LjMwJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxR3hEMFNGNU5RS2VMcWhPQ1dxUVVZSFBSQW9CZkhuL3ZpZXcnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01yLkJsb2NrIFggTWFsYXlzaWEnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXgnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ01hbGF5c2lhJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMjknLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlqaURUdTh2WHFXVWpiaklDbGxmel9MZi05N1ZnaXdxL3ZpZXcnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSwgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gVW5pdmVyc2UnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIEJsb2NrY2hhaW4gVW5pdmVyc2UgRXZlbnQgd2l0aCBNci4gQmxvY2snLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxLmpwZycsICdldmVudC9ldmVudDIuanBnJywgJ2V2ZW50L2V2ZW50My5qcGcnLCAnZXZlbnQvZXZlbnQ0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50NS5qcGcnLCAnZXZlbnQvZXZlbnQ2LmpwZycsICdldmVudC9ldmVudDcuanBnJywgJ2V2ZW50L2V2ZW50OC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDkuanBnJywgJ2V2ZW50L2V2ZW50MTAuanBnJywgJ2V2ZW50L2V2ZW50MTEuanBnJywgJ2V2ZW50L2V2ZW50MTIuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxMy5qcGcnLCAnZXZlbnQvZXZlbnQxNC5qcGcnLCAnZXZlbnQvZXZlbnQxNS5qcGcnLCAnZXZlbnQvZXZlbnQxNi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDE3LmpwZycsICdldmVudC9ldmVudDE4LmpwZycsICdldmVudC9ldmVudDE5LmpwZycsICdldmVudC9ldmVudDIwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjEuanBnJywgJ2V2ZW50L2V2ZW50MjIuanBnJywgJ2V2ZW50L2V2ZW50MjMuanBnJywgJ2V2ZW50L2V2ZW50MjQuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyNS5qcGcnLCAnZXZlbnQvZXZlbnQyNi5qcGcnLCAnZXZlbnQvZXZlbnQyNy5qcGcnLCAnZXZlbnQvZXZlbnQyOC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI5LmpwZycsICdldmVudC9ldmVudDMwLmpwZycsICdldmVudC9ldmVudDMxLmpwZycsICdldmVudC9ldmVudDMyLmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpd2FuJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMjcnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc1OTYxNzAyNDIyMjg1LycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCZXlvbmQgQmxvY2sgVG9reW8gU3VtbWl0JyxcclxuICAgICAgICAgICAgY29udGVudDogJ0JleW9uZCBCbG9jayBMaXZlc3RyZWFtIE1lZGlhIFBhcnRuZXInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Rva3lvLCBKYXBhbicsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzMtNScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxMzMwNzAxNTUyMDUyLycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTE2NDYzOTgxODcxNDkvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjQwNDcxNDc3Nzk4NC8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyA0JyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNjU5NTE0NzUyNTA0LycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGVjb25vbXknLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgU291dGggS29yZWEnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8yLTQnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NhZmUgJiBDcnlwdG8nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXggVHNhaSwgRm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnMy8zMCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NDY1MDUwODIwMzQ2MTQvJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LCAgICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUb2tlbjIwNDknLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdIb25nS29uZycsXHJcbiAgICAgICAgICAgIHRpbWU6ICczLzIwLTIxJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUFtTlFhN0p2d0IwJmxpc3Q9UExoN3lNLURQRURZanRYTzFFa3dNZXJWMkVKOEJjYmU0RicsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNb25leSAyMC8yMCBBc2lhJyxcclxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcclxuICAgICAgICAgICAgdGltZTogJzMvMTItMTQnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VWJkMDlPb1ZQME0mbGlzdD1QTGg3eU0tRFBFRFlpc2lUc0NBV2hERk5fMFRnWGFzZzM5JyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2Nrc2hvdyBDb2ludGVsZWdyYXBoIHggTXIuQmxvY2snLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXHJcbiAgICAgICAgICAgIHRpbWU6ICczLzknLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMjUxMjU1NDkxOTQxNDE4Mzk3JyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODIyNzQ0MzY3NzQ0MDE5LycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdlVG9ybyBYIE1yLiBCbG9jaycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdORU8gZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZSBhcyBhIFB5dGhvbiBEZXZlbG9wZXIgSm9obm55IEhzaWVoLCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrLCBQeXRob24gRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWknLFxyXG4gICAgICAgICAgICB0aW1lOiAnMi8yNCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIwODA0NTM1NDU2OTU2OTY4MDAnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwNzgyNTI4MjU2OTI2MS8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA4MDA1NzkyNTUxMjEwLycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB3YXRjaDp7XHJcbiAgICBpc09wZW5Qb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xyXG4gICAgICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwaG90b3NJbk1vZGFsOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9wZW5Db250ZW50Rm46IGZ1bmN0aW9uIChpZHgpIHtcclxuICAgICAgdGhpcy5tYXBEYXRhW2lkeF0ub3BlbiA9ICF0aGlzLm1hcERhdGFbaWR4XS5vcGVuO1xyXG4gICAgfSxcclxuICAgIG9wZW5Nb2RhbDogZnVuY3Rpb24ocGhvdG9BcnIpIHtcclxuICAgICAgdGhpcy5pc09wZW5Qb3AgPSB0cnVlO1xyXG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xyXG4gICAgfSxcclxuICAgIGNsb3NlTW9kYWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IFtdO1xyXG4gICAgfSxcclxuICAgIHNjcm9sbFRvQ2hhcHRlcjogZnVuY3Rpb24oaWR4KSB7XHJcbiAgICAgIGNvbnN0IGNoYXB0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXB0ZXInKTtcclxuICAgICAgY29uc3QgdGFyZ2V0Q2hhcHRlciA9IGNoYXB0ZXJzW2lkeF07XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBHZXRPZmZzZXQodGFyZ2V0Q2hhcHRlcik7XHJcbiAgICAgIGFuaW1hdGVTY3JvbGxUbyhlbGVtZW50VG9wLnRvcCAtIDEwMCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAvLyB3aW5kb3cuSW50ZXJjb20oXCJib290XCIsIHtcclxuICAgICAgLy8gICAgIGFwcF9pZDogXCJhbjUwemplY1wiXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICAvLyB3aW5kb3cuSW50ZXJjb20oXCJ1cGRhdGVcIik7XHJcbiAgICAgIHRoaXMuc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7IFxyXG4gIH1cclxufSkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBkZXNpcmVkT2Zmc2V0IC0gcGFnZSBvZmZzZXQgdG8gc2Nyb2xsIHRvXG4gIC8vIHNwZWVkIC0gZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBwZXIgMTAwMHB4XG4gIGZ1bmN0aW9uIF9fQU5JTUFURV9TQ1JPTExfVE8oZGVzaXJlZE9mZnNldCkge1xuICAgIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgbWluRHVyYXRpb246IDI1MCxcbiAgICAgIG1heER1cmF0aW9uOiAxNTAwLFxuICAgICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlLFxuICAgICAgZWxlbWVudDogd2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IG9wdGlvbnNLZXlzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbiAmJiBvcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHVzZXJPcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2FuaW1hdGVkLXNjcm9sbC10bzpcXG4gXCJwYXNzaXZlXCIgd2FzIHNldCB0byBcImZhbHNlXCIgdG8gcHJldmVudCBlcnJvcnMsICcgK1xuICAgICAgICAgICdhcyB1c2luZyBcImNhbmNlbE9uVXNlckFjdGlvbjogZmFsc2VcIiBkb2VzblxcJ3Qgd29yayB3aXRoIHBhc3NpdmUgZXZlbnRzLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKHVzZXJPcHRpb25zLmVsZW1lbnQgJiYgdXNlck9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxUb3AgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYWRkaXRvbmFsIHVzZXIgb2Zmc2V0XG4gICAgZGVzaXJlZE9mZnNldCArPSBvcHRpb25zLm9mZnNldFxuXG4gICAgb3B0aW9ucy5pc1dpbmRvdyA9IG9wdGlvbnMuZWxlbWVudCA9PT0gd2luZG93O1xuXG4gICAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IDA7XG4gICAgdmFyIG1heFNjcm9sbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IGhlaWdodCBtaW51cyB3aW5kb3cgaGVpZ2h0XG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgd2lkdGggbWludXMgd2luZG93IHdpZHRoXG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERPTSBlbGVtZW50XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIGF2YWlsYWJsZSBzY3JvbGxcbiAgICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgICAgZGVzaXJlZE9mZnNldCA9IG1heFNjcm9sbDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgICB2YXIgZGlmZiA9IGRlc2lyZWRPZmZzZXQgLSBpbml0aWFsU2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyhNYXRoLnJvdW5kKChkaWZmIC8gMTAwMCkgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgICAvLyBTZXQgbWluaW11bSBhbmQgbWF4aW11bSBkdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbiA8IG9wdGlvbnMubWluRHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID4gb3B0aW9ucy5tYXhEdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1heER1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgLy8gUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgSURcbiAgICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAgIC8vIE1ldGhvZCBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZVVzZXJFdmVudCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIGNhbmNlbCBzY3JvbGwgb24gdXNlciBhY3Rpb25cbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBzdGFydGluZ1RpbWU7XG4gICAgICB2YXIgdCA9ICh0aW1lRGlmZiAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICB2YXIgZWFzaW5nID0gdCAqIHQgKiB0ICsgMTtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgKGRpZmYgKiBlYXNpbmcpKTtcblxuICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8ocG9zaXRpb24sIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVEaWZmIDwgZHVyYXRpb24gJiYgc2Nyb2xsUG9zaXRpb24gIT09IGRlc2lyZWRPZmZzZXQpIHtcbiAgICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAgIC8vIFNjcm9sbCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAgICAvLyBBbmQgcmVxdWVzdCBhIG5ldyBzdGVwXG4gICAgICAgIGRvU2Nyb2xsKHNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdGltZSBlbGFwc2VkIG9yIHdlIHJlYWNoZWQgdGhlIGRlc2lyZWQgb2Zmc2V0XG4gICAgICAgIC8vIFNldCBzY3JvbGwgdG8gdGhlIGRlc2lyZWQgb2Zmc2V0ICh3aGVuIHJvdW5kaW5nIG1hZGUgaXQgdG8gYmUgb2ZmIGEgcGl4ZWwgb3IgdHdvKVxuICAgICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgICBkb1Njcm9sbChkZXNpcmVkT2Zmc2V0KTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGFuaW1hdGluZyBzY3JvbGxcbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH0gZWxzZSBpZiAod2luZG93KSB7XG4gICAgd2luZG93LmFuaW1hdGVTY3JvbGxUbyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iXX0=
