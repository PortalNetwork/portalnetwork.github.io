import axios from "axios";
import animateScrollTo from "animated-scroll-to";
// import copy from "copy-text-to-clipboard";
const PAGE_NUMBER = 20; // items per page
import '../scss/showcase.scss';

function GetRandom(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
new Vue({
  el: "#showcase",
  data: {
    showcaseInfo: [],
    selectidx: 2,
    selectState: ["aboutme", "hackathon", "dapp", "rise", "otherdweb", "wanchain", "wanchain_speaker", "wbc", "dappcon", "slogan"],
    shareOpen: false,
    m_open: false,
    hash: ["0", "x", "d", "a", "3", "b", "4", "0", "1", "f", "9", "9", "0", "7", "9", "6", "2", "8", "a", "4"],
    showtext: [],
    isLoad: false,
    tagCount: {}, // count number of every single tag
    pageIndex: 0, // page index that user selected
    tagGroup: {},
  },
  computed: {
    caseInfoArr() {
      const startIndex = this.pageIndex * PAGE_NUMBER;
      const endIndex = (this.pageIndex + 1) * PAGE_NUMBER;
      const CASE = this.showcaseInfo.filter((item, index, array) => {
        return item.tag[0] === this.selectState[this.selectidx];
      }).slice(startIndex, endIndex);
      return CASE;
    },
    arrjoin() {
      return this.showtext.join("");
    },
    getPages() {
      const selectedTag = this.selectState[this.selectidx];
      const totalCount = this.tagCount[selectedTag] || 0;
      const pages = Math.floor(totalCount / PAGE_NUMBER) + 1;
      return pages;
    },
    getTagGroup() {
      const selectedTag = this.selectState[this.selectidx];
      return this.tagGroup[selectedTag];
    },
  },
  methods: {
    handActive(idx) {
      this.selectidx = idx;
      this.pageIndex = 0;
    },
    caseSuccess(res) {
      const { 
        data: normalizeData, 
        ...tagGroup, 
      } = res.data.normalize;
      this.tagGroup = tagGroup;
      this.showcaseInfo = normalizeData;
      this.isLoad = false;

      /**
       * initialize pagination setting
       */
      const rawTagCount = this.selectState.reduce((acc, cur) => {
        acc[cur] = 0;
        return acc;
      }, {});
      this.tagCount = this.showcaseInfo.reduce((acc, cur) => {
        this.selectState.forEach(label => {
          if (!cur.tag.includes(label)) {
            return;
          }
          acc[label] += 1;
        });
        return acc;
      }, { ...rawTagCount });

      /**
       * 如果網址來自 share 複製出來的內容 (帶有參數的)
       * 參數跟 response 回來的 tag, domain 有匹配到的話
       * 將網站導至 ipfs url
       */
      if (!window.location.search) {
        return;
      }

      const string = window.location.search.substring(1);
      const parameters = string.split('&').reduce((acc, cur) => {
        const item = cur.split('=');
        acc[item[0]] = item[1];
        return acc;
      }, {});


      if (parameters.action) {
        //FIXME: 目前只抓屬性而沒有判斷值, 之後要改掉
        const { tag, } = parameters;
        const indexOf = this.selectState.indexOf(tag);
        this.selectidx = indexOf >= 0 ? indexOf : 2;
        return;
      }

      const currentItem = this.showcaseInfo.find(x => x.tag.includes(parameters.tag) && x.domain === parameters.domain);
      if (!currentItem) {
        return;
      }
      window.location.href = currentItem.url;
    },
    caseFatch(err) {
      console.error(err);
    },
    demophoto(idx) {
      const demophoto = this.caseInfoArr[idx].demophoto === "";
      const urldefault = `background-image:url('./images/showcase/WIP.png')`;
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
      // copy(target.value);
      swal('The share link has copied in clipboard');
    },
    shareFb(e, tag) {
      const url = `https://www.portal.network/showcase.html?tag=${tag[0]}&id=${Math.random() * 1000000 | 0}`;
      window.open('http://www.facebook.com/share.php?u=' + url, "_blank",
        "toolbar=yes,location=yes,directories=no,status=no, menubar=yes, scrollbars=yes,resizable=no, copyhistory=yes, width=600, height=400");
    },
    handlePrevPage(e) {
      e.preventDefault();
      const prevIndex = this.pageIndex - 1;
      this.pageIndex = prevIndex < 0 ? 0 : prevIndex;
    },
    handlePageClick(e, pageNumber) {
      e.preventDefault();
      this.pageIndex = pageNumber - 1;
    },
    handleNextPage(e) {
      e.preventDefault();
      const nextIndex = this.pageIndex + 1;
      const topIndex = this.getPages - 1;
      this.pageIndex = nextIndex > topIndex ? topIndex : nextIndex;
    },
    caseInfoArrForGroup(groupName) {
      return this.showcaseInfo.filter((item, index, array) => {
        return item.group === groupName;
      });
    },
    demophotoForGroup(item) {
      const idEmpty = item.demophoto === "";
      const urldefault = `background-image:url('./images/Showcase/WIP.png')`;
      const url = `background-image:url('${item.demophoto}')`;

      return idEmpty ? urldefault : url;
    },
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
