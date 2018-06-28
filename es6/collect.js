import axios from "axios";

new Vue({
  el: '.collect',
  data: {
    isMenuOpen: false,
    name: '',
    email: '',
    hash: '',
    tag: '',
    description: ''
  },
  methods: {
    toggleMenuFn() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    gaSeedPageView(name) {
      ga('send', 'event', name, 'click', );
      let debug = getUrl();
      if (debug["debug"] == "true") console.log("GA PageView -> ", name);
    },
    validator() {
      let msg = '';
      if(this.name.trim() === ""){
        msg = 'name unfilled';
      }else if(this.hash.trim() === ""){
        msg = 'hash unfilled';
      }else if(this.tag.trim() === ""){
        msg = 'tag unfilled';
      }else if(this.email.trim() === ""){
        msg = 'email unfilled';
      }else if(this.description.trim() === ""){
        msg = 'description unfilled';
      }
      if(msg.length === 0){
        this.onSubmit();
      }else {
        alert(msg);
      }
    },
    onSubmit(){
      const data = {
        name: this.name,
        hash: this.hash,
        description: this.description,
        tag: this.tag,
        email: this.email
      };

      axios.post('https://ip41ye507l.execute-api.us-east-1.amazonaws.com/dev/v1/proxy/insert-shortcase', data)
      .then(function (response) {
        alert('Successful');
      }).catch(function (error) {
        console.log(error);
        alert('Network error.');
      });
    }
  }
});