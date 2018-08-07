import axios from "axios";
import '../scss/submitdweb.scss';

new Vue({
  el: '#submitdweb',
  data: {
    isMenuOpen: false,
    name: '',
    email: '',
    domain: '',
    hash: '',
    tag: '',
    description: '',
    emailError: false,
    hashError: false,
    hashRequiredError: false,
    tagRequiredError: false,
    domainRequiredError: false
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
      this.hashRequiredError = this.hash === "";
      this.tagRequiredError = this.tag === "";
      this.domainRequiredError = this.domain === "";

      if(this.hashRequiredError === false && this.tagRequiredError === false && this.domainRequiredError === false){
        this.onSubmit();
      }
    },
    onSubmit(){
      const data = {
        name: this.name,
        hash: this.hash,
        description: this.description,
        domain: this.domain,
        tag: this.tag,
        email: this.email
      };

      axios.post('https://ip41ye507l.execute-api.us-east-1.amazonaws.com/dev/v1/proxy/insert-shortcase', data)
      .then(function (response) {
        alert('Successful');
      }).catch(function (error) {
        if(error.response && error.response.status){
          alert(error.response.data.message);
        }else{
          alert('Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.');
        }
      });
    }
  },
  watch: {
    email(){
      const isText = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      this.emailError = !isText.test(this.email);
    },
    hash(){
      const isQm = /^Qm/;
      const hasText = /0|O|I|l|\/|\+/;
      if(this.hash.length !== 46){
        this.hashError = true;
      }else if(isQm.test(this.hash) === false){
        this.hashError = true;
      }else if(hasText.test(this.hash)){
        this.hashError = true;
      }else {
        this.hashError = false;
      }
    }
  }
});