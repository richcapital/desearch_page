(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{7345:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/csv",function(){return r(5231)}])},5231:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return k}});var t=r(7568),i=r(797),a=r(414),c=r(5893),o=r(7294),s=r(4924),u=r(6042),l=r(9396),d=r(4914),h=r.n(d),f=r(1944),m=r(1876).Buffer,p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Shift_JIS";return new Promise(function(r,t){var i=new FileReader;i.onerror=function(){return t(i.error)},i.onload=function(){return r(h().decode(m.from(i.result),n))},i.readAsArrayBuffer(e)})},g=function(e){var n=e[0];return e.slice(1).map(function(e){return n.reduce(function(n,r,t){var i=e[t];return(0,l.Z)((0,u.Z)({},n),(0,s.Z)({},r,i&&i.length>0?i:void 0))},{})})},N=function(e){if(e["商品番号"]){var n="".concat(e["販売方法"]).includes("業販");return{originalType:"PHX",originalId:e["商品番号"],displayName:[e["ブランド名"],e["型番"],e["商品名"],e["サイズ"],e["色"],e["素材"],e["金具"],e["機番"],e["ランク"],].filter(function(e){return!!e}).join(" "),catalogPrice:v(e["定価"]),purchasePrice:v(e["買取価格（税込）"]),salePrice:v(e["通常価格"]),soldPrice:n?v(e["販売価格（税込）"]):void 0,contractPrice:n?v(e["販売価格（税込）"]):void 0,purchasedOn:e["成立日"],soldOn:e["入力日"],url:void 0,keyword:e[""],genreName:e["商品ジャンル"],categoryName:e["アイテム名"],brandName:e["ブランド名"],itemName:e["商品名"],rank:e["ランク"],itemTypeName:e["型番"],colorName:e["色"],sizeName:e["サイズ"],materialName:e["素材"],attachmentDescription:e["付属品説明"],description:e["備考"],purchaseShopName:e["買取店舗"],saleShopName:e["販売店舗"],saleMethod:e["販売方法"],purchaseMethod:e["買取方法"],itemStatus:e["商品状態"],metalFittingName:e["金具"],stoneName:e["石"],serialNumberName:e["機番"],payload:JSON.stringify(e)}}},j=function(e){if(e.uketsuke_bng)return{originalType:"AUC",originalId:"".concat(e.kaisai_kaisu,"-").concat(e.uketsuke_bng),displayName:[e.maker,e.shohin,e.hyoka].filter(function(e){return!!e}).join(" "),purchasePrice:void 0,contractPrice:v(e.seri_bng),soldOn:e.kaisai_ymd,url:void 0,genreName:e.genre,categoryName:e.keijo,brandName:e.maker,itemName:e.shohin,colorName:void 0,sizeName:void 0,materialName:void 0,attachmentDescription:void 0,description:e.shuppin_biko_1,saleMethod:"業者",itemStatus:e.kekka,metalFittingName:void 0,stoneName:void 0,payload:JSON.stringify(e),imageUrl:"".concat(e.gazo_path).concat(e.jsp_gazo1)}},v=function(e){if(e){var n=parseInt(e.replace(/,/g,""));return n&&n>0?n:void 0}},x=r(613),_=r(5746),k=function(){var e,n,r,s=(0,_.d)().setLoadingText,u=(0,o.useState)([]),l=u[0],d=u[1],h=(0,o.useState)("PHX"),m=h[0],v=h[1],k=(0,o.useState)(0),y=k[0],b=k[1],P=(e=(0,t.Z)(function(e){var n,r,t,c;return(0,a.__generator)(this,function(n){switch(n.label){case 0:if(!e.target.files)return[2];return[4,p((0,i.Z)(e.target.files)[0])];case 1:var r,a,o,s;return t=g((s=r=n.sent(),(0,f.Q)(s))),c="PHX"==m?(a=t).map(function(e){return N(e)}).filter(function(e){return!!e}):(o=t).map(function(e){return j(e)}).filter(function(e){return!!e}),d(c),[2]}})}),function(n){return e.apply(this,arguments)}),C=(n=(0,t.Z)(function(){return(0,a.__generator)(this,function(e){switch(e.label){case 0:return b(0),[4,w(0)];case 1:return e.sent(),[2]}})}),function(){return n.apply(this,arguments)}),w=(r=(0,t.Z)(function(e){var n;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return s&&s("アップロード中"),n=l[e],[4,x.W.items.create({item:n})];case 1:if(r.sent(),b(e),!(e<l.length-1))return[3,3];return[4,w(e+1)];case 2:r.sent(),r.label=3;case 3:return s&&s(null),[2]}})}),function(e){return r.apply(this,arguments)});return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"CSVアップロード"}),(0,c.jsxs)("p",{children:[(0,c.jsx)("input",{type:"radio",id:"PHX",value:"PHX",onChange:function(){return v("PHX")},checked:"PHX"===m}),(0,c.jsx)("label",{htmlFor:"PHX",children:"PHX"}),(0,c.jsx)("input",{type:"radio",id:"AUC",value:"AUC",onChange:function(){return v("AUC")},checked:"AUC"===m}),(0,c.jsx)("label",{htmlFor:"AUC",children:"AUC"})]}),(0,c.jsx)("p",{children:(0,c.jsx)("input",{type:"file",onChange:P})}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:C,disabled:0==l.length,children:"アップロード"})]}),(0,c.jsxs)("p",{children:[y,"/",l.length]}),(0,c.jsx)("div",{children:(0,c.jsxs)("table",{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"商品番号"}),(0,c.jsx)("th",{children:"ジャンル"}),(0,c.jsx)("th",{children:"カテゴリ"}),(0,c.jsx)("th",{children:"ブランド"}),(0,c.jsx)("th",{children:"商品名"})]})}),(0,c.jsx)("tbody",{children:l.slice(0,100).map(function(e){return(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{children:[e.originalType,":",e.originalId]}),(0,c.jsx)("td",{children:e.genreName}),(0,c.jsx)("td",{children:e.categoryName}),(0,c.jsx)("td",{children:e.brandName}),(0,c.jsx)("td",{children:e.itemName})]},e.originalId)})})]})})]})})}},5832:function(){}},function(e){e.O(0,[347,774,888,179],function(){return e(e.s=7345)}),_N_E=e.O()}]);