webpackJsonp([2,0],[function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=o(145),a=s(r),n=o(144),i=s(n),p=o(42),c=s(p),d=o(41),u=s(d),l=o(21),f=s(l),v=o(103),x=s(v);o(97),a["default"].use(i["default"]),a["default"].component("app-navbar",u["default"].AppNavbar),a["default"].component("app-footer",u["default"].AppFooter),a["default"].component("container",u["default"].Container),a["default"].component("slide",u["default"].Slide),a["default"].component("github-star",u["default"].GitHubButton),a["default"].component("lib-stats",u["default"].Stats),a["default"].component("docs-bar",u["default"].DocsNavbar);var m=a["default"].extend({data:function(){return{sharedStore:f["default"]}}});a["default"].filter("marked",x["default"]);var h=new i["default"];h.map({"/":{component:c["default"].Index},"/docs":{component:function(e,t){f["default"].fetchBranches().then(function(){e(c["default"].Docs)})["catch"](t)},subRoutes:{"/tag/:tag":{component:u["default"].DocsViewer,name:"docview",subRoutes:{"/file/:category/:file":{component:u["default"].FileViewer,name:"fileview"},"/class/:class":{component:u["default"].ClassViewer,name:"classview"}}}}}}),h.start(m,"#vue-root")},,,,,,,,,,,,,,,,,,,,function(e,t,o){var s,r;s=o(59),r=o(118),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=o(63),a=s(r),n=o(38),i={branches:null,docs:{}},p={data:i,fetchBranches:function(){return new a["default"](function(e,t){i.branches?e(i.branches):n.get("https://api.github.com/repos/hydrabolt/discord.js/branches").end(function(o,s){o?t(o):(i.branches=s.body,e(i.branches))})})},fetchDocs:function(e){return new a["default"](function(t,o){i.docs[e]?t(i.docs[e]):n.get("https://raw.githubusercontent.com/hydrabolt/discord.js/"+e+"/docs/docs.json").end(function(s,r){s?o(s):(i.docs[e]=r.body||JSON.parse(r.text),t(r.body))})})}};e.exports=p},,,,,,,,,,,,,,,,,,,function(e,t,o){var s,r;s=o(50),r=o(113),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=o(127),a=s(r),n=o(128),i=s(n),p=o(130),c=s(p),d=o(129),u=s(d),l=o(131),f=s(l),v=o(126),x=s(v),m=o(132),h=s(m),_=o(133),b=s(_),y=o(40),g=s(y),w=o(141),M=s(w),j=o(134),P=s(j);e.exports={AppNavbar:a["default"],Container:i["default"],Slide:c["default"],GitHubButton:u["default"],Stats:f["default"],AppFooter:x["default"],DocsNavbar:h["default"],DocsViewer:b["default"],DocsSidebar:g["default"],FileViewer:M["default"],ClassViewer:P["default"]}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=o(143),a=s(r),n=o(142),i=s(n);e.exports={Index:a["default"],Docs:i["default"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function r(){i.get("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/discord.js").end(function(e,t){if(!e){p.downloads=0;var o=!0,s=!1,r=void 0;try{for(var a,i=(0,n["default"])(t.body.downloads);!(o=(a=i.next()).done);o=!0){var c=a.value;p.downloads+=c.downloads}}catch(e){s=!0,r=e}finally{try{!o&&i["return"]&&i["return"]()}finally{if(s)throw r}}p.downloads=p.downloads.toLocaleString()}}),i.get("https://api.github.com/repos/hydrabolt/discord.js").end(function(e,t){e||(p.stars=(""+t.body.stargazers_count).toLocaleString())}),i.get("https://api.github.com/repos/hydrabolt/discord.js/contributors").end(function(e,t){e||(p.contributors=(""+t.body.length).toLocaleString())})}Object.defineProperty(t,"__esModule",{value:!0});var a=o(22),n=s(a),i=o(38),p={downloads:"50,000+ ",stars:"200+ ",contributors:"25+ "};t["default"]={data:function(){return r(),p}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return this.$route.params.tag||this.$router.go({path:"/docs/tag/indev-rewrite"}),{choice:this.$route.params.tag?null:"branch",chosenTag:this.$route.params.tag?this.$route.params.tag:"indev-rewrite"}},methods:{select:function(e){this.choice=e}},watch:{chosenTag:function(e){e&&(this.$router.go({path:"/docs/"}),this.$router.go({path:"/docs/tag/"+e}))}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["docs"],data:function(){return{docLink:this.$route.path}}}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(21),a=s(r),n=o(40),i=s(n);t["default"]={components:{Sidebar:i["default"]},data:function(){return{docs:a["default"].data.docs[this.$route.params.tag]}},route:{canActivate:function(e){a["default"].fetchDocs(e.to.params.tag).then(function(){e.next()})["catch"](function(t){e.abort(),alert("Couldn't load docs for "+e.to.params.tag+" - "+t),console.log(t)})},canReuse:function(){}}}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function r(e){e=e.split("+").join(" ");for(var t={},o=void 0,s=/[?&]?([^=]+)=([^&]*)/g;o=s.exec(e);)t[decodeURIComponent(o[1])]=decodeURIComponent(o[2]);return t}Object.defineProperty(t,"__esModule",{value:!0});var a=o(22),n=s(a),i=o(137),p=s(i),c=o(140),d=s(c),u=o(136),l=s(u);t["default"]={components:{overview:p["default"],propRenderer:d["default"],methodRenderer:l["default"]},data:function(){var e=this.$route.params;return{info:this.$parent.$parent.docs.json.classes[e["class"]]}},methods:{scroll:function(e){var t=window.location.href.split("?")[0];window.location.href=t+"?scrollto="+encodeURIComponent(e)}},ready:function(){var e=!0,t=!1,o=void 0;try{for(var s,a=(0,n["default"])(this.$el.querySelectorAll("pre code"));!(e=(s=a.next()).done);e=!0){var i=s.value;window.hljs.highlightBlock(i)}}catch(p){t=!0,o=p}finally{try{!e&&a["return"]&&a["return"]()}finally{if(t)throw o}}var c=window.location.href.split("?")[1];c&&(c=r(c),c.scrollto&&document.getElementById("doc_for_"+c.scrollto).scrollIntoView(!0))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["example"]}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(20),a=s(r),n=o(138),i=s(n),p=o(139),c=s(p),d=o(135),u=s(d);t["default"]={props:["method"],components:{PropType:a["default"],Param:i["default"],ParamTable:c["default"],Example:u["default"]},data:function(){return{}}}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(20),a=s(r);t["default"]={components:{PropType:a["default"]},props:["info"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["param"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["params"]}},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(20),a=s(r);t["default"]={props:["prop"],components:{PropType:a["default"]},data:function(){return{}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["types"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){var e=this.$route.params;return{file:this.$parent.$parent.docs.custom[e.category][e.file]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};t["default"]={data:function(){return{branchData:o}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t){e.exports=" <footer> <container> <a href=https://github.com/hydrabolt/discord.js><b>discord.js</b></a> </container> </footer> "},function(e,t){e.exports=" <div class=navbar> <container> <a v-link=\"{ path: '/' }\"><div class=title>discord.js</div></a> <div class=links> <a v-link=\"{ path: '/docs' }\"><div class=link>Docs</div></a> </div> </container> </div> "},function(e,t){e.exports=" <div class=container> <slot></slot> </div> "},function(e,t){e.exports=' <div class=github-button> <a class=github-button href=https://github.com/hydrabolt/discord.js data-icon=octicon-star data-style=mega data-count-href=/hydrabolt/discord.js/stargazers data-count-api=/repos/hydrabolt/discord.js#stargazers_count data-count-aria-label="# stargazers on GitHub" aria-label="Star hydrabolt/discord.js on GitHub">Star</a> </div> '},function(e,t){e.exports=" <div class=slide> <container> <slot></slot> </container> </div> "},function(e,t){e.exports=" <slide> <h2>Stats</h2> <div class=stat><b>{{ downloads }}</b> downloads</div> <div class=stat><b>{{ stars }}</b> stars</div> <div class=stat><b>{{ contributors }}</b> contributors</div> </slide> "},function(e,t){e.exports=' <div class=docs-navbar> <container> <span class=title>Documentation <span v-if=$route.params.tag>for {{ $route.params.tag }}</span></span> <div class=choices> Select docs from <span class=choice @click=\'select("branch")\'>Branch</span> or <span class=choice @click=\'select("commit")\'>Commit</span> or <span class=choice @click=\'select("release")\'>Release</span> </div> <div class=branchSelect v-if="choice==\'branch\'"> <select v-model=chosenTag> <option selected=selected value>Select a Branch</option> <option v-for="branch in $root.sharedStore.data.branches" v-bind:value=branch.name :selected="branch.name==\'indev-rewrite\'">{{ branch.name }}</option> </select> </div> </container> </div> '},function(e,t){e.exports=' <div class=docs-sidebar> <ul v-for="(category, items) in docs.custom"> <li>{{ category }}</li> <li v-for="(name, data) in items" v-link=\'{ name: "fileview", params: { category:category, file:name } }\'>{{ name }}</li> </ul> <ul> <li>Classes</li> <li v-for="(className, data) in docs.json.classes" v-link=\'{ name: "classview", params: { category:category, class:className } }\'>{{ className }}</li> </ul> </div> '},function(e,t){e.exports=" <div class=docs-viewer> <container> <sidebar :docs=docs></sidebar> <router-view></router-view> </container> </div> "},function(e,t){e.exports=' <div class=doc-part-view> <container> <h1>Class: {{ info.meta.name }}</h1> <p>{{{ info.meta.description | marked }}}</p> <hr> <overview :info=info></overview> <hr> <h2>Properties:</h2> <prop-renderer v-for="prop in info.properties" :prop=prop></prop-renderer> <hr> <h2>Methods:</h2> <method-renderer v-for="method in info.functions" :method=method></method-renderer> </container> </div> '},function(e,t){e.exports=" {{{ '```js\\n' + example + '```' | marked }}} "},function(e,t){e.exports=' <div class=docs-class-overview> <div class=docs-class-overview-segment> <h4>Properties</h4> <ul> <li v-for="prop in info.properties" v-link=\'{ name:"classview", query:{scrollto:prop.name} }\'><span class=propName>.{{ prop.name }}</span> => <span class=type><prop-type :types=prop.type></prop-type></span></li> </ul> </div> <div class=docs-class-overview-segment> <h4>Methods</h4> <ul> <li v-for="prop in info.functions" v-link=\'{ name:"classview", query:{scrollto:prop.name} }\'>{{ prop.name }}</li> </ul> </div> </div>'},function(e,t){e.exports=" {{ types.names }} "},function(e,t){e.exports=" <div class=doc-part-view> <container> {{{ file | marked }}} </container> </div> "},function(e,t){e.exports=" <docs-bar></docs-bar> <router-view></router-view> "},function(e,t){e.exports=" <div class=indexView> <slide> <h1>discord.js</h1> <div class=code>npm install --save discord.js</div> <github-star></github-star> </slide> <slide> <h2>About</h2> <p> discord.js is a JavaScript library that wraps around the <a href=https://discordapp.com/developers/docs/intro>Discord API</a> so you can make your own Bots and Applications for Discord. It handles all the communication and provides an easy-to-use interface so you can focus on doing actual work. </p> </slide> <lib-stats></lib-stats> </div> "},function(e,t){e.exports=' <container _v-20a33112=""> <h3 id="doc_for_{{ method.name }}" v-link="{ name:&quot;classview&quot;, query:{scrollto:method.name} }" _v-20a33112="">.{{ method.name }}(<param v-for="param in method.params" :param=param _v-20a33112="">)</h3> <div class=desc _v-20a33112=""> <param-table :params=method.params v-if="method.params.length>0" _v-20a33112=""></param-table> <p _v-20a33112="">{{{ method.description | marked }}}</p> <p _v-20a33112=""><b _v-20a33112="">Returns:</b> {{ method.returns[0].type.names[0] }}</p> <p v-if=method.examples _v-20a33112=""><b _v-20a33112="">Examples:</b><example v-for="example in method.examples" :example=example _v-20a33112=""></example></p> </div> </container> '},function(e,t){e.exports=' <container _v-293073d8=""> <h3 id="doc_for_{{ prop.name }}" _v-293073d8="">.{{ prop.name }}</h3> <div class=desc _v-293073d8=""> <p _v-293073d8="">{{{ prop.description | marked }}}</p> <p _v-293073d8=""><b _v-293073d8="">Type:</b> <prop-type :types=prop.type _v-293073d8=""></prop-type></p> </div> </container> '},function(e,t){e.exports=' <table _v-674c740f=""> <tbody _v-674c740f=""> <tr _v-674c740f=""> <th _v-674c740f="">Parameter</th> <th _v-674c740f="">Type</th> <th _v-674c740f="">Optional</th> <th _v-674c740f="">Description</th> </tr> <tr v-for="param in params" _v-674c740f=""> <td class="{{ param.optional ? \'optional\' : \'\' }}" _v-674c740f="">{{ param.name }}</td> <td _v-674c740f="">{{{ param.type.names[0] }}}</td> <td _v-674c740f="">{{ param.optional ? \'yes\' : \'\'}}</td> <td _v-674c740f="">{{{ param.description | marked }}}</td> </tr> </tbody> </table> '},function(e,t){e.exports=" <span class=\"param {{ param.optional ? 'optional' : '' }}\" _v-6febc7a2=\"\">{{ param.name }}</span> "},function(e,t,o){var s,r;s=o(43),r=o(106),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(44),r=o(107),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(45),r=o(108),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(46),r=o(109),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(47),r=o(110),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(48),r=o(111),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(49),r=o(112),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(51),r=o(114),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(52),r=o(115),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(53),r=o(116),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;o(99),s=o(54),r=o(122),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;o(98),s=o(55),r=o(117),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;o(102),s=o(56),r=o(125),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;o(101),s=o(57),r=o(124),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;o(100),s=o(58),r=o(123),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(60),r=o(119),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(61),r=o(120),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,o){var s,r;s=o(62),r=o(121),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}]);
//# sourceMappingURL=app.904dea977628bec35177.js.map