(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f256860c"],{"117f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-w",on:{click:function(e){t.isSelect=!1}}},[i("fixed-top",{attrs:{title:t.title}}),i("div",{staticClass:"form-w"},[i("div",{staticClass:"form-item"},[i("label",{staticClass:"label"},[t._v("选择模块")]),i("div",{staticClass:"select-w",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"select-in",on:{click:t.showSel}},[i("div",[t._v(t._s(t.defaultLabel))]),i("span",{staticClass:"cube-icon cubeic-pulldown",class:{"rotate-icon":t.isSelect}})]),i("ul",{staticClass:"select-uls",class:{"show-uls":t.isSelect}},t._l(t.tabs,function(e,s){return i("li",{key:s,staticClass:"select-list",class:{"current-list":t.currentItem===s},on:{click:function(i){return t.checkOne(e,s)}}},[t._v(t._s(e.label))])}),0)])]),i("div",{staticClass:"form-item"},[i("label",{staticClass:"label"},[t._v("标题")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputTitle,expression:"inputTitle",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"标题字数必须5字以上"},domProps:{value:t.inputTitle},on:{input:function(e){e.target.composing||(t.inputTitle=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-item editor-w"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea",attrs:{placeholder:"输入文本，支持markdown格式"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),i("cube-button",{staticClass:"send",class:{"loading-btn":t.isLoading},on:{click:t.sendPubilsh}},[i("span",{staticClass:"cube-icon cubeic-navigation"}),i("span",[t._v("发布话题")]),i("cube-loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1)],1),i("v-tab-bar")],1)},a=[],n=i("ae4d"),c=i.n(n),l={data:function(){return{isLoading:!1,content:"",inputTitle:"",currentItem:0,defaultLabel:"分享",defaultTab:"share",isSelect:!1,title:"发布",tabs:[{label:"分享",path:"share"},{label:"问答",path:"ask"},{label:"招聘",path:"job"}],accesstoken:""}},created:function(){var t=this;this.accesstoken=localStorage.getItem("__accesstoken__"),this.accesstoken||this.$createDialog({type:"alert",title:"请先登录",confirmBtn:{text:"去登陆",active:!0,disabled:!1,href:"javascript:;"},onConfirm:function(){t.$router.push("/login")}}).show()},methods:{sendPubilsh:function(){var t=this;if(this.checkFlag()){var e=new c.a.Renderer;c.a.setOptions({renderer:e,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var i=c()(this.content);this.isLoading=!0,this.$fetch.post("/topics",{accesstoken:this.accesstoken,title:this.inputTitle,tab:this.defaultTab,content:i}).then(function(e){t.isLoading=!1,e.success&&t.$router.push({path:"/details",query:{id:e.topic_id}})})}},checkFlag:function(){var t=!0;return""===this.content.trim()&&(this.$createDialog({type:"alert",title:"请输入内容",content:""}).show(),t=!1),this.inputTitle.length<5&&(this.$createDialog({type:"alert",title:"标题字数必须5字以上",content:""}).show(),t=!1),""===this.inputTitle&&(this.$createDialog({type:"alert",title:"请输入标题",content:""}).show(),t=!1),t},checkOne:function(t,e){this.currentItem=e,this.defaultLabel=t.label,this.defaultTab=t.path,this.isSelect=!1},showSel:function(){this.isSelect=!this.isSelect}},components:{fixedTop:function(t){return i.e("chunk-4fe77dfa").then(function(){var e=[i("e7d3")];t.apply(null,e)}.bind(this)).catch(i.oe)},vTabBar:function(t){return i.e("chunk-aae7a332").then(function(){var e=[i("7eac")];t.apply(null,e)}.bind(this)).catch(i.oe)}}},o=l,r=(i("a789"),i("2877")),u=Object(r["a"])(o,s,a,!1,null,"14ee8e66",null);e["default"]=u.exports},9341:function(t,e,i){},a789:function(t,e,i){"use strict";var s=i("9341"),a=i.n(s);a.a}}]);