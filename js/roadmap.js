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
    }, {
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
        content: '1. Support domain bidding',
        photos: [],
        location: '',
        time: '6/22',
        progress: 25,
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
        progress: 25,
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
        progress: 25,
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
        progress: 25,
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
        content: '1. Support .eth and .etc domains, .wan is under development<br>2. Use multihash function to convert ENS, ECNS, WNS Public Resolver data<>3. Let users can directly visit decentralized website',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sV0FEVDtBQUVFLFlBQU0sZ0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLFNBRFQ7QUFFRSxpQkFBUyxnYUFGWDtBQUdFLGdCQUFRLENBQ04sMkJBRE0sRUFFTiwyQkFGTSxFQUdOLDJCQUhNLEVBSU4sMkJBSk0sRUFLTiwyQkFMTSxFQU1OLDJCQU5NLEVBT04sMkJBUE0sRUFRTiwyQkFSTSxFQVNOLDJCQVRNLEVBVU4sMkJBVk0sRUFXTiwyQkFYTSxFQVlOLDJCQVpNLEVBYU4sMkJBYk0sRUFjTiwyQkFkTSxFQWVOLDJCQWZNLEVBZ0JOLDJCQWhCTSxFQWlCTiwyQkFqQk0sRUFrQk4sMkJBbEJNLEVBbUJOLDJCQW5CTSxFQW9CTiwyQkFwQk0sQ0FIVjtBQXlCRSxrQkFBVSxnQkF6Qlo7QUEwQkUsY0FBTSxNQTFCUjtBQTJCRSxrQkFBVSxHQTNCWjtBQTRCRSxlQUFPLEVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3JvYWRtYXAnLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICByb2FkbWFwRGF0YTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbicsXG4gICAgICAgIGljb246ICcuL2ltYWdlcy9yb2FkbWFwL2VkdWNhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSVQgU2VlZCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgYW5kIE1yLiBCbG9jayB0ZWFtIHdlcmUgdmVyeSBob25vcmVkIHRvIGdldCBpbnZpdGVkIGJ5IE5ldyBUYWlwZWkgQ2l0eSBDb21wdXRlciBBc3NvY2lhdGUgdG8gc3BlYWsgYXQgSVQgU2VlZCB4IFRlY2hub2xvZ3kgdHJhaW5pbmcgcHJvZ3JhbS4gSVQgU2VlZCBpcyBhbiBlZHVjYXRpb24gY29tbXVuaXR5IHRoYXQgbGV0IGdyYWR1YXRpbmcgc3R1ZGVudHMgbGVhcm4gdmFyaW91cyB0cmVuZHMgYXJvdW5kIHRoZSB3b3JsZCwgc28gdGhleSBjYW4gYmUgd2VsbCBwcmVwYXJlZCBmb3IgdGhlaXIgY2FyZWVyIHBhdGggaW4gdGhlIGZ1dHVyZS4gQmFzaWMgY29uY2VwdCBvZiBCbG9ja2NoYWluICYgQXBwbGljYXRpb24gb2YgQmxvY2tjaGFpbiAmIEZ1dHVyZSBkZXZlbG9wbWVudCBvZiBCbG9ja2NoYWluJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTM5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0My5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0Ni5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDkuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTUxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTYxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk3NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5ODMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbiBQbGF0Zm9ybScsXG4gICAgICAgICAgICBjb250ZW50OiAnT3VyIGNvLWZvdW5kZXIsIENocmlzdG9waGVyIFNoZW4sIHdhcyBwcmVzZW50aW5nIGF0IHRoZSBcIllvdW5nIEVudHJlcHJlbmV1clwiIFBhbmVsIGR1cmluZyB0aGUgZXZlbnQuIEFzc2lzdCB1bml2ZXJzaXR5IHN0dWRlbnRzIHRvIGpvaW4gdGhlIGludGVybmF0aW9uYWwgU1VTUyBldmVudHMsIHRvIG5vdCBvbmx5IGJyaW5nIHRoZSBibG9ja2NoYWluIHRyZW5kcyB0byBUYWl3YW4sIGJ1dCBhbHNvIGVkdWNhdGUgbW9yZSBzdHVkZW50cyB0byBoYXZlIHRoZSBhYmlsaXR5IHRvIGRldmVsb3AgYmxvY2tjaGFpbiB0ZWNobm9sb2d5LiBJdOKAmXMgb3VyIGdvYWwgdG8gY3VsdGl2YXRlIG1vcmUgYmxvY2tjaGFpbiBkZXZlbG9wZXJzLCB0byB0aHJpdmUgdGhlIHdob2xlIGNvbW11bml0eSwgYW5kIHdlIHN0YXJ0IHRoaXMgbWlzc2lvbiBmcm9tIFRhaXdhbi4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMS5qcGcnLCAnZWR1Y2F0aW9uLzIuanBnJywgJ2VkdWNhdGlvbi8zLmpwZycsICdlZHVjYXRpb24vNC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi81LmpwZycsICdlZHVjYXRpb24vNi5qcGcnLCAnZWR1Y2F0aW9uLzcuanBnJywgJ2VkdWNhdGlvbi84LmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzkuanBnJywgJ2VkdWNhdGlvbi8xMC5qcGcnLCAnZWR1Y2F0aW9uLzExLmpwZycsICdlZHVjYXRpb24vMTIuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vMTMuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnNC8xNy0xOCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0V2ZW50JyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gRmVzdGl2YWw6IFZpZXRuYW0gJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCbG9ja2NoYWluIEZlc3RpdmFsIGlzIGhvc3RlZCBieSBIdW9iaS5wcm8gYW5kIGNvLWhvc3RlZCBieSBLeWJlciBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS80LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS83LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMDEyLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MTYucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQzNS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDU4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE1NDgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYxMy5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzA1LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3MzgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTgyMC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTE0LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5NDIucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAyOS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMTA4LnBuZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIbyBDaGkgTWluaCwgVmlldG5hbScsXG4gICAgICAgICAgICB0aW1lOiAnNS8yNCAtIDI1JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OHd6ZnZGNVZ0LU0mbGlzdD1QTGg3eU0tRFBFRFloRU1wajN2SGJCYWVTb2JGRExUcXJTJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQkJTIC0gS29yZWEgbWVldC11cCAnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4NjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODY0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg5Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MDAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTA3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkyMy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwIC0gMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmx1emVsbGUgeCBQb3J0YWwuTmV0d29yayBIYWNrYXRob24nLFxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBoYWNrYXRob24gd2l0aCBCbHV6ZWxsZSBhdCBDYW5hZGEgVmFuY291dmVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NhbmFkYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOS4zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlqaURUdTh2WHFXVWpiaklDbGxmel9MZi05N1ZnaXdxL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiBVbml2ZXJzZScsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIEJsb2NrY2hhaW4gVW5pdmVyc2UgRXZlbnQgd2l0aCBNci4gQmxvY2snLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEuanBnJywgJ2V2ZW50L2V2ZW50Mi5qcGcnLCAnZXZlbnQvZXZlbnQzLmpwZycsICdldmVudC9ldmVudDQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50NS5qcGcnLCAnZXZlbnQvZXZlbnQ2LmpwZycsICdldmVudC9ldmVudDcuanBnJywgJ2V2ZW50L2V2ZW50OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ5LmpwZycsICdldmVudC9ldmVudDEwLmpwZycsICdldmVudC9ldmVudDExLmpwZycsICdldmVudC9ldmVudDEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEzLmpwZycsICdldmVudC9ldmVudDE0LmpwZycsICdldmVudC9ldmVudDE1LmpwZycsICdldmVudC9ldmVudDE2LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDE3LmpwZycsICdldmVudC9ldmVudDE4LmpwZycsICdldmVudC9ldmVudDE5LmpwZycsICdldmVudC9ldmVudDIwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDIxLmpwZycsICdldmVudC9ldmVudDIyLmpwZycsICdldmVudC9ldmVudDIzLmpwZycsICdldmVudC9ldmVudDI0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI1LmpwZycsICdldmVudC9ldmVudDI2LmpwZycsICdldmVudC9ldmVudDI3LmpwZycsICdldmVudC9ldmVudDI4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI5LmpwZycsICdldmVudC9ldmVudDMwLmpwZycsICdldmVudC9ldmVudDMxLmpwZycsICdldmVudC9ldmVudDMyLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMjcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NzU5NjE3MDI0MjIyODUvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmV5b25kIEJsb2NrIFRva3lvIFN1bW1pdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmV5b25kIEJsb2NrIExpdmVzdHJlYW0gTWVkaWEgUGFydG5lcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMy01JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTMzMDcwMTU1MjA1Mi8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTY0NjM5ODE4NzE0OS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAzJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjQwNDcxNDc3Nzk4NC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyA0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjY1OTUxNDc1MjUwNC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVjb25vbXknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgU291dGggS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMi00JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhZmUgJiBDcnlwdG8nLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4IFRzYWksIEZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NDY1MDUwODIwMzQ2MTQvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LCAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rva2VuMjA0OScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmdLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzIwLTIxJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QW1OUWE3SnZ3QjAmbGlzdD1QTGg3eU0tRFBFRFlqdFhPMUVrd01lclYyRUo4QmNiZTRGJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9uZXkgMjAvMjAgQXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnMy8xMi0xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVViZDA5T29WUDBNJmxpc3Q9UExoN3lNLURQRURZaXNpVHNDQVdoREZOXzBUZ1hhc2czOScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2Nrc2hvdyBDb2ludGVsZWdyYXBoIHggTXIuQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMjUxMjU1NDkxOTQxNDE4Mzk3JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MjI3NDQzNjc3NDQwMTkvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnZVRvcm8gWCBNci4gQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ05FTyBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIGEgUHl0aG9uIERldmVsb3BlciBKb2hubnkgSHNpZWgsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmssIFB5dGhvbiBEZXZlbG9wZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpJyxcbiAgICAgICAgICAgIHRpbWU6ICcyLzI0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMDgwNDUzNTQ1Njk1Njk2ODAwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwNzgyNTI4MjU2OTI2MS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwODAwNTc5MjU1MTIxMC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIGEgcHVsbCByZXF1ZXN0IGZvciBNZXRhTWFzayB0byBpbnRlZ3JhdGlvbiBFTlMgd2l0aCBJUEZTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiBpcyBncmVhdCBwcm9qZWN0IGhlbHBzIHVzZXJzIHRvIGludGVyYWN0IHdpdGggRXRoZXJldW0sIGFuZCBmdXJ0aGVybW9yZSBjYW4gYmUgbW9yZSBwb3dlcmZ1bCBieSBhZGQgY29udGVudCByZXNvbHZlIGJ5IEVOUywgc28gUG9ydGFsIE5ldHdvcmsgYnVpbGQgYSB3YXkgdG8gcmVzb2x2ZXMgRU5TIGRvbWFpbnMgKC5ldGgpIHRvIElQRlMgaGFzaCBhbmQgcmVkaXJlY3RzIHRvIHVybCBjb250ZW50LicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMjknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vTWV0YU1hc2svbWV0YW1hc2stZXh0ZW5zaW9uL3B1bGwvNDQwNScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUNJUCAtIDEwNDQnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0V0aGVyZXVtQ29tbW9ud2VhbHRoL0VDTlMvcHVsbC8zJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIENsYXNzaWMgSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVDSVAtMTA0NCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVDSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVDTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtIENsYXNzaWMnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtcHJvamVjdC9FQ0lQcy9wdWxsLzk0JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVJUCAtIDEwNjInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZW5zZG9tYWlucy9lbnMvcHVsbC8yNzknLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVJUC0xMDYyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUlQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS83JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQXBwbGljYXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCBkb21haW4gYmlkZGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gcHVibGljIHJlc29sdmVyIDxhIGhyZWY9XCJodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+MHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0PC9zcGFuPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IHdhbmNoYWluIGRvbWFpbiBuYW1lIHNlYXJjaGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTMnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gaW5mdXJhIDxhIGhyZWY9XCJodHRwOi8vd2FuY2hhaW4ucG9ydGFsLm5ldHdvcmsvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJsaW5rX3RleHRcIj53YW5jaGFpbi5wb3J0YWwubmV0d29yazwvYT4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAyNSxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2V0ZW50cmFsaXplZCBXZWIgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gZmxvdy48YnI+Mi4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyLjxicj4zLiBEZWNlbnRyYWxpemVkIHdlYnNpdGUgZGVwbG95IGhpc3RvcnkuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly93ZWIucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnRGVzaWduIGFuIHVzZXIgZGFzaGJvYXJkIGZvciB1c2VyIHNldHRpbmdzLCBkb21haW4gbWFuYWdlciwgZG9tYWluIHB1cmNoYXNlIGhpc3RvcnknLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2JldGEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm90YWwgTmV0d29yayBDaHJvbWUgRXh0ZW5zaW9uIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TLCBFQ05TLCBXTlMgUHVibGljIFJlc29sdmVyIGRhdGE8PjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvcG9ydGFsLW5ldHdvcmstYnJvd3Nlci1leHRlbnNpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNZXRhbWFzayBFbmhhbmNlbWVudCcsXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlZXAgbGVhcm5pbmcgbW9kZWwnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIEVuaGFuY2UgdHJhZGluZyBtYXRjaGluZyByYXRlIDxicj4yLiBXZSBjb2xsZWN0IG92ZXIgMW0gdG9wIHZhbHVlIGRvbWFpbnMgZnJvbSBjZW50cmFsaXplIGRvbWFpbnMgYW5kIGFsbCB0aGUgRXRoZXJldW0gZG9tYWlucy4gV2l0aCBkZWVwIGxlYXJuaW5nIHdlIGFyZSBhYmxlIHRvIG1ha2UgQUkgc3lzdGVtcyB3aGljaCBjYW4gcHJlZGljdCB0aGUgZG9tYWlucyB2YWx1ZS4gV2UgaGF2ZSB0d28ga2luZHMgb2Ygc3lzdGVtcywgb25lIGlzIHRvIGZpbmQgaGlnaCB2YWx1ZSBkb21haW5zICwgdGhlIG90aGVyIGlzIHRvIHByZWRpY3QgdGhlIHBvc3NpYmxlIHByaWNlIG9mIHRoZSBkb21haW5zLicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dIT0lTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQYXJpbmcgYW5kIGNsZWFuaW5nIGFsbCB0aGUgZG9tYWlucyBvbiBFdGhlcmV1bS48YnI+Mi4gQmVnaW4gdG8gYnVpbGQgdXAgRXRoZXJldW0gQ2xhc3NpYyBXSE9JUyBzeXN0ZW0gYW5kIGNvbGxlY3QgZGF0YXMgb24gaXQuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnT25saW5lIERlY2VudHJhbGl6ZWQgV2Vic2l0ZSBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXI8YnI+Mi4gQ3VzdG9taXplZCB3ZWJzaXRlIGRlcGxveW1lbnQ8YnI+My4gQmFja2VuZCBjb250cnVjc3Rpb24nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgd2F0Y2g6e1xuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xuICAgICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwaG90b3NJbk1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vd1Bob3RvcztcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbkNvbnRlbnRGbjogZnVuY3Rpb24gKGlkeCkge1xuICAgICAgdGhpcy5tYXBEYXRhW2lkeF0ub3BlbiA9ICF0aGlzLm1hcERhdGFbaWR4XS5vcGVuO1xuICAgIH0sXG4gICAgb3Blbk1vZGFsOiBmdW5jdGlvbihwaG90b0Fycikge1xuICAgICAgdGhpcy5pc09wZW5Qb3AgPSB0cnVlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBwaG90b0FycjtcbiAgICB9LFxuICAgIGNsb3NlTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pc09wZW5Qb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMubm93UGhvdG9zID0gW107XG4gICAgfSxcbiAgICBzY3JvbGxUb0NoYXB0ZXI6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgY29uc3QgY2hhcHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcHRlcicpO1xuICAgICAgY29uc3QgdGFyZ2V0Q2hhcHRlciA9IGNoYXB0ZXJzW2lkeF07XG4gICAgICBjb25zdCBlbGVtZW50VG9wID0gR2V0T2Zmc2V0KHRhcmdldENoYXB0ZXIpO1xuICAgICAgYW5pbWF0ZVNjcm9sbFRvKGVsZW1lbnRUb3AudG9wIC0gMTAwKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gd2luZG93LkludGVyY29tKFwiYm9vdFwiLCB7XG4gICAgICAvLyAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gd2luZG93LkludGVyY29tKFwidXBkYXRlXCIpO1xuICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgIH0sXG4gICAgICB9KTsgXG4gIH1cbn0pIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gZGVzaXJlZE9mZnNldCAtIHBhZ2Ugb2Zmc2V0IHRvIHNjcm9sbCB0b1xuICAvLyBzcGVlZCAtIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgcGVyIDEwMDBweFxuICBmdW5jdGlvbiBfX0FOSU1BVEVfU0NST0xMX1RPKGRlc2lyZWRPZmZzZXQpIHtcbiAgICB2YXIgdXNlck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIG1pbkR1cmF0aW9uOiAyNTAsXG4gICAgICBtYXhEdXJhdGlvbjogMTUwMCxcbiAgICAgIGNhbmNlbE9uVXNlckFjdGlvbjogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHdpbmRvdyxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgb25Db21wbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIG9mZnNldDogMFxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgb3B0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9uc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBvcHRpb25zS2V5c1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB1c2VyT3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW2tleV0gPSB1c2VyT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24gJiYgb3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICdhbmltYXRlZC1zY3JvbGwtdG86XFxuIFwicGFzc2l2ZVwiIHdhcyBzZXQgdG8gXCJmYWxzZVwiIHRvIHByZXZlbnQgZXJyb3JzLCAnICtcbiAgICAgICAgICAnYXMgdXNpbmcgXCJjYW5jZWxPblVzZXJBY3Rpb246IGZhbHNlXCIgZG9lc25cXCd0IHdvcmsgd2l0aCBwYXNzaXZlIGV2ZW50cy4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXNpcmVkT2Zmc2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5lbGVtZW50ICYmIHVzZXJPcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQpXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsTGVmdCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsVG9wICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGFkZGl0b25hbCB1c2VyIG9mZnNldFxuICAgIGRlc2lyZWRPZmZzZXQgKz0gb3B0aW9ucy5vZmZzZXRcblxuICAgIG9wdGlvbnMuaXNXaW5kb3cgPSBvcHRpb25zLmVsZW1lbnQgPT09IHdpbmRvdztcblxuICAgIHZhciBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgIHZhciBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSAwO1xuICAgIHZhciBtYXhTY3JvbGwgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCBoZWlnaHQgbWludXMgd2luZG93IGhlaWdodFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICApIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IHdpZHRoIG1pbnVzIHdpbmRvdyB3aWR0aFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICApIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBET00gZWxlbWVudFxuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbEhlaWdodCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSBhdmFpbGFibGUgc2Nyb2xsXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgPiBtYXhTY3JvbGwpIHtcbiAgICAgIGRlc2lyZWRPZmZzZXQgPSBtYXhTY3JvbGw7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGRpZmYgdG8gc2Nyb2xsXG4gICAgdmFyIGRpZmYgPSBkZXNpcmVkT2Zmc2V0IC0gaW5pdGlhbFNjcm9sbFBvc2l0aW9uO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiB0aGUgcGFnZSBpcyBhbHJlYWR5IHRoZXJlXG4gICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsXG4gICAgdmFyIGR1cmF0aW9uID0gTWF0aC5hYnMoTWF0aC5yb3VuZCgoZGlmZiAvIDEwMDApICogb3B0aW9ucy5zcGVlZCkpO1xuXG4gICAgLy8gU2V0IG1pbmltdW0gYW5kIG1heGltdW0gZHVyYXRpb25cbiAgICBpZiAoZHVyYXRpb24gPCBvcHRpb25zLm1pbkR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWluRHVyYXRpb247XG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA+IG9wdGlvbnMubWF4RHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5tYXhEdXJhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRpbmdUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIC8vIFJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIElEXG4gICAgdmFyIHJlcXVlc3RJRCA9IG51bGw7XG5cbiAgICAvLyBNZXRob2QgaGFuZGxlclxuICAgIHZhciBoYW5kbGVVc2VyRXZlbnQgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uKSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBjYW5jZWwgc2Nyb2xsIG9uIHVzZXIgYWN0aW9uXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIHByZXZlbnQgdXNlciBhY3Rpb25zIHdoaWxlIHNjcm9sbCBpcyBhY3RpdmVcbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG5cbiAgICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50KTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGltZURpZmYgPSBEYXRlLm5vdygpIC0gc3RhcnRpbmdUaW1lO1xuICAgICAgdmFyIHQgPSAodGltZURpZmYgLyBkdXJhdGlvbikgLSAxO1xuICAgICAgdmFyIGVhc2luZyA9IHQgKiB0ICogdCArIDE7XG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSBNYXRoLnJvdW5kKGluaXRpYWxTY3JvbGxQb3NpdGlvbiArIChkaWZmICogZWFzaW5nKSk7XG5cbiAgICAgIHZhciBkb1Njcm9sbCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlzV2luZG93KSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKHBvc2l0aW9uLCBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8oaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lRGlmZiA8IGR1cmF0aW9uICYmIHNjcm9sbFBvc2l0aW9uICE9PSBkZXNpcmVkT2Zmc2V0KSB7XG4gICAgICAgIC8vIElmIHNjcm9sbCBkaWRuJ3QgcmVhY2ggZGVzaXJlZCBvZmZzZXQgb3IgdGltZSBpcyBub3QgZWxhcHNlZFxuICAgICAgICAvLyBTY3JvbGwgdG8gYSBuZXcgcG9zaXRpb25cbiAgICAgICAgLy8gQW5kIHJlcXVlc3QgYSBuZXcgc3RlcFxuICAgICAgICBkb1Njcm9sbChzY3JvbGxQb3NpdGlvbik7XG5cbiAgICAgICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHRpbWUgZWxhcHNlZCBvciB3ZSByZWFjaGVkIHRoZSBkZXNpcmVkIG9mZnNldFxuICAgICAgICAvLyBTZXQgc2Nyb2xsIHRvIHRoZSBkZXNpcmVkIG9mZnNldCAod2hlbiByb3VuZGluZyBtYWRlIGl0IHRvIGJlIG9mZiBhIHBpeGVsIG9yIHR3bylcbiAgICAgICAgLy8gQ2xlYXIgYW5pbWF0aW9uIGZyYW1lIHRvIGJlIHN1cmVcbiAgICAgICAgZG9TY3JvbGwoZGVzaXJlZE9mZnNldCk7XG5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcblxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzXG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBpcyBjb21wbGV0ZSwgZXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgICAgaWYgKG9wdGlvbnMub25Db21wbGV0ZSAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTdGFydCBhbmltYXRpbmcgc2Nyb2xsXG4gICAgcmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuICAgIH1cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICB9IGVsc2UgaWYgKHdpbmRvdykge1xuICAgIHdpbmRvdy5hbmltYXRlU2Nyb2xsVG8gPSBfX0FOSU1BVEVfU0NST0xMX1RPO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuIl19
