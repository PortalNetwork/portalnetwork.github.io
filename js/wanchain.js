!function(n){function e(e){for(var i,a,s=e[0],l=e[1],d=e[2],c=0,f=[];c<s.length;c++)a=s[c],o[a]&&f.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(p&&p(e);f.length;)f.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var i={},o={13:0,4:0,9:0,10:0,11:0,12:0,14:0},r=[];function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;r.push([3,0]),t()}([function(n,e,t){n.exports=t.p+"images/logo/logo_w.png?bd64545a"},,,function(n,e,t){"use strict";var i=function(n){return n&&n.__esModule?n:{default:n}}(t(8));t(4),new Vue({el:"#blog",data:{isMenuOpen:!1,blogInfo:[],selectidx:0,selectedTag:["all","event","tech","guide"]},computed:{blogList:function(){var n=this.selectedTag[this.selectidx];return this.blogInfo.filter(function(e){return-1!==e.tag.indexOf(n)})}},methods:{toggleMenuFn:function(){this.isMenuOpen=!this.isMenuOpen},currentActive:function(n){this.selectidx=n},getImgUrl:function(n){return"background-image: url('"+this.blogList[n].img+"')"}},mounted:function(){var n=this;"/blog.html"===window.location.pathname?i.default.get("assets/json/blog_list.json").then(function(e){n.blogInfo=e.data;var t=window.location.search.substring(1).split("&").reduce(function(n,e){var t=e.split("=");return n[t[0]]=t[1],n},{});if(t.tag){var i=t.tag,o=n.selectedTag.indexOf(i);n.selectidx=o>=0?o:2}else;}):this.selectidx=null}})},function(n,e,t){var i=t(5);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(i,o);i.locals&&(n.exports=i.locals)},function(n,e,t){var i=t(6);(n.exports=t(1)(!1)).push([n.i,'/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n  text-decoration: none; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It\'s recommended that you don\'t attempt to style these elements.\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don\'t inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nol, ul {\n  list-style: none; }\n\nnav:after, .menu:after, .header .header_content:after, .author:after {\n  content: "";\n  display: block;\n  clear: both; }\n\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n  text-decoration: none; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It\'s recommended that you don\'t attempt to style these elements.\n * Firefox\'s implementation doesn\'t respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome\'s increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren\'t caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don\'t inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nol, ul {\n  list-style: none; }\n\nnav:after, .menu:after, .header .header_content:after, .author:after {\n  content: "";\n  display: block;\n  clear: both; }\n\n.article {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0px 20px 60px 20px;\n  box-sizing: border-box; }\n\n.article_author {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 20px; }\n  .article_author .figure {\n    width: 40px; }\n    .article_author .figure img {\n      width: 100%; }\n  .article_author .author_content {\n    padding-left: 10px;\n    box-sizing: border-box; }\n    .article_author .author_content h5 {\n      font-weight: 400;\n      margin-bottom: 5px; }\n    .article_author .author_content .date {\n      color: #616161; }\n\n.img_full img {\n  width: 100%; }\n\n@media screen and (max-width: 980px) {\n  .img_xl_full img {\n    width: 100%; } }\n\n.figure_text {\n  font-size: 16px;\n  line-height: 1.2;\n  color: #616161;\n  text-align: center;\n  margin-top: 15px; }\n\n.text_link {\n  display: inline;\n  text-decoration: underline;\n  font-size: 21px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #616161; }\n\n.text_star {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 21px;\n  font-weight: 700;\n  line-height: 1.5;\n  color: #07847A; }\n\n.article_title h3 {\n  font-size: 42px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.84);\n  font-weight: 700;\n  text-align: center;\n  margin: 0px auto 40px auto; }\n\n.article_title .figure {\n  margin-bottom: 40px; }\n  .article_title .figure img {\n    max-width: 100%;\n    margin: 0 auto; }\n\n.article_title p {\n  font-size: 21px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #616161;\n  word-break: break-word; }\n\n.article_content {\n  max-width: 700px;\n  margin: 0 auto 40px auto;\n  width: 100%; }\n  .article_content h3 {\n    font-size: 34px;\n    font-weight: 700;\n    line-height: 1.5;\n    color: #616161;\n    margin-bottom: 20px; }\n  .article_content h4 {\n    font-size: 26px;\n    font-weight: 700;\n    line-height: 1.5;\n    color: #616161;\n    margin-bottom: 10px; }\n  .article_content .figure {\n    margin-bottom: 35px; }\n  .article_content p {\n    font-size: 21px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #616161;\n    word-break: break-word;\n    margin-bottom: 30px; }\n    .article_content p strong .text_link {\n      font-weight: 700; }\n\n.article_blockquote {\n  border-left: solid 3px #616161;\n  padding-left: 20px;\n  margin-left: -35px; }\n  @media screen and (max-width: 980px) {\n    .article_blockquote {\n      margin-left: 0px; } }\n  .article_blockquote p {\n    font-size: 21px;\n    font-weight: 400;\n    font-style: italic;\n    line-height: 1.5;\n    color: #616161;\n    word-break: break-word;\n    margin-bottom: 30px; }\n\n.article_box header {\n  font-size: 21px;\n  color: #616161;\n  font-weight: 700;\n  line-height: 1.5; }\n\n.article_box .figure img {\n  max-width: 100%;\n  margin: 0 auto; }\n\n.article_box p {\n  font-size: 21px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #616161;\n  word-break: break-word;\n  margin-bottom: 30px; }\n\n.mg_b10 {\n  margin-bottom: 10px !important; }\n\n.mg_b30 {\n  margin-bottom: 30px !important; }\n\n.mg_t20 {\n  margin-top: 20px !important; }\n\n.text_center {\n  text-align: center !important; }\n\n.text_italic {\n  font-style: italic !important; }\n\na,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\nlabel,\nbutton,\ndiv,\nspan {\n  font-family: \'Avenir\', \'Nunito Sans\', sans-serif, \'Arial\', \'Microsoft JhengHei\';\n  font-size: 14px;\n  line-height: 1;\n  color: #000; }\n\nimg {\n  display: block; }\n\nfigure {\n  margin: 0px; }\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%; }\n  html *,\n  body * {\n    padding: 0px;\n    margin: 0px; }\n\n.logo {\n  display: block;\n  float: left;\n  width: 300px; }\n  @media screen and (max-width: 980px) {\n    .logo {\n      float: none; } }\n  @media screen and (max-width: 720px) {\n    .logo {\n      width: 200px; } }\n  .logo a {\n    display: block; }\n    .logo a img {\n      width: 100%; }\n\n@media screen and (max-width: 980px) {\n  nav {\n    position: fixed;\n    top: 0;\n    right: -100%;\n    width: 100%;\n    height: 100%;\n    background-color: #00A89D;\n    z-index: 5;\n    transition: right .5s; } }\n\n.menu_btn {\n  display: none;\n  position: absolute;\n  top: 51px;\n  right: 20px;\n  z-index: 99;\n  color: #fff;\n  transition: right .5s;\n  cursor: pointer; }\n  .menu_btn:before, .menu_btn:after {\n    content: "";\n    display: block;\n    width: 20px;\n    height: 2px;\n    background-color: #fff;\n    transition: all .5s; }\n  .menu_btn span {\n    display: block;\n    width: 20px;\n    height: 2px;\n    background-color: transparent;\n    margin: 3px 0; }\n  @media screen and (max-width: 980px) {\n    .menu_btn {\n      display: block; } }\n\n.menu {\n  float: right; }\n  @media screen and (max-width: 980px) {\n    .menu {\n      float: none;\n      margin-top: 66px; } }\n  .menu li {\n    display: inline-block; }\n    @media screen and (max-width: 980px) {\n      .menu li {\n        display: block;\n        width: 100%;\n        height: 100%; } }\n    .menu li + li {\n      margin-left: 50px; }\n      @media screen and (max-width: 980px) {\n        .menu li + li {\n          margin-left: 0px; } }\n    .menu li a {\n      display: block;\n      text-decoration: none;\n      font-size: 16px;\n      letter-spacing: 0.08px;\n      line-height: 38px;\n      color: rgba(255, 255, 255, 0.6);\n      transition: color .5s; }\n      .menu li a:hover {\n        color: white; }\n      @media screen and (max-width: 980px) {\n        .menu li a {\n          font-size: 20px;\n          line-height: 30px;\n          text-align: center;\n          padding: 30px;\n          color: #fff; } }\n\n@media screen and (max-width: 980px) {\n  .active nav {\n    right: 0; }\n    .active nav:before {\n      content: "";\n      display: block;\n      width: 200px;\n      height: 26px;\n      background: url('+i(t(0))+") left top no-repeat;\n      background-size: 100% auto;\n      margin: 44px 0 0 20px; }\n  .active .menu_btn {\n    right: 20px; }\n    .active .menu_btn:before {\n      -webkit-transform: translateY(4px) rotate(45deg);\n          -ms-transform: translateY(4px) rotate(45deg);\n              transform: translateY(4px) rotate(45deg);\n      background-color: #fff; }\n    .active .menu_btn:after {\n      -webkit-transform: translateY(-6px) rotate(-45deg);\n          -ms-transform: translateY(-6px) rotate(-45deg);\n              transform: translateY(-6px) rotate(-45deg);\n      background-color: #fff; }\n    .active .menu_btn span {\n      background-color: transparent; } }\n\n.header {\n  width: 100%;\n  background-color: #00A89D;\n  padding: 38px 0px 10px 0px;\n  position: relative; }\n  @media screen and (max-width: 980px) {\n    .header {\n      position: relative; } }\n  .header .header_content {\n    max-width: 1100px;\n    margin: 0px auto;\n    padding: 0 20px;\n    box-sizing: border-box; }\n\n.bar {\n  margin-top: 60px; }\n  @media screen and (max-width: 980px) {\n    .bar {\n      width: 100%; } }\n  .bar ul {\n    margin-left: -15px; }\n    @media screen and (max-width: 720px) {\n      .bar ul {\n        overflow-x: scroll;\n        width: 100%;\n        white-space: nowrap; } }\n    .bar ul li {\n      display: inline-block; }\n      .bar ul li a {\n        display: block;\n        font-size: 16px;\n        color: rgba(255, 255, 255, 0.6);\n        transition: color .5s;\n        text-transform: uppercase;\n        padding: 10px 15px; }\n        .bar ul li a:hover {\n          color: white; }\n        .bar ul li a.active {\n          color: white; }\n\n.main {\n  max-width: 1100px;\n  margin: 0px auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n\n.blog_list {\n  margin: 40px 0px 60px 0px; }\n  .blog_list ul {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; }\n    @media screen and (max-width: 720px) {\n      .blog_list ul {\n        display: block;\n        width: 95%;\n        margin: 0 auto; } }\n    .blog_list ul li {\n      display: inline-block;\n      width: 33%;\n      height: auto;\n      overflow: hidden; }\n      @media screen and (max-width: 980px) {\n        .blog_list ul li {\n          width: 50%; } }\n      @media screen and (max-width: 720px) {\n        .blog_list ul li {\n          width: 100%;\n          margin-bottom: 40px; } }\n\n.blog_box {\n  display: block;\n  width: 300px;\n  margin: 0 auto; }\n  @media screen and (max-width: 980px) {\n    .blog_box {\n      width: 330px; } }\n  @media screen and (max-width: 720px) {\n    .blog_box {\n      width: 100%; } }\n  .blog_box > .figure {\n    width: 100%;\n    height: 180px;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    margin-bottom: 15px;\n    border: solid 1px #bebebe; }\n    @media screen and (max-width: 980px) {\n      .blog_box > .figure {\n        height: 220px; } }\n  .blog_box .info h4 {\n    font-size: 26px;\n    color: #000000;\n    line-height: 1.2;\n    margin-bottom: 15px; }\n  .blog_box .info p {\n    font-size: 16px;\n    color: #7b7b7b;\n    line-height: 1.5;\n    letter-spacing: 0.8px;\n    margin-bottom: 20px; }\n\n.author {\n  margin: 35px auto 40px auto;\n  max-width: 800px;\n  width: 100%; }\n  .author .figure {\n    width: 72px;\n    float: left; }\n    .author .figure img {\n      max-width: 100%;\n      width: 100%;\n      margin: 0 auto; }\n  .author .author_content {\n    float: left;\n    padding-left: 10px;\n    margin-top: 15px; }\n    .author .author_content .title {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      color: #00A89D;\n      margin-bottom: 10px; }\n    .author .author_content p {\n      color: #616161; }\n\n.footer {\n  max-width: 1100px;\n  width: 100%;\n  margin: 0px auto;\n  padding: 20px;\n  box-sizing: border-box;\n  text-align: center; }\n  .footer ul {\n    margin-bottom: 20px; }\n    .footer ul li {\n      display: inline-block;\n      margin: 0px 10px; }\n      .footer ul li a {\n        display: block;\n        font-size: 14px;\n        font-weight: 400;\n        text-decoration: none;\n        color: #222; }\n        .footer ul li a:hover {\n          text-decoration: underline; }\n  .footer .copyright {\n    font-size: 14px;\n    font-weight: 400;\n    color: #222; }\n",""])}]);