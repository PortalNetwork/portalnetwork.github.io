import axios from "axios";
import animateScrollTo from "animated-scroll-to";
import copy from "copy-text-to-clipboard";

function GetRandom(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
new Vue({
    el: ".showcase",
    data: {
        showcaseInfo: [],
        selectidx: 2,
        selectState: ["aboutme", "hackathon", "dapp", "rise", "otherdweb","wanchain","wanchain_speaker","wbc","dappcon"],
        shareOpen: false,
        m_open: false,
        hash: [ "0","x","d","a","3","b","4","0","1","f","9","9","0","7","9","6","2","8", "a", "4"],
        showtext: [],
        isLoad: false
    },
    computed: {
        caseInfoArr() {
            const CASE = this.showcaseInfo.filter((item, index, array) => {
                return item.tag[0] === this.selectState[this.selectidx];
            });
            return CASE;
        },
        arrjoin() {
            return this.showtext.join("");
        }
    },
    methods: {
        handActive(idx) {
            this.selectidx = idx;
        },
        caseSuccess(res) {
            this.showcaseInfo = res.data.result;
            this.isLoad = false;

            /**
             * 如果網址來自 share 複製出來的內容 (帶有參數的)
             * 參數跟 response 回來的 tag, domain 有匹配到的話
             * 將網站導至 ipfs url
             */
            if(!window.location.search) {
                return;
            }

            const string = window.location.search.substring(1);
            const parameters = string.split('&').reduce((acc, cur) => {
                const item = cur.split('=');
                acc[item[0]] = item[1];
                return acc;
            }, {});


            if(parameters.action) {
                //FIXME: 目前只抓屬性而沒有判斷值, 之後要改掉
                const { tag, } = parameters;
                const indexOf = this.selectState.indexOf(tag);
                this.selectidx = indexOf >= 0 ? indexOf : 2;
                return;
            }

            const currentItem = this.showcaseInfo.find(x => x.tag.includes(parameters.tag) && x.domain === parameters.domain);
            if(!currentItem) {
                return;
            }
            window.location.href = currentItem.url;
        },
        caseFatch(err) {
            console.error(err);
        },
        demophoto(idx) {
            const demophoto = this.caseInfoArr[idx].demophoto === "";
            const urldefault = `background-image:url('./images/Showcase/WIP.png')`;
            const url = `background-image:url('${this.caseInfoArr[idx].demophoto}')`;

            return demophoto ? urldefault : url;
        },
        fixedPopOpen() {
            this.shareOpen = !this.shareOpen;
        },
        menuOpen() {
            this.m_open = !this.m_open;
        },
        gotoPageTop() {
            animateScrollTo(0);
        },
        transferLink(link) {
            window.open(link);
        },
        shareLink(e, tag, domain) {
            e.stopPropagation();
            const target = document.querySelector('#copyedVal');
            target.value = `${window.location.origin}${window.location.pathname}?tag=${tag[0]}&domain=${domain}`;
            copy(target.value);
            alert('The share link has copied in clipboard');
        }
    },

    created() {
        this.showtext = this.hash;
    },
    mounted() {
        this.isLoad = true;
        axios.get("https://ip41ye507l.execute-api.us-east-1.amazonaws.com/dev/v1/proxy/list-all-shortcase")
        .then(this.caseSuccess)
        .catch(this.caseFatch);

        TweenMax.to("#txt", 3, {
            text: "portalnetworkweb.eth",
            delay: 0.4,
            ease: Power1.easeOut
        });
    }
});
