"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3688],{4835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(74848),o=r(28453),s=r(3514);const i={},c="Product File Formats",a={id:"feeds/product/formats/index",title:"Product File Formats",description:"While we support a number of file formats, we recommend using the Google Manufacturer XML format for the best performance, most features and the least risk of errors.",source:"@site/docs/feeds/product/formats/index.md",sourceDirName:"feeds/product/formats",slug:"/feeds/product/formats/",permalink:"/feeds/product/formats/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/formats/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Product Feeds",permalink:"/feeds/product/"},next:{title:"Google Manufacturer XML",permalink:"/feeds/product/formats/google_manufacturer_xml/"}},d={},l=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"product-file-formats",children:"Product File Formats"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["While we support a number of file formats, we recommend using the ",(0,n.jsx)(t.a,{href:"/feeds/product/formats/google_manufacturer_xml/",children:"Google Manufacturer XML"})," format for the best performance, most features and the least risk of errors."]})}),"\n","\n","\n",(0,n.jsx)(s.A,{})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var n=r(34164),o=r(84142),s=r(28774),i=r(16654),c=r(21312),a=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=r(74848);function u(e){let{href:t,children:r}=e;return(0,l.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,l.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const r=(0,o.Nr)(t);return r?(0,l.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,l.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,l.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,l.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);