<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<template>
  <div class="header">
		<nav v-if="isMenuOpen">
			<div class="left">
				<h1><img src="../images/logo.png" alt=""/></h1>
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
			<div class="right">
				<ul class="menu">
					<li><a href="javascript:;" target="_blank">Blog</a></li>
					<li><a href="javascript:;" target="_blank">Documentation</a></li>
					<li><a href="javascript:;" target="_blank">Forum</a></li>
					<li><a class="article" href="javascript:;" target="_blank">What is BNS</a></li>
					<li><a class="article" href="javascript:;" target="_blank">Solution</a></li>
					<li><a class="article" href="javascript:;" target="_blank">Roadmap</a></li>
				</ul>
				<a href="javascript:;" class="cancel" @click="isMenuOpen = false">
					<img src="../images/cancel.png" alt=""/>
				</a>
			</div>
		</nav>
    <div class="content">
      <h1><img src="../images/logo.png" alt=""/></h1>
      <div>
        <a class="telegram" href="https://t.me/portalnetworkofficial" target="_blank">
          <span></span>
          <p>Join Us On Telegram</p>
        </a>
        <a class="menu_btn" href="javascript:;" @click="toggleMenu">
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$blue: #231abe;
$green: #19F4E4;
.header {
  background-color: #231abe;
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38px 0px 0px 0px;
    position: relative;
    >div {
      display: flex;
      align-items: center;
    }
  }
  h1 {
    width: 300px;
    img {
      width: 100%;
    }
  }
  .telegram {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px 15px;
    background-color: #141e6a;
    transition: all .5s;
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
      color: #fff;
    }
  }
}

.menu_btn {
  display: flex;
  width: 35px;
  margin-left: 25px;
  align-items: flex-end;
  flex-direction: column;
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
    transition: width 0.5s;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transition: width 0.5s;
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 9px 0px;
    background-color: #fff;
    transition: width 0.5s;
  }
}
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #231abe;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.left {
  width: 50%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    width: 300px;
    margin-bottom: 298px;
    img {
      width: 100%;
    }
  }
  .btn {
    width: 100%;
    margin-bottom: 54px;
    a {
      display: inline-block;
      font-size: 21px;
      height: 60px;
      line-height: 60px;
      border-radius: 30px;
      padding: 0px 22px;
      color: #fff;
      background-color: #141e6a;
      transition: all 0.5s;
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
  background-color: #0c1346;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.menu {
  display: inline-block;
  li {
    & + li {
      margin-top: 40px;
    }
    a {
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      transition: color 0.5s;
      &:hover {
        color: #2894ff;
        &.article {
          color: #ff675c;
        }
      }
      &.article {
        color: #00d5bf;
      }
    }
  }
}

.cancel {
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 120px;
  top: 30px;
  z-index: 3;
  cursor: pointer;
  img {
    width: 100%;
  }
}
</style>