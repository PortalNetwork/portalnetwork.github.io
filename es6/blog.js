import axios from "axios";

new Vue({
  el: '.blog',
  data: {
    isMenuOpen: false,
    summaryInfo: [],
    selectidx: 0,
    selectedTag: ["all","event","tech","guide"]
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
    axios.get("../blogs/list.json?21321312")
    .then((response)=>{
      this.summaryInfo = response.data;

      const string = window.location.search.substring(1);
   
      const parameters = string.split('&').reduce((acc, cur) => {
        const item = cur.split('=');
        acc[item[0]] = item[1];
        return acc;
      }, {});

      if(parameters.tag) {
        const { tag, } = parameters;
        const indexOf = this.selectedTag.indexOf(tag);
        this.selectidx = indexOf >= 0 ? indexOf : 2;
        return;
      }

    });
  }
});