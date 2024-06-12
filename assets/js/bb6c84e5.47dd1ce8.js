"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[640],{88526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(74848),r=n(28453),i=n(5871);const s={},c="Promotion Fields",l={id:"feeds/promotion/fields/index",title:"Promotion Fields",description:"These fields are available in Promotion feeds.",source:"@site/docs/feeds/promotion/fields/index.md",sourceDirName:"feeds/promotion/fields",slug:"/feeds/promotion/fields/",permalink:"/feeds/promotion/fields/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/fields/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Promotion Feed XML",permalink:"/feeds/promotion/formats/google_merchant_promotion_xml"},next:{title:"coupon_value_type",permalink:"/feeds/promotion/fields/coupon_value_type"}},a={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"promotion-fields",children:"Promotion Fields"}),"\n","\n",(0,o.jsx)(i.A,{}),"\n",(0,o.jsx)(t.p,{children:"These fields are available in Promotion feeds."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(96540),r=n(34164),i=n(84142),s=n(28774),c=n(44586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return o[Math.min(i,o.length-1)]}(n,t,e)}}var f=n(16654),p=n(21312),h=n(51107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(74848);function j(e){let{href:t,children:n}=e;return(0,g.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",x.cardContainer),children:n})}function v(e){let{href:t,icon:n,title:o,description:i}=e;return(0,g.jsxs)(j,{href:t,children:[(0,g.jsxs)(h.A,{as:"h2",className:(0,r.A)("text--truncate",x.cardTitle),title:o,children:[n," ",o]}),i&&(0,g.jsx)("p",{className:(0,r.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function b(e){let{item:t}=e;const n=(0,i.Nr)(t),o=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(v,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function F(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(y,{item:t});case"category":return(0,g.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,i.$S)();return(0,g.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(w,{...e});const o=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(F,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);