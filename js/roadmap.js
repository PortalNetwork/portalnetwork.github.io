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
        progress: 50,
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
        progress: 50,
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
        title: 'Portal Network Decetentralized Web Builder',
        content: '1. User registration flow.<br>2. Personal profile builder.<br>3. Decentralized website deploy history.',
        photos: [],
        location: '',
        time: '5/30',
        progress: 50,
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
        progress: 35,
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
        progress: 80,
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
        progress: 90,
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
        progress: 50,
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
        progress: 50,
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

    window.Intercom("boot", {
      app_id: "an50zjec"
    });
    window.Intercom("update");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sV0FEVDtBQUVFLFlBQU0sZ0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLFNBRFQ7QUFFRSxpQkFBUyxnYUFGWDtBQUdFLGdCQUFRLENBQ04sMkJBRE0sRUFFTiwyQkFGTSxFQUdOLDJCQUhNLEVBSU4sMkJBSk0sRUFLTiwyQkFMTSxFQU1OLDJCQU5NLEVBT04sMkJBUE0sRUFRTiwyQkFSTSxFQVNOLDJCQVRNLEVBVU4sMkJBVk0sRUFXTiwyQkFYTSxFQVlOLDJCQVpNLEVBYU4sMkJBYk0sRUFjTiwyQkFkTSxFQWVOLDJCQWZNLEVBZ0JOLDJCQWhCTSxFQWlCTiwyQkFqQk0sRUFrQk4sMkJBbEJNLEVBbUJOLDJCQW5CTSxFQW9CTiwyQkFwQk0sQ0FIVjtBQXlCRSxrQkFBVSxnQkF6Qlo7QUEwQkUsY0FBTSxNQTFCUjtBQTJCRSxrQkFBVSxHQTNCWjtBQTRCRSxlQUFPLEVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGFuaW1hdGVTY3JvbGxUbyBmcm9tICdhbmltYXRlZC1zY3JvbGwtdG8nO1xyXG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcclxuICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICByZXR1cm4ge1xyXG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxyXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0XHJcbiAgfVxyXG59XHJcbnZhciBhcHAgPSBuZXcgVnVlKHtcclxuICBlbDogJyNyb2FkbWFwJyxcclxuICBkYXRhOiB7XHJcbiAgICBzd2lwZXI6IG51bGwsXHJcbiAgICBpc09wZW5Qb3A6IGZhbHNlLFxyXG4gICAgbm93UGhvdG9zOiBbXSxcclxuICAgIHJvYWRtYXBEYXRhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbicsXHJcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZWR1Y2F0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJVCBTZWVkJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIGFuZCBNci4gQmxvY2sgdGVhbSB3ZXJlIHZlcnkgaG9ub3JlZCB0byBnZXQgaW52aXRlZCBieSBOZXcgVGFpcGVpIENpdHkgQ29tcHV0ZXIgQXNzb2NpYXRlIHRvIHNwZWFrIGF0IElUIFNlZWQgeCBUZWNobm9sb2d5IHRyYWluaW5nIHByb2dyYW0uIElUIFNlZWQgaXMgYW4gZWR1Y2F0aW9uIGNvbW11bml0eSB0aGF0IGxldCBncmFkdWF0aW5nIHN0dWRlbnRzIGxlYXJuIHZhcmlvdXMgdHJlbmRzIGFyb3VuZCB0aGUgd29ybGQsIHNvIHRoZXkgY2FuIGJlIHdlbGwgcHJlcGFyZWQgZm9yIHRoZWlyIGNhcmVlciBwYXRoIGluIHRoZSBmdXR1cmUuIEJhc2ljIGNvbmNlcHQgb2YgQmxvY2tjaGFpbiAmIEFwcGxpY2F0aW9uIG9mIEJsb2NrY2hhaW4gJiBGdXR1cmUgZGV2ZWxvcG1lbnQgb2YgQmxvY2tjaGFpbicsXHJcbiAgICAgICAgICAgIHBob3RvczogW1xyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5MzkuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQxLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0My5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDQuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ1LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk0Ni5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NDguanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTQ5LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1MC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NTEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTU0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk1OC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTY1LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk2Ny5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5NjkuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTcxLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L0lUU2VlZC9JTUdfMDk3NC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9JVFNlZWQvSU1HXzA5ODAuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvSVRTZWVkL0lNR18wOTgzLmpwZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8xOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uIFBsYXRmb3JtJyxcclxuICAgICAgICAgICAgY29udGVudDogJ091ciBjby1mb3VuZGVyLCBDaHJpc3RvcGhlciBTaGVuLCB3YXMgcHJlc2VudGluZyBhdCB0aGUgXCJZb3VuZyBFbnRyZXByZW5ldXJcIiBQYW5lbCBkdXJpbmcgdGhlIGV2ZW50LiBBc3Npc3QgdW5pdmVyc2l0eSBzdHVkZW50cyB0byBqb2luIHRoZSBpbnRlcm5hdGlvbmFsIFNVU1MgZXZlbnRzLCB0byBub3Qgb25seSBicmluZyB0aGUgYmxvY2tjaGFpbiB0cmVuZHMgdG8gVGFpd2FuLCBidXQgYWxzbyBlZHVjYXRlIG1vcmUgc3R1ZGVudHMgdG8gaGF2ZSB0aGUgYWJpbGl0eSB0byBkZXZlbG9wIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gSXTigJlzIG91ciBnb2FsIHRvIGN1bHRpdmF0ZSBtb3JlIGJsb2NrY2hhaW4gZGV2ZWxvcGVycywgdG8gdGhyaXZlIHRoZSB3aG9sZSBjb21tdW5pdHksIGFuZCB3ZSBzdGFydCB0aGlzIG1pc3Npb24gZnJvbSBUYWl3YW4uJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi8xLmpwZycsICdlZHVjYXRpb24vMi5qcGcnLCAnZWR1Y2F0aW9uLzMuanBnJywgJ2VkdWNhdGlvbi80LmpwZycsIFxyXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vNS5qcGcnLCAnZWR1Y2F0aW9uLzYuanBnJywgJ2VkdWNhdGlvbi83LmpwZycsICdlZHVjYXRpb24vOC5qcGcnLCBcclxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzkuanBnJywgJ2VkdWNhdGlvbi8xMC5qcGcnLCAnZWR1Y2F0aW9uLzExLmpwZycsICdlZHVjYXRpb24vMTIuanBnJywgXHJcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi8xMy5qcGcnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzE3LTE4JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdFdmVudCcsXHJcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcclxuICAgICAgICBmbGFnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2NrY2hhaW4gRmVzdGl2YWw6IFZpZXRuYW0gJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0Jsb2NrY2hhaW4gRmVzdGl2YWwgaXMgaG9zdGVkIGJ5IEh1b2JpLnBybyBhbmQgY28taG9zdGVkIGJ5IEt5YmVyIE5ldHdvcmsnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzMuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS80LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vNS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzYuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS83LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vOC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzkuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzExLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTIuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMy5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTUuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE3LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTguanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIwLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMjEuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xMDEyLnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTQxNi5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE0MzUucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNDU4LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTU0OC5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE2MTMucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xNzA1LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTczOC5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzE4MjAucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8xOTE0LnBuZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L1ZpZXRuYW0vMTk0Mi5wbmcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9WaWV0bmFtLzIwMjkucG5nJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvVmlldG5hbS8yMTA4LnBuZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG8gQ2hpIE1pbmgsIFZpZXRuYW0nLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yNCAtIDI1JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTh3emZ2RjVWdC1NJmxpc3Q9UExoN3lNLURQRURZaEVNcGozdkhiQmFlU29iRkRMVHFyUycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCQlMgLSBLb3JlYSBtZWV0LXVwICcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBhbmQgTXIuIEJsb2NrIHRlYW0gd2VyZSB2ZXJ5IGhvbm9yZWQgdG8gZ2V0IGludml0ZWQgYnkgTmV3IFRhaXBlaSBDaXR5IENvbXB1dGVyIEFzc29jaWF0ZSB0byBzcGVhayBhdCBJVCBTZWVkIHggVGVjaG5vbG9neSB0cmFpbmluZyBwcm9ncmFtLiBJVCBTZWVkIGlzIGFuIGVkdWNhdGlvbiBjb21tdW5pdHkgdGhhdCBsZXQgZ3JhZHVhdGluZyBzdHVkZW50cyBsZWFybiB2YXJpb3VzIHRyZW5kcyBhcm91bmQgdGhlIHdvcmxkLCBzbyB0aGV5IGNhbiBiZSB3ZWxsIHByZXBhcmVkIGZvciB0aGVpciBjYXJlZXIgcGF0aCBpbiB0aGUgZnV0dXJlLicsXHJcbiAgICAgICAgICAgIHBob3RvczogW1xyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg2MC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg2NC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDg5Ny5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkwMC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkwNy5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxMi5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNS5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkxNy5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9CQlMvMDkyMy5qcGcnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBLb3JlYScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwIC0gMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JsdXplbGxlIHggUG9ydGFsLk5ldHdvcmsgSGFja2F0aG9uJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBoYWNrYXRob24gd2l0aCBCbHV6ZWxsZSBhdCBDYW5hZGEgVmFuY291dmVyJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdDYW5hZGEnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8yOS4zMCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2gxLnBvcnRhbC5uZXR3b3JrJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4JyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJamlEVHU4dlhxV1VqYmpJQ2xsZnpfTGYtOTdWZ2l3cS92aWV3JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NzgzMTYyMjIzNTI5My8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIFVuaXZlcnNlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBCbG9ja2NoYWluIFVuaXZlcnNlIEV2ZW50IHdpdGggTXIuIEJsb2NrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MS5qcGcnLCAnZXZlbnQvZXZlbnQyLmpwZycsICdldmVudC9ldmVudDMuanBnJywgJ2V2ZW50L2V2ZW50NC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDUuanBnJywgJ2V2ZW50L2V2ZW50Ni5qcGcnLCAnZXZlbnQvZXZlbnQ3LmpwZycsICdldmVudC9ldmVudDguanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ5LmpwZycsICdldmVudC9ldmVudDEwLmpwZycsICdldmVudC9ldmVudDExLmpwZycsICdldmVudC9ldmVudDEyLmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MTMuanBnJywgJ2V2ZW50L2V2ZW50MTQuanBnJywgJ2V2ZW50L2V2ZW50MTUuanBnJywgJ2V2ZW50L2V2ZW50MTYuanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQxNy5qcGcnLCAnZXZlbnQvZXZlbnQxOC5qcGcnLCAnZXZlbnQvZXZlbnQxOS5qcGcnLCAnZXZlbnQvZXZlbnQyMC5qcGcnLFxyXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDIxLmpwZycsICdldmVudC9ldmVudDIyLmpwZycsICdldmVudC9ldmVudDIzLmpwZycsICdldmVudC9ldmVudDI0LmpwZycsXHJcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjUuanBnJywgJ2V2ZW50L2V2ZW50MjYuanBnJywgJ2V2ZW50L2V2ZW50MjcuanBnJywgJ2V2ZW50L2V2ZW50MjguanBnJyxcclxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQyOS5qcGcnLCAnZXZlbnQvZXZlbnQzMC5qcGcnLCAnZXZlbnQvZXZlbnQzMS5qcGcnLCAnZXZlbnQvZXZlbnQzMi5qcGcnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXdhbicsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzI3JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NTk2MTcwMjQyMjI4NS8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmV5b25kIEJsb2NrIFRva3lvIFN1bW1pdCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCZXlvbmQgQmxvY2sgTGl2ZXN0cmVhbSBNZWRpYSBQYXJ0bmVyJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8zLTUnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTMzMDcwMTU1MjA1Mi8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxNjQ2Mzk4MTg3MTQ5LycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI0MDQ3MTQ3Nzc5ODQvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gNCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjY1OTUxNDc1MjUwNC8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RlY29ub215JyxcclxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2VvdWwsIFNvdXRoIEtvcmVhJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMi00JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDYWZlICYgQ3J5cHRvJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4IFRzYWksIEZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcclxuICAgICAgICAgICAgdGltZTogJzMvMzAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODQ2NTA1MDgyMDM0NjE0LycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSwgICAgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVG9rZW4yMDQ5JyxcclxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG9uZ0tvbmcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMy8yMC0yMScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1BbU5RYTdKdndCMCZsaXN0PVBMaDd5TS1EUEVEWWp0WE8xRWt3TWVyVjJFSjhCY2JlNEYnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTW9uZXkgMjAvMjAgQXNpYScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXHJcbiAgICAgICAgICAgIHRpbWU6ICczLzEyLTE0JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVViZDA5T29WUDBNJmxpc3Q9UExoN3lNLURQRURZaXNpVHNDQVdoREZOXzBUZ1hhc2czOScsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja3Nob3cgQ29pbnRlbGVncmFwaCB4IE1yLkJsb2NrJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnMy85JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjI1MTI1NTQ5MTk0MTQxODM5NycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgyMjc0NDM2Nzc0NDAxOS8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnZVRvcm8gWCBNci4gQmxvY2snLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnTkVPIGRldmVsb3BtZW50IGV4cGVyaWVuY2UgYXMgYSBQeXRob24gRGV2ZWxvcGVyIEpvaG5ueSBIc2llaCwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaywgUHl0aG9uIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpJyxcclxuICAgICAgICAgICAgdGltZTogJzIvMjQnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMDgwNDUzNTQ1Njk1Njk2ODAwJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDc4MjUyODI1NjkyNjEvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwODAwNTc5MjU1MTIxMC8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEb2N1bWVudGF0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIGEgcHVsbCByZXF1ZXN0IGZvciBNZXRhTWFzayB0byBpbnRlZ3JhdGlvbiBFTlMgd2l0aCBJUEZTJyxcclxuICAgICAgICAgICAgY29udGVudDogJ01ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIGlzIGdyZWF0IHByb2plY3QgaGVscHMgdXNlcnMgdG8gaW50ZXJhY3Qgd2l0aCBFdGhlcmV1bSwgYW5kIGZ1cnRoZXJtb3JlIGNhbiBiZSBtb3JlIHBvd2VyZnVsIGJ5IGFkZCBjb250ZW50IHJlc29sdmUgYnkgRU5TLCBzbyBQb3J0YWwgTmV0d29yayBidWlsZCBhIHdheSB0byByZXNvbHZlcyBFTlMgZG9tYWlucyAoLmV0aCkgdG8gSVBGUyBoYXNoIGFuZCByZWRpcmVjdHMgdG8gdXJsIGNvbnRlbnQuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL01ldGFNYXNrL21ldGFtYXNrLWV4dGVuc2lvbi9wdWxsLzQ0MDUnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFQ0lQIC0gMTA0NCcsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vRXRoZXJldW1Db21tb253ZWFsdGgvRUNOUy9wdWxsLzMnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBDbGFzc2ljIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFQ0lQLTEwNDQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVDSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVDTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtIENsYXNzaWMnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW1wcm9qZWN0L0VDSVBzL3B1bGwvOTQnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFTlMgcHVibGljIHJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IGNvbnRyaWJ1dGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVJUCAtIDEwNjInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnLycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2Vuc2RvbWFpbnMvZW5zL3B1bGwvMjc5JyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXRoZXJldW0gSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVJUC0xMDYyJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVOUyByZXNvbHZlcuKAnTxicj4yLiBQcm9wb3NlIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGJldHdlZW4gSVBGUyBhbmQgRXRoZXJldW0nLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzcnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZG9jdW1lbnRhdGlvbi5zdmcnLFxyXG4gICAgICAgIGZsYWdzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9ydGFsIE5ldHdvcmsgRGVjZXRlbnRyYWxpemVkIFdlYiBCdWlsZGVyJyxcclxuICAgICAgICAgICAgY29udGVudDogJzEuIFVzZXIgcmVnaXN0cmF0aW9uIGZsb3cuPGJyPjIuIFBlcnNvbmFsIHByb2ZpbGUgYnVpbGRlci48YnI+My4gRGVjZW50cmFsaXplZCB3ZWJzaXRlIGRlcGxveSBoaXN0b3J5LicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMzAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vd2ViLnBvcnRhbC5uZXR3b3JrJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbCBOZXR3b3JrIE1hcmtldHBsYWNlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0Rlc2lnbiBhbiB1c2VyIGRhc2hib2FyZCBmb3IgdXNlciBzZXR0aW5ncywgZG9tYWluIG1hbmFnZXIsIGRvbWFpbiBwdXJjaGFzZSBoaXN0b3J5JyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8zMCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAzNSxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly9iZXRhLnBvcnRhbC5uZXR3b3JrJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Byb3RhbCBOZXR3b3JrIENocm9tZSBFeHRlbnNpb24gRW5oYW5jZW1lbnQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gU3VwcG9ydCAuZXRoIGFuZCAuZXRjIGRvbWFpbnMsIC53YW4gaXMgdW5kZXIgZGV2ZWxvcG1lbnQ8YnI+Mi4gVXNlIG11bHRpaGFzaCBmdW5jdGlvbiB0byBjb252ZXJ0IEVOUywgRUNOUywgV05TIFB1YmxpYyBSZXNvbHZlciBkYXRhPD4zLiBMZXQgdXNlcnMgY2FuIGRpcmVjdGx5IHZpc2l0IGRlY2VudHJhbGl6ZWQgd2Vic2l0ZScsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogODAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUG9ydGFsTmV0d29yay9wb3J0YWwtbmV0d29yay1icm93c2VyLWV4dGVuc2lvbidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWV0YW1hc2sgRW5oYW5jZW1lbnQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRW5oYW5jZW1lbnQgTWV0YU1hc2sgdG8gaW50ZWdyYXRlIHdpdGggRU5TIHJlc29sdmVyIHRvIHJlZGlyZWN0IHRvIGRlY2VudHJhbGl6ZSB3ZWInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc1LzknLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogOTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vUG9ydGFsTmV0d29yay9tZXRhbWFzay1leHRlbnNpb24nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RlZXAgbGVhcm5pbmcgbW9kZWwnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRW5oYW5jZSB0cmFkaW5nIG1hdGNoaW5nIHJhdGUgPGJyPjIuIFdlIGNvbGxlY3Qgb3ZlciAxbSB0b3AgdmFsdWUgZG9tYWlucyBmcm9tIGNlbnRyYWxpemUgZG9tYWlucyBhbmQgYWxsIHRoZSBFdGhlcmV1bSBkb21haW5zLiBXaXRoIGRlZXAgbGVhcm5pbmcgd2UgYXJlIGFibGUgdG8gbWFrZSBBSSBzeXN0ZW1zIHdoaWNoIGNhbiBwcmVkaWN0IHRoZSBkb21haW5zIHZhbHVlLiBXZSBoYXZlIHR3byBraW5kcyBvZiBzeXN0ZW1zLCBvbmUgaXMgdG8gZmluZCBoaWdoIHZhbHVlIGRvbWFpbnMgLCB0aGUgb3RoZXIgaXMgdG8gcHJlZGljdCB0aGUgcG9zc2libGUgcHJpY2Ugb2YgdGhlIGRvbWFpbnMuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXSE9JUycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQYXJpbmcgYW5kIGNsZWFuaW5nIGFsbCB0aGUgZG9tYWlucyBvbiBFdGhlcmV1bS48YnI+Mi4gQmVnaW4gdG8gYnVpbGQgdXAgRXRoZXJldW0gQ2xhc3NpYyBXSE9JUyBzeXN0ZW0gYW5kIGNvbGxlY3QgZGF0YXMgb24gaXQuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdPbmxpbmUgRGVjZW50cmFsaXplZCBXZWJzaXRlIEJ1aWxkZXInLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyPGJyPjIuIEN1c3RvbWl6ZWQgd2Vic2l0ZSBkZXBsb3ltZW50PGJyPjMuIEJhY2tlbmQgY29udHJ1Y3N0aW9uJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8xOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHA6Ly9oMS5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBVc2VyIHJlZ2lzdHJhdGlvbiBpbXByb3ZlbWVudCBSZWZhY3RvcmluZyB0aGUgdXNhYmlsaXR5IFJlZmFjdG9yaW5nIGFuZCBJbnRlZ3JhdGlvbiB3aXRoIGV0aGVyZXVtIFVJL1VYIGRlc2lnbiBlbmhhbmNlbWVudCBDb25zdHJ1Y3RpbmcgdGhlIGJhY2tlbmQgYXJjaGl0ZWN0dXJlIFNlY3VyaXR5IEVuaGFuY2VtZW50PGJyPjIuIENvbnN0cnVjdGluZyB1c2VyIHByb2ZpbGUgZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8xNicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHdhdGNoOntcclxuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT57XHJcbiAgICAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3dQaG90b3M7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb3BlbkNvbnRlbnRGbjogZnVuY3Rpb24gKGlkeCkge1xyXG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XHJcbiAgICB9LFxyXG4gICAgb3Blbk1vZGFsOiBmdW5jdGlvbihwaG90b0Fycikge1xyXG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XHJcbiAgICAgIHRoaXMubm93UGhvdG9zID0gcGhvdG9BcnI7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuUG9wID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm93UGhvdG9zID0gW107XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9DaGFwdGVyOiBmdW5jdGlvbihpZHgpIHtcclxuICAgICAgY29uc3QgY2hhcHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcHRlcicpO1xyXG4gICAgICBjb25zdCB0YXJnZXRDaGFwdGVyID0gY2hhcHRlcnNbaWR4XTtcclxuICAgICAgY29uc3QgZWxlbWVudFRvcCA9IEdldE9mZnNldCh0YXJnZXRDaGFwdGVyKTtcclxuICAgICAgYW5pbWF0ZVNjcm9sbFRvKGVsZW1lbnRUb3AudG9wIC0gMTAwKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHdpbmRvdy5JbnRlcmNvbShcImJvb3RcIiwge1xyXG4gICAgICAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5JbnRlcmNvbShcInVwZGF0ZVwiKTtcclxuICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTsgXHJcbiAgfVxyXG59KSIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGRlc2lyZWRPZmZzZXQgLSBwYWdlIG9mZnNldCB0byBzY3JvbGwgdG9cbiAgLy8gc3BlZWQgLSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIHBlciAxMDAwcHhcbiAgZnVuY3Rpb24gX19BTklNQVRFX1NDUk9MTF9UTyhkZXNpcmVkT2Zmc2V0KSB7XG4gICAgdmFyIHVzZXJPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBtaW5EdXJhdGlvbjogMjUwLFxuICAgICAgbWF4RHVyYXRpb246IDE1MDAsXG4gICAgICBjYW5jZWxPblVzZXJBY3Rpb246IHRydWUsXG4gICAgICBlbGVtZW50OiB3aW5kb3csXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnNLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gb3B0aW9uc0tleXNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdXNlck9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uICYmIG9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICBpZiAodXNlck9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYW5pbWF0ZWQtc2Nyb2xsLXRvOlxcbiBcInBhc3NpdmVcIiB3YXMgc2V0IHRvIFwiZmFsc2VcIiB0byBwcmV2ZW50IGVycm9ycywgJyArXG4gICAgICAgICAgJ2FzIHVzaW5nIFwiY2FuY2VsT25Vc2VyQWN0aW9uOiBmYWxzZVwiIGRvZXNuXFwndCB3b3JrIHdpdGggcGFzc2l2ZSBldmVudHMuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVzaXJlZE9mZnNldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAodXNlck9wdGlvbnMuZWxlbWVudCAmJiB1c2VyT3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0KVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbExlZnQgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbFRvcCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBhZGRpdG9uYWwgdXNlciBvZmZzZXRcbiAgICBkZXNpcmVkT2Zmc2V0ICs9IG9wdGlvbnMub2Zmc2V0XG5cbiAgICBvcHRpb25zLmlzV2luZG93ID0gb3B0aW9ucy5lbGVtZW50ID09PSB3aW5kb3c7XG5cbiAgICB2YXIgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICB2YXIgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gMDtcbiAgICB2YXIgbWF4U2Nyb2xsID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmlzV2luZG93KSB7XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgaGVpZ2h0IG1pbnVzIHdpbmRvdyBoZWlnaHRcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCB3aWR0aCBtaW51cyB3aW5kb3cgd2lkdGhcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRE9NIGVsZW1lbnRcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0gYXZhaWxhYmxlIHNjcm9sbFxuICAgIGlmIChkZXNpcmVkT2Zmc2V0ID4gbWF4U2Nyb2xsKSB7XG4gICAgICBkZXNpcmVkT2Zmc2V0ID0gbWF4U2Nyb2xsO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkaWZmIHRvIHNjcm9sbFxuICAgIHZhciBkaWZmID0gZGVzaXJlZE9mZnNldCAtIGluaXRpYWxTY3JvbGxQb3NpdGlvbjtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSB0aGVyZVxuICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgaWYgKG9wdGlvbnMub25Db21wbGV0ZSAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbFxuICAgIHZhciBkdXJhdGlvbiA9IE1hdGguYWJzKE1hdGgucm91bmQoKGRpZmYgLyAxMDAwKSAqIG9wdGlvbnMuc3BlZWQpKTtcblxuICAgIC8vIFNldCBtaW5pbXVtIGFuZCBtYXhpbXVtIGR1cmF0aW9uXG4gICAgaWYgKGR1cmF0aW9uIDwgb3B0aW9ucy5taW5EdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1pbkR1cmF0aW9uO1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPiBvcHRpb25zLm1heER1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWF4RHVyYXRpb247XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0aW5nVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAvLyBSZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBJRFxuICAgIHZhciByZXF1ZXN0SUQgPSBudWxsO1xuXG4gICAgLy8gTWV0aG9kIGhhbmRsZXJcbiAgICB2YXIgaGFuZGxlVXNlckV2ZW50ID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gY2FuY2VsIHNjcm9sbCBvbiB1c2VyIGFjdGlvblxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBwcmV2ZW50IHVzZXIgYWN0aW9ucyB3aGlsZSBzY3JvbGwgaXMgYWN0aXZlXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuXG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHN0YXJ0aW5nVGltZTtcbiAgICAgIHZhciB0ID0gKHRpbWVEaWZmIC8gZHVyYXRpb24pIC0gMTtcbiAgICAgIHZhciBlYXNpbmcgPSB0ICogdCAqIHQgKyAxO1xuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChpbml0aWFsU2Nyb2xsUG9zaXRpb24gKyAoZGlmZiAqIGVhc2luZykpO1xuXG4gICAgICB2YXIgZG9TY3JvbGwgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhwb3NpdGlvbiwgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZURpZmYgPCBkdXJhdGlvbiAmJiBzY3JvbGxQb3NpdGlvbiAhPT0gZGVzaXJlZE9mZnNldCkge1xuICAgICAgICAvLyBJZiBzY3JvbGwgZGlkbid0IHJlYWNoIGRlc2lyZWQgb2Zmc2V0IG9yIHRpbWUgaXMgbm90IGVsYXBzZWRcbiAgICAgICAgLy8gU2Nyb2xsIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgICAgIC8vIEFuZCByZXF1ZXN0IGEgbmV3IHN0ZXBcbiAgICAgICAgZG9TY3JvbGwoc2Nyb2xsUG9zaXRpb24pO1xuXG4gICAgICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSB0aW1lIGVsYXBzZWQgb3Igd2UgcmVhY2hlZCB0aGUgZGVzaXJlZCBvZmZzZXRcbiAgICAgICAgLy8gU2V0IHNjcm9sbCB0byB0aGUgZGVzaXJlZCBvZmZzZXQgKHdoZW4gcm91bmRpbmcgbWFkZSBpdCB0byBiZSBvZmYgYSBwaXhlbCBvciB0d28pXG4gICAgICAgIC8vIENsZWFyIGFuaW1hdGlvbiBmcmFtZSB0byBiZSBzdXJlXG4gICAgICAgIGRvU2Nyb2xsKGRlc2lyZWRPZmZzZXQpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gaXMgY29tcGxldGUsIGV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgYW5pbWF0aW5nIHNjcm9sbFxuICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfSBlbHNlIGlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuYW5pbWF0ZVNjcm9sbFRvID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiJdfQ==
