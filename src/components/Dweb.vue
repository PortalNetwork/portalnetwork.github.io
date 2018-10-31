<script>
export default {};
</script>

<template>
  <div class="wrap">
    <div class="main">
      <div class="form_box">
        <div class="content">
            <h3>Submit a ÐWEB</h3>
            <p>Fill in this form in order to build a ÐWEB and be on our showcase.</p>
        </div>
        <ul>
          <li class="row">
            <label class="label">Website Name</label>
            <input type="text" class="input" v-model.trim="name" />
          </li>
          <li class="row">
            <label for="email" class="label">Email</label>
            <input type="text" :class="['input', {invalid: emailError}]" v-model.trim="email" />
            <p class="warning" v-if="email.length > 0 && emailError">Incorrect Email.</p>
          </li>
          <li class="row">
            <label for="hash" class="label">IPFS Hash*</label>
            <input type="text" class="input" maxlength="46" v-model.trim="hash"/>
            <p class="warning" v-if="hash.length > 0 && hashError">Incorrect IPFS Hash.</p>
            <p class="warning" v-if="hash.length === 0 && hashRequiredError">Required field.</p>
          </li>
          <li class="row">
            <label for="domain" class="label">Domain Name*</label>
            <input type="text" class="input" v-model.trim="domain"/>
            <p class="warning" v-if="domain.length === 0 && domainRequiredError">Required field.</p>
          </li>
          <li class="row">
            <div class="tag_box">
              <label class="label">Tag*</label>
              <div class="md_tag">
                <input type="radio" id="dapp" class="custom_radio" value="dapp" v-model="tag">
                <label for="dapp"><span></span>ÐApp</label>
              </div>
              <div class="md_tag">
                <input type="radio" id="aboutme" class="custom_radio" value="aboutme" v-model="tag">
                <label for="aboutme"><span></span>About me</label>
              </div>
              <div class="md_tag">
                <input type="radio" id="hackathon" class="custom_radio" value="hackathon" v-model="tag">
                <label for="hackathon"><span></span>Hackathon</label>
              </div>
              <div class="md_tag">
                <input type="radio" id="rise" class="custom_radio" value="rise" v-model="tag">
                <label for="rise"><span></span>Rise</label>
              </div>
              <div class="md_tag">
                <input type="radio" id="otherdweb" class="custom_radio" value="otherdweb" v-model="tag">
                <label for="otherdweb"><span></span>Other ÐWeb</label>
              </div>
              <p class="warning" v-if="tag.length === 0 && tagRequiredError">Required field.</p>
            </div>
          </li>
          <li class="row">
            <label for="description" class="label">Description</label>
            <textarea class="textarea" v-model.trim="description"></textarea>
          </li>
        </ul>
        <button type="button" class="submit" @click="validator">Submit</button>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li><a href="./privacy_policy.html" target="_blank">Privacy & Policy</a></li>
        <li><a href="./terms_coditions.html" target="_blank">Terms of use</a></li>
      </ul>
      <p class="copyRight">© 2018 PORTAL.NETWORK</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container: 960px;
$pad: 980px;
$mob: 720px;
$smob: 340px;
$blue: #00D5BF;
$input_width: 450px;
$border: #d6d6d6;
.header {
  max-width: $container;
  width: 100%;
  margin: 0 auto;
  padding: 38px 20px 0px 20px;
  box-sizing: border-box;
  @extend %clear;
  @media screen and (max-width: $smob) {
    padding: 38px 0px 0px 10px;
  }
}

.logo {
  float: left;
  a {
    display: block;
    text-decoration: none;
    width: 300px;
    height: 38px;
    @media screen and (max-width: $mob) {
      width: 70%;
    }
    img {
      width: 100%;
    }
  }
}

nav {
  float: right;
  @extend %clear;
  @media screen and (max-width: $pad) {
    float: none;
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: $blue;
    z-index: 5;
    transition: right .5s;
  }
}

.menu {
  @media screen and (max-width: $pad) {
    margin-top: 66px;
  }
  li {
    display: inline-block;
    @media screen and (max-width: $pad) {
      display: block;
      width: 100%;
      height: 100%;
    }
    &+li {
      margin-left: 50px;
      @media screen and (max-width: $pad) {
        margin-left: 0px;
      }
    }
    a {
      display: block;
      text-decoration: none;
      font-size: 16px;
      line-height: 38px;
      color: #333333;
      transition: color .5s;
      &:hover {
        color: $blue;
      }
      @media screen and (max-width: $pad) {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        padding: 30px;
        color: $blue;
      }
    }
  }
}

@media screen and (max-width: $pad) {
  .active {
    nav {
      right: 0;
      &:before {
        content: "";
        display: block;
        width: 200px;
        height: 26px;
        background: url('~images/logo/logo_w.png') left top no-repeat;
        background-size: 100% auto;
        margin: 44px 0 0 20px;
      }
    }
    .menu_btn {
      position: fixed;
      right: 20px;
      &:before {
        transform: translateY(4px) rotate(45deg);
        background-color: #fff;
      }
      &:after {
        transform: translateY(-6px) rotate(-45deg);
        background-color: #fff;
      }
      span {
        background-color: transparent;
      }
    }
    .menu {
      li {
        a {
          color: #fff;
        }
      }
    }
  }
}

.main {
  max-width: $container;
  margin: 60px auto;
  padding: 0 20px;
  box-sizing: border-box;
  @media screen and (max-width: $smob) {
    padding: 0px;
  }
}

.form_box {
  width: $input_width;
  margin: 0 auto;
  @media screen and (max-width: $mob) {
    width: 300px;
  }
  .content {
    margin-bottom: 40px;
    h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    p {
      color: #333333;
      line-height: 1.5;
    }
  }
  .row {
    &+.row {
      margin-top: 30px;
    }
  }
  .label {
    display: block;
    font-weight: 600;
    color: #333333;
    height: 20px;
    line-height: 20px;
    margin-bottom: 3px;
  }
  .input {
    width: 100%;
    height: 38px;
    line-height: 38px;
    border: 1px solid $border;
    border-radius: 3px;
    padding: 0px 10px;
    box-sizing: border-box;
    &:focus {
      border: 1px solid $blue;
      outline: none;
    }
    &:disabled {
      color: #bebebe;
      background-color: #f0f0f0;
    }
  }
  .textarea {
    width: 100%;
    height: 280px;
    padding: 10px;
    resize: none;
    border: solid 1px $border;
    &:focus {
      border: 1px solid $blue;
      outline: none;
    }
  }
  .tag_box {
    .label {
      margin-bottom: 10px;
    }
    .md_tag {
      margin-bottom: 10px;
      &+.md_tag {
        margin-top: 20px;
      }
    }
  }
  .custom_radio {
		display: none;
		&+label {
			display: inline-block;
			cursor: pointer;
			span {
				display: inline-block;
				vertical-align: middle;
				margin-right: 5px;
				width: 16px;
				height: 16px;
				border: 1px solid #C6CCCC;
				border-radius: 50%;
				box-sizing: border-box;
				position: relative;
				&:before {
					content: "";
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background-color: transparent;
					position: absolute;
					left: 50%;
					top: 50%;
					bottom: auto;
					right: auto;
					transform: translate(-50%, -50%);
					opacity: 0;
					transition: opacity 0.2s;
				}
			}
		}
		&:checked+label span {
			border-color: $blue;
			&:before {
				background-color: $blue;
				opacity: 1;
			}
		}
		&:disabled+label {
			opacity: 0.5;
			&,span {
				cursor: default;
			}
		}
  }
  .warning {
    color: #FF2525;
    margin-top: 8px;
  }
  .submit {
    width: 200px;
    height: 38px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border: solid 1px $blue;
    background-color: $blue;
    outline: none;
    margin-top: 40px;
    @media screen and (max-width: $mob) {
      width: 100%;
    }
  }
}

.footer {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  ul {
      margin-bottom: 20px;
    li {
      display: inline-block;
      margin: 0px 10px;
      a {
        display: block;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: #222;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .copyright {
    font-size: 14px;
    font-weight: 500;
    color: #222;
  }
}
</style>
