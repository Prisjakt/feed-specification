"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9967],{8077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453),s=n(3514);const o={},a="Third Party",c={id:"third-party/index",title:"Third Party",description:"Welcome to the Prisjakt feed integration guide. Here, you can explore the various methods to connect your inventory with Prisjakt, each tailored to different needs. Our documentation categorizes the integration methods as follows:",source:"@site/docs/third-party/index.md",sourceDirName:"third-party",slug:"/third-party/",permalink:"/third-party/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/third-party/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Escaping Data",permalink:"/advanced/csv/escaping-data"},next:{title:"Affiliate Networks",permalink:"/third-party/affiliate-networks"}},d={},l=[];function h(e){const t={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"third-party",children:"Third Party"}),"\n","\n","\n",(0,r.jsx)(s.A,{}),"\n",(0,r.jsx)(t.p,{children:"Welcome to the Prisjakt feed integration guide. Here, you can explore the various methods to connect your inventory with Prisjakt, each tailored to different needs. Our documentation categorizes the integration methods as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Afflite Networks"})," Affiliate networks are platforms that connect merchants with affiliate marketers. Integrating with these networks can expand your reach and help track the performance of your products on various platforms."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"E-commerce Integrations"})," Direct e-commerce integrations involve enabling certain settings or installing apporpriate extensions. The most popular extensions generate XML or CSV feeds that can be shared with Prisjakt or other channels."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Feed Management Services"})," Feed management services offer a more hands-off approach, handling the complexities of feed optimization and updates. They are suitable for businesses seeking expert management of their product feeds."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),i=n(4142),s=n(8774),o=n(6654),a=n(1312),c=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function h(e){let{href:t,children:n}=e;return(0,l.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:i,description:s}=e;return(0,l.jsxs)(h,{href:t,children:[(0,l.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(g,{...e});const s=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(m,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);