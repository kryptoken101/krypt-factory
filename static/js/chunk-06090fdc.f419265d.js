(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06090fdc"],{4112:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("svg-icon",{attrs:{"icon-class":"international"}}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("inchCheck.title")))])],1),r("el-alert",{attrs:{title:e.$t("inchCheck.support"),type:"success",closable:!1}}),r("el-row",[r("el-input",{attrs:{type:"textarea",placeholder:e.$t("inchCheck.placeholder")},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),r("el-row",{staticStyle:{margin:"10px 0"}},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onCheck}},[e._v(e._s(e.$t("inchCheck.check")))])],1),e._l(e.resList,(function(e,t){return r("el-alert",{key:t,attrs:{closable:!1,title:e.address,description:e.desc,type:e.type,"show-icon":""}})})),r("div",{staticClass:"imgBox"},[r("el-alert",{attrs:{title:e.$t("inchCheck.contact"),type:"info"}}),r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/c0deCn/wiki/qun.jpg",alt:"wechat"}})],1)],2)],1)},s=[],n=r("efe2"),c=r("4833"),i=(r("6a61"),r("37de"),r("22f9"),r("1e34"),{zh:{inchCheck:{title:"StarLink快照查询:",placeholder:"请输入ETH地址查询",check:"查询",noPermissions:"因网络原因查询失败，请稍后重试",networkError:"因网络原因查询失败，请稍后重试",checkAddress:"请检查地址是否正确",alert_ok:"快照数量: {a}   -- CoinTool.APP 查询",contact:"扫描下方微信二维码，一起交流",support:"支持多地址查询使用 例如 0xaaaa,0xbbbb"}},en:{inchCheck:{title:"StarLink Check:",placeholder:"Please enter eth address for inquiry",check:"Check",networkError:"The query failed for network reasons. Please try again.",noPermissions:"The query failed for network reasons. Please try again.",checkAddress:"address length incorrect",alert_ok:"Number : {a}    -- CoinTool.APP",contact:"Scan the WeChat qr code below and communicate with each other",support:"Support multi - address query. Demo: 0xaaaa,0xbbbb"}}}),o=r("9905"),l="1inchCheck",h={name:"1inchCheck",data:function(){return{resList:[],address:"",runNum:1}},created:function(){this.$i18n.getLocaleMessage("en")[l]||(this.$i18n.mergeLocaleMessage("en",i.en),this.$i18n.mergeLocaleMessage("zh",i.zh))},methods:{onCheck:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.resList=[],r=e.address.split(","),o["a"].mapLimit(r,e.runNum,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(r,a){var s,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={},t.prev=1,t.next=4,e.getRes(r);case 4:c=t.sent,i=parseInt(c)/Math.pow(10,18),s=Object(n["a"])(Object(n["a"])({},c),{},{status:200,address:r,num:i}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),s=t.t0.response&&500===t.t0.response.status?{status:500,address:r}:{status:504,address:r};case 12:return t.prev=12,e.addResListItem(a,s),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,r){return t.apply(this,arguments)}}(),(function(e,t){e&&console.log(e),console.log(t,"res 拿到全部结果")}));case 3:case"end":return t.stop()}}),t)})))()},addResListItem:function(e,t){var r={200:this.$t("inchCheck.alert_ok",{a:t.num}),500:this.$t("inchCheck.noPermissions"),504:this.$t("inchCheck.networkError")};this.resList.push(Object(n["a"])(Object(n["a"])({},t),{},{type:200===t.status?"success":"error",desc:r[t.status]})),e(null,Object(n["a"])({},t))},getRes:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$ajax({url:"https://http-mainnet.hecochain.com/",method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:"0xFb31Abeb999a21Bf3df024b676196C6c7b17bc4f",data:"0x18a5bbdc000000000000000000000000"+e.replace("0x","")},"latest"]}});case 2:return a=r.sent,r.abrupt("return",a.result);case 4:case"end":return r.stop()}}),r)})))()}}},u=h,d=(r("8583"),r("5d22")),p=Object(d["a"])(u,a,s,!1,null,"f759ccfc",null);t["default"]=p.exports},8583:function(e,t,r){"use strict";r("97f1")},"97f1":function(e,t,r){}}]);