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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvcm9hZG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQU0sTUFBTSxHQUFHLHFCQUFILEVBQVo7QUFDQSxTQUFPO0FBQ0gsU0FBSyxJQUFJLEdBQUosR0FBVSxPQUFPLFdBQWpCLEdBQStCLFNBQVMsZUFBVCxDQUF5QixTQUQxRDtBQUVILFVBQU0sSUFBSSxJQUFKLEdBQVcsT0FBTyxXQUFsQixHQUFnQyxTQUFTLGVBQVQsQ0FBeUI7QUFGNUQsR0FBUDtBQUlEO0FBQ0QsSUFBSSxNQUFNLElBQUksR0FBSixDQUFRO0FBQ2hCLE1BQUksVUFEWTtBQUVoQixRQUFNO0FBQ0osWUFBUSxJQURKO0FBRUosZUFBVyxLQUZQO0FBR0osZUFBVyxFQUhQO0FBSUosaUJBQWEsQ0FDWDtBQUNFLGFBQU8sV0FEVDtBQUVFLFlBQU0sZ0NBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLG9CQURUO0FBRUUsaUJBQVMsNmFBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsV0FKWjtBQUtFLGNBQU0sU0FMUjtBQU1FLGtCQUFVLEVBTlo7QUFPRSxlQUFPLEVBUFQ7QUFRRSxpQkFBUyxFQVJYO0FBU0UsZUFBTyxFQVRUO0FBVUUsZ0JBQVE7QUFWVixPQURLO0FBSFQsS0FEVyxFQW1CWDtBQUNFLGFBQU8sT0FEVDtBQUVFLFlBQU0sNEJBRlI7QUFHRSxhQUFPLENBQ0w7QUFDRSxlQUFPLDBCQURUO0FBRUUsaUJBQVMsdURBRlg7QUFHRSxnQkFBUSxFQUhWO0FBSUUsa0JBQVUsUUFKWjtBQUtFLGNBQU0sU0FMUjtBQU1FLGtCQUFVLEdBTlo7QUFPRSxlQUFPLENBQ0w7QUFDRSxpQkFB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QUs1QyxrQkFBWTtBQUNWLGdCQUFRLHFCQURFO0FBRVYsZ0JBQVE7QUFGRTtBQUxnQyxLQUFoQyxDQUFkO0FBVUg7QUFsZGUsQ0FBUixDQUFWOzs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XHJcbmZ1bmN0aW9uIEdldE9mZnNldChlbCkge1xyXG4gIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXHJcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcclxuICB9XHJcbn1cclxudmFyIGFwcCA9IG5ldyBWdWUoe1xyXG4gIGVsOiAnI3JvYWRtYXAnLFxyXG4gIGRhdGE6IHtcclxuICAgIHN3aXBlcjogbnVsbCxcclxuICAgIGlzT3BlblBvcDogZmFsc2UsXHJcbiAgICBub3dQaG90b3M6IFtdLFxyXG4gICAgcm9hZG1hcERhdGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRWR1Y2F0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9lZHVjYXRpb24uc3ZnJyxcclxuICAgICAgICBmbGFnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VkdWNhdGlvbiBQbGF0Zm9ybScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdPdXIgY28tZm91bmRlciwgQ2hyaXN0b3BoZXIgU2hlbiwgd2FzIHByZXNlbnRpbmcgYXQgdGhlIFwiWW91bmcgRW50cmVwcmVuZXVyXCIgUGFuZWwgZHVyaW5nIHRoZSBldmVudC4gQXNzaXN0IHVuaXZlcnNpdHkgc3R1ZGVudHMgdG8gam9pbiB0aGUgaW50ZXJuYXRpb25hbCBTVVNTIGV2ZW50cywgdG8gbm90IG9ubHkgYnJpbmcgdGhlIGJsb2NrY2hhaW4gdHJlbmRzIHRvIFRhaXdhbiwgYnV0IGFsc28gZWR1Y2F0ZSBtb3JlIHN0dWRlbnRzIHRvIGhhdmUgdGhlIGFiaWxpdHkgdG8gZGV2ZWxvcCBibG9ja2NoYWluIHRlY2hub2xvZ3kuIEl04oCZcyBvdXIgZ29hbCB0byBjdWx0aXZhdGUgbW9yZSBibG9ja2NoYWluIGRldmVsb3BlcnMsIHRvIHRocml2ZSB0aGUgd2hvbGUgY29tbXVuaXR5LCBhbmQgd2Ugc3RhcnQgdGhpcyBtaXNzaW9uIGZyb20gVGFpd2FuLicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnU2luZ2Fwb3JlJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMTctMTgnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRXZlbnQnLFxyXG4gICAgICAgIGljb246ICcuL2ltYWdlcy9yb2FkbWFwL2V2ZW50LnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3J0YWwuTmV0d29yayBIYWNrYXRob24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQ28taG9zdGVkIGhhY2thdGhvbiB3aXRoIEJsdXplbGxlIGF0IENhbmFkYSBWYW5jb3V2ZXInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0NhbmFkYScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzI5LjMwJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3BkZicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsMUd4RDBTRjVOUUtlTHFoT0NXcVFVWUhQUkFvQmZIbi92aWV3JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZXZlbnQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2hhY2thdGhvbi5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTXIuQmxvY2sgWCBNYWxheXNpYScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCcsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTWFsYXlzaWEnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8yOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSWppRFR1OHZYcVdVamJqSUNsbGZ6X0xmLTk3Vmdpd3EvdmlldycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4Nzc4MzE2MjIyMzUyOTMvJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LCAgICAgICBcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCbG9ja2NoYWluIFVuaXZlcnNlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ0NvLWhvc3RlZCBCbG9ja2NoYWluIFVuaXZlcnNlIEV2ZW50IHdpdGggTXIuIEJsb2NrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWl3YW4nLFxyXG4gICAgICAgICAgICB0aW1lOiAnNC8yNycsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NzU5NjE3MDI0MjIyODUvJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JleW9uZCBCbG9jayBUb2t5byBTdW1taXQnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnQmV5b25kIEJsb2NrIExpdmVzdHJlYW0gTWVkaWEgUGFydG5lcicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVG9reW8sIEphcGFuJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMy01JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDEnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTEzMzA3MDE1NTIwNTIvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8gMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg1MTY0NjM5ODE4NzE0OS8nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAzJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODUyNDA0NzE0Nzc3OTg0LycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4NTI2NTk1MTQ3NTI1MDQvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZWNvbm9teScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Nlb3VsLCBTb3V0aCBLb3JlYScsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzItNCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FmZSAmIENyeXB0bycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFBoeXJleCBUc2FpLCBGb3VuZGVyIG9mIFBvcnRhbCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUYWlwZWksIFRhaXdhbicsXHJcbiAgICAgICAgICAgIHRpbWU6ICczLzMwJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vbXJibG9jay50dy92aWRlb3MvMTg0NjUwNTA4MjAzNDYxNC8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1Rva2VuMjA0OScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNZWRpYSBUZWFtIFNwb25zb3InLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0hvbmdLb25nJyxcclxuICAgICAgICAgICAgdGltZTogJzMvMjAtMjEnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMTAwLFxyXG4gICAgICAgICAgICBsaW5rczogW10sXHJcbiAgICAgICAgICAgIGdpdGh1YnM6IFtdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QW1OUWE3SnZ3QjAmbGlzdD1QTGg3eU0tRFBFRFlqdFhPMUVrd01lclYyRUo4QmNiZTRGJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ01vbmV5IDIwLzIwIEFzaWEnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnTWVkaWEgVGVhbSBTcG9uc29yJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdTaW5nYXBvcmUnLFxyXG4gICAgICAgICAgICB0aW1lOiAnMy8xMi0xNCcsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1VYmQwOU9vVlAwTSZsaXN0PVBMaDd5TS1EUEVEWWlzaVRzQ0FXaERGTl8wVGdYYXNnMzknLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQmxvY2tzaG93IENvaW50ZWxlZ3JhcGggeCBNci5CbG9jaycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQb3J0YWwgTmV0d29yayBwaXRjaCAtIFZpbmNlbnQgVHUsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmsnLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaSwgVGFpd2FuJyxcclxuICAgICAgICAgICAgdGltZTogJzMvOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYWNjdXBhc3MuY29tL2V2ZW50LzE4MDIyNTEyNTU0OTE5NDE0MTgzOTcnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MjI3NDQzNjc3NDQwMTkvJyxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ2VUb3JvIFggTXIuIEJsb2NrJyxcclxuICAgICAgICAgICAgY29udGVudDogJ05FTyBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIGEgUHl0aG9uIERldmVsb3BlciBKb2hubnkgSHNpZWgsIENvLWZvdW5kZXIgb2YgUG9ydGFsIE5ldHdvcmssIFB5dGhvbiBEZXZlbG9wZXInLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1RhaXBlaScsXHJcbiAgICAgICAgICAgIHRpbWU6ICcyLzI0JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDEwMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5hY2N1cGFzcy5jb20vZXZlbnQvMTgwMjA4MDQ1MzU0NTY5NTY5NjgwMCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbyAxJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tcmJsb2NrLnR3L3ZpZGVvcy8xODA3ODI1MjgyNTY5MjYxLycsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3ZpZGVvIDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21yYmxvY2sudHcvdmlkZW9zLzE4MDgwMDU3OTI1NTEyMTAvJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEb2N1bWVudGF0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdQcm9wb3NlIG11bHRpaGFzaCBmdW5jdGlvbnMgdG8gc3VwcG9ydCBFQ05TIFB1YmxpYyBSZXNvbHZlciBzbWFydCBjb250cmFjdCBJbXBsZW1lbnRhdGlvbiBvZiBFQ0lQIC0gMTA0NCcsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FdGhlcmV1bUNvbW1vbndlYWx0aC9FQ05TL3B1bGwvMycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIENsYXNzaWMgSW1wcm92ZW1lbnQgUHJvcG9zYWwsIEVDSVAtMTA0NCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUNJUCB0byDigJxGb3JtYWxpemUgSVBGUyBoYXNoIGludG8gRUNOUyByZXNvbHZlcuKAnTxicj4yLiBQcm9wb3NlIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGJldHdlZW4gSVBGUyBhbmQgRXRoZXJldW0gQ2xhc3NpYycsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bXByb2plY3QvRUNJUHMvcHVsbC85NCcsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VOUyBwdWJsaWMgcmVzb2x2ZXIgc21hcnQgY29udHJhY3QgY29udHJpYnV0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogJ1Byb3Bvc2UgbXVsdGloYXNoIGZ1bmN0aW9ucyB0byBzdXBwb3J0IEVOUyBQdWJsaWMgUmVzb2x2ZXIgc21hcnQgY29udHJhY3QgSW1wbGVtZW50YXRpb24gb2YgRUlQIC0gMTA2MicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTAnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy8nLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbnNkb21haW5zL2Vucy9wdWxsLzI3OScsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0V0aGVyZXVtIEltcHJvdmVtZW50IFByb3Bvc2FsLCBFSVAtMTA2MicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBDcmVhdGUgYW4gRUlQIHRvIOKAnEZvcm1hbGl6ZSBJUEZTIGhhc2ggaW50byBFTlMgcmVzb2x2ZXLigJ08YnI+Mi4gUHJvcG9zZSBmdW5jdGlvbnMgdG8gY29udmVydCBiZXR3ZWVuIElQRlMgYW5kIEV0aGVyZXVtJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS83JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcnLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL3B1bGwvMTA2MicsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgIHZpZGVvczogW10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0FwcGxpY2F0aW9uJyxcclxuICAgICAgICBpY29uOiAnLi9pbWFnZXMvcm9hZG1hcC9kb2N1bWVudGF0aW9uLnN2ZycsXHJcbiAgICAgICAgZmxhZ3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdbcHJvZHVjdF0gUHJvdGFsIE5ldHdvcmsgQ2hyb21lIEV4dGVuc2lvbiBFbmhhbmNlbWVudCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBTdXBwb3J0IC5ldGggYW5kIC5ldGMgZG9tYWlucywgLndhbiBpcyB1bmRlciBkZXZlbG9wbWVudDxicj4yLiBVc2UgbXVsdGloYXNoIGZ1bmN0aW9uIHRvIGNvbnZlcnQgRU5TIGFuZCBFQ05TIFB1YmxpYyBSZXNvbHZlciBkYXRhPD4zLiBMZXQgdXNlcnMgY2FuIGRpcmVjdGx5IHZpc2l0IGRlY2VudHJhbGl6ZWQgd2Vic2l0ZScsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMTInLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL3BvcnRhbC1uZXR3b3JrLWJyb3dzZXItZXh0ZW5zaW9uJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXRhbWFzayBFbmhhbmNlbWVudCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdFbmhhbmNlbWVudCBNZXRhTWFzayB0byBpbnRlZ3JhdGUgd2l0aCBFTlMgcmVzb2x2ZXIgdG8gcmVkaXJlY3QgdG8gZGVjZW50cmFsaXplIHdlYicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvOScsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Qb3J0YWxOZXR3b3JrL21ldGFtYXNrLWV4dGVuc2lvbidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIERlZXAgbGVhcm5pbmcgbW9kZWwnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gRW5oYW5jZSB0cmFkaW5nIG1hdGNoaW5nIHJhdGUgPGJyPjIuIFdlIGNvbGxlY3Qgb3ZlciAxbSB0b3AgdmFsdWUgZG9tYWlucyBmcm9tIGNlbnRyYWxpemUgZG9tYWlucyBhbmQgYWxsIHRoZSBFdGhlcmV1bSBkb21haW5zLiBXaXRoIGRlZXAgbGVhcm5pbmcgd2UgYXJlIGFibGUgdG8gbWFrZSBBSSBzeXN0ZW1zIHdoaWNoIGNhbiBwcmVkaWN0IHRoZSBkb21haW5zIHZhbHVlLiBXZSBoYXZlIHR3byBraW5kcyBvZiBzeXN0ZW1zLCBvbmUgaXMgdG8gZmluZCBoaWdoIHZhbHVlIGRvbWFpbnMgLCB0aGUgb3RoZXIgaXMgdG8gcHJlZGljdCB0aGUgcG9zc2libGUgcHJpY2Ugb2YgdGhlIGRvbWFpbnMuJyxcclxuICAgICAgICAgICAgcGhvdG9zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgICAgICB0aW1lOiAnNS8yJyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdbcHJvZHVjdF0gV0hPSVMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gUGFyaW5nIGFuZCBjbGVhbmluZyBhbGwgdGhlIGRvbWFpbnMgb24gRXRoZXJldW0uPGJyPjIuIEJlZ2luIHRvIGJ1aWxkIHVwIEV0aGVyZXVtIENsYXNzaWMgV0hPSVMgc3lzdGVtIGFuZCBjb2xsZWN0IGRhdGFzIG9uIGl0LicsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzUvMicsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiA1MCxcclxuICAgICAgICAgICAgbGlua3M6IFtcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZ2l0aHViczogW10sXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgdmlkZW9zOiBbXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnW3Byb2R1Y3RdIE9ubGluZSBEZWNlbnRyYWxpemVkIFdlYnNpdGUgQnVpbGRlcicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcxLiBQZXJzb25hbCBwcm9maWxlIGJ1aWxkZXI8YnI+Mi4gQ3VzdG9taXplZCB3ZWJzaXRlIGRlcGxveW1lbnQ8YnI+My4gQmFja2VuZCBjb250cnVjc3Rpb24nLFxyXG4gICAgICAgICAgICBwaG90b3M6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgICAgIHRpbWU6ICc0LzE5JyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDUwLFxyXG4gICAgICAgICAgICBsaW5rczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgIHVybDogJyBodHRwczovL2hhY2thdGhvbi5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdbcHJvZHVjdF0gUG9ydGFsIE5ldHdvcmsgTWFya2V0cGxhY2UnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnMS4gVXNlciByZWdpc3RyYXRpb24gaW1wcm92ZW1lbnQgUmVmYWN0b3JpbmcgdGhlIHVzYWJpbGl0eSBSZWZhY3RvcmluZyBhbmQgSW50ZWdyYXRpb24gd2l0aCBldGhlcmV1bSBVSS9VWCBkZXNpZ24gZW5oYW5jZW1lbnQgQ29uc3RydWN0aW5nIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBTZWN1cml0eSBFbmhhbmNlbWVudDxicj4yLiBDb25zdHJ1Y3RpbmcgdXNlciBwcm9maWxlIGRhc2hib2FyZCcsXHJcbiAgICAgICAgICAgIHBob3RvczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnJyxcclxuICAgICAgICAgICAgdGltZTogJzQvMTYnLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogNTAsXHJcbiAgICAgICAgICAgIGxpbmtzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnIGh0dHBzOi8vYmV0YS5wb3J0YWwubmV0d29yaycsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBnaXRodWJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHdhdGNoOntcclxuICAgIGlzT3BlblBvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpPT57XHJcbiAgICAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHBob3Rvc0luTW9kYWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3dQaG90b3M7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb3BlbkNvbnRlbnRGbjogZnVuY3Rpb24gKGlkeCkge1xyXG4gICAgICB0aGlzLm1hcERhdGFbaWR4XS5vcGVuID0gIXRoaXMubWFwRGF0YVtpZHhdLm9wZW47XHJcbiAgICB9LFxyXG4gICAgb3Blbk1vZGFsOiBmdW5jdGlvbihwaG90b0Fycikge1xyXG4gICAgICB0aGlzLmlzT3BlblBvcCA9IHRydWU7XHJcbiAgICAgIHRoaXMubm93UGhvdG9zID0gcGhvdG9BcnI7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuUG9wID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm93UGhvdG9zID0gW107XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsVG9DaGFwdGVyOiBmdW5jdGlvbihpZHgpIHtcclxuICAgICAgY29uc3QgY2hhcHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcHRlcicpO1xyXG4gICAgICBjb25zdCB0YXJnZXRDaGFwdGVyID0gY2hhcHRlcnNbaWR4XTtcclxuICAgICAgY29uc3QgZWxlbWVudFRvcCA9IEdldE9mZnNldCh0YXJnZXRDaGFwdGVyKTtcclxuICAgICAgYW5pbWF0ZVNjcm9sbFRvKGVsZW1lbnRUb3AudG9wIC0gMTAwKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHdpbmRvdy5JbnRlcmNvbShcImJvb3RcIiwge1xyXG4gICAgICAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5JbnRlcmNvbShcInVwZGF0ZVwiKTtcclxuICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTsgXHJcbiAgfVxyXG59KSIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGRlc2lyZWRPZmZzZXQgLSBwYWdlIG9mZnNldCB0byBzY3JvbGwgdG9cbiAgLy8gc3BlZWQgLSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIHBlciAxMDAwcHhcbiAgZnVuY3Rpb24gX19BTklNQVRFX1NDUk9MTF9UTyhkZXNpcmVkT2Zmc2V0KSB7XG4gICAgdmFyIHVzZXJPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBtaW5EdXJhdGlvbjogMjUwLFxuICAgICAgbWF4RHVyYXRpb246IDE1MDAsXG4gICAgICBjYW5jZWxPblVzZXJBY3Rpb246IHRydWUsXG4gICAgICBlbGVtZW50OiB3aW5kb3csXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnNLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gb3B0aW9uc0tleXNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdXNlck9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uICYmIG9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICBpZiAodXNlck9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYW5pbWF0ZWQtc2Nyb2xsLXRvOlxcbiBcInBhc3NpdmVcIiB3YXMgc2V0IHRvIFwiZmFsc2VcIiB0byBwcmV2ZW50IGVycm9ycywgJyArXG4gICAgICAgICAgJ2FzIHVzaW5nIFwiY2FuY2VsT25Vc2VyQWN0aW9uOiBmYWxzZVwiIGRvZXNuXFwndCB3b3JrIHdpdGggcGFzc2l2ZSBldmVudHMuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVzaXJlZE9mZnNldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAodXNlck9wdGlvbnMuZWxlbWVudCAmJiB1c2VyT3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0KVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbExlZnQgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbFRvcCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBhZGRpdG9uYWwgdXNlciBvZmZzZXRcbiAgICBkZXNpcmVkT2Zmc2V0ICs9IG9wdGlvbnMub2Zmc2V0XG5cbiAgICBvcHRpb25zLmlzV2luZG93ID0gb3B0aW9ucy5lbGVtZW50ID09PSB3aW5kb3c7XG5cbiAgICB2YXIgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICB2YXIgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gMDtcbiAgICB2YXIgbWF4U2Nyb2xsID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmlzV2luZG93KSB7XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgaGVpZ2h0IG1pbnVzIHdpbmRvdyBoZWlnaHRcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCB3aWR0aCBtaW51cyB3aW5kb3cgd2lkdGhcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRE9NIGVsZW1lbnRcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0gYXZhaWxhYmxlIHNjcm9sbFxuICAgIGlmIChkZXNpcmVkT2Zmc2V0ID4gbWF4U2Nyb2xsKSB7XG4gICAgICBkZXNpcmVkT2Zmc2V0ID0gbWF4U2Nyb2xsO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkaWZmIHRvIHNjcm9sbFxuICAgIHZhciBkaWZmID0gZGVzaXJlZE9mZnNldCAtIGluaXRpYWxTY3JvbGxQb3NpdGlvbjtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSB0aGVyZVxuICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgaWYgKG9wdGlvbnMub25Db21wbGV0ZSAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbFxuICAgIHZhciBkdXJhdGlvbiA9IE1hdGguYWJzKE1hdGgucm91bmQoKGRpZmYgLyAxMDAwKSAqIG9wdGlvbnMuc3BlZWQpKTtcblxuICAgIC8vIFNldCBtaW5pbXVtIGFuZCBtYXhpbXVtIGR1cmF0aW9uXG4gICAgaWYgKGR1cmF0aW9uIDwgb3B0aW9ucy5taW5EdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1pbkR1cmF0aW9uO1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPiBvcHRpb25zLm1heER1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWF4RHVyYXRpb247XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0aW5nVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAvLyBSZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBJRFxuICAgIHZhciByZXF1ZXN0SUQgPSBudWxsO1xuXG4gICAgLy8gTWV0aG9kIGhhbmRsZXJcbiAgICB2YXIgaGFuZGxlVXNlckV2ZW50ID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gY2FuY2VsIHNjcm9sbCBvbiB1c2VyIGFjdGlvblxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBwcmV2ZW50IHVzZXIgYWN0aW9ucyB3aGlsZSBzY3JvbGwgaXMgYWN0aXZlXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuXG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHN0YXJ0aW5nVGltZTtcbiAgICAgIHZhciB0ID0gKHRpbWVEaWZmIC8gZHVyYXRpb24pIC0gMTtcbiAgICAgIHZhciBlYXNpbmcgPSB0ICogdCAqIHQgKyAxO1xuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChpbml0aWFsU2Nyb2xsUG9zaXRpb24gKyAoZGlmZiAqIGVhc2luZykpO1xuXG4gICAgICB2YXIgZG9TY3JvbGwgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhwb3NpdGlvbiwgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZURpZmYgPCBkdXJhdGlvbiAmJiBzY3JvbGxQb3NpdGlvbiAhPT0gZGVzaXJlZE9mZnNldCkge1xuICAgICAgICAvLyBJZiBzY3JvbGwgZGlkbid0IHJlYWNoIGRlc2lyZWQgb2Zmc2V0IG9yIHRpbWUgaXMgbm90IGVsYXBzZWRcbiAgICAgICAgLy8gU2Nyb2xsIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgICAgIC8vIEFuZCByZXF1ZXN0IGEgbmV3IHN0ZXBcbiAgICAgICAgZG9TY3JvbGwoc2Nyb2xsUG9zaXRpb24pO1xuXG4gICAgICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSB0aW1lIGVsYXBzZWQgb3Igd2UgcmVhY2hlZCB0aGUgZGVzaXJlZCBvZmZzZXRcbiAgICAgICAgLy8gU2V0IHNjcm9sbCB0byB0aGUgZGVzaXJlZCBvZmZzZXQgKHdoZW4gcm91bmRpbmcgbWFkZSBpdCB0byBiZSBvZmYgYSBwaXhlbCBvciB0d28pXG4gICAgICAgIC8vIENsZWFyIGFuaW1hdGlvbiBmcmFtZSB0byBiZSBzdXJlXG4gICAgICAgIGRvU2Nyb2xsKGRlc2lyZWRPZmZzZXQpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gaXMgY29tcGxldGUsIGV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgYW5pbWF0aW5nIHNjcm9sbFxuICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfSBlbHNlIGlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuYW5pbWF0ZVNjcm9sbFRvID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiJdfQ==
