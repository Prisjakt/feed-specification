"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return r?i.createElement(m,a(a({ref:t},f),{},{components:r})):i.createElement(m,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(87462),o=(r(67294),r(3905));const n={sidebar_position:4},a="Prisjakt Specific Fields",s={unversionedId:"terminology/prisjakt-specific-fields",id:"terminology/prisjakt-specific-fields",title:"Prisjakt Specific Fields",description:"Offer feeds",source:"@site/docs/terminology/prisjakt-specific-fields.md",sourceDirName:"terminology",slug:"/terminology/prisjakt-specific-fields",permalink:"/terminology/prisjakt-specific-fields",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/terminology/prisjakt-specific-fields.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Validation Severity Levels",permalink:"/terminology/severity-levels"},next:{title:"Types of Feeds",permalink:"/types-of-feeds/"}},l={},p=[{value:"Offer feeds",id:"offer-feeds",level:2},{value:"Promotion feeds",id:"promotion-feeds",level:2}],f={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prisjakt-specific-fields"},"Prisjakt Specific Fields"),(0,o.kt)("h2",{id:"offer-feeds"},"Offer feeds"),(0,o.kt)("p",null,"Most fields in use in our feed are also part of the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/merchants/answer/7052112?hl=en"},"Google Product Data Specification"),", and as such these fields will be usable for other systems that support Google Product feeds."),(0,o.kt)("p",null,"But in order to be able to provide you with extra functionality we sometimes add extra fields that can be used for an even better experience at Prisjakt for your customers."),(0,o.kt)("p",null,"Currently, our Prisjakt specific fields are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fields/offer/prisjakt_id"},"prisjakt_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fields/offer/member_price"},"member_price"))),(0,o.kt)("p",null,"The fields are also defined in ",(0,o.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/file-formats/xml#prisjakt-xml-namespace"},"our xml namespace")),(0,o.kt)("h2",{id:"promotion-feeds"},"Promotion feeds"),(0,o.kt)("p",null,"Most fields in use in our feed are also part of the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/merchants/answer/2906014?hl=en"},"Google Promotions Feed Specification"),", and as such these fields will be usable for other systems that support Google Product feeds."),(0,o.kt)("p",null,"But in order to be able to provide you with extra functionality we sometimes add extra fields that can be used for an even better experience at Prisjakt for your customers."),(0,o.kt)("p",null,"Currently, our Prisjakt specific fields are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fields/promotion/promotion_page_link"},"promotion_page_link"))),(0,o.kt)("p",null,"The fields are also defined in ",(0,o.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/file-formats/promotions-xml#prisjakt-promotions-xml-namespace"},"our promotions feeds xml namespace")))}c.isMDXComponent=!0}}]);