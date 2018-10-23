<script>
  export default {
    data(){
      return {
        scroll: 0,
        block01: 0,
      }
    },
    methods: {
      parallax(){
        this.scroll = document.documentElement.scrollTop;
        //878
        // this.block01 = 
      }
    },
    mounted(){
      window.addEventListener('scroll', this.parallax);
    }
  }
</script>

<template>
  <div class="bns">
    <div class="content">
      <div class="parallax_box">
        <div class="block01" :style="{top: block01+'px'}"><img src="../images/block01.png" alt=""/></div>
        <div class="block02"><img src="../images/block02.png" alt=""/></div>
        <div class="block03"><img src="../images/block03.png" alt=""/></div>
      </div>

      <!-- <div class="liner">
        <div class="left">
          <img src="../images/bns.png" alt=""/>
          <h3>BNS</h3>
          <div class="special">
            <p><span>B</span>lockchain</p>
            <p><span>N</span>ame</p>
            <p><span>S</span>ervice</p>
          </div>
          <h4>Human-readable Identity</h4>
        </div>
        <div class="right">
          <h4>What is BNS?</h4>
          <p>BNS (Blockchain Name System) is the protocol on the internet that turns human-readable decentralized website names, Such as “yourwebsite.bch” or “mywebsite.eth” into addresses understandable by decentralized network machines.</p>
          <p>Blockchain Name Service enables connections with IPFS hash, smart contract, and wallet address.</p>      
        </div>
      </div> -->

      <div class="summary">
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
.bns {
  background-color: $bg_gray;
  padding: 62px 0px 152px 0px;
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  position: relative;
}
.liner {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.parallax_box {
  position: absolute;
  left: 50%;
  margin-left: -51px;
  .block01 {
    width: 103px;
    position: absolute;
    top: 0px;
    z-index: 3;
    img {
      width: 100%;
    }
  }
  .block02 {
    width: 103px;
    position: absolute;
    top: 20px;
    z-index: 2;
    img {
      width: 100%;
    }
  }
  .block03 {
    width: 103px;
    position: absolute;
    top: 40px;
    z-index: 1;
    img {
      width: 100%;
    }
  }
}
// .left {
//   width: 50%;
//   padding: 0px 82px 0px 76px;
//   border-right: solid 1px $blue;
//   @media screen and (max-width: $pad) {
//     width: 100%;
//     border-right: none;
//     padding: 0px 45px;
//   }
//   >img {
//     width: 60px;
//     margin-bottom: 15px;
//   }
//   h3 {
//     font-size: 70px;
//     font-weight: 800;
//     margin-bottom: 24px;
//   }
//   .special {
//     margin-bottom: 158px;
//     p {
//       font-size: 55px;
//       font-weight: 800;
//       line-height: 1.09;
//       color: $gray;
//       span {
//         font-size: 55px;
//         font-weight: 800;
//         line-height: 1.09;
//         color: $blue;
//       }
//     }
//   }
//   h4 {
//     max-width: 138px;
//     width: 100%;
//     font-size: 30px;
//     font-weight: 800;
//     line-height: 1.25;
//     margin-left: 142px;
//     padding-bottom: 30px;
//   }
// }
// .right {
//   width: 50%;
//   padding: 0px 69px 0px 138px;
//   position: relative;
//   h4 {
//     font-size: 20px;
//     font-weight: 800;
//     margin-bottom: 15px;
//     padding-top: 42px;
//   }
//   p {
//     font-size: 16px;
//     line-height: 25px;
//     &:last-child {
//       position: absolute;
//       bottom: 52px;
//     }
//   }
// }
.summary {
  max-width: 726px;
  margin: 0px auto;
  padding-bottom: 28px;
  position: relative;
  @media screen and (max-width: $pad) {
    max-width: 100%;
    padding: 0px 45px 28px 45px;
  }
  &:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 700px;
    background-color: rgba(20, 30, 106, 0.8);
    position: absolute;
    left: 50%;
    top: 0px;
    @media screen and (max-width: $pad) {
      left: 20%;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.bns_box {
  float: left;
  @media screen and (max-width: $pad) {
    float: none;
    padding-left: 165px;
  }
  >img {
    width: 60px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 70px;
    font-weight: 800;
    margin-bottom: 24px;
  }
  .special {
    margin-bottom: 158px;
    @media screen and (max-width: $pad) {
      margin-bottom: 45px;
    }
    p {
      font-size: 55px;
      font-weight: 800;
      line-height: 1.09;
      color: $gray;
      span {
        font-size: 55px;
        font-weight: 800;
        line-height: 1.09;
        color: $blue;
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
    padding: 0px 0px 0px 165px;
    max-width: 100%;
  }
  &+.summary_box {
    @media screen and (max-width: $pad) {
      margin-top: 50px;
    }
  }
  h4 {
    font-size: 30px;
    font-weight: 800;
    line-height: 1.25;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 25px;
  }
}
.domain_box {
  width: 518px;
  height: 80px;
  background-color: #000000;
  padding: 0px 20px 0px 40px;
  position: relative;
  margin: 0px auto 72px auto;
  p {
    font-size: 40px;
    font-weight: 800;
    line-height: 80px;
    color: #fff;
  }
  span {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 27px;
    img {
      width: 100%;
    }
  }
}
.identity {
  padding: 0px 45px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    &+li {
      margin-top: 60px;
    }
    .figure {
      width: 50%;
      height: 120px;
      padding: 0px 108px 0px 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 140px;
        margin: 0px auto;
      }
    }
    .text_box {
      width: 50%;
      padding-left: 90px;
      h5 {
        font-size: 18px;
        font-weight: 800;
        color: #000000;
        margin-bottom: 12px;
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
      }
    }
  }
}
</style>
