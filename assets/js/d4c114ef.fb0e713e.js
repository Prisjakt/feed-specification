"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4541],{8554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(4848),r=s(8453),i=s(5871);const o={sidebar_position:1},a="XML",c={id:"advanced/xml/index",title:"index",description:"Overview",source:"@site/docs/advanced/xml/index.md",sourceDirName:"advanced/xml",slug:"/advanced/xml/",permalink:"/advanced/xml/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/xml/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Url Encoding",permalink:"/advanced/url-encode"},next:{title:"CDATA in XML Files",permalink:"/advanced/xml/cdata"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Namespace Priority When Parsed",id:"namespace-priority-when-parsed",level:3},{value:"Recommendations",id:"recommendations",level:2},{value:"Use UTF-8",id:"use-utf-8",level:3},{value:"Use CDATA",id:"use-cdata",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"xml",children:"XML"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/XML",children:"XML"})," stands for e",(0,t.jsx)(n.strong,{children:"X"}),"tensinble ",(0,t.jsx)(n.strong,{children:"M"}),"arkup ",(0,t.jsx)(n.strong,{children:"L"}),"anguage. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner."]}),"\n",(0,t.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,t.jsxs)(n.p,{children:["A Prisjakt offer feed should use two namespaces, the ",(0,t.jsx)(n.code,{children:"g"})," namespace which most fields belong to that are defined by the Google Product Specification and then the ",(0,t.jsx)(n.code,{children:"pj"})," namespace which contains some ",(0,t.jsx)(n.a,{href:"/feeds/offer/formats/prisjakt_xml/#prisjakt-specific-fields",children:"additional Prisjakt specific fields"})," defined by us."]}),"\n",(0,t.jsxs)(n.p,{children:["Offers: ",(0,t.jsx)(n.a,{href:"https://schema.prisjakt.nu/ns/1.0",children:"https://schema.prisjakt.nu/ns/1.0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Promotions: ",(0,t.jsx)(n.a,{href:"https://schema.prisjakt.nu/ns/promotions-1.0",children:"https://schema.prisjakt.nu/ns/promotions-1.0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<rss xmlns:pj="https://schema.prisjakt.nu/ns/promotions-1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n'})}),"\n",(0,t.jsx)(n.h3,{id:"namespace-priority-when-parsed",children:"Namespace Priority When Parsed"}),"\n",(0,t.jsx)(n.p,{children:"If multiple fields with the same name but different namespaces exist, the field will be parsed with the following priority:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pj:"})," first eg. ",(0,t.jsx)(n.code,{children:"<pj:some_field>Some pj field</pj:some_field>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"g:"})," second eg. ",(0,t.jsx)(n.code,{children:"<g:some_field>Gome g field</g:some_field>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"no namespace"})," third eg. ",(0,t.jsx)(n.code,{children:"<some_field>Some field</some_field>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"other/unknown"})," in undefined order eg. ",(0,t.jsx)(n.code,{children:"<xyz:some_field>Some xyz field</xyz:some_field>"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,t.jsx)(n.h3,{id:"use-utf-8",children:"Use UTF-8"}),"\n",(0,t.jsxs)(n.p,{children:["All XML feeds should start with the following header and the files should be properly ",(0,t.jsx)(n.a,{href:"/advanced/file-encoding",children:"UTF-8 encoded"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Do not use ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Control_character",children:"control characters"})," in feed file. We support some of them trying to follow ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Valid_characters_in_XML",children:"XML spec"})," but not guarantee to fully support it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<?xml version='1.0' encoding='UTF-8'?>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-cdata",children:"Use CDATA"}),"\n",(0,t.jsxs)(n.p,{children:["You should lower the risk of your data causing xml parsers to fail because of invalid data by encoding your data correctly. Take a look on our ",(0,t.jsx)(n.a,{href:"/advanced/xml/cdata",children:"CDATA"})," article to achieve this."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5871:(e,n,s)=>{s.d(n,{A:()=>A});var t=s(6540),r=s(4164),i=s(6972),o=s(8774),a=s(4586);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((n=>e.includes(n)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function h(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:l(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),d}}),[e])}function u(){const e=h();return{selectMessage:(n,s)=>function(e,n,s){const t=e.split("|");if(1===t.length)return t[0];t.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const r=s.select(n),i=s.pluralForms.indexOf(r);return t[Math.min(i,t.length-1)]}(s,n,e)}}var m=s(6654),p=s(1312),f=s(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var j=s(4848);function g(e){let{href:n,children:s}=e;return(0,j.jsx)(o.A,{href:n,className:(0,r.A)("card padding--lg",x.cardContainer),children:s})}function v(e){let{href:n,icon:s,title:t,description:i}=e;return(0,j.jsxs)(g,{href:n,children:[(0,j.jsxs)(f.A,{as:"h2",className:(0,r.A)("text--truncate",x.cardTitle),title:t,children:[s," ",t]}),i&&(0,j.jsx)("p",{className:(0,r.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function w(e){let{item:n}=e;const s=(0,i.Nr)(n),t=function(){const{selectMessage:e}=u();return n=>e(n,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return s?(0,j.jsx)(v,{href:s,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function k(e){let{item:n}=e;const s=(0,m.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.cC)(n.docId??void 0);return(0,j.jsx)(v,{href:n.href,icon:s,title:n.label,description:n.description??t?.description})}function y(e){let{item:n}=e;switch(n.type){case"link":return(0,j.jsx)(k,{item:n});case"category":return(0,j.jsx)(w,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function b(e){let{className:n}=e;const s=(0,i.$S)();return(0,j.jsx)(A,{items:s.items,className:n})}function A(e){const{items:n,className:s}=e;if(!n)return(0,j.jsx)(b,{...e});const t=(0,i.d1)(n);return(0,j.jsx)("section",{className:(0,r.A)("row",s),children:t.map(((e,n)=>(0,j.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,j.jsx)(y,{item:e})},n)))})}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);