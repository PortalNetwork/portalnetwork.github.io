(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
    new Vue({
        el: '#app',
        data: {
            isMenuOpen: false
        },
        methods: {
            toggleMenuFn: function toggleMenuFn() {
                this.isMenuOpen = !this.isMenuOpen;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsWUFBTTtBQUNILFFBQUksR0FBSixDQUFRO0FBQ0osWUFBSSxNQURBO0FBRUosY0FBTTtBQUNGLHdCQUFhO0FBRFgsU0FGRjtBQUtKLGlCQUFTO0FBQ0wsd0JBREssMEJBQ1U7QUFDWCxxQkFBSyxVQUFMLEdBQWtCLENBQUMsS0FBSyxVQUF4QjtBQUNIO0FBSEksU0FMTDtBQVVKLGVBVkkscUJBVU07QUFDTixnQkFBSSxJQUFKO0FBQ0EsbUJBQU8sUUFBUCxDQUFnQixNQUFoQixFQUF3QjtBQUNwQix3QkFBUTtBQURZLGFBQXhCO0FBR0EsbUJBQU8sUUFBUCxDQUFnQixRQUFoQjtBQUNIO0FBaEJHLEtBQVI7QUFrQkgsQ0FuQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoKCkgPT4ge1xuICAgIG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNhcHAnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpc01lbnVPcGVuIDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9nZ2xlTWVudUZuKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNZW51T3BlbiA9ICF0aGlzLmlzTWVudU9wZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7IFxuICAgICAgICAgICAgQU9TLmluaXQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbShcImJvb3RcIiwge1xuICAgICAgICAgICAgICAgIGFwcF9pZDogXCJhbjUwemplY1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbShcInVwZGF0ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTsiXX0=
