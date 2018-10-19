<script>
  export default {

  }
</script>

<template>
  <div class="footer">
    <div class="content">
      <form action="https://network.us18.list-manage.com/subscribe/post?u=26478e3fe9ba26cbcfc9d42b9&amp;id=6078efde3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll" class="subscribe_box">
          <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Your Email" required>
          <input type="hidden" value="" name="b_26478e3fe9ba26cbcfc9d42b9_6078efde3c" tabindex="-1">
          <button type="submit" id="mc-embedded-subscribe learn" name="subscribe">Subscribe</button>
        </div>
        <p>Subscribe and get our latest updates.</p>
      </form>
      <div class="footer_map">
        <div class="map_item">
          <h4>News</h4>
          <ul>
            <li><a href="./blog.html" target="_blank">Blog</a></li>
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
    </div>
    <div class="content tool">
      <div class="left">
        <p>© 2018 Portal.Network</p>
        <ul>
          <li><a href="https://www.portal.network/privacy_policy.html" target="_blank">Privacy & Policy</a></li>
          <li><a href="https://www.portal.network/terms_coditions.html" target="_blank">Terms of use</a></li>
        </ul>
      </div>
      <div class="select">
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
$container : 960px;
.footer {
  background-color: #141E6A;
  padding: 56px 0px 66px 0px;
  .content {
    max-width: $container;
    width: 100%;
    margin: 0px auto 210px auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &.tool {
      align-items: center;
      margin: 0px auto;
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
        color: #B8B8B8;
        padding: 20px 128px 20px 20px;
        &::-webkit-input-placeholder {
          color: #B8B8B8;
        }
        &::-moz-placeholder{
          color: #B8B8B8;
        }
      }
      button {
        font-size: 20px;
        font-weight: 600;
        color: #232F88;
        background-color: transparent;
        border: none;
        outline: none;
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 20px;
        margin: auto;
        opacity: 1;
        transition: opacity .5s;
        &:hover {
          opacity: 0.7;
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
  }
  .map_item {
    h4 {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 38px;
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
          opacity: 1;
          transition: opacity .5s;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  .left {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      margin-left: 36px;
      li {
        &+li {
          margin-left: 22px;
        }
        a {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          opacity: 1;
          transition: opacity .5s;
          &:hover {
            opacity: .7;
          }
        }
      }
    }
    p {
      font-size: 12px;
      font-weight: 300;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .select {
    display: flex;
    align-items: center;
    justify-content: center;
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
