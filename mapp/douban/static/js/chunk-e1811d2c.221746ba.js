(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1811d2c"],{"5b95":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-details"},[a("fixed-top",{attrs:{titleName:t.titleName}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.movieData.title,expression:"movieData.title"}]},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"cont-a"},[t.movieData.images?a("div",{staticClass:"left-avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.movieData.images.medium,expression:"movieData.images.medium"}],attrs:{alt:""}})]):t._e(),a("div",{staticClass:"right-c"},[a("h1",[t._v(t._s(t.movieData.title))]),a("p",[t._v(t._s(t.movieData.original_title))]),t.movieData.rating?a("div",[t._v(t._s(t.movieData.rating.average)+" 分")]):t._e(),a("p",[t._v("类型："+t._s(t.getGenres(t.movieData.genres)))]),t.movieData.pubdates?a("p",[t.movieData.countries?a("span",[t._v(t._s(t.movieData.countries[0]))]):t._e(),t._v(" / "+t._s(t.movieData.pubdates[0]))]):t._e(),t.movieData.durations?a("p",[t._v("片长："+t._s(t.movieData.durations[0]))]):t._e()])]),t._m(0)]),a("div",{staticClass:"movie-c"},[a("p",[t._v("剧情简介：")]),a("div",{staticClass:"summary"},[t._v(t._s(t.movieData.summary))])]),a("div",{staticClass:"people-w"},[a("h5",[t._v("演职人员")]),a("ul",{staticClass:"people-uls"},[t._l(t.movieData.directors,function(e){return a("li",{key:e.id,staticClass:"people-list",on:{click:function(a){return t.gotoPeople(e.id)}}},[e.avatars?a("div",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatars.medium,expression:"item.avatars.medium"}],attrs:{alt:""}})]):t._e(),a("p",{staticClass:"name-p"},[t._v(t._s(e.name))]),a("p",{staticClass:"name-p"},[t._v("导演")])])}),t._l(t.movieData.casts,function(e){return a("li",{key:e.id,staticClass:"people-list",on:{click:function(a){return t.gotoPeople(e.id)}}},[e.avatars?a("div",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatars.medium,expression:"item.avatars.medium"}],attrs:{alt:""}})]):t._e(),a("p",{staticClass:"name-p"},[t._v(t._s(e.name))]),a("p",{staticClass:"name-p"},[t._v("演员")])])})],2)]),a("div",{staticClass:"comments-w"},[a("ul",{staticClass:"table-uls"},[a("li",{staticClass:"table-list",class:{"current-list":0===t.currentIndex},on:{click:function(e){return t.tableOne(0)}}},[t._v("短评")]),a("li",{staticClass:"table-list",class:{"current-list":1===t.currentIndex},on:{click:function(e){return t.tableOne(1)}}},[t._v("影评")])]),a("ul",{directives:[{name:"show",rawName:"v-show",value:0===t.currentIndex,expression:"currentIndex === 0"}],staticClass:"comments-d-uls"},[t._l(t.movieData.popular_comments,function(e,s){return a("li",{directives:[{name:"show",rawName:"v-show",value:s<5,expression:"index < 5"}],key:e.id,staticClass:"comments-d-list",on:{click:function(a){return t.gotoDetails(e.id,s)}}},[a("div",{staticClass:"left"},[a("img",{attrs:{src:e.author.avatar,alt:""}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"name-w"},[a("div",{staticClass:"name-left"},[a("span",[t._v(t._s(e.author.name))]),e.rating?a("span",[t._v(t._s(e.rating.value)+"分")]):t._e()]),a("span",[t._v(t._s(e.useful_count))])]),a("p",[t._v(t._s(e.title))]),a("p",{staticClass:"max-text"},[t._v(t._s(e.content))])])])}),a("li",{staticClass:"btn-li",on:{click:function(e){return t.gotoComments(0)}}},[t._v("查看全部评论"+t._s(t.movieData.comments_count)+"个")])],2),a("ul",{directives:[{name:"show",rawName:"v-show",value:1===t.currentIndex,expression:"currentIndex === 1"}],staticClass:"comments-d-uls"},[t._l(t.movieData.popular_reviews,function(e,s){return a("li",{directives:[{name:"show",rawName:"v-show",value:s<5,expression:"index < 5"}],key:e.id,staticClass:"comments-d-list",on:{click:function(a){return t.gotoDetails(e.id,s)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.author.avatar,expression:"item.author.avatar"}],attrs:{alt:""}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"name-w"},[a("div",{staticClass:"name-left"},[a("span",[t._v(t._s(e.author.name))]),e.rating?a("span",[t._v(t._s(e.rating.value)+"分")]):t._e()])]),a("p",[t._v(t._s(e.title))]),a("p",{staticClass:"max-text"},[t._v(t._s(e.summary))])])])}),a("li",{staticClass:"btn-li",on:{click:function(e){return t.gotoComments(1)}}},[t._v("查看全部评论"+t._s(t.movieData.reviews_count)+"个")])],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.movieData.title,expression:"!movieData.title"}],staticClass:"loading-w"},[a("cube-loading"),a("p",{staticClass:"text"},[t._v("正在加载中...")])],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-w"},[a("div",{staticClass:"btn-list"},[t._v("想看")]),a("div",{staticClass:"btn-list"},[t._v("评分")])])}],n={data:function(){return{currentIndex:0,photoArr:[],movieData:{},titleName:"电影详情"}},created:function(){this.$route.query.id&&this.getDetails()},methods:{gotoDetails:function(t,e){this.$router.push({path:"/commentDetails",query:{id:this.$route.query.id,mid:t,mindex:e,index:this.currentIndex}})},gotoComments:function(t){this.$router.push({path:"/comments",query:{id:this.$route.query.id,index:t}})},gotoPeople:function(t){this.$router.push({path:"/peopleDetails",query:{id:t}})},getDetails:function(){var t=this;this.$fetch("/subject/"+this.$route.query.id).then(function(e){e.title&&(t.movieData=e)})},getPhotos:function(){var t=this;this.$fetch("/subject/"+this.$route.query.id+"/photos",{count:20}).then(function(e){t.photoArr=e.photos})},getGenres:function(t){if(t&&t.length)return t.join(" / ")},tableOne:function(t){this.currentIndex=t}},components:{fixedTop:function(t){return a.e("chunk-3eea379a").then(function(){var e=[a("a2a2")];t.apply(null,e)}.bind(this)).catch(a.oe)}}},o=n,r=(a("ba88"),a("2877")),l=Object(r["a"])(o,s,i,!1,null,"5c445fe3",null);e["default"]=l.exports},"64f1":function(t,e,a){},ba88:function(t,e,a){"use strict";var s=a("64f1"),i=a.n(s);i.a}}]);