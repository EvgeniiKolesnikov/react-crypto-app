(this["webpackJsonpreact-crypto-app"]=this["webpackJsonpreact-crypto-app"]||[]).push([[0],{204:function(e,t,c){},338:function(e,t,c){},340:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c.n(n),i=c(27),r=c.n(i),l=(c(204),c(43)),o=c(349),j=c(345),d=c(194),h=c(351),b=c(30),u=c(353),x=c(354),O=c(355),p=c(356),m=c(357),v=c.p+"static/media/cryptocurrency.1548aced.png",g=c(4),y=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),i=Object(l.a)(s,2),r=i[0],y=i[1];return Object(n.useEffect)((function(){var e=function(){return y(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(r<768))}),[r]),Object(g.jsxs)("div",{className:"nav-container",children:[Object(g.jsxs)("div",{className:"logo-container",children:[Object(g.jsx)(o.a,{src:v,size:"large"}),Object(g.jsx)(j.a.Title,{level:2,className:"logo",children:Object(g.jsx)(b.b,{to:"/",children:"Crypto"})}),Object(g.jsx)(d.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object(g.jsx)(u.a,{})})]}),c&&Object(g.jsxs)(h.a,{theme:"dark",children:[Object(g.jsx)(h.a.Item,{icon:Object(g.jsx)(x.a,{}),children:Object(g.jsx)(b.b,{to:"/",children:"Home"})},"1"),Object(g.jsx)(h.a.Item,{icon:Object(g.jsx)(O.a,{}),children:Object(g.jsx)(b.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})},"2"),Object(g.jsx)(h.a.Item,{icon:Object(g.jsx)(p.a,{}),children:Object(g.jsx)(b.b,{to:"/exchanges",children:"Exchanges"})},"3"),Object(g.jsx)(h.a.Item,{icon:Object(g.jsx)(m.a,{}),children:Object(g.jsx)(b.b,{to:"/news",children:"News"})},"4")]})]})},f=c(90),N=c(52),w=c(346),C=c(28),k=c.n(C),S=c(120),T=c(40),P={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"".concat("1111111111")},E=function(e){return{url:e,headers:P}},q=Object(S.a)({reducerPath:"cryptoApi",baseQuery:Object(T.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return E("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return E("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return E("/coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return E("/exchanges")}})}}}),A=q.useGetCryptosQuery,I=q.useGetCryptoDetailsQuery,M=q.useGetCryptoHistoryQuery,D=q.useGetExchangesQuery,F=j.a.Title,U=function(){var e,t=A(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(g.jsx)(ve,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)(N.a,{span:12,children:Object(g.jsx)(w.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(g.jsx)(N.a,{span:12,children:Object(g.jsx)(w.a,{title:"Total Exchanges",value:k()(n.totalExchanges)})}),Object(g.jsx)(N.a,{span:12,children:Object(g.jsx)(w.a,{title:"Total Market Cap",value:k()(n.totalMarketCap)})}),Object(g.jsx)(N.a,{span:12,children:Object(g.jsx)(w.a,{title:"Total 24h Volume",value:k()(n.total24hVolume)})}),Object(g.jsx)(N.a,{span:12,children:Object(g.jsx)(w.a,{title:"Total Markets",value:k()(n.totalMarkets)})})]}),Object(g.jsxs)("div",{className:"home-heading-container",children:[Object(g.jsx)(F,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(g.jsx)(F,{level:3,className:"show-more",children:Object(g.jsx)(b.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(g.jsx)(W,{simplified:!0}),Object(g.jsxs)("div",{className:"home-heading-container",children:[Object(g.jsx)(F,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(g.jsx)(F,{level:3,className:"show-more",children:Object(g.jsx)(b.b,{to:"/news",children:"Show more"})})]}),Object(g.jsx)(ue,{simplified:!0})]})},L=c(350),H=c(123),$=j.a.Text,Q=L.a.Panel,V=function(){var e,t=D(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(g.jsx)(ve,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)(N.a,{span:6,children:"Exchanges"}),Object(g.jsx)(N.a,{span:6,children:"24h Trade Volume"}),Object(g.jsx)(N.a,{span:6,children:"Markets"}),Object(g.jsx)(N.a,{span:6,children:"Change"})]}),Object(g.jsx)(f.a,{children:n.map((function(e,t){return Object(g.jsx)(N.a,{span:24,children:Object(g.jsx)(L.a,{children:Object(g.jsx)(Q,{showArrow:!1,header:Object(g.jsxs)(f.a,{children:[Object(g.jsxs)(N.a,{span:6,children:[Object(g.jsx)($,{children:Object(g.jsxs)("strong",{children:[e.rank,"."]})}),Object(g.jsx)(o.a,{className:"exchange-image",src:e.iconUrl}),Object(g.jsx)($,{children:Object(g.jsx)("strong",{children:e.name})})]}),Object(g.jsxs)(N.a,{span:6,children:["$",k()(e.volume)]}),Object(g.jsx)(N.a,{span:6,children:k()(e.numberOfMarkets)}),Object(g.jsxs)(N.a,{span:6,children:[k()(e.marketShare),"%"]})]},e.id),children:Object(H.a)(e.description||"")},e.id)})},t)}))})]})},G=c(348),z=c(344),W=function(e){var t,c=e.simplified,a=A(c?10:100),s=a.data,i=a.isFetching,r=Object(n.useState)(null===s||void 0===s||null===(t=s.data)||void 0===t?void 0:t.coins),o=Object(l.a)(r,2),j=o[0],d=o[1],h=Object(n.useState)(""),u=Object(l.a)(h,2),x=u[0],O=u[1];return Object(n.useEffect)((function(){var e,t=null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())}));d(t)}),[s,x]),i?Object(g.jsx)(ve,{}):Object(g.jsxs)(g.Fragment,{children:[!c&&Object(g.jsx)("div",{className:"search-crypto",children:Object(g.jsx)(G.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(g.jsx)(f.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(g.jsx)(N.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(g.jsx)(b.b,{to:"/crypto/".concat(e.id),children:Object(g.jsxs)(z.a,{title:"".concat(e.rank," ").concat(e.name),extra:Object(g.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(g.jsxs)("p",{children:["Price: ",k()(e.price)]}),Object(g.jsxs)("p",{children:["Market Cap: ",k()(e.marketCap)]}),Object(g.jsxs)("p",{children:["Daily Change: ",k()(e.change)," %"]})]})})},e.id)}))})]})},J=c(358),R=c(359),_=c(360),B=c(361),Z=c(124),K=c(362),X=c(197),Y=c(347),ee=c(22),te=j.a.Text,ce=j.a.Title,ae=Y.a.Option,ne=function(){var e,t,c,a,s=Object(ee.f)().coinId,i=Object(n.useState)("7d"),r=Object(l.a)(i,2),o=r[0],j=r[1],d=I(s),h=d.data,b=d.isFetching,u=M({coinId:s,timePeriod:o}).data,x=null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.coin;if(b)return Object(g.jsx)(ve,{});var m=[{title:"Price to USD",value:"$ ".concat(x.price&&k()(x.price)),icon:Object(g.jsx)(J.a,{})},{title:"Rank",value:x.rank,icon:Object(g.jsx)(R.a,{})},{title:"24h Volume",value:"$ ".concat(x.volume&&k()(x.volume)),icon:Object(g.jsx)(_.a,{})},{title:"Market Cap",value:"$ ".concat(x.marketCap&&k()(x.marketCap)),icon:Object(g.jsx)(J.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(k()(x.allTimeHigh.price)),icon:Object(g.jsx)(B.a,{})}],v=[{title:"Number Of Markets",value:x.numberOfMarkets,icon:Object(g.jsx)(O.a,{})},{title:"Number Of Exchanges",value:x.numberOfExchanges,icon:Object(g.jsx)(p.a,{})},{title:"Aprroved Supply",value:x.approvedSupply?Object(g.jsx)(Z.a,{}):Object(g.jsx)(K.a,{}),icon:Object(g.jsx)(X.a,{})},{title:"Total Supply",value:"$ ".concat(k()(x.totalSupply)),icon:Object(g.jsx)(X.a,{})},{title:"Circulating Supply",value:"$ ".concat(k()(x.circulatingSupply)),icon:Object(g.jsx)(X.a,{})}];return Object(g.jsxs)(N.a,{className:"coin-detail-container",children:[Object(g.jsxs)(N.a,{className:"coin-heading-container",children:[Object(g.jsxs)(ce,{level:2,className:"coin-name",children:[null===h||void 0===h||null===(t=h.data)||void 0===t?void 0:t.coin.name," (",null===h||void 0===h||null===(c=h.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(g.jsxs)("p",{children:[x.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(g.jsx)(Y.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return j(e)},children:["24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(g.jsx)(ae,{children:e},e)}))}),Object(g.jsx)(pe,{coinHistory:u,currentPrice:k()(x.price),coinName:x.name}),Object(g.jsxs)(N.a,{className:"stats-container",children:[Object(g.jsxs)(N.a,{className:"coin-value-statistics",children:[Object(g.jsxs)(N.a,{className:"coin-value-statistics-heading",children:[Object(g.jsxs)(ce,{level:3,className:"coin-details-heading",children:[x.name," Value Statistics"]}),Object(g.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),m.map((function(e,t){var c=e.icon,a=e.title,n=e.value;return Object(g.jsxs)(N.a,{className:"coin-stats",children:[Object(g.jsxs)(N.a,{className:"coin-stats-name",children:[Object(g.jsx)(te,{children:c}),Object(g.jsx)(te,{children:a})]}),Object(g.jsx)(te,{className:"stats",children:n})]},t)}))]}),Object(g.jsxs)(N.a,{className:"other-stats-info",children:[Object(g.jsxs)(N.a,{className:"coin-value-statistics-heading",children:[Object(g.jsx)(ce,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(g.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),v.map((function(e,t){var c=e.icon,a=e.title,n=e.value;return Object(g.jsxs)(N.a,{className:"coin-stats",children:[Object(g.jsxs)(N.a,{className:"coin-stats-name",children:[Object(g.jsx)(te,{children:c}),Object(g.jsx)(te,{children:a})]}),Object(g.jsx)(te,{className:"stats",children:n})]},t)}))]})]}),Object(g.jsxs)(N.a,{className:"coin-desc-link",children:[Object(g.jsxs)(f.a,{className:"coin-desc",children:[Object(g.jsxs)(ce,{level:3,className:"coin-details-heading",children:["What is ",x.name,"?"]}),Object(H.a)(x.description)]}),Object(g.jsxs)(N.a,{className:"coin-links",children:[Object(g.jsxs)(ce,{level:3,className:"coin-details-heading",children:[x.name," Links"]}),null===(a=x.links)||void 0===a?void 0:a.map((function(e,t){return Object(g.jsxs)(f.a,{className:"coin-link",children:[Object(g.jsx)(ce,{level:5,className:"link-name",children:e.type}),Object(g.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},t)}))]})]})]})},se=c(187),ie=c.n(se),re={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"".concat("1111111111")},le=Object(S.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(T.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:re}}})}}}),oe=le.useGetCryptoNewsQuery,je=j.a.Text,de=j.a.Title,he=Y.a.Option,be="https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",ue=function(e){var t,c,a=e.simplified,s=Object(n.useState)("Cryptocurrency"),i=Object(l.a)(s,2),r=i[0],j=i[1],d=oe({newsCategory:r,count:a?6:12}).data,h=A(100).data;return(null===d||void 0===d?void 0:d.value)?Object(g.jsxs)(f.a,{gutter:[24,24],children:[!a&&Object(g.jsx)(N.a,{span:24,children:Object(g.jsxs)(Y.a,{showSearch:!0,className:"select-news",placeholder:"Select a crypto",optionFilterProp:"children",onChange:function(e){return j(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(g.jsx)(he,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===h||void 0===h||null===(t=h.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e,t){return Object(g.jsx)(he,{value:e.name,children:e.name},t)}))]})}),null===d||void 0===d?void 0:d.value.map((function(e,t){var c,a,n,s,i,r;return Object(g.jsx)(N.a,{xs:24,sm:12,lg:8,children:Object(g.jsx)(z.a,{hoverable:!0,className:"news-card",children:Object(g.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(g.jsxs)("div",{className:"news-image-container",children:[Object(g.jsx)(de,{level:4,className:"news-title",children:e.name}),Object(g.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||be,alt:"news"})]}),Object(g.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100)," ..."):e.description}),Object(g.jsxs)("div",{className:"provider-container",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(o.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||be,alt:"news"}),Object(g.jsx)(je,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(g.jsx)(je,{children:ie()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(g.jsx)(ve,{})},xe=c(191),Oe=j.a.Title,pe=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j,d;s.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price),i.push(new Date(null===c||void 0===c||null===(d=c.data)||void 0===d?void 0:d.history[r].timestamp).toLocaleDateString())}var h={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(f.a,{className:"chart-header",children:[Object(g.jsxs)(Oe,{level:2,className:"chart-title",children:[n," Price Chart"," "]}),Object(g.jsxs)(N.a,{className:"price-container",children:[Object(g.jsxs)(Oe,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(g.jsxs)(Oe,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(g.jsx)(xe.a,{data:h,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},me=c(342),ve=function(){return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(me.a,{})})},ge=(c(338),c(343)),ye=c(352),fe=function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)("div",{className:"navbar",children:Object(g.jsx)(y,{})}),Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)(ge.a,{children:Object(g.jsx)("div",{className:"routes",children:Object(g.jsxs)(ee.c,{children:[Object(g.jsx)(ee.a,{exact:!0,path:"/",children:Object(g.jsx)(U,{})}),Object(g.jsx)(ee.a,{exact:!0,path:"/exchanges",children:Object(g.jsx)(V,{})}),Object(g.jsx)(ee.a,{exact:!0,path:"/cryptocurrencies",children:Object(g.jsx)(W,{})}),Object(g.jsx)(ee.a,{exact:!0,path:"/crypto/:coinId",children:Object(g.jsx)(ne,{})}),Object(g.jsx)(ee.a,{exact:!0,path:"/news",children:Object(g.jsx)(ue,{})})]})})}),Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsxs)(j.a.Title,{level:5,style:{textAlign:"center",color:"white"},children:["Crypto ",Object(g.jsx)("br",{}),"All rights not reserved."]}),Object(g.jsxs)(ye.b,{children:[Object(g.jsx)(b.b,{to:"/",children:"Home"}),Object(g.jsx)(b.b,{to:"/exchanges",children:"Exchanges"}),Object(g.jsx)(b.b,{to:"/news",children:"News"})]})]})]})]})},Ne=(c(339),c(37)),we=c(29),Ce=c(11),ke=Object(Ce.a)({reducer:(a={},Object(we.a)(a,q.reducerPath,q.reducer),Object(we.a)(a,le.reducerPath,le.reducer),a)});r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(b.a,{basename:"/react-crypto-app",children:Object(g.jsx)(Ne.a,{store:ke,children:Object(g.jsx)(fe,{})})})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.09de112f.chunk.js.map