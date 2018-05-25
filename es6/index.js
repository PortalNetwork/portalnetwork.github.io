import animateScrollTo from 'animated-scroll-to';
function GetOffset(el) {
  const box = el.getBoundingClientRect();
  return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}

(() => {
    new Vue({
        el: '#app',
        data: {
            isMenuOpen : false
        },
        methods: {
            toggleMenuFn() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            comingsoonFn() {
                alert("coming soon");
            }
        },
        mounted() { 
            AOS.init();
            window.Intercom("boot", {
                app_id: "an50zjec"
            });
            window.Intercom("update");
            document.getElementById("learn").addEventListener("click", () => {
                const elementTop = GetOffset(document.getElementsByClassName("product")[0]);
                animateScrollTo(elementTop.top);
            })
        }
    });
})();

