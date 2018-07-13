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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sZUFEVDtBQUVFLFlBQU0sb0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLGtFQURUO0FBRUUsaUJBQVMsZ1FBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJBQU8sRUFEVDtBQUVFLGVBQUs7QUFGUCxTQURPLENBUlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BREssRUFrQkw7QUFDRSxlQUFPLDRFQURUO0FBRUUsaUJBQVMsMEdBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsRUFKWjtBQUtFLGNBQU0sTUFMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxDQUNQO0FBQ0UsaUJB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3JvYWRtYXAnLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICByb2FkbWFwRGF0YTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIGEgcHVsbCByZXF1ZXN0IGZvciBNZXRhTWFzayB0byBpbnRlZ3JhdGlvbiBFTlMgd2l0aCBJUEZTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiBpcyBncmVhdCBwcm9qZWN0IGhlbHBzIHVzZXJzIHRvIGludGVyYWN0IHdpdGggRXRoZXJldW0sIGFuZCBmdXJ0aGVybW9yZSBjYW4gYmUgbW9yZSBwb3dlcmZ1bCBieSBhZGQgY29udGVudCByZXNvbHZlIGJ5IEVOUywgc28gUG9ydGFsIE5ldHdvcmsgYnVpbGQgYSB3YXkgdG8gcmVzb2x2ZXMgRU5TIGRvbWFpbnMgKC5ldGgpIHRvIElQRlMgaGFzaCBhbmQgcmVkaXJlY3RzIHRvIHVybCBjb250ZW50LicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMjknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vTWV0YU1hc2svbWV0YW1hc2stZXh0ZW5zaW9uL3B1bGwvNDQwNScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUNJUCAtIDEwNDQnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0V0aGVyZXVtQ29tbW9ud2VhbHRoL0VDTlMvcHVsbC8zJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIENsYXNzaWMgSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVDSVAtMTA0NCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVDSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVDTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtIENsYXNzaWMnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtcHJvamVjdC9FQ0lQcy9wdWxsLzk0JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVJUCAtIDEwNjInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZW5zZG9tYWlucy9lbnMvcHVsbC8yNzknLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVJUC0xMDYyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUlQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS83JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQXBwbGljYXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXG4gICAgICAgIGZsYWdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCBkb21haW4gYmlkZGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gcHVibGljIHJlc29sdmVyIDxhIGhyZWY9XCJodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibGlua190ZXh0XCI+MHhkNWJiZmUzNDU4NWJkYjkyMTA3YWQ1ODA4ZGQxYTNkZjFkNGQzMDE0PC9zcGFuPicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMjAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2V4cGxvcmVyLndhbmNoYWluLm9yZy9ibG9jay9hZGRyLzB4ZDViYmZlMzQ1ODViZGI5MjEwN2FkNTgwOGRkMWEzZGYxZDRkMzAxNCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IHdhbmNoYWluIGRvbWFpbiBuYW1lIHNlYXJjaGluZycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzYvMTMnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDI1LFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWxuZXR3b3JrIGludGVyZ3JhdGlvbiB3aXRoIFdhbmNoYWluJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBEZXBsb3kgd2FuY2hhaW4gaW5mdXJhIDxhIGhyZWY9XCJodHRwOi8vd2FuY2hhaW4ucG9ydGFsLm5ldHdvcmsvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJsaW5rX3RleHRcIj53YW5jaGFpbi5wb3J0YWwubmV0d29yazwvYT4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc2LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAyNSxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL3dhbmNoYWluLnBvcnRhbC5uZXR3b3JrLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIERlY2V0ZW50cmFsaXplZCBXZWIgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gZmxvdy48YnI+Mi4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyLjxicj4zLiBEZWNlbnRyYWxpemVkIHdlYnNpdGUgZGVwbG95IGhpc3RvcnkuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly93ZWIucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnRGVzaWduIGFuIHVzZXIgZGFzaGJvYXJkIGZvciB1c2VyIHNldHRpbmdzLCBkb21haW4gbWFuYWdlciwgZG9tYWluIHB1cmNoYXNlIGhpc3RvcnknLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2JldGEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm90YWwgTmV0d29yayBDaHJvbWUgRXh0ZW5zaW9uIEVuaGFuY2VtZW50JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TLCBFQ05TLCBXTlMgUHVibGljIFJlc29sdmVyIGRhdGE8PjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1BvcnRhbE5ldHdvcmsvcG9ydGFsLW5ldHdvcmstYnJvd3Nlci1leHRlbnNpb24nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNZXRhbWFzayBFbmhhbmNlbWVudCcsXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlZXAgbGVhcm5pbmcgbW9kZWwnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIEVuaGFuY2UgdHJhZGluZyBtYXRjaGluZyByYXRlIDxicj4yLiBXZSBjb2xsZWN0IG92ZXIgMW0gdG9wIHZhbHVlIGRvbWFpbnMgZnJvbSBjZW50cmFsaXplIGRvbWFpbnMgYW5kIGFsbCB0aGUgRXRoZXJldW0gZG9tYWlucy4gV2l0aCBkZWVwIGxlYXJuaW5nIHdlIGFyZSBhYmxlIHRvIG1ha2UgQUkgc3lzdGVtcyB3aGljaCBjYW4gcHJlZGljdCB0aGUgZG9tYWlucyB2YWx1ZS4gV2UgaGF2ZSB0d28ga2luZHMgb2Ygc3lzdGVtcywgb25lIGlzIHRvIGZpbmQgaGlnaCB2YWx1ZSBkb21haW5zICwgdGhlIG90aGVyIGlzIHRvIHByZWRpY3QgdGhlIHBvc3NpYmxlIHByaWNlIG9mIHRoZSBkb21haW5zLicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1dIT0lTJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQYXJpbmcgYW5kIGNsZWFuaW5nIGFsbCB0aGUgZG9tYWlucyBvbiBFdGhlcmV1bS48YnI+Mi4gQmVnaW4gdG8gYnVpbGQgdXAgRXRoZXJldW0gQ2xhc3NpYyBXSE9JUyBzeXN0ZW0gYW5kIGNvbGxlY3QgZGF0YXMgb24gaXQuJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnT25saW5lIERlY2VudHJhbGl6ZWQgV2Vic2l0ZSBCdWlsZGVyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXI8YnI+Mi4gQ3VzdG9taXplZCB3ZWJzaXRlIGRlcGxveW1lbnQ8YnI+My4gQmFja2VuZCBjb250cnVjc3Rpb24nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzE5JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24nLFxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9lZHVjYXRpb24uc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0lUIFNlZWQnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuIEJhc2ljIGNvbmNlcHQgb2YgQmxvY2tjaGFpbiAmIEFwcGxpY2F0aW9uIG9mIEJsb2NrY2hhaW4gJiBGdXR1cmUgZGV2ZWxvcG1lbnQgb2YgQmxvY2tjaGFpbicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDkzOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDMuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ5LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTU0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2MS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY1LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjcuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2OS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTcxLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NzQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk4MC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnNS8xOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFZHVjYXRpb24gUGxhdGZvcm0nLFxuICAgICAgICAgICAgY29udGVudDogJ091ciBjby1mb3VuZGVyLCBDaHJpc3RvcGhlciBTaGVuLCB3YXMgcHJlc2VudGluZyBhdCB0aGUgXCJZb3VuZyBFbnRyZXByZW5ldXJcIiBQYW5lbCBkdXJpbmcgdGhlIGV2ZW50LiBBc3Npc3QgdW5pdmVyc2l0eSBzdHVkZW50cyB0byBqb2luIHRoZSBpbnRlcm5hdGlvbmFsIFNVU1MgZXZlbnRzLCB0byBub3Qgb25seSBicmluZyB0aGUgYmxvY2tjaGFpbiB0cmVuZHMgdG8gVGFpd2FuLCBidXQgYWxzbyBlZHVjYXRlIG1vcmUgc3R1ZGVudHMgdG8gaGF2ZSB0aGUgYWJpbGl0eSB0byBkZXZlbG9wIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gSXTigJlzIG91ciBnb2FsIHRvIGN1bHRpdmF0ZSBtb3JlIGJsb2NrY2hhaW4gZGV2ZWxvcGVycywgdG8gdGhyaXZlIHRoZSB3aG9sZSBjb21tdW5pdHksIGFuZCB3ZSBzdGFydCB0aGlzIG1pc3Npb24gZnJvbSBUYWl3YW4uJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEuanBnJywgJ2VkdWNhdGlvbi8yLmpwZycsICdlZHVjYXRpb24vMy5qcGcnLCAnZWR1Y2F0aW9uLzQuanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vNS5qcGcnLCAnZWR1Y2F0aW9uLzYuanBnJywgJ2VkdWNhdGlvbi83LmpwZycsICdlZHVjYXRpb24vOC5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi85LmpwZycsICdlZHVjYXRpb24vMTAuanBnJywgJ2VkdWNhdGlvbi8xMS5qcGcnLCAnZWR1Y2F0aW9uLzEyLmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzEzLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0V2ZW50JyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gRmVzdGl2YWw6IFZpZXRuYW0gJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCbG9ja2NoYWluIEZlc3RpdmFsIGlzIGhvc3RlZCBieSBIdW9iaS5wcm8gYW5kIGNvLWhvc3RlZCBieSBLeWJlciBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS80LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS83LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNi5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNy5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMS5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMDEyLnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MTYucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQzNS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDU4LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE1NDgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTYxMy5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzA1LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3MzgucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTgyMC5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTE0LnBuZycsXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE5NDIucG5nJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjAyOS5wbmcnLFxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMTA4LnBuZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdIbyBDaGkgTWluaCwgVmlldG5hbScsXG4gICAgICAgICAgICB0aW1lOiAnNS8yNCAtIDI1JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OHd6ZnZGNVZ0LU0mbGlzdD1QTGg3eU0tRFBFRFloRU1wajN2SGJCYWVTb2JGRExUcXJTJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQkJTIC0gS29yZWEgbWVldC11cCAnLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuJyxcbiAgICAgICAgICAgIHBob3RvczogW1xuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA4NjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wODY0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg5Ny5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MDAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTA3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTEuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvQkJTLzA5MTUuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L0JCUy8wOTE3LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkyMy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIEtvcmVhJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwIC0gMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmx1emVsbGUgeCBQb3J0YWwuTmV0d29yayBIYWNrYXRob24nLFxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBoYWNrYXRob24gd2l0aCBCbHV6ZWxsZSBhdCBDYW5hZGEgVmFuY291dmVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NhbmFkYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOS4zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vaDEucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlqaURUdTh2WHFXVWpiaklDbGxmel9MZi05N1ZnaXdxL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tjaGFpbiBVbml2ZXJzZScsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIEJsb2NrY2hhaW4gVW5pdmVyc2UgRXZlbnQgd2l0aCBNci4gQmxvY2snLFxuICAgICAgICAgICAgcGhvdG9zOiBbXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEuanBnJywgJ2V2ZW50L2V2ZW50Mi5qcGcnLCAnZXZlbnQvZXZlbnQzLmpwZycsICdldmVudC9ldmVudDQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50NS5qcGcnLCAnZXZlbnQvZXZlbnQ2LmpwZycsICdldmVudC9ldmVudDcuanBnJywgJ2V2ZW50L2V2ZW50OC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ5LmpwZycsICdldmVudC9ldmVudDEwLmpwZycsICdldmVudC9ldmVudDExLmpwZycsICdldmVudC9ldmVudDEyLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDEzLmpwZycsICdldmVudC9ldmVudDE0LmpwZycsICdldmVudC9ldmVudDE1LmpwZycsICdldmVudC9ldmVudDE2LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDE3LmpwZycsICdldmVudC9ldmVudDE4LmpwZycsICdldmVudC9ldmVudDE5LmpwZycsICdldmVudC9ldmVudDIwLmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDIxLmpwZycsICdldmVudC9ldmVudDIyLmpwZycsICdldmVudC9ldmVudDIzLmpwZycsICdldmVudC9ldmVudDI0LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI1LmpwZycsICdldmVudC9ldmVudDI2LmpwZycsICdldmVudC9ldmVudDI3LmpwZycsICdldmVudC9ldmVudDI4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDI5LmpwZycsICdldmVudC9ldmVudDMwLmpwZycsICdldmVudC9ldmVudDMxLmpwZycsICdldmVudC9ldmVudDMyLmpwZycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMjcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NzU5NjE3MDI0MjIyODUvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmV5b25kIEJsb2NrIFRva3lvIFN1bW1pdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmV5b25kIEJsb2NrIExpdmVzdHJlYW0gTWVkaWEgUGFydG5lcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMy01JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTMzMDcwMTU1MjA1Mi8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTY0NjM5ODE4NzE0OS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAzJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjQwNDcxNDc3Nzk4NC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyA0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjY1OTUxNDc1MjUwNC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVjb25vbXknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgU291dGggS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMi00JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhZmUgJiBDcnlwdG8nLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4IFRzYWksIEZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NDY1MDUwODIwMzQ2MTQvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LCAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rva2VuMjA0OScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmdLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzIwLTIxJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QW1OUWE3SnZ3QjAmbGlzdD1QTGg3eU0tRFBFRFlqdFhPMUVrd01lclYyRUo4QmNiZTRGJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9uZXkgMjAvMjAgQXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnMy8xMi0xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVViZDA5T29WUDBNJmxpc3Q9UExoN3lNLURQRURZaXNpVHNDQVdoREZOXzBUZ1hhc2czOScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2Nrc2hvdyBDb2ludGVsZWdyYXBoIHggTXIuQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMjUxMjU1NDkxOTQxNDE4Mzk3JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MjI3NDQzNjc3NDQwMTkvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnZVRvcm8gWCBNci4gQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ05FTyBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIGEgUHl0aG9uIERldmVsb3BlciBKb2hubnkgSHNpZWgsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmssIFB5dGhvbiBEZXZlbG9wZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpJyxcbiAgICAgICAgICAgIHRpbWU6ICcyLzI0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMDgwNDUzNTQ1Njk1Njk2ODAwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwNzgyNTI4MjU2OTI2MS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwODAwNTc5MjU1MTIxMC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3YXRjaDp7XG4gICAgaXNPcGVuUG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT57XG4gICAgICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ29udGVudEZuOiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XG4gICAgfSxcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKHBob3RvQXJyKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xuICAgIH0sXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBbXTtcbiAgICB9LFxuICAgIHNjcm9sbFRvQ2hhcHRlcjogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBjb25zdCBjaGFwdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFwdGVyJyk7XG4gICAgICBjb25zdCB0YXJnZXRDaGFwdGVyID0gY2hhcHRlcnNbaWR4XTtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBHZXRPZmZzZXQodGFyZ2V0Q2hhcHRlcik7XG4gICAgICBhbmltYXRlU2Nyb2xsVG8oZWxlbWVudFRvcC50b3AgLSAxMDApO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyB3aW5kb3cuSW50ZXJjb20oXCJib290XCIsIHtcbiAgICAgIC8vICAgICBhcHBfaWQ6IFwiYW41MHpqZWNcIlxuICAgICAgLy8gfSk7XG4gICAgICAvLyB3aW5kb3cuSW50ZXJjb20oXCJ1cGRhdGVcIik7XG4gICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgIH0pOyBcbiAgfVxufSkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBkZXNpcmVkT2Zmc2V0IC0gcGFnZSBvZmZzZXQgdG8gc2Nyb2xsIHRvXG4gIC8vIHNwZWVkIC0gZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBwZXIgMTAwMHB4XG4gIGZ1bmN0aW9uIF9fQU5JTUFURV9TQ1JPTExfVE8oZGVzaXJlZE9mZnNldCkge1xuICAgIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgbWluRHVyYXRpb246IDI1MCxcbiAgICAgIG1heER1cmF0aW9uOiAxNTAwLFxuICAgICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlLFxuICAgICAgZWxlbWVudDogd2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IG9wdGlvbnNLZXlzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbiAmJiBvcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHVzZXJPcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2FuaW1hdGVkLXNjcm9sbC10bzpcXG4gXCJwYXNzaXZlXCIgd2FzIHNldCB0byBcImZhbHNlXCIgdG8gcHJldmVudCBlcnJvcnMsICcgK1xuICAgICAgICAgICdhcyB1c2luZyBcImNhbmNlbE9uVXNlckFjdGlvbjogZmFsc2VcIiBkb2VzblxcJ3Qgd29yayB3aXRoIHBhc3NpdmUgZXZlbnRzLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKHVzZXJPcHRpb25zLmVsZW1lbnQgJiYgdXNlck9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxUb3AgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYWRkaXRvbmFsIHVzZXIgb2Zmc2V0XG4gICAgZGVzaXJlZE9mZnNldCArPSBvcHRpb25zLm9mZnNldFxuXG4gICAgb3B0aW9ucy5pc1dpbmRvdyA9IG9wdGlvbnMuZWxlbWVudCA9PT0gd2luZG93O1xuXG4gICAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IDA7XG4gICAgdmFyIG1heFNjcm9sbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IGhlaWdodCBtaW51cyB3aW5kb3cgaGVpZ2h0XG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgd2lkdGggbWludXMgd2luZG93IHdpZHRoXG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERPTSBlbGVtZW50XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIGF2YWlsYWJsZSBzY3JvbGxcbiAgICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgICAgZGVzaXJlZE9mZnNldCA9IG1heFNjcm9sbDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgICB2YXIgZGlmZiA9IGRlc2lyZWRPZmZzZXQgLSBpbml0aWFsU2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyhNYXRoLnJvdW5kKChkaWZmIC8gMTAwMCkgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgICAvLyBTZXQgbWluaW11bSBhbmQgbWF4aW11bSBkdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbiA8IG9wdGlvbnMubWluRHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID4gb3B0aW9ucy5tYXhEdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1heER1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgLy8gUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgSURcbiAgICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAgIC8vIE1ldGhvZCBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZVVzZXJFdmVudCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIGNhbmNlbCBzY3JvbGwgb24gdXNlciBhY3Rpb25cbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBzdGFydGluZ1RpbWU7XG4gICAgICB2YXIgdCA9ICh0aW1lRGlmZiAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICB2YXIgZWFzaW5nID0gdCAqIHQgKiB0ICsgMTtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgKGRpZmYgKiBlYXNpbmcpKTtcblxuICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8ocG9zaXRpb24sIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVEaWZmIDwgZHVyYXRpb24gJiYgc2Nyb2xsUG9zaXRpb24gIT09IGRlc2lyZWRPZmZzZXQpIHtcbiAgICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAgIC8vIFNjcm9sbCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAgICAvLyBBbmQgcmVxdWVzdCBhIG5ldyBzdGVwXG4gICAgICAgIGRvU2Nyb2xsKHNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdGltZSBlbGFwc2VkIG9yIHdlIHJlYWNoZWQgdGhlIGRlc2lyZWQgb2Zmc2V0XG4gICAgICAgIC8vIFNldCBzY3JvbGwgdG8gdGhlIGRlc2lyZWQgb2Zmc2V0ICh3aGVuIHJvdW5kaW5nIG1hZGUgaXQgdG8gYmUgb2ZmIGEgcGl4ZWwgb3IgdHdvKVxuICAgICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgICBkb1Njcm9sbChkZXNpcmVkT2Zmc2V0KTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGFuaW1hdGluZyBzY3JvbGxcbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH0gZWxzZSBpZiAod2luZG93KSB7XG4gICAgd2luZG93LmFuaW1hdGVTY3JvbGxUbyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iXX0=
