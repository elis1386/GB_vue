(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"375f":function(t,e,n){},5558:function(t,e,n){"use strict";n("375f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._e(),n("TaskList")],1)},s=[],o=n("2909"),r=(n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",{staticClass:"text"},[t._v("Calculator")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.operand1,expression:"operand1",modifiers:{number:!0}}],staticClass:"inputarea",domProps:{value:t.operand1},on:{input:function(e){e.target.composing||(t.operand1=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.operand2,expression:"operand2",modifiers:{number:!0}}],staticClass:"inputarea",domProps:{value:t.operand2},on:{input:function(e){e.target.composing||(t.operand2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.error?n("p",{staticClass:"error"},[t._v("ERROR")]):t._e(),n("h2",{staticClass:"text"},[t._v("= "+t._s(t.result))]),t._l(t.items,(function(e){return n("button",{key:e.value,staticClass:"actions",on:{click:function(n){return t.calcHandler(e.value)}}},[t._v(" "+t._s(e.name)+" ")])})),n("div",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyVisible,expression:"keyVisible"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.keyVisible)?t._i(t.keyVisible,null)>-1:t.keyVisible},on:{change:function(e){var n=t.keyVisible,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.keyVisible=n.concat([s])):o>-1&&(t.keyVisible=n.slice(0,o).concat(n.slice(o+1)))}else t.keyVisible=i}}}),n("label",{staticClass:"text",attrs:{for:"checkbox"}},[t._v("Отобразить экранную клавиатуру")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyVisible,expression:"keyVisible"}]},[t._l(t.numbers,(function(e){return n("button",{key:e,staticClass:"numbers",on:{click:function(n){return t.keyBoard(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{staticClass:"numbers",on:{click:function(e){return t.deleteNumber()}}},[t._v(" ← ")]),n("div",{staticClass:"radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"one",value:"operand1"},domProps:{checked:t._q(t.picked,"operand1")},on:{change:function(e){t.picked="operand1"}}}),n("label",{attrs:{for:"one"}},[t._v("operand1")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"two",value:"operand2"},domProps:{checked:t._q(t.picked,"operand2")},on:{change:function(e){t.picked="operand2"}}}),n("label",{attrs:{for:"two"}},[t._v("operand2")])])],2)],2)}),c=[],u={name:"Calculator",data:function(){return{operand1:0,operand2:0,result:0,str:null,error:!1,keyVisible:!1,cheked:!1,picked:"operand1",items:[{name:"plus",value:"+"},{name:"minus",value:"-"},{name:"division",value:"/"},{name:"multiplecat",value:"*"},{name:"power",value:"**"},{name:"mudolo",value:"%"}],numbers:[0,1,2,3,4,5,6,7,8,9]}},methods:{calcHandler:function(t){switch(this.error=!1,t){case"+":this.plus();break;case"-":this.minus();break;case"/":this.division();break;case"*":this.multiplecat();break;case"**":this.power();break;case"%":this.modulo();break}},plus:function(){this.result=this.operand1+this.operand2},minus:function(){this.result=this.operand1-this.operand2},division:function(){0!==this.operand2?this.result=this.operand1/this.operand2:this.error=!0},multiplecat:function(){this.result=this.operand1*this.operand2},power:function(){this.result=Math.pow(this.operand1,this.operand2)},modulo:function(){this.result=this.operand1%this.operand2},keyBoard:function(t){"operand1"===this.picked?this.operand1=t:this.operand2=t},deleteNumber:function(){"operand1"===this.picked?this.operand1=0:this.operand2=0}}},l=u,d=(n("975e"),n("2877")),p=Object(d["a"])(l,r,c,!1,null,null,null),m=p.exports,f={name:"Calculator",components:{Calc:m},data:function(){return{}},methods:{addNewPayment:function(t){this.paymentsList=[].concat(Object(o["a"])(this.paymentsList),[t])}}},h=f,v=Object(d["a"])(h,i,s,!1,null,null,null),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container "},[n("div",{staticClass:"d-grid gap-2 col-2"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.formVisible,expression:"!formVisible"}],staticClass:"btn btn-success mb-3",attrs:{type:"button"},on:{click:t.getForm}},[t._v(" + Add new payment")]),n("PaymentForm",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}],attrs:{"id-count":t.list.length},on:{getPayment:t.getPayment}})],1),n("PaymentList",{attrs:{list:t.activeList}}),n("Pagination",{attrs:{list:t.list},on:{"choose-page":t.choosePageHandler}})],1)])},_=[],w=n("5530"),g=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("table",{staticClass:"table"},[t._m(0),[n("tbody",t._l(t.formList2,(function(e,a){return n("tr",{key:a+"a"},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.amount))])])})),0)],[n("tbody",t._l(t.formList,(function(e,a){return n("tr",{key:a},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.amount))])])})),0)]],2)])])}),k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Date")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("Amount")])])])}],L=n("2f62"),j={name:"PaymentList",props:["list"],computed:Object(w["a"])({},Object(L["d"])(["formList","formList2","newList"]))},O=j,C=Object(d["a"])(O,g,k,!1,null,"64bbc551",null),P=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"input-group mb-3",attrs:{type:"text",placeholder:"payment date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),n("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"button"},on:{click:t.addNewPayment}},[t._v(" + Add ")])])])},N=[],D=(n("a4d3"),n("e01a"),{name:"PaymentForm",props:["idCount"],data:function(){return{description:"",amount:null,date:""}},computed:Object(w["a"])(Object(w["a"])({},Object(L["d"])(["newList2"])),{},{getCurrentDate:function(){var t=new Date,e=t.getDate(),n=t.getMonth(),a=t.getFullYear();return"".concat(e,".").concat(n,".").concat(a)}}),methods:Object(w["a"])(Object(w["a"])({},Object(L["c"])(["addDataToList","addDataToList2"])),{},{addNewPayment:function(){var t={id:this.newList2.lenght+1,amount:this.amount,description:this.description,date:this.date||this.getCurrentDate};this.addDataToList(t),this.addDataToList2(t),this.$emit("getPayment",t)}})}),V=D,T=(n("5a9e"),Object(d["a"])(V,x,N,!1,null,"1244a1a2",null)),$=T.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"mt-5"},[[n("ul",{staticClass:"pagination justify-content-center"},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[t._v("Previous")]),t._l(t.pages,(function(e,a){return n("div",{key:e,staticClass:"page-item",on:{click:function(e){return t.choosePage(a)}}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(" "+t._s(e)+" ")])])})),n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])],2)],t._l(t.makeArray,(function(e,a){return n("div",{key:a,on:{click:function(e){return t.clickHandler(a)}}},[t._v(" "+t._s(a)+" ")])}))],2)},A=[],E={name:"Pagination",props:["list"],computed:Object(w["a"])(Object(w["a"])({},Object(L["d"])(["newList","newList2"])),{},{makeArray:function(){return this.newList},pages:function(){return this.newList2.length?Math.ceil(this.newList2.length/5):1}}),methods:Object(w["a"])(Object(w["a"])({},Object(L["c"])(["newList"])),{},{choosePage:function(t){this.$emit("choose-page",t)},clickHandler:function(t){this.setformDataNewList(this.newList[t])}})},R=E,S=(n("ea6f"),Object(d["a"])(R,F,A,!1,null,"29d2169f",null)),M=S.exports,H={name:"TaskList",components:{PaymentList:P,PaymentForm:$,Pagination:M},data:function(){return{activeList:[],count:5,formVisible:!1,list:[{id:1,date:"28.03.2020",description:"Food",amount:169},{id:2,date:"24.03.2020",description:"Transport",amount:360},{id:3,date:"24.03.2020",description:"Food",amount:532},{id:4,date:"21.03.2020",description:"Clother",amount:12e3},{id:5,date:"19.03.2020",description:"Sport",amount:6e3},{id:6,date:"15.04.2020",description:"Food",amount:320},{id:7,date:"27.04.2020",description:"Clother",amount:1200},{id:8,date:"17.05.2020",description:"Sport",amount:300},{id:9,date:"12.06.2020",description:"Food",amount:5320}]}},computed:Object(w["a"])({},Object(L["d"])(["newList","newList2"])),created:function(){this.fetchData(this.page)},methods:Object(w["a"])(Object(w["a"])(Object(w["a"])({},Object(L["b"])(["fetchData"])),Object(L["c"])(["setResponseDataNewList2"])),{},{getForm:function(){this.formVisible=!this.formVisible},getPayment:function(t){this.list=[].concat(Object(o["a"])(this.list),[t]),this.formVisible=!1},choosePageHandler:function(t){var e=t*this.count,n=e+this.count;this.setformDataNewList2(this.newList2.slice(e,n))}})},B=H,U=(n("5558"),Object(d["a"])(B,y,_,!1,null,"36a541d8",null)),q=U.exports;n("b64b"),n("d3b7"),n("07ac");a["a"].use(L["a"]);var J=new L["a"].Store({state:{newList:{},newList2:[],formList:[],formList2:[]},mutations:{setResponseDataNewList:function(t,e){t.newList=e},setResponseDataNewList2:function(t,e){t.newList2=e},setformDataNewList:function(t,e){t.formList=e},setformDataNewList2:function(t,e){t.formList2=e},addDataToList:function(t,e){var n=Object.keys(t.newList)[Object.keys(t.newList).length-1];t.newList[n].push(e)},addDataToList2:function(t,e){t.newList2.push(e)}},actions:{fetchData:function(t,e){var n=t.commit;fetch("https://raw.githubusercontent.com/elis1386/GB_vue/lesson4/Vue/src/response.json").then((function(t){return t.json()})).then((function(t){var a,i=(a=[]).concat.apply(a,Object(o["a"])(Object.values(t)));n("setResponseDataNewList",t),n("setResponseDataNewList2",i),n("setformDataNewList2",i.slice(0,5)),1===e&&n("setformDataNewList",t.page1)}))}}});a["a"].component("TaskList",q),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)},store:J}).$mount("#app")},"5a9e":function(t,e,n){"use strict";n("956c")},"956c":function(t,e,n){},"975e":function(t,e,n){"use strict";n("d409")},a0c2:function(t,e,n){},d409:function(t,e,n){},ea6f:function(t,e,n){"use strict";n("a0c2")}});
//# sourceMappingURL=app.236e111c.js.map