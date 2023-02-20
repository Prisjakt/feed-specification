"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:5},s="HTTP REST",i={unversionedId:"types-of-feeds/push/rest",id:"types-of-feeds/push/rest",title:"HTTP REST",description:"Push based methods are not yet supported but are being considered, please contact us if you are interested in these ways of delivery and would like to be a pilot.",source:"@site/docs/types-of-feeds/push/rest.md",sourceDirName:"types-of-feeds/push",slug:"/types-of-feeds/push/rest",permalink:"/types-of-feeds/push/rest",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/types-of-feeds/push/rest.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Message Protocols",permalink:"/types-of-feeds/push/message"},next:{title:"Infrastructure",permalink:"/infrastructure/"}},p={},u=[{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-rest"},"HTTP REST"),(0,o.kt)("admonition",{title:"Proposals",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Push based methods are not yet supported but are being considered, please contact us if you are interested in these ways of delivery and would like to be a pilot.")),(0,o.kt)("p",null,"In this approach you would send a REST request to us on each change of your offers."),(0,o.kt)("h2",{id:"advantages"},"Advantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Direct updates of offers")),(0,o.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Would require deep integration with your shops system$$")))}l.isMDXComponent=!0}}]);