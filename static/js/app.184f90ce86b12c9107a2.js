webpackJsonp([0],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("QZVJ")},null,null).exports,c=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[i("h1",{staticClass:"name"},[t._v(t._s(t.personal.name))]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"context"},[i("div",{staticClass:"base_info"},t._l(t.personal.base_information,function(e){return i("div",{key:e.id,class:["content","iconfont","icon-"+e.icon]},[t._v("\n\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t")])}),0),t._v(" "),i("div",{staticClass:"contact"},t._l(t.personal.contact_way,function(e){return i("div",{key:e.id,class:["content","iconfont","icon-"+e.icon]},[t._v("\n\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t")])}),0)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),i("h3",{staticClass:"classes_title"},[t._v("教育背景")]),t._v(" "),i("div",{staticClass:"education"},t._l(t.education_background,function(e){return i("div",{key:e.id,staticClass:"context"},[e.time?i("div",{staticClass:"time"},[t._v(t._s(e.time))]):t._e(),t._v(" "),e.degree?i("div",{staticClass:"degree"},[t._v(t._s(e.degree))]):t._e(),t._v(" "),e.school?i("div",{staticClass:"school"},[t._v(t._s(e.school))]):t._e(),t._v(" "),e.college?i("div",{staticClass:"college"},[t._v(t._s(e.college))]):t._e(),t._v(" "),e.major?i("div",{staticClass:"major"},[t._v(t._s(e.major))]):t._e()])}),0),t._v(" "),i("h3",{staticClass:"classes_title"},[t._v("项目经验")]),t._v(" "),i("div",{staticClass:"project"},t._l(t.project_experience,function(e){return i("div",{key:e.id,staticClass:"context"},[i("div",{staticClass:"head"},[i("h4",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),e.tag?i("div",{staticClass:"tag"},[t._v(t._s(e.tag))]):t._e(),t._v(" "),e.link?i("a",{staticClass:"link",attrs:{herf:e.link}},[t._v(t._s(e.link))]):t._e()]),t._v(" "),e.brief?i("div",{staticClass:"brief"},[t._v(t._s(e.brief))]):t._e(),t._v(" "),e.detail?i("div",{staticClass:"detail"},[t._v(t._s(e.detail))]):t._e()])}),0),t._v(" "),i("h3",{staticClass:"classes_title"},[t._v("工作经历")]),t._v(" "),i("div",{staticClass:"work"},t._l(t.work_experience,function(e){return i("div",{key:e.id,staticClass:"context"},[i("div",{staticClass:"head"},[e.job_title?i("h4",{staticClass:"title"},[t._v(t._s(e.job_title))]):t._e(),t._v(" "),e.time?i("div",{staticClass:"time"},[t._v(t._s(e.time))]):t._e(),t._v(" "),e.company?i("div",{staticClass:"company"},[t._v(t._s(e.company))]):t._e()]),t._v(" "),e.detail?i("div",{staticClass:"detail"},[t._v(t._s(e.detail))]):t._e()])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"QRcode"},[e("img",{attrs:{src:i("rpJM")}}),this._v("QQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"QRcode"},[e("img",{attrs:{src:i("oB+8")}}),this._v("微信")])}]};var l=i("VU/8")({name:"resume",data:function(){return{personal:{name:"翁鸿铨",base_information:[{title:"年龄",icon:"man",content:"25岁"},{title:"出生年月",icon:"calendar",content:"1994-11"},{title:"籍贯",icon:"home",content:"福建晋江"}],contact_way:[{title:"电话",icon:"phone",content:"+86 189-5993-9718"},{title:"邮箱",icon:"email",content:"chainhq@hotmail.com"},{title:"QQ",icon:"qq",content:"563394793"},{title:"微信",icon:"wechat",content:"yu563394793"}]},education_background:[{time:"目前(拟录取)",degree:"硕士在读",school:"中国科学技术大学",college:"先进技术研究院",major:"电子信息（软件工程方向）"},{time:"2012.09 - 2016.06",degree:"本科",school:"福建农林大学",college:"机电工程学院",major:"机械设计制造及其自动化"}],project_experience:[{title:"密码存储工具(web)",tag:"Django后端+Uni-App前端",link:"",brief:"",detail:"研究生初试后我自学了Python和Vue，做了一个移动端的网页。用户记录账户信息，用户可自由设置登录方式、条目标签和条目图片。主界面模拟手机UI的缩略图形式。总体代码量为前端5000，后端1000，目前可以在我系统的虚拟机中工作。"},{title:"Excel表单处理",tag:"工作期间做的一个VBA脚本",link:"",brief:"",detail:"实现SolidWorks导出的BOM表的处理、单零件耗材整理、相关工作电子表格的生成以及零部件图纸的归档存储，节省每天一到两个小时的处理Excel文档的时间。"},{title:"自走棋种族职业表",tag:"",link:"",brief:"",detail:"19年自走棋游戏火爆的时候制作了一个生产种族职业交叉图表的小工具，版本更新后可以在几分钟内制作出最新版本的图表。"},{title:"网页样式插件",tag:"",link:"https://userstyles.org/styles/178855/douyu-easy",brief:"",detail:"在stylish上传了一个网页样式修改插件，修改的是douyu.com，去除页面内的广告和竞猜付费元素，提供给使用者一个纯粹的直播界面，一月份上传至今累计下载量200+。"}],work_experience:[{time:"2017.09 - 2018.09",company:"深圳市鑫信腾科技有限公司",job_title:"机械设计工程师",detail:"智能手机自动测试设备及夹治具的结构设计。作为音频测试设备的主要设计负责人。工作期间销售额超过5000万。两次推动并完成音频测试夹治具的标准化及模块化工作。将单机型开发周期从2个工作日降低至0.5个工作日；将新机型夹治具设计出错从80%降低至20%以下。"},{time:"2016.07 - 2017.08",company:"通达（厦门）科技有限公司",job_title:"产品开发工程师",detail:"苹果手机IP68级防水卡托橡胶注射成型的开发。期间有连续半年的两班倒（9点-10点半）经历。"}]}}},o,!1,function(t){i("kw4A")},"data-v-0bc956ca",null).exports;s.a.use(c.a);var _=new c.a({mode:"history",routes:[{path:"/",name:"resume",component:l}]});i("muQq");s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:n},template:"<App/>"})},QZVJ:function(t,e){},kw4A:function(t,e){},muQq:function(t,e){},"oB+8":function(t,e,i){t.exports=i.p+"static/img/wechat.f269a43.png"},rpJM:function(t,e,i){t.exports=i.p+"static/img/qq.d96600f.png"}},["NHnr"]);
//# sourceMappingURL=app.184f90ce86b12c9107a2.js.map