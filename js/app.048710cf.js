(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43ba9fc5"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f4009ae0"}[e]+".css",o=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-blog-website/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0085":function(e,t,n){},"2b7c":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("bc3a"),a=n.n(r),o=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,u){var i={url:e,method:t};"get"===t.toLowerCase()?i.params=n:i.data=n,localStorage.token&&(a.a.defaults.headers.common["Authorization"]=localStorage.token),a()(i).then((function(e){console.log(e.data),"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(o["Message"].error(e.data.msg),u(e.data))})).catch((function(e){o["Message"].error("网络异常"),u({msg:"网络异常"})}))}))}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL="//blog-server.hunger-valley.com"},3786:function(e,t,n){"use strict";var r=n("2b7c"),a={REGISTER:"auth/register",LOGIN:"auth/login",LOGOUT:"auth/logout",GET_INFO:"auth/"};t["a"]={register:function(e){var t=e.username,n=e.password;return Object(r["a"])(a.REGISTER,"POST",{username:t,password:n})},logIn:function(e){var t=e.username,n=e.password;return Object(r["a"])(a.LOGIN,"POST",{username:t,password:n})},logOut:function(){return localStorage.removeItem("token"),Object(r["a"])(a.LOGOUT)},getInfo:function(){return Object(r["a"])(a.GET_INFO)}}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("Footer")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("h1",[n("router-link",{attrs:{to:"/pages/index"}},[e._v("Blog Sharer")])],1),n("span",[e._v("分享精品博客")]),n("section",[n("el-button",{attrs:{plain:""}},[n("router-link",{attrs:{to:"/pages/login"}},[e._v("立即登录")])],1),n("el-button",{attrs:{plain:""}},[n("router-link",{attrs:{to:"/pages/register"}},[e._v("注册账号")])],1)],1)],e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/pages/index"}},[e._v("Blog Sharer")])],1),n("router-link",{attrs:{to:"/pages/create"}},[n("i",{staticClass:"el-icon-plus"})]),n("div",{staticClass:"user-avatar"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),n("ul",[n("li",[n("router-link",{attrs:{to:"/pages/my-profiles/"+e.user.id}},[e._v("我的")])],1),n("li",[n("a",{on:{click:e.onLogOut}},[e._v("注销")])])])])]:e._e()],2)},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),c=n("3786"),l=n("2f62");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}window.auth=c["a"];var d={name:"Header",data:function(){return{}},computed:p({},Object(l["c"])(["isLogin","user"])),created:function(){this.checkLogin()},methods:p(p({},Object(l["b"])(["checkLogin","logout"])),{},{onLogOut:function(){this.logout()}})},g=d,h=n("2877"),m=Object(h["a"])(g,u,i,!1,null,"35c36d62",null),b=m.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("p",[n("a",{attrs:{href:"https://github.com/DylanChen08"}},[e._v("@Dylan Chen")])])])}],w={name:"Footer"},y=w,L=(n("b82a"),Object(h["a"])(y,v,O,!1,null,"4e6264a4",null)),j=L.exports,k={name:"App",components:{Header:b,Footer:j}},_=k,x=(n("7faf"),Object(h["a"])(_,a,o,!1,null,null,null)),E=x.exports,P=n("5c96"),S=n.n(P),T=(n("0fae"),n("8c4f")),I=(n("96cf"),n("1da1")),C={user:null,isLogin:!1},R={user:function(e){return e.user},isLogin:function(e){return e.isLogin}},A={setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},D={logIn:function(e,t){var n=e.commit,r=t.username,a=t.password;return c["a"].logIn({username:r,password:a}).then((function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})}))},register:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.username,o=n.password,e.next=4,c["a"].register({username:a,password:o});case 4:return u=e.sent,r("setUser",{user:u.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,c["a"].logOut();case 3:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkLogin:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.isLogin){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,c["a"].getInfo();case 5:if(a=e.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=9;break}return e.abrupt("return",!1);case 9:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},M={state:C,getters:R,mutations:A,actions:D},G={state:{},getters:{},mutation:{},actions:{}};r["default"].use(l["a"]);var N=new l["a"].Store({modules:{auth:M,blog:G}});window.storeInRouter=N,r["default"].use(T["a"]);var U=new T["a"]({mode:"history",base:"/vue-blog-website/",routes:[{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/pages/index",name:"index",component:function(){return n.e("about").then(n.bind(null,"f78d"))}},{path:"/pages/create",name:"create",component:function(){return n.e("about").then(n.bind(null,"8362"))},meta:{requiresAuth:!0}},{path:"/pages/blog-details/:blogId",name:"details",component:function(){return n.e("about").then(n.bind(null,"999f"))}},{path:"/pages/edit/:blogId",name:"edit",component:function(){return n.e("about").then(n.bind(null,"ed04"))},meta:{requiresAuth:!0}},{path:"/pages/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"0ddc"))}},{path:"/pages/register",name:"register",component:function(){return n.e("about").then(n.bind(null,"ae10"))}},{path:"/pages/my-profiles/:blogId",name:"my-profiles",component:function(){return n.e("about").then(n.bind(null,"4127"))}},{path:"/pages/user/:blogId",name:"user",component:function(){return n.e("about").then(n.bind(null,"6a47"))}}]});U.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?N.dispatch("checkLogin").then((function(t){console.log(34),console.log(t),t?n():(P["Message"].error("您还没登录"),n({path:"/pages/login",query:{redirect:e.fullPath}}))})):n()}));var q=U,F=n("53ca");function B(e){var t="object"===Object(F["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),a=r-n,o="";switch(!0){case a<6e4:o="刚刚";break;case a<36e5:o=Math.floor(a/6e4)+"分钟前";break;case a<864e5:o=Math.floor(a/36e5)+"小时前";break;default:o=Math.floor(a/864e5)+"天前"}return o}var $={install:function(e,t){e.prototype.friendlyDate=B}};r["default"].use(S.a),r["default"].config.productionTip=!1,r["default"].use(S.a),r["default"].use($),new r["default"]({router:q,store:N,utils:$,render:function(e){return e(E)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";n("8fba")},"8fba":function(e,t,n){},b82a:function(e,t,n){"use strict";n("0085")}});
//# sourceMappingURL=app.048710cf.js.map