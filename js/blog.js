(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

new Vue({
  el: '.blog',
  data: {
    isMenuOpen: false,
    isheaderFix: false,
    scroll: 0
  },
  methods: {
    toggleMenuFn: function toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollFn: function scrollFn() {
      this.scroll = document.documentElement.scrollTop;
      this.isheaderFix = this.scroll > 150;
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.scrollFn);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxHQUFKLENBQVE7QUFDTixNQUFJLE9BREU7QUFFTixRQUFNO0FBQ0osZ0JBQVksS0FEUjtBQUVKLGlCQUFhLEtBRlQ7QUFHSixZQUFRO0FBSEosR0FGQTtBQU9OLFdBQVM7QUFDUCxnQkFETywwQkFDUTtBQUNiLFdBQUssVUFBTCxHQUFrQixDQUFDLEtBQUssVUFBeEI7QUFDRCxLQUhNO0FBSVAsWUFKTyxzQkFJSTtBQUNULFdBQUssTUFBTCxHQUFjLFNBQVMsZUFBVCxDQUF5QixTQUF2QztBQUNBLFdBQUssV0FBTCxHQUFtQixLQUFLLE1BQUwsR0FBYyxHQUFqQztBQUNEO0FBUE0sR0FQSDtBQWdCTixTQWhCTSxxQkFnQkc7QUFDUCxXQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssUUFBdkM7QUFDRDtBQWxCSyxDQUFSIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibmV3IFZ1ZSh7XG4gIGVsOiAnLmJsb2cnLFxuICBkYXRhOiB7XG4gICAgaXNNZW51T3BlbjogZmFsc2UsXG4gICAgaXNoZWFkZXJGaXg6IGZhbHNlLFxuICAgIHNjcm9sbDogMCxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU1lbnVGbigpIHtcbiAgICAgIHRoaXMuaXNNZW51T3BlbiA9ICF0aGlzLmlzTWVudU9wZW47XG4gICAgfSxcbiAgICBzY3JvbGxGbigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuaXNoZWFkZXJGaXggPSB0aGlzLnNjcm9sbCA+IDE1MDtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxGbik7XG4gIH1cbn0pOyJdfQ==
