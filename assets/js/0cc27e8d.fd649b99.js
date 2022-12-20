"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Feeds",s={unversionedId:"types-of-feeds/pull/feed",id:"types-of-feeds/pull/feed",title:"Feeds",description:"A single file feed is a file containing the full inventory of your shop in it\xb4s current state. It\xb4s read by our agents periodically based on you SLA agreement. You can see examples of this type of feeds in the examples section.",source:"@site/docs/types-of-feeds/pull/feed.md",sourceDirName:"types-of-feeds/pull",slug:"/types-of-feeds/pull/feed",permalink:"/docs/types-of-feeds/pull/feed",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/types-of-feeds/pull/feed.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Delta Feeds",permalink:"/docs/types-of-feeds/pull/delta-feeds"},next:{title:"Scraping",permalink:"/docs/types-of-feeds/pull/scraping"}},l={},p=[{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Flow",id:"flow",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feeds"},"Feeds"),(0,a.kt)("p",null,"A single file feed is a file containing the ",(0,a.kt)("em",{parentName:"p"},"full inventory")," of your shop in it\xb4s current state. It\xb4s read by our agents periodically based on you SLA agreement. You can see examples of this type of feeds in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples"},"examples section"),"."),(0,a.kt)("h2",{id:"advantages"},"Advantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simple to setup"),(0,a.kt)("li",{parentName:"ul"},"Full inventory every time")),(0,a.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lots of extra unnecessary work is done (offers that have not updated are still sent and processed)"),(0,a.kt)("li",{parentName:"ul"},"Slow average time for price update (depends on SLA schedule, but in the magnitude of of hours)"),(0,a.kt)("li",{parentName:"ul"},"Not suitable for large volumes (> millions)")),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("mermaid",{value:"%%{init: {'theme':'neutral'}}%%\nsequenceDiagram\n    participant A as Prisjakt Agent\n    participant F as Your Web Server\n\n    loop Periodically according to your SLA\n        A->>F: Requests Feed: <Your Feed Url>\n        F->>A: Responds With Feed\n        A->>A: Ingests Feed\n    end"}))}u.isMDXComponent=!0}}]);