function getUrl() {
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

import { Carousel3d, Slide } from 'vue-carousel-3d';

Vue.use(Carousel3d);
new Vue({
    el: '#app',
    data: {
        isMenuOpen: false,
        slides: 
        [
            {src: "/images/sildeShow/showcase1.png"},
            {src: "/images/sildeShow/showcase2.png"},
            {src: "/images/sildeShow/showcase3.png"},
        ],
        isYoutubeShow: false,
    },
    components: {
        Carousel3d,
        Slide
    },
    methods: {
        toggleMenuFn() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        comingsoonFn() {
            alert("coming soon");
        },
        gaSeedPageView(name) {
            ga('send', 'event', name, 'click', );
            let debug = getUrl();
            if(debug["debug"]=="true") console.log("GA PageView -> ",name);
        },
        youtubeShow(){
            this.isYoutubeShow = !this.isYoutubeShow;
        }
    },
    mounted() { 
        AOS.init();
        // window.Intercom("boot", {
        //     app_id: "an50zjec"
        // });
        // window.Intercom("update");
    }
});