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
    });
  }
};
</script>

<template>
  <div class="roadmap">
    <div class="content">
      <header>
        <h3>Roadmap</h3>
        <div class="button_box">
          <div class="roadmapPrev"></div>
          <div class="roadmapNext"></div>
        </div>
      </header>
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
$blue: #231abe;
$bg_gray: #f7f6f4;
%date {
  font-size: 40px;
  font-weight: 800;
  color: #e0e0e0;
  text-align: left;
}
%button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
.roadmap {
  background-color: $bg_gray;
  padding: 0px 0px 125px 0px;
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto 60px auto;
}
header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 68px;
  h3 {
    font-size: 70px;
    font-weight: 800;
  }
  .button_box {
    display: flex;
    align-items: center;
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
}
.paper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  >p {
    width: 50%;
    font-size: 30px;
    font-weight: 800;
    text-align: right;
    padding-bottom: 10px;
    border-bottom: solid 2px $blue;
  }
  .read_box {
    width: 50%;
    padding-left: 30px;
    .btn {
      display: inline-block;
      width: 98px;
      margin: 0px 0px 18px 42px;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 18px;
      font-weight: 600;
      text-align: left;
      color: $blue;
    }
  }
}
.swiper {
  overflow: hidden;
  .swiper-slide {
    .roadmap_date {
      text-align: right;
      margin-bottom: 20px;
      &:after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: $blue;
        border-radius: 50%;
        margin-right: 80px;
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
      padding-right: 20px;
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


