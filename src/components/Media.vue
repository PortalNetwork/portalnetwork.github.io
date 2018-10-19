<script>
  export default {
    
  }
</script>

<template>
  <ul class="social_media">
    <li><a class="twitter" href="https://twitter.com/itisportal" target="_blank"></a></li>
    <li><a class="github" href="https://github.com/portalnetwork" target="_blank"></a></li>
    <li><a class="medium" href="https://medium.com/portalnetworkofficial" target="_blank"></a></li>
    <li><a class="reddit" href="https://www.reddit.com/r/portalnetwork" target="_blank"></a></li>
    <li><a class="fb" href="https://www.facebook.com/portalnetworkofficial" target="_blank"></a></li>
  </ul>
</template>

<style lang="scss" scoped>
.social_media {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -60px;
  bottom: -100px;
  li {
    &+li {
      margin-top: 10px;
    }
    a {
      display: block;
      width: 30px;
      height: 30px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      transition: background-image .5s;
      &:hover {
        &.twitter {
          background-image: url('~images/m_t_h.png');
        }
        &.github {
          background-image: url('~images/m_g_h.png');
        }
        &.medium {
          background-image: url('~images/m_m_h.png');
        }
        &.reddit {
          background-image: url('~images/m_r_h.png');
        }
        &.fb {
          background-image: url('~images/m_f_h.png');
        }
      }
      &.twitter {
        background-image: url('~images/m_t.png');
      }
      &.github {
        background-image: url('~images/m_g.png');
      }
      &.medium {
        background-image: url('~images/m_m.png');
      }
      &.reddit {
        background-image: url('~images/m_r.png');
      }
      &.fb {
        background-image: url('~images/m_f.png');
      }
    }
  }
}
</style>
