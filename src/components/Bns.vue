<script>
  export default {
    data(){
      return {
        scrollTop: 0,
        documentHeight: 0,
        windowHeight: 0,
        move: null,
      }
    },
    methods: {
      parallax(){
        /**
         * parallaxStart 動畫開始的位置
         */
        const parallaxStart = document.querySelector('.parallax_box').getBoundingClientRect();
        this.scrollTop = document.documentElement.scrollTop;
        this.documentHeight = document.documentElement.scrollHeight;
        this.windowHeight = document.documentElement.clientHeight;
        if(parallaxStart.top < 0){
          let scrollPercent = this.scrollTop / (this.documentHeight - this.windowHeight);
          console.log(scrollPercent);
          move.progress(scrollPercent);
        }
      },
      animation(){
        let tl = new TimelineLite();
        // tl.to('#b1', 1, {y: '900px'});
        // tl.to('#b2', 1, {y: '1060px'});
        // tl.to('#b3', 1, {y: '1236px'});
        tl.pause();
        // window.addEventListener('scroll', this.parallax);
        window.addEventListener('scroll', ()=>{
          let scrollTop = document.documentElement.scrollTop;
          let documentHeight = document.documentElement.scrollHeight;
          let windowHeight = document.documentElement.clientHeight;
          let scrollPercent = scrollTop / (documentHeight - windowHeight);
          tl.progress(scrollPercent);
        });
      }
    },
    mounted(){
      this.animation();
    }
  }
</script>

<template>
  <div class="bns">
    <div class="content">
      <div class="parallax_box">
        <div id="b1" class="block1"><img src="../images/block01.png" alt=""/></div>
        <div id="b2" class="block2"><img src="../images/block02.png" alt=""/></div>
        <div id="b3" class="block3"><img src="../images/block03.png" alt=""/></div>
      </div>
      <div class="summary">
        <span id="bns" class="anchor"></span>
        <div class="bns_box">
          <img src="../images/bns.png" alt=""/>
          <h3>BNS</h3>
          <div class="special">
            <p><span>B</span>lockchain</p>
            <p><span>N</span>ame</p>
            <p><span>S</span>ervice</p>
          </div>
        </div>
        <div class="summary_box">
          <h4>What is BNS?</h4>
          <p>BNS (Blockchain Name System) is the protocol on the internet that turns human-readable decentralized website names, Such as “yourwebsite.bch” or “mywebsite.eth” into addresses understandable by decentralized network machines.</p>
        </div>
        <div class="summary_box">
          <h4>Human-readable Identity</h4>
          <p>Blockchain Name Service enables connections with IPFS hash, smart contract, and wallet address.</p>
        </div>
      </div>
      <div class="domain_box">
        <p>yourname.eth</p>
        <span><img src="../images/search.png" alt=""/></span>
      </div>
      <ul class="identity">
        <li>
          <div class="figure"><img src="../images/ipfs.png" alt=""/></div>
          <div class="text_box">
            <h5>IPFS Address</h5>
            <p>0xd1640e2d0d820f942471cd98040be9f810e85…</p>
          </div>
        </li>
        <li>
          <div class="figure"><img src="../images/contract.png" alt=""/></div>
          <div class="text_box">
            <h5>Smart Contract</h5>
            <p>0x5FfC014343cd971B7eb70732021E26C35B744…</p>
          </div>
        </li>
        <li>
          <div class="figure"><img src="../images/wallet.png" alt=""/></div>
          <div class="text_box">
            <h5>Wallet Address</h5>
            <p>0x5d681d62da63d9ccc46e9e512c30081c4165a…</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container : 960px;
$pad: 940px;
$mob: 720px;
$blue: #231ABE; 
$gray: #979797;
$bg_gray: #F7F6F4;
%clear {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.bns {
  background-color: $bg_gray;
  padding: 62px 0px 152px 0px;
  @media screen and (max-width: $mob) {
    padding: 30px 0px 83px 0px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  position: relative;
  @media screen and (max-width: $pad) {
    padding: 0px 45px;
  }
}
.parallax_box {
  position: absolute;
  left: 50%;
  margin-left: -51px;
  height: 100%;
  @media screen and (max-width: $pad) {
    top: 396px;
    left: 57px;
    margin-left: 0px;
  }
  .block1 {
    width: 103px;
    position: absolute;
    top: 0px;
    z-index: 3;
    @media screen and (max-width: $pad) {
      top: 526px;
    }
    @media screen and (max-width: $mob) {
      width: 70px;
      top: 424px;
    }
    img {
      width: 100%;
    }
  }
  .block2 {
    width: 103px;
    position: absolute;
    top: 20px;
    z-index: 2;
    @media screen and (max-width: $pad) {
      top: 782px;
    }
    @media screen and (max-width: $mob) {
      width: 70px;
      top: 602px;
    }
    img {
      width: 100%;
    }
  }
  .block3 {
    width: 103px;
    position: absolute;
    top: 40px;
    z-index: 1;
    @media screen and (max-width: $pad) {
      top: 1035px;
    }
    @media screen and (max-width: $mob) {
      width: 70px;
      top: 778px;
    }
    img {
      width: 100%;
    }
  }
}
.summary {
  max-width: 726px;
  margin: 0px auto 52px auto;
  position: relative;
  @extend %clear;
  @media screen and (max-width: $pad) {
    max-width: 100%;
    margin: 0px auto 44px auto;
  }
  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 720px;
    background-color: rgba(20, 30, 106, 0.8);
    position: absolute;
    left: 50%;
    top: 0px;
    @media screen and (max-width: $pad) {
      top: 396px;
      left: 62px;
      height: 400px;
    }
    @media screen and (max-width: $mob) {
      left: 46px;
      top: 284px;
    }
  }
  .anchor {
    position: absolute;
    top: -10px;
  }
}
.bns_box {
  float: left;
  @media screen and (max-width: $pad) {
    float: none;
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
    @media screen and (max-width: $mob) {
      font-size: 44px;
      margin-bottom: 19px;
    }
  }
  .special {
    margin-bottom: 158px;
    @media screen and (max-width: $pad) {
      margin-bottom: 53px;
    }
    p {
      font-size: 55px;
      font-weight: 800;
      line-height: 1.09;
      color: $gray;
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
.summary_box {
  padding-top: 133px;
  float: right;
  max-width: 260px;
  @media screen and (max-width: $pad) {
    float: none;
    padding: 0px 0px 0px 150px;
    max-width: 100%;
  }
  @media screen and (max-width: $mob) {
    padding: 0px 0px 0px 120px;
  }
  &+.summary_box {
    @media screen and (max-width: $pad) {
      margin-top: 58px;
    }
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
    line-height: 25px;
    @media screen and (max-width: $mob) {
      font-size: 12px;
      line-height: 1.3;
    }
  }
}
.domain_box {
  width: 518px;
  height: 80px;
  background-color: #000000;
  padding: 0px 20px 0px 40px;
  position: relative;
  margin: 0px auto 72px auto;
  @media screen and (max-width: $pad) {
    width: 100%;
    margin: 0px auto 55px auto;
    padding: 0px 40px 0px 40px;
  }
  @media screen and (max-width: $mob) {
    padding: 0px 18px 0px 18px;
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
  span {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
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
.identity {
  max-width: 726px;
  margin: 0px auto;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: $pad) {
      display: block;
    }
    &+li {
      margin-top: 60px;
      @media screen and (max-width: $mob) {
        margin-top: 32px;
      }
    }
    .figure {
      width: 50%;
      height: 120px;
      padding: 0px 110px 0px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: $pad) {
        padding: 0px;
        height: auto;
        margin: 0px 0px 24px auto;
        width: 140px;
      }
      @media screen and (max-width: $mob) {
        width: 86px;
      }
      img {
        width: 140px;
        margin: 0px 0px 0px auto;
        @media screen and (max-width: $pad) {
          width: 100%;
        }
      }
    }
    .text_box {
      width: 50%;
      padding-left: 88px;
      @media screen and (max-width: $pad) {
        width: 100%;
        padding-left: 62px;
      }
      @media screen and (max-width: $mob) {
        padding-left: 47px;
      }
      h5 {
        font-size: 18px;
        font-weight: 800;
        color: #000000;
        margin-bottom: 12px;
        @media screen and (max-width: $mob) {
          font-size: 16px;
        }
      }
      p {
        font-size: 14px;
        line-height: 19px;
        color: $gray;
        @media screen and (max-width: $pad) {
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
