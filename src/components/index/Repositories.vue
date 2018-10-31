<script>
import axios from 'axios';
  export default {
    data(){
      return {
        repositorySwiper: null,
        publicReposLength: 0,
        repositories: [],
        isReady: false
      }
    },
    methods: {
      getRepositoryData(){
        axios.get("https://api.github.com/orgs/PortalNetwork/repos?per_page=100")
          .then((res)=>{
            const type = ['ens','wns','ecns','aens','bcns','qcns','pns','enigma-ns','nem-ns','ins','qns','nns','nkn-ns','mns','dfns','tns','pai-ns','zns'];
            let typeArr = {};
            this.publicReposLength = res.data.length;
            type.map((obj, idx)=>{
              typeArr[obj] = res.data.filter((elem)=>{
                return elem.name === obj;
              });
              this.repositories.push(typeArr[obj][0]);
              setTimeout(() => {
                this.repositorySwiper.update();
                this.isReady = true;
              }, 500);
            });
          }).catch(err=> console.log(err));
      },
      swiperInit(){
        this.repositorySwiper = new Swiper('.swiper_repository', {
          loop: false,
          watchOverflow: true,
          slidesPerView: 3,
          slidesPerColumn: 2,
          slidesPerGroup: 3,
          spaceBetween: 15,
          slidesPerColumnFill : 'row',
          navigation: {
            nextEl: '.repositoryNext',
            prevEl: '.repositoryPrev',
          },
          pagination: {
            el: '.fraction_pagination',
            type: 'fraction'
          },
          breakpoints: { 
            720: {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            }
          }
          // pagination: {
          //   el: '.progressbar_pagination',
          //   type: 'progressbar'
          // },
        });
      }
    },
    mounted(){
      this.getRepositoryData();
      this.swiperInit();
    }
  }
</script>

<template>
  <div class="repositories">
    <div class="loading" v-show="!isReady">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="content" v-show="isReady">
      <header>
        <h3>REPOSITORIES</h3>
        <div class="pagination_box">
          <div class="fraction_pagination"></div>
          <div class="button_box">
            <div class="repositoryPrev"></div>
            <div class="repositoryNext"></div>
          </div>
          <!-- <div class="progressbar_pagination"></div> -->
        </div>
      </header>
      <div class="swiper_repository">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,idx) in repositories" :key="idx">
            <a class="repository_box" :href="item.html_url" target="_blank">
              <h4>{{item.name}}</h4>
              <p>{{item.description}}</p>
              <ul>
                <li class="lang" v-if="item.language !== null">{{item.language}}</li>
                <li class="star">{{item.stargazers_count}}</li>
                <li class="share">{{item.forks_count}}</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

%bar_text {
  font-size: 12px;
  font-weight: 600;
  transition: color .5s;
}
%repository_button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
.repositories {
  background-color: $bg_gray;
  padding: 0px 0px 152px 0px;
  @media screen and (max-width: $mob) {
    padding: 0px 0px 60px 0px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  @media screen and (max-width: $pad) {
    padding: 0px 45px;
  }
  @media screen and (max-width: $mob) {
    position: relative;
    padding: 0px 43px 50px 43px;
    min-height: 100%;
  }
}
.loading {
  min-height: 559px;
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: $blue;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }
}
header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 52px;
  @media screen and (max-width: $mob) {
    margin-bottom: 30px;
  }
  h3 {
    font-size: 30px;
    font-weight: 800;
    @media screen and (max-width: $mob) {
      margin: 0px auto;
    }
    &:after {
      content: "";
      display: inline-block;
      vertical-align: super;
      width: 24px;
      height: 24px;
      background: url('~images/github_icon.png') center center no-repeat;
      background-size: 100% auto;
      margin-left: 7px;
    }
  }
  .pagination_box {
    width: 285px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 2px $blue;
    padding-bottom: 10px;
    @media screen and (max-width: $mob) {
      border-bottom: none;
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }
  .button_box {
    display: flex;
    align-items: center;
    justify-content: center;
    .repositoryPrev {
      @extend %repository_button;
      background-color: #CCC9E9;
    }
    .repositoryNext {
      @extend %repository_button;
      background-color: $blue;
      margin-left: 30px;
    }
  }
  .progressbar_pagination {
    position: relative !important;
    background: rgba(#CCC9E9,.6);
    display: block;
    width: 285px;
    height: 2px;
  }
}
.swiper_repository {
  overflow: hidden; 
}
.repository_box {
  display: block;
  background-color: #fff;
  transition: background-color .5s;
  padding: 22px 15px;
  @media screen and (max-width: $mob) {
    padding: 16px 25px;
    min-height: 157px;
  }
  &:hover {
    background-color: $blue;
    h4,p,.lang,.star,.share {
      color: #fff;
    }
    .star:before {
      background-image: url('~images/star_w.png');
    }
    .share:before {
      background-image: url('~images/share_w.png');
    }
  }
  h4 {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
    transition: color .5s;
  }
  >p {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 18px;
    transition: color .5s;
  }
  >ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      &+li {
        margin-left: 16px;
      }
    }
  }
  .lang {
    @extend %bar_text;
    &:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 10px;
      height: 10px;
      background-color: #FF675C;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .star {
    @extend %bar_text;
    &:before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-image: url('~images/star.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      margin-right: 4px;
      transition: background-image .5s;
    }
  }
  .share {
    @extend %bar_text;
    &:before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-image: url('~images/share.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      margin-right: 4px;
      transition: background-image .5s;
    }
  }
}
</style>
<style lang="scss">
$blue: #231abe;
$mob: 720px;
.swiper-pagination-progressbar-fill {
  background: $blue !important;
}
.fraction_pagination {
  font-size: 16px;
  font-weight: 800;
  color: $blue;
  @media screen and (max-width: $mob) {
    display: none;
  }
  .swiper-pagination-current {
    font-size: 28px;
    font-weight: 800;
    color: $blue;
  }
  .swiper-pagination-total {
    font-size: 16px;
    font-weight: 800;
    color: $blue;
  }
}
</style>


