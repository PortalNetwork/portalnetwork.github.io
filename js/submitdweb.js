!function(n){function e(e){for(var o,a,s=e[0],d=e[1],l=e[2],c=0,m=[];c<s.length;c++)a=s[c],i[a]&&m.push(i[a][0]),i[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(n[o]=d[o]);for(p&&p(e);m.length;)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,s=1;s<t.length;s++){var d=t[s];0!==i[d]&&(o=!1)}o&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var o={},i={3:0},r=[];function a(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=o,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=d;r.push([95,0]),t()}({3:function(n,e,t){n.exports=t.p+"images/logo/logo_w.png?bd64545a"},95:function(n,e,t){"use strict";var o=function(n){return n&&n.__esModule?n:{default:n}}(t(12));t(96),new Vue({el:"#submitdweb",data:{isMenuOpen:!1,name:"",email:"",domain:"",hash:"",tag:"",description:"",emailError:!1,hashError:!1,hashRequiredError:!1,tagRequiredError:!1,domainRequiredError:!1},methods:{toggleMenuFn:function(){this.isMenuOpen=!this.isMenuOpen},gaSeedPageView:function(n){ga("send","event",n,"click"),"true"==getUrl().debug&&console.log("GA PageView -> ",n)},validator:function(){this.hashRequiredError=""===this.hash,this.tagRequiredError=""===this.tag,this.domainRequiredError=""===this.domain,!1===this.hashRequiredError&&!1===this.tagRequiredError&&!1===this.domainRequiredError&&this.onSubmit()},onSubmit:function(){var n={name:this.name,hash:this.hash,description:this.description,domain:this.domain,tag:this.tag,email:this.email};o.default.post("https://ip41ye507l.execute-api.us-east-1.amazonaws.com/dev/v1/proxy/insert-shortcase",n).then(function(n){alert("Successful")}).catch(function(n){n.response&&n.response.status?alert(n.response.data.message):alert("Oops! Something went wrong, please try it again.\nPlease visit our telegram group for further assistance if you need more help.")})}},watch:{email:function(){this.emailError=!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(this.email)},hash:function(){46!==this.hash.length?this.hashError=!0:!1===/^Qm/.test(this.hash)?this.hashError=!0:/0|O|I|l|\/|\+/.test(this.hash)?this.hashError=!0:this.hashError=!1}}})},96:function(n,e,t){var o=t(97);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(4)(o,i);o.locals&&(n.exports=o.locals)},97:function(n,e,t){var o=t(1);(n.exports=t(2)(!1)).push([n.i,'/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n  text-decoration: none; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It\'s recommended that you don\'t attempt to style these elements.\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don\'t inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nol, ul {\n  list-style: none; }\n\n.header:after, nav:after {\n  content: "";\n  display: block;\n  clear: both; }\n\na,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\nlabel,\nbutton,\ndiv,\nspan {\n  font-family: \'Avenir\', \'Nunito Sans\', sans-serif, \'Arial\', \'Microsoft JhengHei\';\n  font-size: 14px;\n  line-height: 1;\n  color: #000; }\n\nimg {\n  display: block; }\n\nfigure {\n  margin: 0px; }\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%; }\n  html *,\n  body * {\n    padding: 0px;\n    margin: 0px; }\n\n#submitdweb {\n  position: relative; }\n\n.menu_btn {\n  display: none;\n  position: absolute;\n  top: 64px;\n  right: 20px;\n  z-index: 99;\n  color: #fff;\n  transition: right .5s;\n  cursor: pointer; }\n  @media screen and (max-width: 720px) {\n    .menu_btn {\n      top: 42px; } }\n  .menu_btn:before, .menu_btn:after {\n    content: "";\n    display: block;\n    width: 20px;\n    height: 2px;\n    background-color: #333333;\n    transition: all .5s; }\n  .menu_btn span {\n    display: block;\n    width: 20px;\n    height: 2px;\n    background-color: transparent;\n    margin: 3px 0; }\n  @media screen and (max-width: 980px) {\n    .menu_btn {\n      display: inline-block; } }\n\n.header {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 38px 20px 0px 20px; }\n  @media screen and (max-width: 340px) {\n    .header {\n      padding: 38px 0px 0px 10px; } }\n\n.logo {\n  float: left; }\n  .logo a {\n    display: block;\n    text-decoration: none;\n    width: 300px;\n    height: 38px; }\n    @media screen and (max-width: 720px) {\n      .logo a {\n        width: 70%; } }\n    .logo a img {\n      width: 100%; }\n\nnav {\n  float: right; }\n  @media screen and (max-width: 980px) {\n    nav {\n      float: none;\n      position: fixed;\n      top: 0;\n      right: -100%;\n      width: 100%;\n      height: 100%;\n      background-color: #00D5BF;\n      z-index: 5;\n      transition: right .5s; } }\n\n@media screen and (max-width: 980px) {\n  .menu {\n    margin-top: 66px; } }\n\n.menu li {\n  display: inline-block; }\n  @media screen and (max-width: 980px) {\n    .menu li {\n      display: block;\n      width: 100%;\n      height: 100%; } }\n  .menu li + li {\n    margin-left: 50px; }\n    @media screen and (max-width: 980px) {\n      .menu li + li {\n        margin-left: 0px; } }\n  .menu li a {\n    display: block;\n    text-decoration: none;\n    font-size: 16px;\n    line-height: 38px;\n    color: #333333;\n    transition: color .5s; }\n    .menu li a:hover {\n      color: #00D5BF; }\n    @media screen and (max-width: 980px) {\n      .menu li a {\n        font-size: 20px;\n        line-height: 30px;\n        text-align: center;\n        padding: 30px;\n        color: #00D5BF; } }\n\n@media screen and (max-width: 980px) {\n  .active nav {\n    right: 0; }\n    .active nav:before {\n      content: "";\n      display: block;\n      width: 200px;\n      height: 26px;\n      background: url('+o(t(3))+') left top no-repeat;\n      background-size: 100% auto;\n      margin: 44px 0 0 20px; }\n  .active .menu_btn {\n    position: fixed;\n    right: 20px; }\n    .active .menu_btn:before {\n      -webkit-transform: translateY(4px) rotate(45deg);\n          -ms-transform: translateY(4px) rotate(45deg);\n              transform: translateY(4px) rotate(45deg);\n      background-color: #fff; }\n    .active .menu_btn:after {\n      -webkit-transform: translateY(-6px) rotate(-45deg);\n          -ms-transform: translateY(-6px) rotate(-45deg);\n              transform: translateY(-6px) rotate(-45deg);\n      background-color: #fff; }\n    .active .menu_btn span {\n      background-color: transparent; }\n  .active .menu li a {\n    color: #fff; } }\n\n.main {\n  max-width: 960px;\n  margin: 60px auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n  @media screen and (max-width: 340px) {\n    .main {\n      padding: 0px; } }\n\n.form_box {\n  width: 450px;\n  margin: 0 auto; }\n  @media screen and (max-width: 720px) {\n    .form_box {\n      width: 300px; } }\n  .form_box .content {\n    margin-bottom: 40px; }\n    .form_box .content h3 {\n      font-size: 22px;\n      margin-bottom: 10px; }\n    .form_box .content p {\n      color: #333333;\n      line-height: 1.5; }\n  .form_box .row + .row {\n    margin-top: 30px; }\n  .form_box .label {\n    display: block;\n    font-weight: 600;\n    color: #333333;\n    height: 20px;\n    line-height: 20px;\n    margin-bottom: 3px; }\n  .form_box .input {\n    width: 100%;\n    height: 38px;\n    line-height: 38px;\n    border: 1px solid #d6d6d6;\n    border-radius: 3px;\n    padding: 0px 10px;\n    box-sizing: border-box; }\n    .form_box .input:focus {\n      border: 1px solid #00D5BF;\n      outline: none; }\n    .form_box .input:disabled {\n      color: #bebebe;\n      background-color: #f0f0f0; }\n  .form_box .textarea {\n    width: 100%;\n    height: 280px;\n    padding: 10px;\n    resize: none;\n    border: solid 1px #d6d6d6; }\n    .form_box .textarea:focus {\n      border: 1px solid #00D5BF;\n      outline: none; }\n  .form_box .tag_box .label {\n    margin-bottom: 10px; }\n  .form_box .tag_box .md_tag {\n    margin-bottom: 10px; }\n    .form_box .tag_box .md_tag + .md_tag {\n      margin-top: 20px; }\n  .form_box .custom_radio {\n    display: none; }\n    .form_box .custom_radio + label {\n      display: inline-block;\n      cursor: pointer; }\n      .form_box .custom_radio + label span {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right: 5px;\n        width: 16px;\n        height: 16px;\n        border: 1px solid #C6CCCC;\n        border-radius: 50%;\n        box-sizing: border-box;\n        position: relative; }\n        .form_box .custom_radio + label span:before {\n          content: "";\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: transparent;\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          bottom: auto;\n          right: auto;\n          -webkit-transform: translate(-50%, -50%);\n              -ms-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%);\n          opacity: 0;\n          transition: opacity 0.2s; }\n    .form_box .custom_radio:checked + label span {\n      border-color: #00D5BF; }\n      .form_box .custom_radio:checked + label span:before {\n        background-color: #00D5BF;\n        opacity: 1; }\n    .form_box .custom_radio:disabled + label {\n      opacity: 0.5; }\n      .form_box .custom_radio:disabled + label, .form_box .custom_radio:disabled + label span {\n        cursor: default; }\n  .form_box .warning {\n    color: #FF2525;\n    margin-top: 8px; }\n  .form_box .submit {\n    width: 200px;\n    height: 38px;\n    line-height: 38px;\n    border-radius: 19px;\n    font-size: 16px;\n    text-align: center;\n    color: #fff;\n    border: solid 1px #00D5BF;\n    background-color: #00D5BF;\n    outline: none;\n    margin-top: 40px; }\n    @media screen and (max-width: 720px) {\n      .form_box .submit {\n        width: 100%; } }\n\n.footer {\n  padding: 50px 0px 30px 0px;\n  box-sizing: border-box; }\n  .footer .copyRight {\n    text-align: center; }\n',""])}});