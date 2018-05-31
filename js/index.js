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
window.onload = function () {
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
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQVAsR0FBZ0IsWUFBVTtBQUN0QixRQUFJLEdBQUosQ0FBUTtBQUNKLFlBQUksTUFEQTtBQUVKLGNBQU07QUFDRix3QkFBYTtBQURYLFNBRkY7QUFLSixpQkFBUztBQUNMLHdCQURLLDBCQUNVO0FBQ1gscUJBQUssVUFBTCxHQUFrQixDQUFDLEtBQUssVUFBeEI7QUFDSCxhQUhJO0FBSUwsd0JBSkssMEJBSVU7QUFDWCxzQkFBTSxhQUFOO0FBQ0g7QUFOSSxTQUxMO0FBYUosZUFiSSxxQkFhTTtBQUNOLGdCQUFJLElBQUo7QUFDQSxtQkFBTyxRQUFQLENBQWdCLE1BQWhCLEVBQXdCO0FBQ3BCLHdCQUFRO0FBRFksYUFBeEI7QUFHQSxtQkFBTyxRQUFQLENBQWdCLFFBQWhCO0FBQ0g7QUFuQkcsS0FBUjtBQXFCSCxDQXRCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGltcG9ydCBhbmltYXRlU2Nyb2xsVG8gZnJvbSAnYW5pbWF0ZWQtc2Nyb2xsLXRvJztcbi8vIGZ1bmN0aW9uIEdldE9mZnNldChlbCkge1xuLy8gICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXG4vLyAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0XG4vLyAgIH1cbi8vIH1cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNhcHAnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpc01lbnVPcGVuIDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9nZ2xlTWVudUZuKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNZW51T3BlbiA9ICF0aGlzLmlzTWVudU9wZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29taW5nc29vbkZuKCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiY29taW5nIHNvb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7IFxuICAgICAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbShcImJvb3RcIiwge1xuICAgICAgICAgICAgICAgIGFwcF9pZDogXCJhbjUwemplY1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbShcInVwZGF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSJdfQ==
