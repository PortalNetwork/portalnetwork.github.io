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
import { CLIENT_RENEG_WINDOW } from 'tls';
import animateScrollTo from 'animated-scroll-to';

Vue.use(Carousel3d);
new Vue({
    el: '#app',
    data: {
        isMenuOpen: false,
        slides: [
            {src: "/images/sildeShow/showcase1.png"
            ,url:"https://ipfs.infura.io/ipfs/QmcrCz9kLeBg1n3D6vYZfwC4YorhgTGoe4EEDuSkw11xPK/"},
            {src: "/images/sildeShow/showcase2.png",
            url:"https://ipfs.infura.io/ipfs/QmUm2i9tg69RvB4SCdKMF35m9JoKu7kMp4Y78qwfsSzL8D/"},
            {src: "/images/sildeShow/showcase3.png",
            url:"https://ipfs.infura.io/ipfs/QmRVCSosZzqDVwpJZAXrJbhYbHZFQ4kuZbwg6Z5RBc7iFu/"},
        ],
        isYoutubeShow: false,
        shareOpen: false,
        isheaderFix: false,
        scroll: 0,
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
        },
        fixedPopOpen() {
            this.shareOpen = !this.shareOpen;
        },
        gotoPageTop() {
            animateScrollTo(0);
        },
        scrollFn() {
            this.scroll = document.documentElement.scrollTop;
            this.isheaderFix = this.scroll > 150;
        }
    },
    mounted() { 
        AOS.init();
        window.addEventListener('scroll', this.scrollFn);
    }
});