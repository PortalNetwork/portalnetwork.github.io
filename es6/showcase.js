import axios from 'axios';
new Vue({
    el: '.showcase',
    data: {
        showcaseInfo: [],
        selectidx: 0,
        selectState: ['aboutme', 'hackathon', 'dapp', 'rise']
    },
    computed: {
        caseInfoArr() {
            const CASE = this.showcaseInfo.filter((item, index, array) => {
                return item.tag[0] === this.selectState[this.selectidx]
            });
            return CASE;
        }
    },
    methods: {
        handActive(idx) {
            this.selectidx = idx;
        },
        caseSuccess(res) {
            this.showcaseInfo = res.data;
            console.log(this.showcaseInfo);
        },
        caseFatch(err) {
            console.error(err.data);
        },
        demophoto(idx) {
            return `background-image:url('${this.caseInfoArr[idx].demophoto}')`
        }
    },
    mounted() { 
        axios.get("../api/showcaseitem.json").then(this.caseSuccess).catch(this.caseFatch)
    }

});
