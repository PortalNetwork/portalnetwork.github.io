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

(function () {
    new Vue({
        el: '#app',
        data: {
            isMenuOpen: false
        },
        methods: {
            toggleMenuFn: function toggleMenuFn() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            comingsoonFn: function comingsoonFn() {
                alert("coming soon");
            }
        },
        mounted: function mounted() {
            AOS.init();
            window.Intercom("boot", {
                app_id: "an50zjec"
            });
            window.Intercom("update");
            // document.getElementById("learn").addEventListener("click", () => {
            //     const elementTop = GetOffset(document.getElementsByClassName("product")[0]);
            //     animateScrollTo(elementTop.top);
            // })
        }
    });
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYW5pbWF0ZWQtc2Nyb2xsLXRvL2FuaW1hdGVkLXNjcm9sbC10by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUNBLFNBQVMsU0FBVCxDQUFtQixFQUFuQixFQUF1QjtBQUNyQixRQUFNLE1BQU0sR0FBRyxxQkFBSCxFQUFaO0FBQ0EsV0FBTztBQUNILGFBQUssSUFBSSxHQUFKLEdBQVUsT0FBTyxXQUFqQixHQUErQixTQUFTLGVBQVQsQ0FBeUIsU0FEMUQ7QUFFSCxjQUFNLElBQUksSUFBSixHQUFXLE9BQU8sV0FBbEIsR0FBZ0MsU0FBUyxlQUFULENBQXlCO0FBRjVELEtBQVA7QUFJRDs7QUFFRCxDQUFDLFlBQU07QUFDSCxRQUFJLEdBQUosQ0FBUTtBQUNKLFlBQUksTUFEQTtBQUVKLGNBQU07QUFDRix3QkFBYTtBQURYLFNBRkY7QUFLSixpQkFBUztBQUNMLHdCQURLLDBCQUNVO0FBQ1gscUJBQUssVUFBTCxHQUFrQixDQUFDLEtBQUssVUFBeEI7QUFDSCxhQUhJO0FBSUwsd0JBSkssMEJBSVU7QUFDWCxzQkFBTSxhQUFOO0FBQ0g7QUFOSSxTQUxMO0FBYUosZUFiSSxxQkFhTTtBQUNOLGdCQUFJLElBQUo7QUFDQSxtQkFBTyxRQUFQLENBQWdCLE1BQWhCLEVBQXdCO0FBQ3BCLHdCQUFRO0FBRFksYUFBeEI7QUFHQSxtQkFBTyxRQUFQLENBQWdCLFFBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXZCRyxLQUFSO0FBeUJILENBMUJEOzs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5mdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbiAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuICB9XG59XG5cbigoKSA9PiB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAnI2FwcCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlzTWVudU9wZW4gOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b2dnbGVNZW51Rm4oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21pbmdzb29uRm4oKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjb21pbmcgc29vblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHsgXG4gICAgICAgICAgICBBT1MuaW5pdCgpO1xuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwiYm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwidXBkYXRlXCIpO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWFyblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBHZXRPZmZzZXQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2R1Y3RcIilbMF0pO1xuICAgICAgICAgICAgLy8gICAgIGFuaW1hdGVTY3JvbGxUbyhlbGVtZW50VG9wLnRvcCk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBkZXNpcmVkT2Zmc2V0IC0gcGFnZSBvZmZzZXQgdG8gc2Nyb2xsIHRvXG4gIC8vIHNwZWVkIC0gZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBwZXIgMTAwMHB4XG4gIGZ1bmN0aW9uIF9fQU5JTUFURV9TQ1JPTExfVE8oZGVzaXJlZE9mZnNldCkge1xuICAgIHZhciB1c2VyT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgbWluRHVyYXRpb246IDI1MCxcbiAgICAgIG1heER1cmF0aW9uOiAxNTAwLFxuICAgICAgY2FuY2VsT25Vc2VyQWN0aW9uOiB0cnVlLFxuICAgICAgZWxlbWVudDogd2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICBvbkNvbXBsZXRlOiB1bmRlZmluZWQsXG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuXG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IG9wdGlvbnNLZXlzW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbiAmJiBvcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHVzZXJPcHRpb25zLnBhc3NpdmUpIHtcbiAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2FuaW1hdGVkLXNjcm9sbC10bzpcXG4gXCJwYXNzaXZlXCIgd2FzIHNldCB0byBcImZhbHNlXCIgdG8gcHJldmVudCBlcnJvcnMsICcgK1xuICAgICAgICAgICdhcyB1c2luZyBcImNhbmNlbE9uVXNlckFjdGlvbjogZmFsc2VcIiBkb2VzblxcJ3Qgd29yayB3aXRoIHBhc3NpdmUgZXZlbnRzLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKHVzZXJPcHRpb25zLmVsZW1lbnQgJiYgdXNlck9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgICAgIC0gdXNlck9wdGlvbnMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGRlc2lyZWRPZmZzZXQgPSBzY3JvbGxUb3AgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYWRkaXRvbmFsIHVzZXIgb2Zmc2V0XG4gICAgZGVzaXJlZE9mZnNldCArPSBvcHRpb25zLm9mZnNldFxuXG4gICAgb3B0aW9ucy5pc1dpbmRvdyA9IG9wdGlvbnMuZWxlbWVudCA9PT0gd2luZG93O1xuXG4gICAgdmFyIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IDA7XG4gICAgdmFyIG1heFNjcm9sbCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IGhlaWdodCBtaW51cyB3aW5kb3cgaGVpZ2h0XG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgd2lkdGggbWludXMgd2luZG93IHdpZHRoXG4gICAgICAgIG1heFNjcm9sbCA9IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERPTSBlbGVtZW50XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBtYXhTY3JvbGwgPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGdyZWF0ZXIgdGhhbiBtYXhpbXVtIGF2YWlsYWJsZSBzY3JvbGxcbiAgICBpZiAoZGVzaXJlZE9mZnNldCA+IG1heFNjcm9sbCkge1xuICAgICAgZGVzaXJlZE9mZnNldCA9IG1heFNjcm9sbDtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZGlmZiB0byBzY3JvbGxcbiAgICB2YXIgZGlmZiA9IGRlc2lyZWRPZmZzZXQgLSBpbml0aWFsU2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBwYWdlIGlzIGFscmVhZHkgdGhlcmVcbiAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgLy8gRXhlY3V0ZSBjYWxsYmFjayBpZiB0aGVyZSBpcyBhbnlcbiAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyhNYXRoLnJvdW5kKChkaWZmIC8gMTAwMCkgKiBvcHRpb25zLnNwZWVkKSk7XG5cbiAgICAvLyBTZXQgbWluaW11bSBhbmQgbWF4aW11bSBkdXJhdGlvblxuICAgIGlmIChkdXJhdGlvbiA8IG9wdGlvbnMubWluRHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5taW5EdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID4gb3B0aW9ucy5tYXhEdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1heER1cmF0aW9uO1xuICAgIH1cblxuICAgIHZhciBzdGFydGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgLy8gUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgSURcbiAgICB2YXIgcmVxdWVzdElEID0gbnVsbDtcblxuICAgIC8vIE1ldGhvZCBoYW5kbGVyXG4gICAgdmFyIGhhbmRsZVVzZXJFdmVudCA9IG51bGw7XG5cbiAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgIC8vIFNldCBoYW5kbGVyIHRvIGNhbmNlbCBzY3JvbGwgb24gdXNlciBhY3Rpb25cbiAgICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gcHJldmVudCB1c2VyIGFjdGlvbnMgd2hpbGUgc2Nyb2xsIGlzIGFjdGl2ZVxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcblxuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24pIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lRGlmZiA9IERhdGUubm93KCkgLSBzdGFydGluZ1RpbWU7XG4gICAgICB2YXIgdCA9ICh0aW1lRGlmZiAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICB2YXIgZWFzaW5nID0gdCAqIHQgKiB0ICsgMTtcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IE1hdGgucm91bmQoaW5pdGlhbFNjcm9sbFBvc2l0aW9uICsgKGRpZmYgKiBlYXNpbmcpKTtcblxuICAgICAgdmFyIGRvU2Nyb2xsID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG8ocG9zaXRpb24sIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVEaWZmIDwgZHVyYXRpb24gJiYgc2Nyb2xsUG9zaXRpb24gIT09IGRlc2lyZWRPZmZzZXQpIHtcbiAgICAgICAgLy8gSWYgc2Nyb2xsIGRpZG4ndCByZWFjaCBkZXNpcmVkIG9mZnNldCBvciB0aW1lIGlzIG5vdCBlbGFwc2VkXG4gICAgICAgIC8vIFNjcm9sbCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAgICAvLyBBbmQgcmVxdWVzdCBhIG5ldyBzdGVwXG4gICAgICAgIGRvU2Nyb2xsKHNjcm9sbFBvc2l0aW9uKTtcblxuICAgICAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdGltZSBlbGFwc2VkIG9yIHdlIHJlYWNoZWQgdGhlIGRlc2lyZWQgb2Zmc2V0XG4gICAgICAgIC8vIFNldCBzY3JvbGwgdG8gdGhlIGRlc2lyZWQgb2Zmc2V0ICh3aGVuIHJvdW5kaW5nIG1hZGUgaXQgdG8gYmUgb2ZmIGEgcGl4ZWwgb3IgdHdvKVxuICAgICAgICAvLyBDbGVhciBhbmltYXRpb24gZnJhbWUgdG8gYmUgc3VyZVxuICAgICAgICBkb1Njcm9sbChkZXNpcmVkT2Zmc2V0KTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnNcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IGFuaW1hdGluZyBzY3JvbGxcbiAgICByZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIGV4cG9ydHMuZGVmYXVsdCA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH0gZWxzZSBpZiAod2luZG93KSB7XG4gICAgd2luZG93LmFuaW1hdGVTY3JvbGxUbyA9IF9fQU5JTUFURV9TQ1JPTExfVE87XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iXX0=
