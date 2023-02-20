"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:12},i="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"How does the Prisjakt Feed relate to Google Merchant Product Specification?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/faq.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Deprecation Policy",permalink:"/deprecation-policy"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("strong",null,"How does the Prisjakt Feed relate to Google Merchant Product Specification?")),(0,n.kt)("p",null,"Prisjakt feed specification is compatible with ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/merchants/answer/7052112?hl=en"},"Google Merchant")," feeds. This means that if you have a Google Product feed, it can be used as a Prisjakt feed. In most cases the opposite is also true, you can use a Prisjakt Feed in systems that supports Google Product Feeds (although we do support some extra fields they may not be used by the other system).")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("strong",null,"How does the Prisjakt Feed relate to Amazon Marketplace Feeds?")),"We support reading feeds formatted according to Amazon Marketplace format but with fewer data mapped than if you use our format."),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("strong",null,"How does the Prisjakt Feed relate to Amazon Deal Feeds?")),"We support reading feeds formatted according to Amazon Deals format but with fewer data mapped than if you use our format."))}u.isMDXComponent=!0}}]);