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

window.onload = function () {
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
                ga('send', 'event', name, 'click', );
                let debug = getUrl();
                if(debug["debug"]=="true") console.log("GA PageView -> ",name);
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