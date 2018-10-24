<script>
export default {

}
</script>

<template>
  <div class="hero">
    <div class="content">
      <div class="text_box">
        <h2>Connect, Enhance Existing Blockchain Technologies.</h2>
        <p>Decentralized Domain Name for the New Internet.</p>
      </div>
      <div class="figure">
        <div class="block a"><img src="../images/hero_block.png" alt=""/></div>
        <div class="block b"><img src="../images/hero_block.png" alt=""/></div>
        <div class="block c"><img src="../images/hero_block.png" alt=""/></div>
        <div class="block d"><img src="../images/hero_block.png" alt=""/></div>
        <img src="../images/hero.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container : 960px;
$pad: 940px;
$mob: 720px;
.hero {
  background-color: #231ABE;
  padding: 144px 0px 328px 0px;
  @media screen and (max-width: $pad) {
    padding: 70px 0px 260px 0px;
  }
  @media screen and (max-width: $mob) {
    padding: 20px 0px 90px 0px;
  }
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: $pad) {
      display: block;
      padding: 0px 20px;
    }
  }
  .text_box {
    width: 57.5%;
    @media screen and (max-width: $pad) {
      width: 80%;
      margin: 0px auto 92px auto;
      text-align: center;
    }
    @media screen and (max-width: $mob) {
      width: 100%;
    }
    h2 {
      font-size: 50px;
      font-weight: 800;
      line-height: 72px;
      color: #fff;
      margin-bottom: 20px;
      @media screen and (max-width: $mob) {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
      }
    }
    p {
      font-size: 20px;
      line-height: 50px;
      color: #fff;
      @media screen and (max-width: $mob) {
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
  .figure {
    width: 36.6%;
    position: relative;
    // animation: run 4s infinite alternate;
    @media screen and (max-width: $pad) {
      width: 50%;
      margin: 0px auto;
    }
    @media screen and (max-width: $mob) {
      width: 70%;
    }
    img {
      width: 100%;
    }
    .block {
      width: 60px;
      position: absolute;
      display: none;
      &.a {
        transform: translate3d(-3px, -33px, 0px);
        // animation: block_a 4s infinite alternate;
      }
      &.b {
        transform: translate3d(346px, 135px, 0px);
      }
      &.c {
        transform: translate3d(-75px, 407px, 0px);
      }
      &.d {
        transform: translate3d(212px, 514px, 0px);
      }
    }
  }
}

@keyframes run {
  0% {
    transform: translate3d(0px, 0px, 0px);
	}
	50% {
		transform: translate3d(0px, 6px, 0px);
	}
}

@keyframes block_a {
  0% {
    transform: translate3d(0px, -5px, 0px);
	}
	50% {
		transform: translate3d(0px,10px, 0px);
	}
}
</style>