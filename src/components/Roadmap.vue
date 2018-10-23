<script>
export default {
  data() {
    return {
      swiper: null,
      roadmaps: [
        {
          month: "MAY",
          year: "2018",
          description: [
            "Proposals: EIP-1062 ECIP-1044",
            "Metamask Integration (Largest chrome wallet)"
          ]
        },
        {
          month: "JUN",
          year: "2018",
          description: [
            "Partnership: Wanchain Name Service (WNS)",
            "Development of WNS ecosystem",
            "Integration: InterPlanetary File Storage (IPFS)"
          ]
        },
        {
          month: "JUL",
          year: "2018",
          description: [
            "Partnership: Bluzelle (Decentralized Data Storage)",
            "Deployed: Metamask Integration",
            "Portal Network Hackathon: Korea",
            "Deployed: QTUM Name Service (QNS)"
          ]
        },
        {
          month: "AUG",
          year: "2018",
          description: [
            "Partnership: ICONick Name Service (ICON)",
            "Partnership: Enigma (Blockchain Secret Auction)",
            "Partnership: NOIA (Decentralized Content Delivery Network)",
            "Released: Domain Marketplace (beta)",
            "Released: dWeb Builder (beta)",
            "Released: KAIZEN Platform (beta)"
          ]
        },
        {
          month: "SEP",
          year: "2018",
          description: [
            "Partnership: NEM Name Service (NEM-NS)",
            "Partnership: QuarkChain Name Service (QCNS)",
            "Partnership: NKN Name Service (NKN-NS)",
            "Listed: dApp on Dapp.com",
            "Integration: Coinbase Wallet",
            "Intergration: Brave Browser (Largest blockchain browser)"
          ]
        },
        {
          month: "OCT",
          year: "2018",
          description: [
            "Deployed: BCH Name Service - Testnet",
            "Partnership: TomoChain Name Service",
            "Parntership: NEO Name Service (NEO-NS)",
            "Partnership: Perlin Network (Decentralized Cloud Computing)",
            "Partnership: Ethereum Classic Name Service (ECNS)"
          ]
        },
        {
          month: "NOV",
          year: "2018",
          description: [
            "Release: BTC Name Service & LTC Name Service",
            "Release: Cross-chain universal wallet (.portal)",
            "Release: Kaizen SDK & API."
          ]
        },
        {
          month: "DEC",
          year: "2018",
          description: [
            "Release: Ripple (XRP) & Stellar Lumen (XLM) Name Service"
          ]
        },
        {
          month: "JAN",
          year: "2019",
          description: [
            "Release: Zilliqa Name Service (ZNS)",
            "Release: Cardano Name Service (CNS)",
            "Integration: Sia (Decentralized File Storage)"
          ]
        }
      ]
    };
  },
  mounted() {
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
  }
};
</script>

<template>
  <div class="roadmap">
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
        <a class="btn" href="javascript:;" target="_blank"><img src="../images/whitepaper_h.png" alt=""></a>
        <p>Read Our White Paper</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$pad: 940px;
$mob: 720px;
$blue: #231abe;
$bg_gray: #f7f6f4;
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
  @media screen and (max-width: $mob) {
    width: 10px;
    height: 10px;
  }
}
.roadmap {
  background-color: $bg_gray;
  padding: 125px 0px 125px 0px;
  @media screen and (max-width: $pad) {
    padding: 66px 0px 44px 0px;
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
    background-color: rgba(35, 26, 190, 0.2);
  }
  .roadmapNext {
    @extend %button;
    background-color: $blue;
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
      width: 98px;
      margin: 0px 0px 18px 42px;
      @media screen and (max-width: $mob) {
        margin: 0px 0px 22px 0px;
      }
      img {
        width: 100%;
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


