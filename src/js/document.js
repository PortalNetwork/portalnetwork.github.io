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
        title: 'Community Contribution',
        icon: 'images/roadmap/documentation.png',
        flags: [
          {
            title: 'Contribute the integration of ENS with IPFS to MetaMask',
            content: 'MetaMask browser extension is a great project that helps millions of users to interact with Ethereum. Portal Network developed a feature that translates the ENS domains (.eth) into IPFS hash.',
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
            title: 'Ethereum Classic Name Service(ECNS) Smart Contract Enhancement',
            content: 'Portal Network has contributed the mutlihash methods to the public resolver contract that enables ECNS to set and view the multihash information. This can extend the ability of ECNS mapping to content resources such as files stores on IPFS, or swarm',
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
            content: 'Propose the standard and specification about how to combine the IPFS cryptographic hash unique fingerprint with ECNS public resolver contract.',
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
            title: 'Ethereum Name Service(ENS) Smart Contract Enhancement',
            content: 'Portal Network has contributed the mutlihash methods to the public resolver contract. That enables ENS can resolve the files, website, information stores on IPFS or swarm.',
            photos: null,
            location: '',
            time: '5/10',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org/EIPS/eip-1062',
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
            content: 'Propose the standard and specification about using multihash methods to combine the IPFS cryptographic hash unique fingerprint with ECNS public resolver contract.',
            photos: null,
            location: '',
            time: '5/7',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://eips.ethereum.org/EIPS/eip-1062',
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
        title: 'Development Progress',
        icon: 'images/roadmap/documentation.png',
        flags: [
          {
            title: 'Portal Network Marketplace',
            content: 'Portal Network Marketplace is a BNS(Blockchain Name Service) domain name trading platform. The user-friendly interface empowers users to easily buy, sell, and bid BNS domain names, while eliminating the need to understand or interact with the complicated smart contract.<br/> 1. Update ENS, ECNS, and WNS wallet features. <br/> 2. Update buy, bid, and sell BNS domains. <br/> 3. Users can view the related information in their dashboard <br/> 4. Search domains and show the related information.',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 70,
            links: [
              {
                title: '',
                url: 'https://beta.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Portal Network Decentralized Web Builder',
            content: '1. User registration flow<br>2. New website template<br>3. UI enhancement',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://web.portal.network',
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Protal Network Chrome Extension',
            content: "Portal Network's Chrome Extension is a tool that helps users to have an easier access to the decentralized network. As most of the browsers in the market (including Chrome) don't support BNS (Blockchain Name Service) at the moment, Portal Network's extension will help filling in the gap.<br/>1. Logo update<br>2. Minor bug fix",
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://extension.portal.network'
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Metamask Enhancement',
            content: 'Integrating the ENS resolver to Metamask that can redirect to decentralized websites.<br/>Integrated for the Metamask 4.9.0 update',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://metamask.io'
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Kaizen CLI',
            content: 'KAIZEN CLI is a tool and list of commands for developers to simplify the process of developing dApps, dWebs. It is the professional UI for cross-chain integration and service management between various technology such as IPFS and swarmDB.<br/>New command list',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://kaizen.portal.network'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Domain Manager',
            content: 'Domain Manager is a tool that enables users to manage / transfer / connect / deploy cross-chain BNS.<br/>Set address',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://manager.portal.network/'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Explorer',
            content: 'BNS (Blockchain Name Service) explorer gives users information about the BNS, including ownership of the BNS, expiry date, DWeb hash, and the bidding detail.<br/>1. Show bidding detail - status, time, bid amount, highest bid<br/>2. Show ownership detail - resolver, owner, address',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://ens.portal.network'
              },
              {
                title: '',
                url: 'https://wns.portal.network'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Cross-chain Infrastructure',
            content: 'Portal Network provides easy-to-use, secure and reliable cross-chains infrastructures accessing multiple public chains information for all decentralized applications and web services, thus, developers can focus on the feature.<br/>Product introduction page',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://developer.portal.network/'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'API',
            content: 'KAIZEN API supports useful APIs for choosing and managing all the services integrated internally. The goal is to provide pain-free migration/adoption process for DWeb/DApp developers.<br/>Product introduction page',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://www.portal.network/api'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'Faucet Pool',
            content: 'Faucet pool is a pool of testnet tokens for developers to use to test smart contract and interact with multiple blockchains.<br/>Added ETH faucet',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://faucet.portal.network'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          },
          {
            title: 'KAIZEN management system',
            content: 'KAIZEN management system is the backbone system that manage and resolve integration and compatibility details among all the desired services.Untilizing this system, developers can choose the environment they wish to have when deploying their products.<br/>Management system mockup release',
            photos: null,
            location: '',
            time: 'Latest Update',
            progress: 100,
            links: [
              {
                title: '',
                url: 'https://deploy.portal.network/'
              }
            ],
            githubs: [
            ],
            files: [],
            videos: [],
          }
        ],
      },
      
      {
        title: 'Education & Partnership',
        icon: 'images/roadmap/education.png',
        flags: [
          {
            title: 'IT Seed',
            content: 'Portal Network and Mr. Block team were very honored to be invited by New Taipei City Computer Associate to speak at IT Seed x Technology training program. IT Seed is an education community where graduate students learn various trends around the world, and to be prepared for the future. Portal Network talked about the basic concept, application, and the future development of blockchain.',
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
            location: ' Taipei, Taiwan',
            time: '5/19',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Education Platform',
            content: 'Christopher Shen, Co-founder of Portal Network, gave a speech at the "Young Entrepreneur" panel during the event. Portal Nework is honored to assist university students for international SUSS event, as it is our goal to cultivate more blockchain developers and to thrive the whole community.',
            photos: [
              'images/roadmap/event/education/1.jpg', 'images/roadmap/event/education/2.jpg', 'images/roadmap/event/education/3.jpg', 'images/roadmap/event/education/4.jpg', 
              'images/roadmap/event/education/5.jpg', 'images/roadmap/event/education/6.jpg', 'images/roadmap/event/education/7.jpg', 'images/roadmap/event/education/8.jpg', 
              'images/roadmap/event/education/9.jpg', 'images/roadmap/event/education/10.jpg', 'images/roadmap/event/education/11.jpg', 'images/roadmap/event/education/12.jpg', 
              'images/roadmap/event/education/13.jpg',
            ],
            location: ' Singapore',
            time: '4/17 - 18',
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
            content: 'Portal Network attended the World Blockchain Conference (WBC) hosted in Singapore. We explored the latest blockchain market by talking with different industry leaders including Ankr Network, Huobi Pro, Baidu Financial and more.',
            photos: [
              'images/roadmap/event/event37.jpg',
            ],
            location: ' Singapore',
            time: '7/17 - 18',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Asia speech',
            content: 'Portal Network released the latest features on WNS (Wanchain Name Service) including our marketplace, iOS wallet and web builder. In one of the keynote speeches, we talked about the potential of WNS for future Wanchain users',
            photos: null,
            location: ' Seoul, Korea',
            time: '7/14',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Hosted Hackathon with teamw.e and SOPT',
            content: 'Portal Network hosted hackathon with Teamw.e and SOPT in Seoul, Korea.The objective of this hackathon was to create a dApp by utilizing the decentralized technologies we provide, including WNS (Wanchain Name Service), Bluzelle (decentralized data storage) and Noia Network (decentralized CDN).<br/>More than 50 people attended this event including participants, developers, mentors and judges. By gathering all of these people, we created connections and shared innovative ideas.',
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
            location: ' Seoul, Korea',
            time: '7/14 - 15',
            progress: 100,
            links: [
              {
                title: "",
                url: "https://hackathon.portal.network"
              }
            ],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'RISE, "The largest tech conference in Asia"',
            content: 'Portal Network attended RISE, one of the largest tech conference in Asia. In this event, we interviewed several leading investors in this field to explore the quality that venture capitals are looking for in a project. We gave an insight on what a blockchain startup should have.',
            photos: [
              'images/roadmap/event/event35.png',
            ],
            location: ' Hong Kong',
            time: '7/8 - 11',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Asia speech',
            content: 'Portal Network released the latest features on WNS (Wanchain Name Service) including our marketplace, iOS wallet and web builder. In one of the keynote speeches, we talked about the potential of WNS for future Wanchain users and demoed the products we have at the event booth.',
            photos: [
              'images/roadmap/event/event34.jpg',
            ],
            location: ' Kuala Lumpur, Malaysia',
            time: '7/7',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Wanchain Roadshow Asia speech',
            content: 'Portal Network released the latest features on WNS (Wanchain Name Service) including our marketplace, iOS wallet and web builder. In one of the keynote speeches, we talked about the potential of WNS for future Wanchain users and demoed the products we have at the event booth.',
            photos: [
              'images/roadmap/event/event33.jpg',
            ],
            location: ' Jakarta, Indonesia',
            time: '7/5',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Blockchain Festival: Vietnam',
            content: 'Blockchain Festival is hosted by Huobi.pro and co-hosted by Kyber Network. The event marked the increasing awareness of blockchain technology in Southeast Asia. Portal Network is honored to be invited by Huobi Pro to this event and create various connections.',
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
            location: ' Ho Chi Minh, Vietnam',
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
            content: 'BBS stands for Blockchain Business Study group. The event is organized by Foundation X and incublock in order to provide a networking opportunity for blockchain and crypto evangelist. Christopher Shen, founder of Portal Network, is honored to be one of the speakers to talk about the necessity of BNS (Blockchain Name Service).',
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
            location: ' Seoul, Korea',
            time: '5/10 - 12',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Bluzelle x Portal.Network Hackathon',
            content: 'Portal Network supported the Bluzelle hackathon hosted in Vancouver. We provdied technical support during the event, which helped participants a better on the decentralized solution Bluzelle provides.',
            photos: null,
            location: ' Vancouver, Canada',
            time: '4/29 - 30',
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
            content: 'Portal Network went to Mr. Block meetup in Malaysia. Phyrex Tsai, founder of Portal Network, talked about the products and services we are building in our team. We met different projects there and realized the potential of blockchain market in Malaysia.',
            photos: null,
            location: ' Kuala Lumpur, Malaysia',
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
            content: 'Portal Network co-hosted Blockchain Universe in Taipei, Taiwan. We invited some of the leading companies including Kenetic Capital, Hashed, Carry Protocol, Content Protocol, TTC and more. More than 200 people attended the event, showing the passion people have towards blockchain.',
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
            location: ' Taipei, Taiwan',
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
            content: 'Portal Network sponsored Beyond Block Tokyo Summit as media partner together with Mr. Block. We are greatful to Beyond Blocks for giving us this opportunity to explore the blockchain ecosystem in Japan. As a blockchain project based in Taiwan, this event showed us different perspective on the global trend happening in 2018.',
            photos: null,
            location: ' Tokyo, Japan',
            time: '4/3 - 5',
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
            content: 'Deconomy is an annual event aiming to bring the brightest leaders, entrepreneurs, enthusiastics, investors, developers, academic and policy groups into one place to discuss the future of distributed economy. Portal Network attended the event to meet many of the industrial leaders like Vitalik Buterin, David Chaum, Ian Grigg and more.',
            photos: null,
            location: ' Seoul, South Korea',
            time: '4/2 - 4',
            progress: 100,
            links: [],
            githubs: [],
            files: [],
            videos: [],
          },
          {
            title: 'Cafe & Crypto',
            content: 'Portal Network attended the crypto meetup hosted in a crypto cafe. Location was a perfect fit as it is one of the first cafes in Taiwan that accepts cryptocurrency as payment. It shows the real usecase of crypto and Portal Network was there to discuss the current crypto and blockchain market in Taiwan.',
            photos: null,
            location: ' Taipei, Taiwan',
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
            content: 'Christopher Shen, founder of Portal Network, joined Token 2049 as one of the sponsored media teams. Portal Network met numerous funds such as Kenetic Capital, Hashed to learn about the opportunity to grow blockchain startups in Asia.',
            photos: null,
            location: ' Hong Kong',
            time: '3/20 - 21',
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
            content: 'Christopher Shen, founder of Portal Network, joined Money 20/20 Asia as the media partner of the event. Interviewing more than 50 projects, Portal Network explored the potential and limitation of cryptocurrency in the payment system as well as the possibility of mass user-adoption in the future.',
            photos: null,
            location: ' Singapore',
            time: '3/12 - 14',
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
            content: "Vincent Tu, developer at Portal Network, presented the vision of creating a domain market that can empower users to easily buy their favorite domain names. More than 400 people gathered for the event and it was great opportunity to grow Portal Network's community.",
            photos: null,
            location: ' Taipei, Taiwan',
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
            content: "Johnny Hsieh, developer at Portal Network, shared his experience as a Phython developer at NEO. Blockchain developers are very limited in the current market, and Johnny's experience provided an insight on the current development environment of blockchain.",
            photos: null,
            location: ' Taipei',
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