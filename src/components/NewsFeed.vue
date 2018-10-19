<script>

  export default {
    data(){
      return {
        items: [
          {
            "logo": "",
            "url": "https://blog.nem.io/nem-and-portal-network-sign-strategic-partnership-for-nem-name-service-development/",
            "title": "NEM and Portal network sign strategic partnership for NEM Name Service development",
            "article": "NEM and Portal Network have recently announced a strategic partnership…",
            "author": "NEM"
          },
          {
            "logo": "",
            "url": "https://usethebitcoin.com/nem-price-spikes-17-after-strategic-partnership-agreement-with-portal-network",
            "title": "NEM Price Spikes 17% After Strategic Partnership Agreement with Portal Network",
            "article": "The famous cryptocurrency network NEM has experienced a price increase on its cryptocurrency XEM. October started very positively…",
            "author": "Use The Bitcoin"
          },
          {
            "logo": "",
            "url": "https://news.bitcoin.com/portal-network-developers-announce-bitcoin-cash-name-service/",
            "title": "Portal Network Developers Announce Bitcoin Cash Name Service",
            "article": "A development team called the Portal Network has announced the creation of a new platform called the Bitcoin Cash Name Service (BCNS)…",
            "author": "Bitcoin"
          },
          {
            "logo": "",
            "url": "https://www.jinse.com/lives/55684.htm",
            "title": "Portal Network公司開發團隊推出比特幣現金名稱服務平台",
            "article": "Portal Network公司宣布開發團隊正在推出一個名爲比特幣現金名稱服務（BCNS）的平台。基本上，BCNS是一種名稱服務，它使用Omni Layer版本連接到智能合約，該版本也與IPFS散列…",
            "author": "金色財經"
          },
          {
            "logo": "",
            "url": "https://ethereumworldnews.com/icon-icx-partners-portal-network-to-build-icon-name-service/",
            "title": "ICON (ICX) Partners Portal Network To Build ICON Name Service",
            "article": "ICON (ICX) Foundation has announced it partnered with Portal Network, a platform that aims to provide users with an unprecedented…",
            "author": "Yusuff Olayode Supoto"
          },
          {
            "logo": "",
            "url": "https://cryptoticker.io/portal-network/",
            "title": "The GoDaddy of the crypto world: Portal Network",
            "article": "Portal Network aims to be a one-stop solution for creators and businesses interested in creating decentralized websites…",
            "author": "cryptoticker.io"
          },
          {
            "logo": "",
            "url": "https://www.coindesk.com/8-blockchain-projects-enlist-early-to-test-secret-enigma-contracts/",
            "title": "8 Blockchain Projects Enlist Early to Test Secret Enigma Contracts",
            "article": "Revealed exclusively to CoinDesk, Enigma’s “secret contracts” privacy protocol has eight partners gearing up for its launch later…",
            "author": "coindesk"
          },
          {
            "logo": "",
            "url": "https://bitcoinexchangeguide.com/portal-network-and-icon-icx-partner-for-domain-name-services-and-smart-contracts/",
            "title": "Portal Network And ICON (ICX) Partner For Domain Name Services And Smart Contracts",
            "article": "The Portal Network is a platform that offers users the ability to access any smart contract supported chain…",
            "author": "Bitcoin Exchange Guide"
          },
          {
            "logo": "",
            "url": "https://tokentops.com/icon-brings-out-a-strategic-and-hopeful-partnership-with-portal-network-icon-news-icx-price-september/",
            "title": "ICON brings out a strategic and hopeful partnership with Portal Network - ICON News, ICX Price",
            "article": "ICON Foundation announced on a strategic partnership with Portal Network for a clear and intentional goal to build ICONick also known as ICON Name Service…",
            "author": "Tokentops"
          },
          {
            "logo": "",
            "url": "http://www.xwonline.com.cn/20180720/53599.html",
            "title": "万维：全球路演登陆首尔，跨链·生态引爆洲际",
            "article": "Portal Network专注于提供一站式去中心化技术解决方案，透过结合、加强现有的各种区块链技术，除了降低开发者开发、部署的困难…",
            "author": "区块链在线"
          },
          {
            "logo": "",
            "url": "http://www.xnqb.com/newsdetail?nid=53540",
            "title": "ICON基金会宣布与Portal Network合作 将提供区块链域名服务",
            "article": "ICONick受智能合约的约束，将人类易于理解的分散网站名称（例如'yourwebsite.icon'）转换为分散式网络机器…",
            "author": "小牛情报"
          },
          {
            "logo": "",
            "url": "https://www.jinse.com/bitcoin/216048.html",
            "title": "萬維：全球路演登陸首爾，跨鏈·生態引爆洲際",
            "article": "Portal Network专注于提供一站式去中心化技术解决方案，透过结合、加强现有的各种区块链技术，除了降低开发者开发、部署的困难…",
            "author": "金色財經"
          },
          {
            "logo": "",
            "url": "https://www.tuoluocaijing.cn/kuaixun/detail-20813.html",
            "title": "ICON基金会宣布与Portal Network合作 将提供区块链域名服务",
            "article": "据Ethereum World News消息，ICON基金会宣布与Portal Network合作，两个平台能够构建ICONick(ICON域名服务)…",
            "author": "陀螺财经"
          },
          {
            "logo": "",
            "url": "http://www.bishijie.com/kuaixun_100368",
            "title": "ICON基金会宣布与Portal Network合作 将提供区块链域名服务",
            "article": "ICONick受智能合约的约束，将人类易于理解的分散网站名称转换为分散式网络机器可以理解的地址，以便能够使用户更简单访问…",
            "author": "币世界"
          }
        ]
      };
    },
  }
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
$container : 960px;
$blue: #231ABE;
$blue_d1: #141E6A;
%box {
  width: 50%;
}
%h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
}
.news {
  background-color: #E9E6E2;
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto;
    padding: 50px 0px 0px 0px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.twitter_box {
  @extend %box;
  h3 {
    @extend %h3;
    color: $blue;
  }
}
.news_box {
  h3 {
    @extend %h3;
    color: $blue_d1;
  }
  ul {
    width: 400px;
    height: 295px;
    overflow-y: auto;
    margin: 0px auto;
    li {
      a {
        display: block;
        background-color: #fff;
        header {
          width: 100%;
          height: 20px;
          background-color: $blue;
          padding: 5px 20px;
          img {
            height: 100%;
          }
        }
        .box {
          padding: 10px 20px;
          h4 {
            font-size: 20px;
            line-height: 27px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          p {
            line-height: 19px;
            margin-bottom: 20px;
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
