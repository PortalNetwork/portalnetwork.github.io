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
        photos: [],
        location: 'Singapore',
        time: '4/17-18',
        progress: 50,
        links: [],
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
          title: 'pdf',
          url: 'https://drive.google.com/file/d/1l1GxD0SF5NQKeLqhOCWqQUYHPRAoBfHn/view'
        }, {
          title: 'event',
          url: 'http://hackathon.portal.network'
        }],
        githubs: [],
        files: [],
        videos: []
      }, {
        title: 'Mr.Block X Malaysia',
        content: 'Portal Network pitch - Phyrex',
        photos: [],
        location: 'Malaysia',
        time: '4/29',
        progress: 100,
        links: [{
          title: '',
          url: 'https://drive.google.com/file/d/1IjiDTu8vXqWUjbjICllfz_Lf-97Vgiwq/view'
        }],
        githubs: [],
        files: [],
        videos: [{
          title: '',
          url: 'https://www.facebook.com/mrblock.tw/videos/1877831622235293/'
        }]
      }, {
        title: 'Blockchain Universe',
        content: 'Co-hosted Blockchain Universe Event with Mr. Block',
        photos: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sV0FEVDtBQUVFLFlBQU0sZ0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLG9CQURUO0FBRUUsaUJBQVMsNmFBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsV0FKWjtBQUtFLGNBQU0sU0FMUjtBQU1FLGtCQUFVLEVBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxFQVJYO0FBU0UsZUFBTyxFQVRUO0FBVUUsZ0JBQVE7QUFWVixPQURLO0FBSFQsS0FEVyxFQW1CWDtBQUNFLGFBQU8sT0FEVDtBQUVFLFlBQU0sNEJBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLDBCQURUO0FBRUUsaUJBQVMsdURBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsUUFKWjtBQUtFLGNBQU0sU0FMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLENBQ0w7QUFDRSxpQkFB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QUs1QyxrQkFBWTtBQUNWLGdCQUFRLHFCQURFO0FBRVYsZ0JBQVE7QUFGRTtBQUxnQyxLQUFoQyxDQUFkO0FBVUg7QUFsZGUsQ0FBUixDQUFWOzs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3JvYWRtYXAnLFxuICBkYXRhOiB7XG4gICAgc3dpcGVyOiBudWxsLFxuICAgIGlzT3BlblBvcDogZmFsc2UsXG4gICAgbm93UGhvdG9zOiBbXSxcbiAgICByb2FkbWFwRGF0YTogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbicsXG4gICAgICAgIGljb246ICcuL2ltYWdlcy9yb2FkbWFwL2VkdWNhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uIFBsYXRmb3JtJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdPdXIgY28tZm91bmRlciwgQ2hyaXN0b3BoZXIgU2hlbiwgd2FzIHByZXNlbnRpbmcgYXQgdGhlIFwiWW91bmcgRW50cmVwcmVuZXVyXCIgUGFuZWwgZHVyaW5nIHRoZSBldmVudC4gQXNzaXN0IHVuaXZlcnNpdHkgc3R1ZGVudHMgdG8gam9pbiB0aGUgaW50ZXJuYXRpb25hbCBTVVNTIGV2ZW50cywgdG8gbm90IG9ubHkgYnJpbmcgdGhlIGJsb2NrY2hhaW4gdHJlbmRzIHRvIFRhaXdhbiwgYnV0IGFsc28gZWR1Y2F0ZSBtb3JlIHN0dWRlbnRzIHRvIGhhdmUgdGhlIGFiaWxpdHkgdG8gZGV2ZWxvcCBibG9ja2NoYWluIHRlY2hub2xvZ3kuIEl04oCZcyBvdXIgZ29hbCB0byBjdWx0aXZhdGUgbW9yZSBibG9ja2NoYWluIGRldmVsb3BlcnMsIHRvIHRocml2ZSB0aGUgd2hvbGUgY29tbXVuaXR5LCBhbmQgd2Ugc3RhcnQgdGhpcyBtaXNzaW9uIGZyb20gVGFpd2FuLicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0V2ZW50JyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZXZlbnQuc3ZnJyxcbiAgICAgICAgZmxhZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1BvcnRhbC5OZXR3b3JrIEhhY2thdGhvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIGhhY2thdGhvbiB3aXRoIEJsdXplbGxlIGF0IENhbmFkYSBWYW5jb3V2ZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnQ2FuYWRhJyxcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5LjMwJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdwZGYnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxR3hEMFNGNU5RS2VMcWhPQ1dxUVVZSFBSQW9CZkhuL3ZpZXcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdldmVudCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2hhY2thdGhvbi5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNci5CbG9jayBYIE1hbGF5c2lhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdNYWxheXNpYScsXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJamlEVHU4dlhxV1VqYmpJQ2xsZnpfTGYtOTdWZ2l3cS92aWV3JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODc3ODMxNjIyMjM1MjkzLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSwgICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIFVuaXZlcnNlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdDby1ob3N0ZWQgQmxvY2tjaGFpbiBVbml2ZXJzZSBFdmVudCB3aXRoIE1yLiBCbG9jaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMjcnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NzU5NjE3MDI0MjIyODUvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQmV5b25kIEJsb2NrIFRva3lvIFN1bW1pdCcsXG4gICAgICAgICAgICBjb250ZW50OiAnQmV5b25kIEJsb2NrIExpdmVzdHJlYW0gTWVkaWEgUGFydG5lcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxuICAgICAgICAgICAgdGltZTogJzQvMy01JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTMzMDcwMTU1MjA1Mi8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTY0NjM5ODE4NzE0OS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAzJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjQwNDcxNDc3Nzk4NC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyA0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MjY1OTUxNDc1MjUwNC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVjb25vbXknLFxuICAgICAgICAgICAgY29udGVudDogJ01lZGlhIFRlYW0gU3BvbnNvcicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgU291dGggS29yZWEnLFxuICAgICAgICAgICAgdGltZTogJzQvMi00JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhZmUgJiBDcnlwdG8nLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gUGh5cmV4IFRzYWksIEZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpLCBUYWl3YW4nLFxuICAgICAgICAgICAgdGltZTogJzMvMzAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NDY1MDUwODIwMzQ2MTQvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LCAgICBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1Rva2VuMjA0OScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmdLb25nJyxcbiAgICAgICAgICAgIHRpbWU6ICczLzIwLTIxJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QW1OUWE3SnZ3QjAmbGlzdD1QTGg3eU0tRFBFRFlqdFhPMUVrd01lclYyRUo4QmNiZTRGJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9uZXkgMjAvMjAgQXNpYScsXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1NpbmdhcG9yZScsXG4gICAgICAgICAgICB0aW1lOiAnMy8xMi0xNCcsXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxuICAgICAgICAgICAgbGlua3M6IFtdLFxuICAgICAgICAgICAgZ2l0aHViczogW10sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVViZDA5T29WUDBNJmxpc3Q9UExoN3lNLURQRURZaXNpVHNDQVdoREZOXzBUZ1hhc2czOScsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0Jsb2Nrc2hvdyBDb2ludGVsZWdyYXBoIHggTXIuQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ1BvcnRhbCBOZXR3b3JrIHBpdGNoIC0gVmluY2VudCBUdSwgQ28tZm91bmRlciBvZiBQb3J0YWwgTmV0d29yaycsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXG4gICAgICAgICAgICB0aW1lOiAnMy85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMjUxMjU1NDkxOTQxNDE4Mzk3JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MjI3NDQzNjc3NDQwMTkvJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnZVRvcm8gWCBNci4gQmxvY2snLFxuICAgICAgICAgICAgY29udGVudDogJ05FTyBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIGEgUHl0aG9uIERldmVsb3BlciBKb2hubnkgSHNpZWgsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmssIFB5dGhvbiBEZXZlbG9wZXInLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVGFpcGVpJyxcbiAgICAgICAgICAgIHRpbWU6ICcyLzI0JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmFjY3VwYXNzLmNvbS9ldmVudC8xODAyMDgwNDUzNTQ1Njk1Njk2ODAwJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwNzgyNTI4MjU2OTI2MS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTgwODAwNTc5MjU1MTIxMC8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdEb2N1bWVudGF0aW9uJyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZG9jdW1lbnRhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvcG9zZSBtdWx0aWhhc2ggZnVuY3Rpb25zIHRvIHN1cHBvcnQgRUNOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QnLFxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVDTlMgUHVibGljIFJlc29sdmVyIHNtYXJ0IGNvbnRyYWN0IEltcGxlbWVudGF0aW9uIG9mIEVDSVAgLSAxMDQ0JyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW10sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL0V0aGVyZXVtQ29tbW9ud2VhbHRoL0VDTlMvcHVsbC8zJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIENsYXNzaWMgSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVDSVAtMTA0NCcsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVDSVAgdG8g4oCcRm9ybWFsaXplIElQRlMgaGFzaCBpbnRvIEVDTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtIENsYXNzaWMnLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzEyJyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW1wcm9qZWN0L0VDSVBzL3B1bGwvOTQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRU5TIHB1YmxpYyByZXNvbHZlciBzbWFydCBjb250cmFjdCBjb250cmlidXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUlQIC0gMTA2MicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMTAnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VpcHMuZXRoZXJldW0ub3JnLycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2Vuc2RvbWFpbnMvZW5zL3B1bGwvMjc5JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFSVAtMTA2MicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gQ3JlYXRlIGFuIEVJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRU5TIHJlc29sdmVy4oCdPGJyPjIuIFByb3Bvc2UgZnVuY3Rpb25zIHRvIGNvbnZlcnQgYmV0d2VlbiBJUEZTIGFuZCBFdGhlcmV1bScsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvNycsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0FwcGxpY2F0aW9uJyxcbiAgICAgICAgaWNvbjogJy4vaW1hZ2VzL3JvYWRtYXAvZG9jdW1lbnRhdGlvbi5zdmcnLFxuICAgICAgICBmbGFnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIFByb3RhbCBOZXR3b3JrIENocm9tZSBFeHRlbnNpb24gRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJzEuIFN1cHBvcnQgLmV0aCBhbmQgLmV0YyBkb21haW5zLCAud2FuIGlzIHVuZGVyIGRldmVsb3BtZW50PGJyPjIuIFVzZSBtdWx0aWhhc2ggZnVuY3Rpb24gdG8gY29udmVydCBFTlMgYW5kIEVDTlMgUHVibGljIFJlc29sdmVyIGRhdGE8PjMuIExldCB1c2VycyBjYW4gZGlyZWN0bHkgdmlzaXQgZGVjZW50cmFsaXplZCB3ZWJzaXRlJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS8xMicsXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL3BvcnRhbC1uZXR3b3JrLWJyb3dzZXItZXh0ZW5zaW9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTWV0YW1hc2sgRW5oYW5jZW1lbnQnLFxuICAgICAgICAgICAgY29udGVudDogJ0VuaGFuY2VtZW50IE1ldGFNYXNrIHRvIGludGVncmF0ZSB3aXRoIEVOUyByZXNvbHZlciB0byByZWRpcmVjdCB0byBkZWNlbnRyYWxpemUgd2ViJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNS85JyxcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2l0aHViczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBEZWVwIGxlYXJuaW5nIG1vZGVsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBFbmhhbmNlIHRyYWRpbmcgbWF0Y2hpbmcgcmF0ZSA8YnI+Mi4gV2UgY29sbGVjdCBvdmVyIDFtIHRvcCB2YWx1ZSBkb21haW5zIGZyb20gY2VudHJhbGl6ZSBkb21haW5zIGFuZCBhbGwgdGhlIEV0aGVyZXVtIGRvbWFpbnMuIFdpdGggZGVlcCBsZWFybmluZyB3ZSBhcmUgYWJsZSB0byBtYWtlIEFJIHN5c3RlbXMgd2hpY2ggY2FuIHByZWRpY3QgdGhlIGRvbWFpbnMgdmFsdWUuIFdlIGhhdmUgdHdvIGtpbmRzIG9mIHN5c3RlbXMsIG9uZSBpcyB0byBmaW5kIGhpZ2ggdmFsdWUgZG9tYWlucyAsIHRoZSBvdGhlciBpcyB0byBwcmVkaWN0IHRoZSBwb3NzaWJsZSBwcmljZSBvZiB0aGUgZG9tYWlucy4nLFxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHRpbWU6ICc1LzInLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBXSE9JUycsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGFyaW5nIGFuZCBjbGVhbmluZyBhbGwgdGhlIGRvbWFpbnMgb24gRXRoZXJldW0uPGJyPjIuIEJlZ2luIHRvIGJ1aWxkIHVwIEV0aGVyZXVtIENsYXNzaWMgV0hPSVMgc3lzdGVtIGFuZCBjb2xsZWN0IGRhdGFzIG9uIGl0LicsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzUvMicsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIE9ubGluZSBEZWNlbnRyYWxpemVkIFdlYnNpdGUgQnVpbGRlcicsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGVyc29uYWwgcHJvZmlsZSBidWlsZGVyPGJyPjIuIEN1c3RvbWl6ZWQgd2Vic2l0ZSBkZXBsb3ltZW50PGJyPjMuIEJhY2tlbmQgY29udHJ1Y3N0aW9uJyxcbiAgICAgICAgICAgIHBob3RvczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXG4gICAgICAgICAgICB0aW1lOiAnNC8xOScsXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXG4gICAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2hhY2thdGhvbi5wb3J0YWwubmV0d29yaycsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgIHZpZGVvczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1twcm9kdWN0XSBQb3J0YWwgTmV0d29yayBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxuICAgICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcgaHR0cHM6Ly9iZXRhLnBvcnRhbC5uZXR3b3JrJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxuICAgICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB3YXRjaDp7XG4gICAgaXNPcGVuUG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT57XG4gICAgICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93UGhvdG9zO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ29udGVudEZuOiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XG4gICAgfSxcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKHBob3RvQXJyKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XG4gICAgICB0aGlzLm5vd1Bob3RvcyA9IHBob3RvQXJyO1xuICAgIH0sXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmlzT3BlblBvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5ub3dQaG90b3MgPSBbXTtcbiAgICB9LFxuICAgIHNjcm9sbFRvQ2hhcHRlcjogZnVuY3Rpb24oaWR4KSB7XG4gICAgICBjb25zdCBjaGFwdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFwdGVyJyk7XG4gICAgICBjb25zdCB0YXJnZXRDaGFwdGVyID0gY2hhcHRlcnNbaWR4XTtcbiAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBHZXRPZmZzZXQodGFyZ2V0Q2hhcHRlcik7XG4gICAgICBhbmltYXRlU2Nyb2xsVG8oZWxlbWVudFRvcC50b3AgLSAxMDApO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB3aW5kb3cuSW50ZXJjb20oXCJib290XCIsIHtcbiAgICAgICAgICBhcHBfaWQ6IFwiYW41MHpqZWNcIlxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuSW50ZXJjb20oXCJ1cGRhdGVcIik7XG4gICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgICAgfSxcbiAgICAgIH0pOyBcbiAgfVxufSkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBkZXNpcmVkT2Zmc2V0IC0gcGFnZSBvZmZzZXQgdG8gc2Nyb2xsIHRvXG4gIC8vIHNwZWVkIC0gZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBwZXIgMTAwMHB4XG4gIGZ1bmN0aW9uIF9fQU5JTUFURV9TQ1JPTExfVE8oZGVzaXJlZE9mZnNldCkge1xuICAgIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgbWluRHVyYXRpb246IDI1MCxcbiAgICAgIG1heER1cmF0aW9uOiAxNTAwLFxuICAgICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlLFxuICAgICAgZWxlbWVudDogd2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IG9wdGlvbnNLZXlzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbiAmJiBvcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHVzZXJPcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2FuaW1hdGVkLXNjcm9sbC10bzpcXG4gXCJwYXNzaXZlXCIgd2FzIHNldCB0byBcImZhbHNlXCIgdG8gcHJldmVudCBlcnJvcnMsICcgK1xuICAgICAgICAgICdhcyB1c2luZyBcImNhbmNlbE9uVXNlckFjdGlvbjogZmFsc2VcIiBkb2VzblxcJ3Qgd29yayB3aXRoIHBhc3NpdmUgZXZlbnRzLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKHVzZXJPcHRpb25zLmVsZW1lbnQgJiYgdXNlck9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxUb3AgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYWRkaXRvbmFsIHVzZXIgb2Zmc2V0XG4gICAgZGVzaXJlZE9mZnNldCArPSBvcHRpb25zLm9mZnNldFxuXG4gICAgb3B0aW9ucy5pc1dpbmRvdyA9IG9wdGlvbnMuZWxlbWVudCA9PT0gd2luZG93O1xuXG4gICAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IDA7XG4gICAgdmFyIG1heFNjcm9sbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IGhlaWdodCBtaW51cyB3aW5kb3cgaGVpZ2h0XG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgd2lkdGggbWludXMgd2luZG93IHdpZHRoXG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERPTSBlbGVtZW50XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIGF2YWlsYWJsZSBzY3JvbGxcbiAgICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgICAgZGVzaXJlZE9mZnNldCA9IG1heFNjcm9sbDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgICB2YXIgZGlmZiA9IGRlc2lyZWRPZmZzZXQgLSBpbml0aWFsU2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyhNYXRoLnJvdW5kKChkaWZmIC8gMTAwMCkgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgICAvLyBTZXQgbWluaW11bSBhbmQgbWF4aW11bSBkdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbiA8IG9wdGlvbnMubWluRHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID4gb3B0aW9ucy5tYXhEdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1heER1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgLy8gUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgSURcbiAgICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAgIC8vIE1ldGhvZCBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZVVzZXJFdmVudCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIGNhbmNlbCBzY3JvbGwgb24gdXNlciBhY3Rpb25cbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBzdGFydGluZ1RpbWU7XG4gICAgICB2YXIgdCA9ICh0aW1lRGlmZiAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICB2YXIgZWFzaW5nID0gdCAqIHQgKiB0ICsgMTtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgKGRpZmYgKiBlYXNpbmcpKTtcblxuICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8ocG9zaXRpb24sIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVEaWZmIDwgZHVyYXRpb24gJiYgc2Nyb2xsUG9zaXRpb24gIT09IGRlc2lyZWRPZmZzZXQpIHtcbiAgICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAgIC8vIFNjcm9sbCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAgICAvLyBBbmQgcmVxdWVzdCBhIG5ldyBzdGVwXG4gICAgICAgIGRvU2Nyb2xsKHNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdGltZSBlbGFwc2VkIG9yIHdlIHJlYWNoZWQgdGhlIGRlc2lyZWQgb2Zmc2V0XG4gICAgICAgIC8vIFNldCBzY3JvbGwgdG8gdGhlIGRlc2lyZWQgb2Zmc2V0ICh3aGVuIHJvdW5kaW5nIG1hZGUgaXQgdG8gYmUgb2ZmIGEgcGl4ZWwgb3IgdHdvKVxuICAgICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgICBkb1Njcm9sbChkZXNpcmVkT2Zmc2V0KTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGFuaW1hdGluZyBzY3JvbGxcbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH0gZWxzZSBpZiAod2luZG93KSB7XG4gICAgd2luZG93LmFuaW1hdGVTY3JvbGxUbyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iXX0=
