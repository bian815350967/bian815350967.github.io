webpackJsonp([4],{QrVH:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{userId:"",sendBtnText:"获取验证码",validate_token:"",captcha_hash:"",captcha_image:"",imgCode:"",needImgCode:!1,isSend:!1,isErrshow:!1,number:"",code:"",timer:null,downTime:30,errImgCode:"",errMsg:""}},created:function(){this.getUser()},methods:{login:function(){var t=this;return""===this.number?(this.errMsg="请填写手机号",this.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3),!1):/^1[34578]\d{9}$/.test(this.number)?"获取验证码"===this.sendBtnText?(this.errMsg="请先获取验证码",this.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3),!1):""===String(this.code).trim()?(this.errMsg="请填写验证码",this.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3),!1):(this.$api.post("/apis/a/restapi/eus/login/login_by_mobile",{mobile:this.number,validate_code:this.code,validate_token:this.validate_token}).then(function(e){console.log(e),t.userId=e.user_id,window.localStorage.setItem("_USER_ID_",e.user_id),t.getUser()}).catch(function(e){t.errMsg=e.message,t.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3)}),!1):(this.errMsg="请填写合法的手机号",this.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3),!1)},inputNum:function(){/^1[34578]\d{9}$/.test(this.number)?this.isSend=!0:this.isSend=!1},cancel:function(){this.imgCode="",this.needImgCode=!1},mobileSendCode:function(){var t=this,e={};e.mobile=this.number,""!==this.imgCode&&(e.captcha_hash=this.captcha_hash,e.captcha_value=this.imgCode),console.log(e),this.$api.post("/apis/a/restapi/eus/login/mobile_send_code",e).then(function(e){t.countDown(),t.errMsg="发送成功",t.errImgCode="",t.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3),t.validate_token=e.validate_token,t.imgCode="",t.needImgCode=!1}).catch(function(e){t.switchOne(),"NEED_CAPTCHA"===e.name?(t.needImgCode=!0,t.errImgCode=""):t.errImgCode=e.message,t.errMsg=e.message,t.isErrshow=!0,setTimeout(function(){t.isErrshow=!1},2e3)})},switchOne:function(){var t=this;this.$api.post("/apis/a/restapi/eus/v3/captchas",{captcha_str:this.number}).then(function(e){t.captcha_image=e.captcha_image,t.captcha_hash=e.captcha_hash})},countDown:function(){var t=this;this.isSend=!1,0===this.downTime?(this.isSend=!0,this.sendBtnText="重新发送",this.disabled=!1,clearTimeout(this.timer)):(this.downTime--,this.sendBtnText="已发送（"+this.downTime+"）",this.timer=setTimeout(function(){return t.countDown()},1e3))},getUser:function(){this.userId="369085594",this.$api.get("/apis/a/restapi/eus/v3/users/"+this.userId+"?").then(function(t){console.log(t)})}},beforeDestroy:function(){clearTimeout(this.timer)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-w"},[i("div",{staticClass:"login-c"},[i("h1",{staticClass:"login"},[i("svg",{attrs:{viewBox:"0 0 142 58",id:"logo",width:"100%",height:"100%"}},[i("g",{attrs:{fill:"#1B9DFF","fill-rule":"evenodd"}},[i("path",{attrs:{d:"M75.689 1.189h-1.306a.64.64 0 0 0-.641.638v2.592a.64.64 0 0 0 .64.638h2.612a.64.64 0 0 0 .64-.638V3.128a1.945 1.945 0 0 0-1.945-1.94M46.802 1.188h-2.888a.64.64 0 0 0-.641.638v4.842c0 .344.274.729.64.729h4.408c.485.02.982.363.999.979V12.9a.64.64 0 0 0 .641.638h2.359a.64.64 0 0 0 .64-.638V5.459a1.943 1.943 0 0 0-1.945-1.938h-3.573V1.826a.64.64 0 0 0-.64-.638"}}),i("path",{attrs:{d:"M50.076 30.517H48.29a.848.848 0 0 1-.848-.845V10.3a.64.64 0 0 0-.64-.638h-2.609a.64.64 0 0 0-.64.638v20.42a3.682 3.682 0 0 0 3.684 3.671h2.838a.64.64 0 0 0 .64-.638v-2.6a.64.64 0 0 0-.64-.637M123.349 1.64h-3.148a1.876 1.876 0 0 0-.248.016l-.08.012a1.92 1.92 0 0 0-.46.143l-.015.007a1.89 1.89 0 0 0-.5.34c-.11.128-12.315 14.334-12.504 14.578l-.01.013a.62.62 0 0 0 .454 1.05h3.149a2.166 2.166 0 0 0 .248-.017l.085-.013c.156-.028.31-.075.455-.141l.075-.036a1.906 1.906 0 0 0 .547-.42l12.415-14.49a.62.62 0 0 0-.463-1.042M86.132 34.37h7.843c2.143 0 3.886-1.737 3.886-3.872V17.316c0-.525.193-1.03.543-1.423.086-.101 9.336-10.882 9.448-11.01.019-.022.187-.183.187-.986v-.758c0-.77-.46-1.468-1.172-1.777l-.02-.01a2.184 2.184 0 0 0-.257-.085l-.07-.017-.034-.009a.423.423 0 0 0-.045-.007l-.094-.015-.056-.008h-.014l-.02-.001-.043-.002a1.57 1.57 0 0 0-.11-.007h-.059l-25.137.005a.677.677 0 0 0-.677.675v1.721c0 .55.293 1.05.747 1.273.176.086.405.141.723.174l.174.016.396.005h18.695a.433.433 0 0 1 .33.713L94.28 14.36a2.043 2.043 0 0 0-.523 1.363v13.78c0 .489-.4.887-.891.887l-5.944-.001c-.81 0-1.468.656-1.468 1.463v1.925c0 .348.28.592.678.592M132.984 2.03a1.94 1.94 0 0 0-.456.14l-.074.037a1.932 1.932 0 0 0-.547.419L108.393 30.13c-.193.249-.393.505-.393.877v1.097c0 1.069.873 1.939 1.946 1.939h27.495c2.105 0 3.818-1.707 3.818-3.805l-.001-.01v-4.754a.085.085 0 0 1 0-.018v-.528c0-.806-.66-1.463-1.469-1.463h-1.898a.664.664 0 0 0-.664.663v5.024a.876.876 0 0 1-.877.873l-21.11.001a.435.435 0 0 1-.423-.432c0-.103.036-.201.1-.277L137.292 3.04a.62.62 0 0 0 .163-.418.625.625 0 0 0-.625-.623h-3.513a2.014 2.014 0 0 0-.248.017l-.085.012zM71.04 34.392l5.953-.002a.64.64 0 0 0 .641-.639l-.007-1.851c0-.763-.623-1.384-1.388-1.384h-4.044a.965.965 0 0 1-.95-.95v-6.489h5.879a.51.51 0 0 0 .51-.508V19.71a.51.51 0 0 0-.51-.509h-5.88v-5.664h5.74a.64.64 0 0 0 .64-.637v-2.6a.64.64 0 0 0-.64-.638h-5.74V1.827a.64.64 0 0 0-.641-.638h-2.608a.64.64 0 0 0-.64.638v7.836h-5.452V5.064h1.874a.64.64 0 0 0 .641-.638V1.828a.64.64 0 0 0-.64-.638h-8.484a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.638h2.72v4.599h-2.72a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.639h2.72v5.664h-2.85a.51.51 0 0 0-.51.509v2.858c0 .28.228.508.51.508h2.85v6.57c0 .465-.38.845-.848.845h-1.872a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.639h2.925a3.682 3.682 0 0 0 3.684-3.672v-7.618h1.937a.51.51 0 0 0 .51-.508V19.71a.51.51 0 0 0-.51-.509h-1.937v-5.664h5.451v16.974c0 2.176 1.619 3.88 3.685 3.88M9.08 2.854C.864 8.17-1.472 19.118 3.864 27.304c5.335 8.188 16.322 10.514 24.538 5.197.476-.307.931-.635 1.367-.98a.973.973 0 0 0 .208-1.288l-.001-.002-.002-.002-.819-1.257a2.566 2.566 0 0 0-3.527-.759l-.015.009-.014.01c-5.844 3.77-13.649 2.114-17.441-3.706-3.796-5.824-2.135-13.612 3.71-17.394 4.727-3.059 10.742-2.561 14.878.822a.973.973 0 0 1-.1 1.56l-10.564 6.837a2.546 2.546 0 0 0-.753 3.53l.861 1.322c.295.452.9.58 1.354.287l16.583-10.73a.974.974 0 0 0 .344-1.25l-.02-.04c-.253-.48-.53-.954-.833-1.42C28.282-.135 17.296-2.462 9.08 2.855"}}),i("path",{attrs:{d:"M33.978 17.333l-3.322 2.15a.972.972 0 0 0-.287 1.347l2.157 3.31a.98.98 0 0 0 1.353.286l1.66-1.074a2.941 2.941 0 0 0 .87-4.078l-1.078-1.654a.98.98 0 0 0-1.353-.287M33.072 53.504v-1.088h-5.856v-4.112h4.992v-1.088h-4.992V43.2h5.856v-1.088H26v11.392h7.072zm7.856-7.872H39.68l-2.16 6.32-2.144-6.32h-1.248l2.88 7.872h1.024l2.896-7.872zm7.488 4.24h-5.312c0 1.728.816 2.72 2.32 2.72.912 0 1.44-.272 2.064-.896l.784.688c-.8.8-1.536 1.216-2.88 1.216-2.08 0-3.44-1.248-3.44-4.032 0-2.544 1.232-4.032 3.232-4.032 2.032 0 3.232 1.472 3.232 3.808v.528zm-1.152-.864c-.032-.64-.064-.88-.24-1.312-.304-.72-1.008-1.184-1.84-1.184-.832 0-1.536.464-1.84 1.184-.176.432-.208.672-.24 1.312h4.16zm8.848-2.736c-.56-.56-1.136-.736-1.888-.736-.912 0-1.776.4-2.208 1.056v-.96h-1.152v7.872h1.152v-4.832c0-1.2.736-2.112 1.888-2.112.608 0 .928.144 1.36.576l.848-.864zm7.024-.64h-1.248l-2.144 6.32-2.16-6.32h-1.248l2.832 7.712-.56 1.536c-.256.72-.496.976-1.296.976h-.352v1.024h.496c.56 0 1.12-.144 1.536-.544.224-.208.4-.496.56-.928l3.584-9.776zm4.64 7.872v-.992h-.608c-.736 0-1.072-.432-1.072-1.152v-4.8h1.68v-.88h-1.68v-2.464h-1.152v2.464h-.992v.88h.992v4.832c0 1.168.672 2.112 2.016 2.112h.816zm8.48 0v-5.056c0-1.776-1.056-2.912-2.832-2.912-.88 0-1.632.304-2.208.96v-4.384h-1.152v11.392h1.152V48.64c0-1.36.784-2.08 1.968-2.08s1.92.704 1.92 2.08v4.864h1.152zm3.952 0v-7.872h-1.152v7.872h1.152zm.08-10.112v-1.296h-1.296v1.296h1.296zm9.008 10.112v-5.04c0-.912-.256-1.648-.816-2.192-.48-.48-1.168-.736-2.016-.736-.88 0-1.648.32-2.208.96v-.864h-1.152v7.872h1.152v-4.848c0-1.376.768-2.096 1.952-2.096s1.936.704 1.936 2.096v4.848h1.152zm8.608.24c0 1.952-1.216 3.376-3.28 3.376-1.184 0-1.84-.304-2.672-1.056l.752-.736c.576.512.976.784 1.888.784 1.52 0 2.16-1.072 2.16-2.416v-1.232c-.64.816-1.36 1.024-2.208 1.024-.8 0-1.488-.288-1.904-.704-.784-.784-.96-2-.96-3.28 0-1.28.176-2.496.96-3.28.416-.416 1.12-.688 1.92-.688.864 0 1.568.192 2.208 1.024v-.928h1.136v8.112zm-1.152-4.24c0-1.472-.24-2.944-1.952-2.944s-1.968 1.472-1.968 2.944.256 2.944 1.968 2.944 1.952-1.472 1.952-2.944zm13.936.896c0-1.424-.592-2.352-1.744-2.784 1.024-.464 1.536-1.328 1.536-2.528 0-1.856-1.28-3.088-3.136-3.088-1.728 0-3.072 1.088-3.2 2.928h1.152c.112-1.168.848-1.904 2.048-1.904 1.104 0 1.984.72 1.984 2.08 0 1.28-.64 2.064-2.032 2.064h-.24v1.008h.24c1.552 0 2.24.832 2.24 2.208 0 1.392-.96 2.208-2.192 2.208-1.088 0-2.096-.56-2.192-1.984H104c.096 2.064 1.552 3.008 3.344 3.008 1.856 0 3.344-1.12 3.344-3.216zm8.288.064c0 1.888-1.344 3.136-3.12 3.136s-3.12-1.248-3.12-3.136v-5.312c0-1.888 1.344-3.136 3.12-3.136s3.12 1.248 3.12 3.136v5.312zm-1.152-.064v-5.184c0-1.248-.704-2.176-1.968-2.176s-1.968.928-1.968 2.176V50.4c0 1.248.704 2.176 1.968 2.176s1.968-.928 1.968-2.176zm5.008-6.944v-1.344h-1.392v2.608l1.392-1.264z"}})])])]),t._v(" "),i("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[i("div",{staticClass:"form-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"input",attrs:{type:"tel",placeholder:"手机号",maxlength:"11"},domProps:{value:t.number},on:{input:[function(e){e.target.composing||(t.number=e.target.value)},t.inputNum]}}),t._v(" "),i("div",{staticClass:"send",class:{"send-clas":t.isSend},on:{click:t.mobileSendCode}},[t._v(t._s(t.sendBtnText))])]),t._v(" "),i("div",{staticClass:"form-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input",attrs:{type:"number",placeholder:"验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),i("button",{staticClass:"submit",attrs:{type:"submit"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t._v("登录")]),t._v(" "),i("div",{staticClass:"about"},[t._v("关于我们")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isErrshow,expression:"isErrshow"}],staticClass:"err-box"},[t._v(t._s(t.errMsg))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.needImgCode,expression:"needImgCode"}],staticClass:"dialog"},[i("div",{staticClass:"dialog-w",on:{click:t.cancel}},[i("div",{staticClass:"dialog-c",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"dialog-close"}),t._v(" "),i("h3",{staticClass:"title"},[t._v("请填写图形验证码")]),t._v(" "),i("div",{staticClass:"input-w"},[i("div",{staticClass:"input-c"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.imgCode,expression:"imgCode",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text"},domProps:{value:t.imgCode},on:{input:function(e){e.target.composing||(t.imgCode=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("div",{staticClass:"img-code",on:{click:t.switchOne}},[i("img",{attrs:{src:t.captcha_image,alt:""}})])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.errImgCode,expression:"errImgCode"}],staticClass:"err-imgCode"},[i("img",{attrs:{src:s("d1FR"),alt:""}}),t._v(" "),i("span",{staticClass:"err-t"},[t._v(t._s(t.errImgCode))])]),t._v(" "),i("div",{staticClass:"btn-w"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.mobileSendCode}},[t._v("确定")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[this._v("新用户登录即自动注册，并表示已同意"),e("a",{staticClass:"protocol",attrs:{href:"javascript:;"}},[this._v("《用户服务协议》")])])}]};var c=s("VU/8")(i,a,!1,function(t){s("UoY1")},"data-v-53fe521c",null);e.default=c.exports},UoY1:function(t,e){},d1FR:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAxZJREFUSA21V8tqFEEUPdUGYXytfKCILvQbMkjyAQoqbnThKhkwqB8g7jJRF+IHaFDIZBniwkcSdC1R7Fm7040ulMSAoBLBR8pzb1cz7Ux1T/VMW1DTNVX3nlOPW/feMihRbAO7YTCKPzjA7yFVtfiIbViDRdvM4VsonOknaJvYjveYotxp1jHWNknWEZFQyhYnYLCfrVHWl6zLOIr7pomfbOeWXGJrCdfABEma1I75bxE1PDd38d2HZq9iF37gJOUvcLxO+SbmMG8MezzFS2ynsAO/sED5vQS4xi1c9ejmdvFIxkl3hwIbnOxF32R7iHXmmzwrgyXTwtlc9IABO4lZTmCcx3Ki+/yjrL4jfU3SW8OSCi4xLhPrEe3gq+5ilixty5lyhkt2AvfSvqIvZVcou1wkk45R9qlWsZvuQpAGa/BZUtZK7cbJ+0/iV6yT6bhutV4ZYJpncT0dqPxLI+U0m46LVFI+4BJ/47LWq7qBPw47dj7BEVuc4e4vBmIMLpZwiCNCpG5QPBKdw+CIgZoJx5hwRlypuLq275IHwgWLOY62cEa8Y+JnPwdrDysofp5BRlYsUSZx+MOChuhLcCHnP54rRK8qmYh3S1abxNaqUItwJIySc4QXap3nvK9INmdsJae/uFtid4Q1o9dJVl3Dwf9t2S5mf9Iz1nBl6aM3cap4qhWMSqLALEU4E+OKNMqcrwC6GCLJTjSiJcRH8IAadc0cilV1lLH1GCPNW61sB6jAYdclHxN5JXaJ2QyN7HYICH7jHC3zuFZphxRJhZiHpUlg5x630OLAF67iSV+cETym7Dut0u5TiDlLkQ1J/ryikp64AH/DKzBAJ0lvEvONWnRGvycVcSYfcxtfmHlcyciWburuWSaMEfbo7ckgdLbadepdrmlefJgzXQ01uAymGpLosi/ic2BnN6nI9qw4BdCEPsmRptkXsz5ktv0sz8m4neok9MAMraZVKqFPyeWrOZKkRlt8whjmyPKEScJoGtHEz4vLTZ4wzMfB65laL/u9JXfFPml1r5I4SAzPPtrE35d8tP0F950EOn4oQmQAAAAASUVORK5CYII="}});
//# sourceMappingURL=4.1ec9df1620147eec8efa.js.map