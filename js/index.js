(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function getUrl(params) {
    var strUrl = location.search;
    var getPara, ParaVal;
    var aryPara = [];
    if (strUrl.indexOf("?") != -1) {
        var getSearch = strUrl.split("?");
        getPara = getSearch[1].split("&");
        for (var i = 0; i < getPara.length; i++) {
            ParaVal = getPara[i].split("=");
            aryPara.push(ParaVal[0]);
            aryPara[ParaVal[0]] = ParaVal[1];
        }
    }
    return aryPara;
}

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
            },
            gaSeedPageView: function gaSeedPageView(name) {
                ga('send', 'event', name, 'click');
                var debug = getUrl();
                if (debug["debug"] == "true") console.log("GA PageView -> ", name);
            }
        },
        mounted: function mounted() {
            AOS.init();
            window.Intercom("boot", {
                app_id: "an50zjec"
            });
            window.Intercom("update");
            var slideShow = new ImageFlow();
            slideShow.init({
                ImageFlowID: 'slideShow',
                // circular: true,
                // reflections: false,
                // reflectionP: 0.4,
                // slider: false,
                // captions: false,
                // opacity: true,
                // xStep: 250,
                // imageFocusM: 1.5,
                // startID: 3,
                reflections: false,
                reflectionP: 0.0,
                slider: false,
                captions: false
            });
        }
    });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN2QixRQUFJLFNBQVMsU0FBUyxNQUF0QjtBQUNBLFFBQUksT0FBSixFQUFhLE9BQWI7QUFDQSxRQUFJLFVBQVUsRUFBZDtBQUNBLFFBQUksT0FBTyxPQUFQLENBQWUsR0FBZixLQUF1QixDQUFDLENBQTVCLEVBQStCO0FBQzlCLFlBQUksWUFBWSxPQUFPLEtBQVAsQ0FBYSxHQUFiLENBQWhCO0FBQ0Esa0JBQVUsVUFBVSxDQUFWLEVBQWEsS0FBYixDQUFtQixHQUFuQixDQUFWO0FBQ0EsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsR0FBcEMsRUFBeUM7QUFDdkMsc0JBQVUsUUFBUSxDQUFSLEVBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFWO0FBQ0Esb0JBQVEsSUFBUixDQUFhLFFBQVEsQ0FBUixDQUFiO0FBQ0Esb0JBQVEsUUFBUSxDQUFSLENBQVIsSUFBc0IsUUFBUSxDQUFSLENBQXRCO0FBQ0Q7QUFDRDtBQUNELFdBQU8sT0FBUDtBQUNBOztBQUVELE9BQU8sTUFBUCxHQUFnQixZQUFZO0FBQ3hCLFFBQUksR0FBSixDQUFRO0FBQ0osWUFBSSxNQURBO0FBRUosY0FBTTtBQUNGLHdCQUFhO0FBRFgsU0FGRjtBQUtKLGlCQUFTO0FBQ0wsd0JBREssMEJBQ1U7QUFDWCxxQkFBSyxVQUFMLEdBQWtCLENBQUMsS0FBSyxVQUF4QjtBQUNILGFBSEk7QUFJTCx3QkFKSywwQkFJVTtBQUNYLHNCQUFNLGFBQU47QUFDSCxhQU5JO0FBT0wsMEJBUEssMEJBT1UsSUFQVixFQU9nQjtBQUNqQixtQkFBRyxNQUFILEVBQVcsT0FBWCxFQUFvQixJQUFwQixFQUEwQixPQUExQjtBQUNBLG9CQUFJLFFBQVEsUUFBWjtBQUNBLG9CQUFHLE1BQU0sT0FBTixLQUFnQixNQUFuQixFQUEyQixRQUFRLEdBQVIsQ0FBWSxpQkFBWixFQUE4QixJQUE5QjtBQUM5QjtBQVhJLFNBTEw7QUFrQkosZUFsQkkscUJBa0JNO0FBQ04sZ0JBQUksSUFBSjtBQUNBLG1CQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDcEIsd0JBQVE7QUFEWSxhQUF4QjtBQUdBLG1CQUFPLFFBQVAsQ0FBZ0IsUUFBaEI7QUFDQSxnQkFBSSxZQUFZLElBQUksU0FBSixFQUFoQjtBQUNBLHNCQUFVLElBQVYsQ0FBZTtBQUNYLDZCQUFhLFdBREY7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBYSxLQVhGO0FBWVgsNkJBQWEsR0FaRjtBQWFYLHdCQUFRLEtBYkc7QUFjWCwwQkFBVTtBQWRDLGFBQWY7QUFnQkg7QUF6Q0csS0FBUjtBQTJDSCxDQTVDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGdldFVybChwYXJhbXMpIHtcclxuXHR2YXIgc3RyVXJsID0gbG9jYXRpb24uc2VhcmNoO1xyXG5cdHZhciBnZXRQYXJhLCBQYXJhVmFsO1xyXG5cdHZhciBhcnlQYXJhID0gW107XHJcblx0aWYgKHN0clVybC5pbmRleE9mKFwiP1wiKSAhPSAtMSkge1xyXG5cdFx0dmFyIGdldFNlYXJjaCA9IHN0clVybC5zcGxpdChcIj9cIik7XHJcblx0XHRnZXRQYXJhID0gZ2V0U2VhcmNoWzFdLnNwbGl0KFwiJlwiKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZ2V0UGFyYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFBhcmFWYWwgPSBnZXRQYXJhW2ldLnNwbGl0KFwiPVwiKTtcclxuXHRcdFx0XHRhcnlQYXJhLnB1c2goUGFyYVZhbFswXSk7XHJcblx0XHRcdFx0YXJ5UGFyYVtQYXJhVmFsWzBdXSA9IFBhcmFWYWxbMV07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBhcnlQYXJhO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgZWw6ICcjYXBwJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlzTWVudU9wZW4gOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51Rm4oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSAhdGhpcy5pc01lbnVPcGVuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21pbmdzb29uRm4oKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcImNvbWluZyBzb29uXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnYVNlZWRQYWdlVmlldyhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsIG5hbWUsICdjbGljaycsICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVidWcgPSBnZXRVcmwoKTtcclxuICAgICAgICAgICAgICAgIGlmKGRlYnVnW1wiZGVidWdcIl09PVwidHJ1ZVwiKSBjb25zb2xlLmxvZyhcIkdBIFBhZ2VWaWV3IC0+IFwiLG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkgeyBcclxuICAgICAgICAgICAgQU9TLmluaXQoKTtcclxuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwiYm9vdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBhcHBfaWQ6IFwiYW41MHpqZWNcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LkludGVyY29tKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVTaG93ID0gbmV3IEltYWdlRmxvdygpO1xyXG4gICAgICAgICAgICBzbGlkZVNob3cuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBJbWFnZUZsb3dJRDogJ3NsaWRlU2hvdycsXHJcbiAgICAgICAgICAgICAgICAvLyBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHJlZmxlY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHJlZmxlY3Rpb25QOiAwLjQsXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gY2FwdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHhTdGVwOiAyNTAsXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZUZvY3VzTTogMS41LFxyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnRJRDogMyxcclxuICAgICAgICAgICAgICAgIHJlZmxlY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlZmxlY3Rpb25QOiAwLjAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbnM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59Il19
