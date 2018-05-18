(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
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
        console && console.warn('animated-scroll-to:\n "passive" was set to "false" to prevent errors, ' + 'as using "cancelOnUserAction: false" doesn\'t work with passive events.');
      }
    }

    if (desiredOffset instanceof HTMLElement) {
      if (userOptions.element && userOptions.element instanceof HTMLElement) {
        if (options.horizontal) {
          desiredOffset = desiredOffset.getBoundingClientRect().left + userOptions.element.scrollLeft - userOptions.element.getBoundingClientRect().left;
        } else {
          desiredOffset = desiredOffset.getBoundingClientRect().top + userOptions.element.scrollTop - userOptions.element.getBoundingClientRect().top;
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
    desiredOffset += options.offset;

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
        maxScroll = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth;
      } else {
        // get cross browser scroll positions
        initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
        initialAxisScollPosition = window.scrollX || document.documentElement.scrollLeft;
        // cross browser document width minus window width
        maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;
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
        options.onComplete();
      }

      return;
    }

    // Calculate duration of the scroll
    var duration = Math.abs(Math.round(diff / 1000 * options.speed));

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
      handleUserEvent = function handleUserEvent() {
        removeListeners();
        cancelAnimationFrame(requestID);
      };
      window.addEventListener('keydown', handleUserEvent, { passive: options.passive });
      window.addEventListener('mousedown', handleUserEvent, { passive: options.passive });
    } else {
      // Set handler to prevent user actions while scroll is active
      handleUserEvent = function handleUserEvent(e) {
        e.preventDefault();
      };
      window.addEventListener('scroll', handleUserEvent, { passive: options.passive });
    }

    window.addEventListener('wheel', handleUserEvent, { passive: options.passive });
    window.addEventListener('touchstart', handleUserEvent, { passive: options.passive });

    var removeListeners = function removeListeners() {
      window.removeEventListener('wheel', handleUserEvent);
      window.removeEventListener('touchstart', handleUserEvent);

      if (options.cancelOnUserAction) {
        window.removeEventListener('keydown', handleUserEvent);
        window.removeEventListener('mousedown', handleUserEvent);
      } else {
        window.removeEventListener('scroll', handleUserEvent);
      }
    };

    var step = function step() {
      var timeDiff = Date.now() - startingTime;
      var t = timeDiff / duration - 1;
      var easing = t * t * t + 1;
      var scrollPosition = Math.round(initialScrollPosition + diff * easing);

      var doScroll = function doScroll(position) {
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
      };

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
          options.onComplete();
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
}).call(undefined);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvc2Nyb2xsVG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsWUFBVztBQUNWOztBQUVBO0FBQ0E7O0FBQ0EsV0FBUyxtQkFBVCxDQUE2QixhQUE3QixFQUE0QztBQUMxQyxRQUFJLGNBQWMsVUFBVSxNQUFWLElBQW9CLENBQXBCLElBQXlCLFVBQVUsQ0FBVixNQUFpQixTQUExQyxHQUFzRCxFQUF0RCxHQUEyRCxVQUFVLENBQVYsQ0FBN0U7O0FBRUEsUUFBSSxVQUFVO0FBQ1osYUFBTyxHQURLO0FBRVosbUJBQWEsR0FGRDtBQUdaLG1CQUFhLElBSEQ7QUFJWiwwQkFBb0IsSUFKUjtBQUtaLGVBQVMsTUFMRztBQU1aLGtCQUFZLEtBTkE7QUFPWixrQkFBWSxTQVBBO0FBUVosZUFBUyxJQVJHO0FBU1osY0FBUTtBQVRJLEtBQWQ7O0FBWUEsUUFBSSxjQUFjLE9BQU8sSUFBUCxDQUFZLE9BQVosQ0FBbEI7O0FBRUE7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksWUFBWSxNQUFoQyxFQUF3QyxHQUF4QyxFQUE2QztBQUMzQyxVQUFJLE1BQU0sWUFBWSxDQUFaLENBQVY7O0FBRUEsVUFBSSxPQUFPLFlBQVksR0FBWixDQUFQLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDLGdCQUFRLEdBQVIsSUFBZSxZQUFZLEdBQVosQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSSxDQUFDLFFBQVEsa0JBQVQsSUFBK0IsUUFBUSxPQUEzQyxFQUFvRDtBQUNsRCxjQUFRLE9BQVIsR0FBa0IsS0FBbEI7QUFDQSxVQUFJLFlBQVksT0FBaEIsRUFBeUI7QUFDdkIsbUJBQVcsUUFBUSxJQUFSLENBQ1QsMkVBQ0EseUVBRlMsQ0FBWDtBQUdEO0FBQ0Y7O0FBRUQsUUFBSSx5QkFBeUIsV0FBN0IsRUFBMEM7QUFDeEMsVUFBSSxZQUFZLE9BQVosSUFBdUIsWUFB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M0Q7QUFDQTtBQUNBO0FBQ0EsaUJBQVMsY0FBVDs7QUFFQSxvQkFBWSxzQkFBc0IsSUFBdEIsQ0FBWjtBQUNELE9BUEQsTUFPTztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFTLGFBQVQ7O0FBRUEsNkJBQXFCLFNBQXJCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFJLFFBQVEsVUFBUixJQUFzQixPQUFPLFFBQVEsVUFBZixLQUE4QixVQUF4RCxFQUFvRTtBQUNsRSxrQkFBUSxVQUFSO0FBQ0Q7QUFDRjtBQUNGLEtBM0NEOztBQTZDQTtBQUNBLGdCQUFZLHNCQUFzQixJQUF0QixDQUFaO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbEMsUUFBSSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxPQUE1QyxFQUFxRDtBQUNuRCxhQUFPLE9BQVAsR0FBaUIsbUJBQWpCO0FBQ0EsZ0JBQVUsT0FBTyxPQUFqQjtBQUNEO0FBQ0QsWUFBUSxPQUFSLEdBQWtCLG1CQUFsQjtBQUNELEdBTkQsTUFNTyxJQUFJLE1BQUosRUFBWTtBQUNqQixXQUFPLGVBQVAsR0FBeUIsbUJBQXpCO0FBQ0Q7QUFDRixDQS9ORCxFQStORyxJQS9OSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGRlc2lyZWRPZmZzZXQgLSBwYWdlIG9mZnNldCB0byBzY3JvbGwgdG9cbiAgLy8gc3BlZWQgLSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIHBlciAxMDAwcHhcbiAgZnVuY3Rpb24gX19BTklNQVRFX1NDUk9MTF9UTyhkZXNpcmVkT2Zmc2V0KSB7XG4gICAgdmFyIHVzZXJPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBtaW5EdXJhdGlvbjogMjUwLFxuICAgICAgbWF4RHVyYXRpb246IDE1MDAsXG4gICAgICBjYW5jZWxPblVzZXJBY3Rpb246IHRydWUsXG4gICAgICBlbGVtZW50OiB3aW5kb3csXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIG9uQ29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnNLZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG5cbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IG9wdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnNLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gb3B0aW9uc0tleXNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdXNlck9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuY2FuY2VsT25Vc2VyQWN0aW9uICYmIG9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICBpZiAodXNlck9wdGlvbnMucGFzc2l2ZSkge1xuICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYW5pbWF0ZWQtc2Nyb2xsLXRvOlxcbiBcInBhc3NpdmVcIiB3YXMgc2V0IHRvIFwiZmFsc2VcIiB0byBwcmV2ZW50IGVycm9ycywgJyArXG4gICAgICAgICAgJ2FzIHVzaW5nIFwiY2FuY2VsT25Vc2VyQWN0aW9uOiBmYWxzZVwiIGRvZXNuXFwndCB3b3JrIHdpdGggcGFzc2l2ZSBldmVudHMuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVzaXJlZE9mZnNldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAodXNlck9wdGlvbnMuZWxlbWVudCAmJiB1c2VyT3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgIGRlc2lyZWRPZmZzZXQgPSAoZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxMZWZ0KVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHVzZXJPcHRpb25zLmVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICAgICAgLSB1c2VyT3B0aW9ucy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbExlZnQgKyBkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgZGVzaXJlZE9mZnNldCA9IHNjcm9sbFRvcCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBhZGRpdG9uYWwgdXNlciBvZmZzZXRcbiAgICBkZXNpcmVkT2Zmc2V0ICs9IG9wdGlvbnMub2Zmc2V0XG5cbiAgICBvcHRpb25zLmlzV2luZG93ID0gb3B0aW9ucy5lbGVtZW50ID09PSB3aW5kb3c7XG5cbiAgICB2YXIgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICB2YXIgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gMDtcbiAgICB2YXIgbWF4U2Nyb2xsID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmlzV2luZG93KSB7XG4gICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgIC8vIGdldCBjcm9zcyBicm93c2VyIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIC8vIGNyb3NzIGJyb3dzZXIgZG9jdW1lbnQgaGVpZ2h0IG1pbnVzIHdpbmRvdyBoZWlnaHRcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCB3aWR0aCBtaW51cyB3aW5kb3cgd2lkdGhcbiAgICAgICAgbWF4U2Nyb2xsID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgKSAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRE9NIGVsZW1lbnRcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIG1heFNjcm9sbCA9IG9wdGlvbnMuZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBvcHRpb25zLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZ3JlYXRlciB0aGFuIG1heGltdW0gYXZhaWxhYmxlIHNjcm9sbFxuICAgIGlmIChkZXNpcmVkT2Zmc2V0ID4gbWF4U2Nyb2xsKSB7XG4gICAgICBkZXNpcmVkT2Zmc2V0ID0gbWF4U2Nyb2xsO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkaWZmIHRvIHNjcm9sbFxuICAgIHZhciBkaWZmID0gZGVzaXJlZE9mZnNldCAtIGluaXRpYWxTY3JvbGxQb3NpdGlvbjtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSB0aGVyZVxuICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAvLyBFeGVjdXRlIGNhbGxiYWNrIGlmIHRoZXJlIGlzIGFueVxuICAgICAgaWYgKG9wdGlvbnMub25Db21wbGV0ZSAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgZHVyYXRpb24gb2YgdGhlIHNjcm9sbFxuICAgIHZhciBkdXJhdGlvbiA9IE1hdGguYWJzKE1hdGgucm91bmQoKGRpZmYgLyAxMDAwKSAqIG9wdGlvbnMuc3BlZWQpKTtcblxuICAgIC8vIFNldCBtaW5pbXVtIGFuZCBtYXhpbXVtIGR1cmF0aW9uXG4gICAgaWYgKGR1cmF0aW9uIDwgb3B0aW9ucy5taW5EdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSBvcHRpb25zLm1pbkR1cmF0aW9uO1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPiBvcHRpb25zLm1heER1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWF4RHVyYXRpb247XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0aW5nVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAvLyBSZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBJRFxuICAgIHZhciByZXF1ZXN0SUQgPSBudWxsO1xuXG4gICAgLy8gTWV0aG9kIGhhbmRsZXJcbiAgICB2YXIgaGFuZGxlVXNlckV2ZW50ID0gbnVsbDtcblxuICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gY2FuY2VsIHNjcm9sbCBvbiB1c2VyIGFjdGlvblxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50LCB7IHBhc3NpdmU6IG9wdGlvbnMucGFzc2l2ZSB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBwcmV2ZW50IHVzZXIgYWN0aW9ucyB3aGlsZSBzY3JvbGwgaXMgYWN0aXZlXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCwgeyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQsIHsgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlIH0pO1xuXG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHN0YXJ0aW5nVGltZTtcbiAgICAgIHZhciB0ID0gKHRpbWVEaWZmIC8gZHVyYXRpb24pIC0gMTtcbiAgICAgIHZhciBlYXNpbmcgPSB0ICogdCAqIHQgKyAxO1xuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChpbml0aWFsU2Nyb2xsUG9zaXRpb24gKyAoZGlmZiAqIGVhc2luZykpO1xuXG4gICAgICB2YXIgZG9TY3JvbGwgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhwb3NpdGlvbiwgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZURpZmYgPCBkdXJhdGlvbiAmJiBzY3JvbGxQb3NpdGlvbiAhPT0gZGVzaXJlZE9mZnNldCkge1xuICAgICAgICAvLyBJZiBzY3JvbGwgZGlkbid0IHJlYWNoIGRlc2lyZWQgb2Zmc2V0IG9yIHRpbWUgaXMgbm90IGVsYXBzZWRcbiAgICAgICAgLy8gU2Nyb2xsIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgICAgIC8vIEFuZCByZXF1ZXN0IGEgbmV3IHN0ZXBcbiAgICAgICAgZG9TY3JvbGwoc2Nyb2xsUG9zaXRpb24pO1xuXG4gICAgICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSB0aW1lIGVsYXBzZWQgb3Igd2UgcmVhY2hlZCB0aGUgZGVzaXJlZCBvZmZzZXRcbiAgICAgICAgLy8gU2V0IHNjcm9sbCB0byB0aGUgZGVzaXJlZCBvZmZzZXQgKHdoZW4gcm91bmRpbmcgbWFkZSBpdCB0byBiZSBvZmYgYSBwaXhlbCBvciB0d28pXG4gICAgICAgIC8vIENsZWFyIGFuaW1hdGlvbiBmcmFtZSB0byBiZSBzdXJlXG4gICAgICAgIGRvU2Nyb2xsKGRlc2lyZWRPZmZzZXQpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gaXMgY29tcGxldGUsIGV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgYW5pbWF0aW5nIHNjcm9sbFxuICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfSBlbHNlIGlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuYW5pbWF0ZVNjcm9sbFRvID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfVxufSkuY2FsbCh0aGlzKTsiXX0=
