<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        mumeiItems: [],
        kaizenItems: [],
        mumeiInfo: {
          "logo": "",
          "description": ""
        },
        kaizenInfo: {
          "logo": "",
          "description": ""
        },
        isMobileItemOpen: false,
        mumeiClickIdx: 0,
        kaizenClickIdx: 0
      }
    },
    methods: {
      getItemData(){
        axios.get("../assets/json/mumei.json")
        .then(res=>this.setMumeiData(res.data))
        .catch(error=>console.log(error));
        axios.get("../assets/json/kaizen.json")
        .then(res=>this.setKaizenData(res.data))
        .catch(error=>console.log(error));
      },
      setMumeiData(obj){
        this.mumeiItems = obj;
        this.onMumeiHover(0);
      },
      setKaizenData(obj){
        this.kaizenItems = obj;
        this.onKaizenHover(0);
      },
      onMumeiHover(idexOf){
        this.mumeiInfo = {
          "logo": this.mumeiItems[idexOf].logo,
          "description": this.mumeiItems[idexOf].description
        };
      },
      onKaizenHover(idexOf){
        this.kaizenInfo = {
          "logo": this.kaizenItems[idexOf].logo,
          "description": this.kaizenItems[idexOf].description
        };
      },
      onMumeiClick(idx){
        this.mumeiClickIdx = idx;
      },
      onKaizenClick(idx){
        this.kaizenClickIdx = idx;
      }
    },
    mounted(){
      this.getItemData();
    }
  }
</script>

<template>
  <div class="solution">
    <div class="content">
      <h3>Solution</h3>
      <div class="mumei">
        <div class="about">
          <div class="right">
            <a href="https://mumei.portal.network" target="_blank">
              <figure class="figure"><img src="../images/mumei.png" alt=""/></figure>
              <h4>mumei</h4>
            </a>
          </div>
          <div class="left">
            <h5>Non-technical Users Adoption</h5>
            <p>Mumei is designed for users to have seamless experience when using decentralized solutions such as BNS management, digital asset management, and decentralized websites utilization.</p>
          </div>
        </div>
        <div class="item_box">
          <ul class="item">
            <li v-for="(item,mumeiIdx) in mumeiItems" :key="mumeiIdx" :class="{open: mumeiClickIdx === mumeiIdx}" @mouseenter="onMumeiHover(mumeiIdx)" @click="onMumeiClick(mumeiIdx)">
              <ul class="sub_item" v-if="item.subItems.length > 0">
                <li v-for="(subItem,idx) in item.subItems" :key="idx">
                  <a :href="subItem.subUrl" target="_blank">{{subItem.name}}</a>
                </li>
              </ul>
              <a :href="item.url" target="_blank">{{item.itemName}}</a>
              <div class="mobile_item_info">
                <div class="figure" v-if="mumeiInfo.logo.length > 0"><img :src="mumeiInfo.logo" alt=""/></div>
                <p>{{mumeiInfo.description}}</p>
                <a :href="item.url" target="_blank" v-if="item.subItems.length === 0">{{`Visit ${item.itemName}`}}</a>
              </div>
            </li>
          </ul>
          <div class="item_info">
            <div class="figure" v-if="mumeiInfo.logo.length > 0"><img :src="mumeiInfo.logo" alt=""/></div>
            <p>{{mumeiInfo.description}}</p>
          </div>
        </div>
      </div>
      <div class="kaizen">
        <div class="about">
          <div class="right">
            <a href="http://kaizen.portal.network/" target="_blank">
              <div class="figure"><img src="../images/kaizen.png" alt=""/></div>
              <h4>kaizen</h4>
            </a>
          </div>
          <div class="left">
            <h5>Technical Users Adoption</h5>
            <p>KAIZEN empowers users to learn, build, deploy, and manage decentralized applications or decentralized web services with their native languages, participation of hackathons, CLI, frameworks, and monitoring systems.</p>
          </div>
        </div>
        <div class="item_box">
          <ul class="item">
            <li v-for="(item,kaizenIdx) in kaizenItems" :key="kaizenIdx" :class="{open: kaizenClickIdx === kaizenIdx}" @mouseenter="onKaizenHover(kaizenIdx)" @click="onKaizenClick(kaizenIdx)">
              <ul class="sub_item" v-if="item.subItems.length > 0">
                <li v-for="(subItem,idx) in item.subItems" :key="idx">
                  <a :href="subItem.subUrl" target="_blank">{{subItem.name}}</a>
                </li>
              </ul>
              <a :href="item.url" target="_blank">{{item.itemName}}</a>
              <div class="mobile_item_info">
                <div class="figure" v-if="kaizenInfo.logo.length > 0"><img :src="kaizenInfo.logo" alt=""/></div>
                <p>{{kaizenInfo.description}}</p>
                <a :href="item.url" target="_blank" v-if="item.subItems.length === 0">{{`Visit ${item.itemName}`}}</a>
              </div>
            </li>
          </ul>
          <div class="item_info">
            <div class="figure" v-if="kaizenInfo.logo.length > 0"><img :src="kaizenInfo.logo" alt=""/></div>
            <p>{{kaizenInfo.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$pad: 940px;
$mob: 720px;
$gray: #979797;
$blue_d: #0c1346;
$bg_gray: #f7f6f4;

%clear {
	&:after {
		content: "";
		display: block;
		clear: both;
	}
}

@mixin solution($item_bg) {
  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 72px;
    @media screen and (max-width: $pad) {
      display: block;
      margin-bottom: 30px;
      padding: 0px 45px;
    }
    .left {
      width: 56.4%;
      margin-left: 62px;
      @media screen and (max-width: $pad) {
        width: 100%;
        margin-left: 0px;
      }
      h5 {
        font-size: 40px;
        font-weight: 600;
        line-height: 55px;
        color: $gray;
        margin-bottom: 42px;
        @media screen and (max-width: $pad) {
          font-size: 20px;
          text-align: center;
          margin-bottom: 20px;
          line-height: 1.3;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.69;
        @media screen and (max-width: $pad) {
          text-align: center;
          line-height: 1.3;
        }
        @media screen and (max-width: $mob) {
          font-size: 14px;
        }
      }
    }
    .right {
      width: 15.6%;
      margin-right: 76px;
      order: 1;
      @media screen and (max-width: $pad) {
        width: 100%;
        margin: 0px 0px 24px 0px;
      }
      a {
        display: block;
        text-decoration: none;
        &:hover {
          .figure {
            img {
              transform: scale(1.05);
            }
          }
          h4 {
            color: $item_bg;
          }
        }
        .figure {
          width: 150px;
          margin: 0px auto 24px auto;
          @media screen and (max-width: $pad) {
            margin: 0px auto 15px auto;
          }
          img {
            width: 100%;
            transform: scale(1);
            transition: transform .5s;
          }
        }
        h4 {
          font-size: 30px;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
          color: #000;
          transition: color .5s;
        }
      }
    }
  }
  .item_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item {
    width: 56.4%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $pad) {
      width: 100%;
    }
    >li {
      background-color: $item_bg;
      padding: 0px 56px 0px 12px;
      text-align: right;
      margin-left: 62px;
      @extend %clear;
      @media screen and (max-width: $pad) {
        margin-left: 0px;
        padding: 0px;
        position: relative;
      }
      &:hover {
        background-color: $blue_d;
        padding: 0px 56px 0px 30px;
        margin-left: 45px;
        @media screen and (max-width: $pad) {
          margin-left: 0px;
          padding: 0;
          background-color: transparent;
        }
        >a {
          color: $item_bg;
          @media screen and (max-width: $pad) {
            padding: 0px 48px;
            background-color: $blue_d;
            pointer-events: none;
          }
        }
      }
      &.open {
        @media screen and (max-width: $pad) {
          .mobile_item_info {
            display: block;
          }
          .sub_item {
            display: flex;
          }
        }
      }
      >a {
        display: block;
        font-size: 20px;
        height: 60px;
        line-height: 60px;
        font-weight: 800;
        color: #fff;
        float: right;
        @media screen and (max-width: $pad) {
          width: 100%;
          padding: 0px 48px;
          float: none;
        }
      }
    }
  }
  .sub_item {
    display: flex;
    max-width: 202px;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 3px;
    text-align: left;
    float: left;
    @media screen and (max-width: $pad) {
      display: none;
      max-width: 100%;
      justify-content: center;
      padding-left: 0px;
      float: none;
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      margin: auto;
    }
    >li {
      &+li {
        margin-left: 30px;
      }
      >a {
        display: inline-block;
        font-size: 12px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        transition: color .5s;
        @media screen and (max-width: $pad) {
          color: $item_bg;
        }
        &:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          width: 10px;
          height: 10px;
          background-color: #fff;
          transition: background-color .5s;
          border-radius: 50%;
          margin-left: 5px;
          @media screen and (max-width: $pad) {
            background-color: $item_bg;
          }
        }
        &:hover {
          color: $item_bg;
          &:after {
            background-color: $item_bg;
          }
        }
      }
    }
  }
  .item_info {
    width: 31.2%;
    padding-right: 76px;
    @media screen and (max-width: $pad) {
      display: none;
    }
    .figure {
      width: 70px;
      margin-bottom: 24px;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
  .mobile_item_info {
    display: none;
    @media screen and (max-width: $pad) {
      padding: 30px 45px;
      background-color: #fff;
    }
    .figure {
      width: 70px;
      margin: 0px auto;
      padding-bottom: 23px;
      img {
        width: 100%;
      }
    }
    p {
      line-height: 1.3;
      text-align: center;
      margin-bottom: 24px;
    }
    a {
      display: block;
      text-decoration: none;
      font-size: 12px;
      color: $item_bg;
      text-align: center;
    }
  }
}

.solution {
  padding: 110px 0px 0px 0px;
  background-color: $bg_gray;
  @media screen and (max-width: $pad) {
    padding: 37px 0px 0px 0px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
}
h3 {
  font-size: 80px;
  font-weight: 900;
  color: $blue_d;
  text-align: right;
  margin-bottom: 109px;
  @media screen and (max-width: $pad) {
    font-size: 50px;
    text-align: center;
    margin-bottom: 35px;
  }
}
.mumei {
  @include solution(#ff675c);
  margin-bottom: 100px;
}
.kaizen {
  @include solution(#1face3);
}
</style>

