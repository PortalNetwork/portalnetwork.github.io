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
        photos: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sZUFEVDtBQUVFLFlBQU0sb0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLGtFQURUO0FBRUUsaUJBQVMsZ1FBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGVBQUs7QUFGUCxTQURPLENBUlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BREssRUFrQkw7QUFDRSxlQUFPLDRFQURUO0FBRUUsaUJBQVMsMEdBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3JvYWRtYXAnLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICByb2FkbWFwRGF0YTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIGEgcHVsbCByZXF1ZXN0IGZvciBNZXRhTWFzayB0byBpbnRlZ3JhdGlvbiBFTlMgd2l0aCBJUEZTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiBpcyBncmVhdCBwcm9qZWN0IGhlbHBzIHVzZXJzIHRvIGludGVyYWN0IHdpdGggRXRoZXJldW0sIGFuZCBmdXJ0aGVybW9yZSBjYW4gYmUgbW9yZSBwb3dlcmZ1bCBieSBhZGQgY29udGVudCByZXNvbHZlIGJ5IEVOUywgc28gUG9ydGFsIE5ldHdvcmsgYnVpbGQgYSB3YXkgdG8gcmVzb2x2ZXMgRU5TIGRvbWFpbnMgKC5ldGgpIHRvIElQRlMgaGFzaCBhbmQgcmVkaXJlY3RzIHRvIHVybCBjb250ZW50LicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMjknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vTWV0YU1hc2svbWV0YW1hc2stZXh0ZW5zaW9uL3B1bGwvNDQwNScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUNJUCAtIDEwNDQnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0V0aGVyZXVtQ29tbW9ud2VhbHRoL0VDTlMvcHVsbC8zJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIENsYXNzaWMgSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVDSVAtMTA0NCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVDSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVDTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtIENsYXNzaWMnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtcHJvamVjdC9FQ0lQcy9wdWxsLzk0JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVJUCAtIDEwNjInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZW5zZG9tYWlucy9lbnMvcHVsbC8yNzknLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVJUC0xMDYyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUlQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS83JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQXBwbGljYXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnSW4gYWRkaXRpb24gdG8gRU5TLCBFQ05TLCBQb3J0YWwgTmV0d29yayBub3cgc3VwcG9ydHMgV05TIGFzIHdlbGwuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNy8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNjAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2VudHJhbGl6ZWQgV2VidWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiDigJxibG9n4oCdIGZ1bmN0aW9uIGFkZGVkPGJyPjIuIEdub3NpcyAmIERhcHBDb24gdGVtcGxhdGUgaW1wbGVtZW50ZWQnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IGRvbWFpbiBiaWRkaW5nJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNi8yMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gcHVibGljIHJlc29sdmVyIDxhIGhyZWY9XCJodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+MHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0PC9zcGFuPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9leHBsb3Jlci53YW5jaGFpbi5vcmcvYmxvY2svYWRkci8weGQ1YmJmZTM0NTg1YmRiOTIxMDdhZDU4MDhkZDFhM2RmMWQ0ZDMwMTQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCB3YW5jaGFpbiBkb21haW4gbmFtZSBzZWFyY2hpbmcnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzEzJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbG5ldHdvcmsgaW50ZXJncmF0aW9uIHdpdGggV2FuY2hhaW4nLFxuICAgICAgICAgICAgY29udGVudDogJzEuIERlcGxveSB3YW5jaGFpbiBpbmZ1cmEgPGEgaHJlZj1cImh0dHA6Ly93YW5jaGFpbi5wb3J0YWwubmV0d29yay9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImxpbmtfdGV4dFwiPndhbmNoYWluLnBvcnRhbC5uZXR3b3JrPC9hPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2V0ZW50cmFsaXplZCBXZWIgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gZmxvdy48YnI+Mi4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyLjxicj4zLiBEZWNlbnRyYWxpemVkIHdlYnNpdGUgZGVwbG95IGhpc3RvcnkuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly93ZWIucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnRGVzaWduIGFuIHVzZXIgZGFzaGJvYXJkIGZvciB1c2VyIHNldHRpbmdzLCBkb21haW4gbWFuYWdlciwgZG9tYWluIHB1cmNoYXNlIGhpc3RvcnknLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2JldGEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm90YWwgTmV0d29yayBDaHJvbWUgRXh0ZW5zaW9uIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TLCBFQ05TLCBXTlMgUHVibGljIFJlc29sdmVyIGRhdGE8YnIvPjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvcG9ydGFsLW5ldHdvcmstYnJvd3Nlci1leHRlbnNpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNZXRhbWFzayBFbmhhbmNlbWVudCcsXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlZXAgbGVhcm5pbmcgbW9kZWwnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIEVuaGFuY2UgdHJhZGluZyBtYXRjaGluZyByYXRlIDxicj4yLiBXZSBjb2xsZWN0IG92ZXIgMW0gdG9wIHZhbHVlIGRvbWFpbnMgZnJvbSBjZW50cmFsaXplIGRvbWFpbnMgYW5kIGFsbCB0aGUgRXRoZXJldW0gZG9tYWlucy4gV2l0aCBkZWVwIGxlYXJuaW5nIHdlIGFyZSBhYmxlIHRvIG1ha2UgQUkgc3lzdGVtcyB3aGljaCBjYW4gcHJlZGljdCB0aGUgZG9tYWlucyB2YWx1ZS4gV2UgaGF2ZSB0d28ga2luZHMgb2Ygc3lzdGVtcywgb25lIGlzIHRvIGZpbmQgaGlnaCB2YWx1ZSBkb21haW5zICwgdGhlIG90aGVyIGlzIHRvIHByZWRpY3QgdGhlIHBvc3NpYmxlIHByaWNlIG9mIHRoZSBkb21haW5zLicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dIT0lTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQYXJpbmcgYW5kIGNsZWFuaW5nIGFsbCB0aGUgZG9tYWlucyBvbiBFdGhlcmV1bS48YnI+Mi4gQmVnaW4gdG8gYnVpbGQgdXAgRXRoZXJldW0gQ2xhc3NpYyBXSE9JUyBzeXN0ZW0gYW5kIGNvbGxlY3QgZGF0YXMgb24gaXQuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnT25saW5lIERlY2VudHJhbGl6ZWQgV2Vic2l0ZSBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXI8YnI+Mi4gQ3VzdG9taXplZCB3ZWJzaXRlIGRlcGxveW1lbnQ8YnI+My4gQmFja2VuZCBjb250cnVjc3Rpb24nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9lZHVjYXRpb24uc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0lUIFNlZWQnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuIEJhc2ljIGNvbmNlcHQgb2YgQmxvY2tjaGFpbiAmIEFwcGxpY2F0aW9uIG9mIEJsb2NrY2hhaW4gJiBGdXR1cmUgZGV2ZWxvcG1lbnQgb2YgQmxvY2tjaGFpbicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDkzOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTU0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2OS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTcxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk4MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnNS8xOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24gUGxhdGZvcm0nLFxuICAgICAgICAgICAgY29udGVudDogJ091ciBjby1mb3VuZGVyLCBDaHJpc3RvcGhlciBTaGVuLCB3YXMgcHJlc2VudGluZyBhdCB0aGUgXCJZb3VuZyBFbnRyZXByZW5ldXJcIiBQYW5lbCBkdXJpbmcgdGhlIGV2ZW50LiBBc3Npc3QgdW5pdmVyc2l0eSBzdHVkZW50cyB0byBqb2luIHRoZSBpbnRlcm5hdGlvbmFsIFNVU1MgZXZlbnRzLCB0byBub3Qgb25seSBicmluZyB0aGUgYmxvY2tjaGFpbiB0cmVuZHMgdG8gVGFpd2FuLCBidXQgYWxzbyBlZHVjYXRlIG1vcmUgc3R1ZGVudHMgdG8gaGF2ZSB0aGUgYWJpbGl0eSB0byBkZXZlbG9wIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gSXTigJlzIG91ciBnb2FsIHRvIGN1bHRpdmF0ZSBtb3JlIGJsb2NrY2hhaW4gZGV2ZWxvcGVycywgdG8gdGhyaXZlIHRoZSB3aG9sZSBjb21tdW5pdHksIGFuZCB3ZSBzdGFydCB0aGlzIG1pc3Npb24gZnJvbSBUYWl3YW4uJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEuanBnJywgJ2VkdWNhdGlvbi8yLmpwZycsICdlZHVjYXRpb24vMy5qcGcnLCAnZWR1Y2F0aW9uLzQuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vNS5qcGcnLCAnZWR1Y2F0aW9uLzYuanBnJywgJ2VkdWNhdGlvbi83LmpwZycsICdlZHVjYXRpb24vOC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi85LmpwZycsICdlZHVjYXRpb24vMTAuanBnJywgJ2VkdWNhdGlvbi8xMS5qcGcnLCAnZWR1Y2F0aW9uLzEyLmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0V2ZW50JyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dvcmxkIEJsb2NrY2hhaW4gQ29uZmVyZW5jZScsXG4gICAgICAgICAgICBjb250ZW50OiAnVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzcvMTcgLSAxOCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQW5keSwgQ29tbXVuaXR5IGxlYWQgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhIFdhbmNoYWluIFJvYWRzaG93JyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzE0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvc3RlZCBIYWNrYXRob24gd2l0aCB0ZWFtdy5lIGFuZCBTT1BUJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDM2LmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzcvMTQgLSAxNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdSSVNFLCBcIlRoZSBsYXJnZXN0IHRlY2ggY29uZmVyZW5jZSBpbiBBc2lhXCInLFxuICAgICAgICAgICAgY29udGVudDogJ1ZpbmNlbnQgVHUsICBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQzNS5wbmcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG9uZyBLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICc3LzggLSAxMScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQ2hyaXN0b3BoZXIsIGZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDM0LmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdLdWFsYSBMdW1wdXIsIE1hbHlzaWEnLFxuICAgICAgICAgICAgdGltZTogJzcvNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXYW5jaGFpbiBSb2Fkc2hvdyBBaXNhIHNwZWVjaCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQ2hyaXN0b3BoZXIsIGZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDMzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdKYWthcnRhLCBJbmRvbmVzaWEnLFxuICAgICAgICAgICAgdGltZTogJzcvNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIEZlc3RpdmFsOiBWaWV0bmFtICcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmxvY2tjaGFpbiBGZXN0aXZhbCBpcyBob3N0ZWQgYnkgSHVvYmkucHJvIGFuZCBjby1ob3N0ZWQgYnkgS3liZXIgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS81LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS84LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTAxMi5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDE2LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MzUucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQ1OC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNTQ4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE2MTMucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTcwNS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzM4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE4MjAucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTkxNC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTQyLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIwMjkucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjEwOC5wbmcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG8gQ2hpIE1pbmgsIFZpZXRuYW0nLFxuICAgICAgICAgICAgdGltZTogJzUvMjQgLSAyNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTh3emZ2RjVWdC1NJmxpc3Q9UExoN3lNLURQRURZaEVNcGozdkhiQmFlU29iRkRMVHFyUycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JCUyAtIEtvcmVhIG1lZXQtdXAgJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBhbmQgTXIuIEJsb2NrIHRlYW0gd2VyZSB2ZXJ5IGhvbm9yZWQgdG8gZ2V0IGludml0ZWQgYnkgTmV3IFRhaXBlaSBDaXR5IENvbXB1dGVyIEFzc29jaWF0ZSB0byBzcGVhayBhdCBJVCBTZWVkIHggVGVjaG5vbG9neSB0cmFpbmluZyBwcm9ncmFtLiBJVCBTZWVkIGlzIGFuIGVkdWNhdGlvbiBjb21tdW5pdHkgdGhhdCBsZXQgZ3JhZHVhdGluZyBzdHVkZW50cyBsZWFybiB2YXJpb3VzIHRyZW5kcyBhcm91bmQgdGhlIHdvcmxkLCBzbyB0aGV5IGNhbiBiZSB3ZWxsIHByZXBhcmVkIGZvciB0aGVpciBjYXJlZXIgcGF0aCBpbiB0aGUgZnV0dXJlLicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODYwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg2NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4OTcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTAwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkwNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTExLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MjMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYScsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMCAtIDEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JsdXplbGxlIHggUG9ydGFsLk5ldHdvcmsgSGFja2F0aG9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDby1ob3N0ZWQgaGFja2F0aG9uIHdpdGggQmx1emVsbGUgYXQgQ2FuYWRhIFZhbmNvdXZlcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdDYW5hZGEnLFxuICAgICAgICAgICAgdGltZTogJzQvMjkuMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2gxLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbDFHeEQwU0Y1TlFLZUxxaE9DV3FRVVlIUFJBb0JmSG4vdmlldycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTXIuQmxvY2sgWCBNYWxheXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXgnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTWFsYXlzaWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMjknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJamlEVHU4dlhxV1VqYmpJQ2xsZnpfTGYtOTdWZ2l3cS92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NzgzMTYyMjIzNTI5My8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gVW5pdmVyc2UnLFxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBCbG9ja2NoYWluIFVuaXZlcnNlIEV2ZW50IHdpdGggTXIuIEJsb2NrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxLmpwZycsICdldmVudC9ldmVudDIuanBnJywgJ2V2ZW50L2V2ZW50My5qcGcnLCAnZXZlbnQvZXZlbnQ0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDUuanBnJywgJ2V2ZW50L2V2ZW50Ni5qcGcnLCAnZXZlbnQvZXZlbnQ3LmpwZycsICdldmVudC9ldmVudDguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50OS5qcGcnLCAnZXZlbnQvZXZlbnQxMC5qcGcnLCAnZXZlbnQvZXZlbnQxMS5qcGcnLCAnZXZlbnQvZXZlbnQxMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxMy5qcGcnLCAnZXZlbnQvZXZlbnQxNC5qcGcnLCAnZXZlbnQvZXZlbnQxNS5qcGcnLCAnZXZlbnQvZXZlbnQxNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxNy5qcGcnLCAnZXZlbnQvZXZlbnQxOC5qcGcnLCAnZXZlbnQvZXZlbnQxOS5qcGcnLCAnZXZlbnQvZXZlbnQyMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyMS5qcGcnLCAnZXZlbnQvZXZlbnQyMi5qcGcnLCAnZXZlbnQvZXZlbnQyMy5qcGcnLCAnZXZlbnQvZXZlbnQyNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyNS5qcGcnLCAnZXZlbnQvZXZlbnQyNi5qcGcnLCAnZXZlbnQvZXZlbnQyNy5qcGcnLCAnZXZlbnQvZXZlbnQyOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyOS5qcGcnLCAnZXZlbnQvZXZlbnQzMC5qcGcnLCAnZXZlbnQvZXZlbnQzMS5qcGcnLCAnZXZlbnQvZXZlbnQzMi5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI3JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc1OTYxNzAyNDIyMjg1LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0JleW9uZCBCbG9jayBUb2t5byBTdW1taXQnLFxuICAgICAgICAgICAgY29udGVudDogJ0JleW9uZCBCbG9jayBMaXZlc3RyZWFtIE1lZGlhIFBhcnRuZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVG9reW8sIEphcGFuJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzMtNScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTEzMzA3MDE1NTIwNTIvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTE2NDYzOTgxODcxNDkvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI0MDQ3MTQ3Nzc5ODQvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gNCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI2NTk1MTQ3NTI1MDQvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlY29ub215JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIFNvdXRoIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzItNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDYWZlICYgQ3J5cHRvJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCBUc2FpLCBGb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODQ2NTA1MDgyMDM0NjE0LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUb2tlbjIwNDknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIb25nS29uZycsXG4gICAgICAgICAgICB0aW1lOiAnMy8yMC0yMScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUFtTlFhN0p2d0IwJmxpc3Q9UExoN3lNLURQRURZanRYTzFFa3dNZXJWMkVKOEJjYmU0RicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01vbmV5IDIwLzIwIEFzaWEnLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzMvMTItMTQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1VYmQwOU9vVlAwTSZsaXN0PVBMaDd5TS1EUEVEWWlzaVRzQ0FXaERGTl8wVGdYYXNnMzknLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja3Nob3cgQ29pbnRlbGVncmFwaCB4IE1yLkJsb2NrJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFZpbmNlbnQgVHUsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjI1MTI1NTQ5MTk0MTQxODM5NycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODIyNzQ0MzY3NzQ0MDE5LycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ2VUb3JvIFggTXIuIEJsb2NrJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdORU8gZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZSBhcyBhIFB5dGhvbiBEZXZlbG9wZXIgSm9obm55IEhzaWVoLCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrLCBQeXRob24gRGV2ZWxvcGVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaScsXG4gICAgICAgICAgICB0aW1lOiAnMi8yNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjA4MDQ1MzU0NTY5NTY5NjgwMCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDc4MjUyODI1NjkyNjEvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDgwMDU3OTI1NTEyMTAvJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgd2F0Y2g6e1xuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xuICAgICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwaG90b3NJbk1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vd1Bob3RvcztcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbkNvbnRlbnRGbjogZnVuY3Rpb24gKGlkeCkge1xuICAgICAgdGhpcy5tYXBEYXRhW2lkeF0ub3BlbiA9ICF0aGlzLm1hcERhdGFbaWR4XS5vcGVuO1xuICAgIH0sXG4gICAgb3Blbk1vZGFsOiBmdW5jdGlvbihwaG90b0Fycikge1xuICAgICAgdGhpcy5pc09wZW5Qb3AgPSB0cnVlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBwaG90b0FycjtcbiAgICB9LFxuICAgIGNsb3NlTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pc09wZW5Qb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMubm93UGhvdG9zID0gW107XG4gICAgfSxcbiAgICBzY3JvbGxUb0NoYXB0ZXI6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgY29uc3QgY2hhcHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcHRlcicpO1xuICAgICAgY29uc3QgdGFyZ2V0Q2hhcHRlciA9IGNoYXB0ZXJzW2lkeF07XG4gICAgICBjb25zdCBlbGVtZW50VG9wID0gR2V0T2Zmc2V0KHRhcmdldENoYXB0ZXIpO1xuICAgICAgYW5pbWF0ZVNjcm9sbFRvKGVsZW1lbnRUb3AudG9wIC0gMTAwKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gd2luZG93LkludGVyY29tKFwiYm9vdFwiLCB7XG4gICAgICAvLyAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gd2luZG93LkludGVyY29tKFwidXBkYXRlXCIpO1xuICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgIH0sXG4gICAgICB9KTsgXG4gIH1cbn0pIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gZGVzaXJlZE9mZnNldCAtIHBhZ2Ugb2Zmc2V0IHRvIHNjcm9sbCB0b1xuICAvLyBzcGVlZCAtIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgcGVyIDEwMDBweFxuICBmdW5jdGlvbiBfX0FOSU1BVEVfU0NST0xMX1RPKGRlc2lyZWRPZmZzZXQpIHtcbiAgICB2YXIgdXNlck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIG1pbkR1cmF0aW9uOiAyNTAsXG4gICAgICBtYXhEdXJhdGlvbjogMTUwMCxcbiAgICAgIGNhbmNlbE9uVXNlckFjdGlvbjogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHdpbmRvdyxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgb25Db21wbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIG9mZnNldDogMFxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgb3B0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9uc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBvcHRpb25zS2V5c1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB1c2VyT3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW2tleV0gPSB1c2VyT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24gJiYgb3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICdhbmltYXRlZC1zY3JvbGwtdG86XFxuIFwicGFzc2l2ZVwiIHdhcyBzZXQgdG8gXCJmYWxzZVwiIHRvIHByZXZlbnQgZXJyb3JzLCAnICtcbiAgICAgICAgICAnYXMgdXNpbmcgXCJjYW5jZWxPblVzZXJBY3Rpb246IGZhbHNlXCIgZG9lc25cXCd0IHdvcmsgd2l0aCBwYXNzaXZlIGV2ZW50cy4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXNpcmVkT2Zmc2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5lbGVtZW50ICYmIHVzZXJPcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQpXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsTGVmdCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsVG9wICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGFkZGl0b25hbCB1c2VyIG9mZnNldFxuICAgIGRlc2lyZWRPZmZzZXQgKz0gb3B0aW9ucy5vZmZzZXRcblxuICAgIG9wdGlvbnMuaXNXaW5kb3cgPSBvcHRpb25zLmVsZW1lbnQgPT09IHdpbmRvdztcblxuICAgIHZhciBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgIHZhciBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSAwO1xuICAgIHZhciBtYXhTY3JvbGwgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCBoZWlnaHQgbWludXMgd2luZG93IGhlaWdodFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICApIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IHdpZHRoIG1pbnVzIHdpbmRvdyB3aWR0aFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICApIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBET00gZWxlbWVudFxuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbEhlaWdodCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSBhdmFpbGFibGUgc2Nyb2xsXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgPiBtYXhTY3JvbGwpIHtcbiAgICAgIGRlc2lyZWRPZmZzZXQgPSBtYXhTY3JvbGw7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGRpZmYgdG8gc2Nyb2xsXG4gICAgdmFyIGRpZmYgPSBkZXNpcmVkT2Zmc2V0IC0gaW5pdGlhbFNjcm9sbFBvc2l0aW9uO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiB0aGUgcGFnZSBpcyBhbHJlYWR5IHRoZXJlXG4gICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsXG4gICAgdmFyIGR1cmF0aW9uID0gTWF0aC5hYnMoTWF0aC5yb3VuZCgoZGlmZiAvIDEwMDApICogb3B0aW9ucy5zcGVlZCkpO1xuXG4gICAgLy8gU2V0IG1pbmltdW0gYW5kIG1heGltdW0gZHVyYXRpb25cbiAgICBpZiAoZHVyYXRpb24gPCBvcHRpb25zLm1pbkR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWluRHVyYXRpb247XG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA+IG9wdGlvbnMubWF4RHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5tYXhEdXJhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRpbmdUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIC8vIFJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIElEXG4gICAgdmFyIHJlcXVlc3RJRCA9IG51bGw7XG5cbiAgICAvLyBNZXRob2QgaGFuZGxlclxuICAgIHZhciBoYW5kbGVVc2VyRXZlbnQgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uKSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBjYW5jZWwgc2Nyb2xsIG9uIHVzZXIgYWN0aW9uXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIHByZXZlbnQgdXNlciBhY3Rpb25zIHdoaWxlIHNjcm9sbCBpcyBhY3RpdmVcbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG5cbiAgICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50KTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGltZURpZmYgPSBEYXRlLm5vdygpIC0gc3RhcnRpbmdUaW1lO1xuICAgICAgdmFyIHQgPSAodGltZURpZmYgLyBkdXJhdGlvbikgLSAxO1xuICAgICAgdmFyIGVhc2luZyA9IHQgKiB0ICogdCArIDE7XG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSBNYXRoLnJvdW5kKGluaXRpYWxTY3JvbGxQb3NpdGlvbiArIChkaWZmICogZWFzaW5nKSk7XG5cbiAgICAgIHZhciBkb1Njcm9sbCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlzV2luZG93KSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKHBvc2l0aW9uLCBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8oaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lRGlmZiA8IGR1cmF0aW9uICYmIHNjcm9sbFBvc2l0aW9uICE9PSBkZXNpcmVkT2Zmc2V0KSB7XG4gICAgICAgIC8vIElmIHNjcm9sbCBkaWRuJ3QgcmVhY2ggZGVzaXJlZCBvZmZzZXQgb3IgdGltZSBpcyBub3QgZWxhcHNlZFxuICAgICAgICAvLyBTY3JvbGwgdG8gYSBuZXcgcG9zaXRpb25cbiAgICAgICAgLy8gQW5kIHJlcXVlc3QgYSBuZXcgc3RlcFxuICAgICAgICBkb1Njcm9sbChzY3JvbGxQb3NpdGlvbik7XG5cbiAgICAgICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHRpbWUgZWxhcHNlZCBvciB3ZSByZWFjaGVkIHRoZSBkZXNpcmVkIG9mZnNldFxuICAgICAgICAvLyBTZXQgc2Nyb2xsIHRvIHRoZSBkZXNpcmVkIG9mZnNldCAod2hlbiByb3VuZGluZyBtYWRlIGl0IHRvIGJlIG9mZiBhIHBpeGVsIG9yIHR3bylcbiAgICAgICAgLy8gQ2xlYXIgYW5pbWF0aW9uIGZyYW1lIHRvIGJlIHN1cmVcbiAgICAgICAgZG9TY3JvbGwoZGVzaXJlZE9mZnNldCk7XG5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcblxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzXG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBpcyBjb21wbGV0ZSwgZXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgICAgaWYgKG9wdGlvbnMub25Db21wbGV0ZSAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTdGFydCBhbmltYXRpbmcgc2Nyb2xsXG4gICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuICAgIH1cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICB9IGVsc2UgaWYgKHdpbmRvdykge1xuICAgIHdpbmRvdy5hbmltYXRlU2Nyb2xsVG8gPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuIl19
