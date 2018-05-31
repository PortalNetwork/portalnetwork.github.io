(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// import animateScrollTo from 'animated-scroll-to';
// function GetOffset(el) {
//   const box = el.getBoundingClientRect();
//   return {
//       top: box.top + window.pageYOffset - document.documentElement.clientTop,
//       left: box.left + window.pageXOffset - document.documentElement.clientLeft
//   }
// }

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
        }
    });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxZQUFNO0FBQ0gsUUFBSSxHQUFKLENBQVE7QUFDSixZQUFJLE1BREE7QUFFSixjQUFNO0FBQ0Ysd0JBQWE7QUFEWCxTQUZGO0FBS0osaUJBQVM7QUFDTCx3QkFESywwQkFDVTtBQUNYLHFCQUFLLFVBQUwsR0FBa0IsQ0FBQyxLQUFLLFVBQXhCO0FBQ0gsYUFISTtBQUlMLHdCQUpLLDBCQUlVO0FBQ1gsc0JBQU0sYUFBTjtBQUNIO0FBTkksU0FMTDtBQWFKLGVBYkkscUJBYU07QUFDTixnQkFBSSxJQUFKO0FBQ0EsbUJBQU8sUUFBUCxDQUFnQixNQUFoQixFQUF3QjtBQUNwQix3QkFBUTtBQURZLGFBQXhCO0FBR0EsbUJBQU8sUUFBUCxDQUFnQixRQUFoQjtBQUNIO0FBbkJHLEtBQVI7QUFxQkgsQ0F0QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG4vLyBmdW5jdGlvbiBHZXRPZmZzZXQoZWwpIHtcbi8vICAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgICB0b3A6IGJveC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuLy8gICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxuLy8gICB9XG4vLyB9XG5cbigoKSA9PiB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiAnI2FwcCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlzTWVudU9wZW4gOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b2dnbGVNZW51Rm4oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gIXRoaXMuaXNNZW51T3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21pbmdzb29uRm4oKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjb21pbmcgc29vblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHsgXG4gICAgICAgICAgICBBT1MuaW5pdCgpO1xuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwiYm9vdFwiLCB7XG4gICAgICAgICAgICAgICAgYXBwX2lkOiBcImFuNTB6amVjXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwidXBkYXRlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG4iXX0=
