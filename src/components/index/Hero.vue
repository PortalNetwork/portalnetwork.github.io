<script>
export default {
  created(){
    AOS.init();
  }
};
</script>

<template>
  <div class="hero">
    <div class="content">
      <div class="text_box" data-aos="fade-down">
        <h2>Connect, Enhance Existing Blockchain Technologies.</h2>
        <p>Decentralized Domain Name for the New Internet.</p>
      </div>
      <div class="figure">
        <div class="block a"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block b"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block c"><img src="../../images/hero_block.png" alt=""/></div>
        <div class="block d"><img src="../../images/hero_block.png" alt=""/></div>
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
    &.a {
      transform: translate3d(0px, -80px, 0px);
      animation: block_a 7s infinite alternate;
      @media screen and (max-width: $mob) {
        transform: translate3d(0px, -33px, 0px);
      }
    }
    &.b {
      transform: translate3d(346px, 135px, 0px);
      animation: block_b 4s infinite alternate;
      @media screen and (max-width: $mob) {
        transform: translate3d(206px, 38px, 0px);
      }
    }
    &.c {
      transform: translate3d(-75px, 407px, 0px);
      animation: block_c 4s infinite alternate;
      @media screen and (max-width: $mob) {
        transform: translate3d(-49px, 275px, 0px);
      }
    }
    &.d {
      transform: translate3d(212px, 514px, 0px);
      animation: block_d 4s infinite alternate;
      @media screen and (max-width: $mob) {
        transform: translate3d(135px, 353px, 0px);
      }
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

@keyframes block_a {
  0% {
    transform: translate3d(0px, -80px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(0px, -33px, 0px);
    }   
	}
	100% {
    transform: translate3d(0px,-60px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(0px, -53px, 0px);
    } 
  }
  
}

@keyframes block_b {
  0% {
    transform: translate3d(346px, 135px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(206px, 38px, 0px);
    }
	}
	100% {
    transform: translate3d(346px, 115px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(206px, 18px, 0px);
    }
	}
}

@keyframes block_c {
  0% {
    transform: translate3d(-75px, 407px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(-49px, 275px, 0px);
    }
	}
	100% {
    transform: translate3d(-75px, 437px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(-49px, 295px, 0px);
    }
	}
}

@keyframes block_d {
  0% {
    transform: translate3d(212px, 514px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(135px, 353px, 0px);
    }
	}
	100% {
    transform: translate3d(212px, 494px, 0px);
    @media screen and (max-width: $mob) {
      transform: translate3d(135px, 383px, 0px);
    }
	}
}

@media screen and (max-width: $mob) {
  @keyframes block_a {
    0% {
      transform: translate3d(0px, -33px, 0px);   
    }
    100% {
      transform: translate3d(0px, -53px, 0px); 
    }
  }
  @keyframes block_b {
    0% {
      transform: translate3d(206px, 38px, 0px);  
    }
    100% {
      transform: translate3d(206px, 18px, 0px); 
    }
  }
  @keyframes block_c {
    0% {
      transform: translate3d(-49px, 275px, 0px);  
    }
    100% {
      transform: translate3d(-49px, 295px, 0px); 
    }
  }
  @keyframes block_d {
    0% {
      transform: translate3d(135px, 353px, 0px);  
    }
    100% {
      transform: translate3d(135px, 383px, 0px); 
    }
  }
}
</style>