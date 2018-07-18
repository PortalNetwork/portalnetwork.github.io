import axios from "axios";
import { CLIENT_RENEG_WINDOW } from "tls";

new Vue({
  el: '.blog',
  data: {
    isMenuOpen: false,
    summaryInfo: [],
    selectidx: 0,
    selectedTag: ["product","events","latest","guide","newinternet"]
  },
  computed: {
    summaryList(){
      let selected = this.selectedTag[this.selectidx];
      return this.summaryInfo.filter(item => item.tag.indexOf(selected)!== -1);
    }
  },
  methods: {
    toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    currentActive(idx){
      this.selectidx = idx;
    },
    getImgUrl(idx){
      const url = `background-image: url('${this.summaryList[idx].img}')`;
      return url;
    }
  },
  mounted(){
    axios.get("../blogs/list.json")
    .then((response)=>{
      this.summaryInfo = response.data;
    });
  }
});