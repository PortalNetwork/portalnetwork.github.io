import animateScrollTo from 'animated-scroll-to';
import '../scss/roadmap.scss';
function GetOffset(el) {
  const box = el.getBoundingClientRect();
  return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}

new Vue({
  el: '#roadmap',
  data: {
    swiper: null,
    isOpenPop: false,
    nowPhotos: null,
    roadmapData: [
      {
        title: 'Documentation',
        icon: 'images/roadmap/documentation.png',
        flags: [
          {
            title: 'Propose a pull request for MetaMask to integration ENS with IPFS',
            content: 'MetaMask browser extension is great project helps users to interact with Ethereum, and furthermore can be more powerful by add content resolve by ENS, so Portal Network build a way to resolves ENS domains (.eth) to IPFS hash and redirects to url content.',
            photos: null,
            location: '',
            time: '5/29',
            progress: 100,
            links: [],
            githubs: [
              {
                title: '',
                url: 'https://github.com/MetaMask/metamask-extension/pull/4405',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Propose multihash functions to support ECNS Public Resolver smart contract',
            content: 'Propose multihash functions to support ECNS Public Resolver smart contract Implementation of ECIP - 1044',
            photos: null,
            location: '',
            time: '5/12',
            progress: 100,
            links: [],
            githubs: [
              {
                title: '',
                url: 'https://github.com/EthereumCommonwealth/ECNS/pull/3',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Ethereum Classic Improvement Proposal, ECIP-1044',
            content: '1. Create an ECIP to “Formalize IPFS hash into ECNS resolver”<br>2. Propose functions to convert between IPFS and Ethereum Classic',
            photos: null,
            location: '',
            time: '5/12',
            progress: 100,
            links: [],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ethereumproject/ECIPs/pull/94',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'ENS public resolver smart contract contribution',
            content: 'Propose multihash functions to support ENS Public Resolver smart contract Implementation of EIP - 1062',
            photos: null,
            location: '',
            time: '5/10',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org/',
              }
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ensdomains/ens/pull/279',
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Ethereum Improvement Proposal, EIP-1062',
            content: '1. Create an EIP to “Formalize IPFS hash into ENS resolver”<br>2. Propose functions to convert between IPFS and Ethereum',
            photos: null,
            location: '',
            time: '5/7',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org',
              }
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/ethereum/EIPs/pull/1062',
              }
            ],
            files: [],
            videos: [],
          },
        ],
      },

      {
        title: 'Application',
        icon: 'images/roadmap/documentation.png',
        flags: [
          {
            title: 'Portal Network Marketplace',
            content: 'In addition to ENS, ECNS, Portal Network now supports WNS as well.',
            photos: null,
            location: '',
            time: '7/12',
            progress: 60,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Decentralized Webuilder',
            content: '1. “blog” function added<br>2. Gnosis & DappCon template implemented',
            photos: null,
            location: '',
            time: '7/12',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Marketplace',
            content: '1. Support domain bidding',
            photos: null,
            location: '',
            time: '6/22',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network intergration with Wanchain',
            content: '1. Deploy wanchain public resolver <a href="https://explorer.wanchain.org/block/addr/0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014" target="_blank" class="link_text">0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014</span>',
            photos: null,
            location: '',
            time: '6/20',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://explorer.wanchain.org/block/addr/0xd5bbfe34585bdb92107ad5808dd1a3df1d4d3014',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Marketplace',
            content: '1. Support wanchain domain name searching',
            photos: null,
            location: '',
            time: '6/13',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network intergration with Wanchain',
            content: '1. Deploy wanchain infura <a href="http://wanchain.portal.network/" target="_blank" class="link_text">wanchain.portal.network</a>',
            photos: null,
            location: '',
            time: '6/12',
            progress: 100,
            links: [
              {
                title: '',
                url: 'http://wanchain.portal.network/',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Decetentralized Web Builder',
            content: '1. User registration flow.<br>2. Personal profile builder.<br>3. Decentralized website deploy history.',
            photos: null,
            location: '',
            time: '5/30',
            progress: 100,
            links: [
              {
                title: '',
                url: ' https://web.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Marketplace',
            content: 'Design an user dashboard for user settings, domain manager, domain purchase history',
            photos: null,
            location: '',
            time: '5/30',
            progress: 100,
            links: [
              {
                title: '',
                url: ' https://beta.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Protal Network Chrome Extension Enhancement',
            content: '1. Support .eth and .etc domains, .wan is under development<br>2. Use multihash function to convert ENS, ECNS, WNS Public Resolver data<br/>3. Let users can directly visit decentralized website',
            photos: null,
            location: '',
            time: '5/12',
            progress: 100,
            links: [
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/PortalNetwork/portal-network-browser-extension'
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Metamask Enhancement',
            content: 'Enhancement MetaMask to integrate with ENS resolver to redirect to decentralize web',
            photos: null,
            location: '',
            time: '5/9',
            progress: 100,
            links: [
            ],
            githubs: [
              {
                title: '',
                url: 'https://github.com/PortalNetwork/metamask-extension'
              }
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Deep learning model',
            content: '1. Enhance trading matching rate <br>2. We collect over 1m top value domains from centralize domains and all the Ethereum domains. With deep learning we are able to make AI systems which can predict the domains value. We have two kinds of systems, one is to find high value domains , the other is to predict the possible price of the domains.',
            photos: null,
            location: '',
            time: '5/2',
            progress: 100,
            links: [
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'WHOIS',
            content: '1. Paring and cleaning all the domains on Ethereum.<br>2. Begin to build up Ethereum Classic WHOIS system and collect datas on it.',
            photos: null,
            location: '',
            time: '5/2',
            progress: 100,
            links: [
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Online Decentralized Website Builder',
            content: '1. Personal profile builder<br>2. Customized website deployment<br>3. Backend contrucstion',
            photos: null,
            location: '',
            time: '4/19',
            progress: 100,
            links: [
              {
                title: '',
                url: ' http://h1.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Marketplace',
            content: '1. User registration improvement Refactoring the usability Refactoring and Integration with ethereum UI/UX design enhancement Constructing the backend architecture Security Enhancement<br>2. Constructing user profile dashboard',
            photos: null,
            location: '',
            time: '4/16',
            progress: 100,
            links: [
              {
                title: '',
                url: ' https://beta.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
        ],
      },
      
      {
        title: 'Education',
        icon: 'images/roadmap/education.png',
        flags: [
          {
            title: 'IT Seed',
            content: 'Portal Network and Mr. Block team were very honored to get invited by New Taipei City Computer Associate to speak at IT Seed x Technology training program. IT Seed is an education community that let graduating students learn various trends around the world, so they can be well prepared for their career path in the future. Basic concept of Blockchain & Application of Blockchain & Future development of Blockchain',
            photos: [
              'images/roadmap/event/ITSeed/IMG_0939.jpg',
              'images/roadmap/event/ITSeed/IMG_0941.jpg',
              'images/roadmap/event/ITSeed/IMG_0943.jpg',
              'images/roadmap/event/ITSeed/IMG_0944.jpg',
              'images/roadmap/event/ITSeed/IMG_0945.jpg',
              'images/roadmap/event/ITSeed/IMG_0946.jpg',
              'images/roadmap/event/ITSeed/IMG_0948.jpg',
              'images/roadmap/event/ITSeed/IMG_0949.jpg',
              'images/roadmap/event/ITSeed/IMG_0950.jpg',
              'images/roadmap/event/ITSeed/IMG_0951.jpg',
              'images/roadmap/event/ITSeed/IMG_0954.jpg',
              'images/roadmap/event/ITSeed/IMG_0958.jpg',
              'images/roadmap/event/ITSeed/IMG_0961.jpg',
              'images/roadmap/event/ITSeed/IMG_0965.jpg',
              'images/roadmap/event/ITSeed/IMG_0967.jpg',
              'images/roadmap/event/ITSeed/IMG_0969.jpg',
              'images/roadmap/event/ITSeed/IMG_0971.jpg',
              'images/roadmap/event/ITSeed/IMG_0974.jpg',
              'images/roadmap/event/ITSeed/IMG_0980.jpg',
              'images/roadmap/event/ITSeed/IMG_0983.jpg',
            ],
            location: 'Taipei, Taiwan',
            time: '5/19',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Education Platform',
            content: 'Our co-founder, Christopher Shen, was presenting at the "Young Entrepreneur" Panel during the event. Assist university students to join the international SUSS events, to not only bring the blockchain trends to Taiwan, but also educate more students to have the ability to develop blockchain technology. It’s our goal to cultivate more blockchain developers, to thrive the whole community, and we start this mission from Taiwan.',
            photos: [
              'images/roadmap/event/education/1.jpg', 'images/roadmap/event/education/2.jpg', 'images/roadmap/event/education/3.jpg', 'images/roadmap/event/education/4.jpg', 
              'images/roadmap/event/education/5.jpg', 'images/roadmap/event/education/6.jpg', 'images/roadmap/event/education/7.jpg', 'images/roadmap/event/education/8.jpg', 
              'images/roadmap/event/education/9.jpg', 'images/roadmap/event/education/10.jpg', 'images/roadmap/event/education/11.jpg', 'images/roadmap/event/education/12.jpg', 
              'images/roadmap/event/education/13.jpg',
            ],
            location: 'Singapore',
            time: '4/17-18',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
        ],
      },

      {
        title: 'Event',
        icon: 'images/roadmap/event.png',
        flags: [
          {
            title: 'World Blockchain Conference',
            content: 'Vincent Tu, Co-founder of Portal Network',
            photos: [
              'images/roadmap/event/event37.jpg',
            ],
            location: 'Singapore',
            time: '7/17 - 18',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Aisa speech',
            content: 'Andy, Community lead of Portal Network',
            photos: null,
            location: 'Seoul, Korea Wanchain Roadshow',
            time: '7/14',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Hosted Hackathon with teamw.e and SOPT',
            content: '',
            photos: [
              'images/roadmap/event/kr_Hackathon/DSC03295.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03265.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03266.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03275.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03279.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03281.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03283.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03294.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03303.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03307.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03308.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03314.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03329.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03333.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03339.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03340.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03397.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03400.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03418.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03424.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03425.jpg',
              'images/roadmap/event/kr_Hackathon/DSC03427.jpg'
            ],
            location: 'Seoul, Korea',
            time: '7/14 - 15',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'RISE, "The largest tech conference in Asia"',
            content: 'Vincent Tu,  Co-founder of Portal Network',
            photos: [
              'images/roadmap/event/event35.png',
            ],
            location: 'Hong Kong',
            time: '7/8 - 11',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Aisa speech',
            content: 'Christopher, founder of Portal Network',
            photos: [
              'images/roadmap/event/event34.jpg',
            ],
            location: 'Kuala Lumpur, Malysia',
            time: '7/7',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Aisa speech',
            content: 'Christopher, founder of Portal Network',
            photos: [
              'images/roadmap/event/event33.jpg',
            ],
            location: 'Jakarta, Indonesia',
            time: '7/5',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Blockchain Festival: Vietnam ',
            content: 'Blockchain Festival is hosted by Huobi.pro and co-hosted by Kyber Network',
            photos: [
              'images/roadmap/event/Vietnam/1.jpg',
              'images/roadmap/event/Vietnam/2.jpg',
              'images/roadmap/event/Vietnam/3.jpg',
              'images/roadmap/event/Vietnam/4.jpg',
              'images/roadmap/event/Vietnam/5.jpg',
              'images/roadmap/event/Vietnam/6.jpg',
              'images/roadmap/event/Vietnam/7.jpg',
              'images/roadmap/event/Vietnam/8.jpg',
              'images/roadmap/event/Vietnam/9.jpg',
              'images/roadmap/event/Vietnam/10.jpg',
              'images/roadmap/event/Vietnam/11.jpg',
              'images/roadmap/event/Vietnam/12.jpg',
              'images/roadmap/event/Vietnam/13.jpg',
              'images/roadmap/event/Vietnam/14.jpg',
              'images/roadmap/event/Vietnam/15.jpg',
              'images/roadmap/event/Vietnam/16.jpg',
              'images/roadmap/event/Vietnam/17.jpg',
              'images/roadmap/event/Vietnam/18.jpg',
              'images/roadmap/event/Vietnam/19.jpg',
              'images/roadmap/event/Vietnam/20.jpg',
              'images/roadmap/event/Vietnam/21.jpg',
              'images/roadmap/event/Vietnam/1012.png',
              'images/roadmap/event/Vietnam/1416.png',
              'images/roadmap/event/Vietnam/1435.png',
              'images/roadmap/event/Vietnam/1458.png',
              'images/roadmap/event/Vietnam/1548.png',
              'images/roadmap/event/Vietnam/1613.png',
              'images/roadmap/event/Vietnam/1705.png',
              'images/roadmap/event/Vietnam/1738.png',
              'images/roadmap/event/Vietnam/1820.png',
              'images/roadmap/event/Vietnam/1914.png',
              'images/roadmap/event/Vietnam/1942.png',
              'images/roadmap/event/Vietnam/2029.png',
              'images/roadmap/event/Vietnam/2108.png',
            ],
            location: 'Ho Chi Minh, Vietnam',
            time: '5/24 - 25',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.youtube.com/watch?v=8wzfvF5Vt-M&list=PLh7yM-DPEDYhEMpj3vHbBaeSobFDLTqrS',
              }
            ],
          },
          {
            title: 'BBS - Korea meet-up ',
            content: 'Portal Network and Mr. Block team were very honored to get invited by New Taipei City Computer Associate to speak at IT Seed x Technology training program. IT Seed is an education community that let graduating students learn various trends around the world, so they can be well prepared for their career path in the future.',
            photos: [
              'images/roadmap/event/BBS/0860.jpg',
              'images/roadmap/event/BBS/0864.jpg',
              'images/roadmap/event/BBS/0897.jpg',
              'images/roadmap/event/BBS/0900.jpg',
              'images/roadmap/event/BBS/0907.jpg',
              'images/roadmap/event/BBS/0910.jpg',
              'images/roadmap/event/BBS/0911.jpg',
              'images/roadmap/event/BBS/0912.jpg',
              'images/roadmap/event/BBS/0914.jpg',
              'images/roadmap/event/BBS/0915.jpg',
              'images/roadmap/event/BBS/0917.jpg',
              'images/roadmap/event/BBS/0923.jpg',
            ],
            location: 'Seoul, Korea',
            time: '5/10 - 12',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Bluzelle x Portal.Network Hackathon',
            content: 'Co-hosted hackathon with Bluzelle at Canada Vancouver',
            photos: null,
            location: 'Canada',
            time: '4/29.30',
            progress: 100,
            links: [
              {
                title: '',
                url: 'http://h1.portal.network',
              },
            ],
            githubs: [],
            files: [
              {
                title: '',
                url: 'https://drive.google.com/file/d/1l1GxD0SF5NQKeLqhOCWqQUYHPRAoBfHn/view',
              },
            ],
            videos: [],
          },
          {
            title: 'Mr.Block X Malaysia',
            content: 'Portal Network pitch - Phyrex',
            photos: null,
            location: 'Malaysia',
            time: '4/29',
            progress: 100,
            links: [],
            githubs: [],
            files: [
              {
                title: '',
                url: 'https://drive.google.com/file/d/1IjiDTu8vXqWUjbjICllfz_Lf-97Vgiwq/view',
              },
            ],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1877831622235293/',
              }
            ],
          },  
          {
            title: 'Blockchain Universe',
            content: 'Co-hosted Blockchain Universe Event with Mr. Block',
            photos: [
              'images/roadmap/event/event1.jpg', 'images/roadmap/event/event2.jpg', 'images/roadmap/event/event3.jpg', 'images/roadmap/event/event4.jpg',
              'images/roadmap/event/event5.jpg', 'images/roadmap/event/event6.jpg', 'images/roadmap/event/event7.jpg', 'images/roadmap/event/event8.jpg',
              'images/roadmap/event/event9.jpg', 'images/roadmap/event/event10.jpg', 'images/roadmap/event/event11.jpg', 'images/roadmap/event/event12.jpg',
              'images/roadmap/event/event13.jpg', 'images/roadmap/event/event14.jpg', 'images/roadmap/event/event15.jpg', 'images/roadmap/event/event16.jpg',
              'images/roadmap/event/event17.jpg', 'images/roadmap/event/event18.jpg', 'images/roadmap/event/event19.jpg', 'images/roadmap/event/event20.jpg',
              'images/roadmap/event/event21.jpg', 'images/roadmap/event/event22.jpg', 'images/roadmap/event/event23.jpg', 'images/roadmap/event/event24.jpg',
              'images/roadmap/event/event25.jpg', 'images/roadmap/event/event26.jpg', 'images/roadmap/event/event27.jpg', 'images/roadmap/event/event28.jpg',
              'images/roadmap/event/event29.jpg', 'images/roadmap/event/event30.jpg', 'images/roadmap/event/event31.jpg', 'images/roadmap/event/event32.jpg',
            ],
            location: 'Taiwan',
            time: '4/27',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1875961702422285/',
              }
            ],
          },
          {
            title: 'Beyond Block Tokyo Summit',
            content: 'Beyond Block Livestream Media Partner',
            photos: null,
            location: 'Tokyo, Japan',
            time: '4/3-5',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: 'video 1',
                url: 'https://www.facebook.com/mrblock.tw/videos/1851330701552052/',
              },
              {
                title: 'video 2',
                url: 'https://www.facebook.com/mrblock.tw/videos/1851646398187149/',
              },
              {
                title: 'video 3',
                url: 'https://www.facebook.com/mrblock.tw/videos/1852404714777984/',
              },
              {
                title: 'video 4',
                url: 'https://www.facebook.com/mrblock.tw/videos/1852659514752504/',
              },
            ],
          },
          {
            title: 'Deconomy',
            content: 'Media Team Sponsor',
            photos: null,
            location: 'Seoul, South Korea',
            time: '4/2-4',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Cafe & Crypto',
            content: 'Portal Network pitch - Phyrex Tsai, Founder of Portal Network',
            photos: null,
            location: 'Taipei, Taiwan',
            time: '3/30',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1846505082034614/',
              }
            ],
          },    
          {
            title: 'Token2049',
            content: 'Media Team Sponsor',
            photos: null,
            location: 'HongKong',
            time: '3/20-21',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.youtube.com/watch?v=AmNQa7JvwB0&list=PLh7yM-DPEDYjtXO1EkwMerV2EJ8Bcbe4F',
              }
            ],
          },
          {
            title: 'Money 20/20 Asia',
            content: 'Media Team Sponsor',
            photos: null,
            location: 'Singapore',
            time: '3/12-14',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.youtube.com/watch?v=Ubd09OoVP0M&list=PLh7yM-DPEDYisiTsCAWhDFN_0TgXasg39',
              }
            ],
          },
          {
            title: 'Blockshow Cointelegraph x Mr.Block',
            content: 'Portal Network pitch - Vincent Tu, Co-founder of Portal Network',
            photos: null,
            location: 'Taipei, Taiwan',
            time: '3/9',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://www.accupass.com/event/1802251255491941418397',
              }
            ],
            githubs: [],
            files: [],
            videos: [
              {
                title: '',
                url: 'https://www.facebook.com/mrblock.tw/videos/1822744367744019/',
              }
            ],
          },
          {
            title: 'eToro X Mr. Block',
            content: 'NEO development experience as a Python Developer Johnny Hsieh, Co-founder of Portal Network, Python Developer',
            photos: null,
            location: 'Taipei',
            time: '2/24',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://www.accupass.com/event/1802080453545695696800',
              },
            ],
            githubs: [],
            files: [],
            videos: [
              {
                title: 'video 1',
                url: 'https://www.facebook.com/mrblock.tw/videos/1807825282569261/',
              },
              {
                title: 'video 2',
                url: 'https://www.facebook.com/mrblock.tw/videos/1808005792551210/',
              },
            ],
          },
        ],
      },
    ],
  },
  watch:{
    isOpenPop: function() {
      this.$nextTick(()=>{
        this.swiper.update();
      });
    }
  },
  computed: {
    photosInModal: function() {
      return this.nowPhotos;
    }
  },
  methods: {
    openContentFn: function (idx) {
      this.mapData[idx].open = !this.mapData[idx].open;
    },
    openModal: function(photoArr) {
      this.isOpenPop = true;
      this.nowPhotos = photoArr;
    },
    closeModal: function() {
      this.isOpenPop = false;
      this.nowPhotos = [];
    },
    scrollToChapter: function(idx) {
      const chapters = document.querySelectorAll('.chapter');
      const targetChapter = chapters[idx];
      const elementTop = GetOffset(targetChapter);
      animateScrollTo(elementTop.top - 100);
    },
  },
  mounted: function() {

      // window.Intercom("boot", {
      //     app_id: "an50zjec"
      // });
      // window.Intercom("update");
      this.swiper = new Swiper('.swiper-container', {
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
})