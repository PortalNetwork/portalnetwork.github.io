<script>
  export default {

  }
</script>

<template>
  <div class="partnership">
    <h3>ECOSYSTEM & PARTNERSHIP</h3>
    <ul class="list">
      <li>
        <a href="https://www.ethereum.org" target="_blank">
          <img src="../images/eth.png" alt=""/>
          <p>Ethereum</p>
        </a>
      </li>
      <li>
        <a href="https://ethereumclassic.org" target="_blank">
          <img src="../images/etc.png" alt=""/>
          <p>Ethereum Classic</p>
        </a>
      </li>
      <li>
        <a href="https://wanchain.org" target="_blank">
          <img src="../images/wan.png" alt=""/>
          <p>Wanchain</p>
        </a>
      </li>
      <li>
        <a href="https://qtum.org/en" target="_blank">
          <img src="../images/qtum.png" alt=""/>
          <p>QTUM</p>
        </a>
      </li>
      <li>
        <a href="https://icon.foundation/?lang=en" target="_blank">
          <img src="../images/icon.png" alt=""/>
          <p>ICON</p>
        </a>
      </li>
      <li>
        <a href="https://bluzelle.com" target="_blank">
          <img src="../images/blu.png" alt=""/>
          <p>Bluzelle</p>
        </a>
      </li>
      <li>
        <a href="https://www.coingecko.com/en" target="_blank">
          <img src="../images/coingecko.png" alt=""/>
          <p>CoinGecko</p>
        </a>
      </li>
      <li>
        <a href="https://kenetic.capital" target="_blank">
          <img src="../images/kenetic.png" alt=""/>
          <p>Kenetic</p>
        </a>
      </li>
      <li>
        <a href="https://enigma.co" target="_blank">
          <img src="../images/enigma.png" alt=""/>
          <p>Enigma</p>
        </a>
      </li>
      <li>
        <a href="https://nem.io" target="_blank">
          <img src="../images/nem.png" alt=""/>
          <p>NEM</p>
        </a>
      </li>
      <li>
        <a href="https://nkn.org" target="_blank">
          <img src="../images/nkn.png" alt=""/>
          <p>NKN</p>
        </a>
      </li>
      <li>
        <a href="https://tomochain.com" target="_blank">
          <img src="../images/tomochain.png" alt=""/>
          <p>TomoChain</p>
        </a>
      </li>
      <li>
        <a href="https://quarkchain.io" target="_blank">
          <img src="../images/quarkchain.png" alt=""/>
          <p>QuarkChain</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$container : 960px;
$pad: 940px;
$mob: 720px;
.partnership {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  padding: 132px 0px 60px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: $pad) {
    display: block;
    padding: 50px 45px 60px 45px;
  }
  h3 {
    width: 24.3%;
    font-size: 30px;
    line-height: 42px;
    font-weight: 800;
    color: #979797;
    @media screen and (max-width: $pad) {
      width: 100%;
      text-align: center;
      margin-bottom: 50px;
    }
  }
  .list {
    width: 66.6%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: $pad) {
      width: 90%;
      margin: 0px auto;
    }
    @media screen and (max-width: $mob) {
      width: 100%;
    }
    li {
      width: 25%;
      min-height: 113px;
      text-align: center;
      margin-bottom: 45px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      @media screen and (max-width: $mob) {
        width: 33.3%;
      }
    }
    a {
      display: inline-block;
      &:hover {
        img {
          transform: scale(1);
        }
      }
      img {
        width: 70px;
        margin: 0px auto 20px auto;
        transform: scale(0.97);
        transition: transform .5s;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        color: #979797;
        white-space: nowrap;
        @media screen and (max-width: $mob) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
