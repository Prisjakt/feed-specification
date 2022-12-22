"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3749],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:5},o="Best Practices",s={unversionedId:"overview/best-practices",id:"overview/best-practices",title:"Best Practices",description:"Inventory Size",source:"@site/docs/overview/best-practices.md",sourceDirName:"overview",slug:"/overview/best-practices",permalink:"/overview/best-practices",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/overview/best-practices.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/overview/quickstart"},next:{title:"Examples",permalink:"/examples/"}},l={},p=[{value:"Inventory Size",id:"inventory-size",level:2},{value:"Small Feeds &lt; 250 000 Offers",id:"small-feeds--250-000-offers",level:3},{value:"Large Feeds &gt; 250 000 Offers",id:"large-feeds--250-000-offers",level:3},{value:"Format",id:"format",level:2},{value:"Data",id:"data",level:2},{value:"Server Configuration",id:"server-configuration",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"best-practices"},"Best Practices"),(0,n.kt)("h2",{id:"inventory-size"},"Inventory Size"),(0,n.kt)("h3",{id:"small-feeds--250-000-offers"},"Small Feeds < 250 000 Offers"),(0,n.kt)("p",null,"For small and medium businesses we recommend using a ",(0,n.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/feed"},"single file feed")," and adding it in our self-service portal ",(0,n.kt)("a",{parentName:"p",href:"https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center"},"Prisjakt Business Center"),"."),(0,n.kt)("h3",{id:"large-feeds--250-000-offers"},"Large Feeds > 250 000 Offers"),(0,n.kt)("p",null,"For larger feeds and higher update frequencies please look into using a ",(0,n.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/delta-feeds"},"delta feed")," setup. In some cases we're also able to prepare custom integrations for larger enterprise clients. For more information please contact our support at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@prisjakt.nu"},"support@prisjakt.nu"),"."),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("p",null,"If possible, then use ",(0,n.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/file-formats/xml"},"XML")," over CSV. This is because xml is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"More well defined than csv"),(0,n.kt)("li",{parentName:"ul"},"Have better tools to handle ",(0,n.kt)("a",{parentName:"li",href:"/advanced"},"escaping and encoding")," "),(0,n.kt)("li",{parentName:"ul"},"Is easier to read and deal with, especially when it comes to more complex list fields like ",(0,n.kt)("a",{parentName:"li",href:"/fields/shipping"},"shipping"))),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure that you ",(0,n.kt)("a",{parentName:"li",href:"/advanced"},"escape and encode")," your data correctly or use ",(0,n.kt)("a",{parentName:"li",href:"/types-of-feeds/pull/file-formats/xml#use-cdata"},"CDATA"),". Titles, descriptions and other fields with free text information can otherwise easily cause parsing issues"),(0,n.kt)("li",{parentName:"ul"},"Check your datas health by looking at the validation reports in ",(0,n.kt)("a",{parentName:"li",href:"https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center"},"Prisjakt Business Center")," and try to fix all warnings in order to get the most out of our services"),(0,n.kt)("li",{parentName:"ul"},"Ensure that all your urls are ",(0,n.kt)("a",{parentName:"li",href:"/advanced/encoding/url-encode"},"properly formated and encoded"))),(0,n.kt)("admonition",{title:"Do not enter invalid urls",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you enter wrong or invalid urls, our agents will try to retrieve your feed but eventually they will give up. Your feed will then be ",(0,n.kt)("a",{parentName:"p",href:"/infrastructure/auto-disabled-feeds"},"automatically disabled")," and no further attempts will be made to retrieve it until you re-activate it in our ",(0,n.kt)("a",{parentName:"p",href:"https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center"},"Business Center"),".")),(0,n.kt)("h2",{id:"server-configuration"},"Server Configuration"),(0,n.kt)("p",null,"See our section of ",(0,n.kt)("a",{parentName:"p",href:"/infrastructure/web-server-configuration"},"web server configuration")," to properly setup your hosting for an optimal experience"))}c.isMDXComponent=!0}}]);