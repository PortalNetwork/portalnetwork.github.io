<script>
  import Media from './Media.vue';
  export default {
    components : {
      Media
    }
  }
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="footer_map">
        <div class="map_item">
          <h4>News</h4>
          <ul>
            <!-- <li><a href="./blog.html" target="_blank">Blog</a></li> -->
            <li><a href="https://hackathon.portal.network/" target="_blank">Event</a></li>
            <li><a href="https://projects.invisionapp.com/boards/K53P6SNW843/" target="_blank">Press</a></li>
          </ul>
        </div>
        <div class="map_item">
          <h4>Help Center</h4>
          <ul>
            <li><a href="javascript:;">FAQ</a></li>
            <li><a href="mailto:support@portal.network" target="_blank">Contact us</a></li>
          </ul>
        </div>
        <div class="map_item">
          <h4>Solution</h4>
          <ul>
            <li><a href="https://mumei.portal.network/" target="_blank">MUMEI</a></li>
            <li><a href="https://kaizen.portal.network/" target="_blank">KAIZEN</a></li>
          </ul>
        </div>
      </div>
      <form action="https://network.us18.list-manage.com/subscribe/post?u=26478e3fe9ba26cbcfc9d42b9&amp;id=6078efde3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll" class="subscribe_box">
          <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Your Email" required>
          <input type="hidden" value="" name="b_26478e3fe9ba26cbcfc9d42b9_6078efde3c" tabindex="-1">
          <button type="submit" id="mc-embedded-subscribe learn" name="subscribe">Subscribe</button>
        </div>
        <p>Subscribe and get our latest updates.</p>
      </form>
    </div>
    <Media></Media>
    <div class="content tool">
      <div class="left">
        <ul>
          <li><router-link to="/privacy">Privacy & Policy</router-link></li>
          <li><router-link to="/terms">Terms of use</router-link></li>
        </ul>
        <p>© 2018 Portal.Network</p>
      </div>
      <div class="select" v-if="false">
        <select>
          <option value="en">English</option>
          <option value="tw">中文</option>
          <option value="kr">한국어</option>
        </select>
        <i></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";
.footer {
  background-color: $blue_d1;
  padding: 56px 0px 66px 0px;
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto;
    padding: 0px 0px 210px 0px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media screen and (max-width: $pad) {
      display: block;
      padding: 0px 45px 50px 45px;
      text-align: center;
    }
    &.tool {
      align-items: center;
      padding: 0px;
      @media screen and (max-width: $pad) {
        padding: 0px 45px;
      }
    }
  }
  form {
    .subscribe_box {
      display: inline-block;
      position: relative;
      input {
        background-color: #fff;
        border: none;
        outline: none;
        width: 410px;
        height: 58px;
        font-size: 16px;
        font-weight: 600;
        line-height: 58px;
        border-radius: 5px;
        color: #B8B8B8;
        padding: 20px 128px 20px 20px;
        &::-webkit-input-placeholder {
          color: #B8B8B8;
        }
        &::-moz-placeholder{
          color: #B8B8B8;
        }
        @media screen and (max-width: $mob) {
          height: 50px;
          line-height: 50px;
          width: 100%;
        }
      }
      button {
        font-size: 20px;
        font-weight: 600;
        color: #232f88;
        background-color: transparent;
        border: none;
        outline: none;
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 20px;
        margin: auto;
        transition: color .5s;
        @media screen and (max-width: $mob) {
          font-size: 16px;
        }
        &:hover {
          color: #ff675c;
        }
      }
    }
    p {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      margin-top: 5px;
    }
  }
  .footer_map {
    width: 37.9%;
    display: flex;
    justify-content: space-between;
    order: 1;
    @media screen and (max-width: $pad) {
      width: 80%;
      margin: 0px auto;
      padding-bottom: 70px;
    }
    @media screen and (max-width: $mob) {
      width: 100%;
    }
  }
  .map_item {
    @media screen and (max-width: $pad) {
      text-align: left;
    }
    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 38px;
      @media screen and (max-width: $pad) {
        margin-bottom: 28px;
      }
      @media screen and (max-width: $mob) {
        font-size: 16px;
      }
    }
    ul {
      li {
        &+li {
          margin-top: 16px;
        }
        a {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          transition: color .5s;
          @media screen and (max-width: $pad) {
            font-weight: 300;
          }
          &:hover {
            color: #ff675c;
          }
        }
      }
    }
  }
  .left {
    display: flex;
    align-items: center;
    @media screen and (max-width: $pad) {
      display: block;
    }
    ul {
      display: flex;
      justify-content: center;
      margin-left: 36px;
      @media screen and (max-width: $pad) {
        margin-left: 0px;
        margin-bottom: 12px;
      }
      @media screen and (max-width: $mob) {
        justify-content: flex-start;
      }
      li {
        &+li {
          margin-left: 22px;
          @media screen and (max-width: $pad) {
            border-left: solid 1px #fff;
            margin-left: 12px;
            padding-left: 12px;
          }
        }
        a {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          transition: color .5s;
          &:hover {
            color: #ff675c;
          }
        }
      }
    }
    p {
      font-size: 12px;
      font-weight: 300;
      color: #fff;
      text-transform: uppercase;
      order: -1;
      @media screen and (max-width: $pad) {
        order: 1;
        margin-bottom: 28px;
      }
      @media screen and (max-width: $mob) {
        text-align: left;
      }
    }
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: $mob) {
      justify-content: flex-start;
    }
    select {
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      color: #fff;
      background-color: transparent;
      border: none;
      outline: none;
      -webkit-appearance: none;
      cursor: pointer;
      margin-right: 10px;
    }
    i {
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
</style>
