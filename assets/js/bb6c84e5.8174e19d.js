"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[640],{88526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453),r=n(3514);const s={},c="Promotion Fields",a={id:"feeds/promotion/fields/index",title:"Promotion Fields",description:"These fields are available in Promotion feeds.",source:"@site/docs/feeds/promotion/fields/index.md",sourceDirName:"feeds/promotion/fields",slug:"/feeds/promotion/fields/",permalink:"/feeds/promotion/fields/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/fields/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Promotion Feed XML",permalink:"/feeds/promotion/formats/google_merchant_promotion_xml"},next:{title:"coupon_value_type",permalink:"/feeds/promotion/fields/coupon_value_type"}},d={},l=[];function m(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"promotion-fields",children:"Promotion Fields"}),"\n","\n","\n",(0,i.jsx)(r.A,{}),"\n",(0,i.jsx)(t.p,{children:"These fields are available in Promotion feeds."})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var i=n(34164),o=n(84142),r=n(28774),s=n(16654),c=n(21312),a=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(74848);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(r.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:r}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),r&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function u(e){let{item:t}=e;const n=(0,o.Nr)(t);return n?(0,l.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return(0,l.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,l.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const r=(0,o.d1)(t);return(0,l.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);