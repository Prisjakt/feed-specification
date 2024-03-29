"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6527],{7394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),r=n(8453),o=n(3514);const s={},c="Promotion Feeds",a={id:"feeds/promotion/index",title:"Promotion Feeds",description:"Description",source:"@site/docs/feeds/promotion/index.md",sourceDirName:"feeds/promotion",slug:"/feeds/promotion/",permalink:"/feeds/promotion/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"title",permalink:"/feeds/offer/fields/title"},next:{title:"Promotion File Formats",permalink:"/feeds/promotion/formats/"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Delivery",id:"delivery",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"promotion-feeds",children:"Promotion Feeds"}),"\n","\n","\n",(0,i.jsx)(o.A,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Promotion feeds help you automate creation of promotions for your products, this is useful when you have a high volume of promotions and/or when you want to automate integration with us. For smaller volumes or manual handling of promotions, please use our ",(0,i.jsx)(t.a,{href:"https://business.prisjakt.nu",children:"Business Center"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"delivery",children:"Delivery"}),"\n",(0,i.jsx)(t.p,{children:"To send us a promotion feed, these are the main steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create/generate a feed (or let your ",(0,i.jsx)(t.a,{href:"/third-party/e-commerce-integrations",children:"E-commerce tool"})," generate it for you"]}),"\n",(0,i.jsxs)(t.li,{children:["Send the url to ",(0,i.jsx)(t.a,{href:"mailto:support@prisjakt.nu",children:"support@prisjakt.nu"})," and we will set it up for you"]}),"\n",(0,i.jsx)(t.li,{children:"Then we will then fetch the feed from the url you provided on a scheduled basis"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var i=n(4164),r=n(4142),o=n(8774),s=n(6654),c=n(1312),a=n(1107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);