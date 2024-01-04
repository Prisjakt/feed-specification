"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:11},o="Deprecation Policy",c={unversionedId:"deprecation-policy",id:"deprecation-policy",title:"Deprecation Policy",description:"While we do our best to keep these specifications and behaviours as stable as possible one cannot ignore the fact that the world is constantly changing. We are are adding new features and sometimes we do need to change how we receive parameters.",source:"@site/docs/deprecation-policy.md",sourceDirName:".",slug:"/deprecation-policy",permalink:"/deprecation-policy",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/deprecation-policy.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Feed Management Services",permalink:"/third-party/feed-management-services"},next:{title:"General Exceptions",permalink:"/general-exceptions"}},l={},s=[{value:"Communication Time",id:"communication-time",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deprecation-policy"},"Deprecation Policy"),(0,a.kt)("p",null,"While we do our best to keep these specifications and behaviours as stable as possible one cannot ignore the fact that the world is constantly changing. We are are adding new features and sometimes we do need to change how we receive parameters."),(0,a.kt)("p",null,"Whenever we do changes, we note these changes in the ",(0,a.kt)("a",{parentName:"p",href:"/fields/offer/availability#changelog"},"changelog of each individual field"),", we follow the format of ",(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"keep a changelog")," and the notation contains the following types of changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-added"},"added")," for new features."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-changed"},"changed")," for changes in existing functionality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-deprecated"},"deprecated")," for soon-to-be removed features."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-removed"},"removed")," for now removed features."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-fixed"},"fixed")," for any bug fixes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"cl-pill cl-security"},"security")," in case of vulnerabilities.")),(0,a.kt)("h2",{id:"communication-time"},"Communication Time"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we change or remove existing functionality we will mark this change as deprecated in the field changelog ",(0,a.kt)("strong",{parentName:"li"},"1 month in advance")),(0,a.kt)("li",{parentName:"ul"},"After ",(0,a.kt)("strong",{parentName:"li"},"1 month")," we will release the changes and they will have effect on your data at the next ingestion run")))}d.isMDXComponent=!0}}]);