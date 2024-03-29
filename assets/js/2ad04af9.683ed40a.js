"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5874],{5964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=n(4848),i=n(8453),s=n(3514);const c={},o="Product Fields",d={id:"feeds/product/fields/index",title:"Product Fields",description:"These fields are available in Product feeds.",source:"@site/docs/feeds/product/fields/index.md",sourceDirName:"feeds/product/fields",slug:"/feeds/product/fields/",permalink:"/feeds/product/fields/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/fields/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onix For Books XML",permalink:"/feeds/product/formats/onix/"},next:{title:"brand",permalink:"/feeds/product/fields/brand"}},a={},l=[];function u(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"product-fields",children:"Product Fields"}),"\n","\n","\n",(0,r.jsx)(s.A,{}),"\n",(0,r.jsx)(t.p,{children:"These fields are available in Product feeds."})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var r=n(4164),i=n(4142),s=n(8774),c=n(6654),o=n(1312),d=n(1107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",a.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(d.A,{as:"h2",className:(0,r.A)("text--truncate",a.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",a.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(m,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);