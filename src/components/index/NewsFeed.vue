<script>
import axios from "axios";
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    getNewsData() {
      axios
        .get("../assets/json/news.json")
        .then(res => (this.items = res.data))
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.getNewsData();
  }
};
</script>

<template>
  <div class="news">
    <div class="content">
      <div class="twitter_box">
        <h3>Twitter Feed</h3>
        <a class="twitter-timeline" data-height="295" data-theme="light" data-chrome="nofooter noheader noborders" href="https://twitter.com/itisportal?ref_src=twsrc%5Etfw"></a>
      </div>
      <div class="news_box">
        <h3>News Feed</h3>
        <ul>
          <li v-for="(item,idx) in items" :key="idx">
            <a :href="item.url" target="_blank">
              <header><img :src="item.logo" alt=""/></header>
              <div class="box">
                <h4>{{item.title}}</h4>
                <p>{{item.article}}</p>
                <footer>{{item.author}}</footer>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$pad: 940px;
$mob: 720px;
$blue: #231abe;
$blue_d1: #141e6a;
%box {
  width: 48%;
  @media screen and (max-width: $mob) {
    width: 100%;
  }
}
%h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: $mob) {
    text-align: center;
    margin-bottom: 12px;
  }
}
.news {
  background-color: #e9e6e2;
  padding-top: 50px;
  @media screen and (max-width: $mob) {
    padding-top: 28px;
  }
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: $pad) {
      padding: 0px 20px;
    }
    @media screen and (max-width: $mob) {
      display: block;
    }
  }
}
.twitter_box {
  @extend %box;
  @media screen and (max-width: $mob) {
    margin-bottom: 40px;
  }
  h3 {
    @extend %h3;
    color: $blue;
  }
}
.news_box {
  @extend %box;
  h3 {
    @extend %h3;
    color: $blue_d1;
  }
  ul {
    height: 295px;
    overflow-y: auto;
    margin: 0px auto;
    li {
      a {
        display: block;
        background-color: #fff;
        header {
          width: 100%;
          height: 35px;
          background-color: $blue;
          padding: 10px 20px;
          img {
            height: 100%;
          }
        }
        .box {
          padding: 20px 25px;
          h4 {
            font-size: 20px;
            line-height: 27px;
            font-weight: 600;
            margin-bottom: 20px;
            @media screen and (max-width: $mob) {
              font-size: 16px;
            }
          }
          p {
            line-height: 19px;
            margin-bottom: 20px;
            @media screen and (max-width: $mob) {
              font-size: 12px;
            }
          }
        }
        footer {
          font-size: 16px;
          font-weight: 600;
          color: $blue;
        }
      }
    }
  }
}
.timeline-Widget {
  min-height: 100%;
}
</style>
