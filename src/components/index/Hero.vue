<script>
export default {
  methods: {
    animation (){
      // TweenLite.to('.block_a', this.range(8,12), {x:this.range(-80, 80), y:this.range(41, -119), ease:Power1.easeOut});
      // TweenLite.to('.block_b', this.range(8,12), {x:this.range(266, 426), y:this.range(55, 215), ease:Power1.easeOut});
      // TweenLite.to('.block_c', this.range(8,12), {x:this.range(5, -155), y:this.range(327, 487), ease:Power1.easeOut});
      // TweenLite.to('.block_d', this.range(8,12), {x:this.range(132, 292), y:this.range(434, 594), ease:Power1.easeOut});
    },
    range (min,max){
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
  },
  mounted(){
    setInterval(()=>{this.animation()}, 500);
  }
};
</script>

<template>
  <div class="hero">
    <div class="content">
      <div class="text_box">
        <h2>
          <p data-aos="fade-right">Connect, Enhance</p>
          <p data-aos="fade-right" data-aos-duration="500">Existing Blockchain</p>
          <p data-aos="fade-right" data-aos-duration="800">Technologies.</p>
        </h2>
        <p data-aos="fade-right" data-aos-duration="500">Decentralized Domain Name for the New Internet.</p>
      </div>
      <div class="figure">
        <div class="block block_a"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block block_b"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block block_c"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block block_d"><img src="../../images/hero_block.png" alt=""/></div>
        <img src="../../images/hero.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

.hero {
  background-color: $blue;
  padding-bottom: 328px;
  @media screen and (max-width: $pad) {
    padding-bottom: 260px;
  }
  @media screen and (max-width: $mob) {
    padding-bottom: 90px;
  }
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
  overflow: hidden;
  @media screen and (max-width: $pad) {
    width: 80%;
    margin: 0px auto 92px auto;
    text-align: center;
  }
  @media screen and (max-width: $mob) {
    width: 100%;
  }
  h2 {
    margin-bottom: 20px;
    p {
      font-size: 50px;
      font-weight: 800;
      line-height: 72px;
      color: #fff;
      @media screen and (max-width: $mob) {
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
      }
    }
  }
  >p {
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    @media screen and (max-width: $mob) {
      font-size: 16px;
      line-height: 1.5;
    }
  }
}
@keyframes run {
  0% {
    transform: translate3d(0px, -10px, 0px);
	}
	100% {
		transform: translate3d(0px, 6px, 0px);
	}
}
.figure {
  width: 36.6%;
  position: relative;
  @media screen and (max-width: $pad) {
    width: 50%;
    margin: 0px auto;
  }
  @media screen and (max-width: $mob) {
    width: 70%;
  }
  img {
    width: 100%;
    animation: run 4s infinite alternate;
  }
  .block {
    width: 60px;
    position: absolute;
    @media screen and (max-width: $mob) {
      width: 40px;
    }
    &.block_a {
      transform: translate3d(0px, -39px, 0px);
    }
    &.block_b {
      transform: translate3d(346px, 135px, 0px);
      @media screen and (max-width: $mob) {
        transform: translate3d(204px, 30px, 0px);
      }
    }
    &.block_c {
      transform: translate3d(-75px, 407px, 0px);
      @media screen and (max-width: $mob) {
        transform: translate3d(-51px, 269px, 0px);
      }
    }
    &.block_d {
      transform: translate3d(212px, 514px, 0px);
      @media screen and (max-width: $mob) {
        transform: translate3d(143px, 353px, 0px);
      }
    }
  }
}
</style>