<script>
import axios from 'axios';
export default {
  data() {
    return {
      swiper: null,
      roadmaps: []
    };
  },
  methods: {
    swiperInit(){
      this.swiper = new Swiper(".swiper", {
        loop: false,
        watchOverflow: true,
        slidesPerView: 4,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerColumnFill: "row",
        navigation: {
          nextEl: '.roadmapNext',
          prevEl: '.roadmapPrev',
        },
        breakpoints: { 
          720: {
            slidesPerView: 2,
          }
        }
      });
    },
    getRoadmapData(){
      axios.get("../assets/json/roadmap.json")
      .then(res=>{
        this.roadmaps = res.data;
        setTimeout(() => {
          this.swiper.update();
        }, 500);
      })
      .catch(err=> console.log(err));
    },
    coming(){
      alert('Coming Soon');
    }
  },
  mounted() {
    this.getRoadmapData();
    this.swiperInit();
  }
};
</script>

<template>
  <div class="roadmap">
    <span id="roadmap" class="anchor"></span>
    <div class="content">
      <h3>Roadmap</h3>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(roadmap,idx) in roadmaps" :key="idx">
            <div class="roadmap_date">
              <div class="month">{{roadmap.month}}</div>
              <div class="year">{{roadmap.year}}</div>
            </div>
            <ul>
              <li v-for="(content,idx) in roadmap.description" :key="idx" v-html="content"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="button_box">
        <div class="roadmapPrev"></div>
        <div class="roadmapNext"></div>
      </div>
    </div>
    <div class="paper">
      <p>White Paper Request Form.</p>
      <div class="read_box">
        <a class="btn" href="javascript:;" target="_blank" @click="coming"></a>
        <p>Read Our White Paper</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

%date {
  font-size: 40px;
  font-weight: 800;
  color: #e0e0e0;
  text-align: left;
  @media screen and (max-width: $mob) {
    font-size: 20px;
  }
}
%button {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: #d3d1f2;
  transition: background-color .5s;
  &:hover {
    background-color: $blue;
  }
  @media screen and (max-width: $mob) {
    width: 10px;
    height: 10px;
  }
}
.roadmap {
  background-color: $bg_gray;
  padding: 125px 0px 125px 0px;
  position: relative;
  @media screen and (max-width: $pad) {
    padding: 66px 0px 44px 0px;
  }
  .anchor {
    position: absolute;
    top: 50px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto 60px auto;
  position: relative;
  @media screen and (max-width: $pad) {
    padding: 0px 20px;
  }
  @media screen and (max-width: $mob) {
    padding: 0px 0px 42px 0px;
  }
}
h3 {
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 77px;
  text-align: center;
  @media screen and (max-width: $mob) {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: $mob) {
    text-align: center;
  }
}
.button_box {
  position: absolute;
  top: 35px;
  right: 0px;
  @media screen and (max-width: $pad) {
    right: 20px;
  }
  @media screen and (max-width: $mob) {
    top: auto;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    text-align: center;
  }
  .roadmapPrev {
    @extend %button;
  }
  .roadmapNext {
    @extend %button;
    margin-left: 20px;
  }
}
.paper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: $mob) {
    display: block;
    padding: 0px 20px;
    text-align: center;
  }
  >p {
    width: 50%;
    font-size: 30px;
    font-weight: 800;
    text-align: right;
    padding-bottom: 10px;
    border-bottom: solid 2px $blue;
    @media screen and (max-width: $pad) {
      font-size: 20px;
    }
    @media screen and (max-width: $mob) {
      display: inline-block;
      width: auto;
      text-align: center;
      margin: 0px auto 24px auto;
    }
  }
  .read_box {
    width: 50%;
    padding-left: 30px;
    @media screen and (max-width: $mob) {
      width: 100%;
      padding-left: 0px;
    }
    .btn {
      display: inline-block;
      width: 100px;
      height: 64px;
      background-image: url('~images/whitepaper.png');
      background-position: top right;
      background-repeat: no-repeat;
      background-size: 100% auto;
      margin: 0px 0px 18px 42px;
      padding-left: 50px;
      transition: background-image .2s;
      @media screen and (max-width: $mob) {
        margin: 0px 0px 22px 0px;
      }
      &:hover {
        background-image: url('~images/whitepaper_h.png');
      }
    }
    p {
      font-size: 18px;
      font-weight: 600;
      text-align: left;
      color: $blue;
      @media screen and (max-width: $mob) {
        text-align: center;
      }
    }
  }
}
.swiper {
  overflow: hidden;
  .swiper-slide {
    padding: 0px 20px;
    .roadmap_date {
      text-align: right;
      margin-bottom: 20px;
      position: relative;
      @media screen and (max-width: $mob) {
        margin-bottom: 10px;
      }
      &:after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: $blue;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        bottom: 5px;
        @media screen and (max-width: $mob) {
          width: 10px;
          height: 10px;
        }
      }
    }
    .month {
      @extend %date;
      margin-bottom: 5px;
    }
    .year {
      @extend %date;
    }
    > ul {
      > li {
        font-weight: 600;
        line-height: 19px;
        & + li {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
$blue: #231abe;
%roadmap_button {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
}
.roadmapNext {
  background-color: $blue;
  & + .btn {
    margin-left: 15px;
  }
}
</style>


