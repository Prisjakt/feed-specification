"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6527],{8929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(4848),o=n(8453),s=n(5871);const i={},c="Promotion Feeds",l={id:"feeds/promotion/index",title:"Promotion Feeds",description:"Description",source:"@site/docs/feeds/promotion/index.md",sourceDirName:"feeds/promotion",slug:"/feeds/promotion/",permalink:"/feeds/promotion/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delivery",permalink:"/feeds/offer/delivery/"},next:{title:"Promotion File Formats",permalink:"/feeds/promotion/formats/"}},a={},u=[{value:"Description",id:"description",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"promotion-feeds",children:"Promotion Feeds"})}),"\n","\n",(0,r.jsx)(s.A,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Promotion feeds help you automate creation of promotions for your products, this is useful when you have a high volume of promotions and/or when you want to automate integration with us. For smaller volumes or manual handling of promotions, please use our ",(0,r.jsx)(t.a,{href:"https://business.prisjakt.nu",children:"Business Center"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),o=n(4164),s=n(6972),i=n(8774),c=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var f=n(6654),p=n(1312),h=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function j(e){let{href:t,children:n}=e;return(0,g.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",x.cardContainer),children:n})}function v(e){let{href:t,icon:n,title:r,description:s}=e;return(0,g.jsxs)(j,{href:t,children:[(0,g.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),s&&(0,g.jsx)("p",{className:(0,o.A)("text--truncate",x.cardDescription),title:s,children:s})]})}function y(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,g.jsx)(v,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function F(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(w,{item:t});case"category":return(0,g.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,s.$S)();return(0,g.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(b,{...e});const r=(0,s.d1)(t);return(0,g.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(F,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);