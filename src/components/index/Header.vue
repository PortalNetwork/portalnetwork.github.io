<script>
import animateScrollTo from 'animated-scroll-to';
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen){
        document.querySelector("body").classList.add("active");
      }else {
        document.querySelector("body").classList.remove("active");
      }
    },
    scrollTo(componentName){
      this.isMenuOpen = false;
      document.querySelector("body").classList.remove("active");
      animateScrollTo(document.querySelector(`#${componentName}`));
    },
    removeClass(){
      document.querySelector("body").classList.remove("active");
    }
  }
};
</script>

<template>
  <div class="header">
		<nav v-if="isMenuOpen">
			<div class="right">
				<ul class="menu">
					<li @click="removeClass"><router-link to="https://docs.portal.network/">Documentation</router-link></li>
					<li><a class="article" href="javascript:;" @click="scrollTo('bns')">What is BNS</a></li>
					<li><a class="article" href="javascript:;" @click="scrollTo('solution')">Solution</a></li>
					<li><a class="article" href="http://bit.ly/2s55q4z" target="_blank">Roadmap</a></li>
				</ul>
			</div>
      <div class="left">
				<h1><img src="../../images/logo.png" alt=""/></h1>
				<div>
					<div class="btn">
						<a href="https://t.me/portalnetworkofficial" target="_blank">Join Us On Telegram</a>
					</div>
					<ul class="social_media">
						<li><a class="twitter" href="https://twitter.com/itisportal" target="_blank"></a></li>
						<li><a class="github" href="https://github.com/portalnetwork" target="_blank"></a></li>
						<li><a class="medium" href="https://medium.com/portalnetworkofficial" target="_blank"></a></li>
						<li><a class="reddit" href="https://www.reddit.com/r/portalnetwork" target="_blank"></a></li>
						<li><a class="fb" href="https://www.facebook.com/portalnetworkofficial" target="_blank"></a></li>
					</ul>
				</div>
			</div>
		</nav>
    <div class="content">
      <h1><img src="../../images/logo.png" alt=""/></h1>
      <div>
        <a class="telegram" href="https://t.me/portalnetworkofficial" target="_blank">
          <span></span>
          <p>Join Us On Telegram</p>
        </a>
        <a :class="{menu_btn: true,active: isMenuOpen}" href="javascript:;" @click="toggleMenu">
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

.header {
  background-color: $blue;
  padding: 40px 0px 84px 0px;
  @media screen and (max-width: $mob) {
    padding: 32px 0px 25px 0px;
  }
}
.content {
  max-width: 1100px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: $pad) {
    padding: 0px 20px;
  }
  @media screen and (max-width: $mob) {
    display: block;
  }
  >div {
    display: flex;
    align-items: center;
    @media screen and (max-width: $mob) {
      justify-content: center;
    }
  }
}
h1 {
  width: 300px;
  @media screen and (max-width: $mob) {
    width: 224px;
    margin: 0px auto 40px auto;
  }
  img {
    width: 100%;
  }
}
.telegram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  padding: 0px 15px;
  background-color: $blue_d1;
  transition: all .5s;
  @media screen and (max-width: $mob) {
    width: 204px;
    height: 44px;
    line-height: 44px;
    padding: 0px 23px;
  }
  &:hover {
    background-color: $green;
    span {
      background-image: url('~images/telegram_h.png');
    }
    p {
      color: $blue;
    }
  }
  span {
    display: block;
    width: 18px;
    height: 18px;
    background-image: url('~images/telegram.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    margin-right: 8px;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
}
.menu_btn {
  display: flex;
  width: 35px;
  margin-left: 28px;
  align-items: flex-end;
  flex-direction: column;
  z-index: 3;
  @media screen and (max-width: $mob) {
    position: fixed;
    top: 35px;
    right: 20px;
    width: 25px;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
  &:before {
    content: "";
    display: block;
    width: 60%;
    height: 1px;
    background-color: #fff;
    transform: translateY(0px) rotate(0deg);
    transition: all 0.5s;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: translateY(0px) rotate(0deg);
    transition: all 0.5s;
  }
  &.active {
    &:hover {
      &:before {
        width: 100%;
      }
    }
    &:before {
      width: 100%;
      transform: translateY(13px) rotate(45deg);
      @media screen and (max-width: $mob) {
        transform: translateY(10px) rotate(45deg);
      }
    }
    &:after {
      transform: translateY(-6px) rotate(-45deg);
    }
    span {
      background-color: transparent;
    }
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 9px 0px;
    background-color: #fff;
    transition: width 0.5s;
    @media screen and (max-width: $mob) {
      margin: 7px 0px;
    }
  }
}
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: $blue;
  @media screen and (max-width: $mob) {
    display: block;
    background-color: $blue_d2;
    padding: 27px 45px 27px 45px;
  }
  &:before{
    content: "";
    display: none;
    width: 224px;
    height: 28px;
    background: url('~images/logo.png') center center no-repeat;
    background-size: 100% auto;
    @media screen and (max-width: $mob) {
      display: block;
      margin-bottom: 80px;
    }
  }
}
.left {
  width: 50%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $blue;
  order: -1;
  @media screen and (max-width: $mob) {
    width: 100%;
    min-height: auto;
    order: 1;
    background-color: $blue_d2;
  }
  h1 {
    width: 300px;
    margin-bottom: 298px;
    @media screen and (max-width: $mob) {
      display: none;
    }
    img {
      width: 100%;
    }
  }
  .btn {
    width: 100%;
    margin-bottom: 54px;
    @media screen and (max-width: $mob) {
      margin-bottom: 45px;
    }
    a {
      display: inline-block;
      font-size: 21px;
      font-weight: 600;
      height: 60px;
      line-height: 60px;
      border-radius: 30px;
      padding: 0px 22px;
      color: #fff;
      background-color: $blue_d1;
      transition: all 0.5s;
      @media screen and (max-width: $mob) {
        background-color: $green;
        color: $blue;
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        border-radius: 22px;
      }
      &:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-right: 18px;
        width: 28px;
        height: 28px;
        background-image: url("~images/telegram.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% auto;
        transition: background-image 0.5s;
        @media screen and (max-width: $mob) {
          background-image: url("~images/telegram_h.png");
        }
      }
      &:hover {
        background-color: #fff;
        color: $blue;
        &:before {
          background-image: url("~images/telegram_h.png");
        }
      }
    }
  }
  .social_media {
    display: flex;
    justify-content: center;
    li {
      & + li {
        margin-left: 10px;
      }
      a {
        display: block;
        width: 40px;
        height: 40px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% auto;
        transition: background-image 0.5s;
        &:hover {
          &.twitter {
            background-image: url("~images/m_t_h.png");
          }
          &.github {
            background-image: url("~images/m_g_h.png");
          }
          &.medium {
            background-image: url("~images/m_m_h.png");
          }
          &.reddit {
            background-image: url("~images/m_r_h.png");
          }
          &.fb {
            background-image: url("~images/m_f_h.png");
          }
        }
        &.twitter {
          background-image: url("~images/m_t.png");
        }
        &.github {
          background-image: url("~images/m_g.png");
        }
        &.medium {
          background-image: url("~images/m_m.png");
        }
        &.reddit {
          background-image: url("~images/m_r.png");
        }
        &.fb {
          background-image: url("~images/m_f.png");
        }
      }
    }
  }
}
.right {
  width: 50%;
  background-color: $blue_d2;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: $mob) {
    width: 100%;
    min-height: auto;
  }
}
.menu {
  display: inline-block;
  @media screen and (max-width: $mob) {
    margin-bottom: 76px;
  }
  li {
    & + li {
      margin-top: 40px;
      @media screen and (max-width: $mob) {
        margin-top: 28px;
      }
    }
    a {
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      transition: color 0.5s;
      @media screen and (max-width: $mob) {
        font-size: 20px;
      }
      &:hover {
        color: #2894ff;
        &.article {
          color: $red;
        }
      }
      &.article {
        color: $green;
      }
    }
  }
}
</style>