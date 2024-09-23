"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8545],{3520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(4848),s=n(8453),i=n(5871);const o={sidebar_position:1},a="Authenticated Feeds",c={id:"infrastructure/auth/index",title:"Authenticated Feeds",description:"Sometimes you want to limit the traffic to your feed or allow only certain actors (like us) to access your data. We support that you publish you feed with authentication and provide us credentials so that our agents can access your feed. Please contact us at support@prisjakt.nu if you wan\xb4t to supply us with credentials.",source:"@site/docs/infrastructure/auth/index.md",sourceDirName:"infrastructure/auth",slug:"/infrastructure/auth/",permalink:"/infrastructure/auth/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/infrastructure/auth/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"http/https",permalink:"/infrastructure/protocols/http"},next:{title:"HTTP Basic Authentication",permalink:"/infrastructure/auth/basic-auth"}},l={},u=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"authenticated-feeds",children:"Authenticated Feeds"})}),"\n","\n",(0,r.jsx)(i.A,{}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes you want to limit the traffic to your feed or allow only certain actors (like us) to access your data. We support that you publish you feed with authentication and provide us credentials so that our agents can access your feed. Please contact us at ",(0,r.jsx)(t.a,{href:"mailto:support@prisjakt.nu",children:"support@prisjakt.nu"})," if you wan\xb4t to supply us with credentials."]}),"\n",(0,r.jsx)(t.admonition,{title:"We use dynamically assigned ip\xb4s",type:"info",children:(0,r.jsx)(t.p,{children:"We do not support a configuration where you allow only certain ips. Our agents are cloud based and spin up and change after load, hence they get dynamically assigned ip addresses that vary."})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(4164),i=n(6972),o=n(8774),a=n(4586);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var p=n(6654),f=n(1312),m=n(1107);const y={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function g(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",y.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:i}=e;return(0,x.jsxs)(g,{href:t,children:[(0,x.jsxs)(m.A,{as:"h2",className:(0,s.A)("text--truncate",y.cardTitle),title:r,children:[n," ",r]}),i&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",y.cardDescription),title:i,children:i})]})}function w(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(b,{item:t});case"category":return(0,x.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(v,{...e});const r=(0,i.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(k,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);