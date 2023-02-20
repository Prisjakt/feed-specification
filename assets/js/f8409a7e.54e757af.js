"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(74588);const i={sidebar_position:1,slug:"/"},s="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Overview",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/overview/"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use This Documentation",id:"how-to-use-this-documentation",level:2},{value:"Found Any Issues?",id:"found-any-issues",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation covers everything related to Prisjakt feed specifications from basics to advanced incremental reading. Explore articles to learn more about accepted formats, supported attributes and good practices when working with data feeds. Prisjakt feed specification enables you to easily integrate your inventory with Prisjakt price comparison engine."),(0,a.kt)("h2",{id:"how-to-use-this-documentation"},"How to Use This Documentation"),(0,a.kt)("p",null,"To get you started we have organized this documentation in the sidebar menu to the left in the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/overview"},"Overview")," section will give you basic terminology, a  quick start guide and some best practices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/examples"},"Example files")," is when you simply want to copy and paste or look at the final end result directly"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields"},"Fields")," contain specifics, error codes or copy & paste examples for each individual field we support"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/terminology"},"Terminology")," is a reference section with terms and definitions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/types-of-feeds"},"Types Of Feeds")," will guide you through the different alternatives you have of providing your inventory to us"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/infrastructure"},"Infrastructure")," has information of how to set up and configure your infrastructure in the best possible way for serving your content to us"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/advanced"},"Advanced")," goes into detail on how to handle the tricky cases and dealing with the layout and formats of your data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/faq"},"FAQ")," has the guidance or answers to the most common questions asked")),(0,a.kt)("admonition",{title:"Search Documentation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the top right corner you will find a search bar that can be used to search this documentation. Typical good things to search for can be:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Field names")," such as ",(0,a.kt)(o.ZP,{name:"gtin",mdxType:"Field"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Error codes")," such as ",(0,a.kt)("inlineCode",{parentName:"li"},"validation_gtin_invalid_check_digit"))),(0,a.kt)("p",{parentName:"admonition"},"But of course you can use any free text you want in order to find what you are looking for.")),(0,a.kt)("h2",{id:"found-any-issues"},"Found Any Issues?"),(0,a.kt)("p",null,"If you find any issues in this documentation such as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spelling or linguistics"),(0,a.kt)("li",{parentName:"ul"},"Content wise (some statement that is wrong)"),(0,a.kt)("li",{parentName:"ul"},"Things that need clarification"),(0,a.kt)("li",{parentName:"ul"},"Layout problems")),(0,a.kt)("p",null,"Please do not hesitate to contact us about it! You can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Prisjakt/feed-specification/issues/new/choose"},"Post an issue")," to us"),(0,a.kt)("li",{parentName:"ul"},"Do a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"},"pull request")," with corrections (much appreciated), all pages have an ",(0,a.kt)("em",{parentName:"li"},"Edit this page")," button referring to it\xb4s source"),(0,a.kt)("li",{parentName:"ul"},"Contact us att ",(0,a.kt)("a",{parentName:"li",href:"mailto:support@prisjakt.nu"},"support@prisjakt.nu"))))}d.isMDXComponent=!0},74588:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:`/fields/${n.name}`,alt:n.name},(0,a.kt)("code",null,n.name)))}i.isMDXComponent=!0}}]);