<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        isHover: false,
        mumeiItems: [],
        kaizenItem: [],
        mumeiInfo: {
          "logo": "",
          "description": ""
        },
        kaizenInfo: {
          "logo": "",
          "description": ""
        }
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
      },
      setKaizenData(obj){
        this.kaizenItem = obj;
      },
      onMumei(idexOf){
        this.mumeiInfo = {
          "logo": this.mumeiItems[idexOf].logo,
          "description": this.mumeiItems[idexOf].description
        }
      },
      onKaizen(idexOf){
        this.kaizenInfo = {
          "logo": this.kaizenItem[idexOf].logo,
          "description": this.kaizenItem[idexOf].description
        }
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
          <div class="left">
            <h5>Non-technical Users Adoption</h5>
            <p>Mumei is designed for users to have seamless experience when using decentralized solutions such as BNS management, digital asset management, and decentralized websites utilization.</p>
          </div>
          <div class="right">
            <div class="figure"><img src="../images/mumei.png" alt=""/></div>
            <h4>mumei</h4>
          </div>
        </div>
        <div class="item_box">
          <ul class="item">
            <li v-for="(item,idx) in mumeiItems" :key="idx" @mouseenter="onMumei(idx)">
              <ul class="sub_item" v-if="item.subItems.length > 0">
                <li v-for="(subItem,idx) in item.subItems" :key="idx">
                  <a :href="subItem.subUrl" target="_blank">{{subItem.name}}</a>
                </li>
              </ul>
              <a :href="item.url" target="_blank">{{item.itemName}}</a>
            </li>
          </ul>
          <div class="item_info">
            <img :src="mumeiInfo.logo" alt=""/>
            <p>{{mumeiInfo.description}}</p>
          </div>
        </div>
      </div>
      <div class="kaizen">
        <div class="about">
          <div class="left">
            <h5>Technical Users Adoption</h5>
            <p>KAIZEN empowers users to learn, build, deploy, and manage decentralized applications or decentralized web services with their native languages, participation of hackathons, CLI, frameworks, and monitoring systems.</p>
          </div>
          <div class="right">
            <div class="figure"><img src="../images/kaizen.png" alt=""/></div>
            <h4>kaizen</h4>
          </div>
        </div>
        <div class="item_box">
          <ul class="item">
            <li v-for="(item,idx) in kaizenItem" :key="idx" @mouseenter="onKaizen(idx)">
              <ul class="sub_item" v-if="item.subItems.length > 0">
                <li v-for="(subItem,idx) in item.subItems" :key="idx">
                  <a :href="subItem.subUrl" target="_blank">{{subItem.name}}</a>
                </li>
              </ul>
              <a :href="item.url" target="_blank">{{item.itemName}}</a>
            </li>
          </ul>
          <div class="item_info">
            <img :src="kaizenInfo.logo" alt=""/>
            <p>{{kaizenInfo.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
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
    .left {
      width: 56.7%;
      padding-left: 65px;
      h5 {
        font-size: 40px;
        font-weight: 600;
        line-height: 55px;
        color: $gray;
        margin-bottom: 42px;
      }
      p {
        font-size: 16px;
        line-height: 1.69;
      }
    }
    .right {
      width: 31.2%;
      padding-right: 76px;
      .figure {
        width: 151px;
        margin: 0px auto 24px auto;
        img {
          width: 100%;
        }
      }
      h4 {
        font-size: 30px;
        font-weight: 800;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
  .item_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item {
      width: 56.7%;
      display: flex;
      flex-direction: column;
      >li {
        background-color: $item_bg;
        padding: 22px 56px 22px 12px;
        text-align: right;
        margin-left: 65px;
        @extend %clear;
        &:hover {
          background-color: $blue_d;
          padding: 22px 56px 22px 30px;
          margin-left: 45px;
          >a {
            color: $item_bg;
          }
        }
        >a {
          display: block;
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          float: right;
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
      >li {
        &+li {
          margin-left: 30px;
        }
        >a {
          display: inline-block;
          font-size: 12px;
          color: #fff;
          transition: color .5s;
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
      img {
        width: 70px;
        margin-bottom: 26px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
}

.solution {
  padding: 0px 0px 126px 0px;
  background-color: $bg_gray;
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
}
.mumei {
  @include solution(#ff675c);
  margin-bottom: 100px;
}
.kaizen {
  @include solution(#1face3);
}
</style>

