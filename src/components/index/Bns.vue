<script>
  export default {
    computed: {
      scrollTop() {
        return document.documentElement.scrollTop;
      },
      documentHeight() {
        return document.documentElement.scrollHeight;
      },
      getHeight(){
        let repositoriesHeight = document.querySelector(".repositories").offsetHeight;
        let chainHeight = document.querySelector(".chain").offsetHeight;
        let solutionHeight = document.querySelector(".solution").offsetHeight;
        let roadmapHeight = document.querySelector(".roadmap").offsetHeight;
        let newsHeight = document.querySelector(".news").offsetHeight;
        let partnershipHeight = document.querySelector(".partnership").offsetHeight;
        let footerHeight = document.querySelector(".footer").offsetHeight;
        return repositoriesHeight + chainHeight + solutionHeight + roadmapHeight + newsHeight + partnershipHeight + footerHeight;
      },
      parallaxStart(){
        // 224 = css what 區塊往上推的距離
        return document.querySelector(".header").offsetHeight + 
      (document.querySelector(".hero").offsetHeight + document.querySelector(".what").offsetHeight - 224);
      },
    },
    mounted(){
      let t1 = new TimelineLite();
      t1.to('.parallax_a', 1, {"top": 830});
      // tl.to(".parallax_b", 1, {"top": 1010});
      // tl.to(".parallax_c", 1, {"top": 1190});
      t1.pause();
      //830
      //1010
      //1190
      window.addEventListener('scroll',()=>{
        let percentA = this.scrollTop / (this.documentHeight - (this.documentHeight - this.parallaxStart - this.getHeight - document.querySelector(".identity_box").offsetHeight));
        let scrollStart = document.querySelector(".bns").getClientRects();
        console.log(scrollStart,"scrollStart");
        if(scrollStart[0].top < 0){
          t1.progress(percentA);
        }
      });
    }
  };
</script>

<template>
  <div class="bns">
    <span id="bns" class="anchor"></span>
    <div class="parallax">
      <div class="figure parallax_a"><img src="../../images/block01.png" alt=""></div>
      <div class="figure parallax_b"><img src="../../images/block02.png" alt=""></div>
      <div class="figure parallax_c"><img src="../../images/block03.png" alt=""></div>
    </div>
    <!-- <img src="../../images/block-full.png" alt=""> -->
    <div class="timeline">
      <div class="left">
        <div class="bns_box">
          <img src="../../images/bns.png" alt=""/>
          <h3 data-aos="fade-right">BNS</h3>
          <div class="special">
            <p data-aos="fade-right" data-aos-duration="500"><span>B</span>lockchain</p>
            <p data-aos="fade-right" data-aos-duration="800"><span>N</span>ame</p>
            <p data-aos="fade-right" data-aos-duration="1100"><span>S</span>ervice</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div>
          <div class="text_box what">
            <h4 data-aos="fade-right">What is BNS?</h4>
            <p data-aos="fade-right" data-aos-duration="500">BNS (Blockchain Name System) is the protocol on the internet that turns human-readable decentralized website names, Such as “yourwebsite.bch” or “mywebsite.eth” into addresses understandable by decentralized network machines.</p>
          </div>
          <div class="text_box identity">
            <h4 data-aos="fade-right">Human-readable Identity</h4>
            <p><span data-aos="fade-right" data-aos-duration="500">Blockchain Name Service enables connections with IPFS hash, smart contract, and wallet address.</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="domain">
      <div>
        <p>yourname</p>
        <ul class="top">
          <li>.eth</li>
          <li>.wan</li>
          <li>.etc</li>
        </ul>
      </div>
      <span class="icon"><img src="../../images/search.png" alt=""/></span>
    </div>
    <ul class="identity_box">
      <li>
        <div class="figure ipfs" data-aos="fade-down"><img src="../../images/ipfs.png" alt=""/></div>
        <img src="../../images/block01.png" alt="">
        <div class="text_box">
          <h5 data-aos="fade-right">IPFS Address</h5>
          <p data-aos="fade-right">QmYUXKQG86g2i6W32eT31C5PWq23kQNpo…</p>
        </div>
      </li>
      <li>
        <div class="figure contract" data-aos="fade-down" data-aos-duration="500"><img src="../../images/contract.png" alt=""/></div>
        <img src="../../images/block02.png" alt="">
        <div class="text_box">
          <h5 data-aos="fade-right">Smart Contract</h5>
          <p data-aos="fade-right">0x5FfC014343cd971B7eb70732021E26C35744…</p>
        </div>
      </li>
      <li>
        <div class="figure wallet" data-aos="fade-down" data-aos-duration="600"><img src="../../images/wallet.png" alt=""/></div>
        <img src="../../images/block03.png" alt="">
        <div class="text_box">
          <h5 data-aos="fade-right">Wallet Address</h5>
          <p data-aos="fade-right">0x5d681d62da63d9ccc46e9e512c30081c4165a…</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

.bns {
  background-color: $bg_gray;
  padding: 0px 0px 152px 0px;
  position: relative;
  @media screen and (max-width: $mob) {
    padding: 0px 0px 83px 0px;
  }
  >img {
    width: 104px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.anchor {
  position: absolute;
  top: 30px;
}
.parallax {
  transform: translateX(50%);
  margin-left: -102px;
  position: relative;
  .figure {
    width: 103px;
    position: absolute;
    img {
      width: 100%;
    }
    &.parallax_a {
      // top: 830px;
      top: 0px;
      z-index: 3;
    }
    &.parallax_b {
      // top: 1010px;
      top: 20px;
      z-index: 2;
    }
    &.parallax_c {
      // top: 1190px;
      top: 40px;
      z-index: 1;
    }
  }
}
.timeline {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: $mob) {
    display: block;
    padding: 0px 45px;
  }
}
.left {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: $mob) {
    width: 100%;
    justify-content: flex-start;
  }
  .bns_box {
    padding-right: 80px;
    overflow: hidden;
    @media screen and (max-width: $pad) {
      padding-right: 40px;
    }
    >img {
      width: 60px;
      margin-bottom: 15px;
      @media screen and (max-width: $mob) {
        width: 40px;
      }
    }
    h3 {
      font-size: 70px;
      font-weight: 800;
      margin-bottom: 24px;
      overflow: hidden;
      @media screen and (max-width: $mob) {
        font-size: 44px;
        margin-bottom: 19px;
      }
    }
    .special {
      p {
        font-size: 55px;
        font-weight: 800;
        line-height: 1.09;
        color: $gray;
        overflow: hidden;
        @media screen and (max-width: $mob) {
          font-size: 35px;
        }
        span {
          font-size: 55px;
          font-weight: 800;
          line-height: 1.09;
          color: $blue;
          @media screen and (max-width: $mob) {
            font-size: 35px;
          }
        }
      }
    }
  }
}
.right {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-left: solid 1px rgba(20, 30, 106, 0.8);
  padding-bottom: 55px;
  @media screen and (max-width: $mob) {
    width: 100%;
  }
  .text_box {
    max-width: 260px;
    @media screen and (max-width: $mob) {
      padding: 0px 0px 0px 120px;
    }
    &.what {
      margin: 136px 0px 0px 80px;
      overflow: hidden;
    }
    &.identity {
      max-width: 100%;
      width: 580px;
      display: flex;
      justify-content: space-between;
      transform: translateX(-40%);
      overflow: hidden;
      h4 {
        margin-right: 109px;
        overflow: hidden;
      }
      p {
        margin-left: 67px;
        overflow: hidden;
        span {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 25px;
          @media screen and (max-width: $mob) {
            font-size: 12px;
            line-height: 1.3;
          }
        }
      }
    }
    &+.text_box {
      margin-top: 116px;
    }
    h4 {
      font-size: 30px;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 10px;
      @media screen and (max-width: $mob) {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      @media screen and (max-width: $mob) {
        font-size: 12px;
        line-height: 1.3;
      }
    }
  }
}
@keyframes change {
  0%, 12.66%, 100% {transform: translate3d(0,0,0);}
  16.66%, 29.32% {transform: translate3d(0,-33%,0);}
  33.32%,45.98% {transform: translate3d(0,-66%,0);}
  49.98%,62.64% {transform: translate3d(0,-33%,0);}
  66.64%,79.3% {transform: translate3d(0,-66%,0);}
  83.3%,95.96% {transform: translate3d(0,-33%,0);}
}
.domain {
  width: 480px;
  height: 80px;
  background-color: #000000;
  padding: 0px 36px;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: $mob) {
    height: 55px;
    padding: 0px 18px 0px 18px;
  }
  >div {
    display: flex;
    align-items: flex-start;
  }
  p {
    font-size: 40px;
    font-weight: 800;
    line-height: 80px;
    color: #fff;
    @media screen and (max-width: $mob) {
      font-size: 25px;
      line-height: 55px;
    }
  }
  .top {
    animation: change 10s infinite;
    li {
      font-size: 40px;
      font-weight: 800;
      line-height: 80px;
      color: #fff;
      @media screen and (max-width: $mob) {
        font-size: 25px;
        line-height: 55px;
      }
    }
  }
  .icon {
    display: block;
    position: absolute;
    top: 50%;
    right: 36px;
    transform: translateY(-50%);
    width: 27px;
    @media screen and (max-width: $mob) {
      width: 18px;
    }
    img {
      width: 100%;
    }
  }
}
.identity_box {
  width: 837px;
  margin: 0px auto 53px auto;
  padding: 53px 0px 0px 179px;
  @media screen and (max-width: $pad) {
    width: 80%;
    padding-left: 0px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    &+li {
      margin-top: 60px;
    }
    .figure {
      width: 140px;
      margin-right: 60px;
      >img {
        width: 140px;
      }
    }
    >img {
      width: 103px;
    }
    .text_box {
      overflow: hidden;
      margin-left: 36px;
      h5 {
        font-size: 18px;
        font-weight: 800;
        color: #000000;
        margin-bottom: 12px;
        white-space: nowrap;
        overflow: hidden;
        @media screen and (max-width: $mob) {
          font-size: 16px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        color: $gray;
        overflow: hidden;
        @media screen and (max-width: $pad) {
          width: 226px;
          overflow : hidden;
          text-overflow : ellipsis;
          white-space : nowrap;
        }
        @media screen and (max-width: $mob) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
