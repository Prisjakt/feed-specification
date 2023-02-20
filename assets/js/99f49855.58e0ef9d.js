"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),a=n(86010),i=n(53438),c=n(39960),o=n(13919),l=n(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function u(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},38967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const c={},o="Advanced",l={unversionedId:"advanced/index",id:"advanced/index",title:"Advanced",description:"The advanced section contains in depth articles of some topics that might need some extra attention in order to get everything right.",source:"@site/docs/advanced/index.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/advanced/",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FeedOptimise",permalink:"/third-party/feedoptimise"},next:{title:"Encoding",permalink:"/advanced/encoding/"}},s={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced"},"Advanced"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("p",null,"The advanced section contains in depth articles of some topics that might need some extra attention in order to get everything right."))}p.isMDXComponent=!0}}]);