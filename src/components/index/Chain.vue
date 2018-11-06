<script>
import axios from 'axios';
export default {
  data() {
    return {
      chains: [],
      chainInfo: {
        "title": "",
        "description": ""
      },
      detailItem: [],
      selectIdx: 0,
      email: '',
      currentSelectedVote: '',
      votes: [],
      isLoading: false,
      isOpen: false
    };
  },
  methods: {
    getChainData() {
      axios.get("../assets/json/chain.json")
      .then(res=>this.setChainData(res.data))
      .catch(error=>console.log(error));
    },
    setChainData(obj){
      this.chains = obj;
      this.onActive(this.selectIdx);
    },
    onActive(idx){
      this.selectIdx = idx;
      this.chainInfo = {
        "title": this.chains[idx].title,
        "description": this.chains[idx].description
      };
      this.detailItem = this.chains[idx].detail;
    },
    toggleSelected(event,params){
      this.currentSelectedVote = params;
    },
    openPopup(){
      this.isLoading = true;
      this.isOpen = true;
      document.querySelector("body").classList.add("active");
      document.querySelector(".wrap").classList.add("mask");
      axios.get("https://faucet-server.herokuapp.com/faucet/options")
      .then((res)=>{
        this.votes = res.data;
        this.isLoading = false;
      })
      .catch((error)=> {
        if(error && error.message){
          alert(error.message);
        }else {
          alert('Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.');
        }
      });
    },
    closePopup(){
      this.isOpen = false;
      document.querySelector("body").classList.remove("active");
      document.querySelector(".wrap").classList.remove("mask");
    },
    onSubmit(){
      const isText = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      let errorMsg = "";

      if(!(isText).test(this.email)) errorMsg = "Incorrect Email.";
      if(this.currentSelectedVote === "") errorMsg = "Please select a chain.";
      if(errorMsg !== "") alert(errorMsg);

      if(errorMsg === ""){
        let currentChain = this.votes.filter((elem)=>{
          return elem.name === this.currentSelectedVote;
        });
        let data = {
          email: this.email,
          id: currentChain[0].id
        };
       
        axios.post('https://faucet-server.herokuapp.com/faucet/options', data)
        .then(res=>{
          if(res.data && res.data.message){
            alert(res.data.message);
          }else {
            alert('Thank you for your participation');
            this.email = "";
            this.currentSelectedVote = "";
          }
          this.isOpen = false;
          document.querySelector("body").classList.remove("active");
        }).catch(error=>{
          if(error && error.message){
            alert(error.message);
          }else {
            alert('Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.');
          }
        });
      }
    },
  },
  mounted() {
    this.getChainData();
    
  }
};
</script>

<template>
  <div class="chain">
    <h3>Blockchain Platform Name Service</h3>
    <div class="content">
      <div class="left">
        <ul class="chain_list">
          <li v-for="(chain,idx) in chains" :key="idx" :class="{active: selectIdx === idx}">
            <a :style="{ backgroundImage: 'url(' + (selectIdx === idx ? chain.iconh : chain.icon) + ')' }" href="javascript:;" @click="onActive(idx)"></a>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="about_box">
          <h4>{{chainInfo.title}}</h4>
          <p>{{chainInfo.description}}</p>
        </div>
        <div class="item_list">
          <div :class="{item_box: true, no_percentage: detail.percentage === null}" v-for="(detail,idx) in detailItem" :key="idx">
            <h5>{{detail.name}}</h5>
            <p>{{detail.description}}</p>
            <div class="percentage">
              <div class="percentage_bg">
                <div class="percentage_bar" :style="{width: detail.percentage + '%' }"></div>
              </div>
              <ul class="link_box">
                <li v-for="(url,idx) in detail.linkItem" :key="idx" v-if="url.imgStyle !== ''">
                  <a :class="{link: url.imgStyle === 'link',github: url.imgStyle === 'github'}" :href="url.link" target="_blank"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wish_box">
        <a href="javascript:;" target="_blank" @click="openPopup"><img src="../../images/plus.png" alt=""/></a>
        <p>MAKE A WISH</p>
      </div>
    </div>
    <div :class="{form_popup: true, open: isOpen}">
      <p v-if="isLoading">Loading ...</p>
      <div v-if="!isLoading">
        <p class="text">Please select a chain that you are interested in.</p>
        <a href="javascript:;" class="close_btn" @click="closePopup"><img src="../../images/close.png" alt=""/></a>
        <div class="vote_list">
          <div class="vote_box" v-for="(vote, idx) in votes" :key="idx">
            <a href="javascript:;" :class="{active: currentSelectedVote === vote.name}" @click="toggleSelected($event,vote.name)">
              <div class="figure"><img :src="vote.url" alt=""/></div>
              <p>{{vote.name}}</p>
              <p>Count: <span>{{vote.count}}</span></p>
            </a>
          </div>
        </div>
        <div class="popup_box">
          <label>Email</label>
          <input type="text" placeholder="Your email" v-model.trim="email"/>
        </div>
        <button class="popup_btn" type="button" @click="onSubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

.chain {
  max-width: 1100px;
  width: 100%;
  margin: 100px auto 0px auto;
  background-color: $blue_d2;
  padding: 64px 0px; 
  position: relative;
  @media screen and (max-width: $mob) {
    padding: 26px 0px 0px 0px;
  }
  &:before {
    content: "";
    display: block;
    width: 120px;
    height: 87px;
    background: url('~images/block_bpns.png') center center no-repeat;
    background-size: 100% auto;
    position: absolute;
    left: -90px;
    top: -83px;
    @media screen and (max-width: $pad) {
      display: none;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 206px;
    height: 150px;
    background: url('~images/block_bpns2.png') center center no-repeat;
    background-size: 100% auto;
    position: absolute;
    right: -228px;
    top: 318px;
    @media screen and (max-width: $pad) {
      display: none;
    }
  }
}
h3 {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  font-size: 40px;
  font-weight: 800;
  color: #f7f6f4;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: $mob) {
    max-width: 214px;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 26px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: $mob) {
    display: block;
    padding: 0px 45px 168px 45px;
  }
}
.left {
  width: 37.5%;
  margin-left: 63px;
  min-height: 757px;
  position: relative;
  @media screen and (max-width: $mob) {
    width: 100%;
    margin-left: 0px;
    min-height: auto;
  }
  .chain_list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: $mob) {
      margin-bottom: 48px;
    }
    li {
      width: 80px;
      height: 80px;
      margin-left: 10px;
      margin-bottom: 10px;
      &.active {
        background-color: #fff;
        &:hover {
          a {
            opacity: 1;
          }
        }
      }
      a {
        display: block;
        background-color: transparent;
        opacity: 1;
        transition: opacity .5s;
        width: 80px;
        height: 80px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 60% auto;
        &:hover {
          opacity: .7;
        }
        &.active {
          background-color: #fff;
        }
      }
    }
  }
} 
.right {
  width: 45.8%;
  padding-right: 58px;
  @media screen and (max-width: $mob) {
    width: 100%;
    padding-right: 0px;
  }
}
.about_box {
  height: 100%;
  height: 180px;
  overflow: hidden;
  padding-top: 10px;
  margin-bottom: 34px;
  border-top: solid 5px #fff;
  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    line-height: 1.3;
    color: #fff;
    &+p {
      margin-top: 10px;
    }
  }
}
.item_box {
  margin-bottom: 22px;
  &:last-child {
    margin-bottom: 0px;
  }
  &.no_percentage {
    p {
      display: inline-block;
      min-width: 220px;
    }
    .percentage {
      display: inline-block;
      vertical-align: text-bottom;
      .percentage_bg {
        background-color: transparent;
      }
    }
  }
  h5 {
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 8px;
  }
  p {
    font-size: 12px;
    color: #fff;
    margin-bottom: 5px;
  }
  .percentage {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .percentage_bg {
      max-width: 225px;
      width: 100%;
      height: 5px;
      background-color: rgba(256,256,256,0.2);
      position: relative;
      .percentage_bar {
        width: 0%;
        height: 5px;
        background-color: rgba(256,256,256,1);
      }
    }
    .link_box {
      display: flex;
      align-items: center;
      margin-left: 10px;
      li {
        &+li {
          margin-left: 10px;
        }
        a {
          display: block;
          width: 20px;
          height: 20px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-image: url('~images/link.png');
          transition: background-image .5s;
          &.link {
            background-image: url('~images/link.png');
            &:hover {
              background-image: url('~images/link_h.png');
            }
          }
          &.github {
            background-image: url('~images/github.png');
            &:hover {
              background-image: url('~images/github_h.png');
            }
          }
        }
      }
    }
  }
}
.wish_box {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0px;
  bottom: 0px;
  @media screen and (max-width: $pad) {
    left: 63px;
  }
  @media screen and (max-width: $mob) {
    left: 45px;
    bottom: 40px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: rgba(256,256,256,.1);
    &:hover {
      img {
        transform: scale(1.3);
      }
    }
    img {
      width: 40px;
      opacity: .4;
      transform: scale(1);
      transition: transform .5s;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
    color: #F7F6F4;
    position: relative;
    margin-left: 16px;
  }
}
.form_popup {
  display: none;
  min-width: 300px;
  max-width: 600px;
  height: 500px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 50px 20px 20px 20px;
  border-radius: 4px;
  z-index: 8;
  background-color: #fff;
  @media screen and (max-width: $mob) {
    width: 300px;
    overflow-y: auto;
  }
  &.open {
    display: block;
  }
  p {
    text-align: center;
  }
  .close_btn {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    img {
      width: 100%;
      margin: 0px auto;
    }
  }
  .text {
    margin-bottom: 20px;
    font-weight: 400;
    line-height: 1.3;
  }
  .popup_box {
    margin-bottom: 20px;
    label {
      display: block;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      height: 38px;
      line-height: 38px;
      padding: 5px 10px;
      border: 1px solid #E1DED9;
      border-radius: 4px;
      outline: none;
    }
    select {
      outline: none;
    }
  }
  .popup_btn {
    width: 200px;
    text-align: center;
    font-size: 16px;
    background-color: #15DACB;
    color: $blue_d1;
    padding: 10px 20px;
    outline: none;
    border: solid 1px $blue_d1;
    border-top: none;
    border-left: none;
    border-radius: 4px;
    @media screen and (max-width: $mob) {
      width: 100%;
    }
  }
}
.vote_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (max-width: $mob) {
    display: block;
  }
}
.vote_box {
  width: 24%;
  @media screen and (max-width: $mob) {
    width: 100%;
  }
  &+.vote_box {
    @media screen and (max-width: $mob) {
      margin-top: 20px;
    }
  }
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    border: 1px solid #E1DED9;
    padding: 10px;
    &.active {
      border-color: #000;
    }
    &:hover {
      border-color: #000;
    }
    .figure {
      width: 80px;
      margin: 0px auto 10px auto;
      img {
        width: 100%;
      }
    }
    p {
      &+p {
        margin-top: 5px;
      }
    }
  }
}
</style>

