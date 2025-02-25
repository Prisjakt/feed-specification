"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2614],{65773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(74848),s=r(28453),o=r(5871);const i={},a="Offer File Formats",c={id:"feeds/offer/formats/index",title:"Offer File Formats",description:"While we support a number of file formats, we recommend using the Prisjakt XML format for the best performance, most features and the least risk of errors.",source:"@site/docs/feeds/offer/formats/index.md",sourceDirName:"feeds/offer/formats",slug:"/feeds/offer/formats/",permalink:"/feeds/offer/formats/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/formats/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Offer Feeds",permalink:"/feeds/offer/"},next:{title:"Prisjakt XML",permalink:"/feeds/offer/formats/prisjakt_xml/"}},l={},f=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"offer-file-formats",children:"Offer File Formats"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["While we support a number of file formats, we recommend using the ",(0,n.jsx)(t.a,{href:"/feeds/offer/formats/prisjakt_xml/",children:"Prisjakt XML"})," format for the best performance, most features and the least risk of errors."]})}),"\n","\n",(0,n.jsx)(o.A,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5871:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(96540),s=r(34164),o=r(26972),i=r(28774),a=r(44586);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const f={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),f}}),[e])}function u(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}var m=r(16654),h=r(21312),p=r(51107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=r(74848);function j(e){let{href:t,children:r}=e;return(0,g.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:r})}function k(e){let{href:t,icon:r,title:n,description:o}=e;return(0,g.jsxs)(j,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:n,children:[r," ",n]}),o&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:o,children:o})]})}function w(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=u();return t=>e(t,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,g.jsx)(k,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function F(e){let{item:t}=e;const r=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,g.jsx)(k,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(F,{item:t});case"category":return(0,g.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.$S)();return(0,g.jsx)(N,{items:r.items,className:t})}function N(e){const{items:t,className:r}=e;if(!t)return(0,g.jsx)(y,{...e});const n=(0,o.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(b,{item:e})},t)))})}}}]);