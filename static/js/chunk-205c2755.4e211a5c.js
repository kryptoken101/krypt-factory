(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-205c2755"],{"0d32":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"containerBg"}),n("div",{staticClass:"titleBox"},[n("h1",[n("div",{staticClass:"left"},[n("img",{attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",t.token_address)}}),n("span",[t._v(t._s(t.token_info.name)+" ("+t._s(t.token_info.symbol)+")")])]),n("div",{staticClass:"right"},[n("a",{attrs:{href:t.addLiquidity_link.replace("#address#",t.token_address),target:"_blank"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",plain:"",size:"mini"}},[t._v("Add Liquidity")])],1),n("a",{attrs:{href:t.trade_link.replace("#address#",t.token_address),target:"_blank"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Trade")])],1)])]),n("div",{staticClass:"section"},[t._m(0),n("div",{staticClass:"table"},[n("el-table",{ref:"transactionTableTable",staticStyle:{width:"100%"},attrs:{data:t.pairData,height:"400px"}},[n("el-table-column",{attrs:{type:"index"}}),n("el-table-column",{key:"name",attrs:{label:"name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("img",{staticClass:"img1",attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",a.token1)}}),n("img",{staticClass:"img2",attrs:{onerror:"this.src = 'https://cdn.jsdelivr.net/gh/CoinTool-App/cdn/pic/unknown-token.png';",width:"18",src:t.logo_link.replace("#address#",a.token2)}}),n("a",{attrs:{href:"/defi/pair?platform="+t.platform+"&address="+a.pair,target:"_blank"}},[t._v(t._s(a.token1Sybmol)+"-"+t._s(a.token2Sybmol))])]}}])}),n("el-table-column",{attrs:{prop:"token1Sybmol",label:"token1Sybmol"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t._f("autoFixed")(n.liquidity1))+" "+t._s(n.token1Sybmol)+" ")]}}])},[n("template",{slot:"header"},[t._v(" Liquidity Amount ")])],2),n("el-table-column",{attrs:{prop:"token2Sybmol",label:"token2Sybmol"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v(" "+t._s(t._f("autoFixed")(n.liquidity2))+" "+t._s(n.token2Sybmol)+" ")]}}])},[n("template",{slot:"header"},[t._v(" Liquidity Amount ")])],2)],1)],1)]),n("div",{staticClass:"section"},[t._m(1),n("el-row",{staticClass:"information",attrs:{gutter:10,justify:"center"}},[n("el-col",{attrs:{xs:12,span:4}},[n("div",{staticClass:"info"},[n("p",[t._v("Symbol")]),n("span",{staticStyle:{"margin-top":"10px",display:"block"}},[t._v(t._s(t.token_info.symbol)+" ")])])]),n("el-col",{attrs:{xs:12,span:4}},[n("div",{staticClass:"info"},[n("p",[t._v("Name")]),n("span",[t._v(t._s(t.token_info.name)+" ")])])]),n("el-col",{attrs:{xs:12,span:4}},[n("div",{staticClass:"info"},[n("p",[t._v("Address")]),n("span",[n("a",{attrs:{href:t.blockscan+"/address/"+t.token_address,target:"_blank"}},[t._v(" "+t._s(t._f("miniAddress")(t.token_address)))]),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.token_address,expression:" token_address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"}],attrs:{type:"text"}},[n("svg-icon",{staticClass:"copy",staticStyle:{color:"rgba(250, 250, 250)"},attrs:{"icon-class":"copy"}})],1)],1)])]),n("el-col",{attrs:{xs:12,span:8,align:"right"}},[n("div",{staticClass:"info"},[n("a",{attrs:{href:t.blockscan+"/address/"+t.token_address,target:"_blank"}},[n("el-button",{attrs:{type:"primary"}},[t._v("View on BlockSacn")])],1)])])],1)],1)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("span",[t._v("Top Pairs")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("span",[t._v("Token Information")])])}],s=n("4833"),o=n("efe2"),i=(n("37de"),n("1e34"),n("7479"),n("4a32"),n("6a61"),n("52c1")),c=n("8feb"),u=n.n(c),d=n("b893"),l=[],p={lg:[{x:0,y:0,w:4,h:6,i:"liquidity"},{x:0,y:1,w:4,h:6,i:"volume"},{x:0,y:2,w:4,h:6,i:"fees"},{x:0,y:3,w:4,h:8,i:"tokens"},{x:4,y:0,w:8,h:26,i:"charts"}]},h={name:"Pair",components:{},data:function(){return{logo_link:"",token_address:"",factory_address:"",token_info:{},token1:{},token2:{},liquidity1:0,liquidity2:0,token1AmountsOut:0,token2AmountsOut:0,rpc_node:"",blockscan:"",loading:!0,stopBlock:0,stopBurnBlock:0,stopMintBlock:0,pairData:[],AddInit:!1,RemoveInit:!1,transactionsCount:0,platform:"",zero_c:0,layout:p["lg"],responsiveLayouts:p}},computed:Object(o["a"])({},Object(i["b"])(["isPc"])),created:function(){},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query,a=n.platform,r=n.address,t.platform=a,"uniswap"===a&&(t.rpc_node="https://mainnet-eth.compound.finance/",t.factory_address="0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",t.blockscan="https://etherscan.io",t.trade_link="https://app.uniswap.org/#/swap?inputCurrency=#address#&outputCurrency=ETH",t.addLiquidity_link="https://app.uniswap.org/#/add/#address#/ETH",t.logo_link="https://tokens.1inch.exchange/#address#.png"),"mdex"===a&&(t.rpc_node="https://heconode.ifoobar.com/",t.blockscan="https://hecoinfo.com",t.factory_address="0xb0b670fc1F7724119963018DB0BfA86aDb22d941",t.logo_link="https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/#address#.png",t.trade_link="https://ht.mdex.com/#/swap?inputCurrency=#address#",t.addLiquidity_link="https://ht.mdex.com/#/add/#address#/HT"),"pancakeswap"===a&&(t.rpc_node="https://bsc-dataseed1.binance.org/",t.blockscan="https://bscscan.com",t.factory_address="0xca143ce32fe78f1f7019d7d551a6402fc5350c73",t.logo_link="https://tokens.1inch.exchange/#address#.png",t.trade_link="https://exchange.pancakeswap.finance/#/swap?inputCurrency=#address#",t.addLiquidity_link="https://exchange.pancakeswap.finance/#/add/#address#"),t.token_address=r,e.next=8,t.getTokenInfo(t.token_address);case 8:t.token_info=e.sent,t.getPair();case 10:case"end":return e.stop()}}),e)})))()},methods:{getPair:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s,o,i,c,d,p,h,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.Pair1();case 2:n=e.sent,a=1,r=n.length-1;case 5:if(!(r>=0)){e.next=34;break}if(!(a>=80)){e.next=8;break}return e.abrupt("break",34);case 8:if(s=n[r].data.replace("0x000000000000000000000000","0x").substring(0,42),o=n[r].topics[1].replace("000000000000000000000000",""),i=n[r].topics[2].replace("000000000000000000000000",""),l[o]){e.next=15;break}return e.next=14,t.getTokenInfo(o);case 14:l[o]=e.sent;case 15:if(l[i]){e.next=19;break}return e.next=18,t.getTokenInfo(i);case 18:l[i]=e.sent;case 19:return c=l[o].symbol,d=l[i].symbol,e.t0=u.a.abi,e.t1=["uint112","uint112","uint32"],e.next=25,t.Liquidity(s);case 25:e.t2=e.sent,p=e.t0.decodeParams.call(e.t0,e.t1,e.t2),h=parseInt("0x"+p[0].toString(16))/Math.pow(10,l[o].decimal),m=parseInt("0x"+p[1].toString(16))/Math.pow(10,l[i].decimal),t.pairData.push({token1:o,token2:i,token1Sybmol:c,token2Sybmol:d,liquidity1:h,liquidity2:m,pair:s}),a++;case 31:r--,e.next=5;break;case 34:case"end":return e.stop()}}),e)})))()},Pair1:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_getLogs",params:[{address:t.factory_address,topics:["0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9",t.token_address.replace("0x","0x000000000000000000000000")],fromBlock:"earliest",toBlock:"latest"}]}});case 2:return n=e.sent,e.abrupt("return",n.result);case 4:case"end":return e.stop()}}),e)})))()},blockNumber:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax({url:t.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:83}});case 2:return n=e.sent,e.abrupt("return",parseInt(n.result));case 4:case"end":return e.stop()}}),e)})))()},Liquidity:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0902f1ac"},"latest"]}});case 2:return a=n.sent,n.abrupt("return",a.result);case 4:case"end":return n.stop()}}),n)})))()},getTransactionByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getTransactionByHash",params:[t],id:1}});case 2:return a=n.sent,n.abrupt("return",a.result);case 4:case"end":return n.stop()}}),n)})))()},BlockByHash:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ajax({url:e.rpc_node,method:"post",data:{jsonrpc:"2.0",method:"eth_getBlockByHash",params:[t,!1],id:1}});case 2:return a=n.sent,n.abrupt("return",a.result);case 4:case"end":return n.stop()}}),n)})))()},getPairToken:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x0dfe1681"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0xd21220a7"},"latest"]}]});case 2:return a=n.sent,n.abrupt("return",{token1:a[0].result.replace("000000000000000000000000",""),token2:a[1].result.replace("000000000000000000000000","")});case 4:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$ajax({url:e.rpc_node,method:"post",data:[{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x95d89b41"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x06fdde03"},"latest"]},{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:t,data:"0x313ce567"},"latest"]}]});case 2:return a=n.sent,n.abrupt("return",{symbol:d["a"].cleanAsciiText(u.a.toAscii(a[0].result).toString()),name:d["a"].cleanAsciiText(u.a.toAscii(a[1].result).toString()),decimal:parseInt(a[2].result)});case 4:case"end":return n.stop()}}),n)})))()},onCopySuccess:function(t){this.$message.success(this.$t("common.copySuccess"))}}},m=h,f=(n("862c"),n("5d22")),k=Object(f["a"])(m,a,r,!1,null,"70dc84d2",null);e["default"]=k.exports},"862c":function(t,e,n){"use strict";n("e0cc")},b893:function(t,e,n){"use strict";var a=n("1222"),r=n("a3b6"),s=n("55ae"),o=(n("a9b5"),n("37de"),n("22f9"),n("7479"),n("4a32"),n("65f0"),n("476c"),n("63f1"),n("1e34"),n("96e6"),function(){function t(){Object(a["a"])(this,t),Object(s["a"])(this,"chars",["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),Object(s["a"])(this,"crypt",(function(t,e){var n=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},a=function(t){return("0"+Number(t).toString(16)).substr(-2)},r=function(e){return n(t).reduce((function(t,e){return t^e}),e)};return e.split("").map(n).map(r).map(a).join("")})),Object(s["a"])(this,"decrypt",(function(t,e){var n=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},a=function(e){return n(t).reduce((function(t,e){return t^e}),e)};return e.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(a).map((function(t){return String.fromCharCode(t)})).join("")}))}return Object(r["a"])(t,[{key:"guid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)}))}},{key:"generateMixed",value:function(t){for(var e="",n=0;n<t;n++){var a=Math.ceil(61*Math.random());e+=this.chars[a]}return Math.random().toString(36).substr(0)+e+Math.random().toString(36).substr(0)+(new Date).getTime()+Math.random().toString(36).substr(0)}},{key:"numAdd",value:function(t,e){var n,a,r;try{n=t.toString().split(".")[1].length}catch(s){n=0}try{a=e.toString().split(".")[1].length}catch(s){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(t,r)+this.numMul(e,r))/r}},{key:"numSub",value:function(t,e){var n,a,r;try{n=t.toString().split(".")[1].length}catch(s){n=0}try{a=e.toString().split(".")[1].length}catch(s){a=0}return r=Math.pow(10,Math.max(n,a)),(this.numMul(t,r)-this.numMul(e,r))/r}},{key:"numMul",value:function(t,e){var n=0,a=t.toString(),r=e.toString();try{n+=a.split(".")[1].length}catch(s){}try{n+=r.split(".")[1].length}catch(s){}return Number(a.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,n)}},{key:"cleanAsciiText",value:function(t){if(t)return t.replace(/[\x00-\x09\x0b-\x1F]/g,"").trim()}},{key:"numDiv",value:function(t,e){var n,a,r=0,s=0;try{r=t.toString().split(".")[1].length}catch(o){}try{s=e.toString().split(".")[1].length}catch(o){}return n=Number(t.toString().replace(".","")),a=Number(e.toString().replace(".","")),this.numMul(n/a,Math.pow(10,s-r))}}]),t}()),i=new o;e["a"]=i},e0cc:function(t,e,n){}}]);