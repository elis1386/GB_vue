(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1bc1":function(t,e,n){"use strict";n("98e9")},"23bb":function(t,e,n){},"2e2a":function(t,e,n){},"320c":function(t,e,n){"use strict";n("6a13")},"4a54":function(t,e,n){"use strict";n("2e2a")},"504c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Router")],1)},o=[],s=n("2909"),r=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation",{attrs:{page:t.page}})],1)}),c=[],u=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/taskList"}},[n("a",{staticClass:"btn btn-outline-secondary btn-space ",attrs:{href:"#tasklist",role:"button"}},[t._v("TaskList")])]),n("router-link",{attrs:{to:"/calc"}},[n("a",{staticClass:"btn btn-outline-secondary btn-space",attrs:{href:"#calc",role:"button"}},[t._v("Calculator")])]),n("router-link",{attrs:{to:"/404"}},[n("a",{staticClass:"btn btn-outline-secondary btn-space",attrs:{href:"#404"}},[t._v("Error")])]),n("router-view")],1),"tasklist"===t.page?n("TaskList"):t._e(),"calc"===t.page?n("Calc"):t._e(),"404"===t.page?n("ErrorPage"):t._e()],1)}),l=[],d=(n("b0c0"),n("caad"),n("2532"),n("8e02")),p=n("ce7f"),m=n("b658"),f={name:"Navigation",props:{page:String},components:{TaskList:d["default"],Calc:p["default"],ErrorPage:m["default"]},methods:{addFood:function(){this.$router.push({name:"PaymentFood",query:{amount:200}}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}))},addTransport:function(){this.$router.push({name:"PaymentTransport",query:{amount:50}}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}))},addEntertaiment:function(){this.$router.push({name:"PaymentEntertaiment",query:{amount:2e3}}).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}))}}},h=f,v=(n("1bc1"),n("2877")),b=Object(v["a"])(h,u,l,!1,null,"6b7a1f8a",null),g=b.exports,_={name:"Router",components:{Navigation:g},data:function(){return{page:""}},methods:{setPage:function(){this.page=location.hash.slice(1)}},mounted:function(){var t=this;this.setPage(),window.addEventListener("hashchanged",(function(){t.setPage()}))}},y=_,k=Object(v["a"])(y,r,c,!1,null,"0582aa62",null),w=k.exports,P={name:"Calculator",components:{Router:w},data:function(){return{}},methods:{addNewPayment:function(t){this.paymentsList=[].concat(Object(s["a"])(this.paymentsList),[t])}},created:function(){this.$router.push({name:"TaskList"})}},L=P,j=Object(v["a"])(L,i,o,!1,null,null,null),O=j.exports,C=(n("b64b"),n("d3b7"),n("07ac"),n("2f62"));a["a"].use(C["a"]);var x=new C["a"].Store({state:{newList:{},newList2:[],formList:[],formList2:[]},mutations:{setResponseDataNewList:function(t,e){t.newList=e},setResponseDataNewList2:function(t,e){t.newList2=e},setformDataNewList:function(t,e){t.formList=e},setformDataNewList2:function(t,e){t.formList2=e},addDataToList:function(t,e){var n=Object.keys(t.newList)[Object.keys(t.newList).length-1];t.newList[n].push(e)},addDataToList2:function(t,e){t.newList2.push(e)}},actions:{fetchData:function(t,e){var n=t.commit;fetch("https://raw.githubusercontent.com/elis1386/GB_vue/lesson4/Vue/src/response.json").then((function(t){return t.json()})).then((function(t){var a,i=(a=[]).concat.apply(a,Object(s["a"])(Object.values(t)));n("setResponseDataNewList",t),n("setResponseDataNewList2",i),n("setformDataNewList2",i.slice(0,5)),1===e&&n("setformDataNewList2",t.result.slice(0,5))}))}}}),N=(n("3ca3"),n("ddb0"),n("8c4f")),$=[{path:"/payment",name:"Payment",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Food?amount=:amount",name:"Food",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Food",name:"Food",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Transport?amount=:amount",name:"Transport",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Transport",name:"Transport",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Entertaiment?amount=:amount",name:"Entertaiment",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/Entertaiment",name:"Entertaiment",component:function(){return Promise.resolve().then(n.bind(null,"8e02"))}},{path:"/404",name:"ErrorPage",component:function(){return Promise.resolve().then(n.bind(null,"b658"))}},{path:"*",redirect:{name:"ErrorPage"}}],D=$;a["a"].use(N["a"]);var E=[{path:"/taskList",name:"TaskList",component:d["default"]}].concat(Object(s["a"])(D),[{path:"/calc",name:"Calculator",component:function(){return Promise.resolve().then(n.bind(null,"ce7f"))}}]),T=new N["a"]({mode:"history",base:"/",routes:E}),V=T;a["a"].component("TaskList",d["default"]),a["a"].config.productionTip=!1,new a["a"]({router:V,store:x,render:function(t){return t(O)}}).$mount("#app")},6162:function(t,e,n){},"6a13":function(t,e,n){},"70eb":function(t,e,n){"use strict";n("504c")},"8e02":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"d-grid gap-2 col-2"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.formVisible,expression:"!formVisible"}],staticClass:"btn btn-success mb-3",attrs:{type:"button"},on:{click:t.getForm}},[t._v(" + Add new payment")]),n("PaymentForm",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}],attrs:{"id-count":t.list.length},on:{getPayment:t.getPayment}})],1),n("PaymentList",{attrs:{list:t.newList}}),n("Pagination",{attrs:{list:t.list},on:{"choose-page":t.choosePageHandler}})],1)])},i=[],o=n("2909"),s=n("5530"),r=(n("99af"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("table",{staticClass:"table"},[t._m(0),[n("tbody",t._l(t.formList2,(function(e,a){return n("tr",{key:a},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.amount))])])})),0)],[n("tbody",t._l(t.formList,(function(e,a){return n("tr",{key:a},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.amount))])])})),0)]],2)])])}),c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Date")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("Amount")])])])}],u=n("2f62"),l={name:"PaymentList",props:["list"],computed:Object(s["a"])({},Object(u["d"])(["formList","formList2","newList","newList2"]))},d=l,p=n("2877"),m=Object(p["a"])(d,r,c,!1,null,"143319fb",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),n("FastPay"),n("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"button"},on:{click:t.addNewPayment}},[t._v(" + Add ")])],1)])},v=[],b=(n("b0c0"),n("a4d3"),n("e01a"),function(){var t=new Date,e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear();return"".concat(e,".").concat(n,".").concat(a)}),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,(function(e){return n("a",{key:e.description,staticClass:"links_btn",on:{click:function(n){return t.linkHandler(e)}}},[t._v(" "+t._s(e.description)+":"+t._s(e.params.amount)+" ")])})),0)},_=[],y=[{description:"Food",params:{amount:200}},{description:"Transport",params:{amount:50}},{description:"Entertaiment",params:{amount:2e3}}],k={name:"FastPay",computed:{list:function(){return y}},methods:{linkHandler:function(t){var e=t.description,n=t.params;this.$route.name!==e&&this.$router.push({name:e,params:n.amount}),console.log(t)}}},w=k,P=(n("320c"),Object(p["a"])(w,g,_,!1,null,"23b1535c",null)),L=P.exports,j={components:{FastPay:L},name:"PaymentForm",props:["idCount"],data:function(){return{id:0,description:"",amount:0,date:"",formVisible:!1}},mounted:function(){this.setParams()},computed:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["newList2"])),{},{list:function(){return y},getRouteParams:function(){return{name:this.$route.name,params:this.$route.params}},isEmpty:function(){return this.date&&this.amount&&this.description}}),methods:Object(s["a"])(Object(s["a"])({getMatch:function(){var t=this;return this.list.some((function(e){return e.description===t.$route.name}))},getCurrentDate:b},Object(u["c"])(["addDataToList","addDataToList2"])),{},{addNewPayment:function(){var t={id:this.newList2.length+1,amount:this.amount,description:this.description,date:this.date||this.getCurrentDate()};this.addDataToList2(t),this.setParams(),this.formVisible=!1},setParams:function(){var t;this.getMatch()?(this.date=this.getCurrentDate(),this.amount=null===(t=this.$$route.params)||void 0===t?void 0:t.amount,this.description=this.$$route.name):(this.date=null,this.description=null,this.amount=null)}})},O=j,C=(n("effc"),Object(p["a"])(O,h,v,!1,null,"bc03a0d4",null)),x=C.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"mt-5"},[n("ul",{staticClass:"pagination justify-content-center"},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[t._v("Previous")]),t._l(t.pages,(function(e,a){return n("div",{key:e,staticClass:"page-item",on:{click:function(e){return t.choosePage(a)}}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(" "+t._s(e)+" ")])])})),n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])],2)])},$=[],D={name:"Pagination",props:["list"],computed:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["newList","newList2"])),{},{makeArray:function(){return this.newList},pages:function(){return this.newList2.length?Math.ceil(this.newList2.length/5):1}}),methods:Object(s["a"])(Object(s["a"])({},Object(u["c"])(["setformDataNewList"])),{},{choosePage:function(t){this.$emit("choose-page",t)}})},E=D,T=(n("e2b1"),Object(p["a"])(E,N,$,!1,null,"0665f85b",null)),V=T.exports,F={name:"TaskList",components:{PaymentList:f,PaymentForm:x,Pagination:V},data:function(){return{activeList:[],count:5,formVisible:!1,list:[{id:1,date:"28.03.2020",description:"Food",amount:169},{id:2,date:"24.03.2020",description:"Transport",amount:360},{id:3,date:"24.03.2020",description:"Food",amount:532},{id:4,date:"21.03.2020",description:"Clother",amount:12e3},{id:5,date:"19.03.2020",description:"Sport",amount:6e3},{id:6,date:"15.04.2020",description:"Food",amount:320},{id:7,date:"27.04.2020",description:"Clother",amount:1200},{id:8,date:"17.05.2020",description:"Sport",amount:300},{id:9,date:"12.06.2020",description:"Food",amount:5320}],page:1}},computed:Object(s["a"])({},Object(u["d"])(["newList","newList2"])),created:function(){this.fetchData(this.page)},methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(u["b"])(["fetchData"])),Object(u["c"])(["setformDataNewList2"])),{},{getForm:function(){this.formVisible=!this.formVisible},getPayment:function(t){this.list=[].concat(Object(o["a"])(this.list),[t]),this.formVisible=!1},choosePageHandler:function(t){var e=t*this.count,n=e+this.count;this.setformDataNewList2(this.newList2.slice(e,n))}})},A=F,R=(n("70eb"),Object(p["a"])(A,a,i,!1,null,"f0762430",null));e["default"]=R.exports},"975e":function(t,e,n){"use strict";n("d409")},"98e9":function(t,e,n){},b658:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("p",{staticClass:"text mt-3"},[t._v("404 "),n("br"),t._v(" Данной страницы не существует ")])])])}],o={name:"ErrorPage"},s=o,r=(n("4a54"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"0013150e",null);e["default"]=c.exports},ce7f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",{staticClass:"text"},[t._v("Calculator")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.operand1,expression:"operand1",modifiers:{number:!0}}],staticClass:"inputarea",domProps:{value:t.operand1},on:{input:function(e){e.target.composing||(t.operand1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.operand2,expression:"operand2",modifiers:{number:!0}}],staticClass:"inputarea",domProps:{value:t.operand2},on:{input:function(e){e.target.composing||(t.operand2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.error?n("p",{staticClass:"error"},[t._v("ERROR")]):t._e(),n("h2",{staticClass:"text"},[t._v("= "+t._s(t.result))]),t._l(t.items,(function(e){return n("button",{key:e.value,staticClass:"actions",on:{click:function(n){return t.calcHandler(e.value)}}},[t._v(" "+t._s(e.name)+" ")])})),n("div",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyVisible,expression:"keyVisible"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.keyVisible)?t._i(t.keyVisible,null)>-1:t.keyVisible},on:{change:function(e){var n=t.keyVisible,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o=null,s=t._i(n,o);a.checked?s<0&&(t.keyVisible=n.concat([o])):s>-1&&(t.keyVisible=n.slice(0,s).concat(n.slice(s+1)))}else t.keyVisible=i}}}),t._v("  "),n("label",{staticClass:"text",attrs:{for:"checkbox"}},[t._v("Отобразить экранную клавиатуру")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyVisible,expression:"keyVisible"}]},[t._l(t.numbers,(function(e){return n("button",{key:e,staticClass:"numbers",on:{click:function(n){return t.keyBoard(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{staticClass:"numbers",on:{click:function(e){return t.deleteNumber()}}},[t._v(" ← ")]),n("div",{staticClass:"radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"one",value:"operand1"},domProps:{checked:t._q(t.picked,"operand1")},on:{change:function(e){t.picked="operand1"}}}),n("label",{attrs:{for:"one"}},[t._v("operand1")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"two",value:"operand2"},domProps:{checked:t._q(t.picked,"operand2")},on:{change:function(e){t.picked="operand2"}}}),n("label",{attrs:{for:"two"}},[t._v("operand2")])])],2)],2)},i=[],o={name:"Calculator",data:function(){return{operand1:0,operand2:0,result:0,str:null,error:!1,keyVisible:!1,cheked:!1,picked:"operand1",items:[{name:"plus",value:"+"},{name:"minus",value:"-"},{name:"division",value:"/"},{name:"multiplecat",value:"*"},{name:"power",value:"**"},{name:"mudolo",value:"%"}],numbers:[0,1,2,3,4,5,6,7,8,9]}},methods:{calcHandler:function(t){switch(this.error=!1,t){case"+":this.plus();break;case"-":this.minus();break;case"/":this.division();break;case"*":this.multiplecat();break;case"**":this.power();break;case"%":this.modulo();break}},plus:function(){this.result=this.operand1+this.operand2},minus:function(){this.result=this.operand1-this.operand2},division:function(){0!==this.operand2?this.result=this.operand1/this.operand2:this.error=!0},multiplecat:function(){this.result=this.operand1*this.operand2},power:function(){this.result=Math.pow(this.operand1,this.operand2)},modulo:function(){this.result=this.operand1%this.operand2},keyBoard:function(t){"operand1"===this.picked?this.operand1=t:this.operand2=t},deleteNumber:function(){"operand1"===this.picked?this.operand1=0:this.operand2=0}}},s=o,r=(n("975e"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,null,null);e["default"]=c.exports},d409:function(t,e,n){},e2b1:function(t,e,n){"use strict";n("6162")},effc:function(t,e,n){"use strict";n("23bb")}});
//# sourceMappingURL=app.0beff8da.js.map