"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5874],{35964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453),o=n(5871);const i={},c="Product Fields",l={id:"feeds/product/fields/index",title:"Product Fields",description:"These fields are available in Product feeds.",source:"@site/docs/feeds/product/fields/index.md",sourceDirName:"feeds/product/fields",slug:"/feeds/product/fields/",permalink:"/feeds/product/fields/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/fields/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onix For Books XML",permalink:"/feeds/product/formats/onix/"},next:{title:"brand",permalink:"/feeds/product/fields/brand"}},a={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"product-fields",children:"Product Fields"}),"\n","\n",(0,r.jsx)(o.A,{}),"\n",(0,r.jsx)(t.p,{children:"These fields are available in Product feeds."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),o=n(84142),i=n(28774),c=n(44586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function f(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}var p=n(16654),m=n(21312),h=n(51107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(74848);function j(e){let{href:t,children:n}=e;return(0,g.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:r,description:o}=e;return(0,g.jsxs)(j,{href:t,children:[(0,g.jsxs)(h.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),o&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:o,children:o})]})}function F(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=f();return t=>e(t,(0,m.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function k(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,g.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(k,{item:t});case"category":return(0,g.jsx)(F,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,o.$S)();return(0,g.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(w,{...e});const r=(0,o.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(v,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);