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
      selectIdx: 0
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
    coming(){
      alert('Coming Soon');
    }
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
          <div class="item_box" v-for="(detail,idx) in detailItem" :key="idx">
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
        <a href="javascript:;" target="_blank" @click="coming"><img src="../images/plus.png" alt=""/></a>
        <p>MAKE A WISH</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$pad: 940px;
$mob: 720px;
.chain {
  max-width: 1100px;
  width: 100%;
  margin: 0px auto 110px auto;
  background-color: #0c1346;
  padding: 64px 0px; 
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
    padding: 0px 45px;
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
      margin-bottom: 38px;
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
    left: 20px;
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
</style>

