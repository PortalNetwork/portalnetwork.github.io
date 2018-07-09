import axios from "axios";
import animateScrollTo from "animated-scroll-to";

function GetRandom(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
new Vue({
    el: ".showcase",
    data: {
        showcaseInfo: [],
        selectidx: 2,
        selectState: ["aboutme", "hackathon", "dapp", "rise", "otherdweb","wanchain","wanchain_speaker","wbc"],
        shareOpen: false,
        m_open: false,
        hash: [ "0","x","d","a","3","b","4","0","1","f","9","9","0","7","9","6","2","8", "a", "4"],
        showtext: [],
        isLoad: false,
        scroll: 0,
        isScallBack: false,
        isFixed: false
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
            res.data.result.map((obj)=>{
                console.log(obj.tag[0]);
            })
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
        scrollFn() {
            if (!this.isScallBack) {
                this.isScallBack = true;
                this.isLoad = true;
                axios.get("https://ip41ye507l.execute-api.us-east-1.amazonaws.com/dev/v1/proxy/list-all-shortcase").then(this.caseSuccess).catch(this.caseFatch);
            }
        }
    },
    created() {
        this.showtext = this.hash;
    },
    mounted() {
        this.scrollFn();
        TweenMax.to("#txt", 3, {
            text: "portalnetworkweb.eth",
            delay: 0.4,
            ease: Power1.easeOut
        });
        window.addEventListener('scroll', this.fixedFn);
    }
});
