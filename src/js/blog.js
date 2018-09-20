import axios from "axios";
import '../scss/blog.scss';
window.onload = ()=>{
  new Vue({
    el: '#blog',
    data: {
      isMenuOpen: false,
      blogInfo: [],
      selectidx: 0,
      selectedTag: ["all", "partnership", "weekly", "bns","kaizen","mumei","tutorial"]
    },
    computed: {
      blogList() {
        let selected = this.selectedTag[this.selectidx];
        return this.blogInfo.filter(item => item.tag.indexOf(selected) !== -1);
      }
    },
    methods: {
      toggleMenuFn() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      currentActive(idx) {
        this.selectidx = idx;
      },
      getImgUrl(idx) {
        const url = `background-image: url('${this.blogList[idx].img}')`;
        return url;
      }
    },
    mounted() {
      if (window.location.pathname === "/blog.html") {
        axios.get("assets/json/blog_list.json")
          .then((response) => {
            this.blogInfo = response.data;

            const string = window.location.search.substring(1);
            const parameters = string.split('&').reduce((acc, cur) => {
              const item = cur.split('=');
              acc[item[0]] = item[1];
              return acc;
            }, {});

            if (parameters.tag) {
              const {
                tag,
              } = parameters;
              const indexOf = this.selectedTag.indexOf(tag);
              this.selectidx = indexOf >= 0 ? indexOf : 2;
              return;
            }
          });
      }else {
        /**
         * 取消內頁預設的 tag active
         */
        this.selectidx = null;
      }
    }
  });
}