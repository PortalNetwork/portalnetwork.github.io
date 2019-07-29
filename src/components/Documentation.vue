<script>
import animateScrollTo from 'animated-scroll-to';
import axios from 'axios';
export default {
  data(){
    return {
      swiper: null,
      isOpenPop: false,
      nowPhotos: [],
      roadmapData: []
    }
  },
  methods: {
    getRoadmapData(){
      axios.get("./assets/json/documentation.json")
      .then(res=>this.roadmapData = res.data)
      .catch(error=>console.log(error));
    },
    openModal: function(photoArr) {
      this.isOpenPop = true;
      this.nowPhotos = photoArr;
      setTimeout(() => {
        this.swiper.update();
      }, 100);
    },
    closeModal: function() {
      this.isOpenPop = false;
      this.nowPhotos = [];
    },
    getOffset(el) {
      const box = el.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
      }
    },
    scrollToChapter: function(idx) {
      const chapters = document.querySelectorAll('.chapter');
      const targetChapter = chapters[idx];
      const elementTop = this.getOffset(targetChapter);
      animateScrollTo(elementTop.top - 100);
    },
    swiperInit(){
      this.swiper = new Swiper('.swiper-container', {
        loop: false,
        watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }); 
    }
  },
  mounted(){
    this.swiperInit();
    this.getRoadmapData();
  }
};
</script>

<template>
  <div class="wrap">
    <div class="header">
      <div class="header-container">
        <a href="https://www.portal.network">
          <img src="../images/documentation/column_logo.png" />
        </a>

        <ul class="outline">
          <li>
            <a href="https://search.portal.network/" target="_blank">Showcase</a>
          </li>
          <li>
            <a href="https://hackathon.portal.network/" target="_blank">Hackathon</a>
          </li>
        </ul>
      </div>
    </div>

    <div id="roadmap">
      <a href="https://t.me/portalnetworkofficial" class="telegramBtn" target="_blank"><img src="images/documentation/tel.png" alt=""/></a>
      <div class="nav">
        <div class="nav-item" @click="scrollToChapter(0)">
          <span class="title">Chapter 1</span>
          <span class="chapter-name">Community Contribution</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(1)">
          <span class="title">Chapter 2</span>
          <span class="chapter-name">Development Progress</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(2)">
          <span class="title">Chapter 3</span>
          <span class="chapter-name">Education & Partnership</span>
        </div>
        <div class="nav-item" @click="scrollToChapter(3)">
          <span class="title">Chapter 4</span>
          <span class="chapter-name">Event</span>
        </div>
      </div>

      <div class="main">
        <div class="chapter" v-for="(chapter, chapterIdx) in roadmapData" :key="chapterIdx">
          <div class="banner">
            <div class="icon">
              <img :src="chapter.icon" />
            </div>
            <span class="title">{{ chapter.title }}</span>
          </div>

          <div class="flag" v-for="(flag, flagIdx) in chapter.flags" :key="flagIdx">
            <div class="headline-container">
              <h1 class="headline">{{ flag.title }}</h1>
              <div class="icons-container">
                <ul class="icon_list" v-if="flag.links.length > 0">
                  <li v-for="(link, linkIdx) in flag.links" :key="linkIdx">
                    <a :href="link.url" :class="{icon: true, link: true }" target="_blank">{{ flag.links.length >= 2 ? link.title: '' }}</a>
                  </li>
                </ul>

                <ul class="icon_list">
                  <li v-for="(video, videoIdx) in flag.videos" :key="videoIdx">
                    <a :href="video.url" :class="{icon: true, video: true, expand: flag.videos.length >= 2 }" target="_blank">{{ flag.videos.length >= 2 ? video.title: '' }}</a>
                  </li>
                </ul>

                <a v-for="(file, fileIdx) in flag.files" :key="fileIdx" :href="file.url" :class="{icon: true, file: true, expand: flag.files.length >= 2 }"
                  target="_blank">
                  {{ flag.files.length >= 2 ? file.title: '' }}
                </a>

                <a v-for="(github, githubIdx) in flag.githubs" :key="githubIdx" :href="github.url" :class="{icon: true, github: true, expand: flag.githubs.length >= 2 }"
                  target="_blank">
                  {{ flag.githubs.length >= 2 ? github.title: '' }}
                </a>
              </div>
            </div>

            <div class="time-location">
              {{flag.time}},{{flag.location}}
            </div>

            <div class="content">
              <div :class="{description: true, 'has-photos': flag.photos !== null}" v-html="flag.content"></div>
              <div class="photos" v-if="flag.photos !== null">
                <div v-for="(photo, photoIdx) in flag.photos" @click="openModal(flag.photos)" :class="{ cover: flag.photos.length > 2 && photoIdx === 1}" 
                  :key="photoIdx" v-if="photoIdx < 2">
                  <img :src="photo" alt="">
                  <span class="number">+{{flag.photos.length}}</span>
                </div>
              </div>
            </div>

            <div class="progress-container" v-if="flag.progress > 0">
              <div class="progress-bar">
                <div class="progress" :style="{ width: flag.progress + '%'}"></div>
              </div>
              <span class="number">{{flag.progress}}%</span>
            </div>
          </div>
        </div>
      </div>

      <div v-show="isOpenPop" class="photoPop">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(photo, photoIdx) in nowPhotos" :key="photoIdx">
                <img :src="photo" alt="" />
              </div>
            </div>
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
          </div>
          <a @click="closeModal" class="closeBtn">
            <i class="fas fa-times fa-2x"></i>
          </a>
        </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
$green: #15DACB;
$blue_d: #0C1346;
$blue_l: #2436B9;
$MOB_MOVE_INSIDE_DISTANCE_IN_CHAPTER: 13px;
$MOB_BANNER_HEIGHT: 110px;
$MAIN_WIDTH: 1051px;

.wrap {
  background-color: $blue_d;
}

.header {
  position: fixed;
  z-index: 1490;
  width: 100%;
  background-color: $green;
}

.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $MAIN_WIDTH;
  height: 100px;

  img {
    max-width: 166px;
  }

  @media screen and (max-width: 1000px) {
    padding-right: 25px;
    padding-left: 25px;
    width: 100%;
  }
}

.outline {
  @media screen and (max-width: 720px) {
    padding-left: 20px;
    box-sizing: border-box;
  }
  li {
    display: inline-block;
    margin-right: 23px;
    font-size: 16px;
    font-family: Gotham;
    letter-spacing: 0.1px;
    cursor: pointer;
    >a{
      color: rgba($blue_d,0.7);
      transition: color .2s;
      font-size: 16px;
      font-weight: 600;
      &:hover{
        color: rgba($blue_d,1);
      }
    }
  }
}

.time-location {
  margin-top: 14px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

#roadmap {
  display: flex;
  margin: 0 auto;
  padding-top: 100px;
  width: $MAIN_WIDTH;

  @media screen and (max-width: 1000px) {
    padding-left: 0;
    width: 100%;
    flex-direction: column;
  }
}

.telegramBtn {
  display: block;
  position: fixed;
  bottom: 10px;
  right: 21px;
  z-index: 6;
  img {
      width: 60px;
  }
}

.nav {
  position: fixed;
  width: 203px;

  @media screen and (max-width: 1000px) {
    z-index: 1490;
    top: 100px;
    display: flex;
    padding-top: 14px;
    padding-bottom: 14px;
    width: 100%;
    height: initial;
    border-bottom: 1px solid #939393;
    background-color: white;
  }
  @media screen and (max-width: 374px) {
    overflow-x: scroll;
  }
}

.nav-item {
  padding: 24px 12px;
  border-bottom: solid 1px rgba(147, 147, 147, 0.4);
  cursor: pointer;
  @media screen and (max-width: 940px) {
      width: 28%;
      border-right: solid 1px rgba(147, 147, 147, 0.4);
      border-bottom: none;
      text-align: center;
  }

  &:last-child {
    border-bottom: 0;
  }

  & .title {
    display: block;
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: $green;
  }

  & .chapter-name {
    display: block;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 600;
    color: #fff;
    @media screen and (max-width: 940px) {
      color: #000;
    }
    @media screen and (max-width: 720px) {
        font-size: 12px;
        text-align: center;
    }
  }
}

.main {
  margin-bottom: 140px;
  margin-left: 247px;
  padding-bottom: 100px;
  width: 893px;
  border-left: solid 1px rgba(#fff,0.3);

  @media screen and (max-width: 940px) {
    width: 100%;
    margin: 0px;
    padding: 188px 20px 0px 20px;
  }
}

.chapter {
  padding-bottom: 60px;

  @media screen and (max-width: 1000px) {
    position: relative;
    padding-bottom: 60px;
  }  
}

.banner {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  height: 218px;
  @media screen and (max-width: 940px) {
    margin-bottom: 30px;
    width: 100%;
    height: auto;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 102px;
    height: 102px;
    border-radius: 50%;
    background-color: $blue_l;
    margin-right: 46px;
    margin-left: 92px;
    @media screen and (max-width: 940px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 720px) {
      width:50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      margin-right: 20px;
    }
    img {
      width: 50px;
      @media screen and (max-width: 720px) {
          width: 50%;
      }
    }
  }

  .title {
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    @media screen and (max-width: 720px) {
        font-size: 20px;
    }
  }

}

.flag {
  position: relative;
  margin-bottom: 45px;
  padding-left: 42px;
  @media screen and (max-width: 720px) {
    padding-left: 22px;
  }

  .content {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 720px) {
      display: block;
    }
    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: -7px;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #d8d8d8;
    }
    .description {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: #fff;
      &.has-photos {
        margin-right: 39px;
        max-width: 381px;
        @media screen and (max-width: 720px) {
          margin-bottom: 20px;
        }
      }
    }
    .link_text {
      color: $green;
    }
    .photos {
      display: inline-flex;
      align-items: center;
      @media screen and (max-width: 720px) {
        flex-wrap: wrap;
      } 
      >div {
        @media screen and (max-width: 720px) {
          width: 100%;
          margin-bottom: 20px;
        }
        img {
          display: inline-block;
          max-width: 156px;
          cursor: pointer;
          @media screen and (max-width: 720px) {
            max-width: 100%;
          }
          &:first-child {
            margin-right: 15px;
          }
        }
      }
      .number {
        position: absolute;
        display: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, 0.8);
        top: 0;
        left: 0;
        color: #fff;
        cursor: pointer;
      }
      .cover {
        position: relative;
        .number{
          display: flex;
        }
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  & .headline-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    @media screen and (max-width: 720px) {
        display: block;
    }
  }

  & .headline {
    display: inline-block;
    padding-right: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    @media screen and (max-width: 720px) {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
}

.icons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    justify-content: flex-start;
  }
  .icon_list {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 720px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &+.icon_list {
      margin-left: 10px;
    }
    li {
      @media screen and (max-width: 720px) {
        margin-bottom: 10px;
      }
      &+ li {
        margin-left: 10px;
        @media screen and (max-width: 720px) {
          margin-left: 0px;
        }
      }
      .icon {
        display: block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: 1px solid #979797;
        background-color: white;
        font-size: 12px;
        font-weight: 400;
        color: #000;
        @media screen and (max-width: 720px) {
          margin-left: 10px;
        }
        &.link {
          background-image: url('~images/documentation/link.png');
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          background-size: 50% auto;
        }
        &.video {
          background-image: url('~images/documentation/video.png');
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          background-size: 50% auto;
          &.expand {
            width: auto;
            padding: 0px 15px 0px 35px;
            background-position-x: 14px;
            background-size: auto 20px;
            border-radius: 17px;
            line-height: 34px;
          }
        }
        &.file {
          background-image: url('~images/documentation/paperfile.png');
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          background-size: 50% auto;
        }
  
        &.github {
          background-image: url('~images/documentation/github.png');
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: center;
          background-size: 50% auto;
        }
      }
    }
  }
}

.progress-bar {
  display: inline-block;
  width: 164px;
  height: 9px;
  background-color: rgba(#f5f5f5,0.2);

  & .progress {
    height: inherit;
    background-color: $green;
  }
}

.progress-container {
  margin-top: 5px;

  & .number {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: $green;
  }
}

.photoPop {
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(#000000,0.8);

  a.closeBtn {
    position: absolute;
    z-index: 1510;
    right: 17px;
    top: 17px;
    color: #fff;


    @media screen and (max-width: 1000px) {
      right: 30px;
      top: 30px;
    }
  }

  img {
    max-height:85%;

    @media screen and (max-width: 1000px) {
      max-width: 85%;
      max-height: none;
    }
  }
}

.swiper-container {
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-button-prev {
  left: 100px !important;

  @media screen and (max-width: 1000px) {
    left: 10px !important;
  }
}

.swiper-button-next {
  right: 100px !important;

  @media screen and (max-width: 1000px) {
    right: 10px !important;
  }
}
</style>

