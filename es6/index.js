window.onload = function(){
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
            },
            gaSeedPageView(name) {
                ga('send', 'event', name, 'click',);
            }
        },
        mounted() { 
            AOS.init();
            window.Intercom("boot", {
                app_id: "an50zjec"
            });
            window.Intercom("update");
        }
    });
}