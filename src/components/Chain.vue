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
      this.chainInfo = {
        "title": obj[0].title,
        "description": obj[0].description
      };
      this.detailItem = obj[0].detail;
    },
    onActive(idx){
      this.selectIdx = idx;
      this.chainInfo = {
        "title": this.chains[idx].title,
        "description": this.chains[idx].description
      };
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
          <li v-for="(chain,idx) in chains" :key="idx">
            <a :class="{active: selectIdx === idx}" :style="{ backgroundImage: 'url(' + (selectIdx === idx ? chain.iconh : chain.icon) + ')' }" href="javascript:;" @click="onActive(idx)"></a>
          </li>
        </ul>
        <div class="wish_box">
          <a href="javascript:;" target="_blank"><img src="../images/plus.png" alt=""/></a>
          <p>MAKE A WISH</p>
        </div>
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
                <li v-for="(url,idx) in detail.linkItem" :key="idx">
                  <a :href="url.link" target="_blank"><img :src="url.img" alt=""/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
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
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.left {
  width: 37.5%;
  min-height: 544px;
  margin-left: 63px;
  position: relative;
  .chain_list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 80px;
      height: 80px;
      margin-left: 10px;
      margin-bottom: 10px;
      &.active {
        background-color: #fff;
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
  .wish_box {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background-color: rgba(256,256,256,.1);
      img {
        width: 40px;
        opacity: .4;
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
} 
.right {
  width: 45.8%;
  padding-right: 58px;
  .about_box {
    height: 100%;
    max-height: 180px;
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
      max-width: 288px;
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
      margin-left: 10px;
      li {
        &+li {
          margin-left: 10px;
        }
        a {
          display: block;
          width: 20px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

