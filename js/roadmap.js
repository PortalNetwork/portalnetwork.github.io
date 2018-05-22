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
        title: 'Education Platform',
        content: 'Our co-founder, Christopher Shen, was presenting at the "Young Entrepreneur" Panel during the event. Assist university students to join the international SUSS events, to not only bring the blockchain trends to Taiwan, but also educate more students to have the ability to develop blockchain technology. It’s our goal to cultivate more blockchain developers, to thrive the whole community, and we start this mission from Taiwan.',
        photos: ['education/1.jpg', 'education/2.jpg', 'education/3.jpg', 'education/4.jpg', 'education/5.jpg', 'education/6.jpg', 'education/7.jpg', 'education/8.jpg', 'education/9.jpg', 'education/10.jpg', 'education/11.jpg', 'education/12.jpg', 'education/13.jpg'],
        location: 'Singapore',
        time: '4/17-18',
        progress: 50,
        links: [],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: "Partnership with Wanchain",
        content: "Portal Network is honor to announce the partnership with Wanchain",
        photos: [],
        location: '',
        time: "5/14",
        progress: 100,
        links: [{
          title: "Blog",
          url: "https://medium.com/wanchain-foundation/wanchain-progress-update-13-may-2018-7a539671627d"
        }],
        githubs: [],
        files: [],
        videos: []
      }]
    }, {
      title: 'Event',
      icon: './images/roadmap/event.svg',
      flags: [{
        title: 'Portal.Network Hackathon',
        content: 'Co-hosted hackathon with Bluzelle at Canada Vancouver',
        photos: [],
        location: 'Canada',
        time: '4/29.30',
        progress: 100,
        links: [{
          title: '',
          url: 'http://hackathon.portal.network'
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
        title: 'Propose multihash functions to support ECNS Public Resolver smart contract',
        content: 'Propose multihash functions to support ECNS Public Resolver smart contract Implementation of ECIP - 1044',
        photos: [],
        location: '',
        time: '5/12',
        progress: 50,
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
        progress: 50,
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
        progress: 50,
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
        title: '[product] Protal Network Chrome Extension Enhancement',
        content: '1. Support .eth and .etc domains, .wan is under development<br>2. Use multihash function to convert ENS and ECNS Public Resolver data<>3. Let users can directly visit decentralized website',
        photos: [],
        location: '',
        time: '5/12',
        progress: 0,
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
        progress: 50,
        links: [],
        githubs: [{
          title: '',
          url: 'https://github.com/PortalNetwork/metamask-extension'
        }],
        files: [],
        videos: []
      }, {
        title: '[product] Deep learning model',
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
        title: '[product] WHOIS',
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
        title: '[product] Online Decentralized Website Builder',
        content: '1. Personal profile builder<br>2. Customized website deployment<br>3. Backend contrucstion',
        photos: [],
        location: '',
        time: '4/19',
        progress: 50,
        links: [{
          title: '',
          url: ' https://hackathon.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: '[product] Portal Network Marketplace',
        content: '1. User registration improvement Refactoring the usability Refactoring and Integration with ethereum UI/UX design enhancement Constructing the backend architecture Security Enhancement<br>2. Constructing user profile dashboard',
        photos: [],
        location: '',
        time: '4/16',
        progress: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sV0FEVDtBQUVFLFlBQU0sZ0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLG9CQURUO0FBRUUsaUJBQVMsNmFBRlg7QUFHRSxnQkFBUSxDQUNOLGlCQURNLEVBQ2EsaUJBRGIsRUFDZ0MsaUJBRGhDLEVBQ21ELGlCQURuRCxFQUVOLGlCQUZNLEVBRWEsaUJBRmIsRUFFZ0MsaUJBRmhDLEVBRW1ELGlCQUZuRCxFQUdOLGlCQUhNLEVBR2Esa0JBSGIsRUFHaUMsa0JBSGpDLEVBR3FELGtCQUhyRCxFQUlOLGtCQUpNLENBSFY7QUFTRSxrQkFBVSxXQVRaO0FBVUUsY0FBTSxTQVZSO0FBV0Usa0JBQVUsRUFYWjtBQVlFLGVBQU8sRUFaVDtBQWFFLGlCQUFTLEVBYlg7QUFjRSxlQUFPLEVBZFQ7QUFlRSxnQkFBUTtBQWZWLE9BREs7QUFIVCxLQURXLEVBeUJYO0FBQ0UsYUFBTyxP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3JvYWRtYXAnLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICByb2FkbWFwRGF0YTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbicsXG4gICAgICAgIGljb246ICcuL2ltYWdlcy9yb2FkbWFwL2VkdWNhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uIFBsYXRmb3JtJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdPdXIgY28tZm91bmRlciwgQ2hyaXN0b3BoZXIgU2hlbiwgd2FzIHByZXNlbnRpbmcgYXQgdGhlIFwiWW91bmcgRW50cmVwcmVuZXVyXCIgUGFuZWwgZHVyaW5nIHRoZSBldmVudC4gQXNzaXN0IHVuaXZlcnNpdHkgc3R1ZGVudHMgdG8gam9pbiB0aGUgaW50ZXJuYXRpb25hbCBTVVNTIGV2ZW50cywgdG8gbm90IG9ubHkgYnJpbmcgdGhlIGJsb2NrY2hhaW4gdHJlbmRzIHRvIFRhaXdhbiwgYnV0IGFsc28gZWR1Y2F0ZSBtb3JlIHN0dWRlbnRzIHRvIGhhdmUgdGhlIGFiaWxpdHkgdG8gZGV2ZWxvcCBibG9ja2NoYWluIHRlY2hub2xvZ3kuIEl04oCZcyBvdXIgZ29hbCB0byBjdWx0aXZhdGUgbW9yZSBibG9ja2NoYWluIGRldmVsb3BlcnMsIHRvIHRocml2ZSB0aGUgd2hvbGUgY29tbXVuaXR5LCBhbmQgd2Ugc3RhcnQgdGhpcyBtaXNzaW9uIGZyb20gVGFpd2FuLicsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi8xLmpwZycsICdlZHVjYXRpb24vMi5qcGcnLCAnZWR1Y2F0aW9uLzMuanBnJywgJ2VkdWNhdGlvbi80LmpwZycsIFxuICAgICAgICAgICAgICAnZWR1Y2F0aW9uLzUuanBnJywgJ2VkdWNhdGlvbi82LmpwZycsICdlZHVjYXRpb24vNy5qcGcnLCAnZWR1Y2F0aW9uLzguanBnJywgXG4gICAgICAgICAgICAgICdlZHVjYXRpb24vOS5qcGcnLCAnZWR1Y2F0aW9uLzEwLmpwZycsICdlZHVjYXRpb24vMTEuanBnJywgJ2VkdWNhdGlvbi8xMi5qcGcnLCBcbiAgICAgICAgICAgICAgJ2VkdWNhdGlvbi8xMy5qcGcnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzE3LTE4JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0V2ZW50JyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbC5OZXR3b3JrIEhhY2thdGhvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIGhhY2thdGhvbiB3aXRoIEJsdXplbGxlIGF0IENhbmFkYSBWYW5jb3V2ZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2FuYWRhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5LjMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9oYWNrYXRob24ucG9ydGFsLm5ldHdvcmsnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlqaURUdTh2WHFXVWpiaklDbGxmel9MZi05N1ZnaXdxL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIFVuaXZlcnNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDby1ob3N0ZWQgQmxvY2tjaGFpbiBVbml2ZXJzZSBFdmVudCB3aXRoIE1yLiBCbG9jaycsXG4gICAgICAgICAgICBwaG90b3M6IFtcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MS5qcGcnLCAnZXZlbnQvZXZlbnQyLmpwZycsICdldmVudC9ldmVudDMuanBnJywgJ2V2ZW50L2V2ZW50NC5qcGcnLFxuICAgICAgICAgICAgICAnZXZlbnQvZXZlbnQ1LmpwZycsICdldmVudC9ldmVudDYuanBnJywgJ2V2ZW50L2V2ZW50Ny5qcGcnLCAnZXZlbnQvZXZlbnQ4LmpwZycsXG4gICAgICAgICAgICAgICdldmVudC9ldmVudDkuanBnJywgJ2V2ZW50L2V2ZW50MTAuanBnJywgJ2V2ZW50L2V2ZW50MTEuanBnJywgJ2V2ZW50L2V2ZW50MTIuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MTMuanBnJywgJ2V2ZW50L2V2ZW50MTQuanBnJywgJ2V2ZW50L2V2ZW50MTUuanBnJywgJ2V2ZW50L2V2ZW50MTYuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MTcuanBnJywgJ2V2ZW50L2V2ZW50MTguanBnJywgJ2V2ZW50L2V2ZW50MTkuanBnJywgJ2V2ZW50L2V2ZW50MjAuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjEuanBnJywgJ2V2ZW50L2V2ZW50MjIuanBnJywgJ2V2ZW50L2V2ZW50MjMuanBnJywgJ2V2ZW50L2V2ZW50MjQuanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjUuanBnJywgJ2V2ZW50L2V2ZW50MjYuanBnJywgJ2V2ZW50L2V2ZW50MjcuanBnJywgJ2V2ZW50L2V2ZW50MjguanBnJyxcbiAgICAgICAgICAgICAgJ2V2ZW50L2V2ZW50MjkuanBnJywgJ2V2ZW50L2V2ZW50MzAuanBnJywgJ2V2ZW50L2V2ZW50MzEuanBnJywgJ2V2ZW50L2V2ZW50MzIuanBnJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnNC8yNycsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg3NTk2MTcwMjQyMjI4NS8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCZXlvbmQgQmxvY2sgVG9reW8gU3VtbWl0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdCZXlvbmQgQmxvY2sgTGl2ZXN0cmVhbSBNZWRpYSBQYXJ0bmVyJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Rva3lvLCBKYXBhbicsXG4gICAgICAgICAgICB0aW1lOiAnNC8zLTUnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxMzMwNzAxNTUyMDUyLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUxNjQ2Mzk4MTg3MTQ5LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDMnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNDA0NzE0Nzc3OTg0LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDQnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNjU5NTE0NzUyNTA0LycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdEZWNvbm9teScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBTb3V0aCBLb3JlYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yLTQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FmZSAmIENyeXB0bycsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBQaHlyZXggVHNhaSwgRm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy8zMCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg0NjUwNTA4MjAzNDYxNC8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sICAgIFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVG9rZW4yMDQ5JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnSG9uZ0tvbmcnLFxuICAgICAgICAgICAgdGltZTogJzMvMjAtMjEnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1BbU5RYTdKdndCMCZsaXN0PVBMaDd5TS1EUEVEWWp0WE8xRWt3TWVyVjJFSjhCY2JlNEYnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNb25leSAyMC8yMCBBc2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzEyLTE0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VWJkMDlPb1ZQME0mbGlzdD1QTGg3eU0tRFBFRFlpc2lUc0NBV2hERk5fMFRnWGFzZzM5JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tzaG93IENvaW50ZWxlZ3JhcGggeCBNci5CbG9jaycsXG4gICAgICAgICAgICBjb250ZW50OiAnUG9ydGFsIE5ldHdvcmsgcGl0Y2ggLSBWaW5jZW50IFR1LCBDby1mb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzknLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIyNTEyNTU0OTE5NDE0MTgzOTcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgyMjc0NDM2Nzc0NDAxOS8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdlVG9ybyBYIE1yLiBCbG9jaycsXG4gICAgICAgICAgICBjb250ZW50OiAnTkVPIGRldmVsb3BtZW50IGV4cGVyaWVuY2UgYXMgYSBQeXRob24gRGV2ZWxvcGVyIEpvaG5ueSBIc2llaCwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaywgUHl0aG9uIERldmVsb3BlcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWknLFxuICAgICAgICAgICAgdGltZTogJzIvMjQnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIwODA0NTM1NDU2OTU2OTY4MDAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA3ODI1MjgyNTY5MjYxLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA4MDA1NzkyNTUxMjEwLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnRG9jdW1lbnRhdGlvbicsXG4gICAgICAgIGljb246ICcuL2ltYWdlcy9yb2FkbWFwL2RvY3VtZW50YXRpb24uc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVDTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFQ0lQIC0gMTA0NCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FdGhlcmV1bUNvbW1vbndlYWx0aC9FQ05TL3B1bGwvMycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBDbGFzc2ljIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFQ0lQLTEwNDQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFQ0lQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFQ05TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bSBDbGFzc2ljJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtcHJvamVjdC9FQ0lQcy9wdWxsLzk0JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVJUCAtIDEwNjInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy8nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbnNkb21haW5zL2Vucy9wdWxsLzI3OScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdFdGhlcmV1bSBJbXByb3ZlbWVudCBQcm9wb3NhbCwgRUlQLTEwNjInLFxuICAgICAgICAgICAgY29udGVudDogJzEuIENyZWF0ZSBhbiBFSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVOUyByZXNvbHZlcuKAnTxicj4yLiBQcm9wb3NlIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGJldHdlZW4gSVBGUyBhbmQgRXRoZXJldW0nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW0vRUlQcy9wdWxsLzEwNjInLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0FwcGxpY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZG9jdW1lbnRhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIFByb3RhbCBOZXR3b3JrIENocm9tZSBFeHRlbnNpb24gRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgLmV0aCBhbmQgLmV0YyBkb21haW5zLCAud2FuIGlzIHVuZGVyIGRldmVsb3BtZW50PGJyPjIuIFVzZSBtdWx0aWhhc2ggZnVuY3Rpb24gdG8gY29udmVydCBFTlMgYW5kIEVDTlMgUHVibGljIFJlc29sdmVyIGRhdGE8PjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL3BvcnRhbC1uZXR3b3JrLWJyb3dzZXItZXh0ZW5zaW9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTWV0YW1hc2sgRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJ0VuaGFuY2VtZW50IE1ldGFNYXNrIHRvIGludGVncmF0ZSB3aXRoIEVOUyByZXNvbHZlciB0byByZWRpcmVjdCB0byBkZWNlbnRyYWxpemUgd2ViJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBEZWVwIGxlYXJuaW5nIG1vZGVsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBFbmhhbmNlIHRyYWRpbmcgbWF0Y2hpbmcgcmF0ZSA8YnI+Mi4gV2UgY29sbGVjdCBvdmVyIDFtIHRvcCB2YWx1ZSBkb21haW5zIGZyb20gY2VudHJhbGl6ZSBkb21haW5zIGFuZCBhbGwgdGhlIEV0aGVyZXVtIGRvbWFpbnMuIFdpdGggZGVlcCBsZWFybmluZyB3ZSBhcmUgYWJsZSB0byBtYWtlIEFJIHN5c3RlbXMgd2hpY2ggY2FuIHByZWRpY3QgdGhlIGRvbWFpbnMgdmFsdWUuIFdlIGhhdmUgdHdvIGtpbmRzIG9mIHN5c3RlbXMsIG9uZSBpcyB0byBmaW5kIGhpZ2ggdmFsdWUgZG9tYWlucyAsIHRoZSBvdGhlciBpcyB0byBwcmVkaWN0IHRoZSBwb3NzaWJsZSBwcmljZSBvZiB0aGUgZG9tYWlucy4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBXSE9JUycsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGFyaW5nIGFuZCBjbGVhbmluZyBhbGwgdGhlIGRvbWFpbnMgb24gRXRoZXJldW0uPGJyPjIuIEJlZ2luIHRvIGJ1aWxkIHVwIEV0aGVyZXVtIENsYXNzaWMgV0hPSVMgc3lzdGVtIGFuZCBjb2xsZWN0IGRhdGFzIG9uIGl0LicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIE9ubGluZSBEZWNlbnRyYWxpemVkIFdlYnNpdGUgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyPGJyPjIuIEN1c3RvbWl6ZWQgd2Vic2l0ZSBkZXBsb3ltZW50PGJyPjMuIEJhY2tlbmQgY29udHJ1Y3N0aW9uJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNC8xOScsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2hhY2thdGhvbi5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly9iZXRhLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3YXRjaDp7XG4gICAgaXNPcGVuUG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT57XG4gICAgICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ29udGVudEZuOiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XG4gICAgfSxcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKHBob3RvQXJyKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xuICAgIH0sXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBbXTtcbiAgICB9LFxuICAgIHNjcm9sbFRvQ2hhcHRlcjogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBjb25zdCBjaGFwdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFwdGVyJyk7XG4gICAgICBjb25zdCB0YXJnZXRDaGFwdGVyID0gY2hhcHRlcnNbaWR4XTtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBHZXRPZmZzZXQodGFyZ2V0Q2hhcHRlcik7XG4gICAgICBhbmltYXRlU2Nyb2xsVG8oZWxlbWVudFRvcC50b3AgLSAxMDApO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB3aW5kb3cuSW50ZXJjb20oXCJib290XCIsIHtcbiAgICAgICAgICBhcHBfaWQ6IFwiYW41MHpqZWNcIlxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuSW50ZXJjb20oXCJ1cGRhdGVcIik7XG4gICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgIH0pOyBcbiAgfVxufSkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBkZXNpcmVkT2Zmc2V0IC0gcGFnZSBvZmZzZXQgdG8gc2Nyb2xsIHRvXG4gIC8vIHNwZWVkIC0gZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBwZXIgMTAwMHB4XG4gIGZ1bmN0aW9uIF9fQU5JTUFURV9TQ1JPTExfVE8oZGVzaXJlZE9mZnNldCkge1xuICAgIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgbWluRHVyYXRpb246IDI1MCxcbiAgICAgIG1heER1cmF0aW9uOiAxNTAwLFxuICAgICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlLFxuICAgICAgZWxlbWVudDogd2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IG9wdGlvbnNLZXlzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbiAmJiBvcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHVzZXJPcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2FuaW1hdGVkLXNjcm9sbC10bzpcXG4gXCJwYXNzaXZlXCIgd2FzIHNldCB0byBcImZhbHNlXCIgdG8gcHJldmVudCBlcnJvcnMsICcgK1xuICAgICAgICAgICdhcyB1c2luZyBcImNhbmNlbE9uVXNlckFjdGlvbjogZmFsc2VcIiBkb2VzblxcJ3Qgd29yayB3aXRoIHBhc3NpdmUgZXZlbnRzLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKHVzZXJPcHRpb25zLmVsZW1lbnQgJiYgdXNlck9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxUb3AgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYWRkaXRvbmFsIHVzZXIgb2Zmc2V0XG4gICAgZGVzaXJlZE9mZnNldCArPSBvcHRpb25zLm9mZnNldFxuXG4gICAgb3B0aW9ucy5pc1dpbmRvdyA9IG9wdGlvbnMuZWxlbWVudCA9PT0gd2luZG93O1xuXG4gICAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IDA7XG4gICAgdmFyIG1heFNjcm9sbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IGhlaWdodCBtaW51cyB3aW5kb3cgaGVpZ2h0XG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgd2lkdGggbWludXMgd2luZG93IHdpZHRoXG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERPTSBlbGVtZW50XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIGF2YWlsYWJsZSBzY3JvbGxcbiAgICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgICAgZGVzaXJlZE9mZnNldCA9IG1heFNjcm9sbDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgICB2YXIgZGlmZiA9IGRlc2lyZWRPZmZzZXQgLSBpbml0aWFsU2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyhNYXRoLnJvdW5kKChkaWZmIC8gMTAwMCkgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgICAvLyBTZXQgbWluaW11bSBhbmQgbWF4aW11bSBkdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbiA8IG9wdGlvbnMubWluRHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID4gb3B0aW9ucy5tYXhEdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1heER1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgLy8gUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgSURcbiAgICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAgIC8vIE1ldGhvZCBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZVVzZXJFdmVudCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIGNhbmNlbCBzY3JvbGwgb24gdXNlciBhY3Rpb25cbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBzdGFydGluZ1RpbWU7XG4gICAgICB2YXIgdCA9ICh0aW1lRGlmZiAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICB2YXIgZWFzaW5nID0gdCAqIHQgKiB0ICsgMTtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgKGRpZmYgKiBlYXNpbmcpKTtcblxuICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8ocG9zaXRpb24sIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVEaWZmIDwgZHVyYXRpb24gJiYgc2Nyb2xsUG9zaXRpb24gIT09IGRlc2lyZWRPZmZzZXQpIHtcbiAgICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAgIC8vIFNjcm9sbCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAgICAvLyBBbmQgcmVxdWVzdCBhIG5ldyBzdGVwXG4gICAgICAgIGRvU2Nyb2xsKHNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdGltZSBlbGFwc2VkIG9yIHdlIHJlYWNoZWQgdGhlIGRlc2lyZWQgb2Zmc2V0XG4gICAgICAgIC8vIFNldCBzY3JvbGwgdG8gdGhlIGRlc2lyZWQgb2Zmc2V0ICh3aGVuIHJvdW5kaW5nIG1hZGUgaXQgdG8gYmUgb2ZmIGEgcGl4ZWwgb3IgdHdvKVxuICAgICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgICBkb1Njcm9sbChkZXNpcmVkT2Zmc2V0KTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGFuaW1hdGluZyBzY3JvbGxcbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH0gZWxzZSBpZiAod2luZG93KSB7XG4gICAgd2luZG93LmFuaW1hdGVTY3JvbGxUbyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iXX0=
