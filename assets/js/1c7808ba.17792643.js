"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7955],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=s(r),d=i,h=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(h,o(o({ref:e},p),{},{components:r})):n.createElement(h,o({ref:e},p))}));function d(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6419:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={},o="HTTP Digest Authentication",c={unversionedId:"infrastructure/auth/digest-authentication",id:"infrastructure/auth/digest-authentication",title:"HTTP Digest Authentication",description:"We support that you put your feeds protected behind HTTP digest authentication, please contact us at support@prisjakt.nu in order to provide us with credentials for your feed.",source:"@site/docs/infrastructure/auth/digest-authentication.md",sourceDirName:"infrastructure/auth",slug:"/infrastructure/auth/digest-authentication",permalink:"/infrastructure/auth/digest-authentication",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/infrastructure/auth/digest-authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Basic Authentication",permalink:"/infrastructure/auth/basic-auth"},next:{title:"Ftp Credentials",permalink:"/infrastructure/auth/ftp-credentials"}},u={},s=[{value:"References",id:"references",level:2}],p={toc:s};function l(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-digest-authentication"},"HTTP Digest Authentication"),(0,i.kt)("p",null,"We support that you put your feeds protected behind ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digest_access_authentication"},"HTTP digest authentication"),", please contact us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@prisjakt.nu"},"support@prisjakt.nu")," in order to provide us with credentials for your feed."),(0,i.kt)("admonition",{title:"Use https",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order to make use of http authentication schemes, your feeds should be served over ",(0,i.kt)("a",{parentName:"p",href:"/infrastructure/protocols/http#use-https"},"https"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc2617"},"HTTP Authentication: Basic and Digest Access Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Digest_access_authentication"},"Wikipedia: Digest access authentication"))))}l.isMDXComponent=!0}}]);