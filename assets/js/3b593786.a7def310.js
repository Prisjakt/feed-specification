"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Web Server Configuration",s={unversionedId:"infrastructure/web-server-configuration",id:"infrastructure/web-server-configuration",title:"Web Server Configuration",description:"For optimal results it is preferable if you host your feeds with the support for the following features and configuration, please see your web server/cloud provider documentation of how to set them up.",source:"@site/docs/infrastructure/web-server-configuration.md",sourceDirName:"infrastructure",slug:"/infrastructure/web-server-configuration",permalink:"/infrastructure/web-server-configuration",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/infrastructure/web-server-configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Infrastructure",permalink:"/infrastructure/"},next:{title:"Transport Protocols",permalink:"/infrastructure/protocols/"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Feed Generation",id:"feed-generation",level:2},{value:"Do",id:"do",level:3},{value:"Do Not",id:"do-not",level:3},{value:"Non Public Feeds",id:"non-public-feeds",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-server-configuration"},"Web Server Configuration"),(0,o.kt)("p",null,"For optimal results it is preferable if you host your feeds with the support for the following features and configuration, please see your web server/cloud provider documentation of how to set them up."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/HTTP_compression"},"gzip compression")," and send a correct gzip header"),", this will reduce the amount of data sent and improve handling time as well")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure that you ",(0,o.kt)("strong",{parentName:"p"},"send a correct ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length"},"content-length")," header"),", this makes it easier for us to ensure that we have ingested your whole feed and not gotten aborted by any network issues or anything similar, our retry policies will also behave better")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Disable bot protection")," for our ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"user agent"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"feed-ingestion-service"),", some bot protection systems will cause issues for us when we read your feed. If possible, then allow requests from our user agent to come through"),(0,o.kt)("admonition",{parentName:"li",title:"We use dynamically assigned ip\xb4s",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We do not support a configuration where you disable bot protection for specific ip addresses. Our agents are cloud based and spin up and change after load, hence they get dynamically assigned ip addresses that vary."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Send a proper ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"},"etag")," header")," this will save both us and you work and costs of data transfer since we can then detect if there is any changes to your feed or not without having to download it")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"https")," with a valid certificate as transport protocol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Allow resuming downloads")," of files by supporting the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges"},"accept-ranges")," header"))),(0,o.kt)("h2",{id:"feed-generation"},"Feed Generation"),(0,o.kt)("h3",{id:"do"},"Do"),(0,o.kt)("p",null,"We recommend that you generate the files on your backend in a matter ",(0,o.kt)("strong",{parentName:"p"},"you control"),", either scheduled or upon changes to your data. Then host the resulting files (either ",(0,o.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/feed"},"full feed")," or ",(0,o.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/delta-feeds"},"delta files"),") via your server for us to fetch."),(0,o.kt)("h3",{id:"do-not"},"Do Not"),(0,o.kt)("p",null,"We do ",(0,o.kt)("strong",{parentName:"p"},"not")," recommend that you dynamically generate your feed files when a request is incoming."),(0,o.kt)("p",null,"The reasons for this is that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Over time your inventory might grow and this generation time increases"),(0,o.kt)("li",{parentName:"ul"},"Your system will vurnerable to DDoS attacks since it would be easy to send multiple requests to this feed generation URL"),(0,o.kt)("li",{parentName:"ul"},"We have a timeout of ",(0,o.kt)("inlineCode",{parentName:"li"},"120s"),", if we do not recieve the first byte within this time period, we will abort the attempt")),(0,o.kt)("h2",{id:"non-public-feeds"},"Non Public Feeds"),(0,o.kt)("p",null,"If you wan\xb4t to avoid to publish your feeds public we do support various ",(0,o.kt)("a",{parentName:"p",href:"/infrastructure/auth"},"authentication methods")," in order to protect your feeds."))}c.isMDXComponent=!0}}]);