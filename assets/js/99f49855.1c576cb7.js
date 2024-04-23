"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7398],{51885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(74848),i=n(28453),c=n(5871);const o={},s="Advanced",a={id:"advanced/index",title:"Advanced",description:"The advanced section contains in depth articles of some topics that might need some extra attention in order to get everything right.",source:"@site/docs/advanced/index.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ftp Credentials",permalink:"/infrastructure/auth/ftp-credentials"},next:{title:"File Encoding",permalink:"/advanced/file-encoding"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"advanced",children:"Advanced"}),"\n","\n",(0,r.jsx)(c.A,{}),"\n",(0,r.jsx)(t.p,{children:"The advanced section contains in depth articles of some topics that might need some extra attention in order to get everything right."})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(34164),c=n(84142),o=n(28774),s=n(44586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),c=n.pluralForms.indexOf(i);return r[Math.min(c,r.length-1)]}(n,t,e)}}var h=n(16654),f=n(21312),p=n(51107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(74848);function v(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:c}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(p.A,{as:"h2",className:(0,i.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),c&&(0,x.jsx)("p",{className:(0,i.A)("text--truncate",g.cardDescription),title:c,children:c})]})}function y(e){let{item:t}=e;const n=(0,c.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function A(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(w,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,c.$S)();return(0,x.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(b,{...e});const r=(0,c.d1)(t);return(0,x.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(A,{item:e})},t)))})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);