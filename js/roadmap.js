var app = new Vue({
  el: '#roadmap',
  data: {
    mapData: [
      {
        "title": "eToro X Mr. Block",
        "open": false,
        "time": "2/24 / Taipei",
        "content": "NEO development experience as a Python Developer Johnny Hsieh, Co-founder of Portal Network, Python Developer",
        "link": [
          {
            "className": "fas fa-table-tennis fa-2x",
            "url": "https://www.accupass.com/event/1802080453545695696800"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1807825282569261/"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1808005792551210/"
          }
        ]
      },
      {
        "title": "Blockshow Cointelegraph x Mr.Block 區塊先生",
        "open": false,
        "time": "3/9 / Taipei, Taiwan",
        "content": "Portal Network pitch - Vincent Tu, Co-founder of Portal Network",
        "link": [
          {
            "className": "fas fa-table-tennis fa-2x",
            "url": "https://www.accupass.com/event/1802251255491941418397"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1822744367744019/"
          }
        ]
      },
      {
        "title": "Money 20/20 Asia",
        "open": false,
        "time": "3/12-14 Singapore",
        "content": "Media Team Sponsor",
        "link": [
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.youtube.com/watch?v=Ubd09OoVP0M&list=PLh7yM-DPEDYisiTsCAWhDFN_0TgXasg39"
          }
        ]
      },
      {
        "title": "Token2049",
        "open": false,
        "time": "3/20-21 / HongKong",
        "content": "Media Team Sponsor",
        "link": [
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.youtube.com/watch?v=AmNQa7JvwB0&list=PLh7yM-DPEDYjtXO1EkwMerV2EJ8Bcbe4F"
          }
        ]
      },
      {
        "title": "Cafe & Crypto",
        "open": false,
        "time": "3/30 / Taipei, Taiwan",
        "content": "Portal Network pitch - Phyrex Tsai, Founder of Portal Network",
        "link": [
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1846505082034614/"
          }
        ]
      },
      {
        "title": "Deconomy",
        "open": false,
        "time": "4/2-4 / Seoul, South Korea",
        "content": "Media Team Sponsor",
        "link": []
      },
      {
        "title": "Beyond Block Tokyo Summit",
        "open": false,
        "time": "4/3-5 / Tokyo, Japan",
        "content": "Beyond Block Livestream Media Partner",
        "link": [
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1851330701552052/"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1851646398187149/"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1852404714777984/"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1852659514752504/"
          }
        ]
      },
      {
        "title": "[product] Portal Network Marketplace",
        "open": false,
        "time": "4/16",
        "content": "1. User registration improvement Refactoring the usability Refactoring and Integration with ethereum UI/UX design enhancement Constructing the backend architecture Security Enhancement<br/>2. Constructing user profile dashboard",
        "link": [
          {
            "className": "fas fa-link fa-2x",
            "url": "https://beta.portal.network"
          }
        ]
      },
      {
        "title": "Education Platform",
        "open": false,
        "time": "4/17-18 / Singapore",
        "content": "Our co-founder, Christopher Shen, was presenting at the `Young Entrepreneur` Panel during the event. Assist university students to join the international SUSS events, to not only bring the blockchain trends to Taiwan, but also educate more students to have the ability to develop blockchain technology. It’s our goal to cultivate more blockchain developers, to thrive the whole community, and we start this mission from Taiwan.",
        "link": [
          {
            "className": "fas fa-images fa-2x",
            "url": "https://drive.google.com/drive/u/1/folders/19KGjy5Qbc-TT4J0DxxnVd5BFX4i9iO5L"
          }
        ]
      },
      {
        "title": "[product] Online Decentralized Website Builder ",
        "open": false,
        "time": "4/19",
        "content": "1. Personal profile builder. <br/>2. Customized website deployment. <br/>3. Backend contrucstion",
        "link": [
          {
            "className": "fas fa-link fa-2x",
            "url": "https://hackathon.portal.network"
          }
        ]
      },
      {
        "title": "Blockchain Universe",
        "open": false,
        "time": "4/27 / Taiwan",
        "content": "Co-hosted Blockchain Universe Event with Mr. Block",
        "link": [
          {
            "className": "fas fa-images fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/posts/1883584274993361"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1875961702422285/"
          }
        ]
      },
      {
        "title": "Mr.Block X Malaysia - 跨國際區塊鏈分享會",
        "open": false,
        "time": "4/29 Malaysia",
        "content": "Portal Network pitch - Phyrex",
        "link": [
          {
            "className": "far fa-file fa-2x",
            "url": "https://docs.google.com/document/d/1088KhjBFgtg77w12i3PDP0mxhu9pbbFHSSyloEK-zRs/edit"
          },
          {
            "className": "fas fa-video fa-2x",
            "url": "https://www.facebook.com/mrblock.tw/videos/1877831622235293/"
          }
        ]
      },
      {
        "title": "Portal.Network Hackathon",
        "open": false,
        "time": "4/29.30 / Canada",
        "content": "Co-hosted hackathon with Bluzelle at Canada Vancouver",
        "link": [
          {
            "className": "fas fa-file-pdf fa-2x",
            "url": "https://docs.google.com/document/d/15EdNiPJUPi0rPzJm4OKKxpEvtPKZwX2xukAir7QteMs/edit "
          },
          {
            "className": "fas fa-terminal fa-2x",
            "url": "http://hackathon.portal.network"
          },
          {
            "className": "fas fa-images fa-2x",
            "url": "https://drive.google.com/drive/u/1/folders/1vpM64T87RfHbNCiHFCR1F3lnT5bC1PVR"
          }
        ]
      },
      {
        "title": "[product] WHOIS",
        "open": false,
        "time": "5/2",
        "content": "1. Paring and cleaning all the domains on Ethereum.<br/> 2. Begin to build up Ethereum Classic WHOIS system and collect datas on it.",
        "link": []
      },
      {
        "title": "[product] Deep learning model",
        "open": false,
        "time": "5/2",
        "content": "1. Enhance trading matching rate.<br/> 2. We collect over 1m top value domains from centralize domains and all the Ethereum domains. With deep learning we are able to make AI systems which can predict the domains value. We have two kinds of systems, one is to find high value domains , the other is to predict the possible price of the domains.",
        "link": []
      },
      {
        "title": "Ethereum Improvement Proposal, EIP-1062",
        "open": false,
        "time": "5/7",
        "content": "1. Create an EIP to “Formalize IPFS hash into ENS resolver”.<br/> 2. Propose functions to convert between IPFS and Ethereum",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/ethereum/EIPs/pull/1062 "
          },
          {
            "className": "fab fa-ethereum fa-2x",
            "url": "https://eips.ethereum.org/"
          }
        ]
      },
      {
        "title": "Metamask Enhancement",
        "open": false,
        "time": "5/9",
        "content": "Enhancement MetaMask to integrate with ENS resolver to redirect to decentralize web",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/PortalNetwork/metamask-extension"
          }
        ]
      },
      {
        "title": "ENS public resolver smart contract contribution",
        "open": false,
        "time": "5/10",
        "content": "Propose multihash functions to support ENS Public Resolver smart contract Implementation of EIP - 1062",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/ensdomains/ens/pull/279 "
          },
          {
            "className": "fab fa-ethereum fa-2x",
            "url": "https://eips.ethereum.org/"
          }
        ]
      },
      {
        "title": "Ethereum Classic Improvement Proposal, ECIP-1044",
        "open": false,
        "time": "5/12",
        "content": "1. Create an ECIP to “Formalize IPFS hash into ECNS resolver”<br/> 2. Propose functions to convert between IPFS and Ethereum Classic",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/ethereumproject/ECIPs/pull/94"
          }
        ]
      },
      {
        "title": "Propose multihash functions to support ECNS Public Resolver smart contract",
        "open": false,
        "time": "5/12",
        "content": "Propose multihash functions to support ECNS Public Resolver smart contract Implementation of ECIP - 1044",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/EthereumCommonwealth/ECNS/pull/3"
          }
        ]
      },
      {
        "title": "[product] Protal Network Chrome Extension Enhancement",
        "open": false,
        "time": "5/12",
        "content": "1. Support .eth and .etc domains, .wan is under development.<br/> 2. Use multihash function to convert ENS and ECNS Public Resolver data 3. Let users can directly visit decentralized website",
        "link": [
          {
            "className": "fab fa-github fa-2x",
            "url": "https://github.com/PortalNetwork/portal-network-browser-extension"
          }
        ]
      }
    ]
  },
  methods: {
    openContentFn: function (idx) {
      this.mapData[idx].open = !this.mapData[idx].open;
    }
  }
})