"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3223],{8238:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var i=s(74848),n=s(28453),r=s(11470),a=s(19365),t=s(18175),c=(s(89898),s(28758)),d=s(98995);const o={description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](/fields/offer/sale_price_effective_date) attribute should be used."},u="sale_price",h={id:"fields/offer/sale_price",title:"sale_price",description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used.",source:"@site/docs/fields/offer/sale_price.md",sourceDirName:"fields/offer",slug:"/fields/offer/sale_price",permalink:"/fields/offer/sale_price",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/sale_price.md",tags:[],version:"current",frontMatter:{description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used."},sidebar:"tutorialSidebar",previous:{title:"promotion_id",permalink:"/fields/offer/promotion_id"},next:{title:"sale_price_effective_date",permalink:"/fields/offer/sale_price_effective_date"}},p={},x=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function m(e){const l={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:s}=l;return s||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"sale_price",children:"sale_price"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(l.p,{children:["It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or ",(0,i.jsx)(l.a,{href:"/fields/offer/sale_price_effective_date",children:(0,i.jsx)(l.code,{children:"sale_price_effective_date"})})," attribute should be used."]}),"\n",(0,i.jsx)(l.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,i.jsx)(l.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsale_price -- overrides if exist  --- price\n  click price "/fields/offer/price" "price" _blank\nsale_price -- overridden by if member  --- member_price\n  click member_price "/fields/offer/member_price" "member_price" _blank\nsale_price -- can be enhanced by  --- sale_price_effective_date\n  click sale_price_effective_date "/fields/offer/sale_price_effective_date" "sale_price_effective_date" _blank\n\n  click sale_price "/fields/offer/sale_price" "sale_price" _blank\n  style sale_price fill:#4cb3d4'}),"\n",(0,i.jsx)(l.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Must be a number (value) followed by a space and a currency (unit)"}),"\n",(0,i.jsxs)(l.li,{children:["Number ",(0,i.jsx)(l.em,{children:"may"})," have ",(0,i.jsx)(l.strong,{children:"two decimals"}),", separated by a ",(0,i.jsx)(l.code,{children:"."})," (dot)"]}),"\n",(0,i.jsxs)(l.li,{children:["Currency must be three upper case characters and a valid ",(0,i.jsx)(l.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})," currency"]}),"\n",(0,i.jsxs)(l.li,{children:["Zero prices are ",(0,i.jsx)(l.strong,{children:"not"})," allowed"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(l.h3,{id:"do",children:"Do"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Price sent in feed should be the same as the price value on your product page"}),"\n",(0,i.jsx)(l.li,{children:"Currency sent in feed should match currency on your product page"}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["Do ",(0,i.jsx)(l.strong,{children:"not"})," include extra charges in the cost (such as shipping cost)"]}),"\n",(0,i.jsxs)(l.li,{children:["Do ",(0,i.jsx)(l.strong,{children:"not"})," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,i.jsx)(l.code,{children:"10000.50 SEK"}),")"]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"example-values",children:"Example Values"}),"\n",(0,i.jsxs)(l.p,{children:["Here are examples of how a valid ",(0,i.jsx)(l.em,{children:"sale_price"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,i.jsx)(l.admonition,{title:"Valid Value",type:"tip",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n"})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>100 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>SEK 100</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>99,99 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>10,000.00 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>10 000.00 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>10.000 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>1.144.000 SEK</g:sale_price>\n"})})]})]})]}),(0,i.jsxs)(a.A,{value:"valid_csv",label:"CSV",children:[(0,i.jsx)(l.admonition,{title:"Valid Value",type:"tip",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n99.99 SEK\n"})})}),(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n99.99 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n100 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\nSEK 100\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:'sale_price\n"99,99 SEK"\n'})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:'sale_price\n"10,000.00 SEK"\n'})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n10 000.00 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n10.000 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n1.144.000 SEK\n"})})]})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,i.jsxs)(l.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.jsx)(l.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>1000</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>5.00 dollars</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>5.00</g:sale_price>\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>foo SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>SEK</g:sale_price>\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>-10 SEK</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>0 SEK</g:sale_price>\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>$100</g:sale_price>\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-xml",children:"<g:sale_price>100$</g:sale_price>\n"})})]})]}),(0,i.jsxs)(a.A,{value:"invalid_csv",label:"CSV",children:[(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n1000\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n5.00 dollars\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n5.00\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\nfoo SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\nSEK\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n10.0.00.00 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n10.0.00.00 SEK\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n-10 SEK\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n0 SEK\n"})})]}),(0,i.jsxs)(l.admonition,{type:"danger",children:[(0,i.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n$100\n"})}),(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-csv",children:"sale_price\n100$\n"})})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{style:{textAlign:"right"},children:(0,i.jsx)(l.strong,{children:"Property"})}),(0,i.jsx)(l.th,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"Value"})}),(0,i.jsx)(l.th,{style:{textAlign:"left"},children:(0,i.jsx)(l.strong,{children:"Description"})})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{style:{textAlign:"right"},children:"Data Type"}),(0,i.jsx)(l.td,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"price"})}),(0,i.jsx)(l.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{style:{textAlign:"right"},children:"Nested"}),(0,i.jsx)(l.td,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"False"})}),(0,i.jsx)(l.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,i.jsx)(l.td,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"False"})}),(0,i.jsx)(l.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,i.jsx)(l.td,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"False"})}),(0,i.jsx)(l.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,i.jsx)(l.td,{style:{textAlign:"center"},children:(0,i.jsx)(l.strong,{children:"0"})}),(0,i.jsx)(l.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsx)(c.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,i.jsx)(l.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://support.google.com/merchants/answer/6324471",children:"Google Merchant Specification"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"Wikipedia on ISO 4217 Currency codes"})}),"\n"]})]})}function g(e={}){const{wrapper:l}={...(0,n.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},89898:(e,l,s)=>{s.d(l,{Ay:()=>a});var i=s(74848),n=s(28453);function r(e){return(0,i.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,i.jsx)("code",{children:e.name})})}function a(e={}){const{wrapper:l}={...(0,n.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},98995:(e,l,s)=>{s.d(l,{Ay:()=>a});var i=s(74848),n=s(28453);function r(e){const l={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,i.jsx)(l.admonition,{title:"Optional Field",type:"info",children:(0,i.jsxs)(l.p,{children:["This field is ",(0,i.jsx)(l.a,{href:"/terminology/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:l}={...(0,n.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},19365:(e,l,s)=>{s.d(l,{A:()=>a});s(96540);var i=s(34164);const n={tabItem:"tabItem_Ymn6"};var r=s(74848);function a(e){let{children:l,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,a),hidden:s,children:l})}},11470:(e,l,s)=>{s.d(l,{A:()=>y});var i=s(96540),n=s(34164),r=s(23104),a=s(56347),t=s(205),c=s(57485),d=s(31682),o=s(89466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:l,children:s}=e;return(0,i.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:s,attributes:i,default:n}}=e;return{value:l,label:s,attributes:i,default:n}}))}(s);return function(e){const l=(0,d.X)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,s])}function p(e){let{value:l,tabValues:s}=e;return s.some((e=>e.value===l))}function x(e){let{queryString:l=!1,groupId:s}=e;const n=(0,a.W6)(),r=function(e){let{queryString:l=!1,groupId:s}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:l,groupId:s});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(n.location.search);l.set(r,e),n.replace({...n.location,search:l.toString()})}),[r,n])]}function m(e){const{defaultValue:l,queryString:s=!1,groupId:n}=e,r=h(e),[a,c]=(0,i.useState)((()=>function(e){let{defaultValue:l,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!p({value:l,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:l,tabValues:r}))),[d,u]=x({queryString:s,groupId:n}),[m,g]=function(e){let{groupId:l}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(l),[n,r]=(0,o.Dv)(s);return[n,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),j=(()=>{const e=d??m;return p({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function _(e){let{className:l,block:s,selectedValue:i,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const l=e.currentTarget,s=c.indexOf(l),n=t[s].value;n!==i&&(d(l),a(n))},u=e=>{let l=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;l=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;l=c[s]??c[c.length-1];break}}l?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},l),children:t.map((e=>{let{value:l,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===l?0:-1,"aria-selected":i===l,ref:e=>c.push(e),onKeyDown:u,onClick:o,...r,className:(0,n.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===l}),children:s??l},l)}))})}function v(e){let{lazy:l,children:s,selectedValue:n}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(l){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,l)=>(0,i.cloneElement)(e,{key:l,hidden:e.props.value!==n})))})}function b(e){const l=m(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(_,{...e,...l}),(0,f.jsx)(v,{...e,...l})]})}function y(e){const l=(0,g.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(l))}},18175:(e,l,s)=>{s.d(l,{A:()=>n});s(96540);var i=s(74848);function n(e){let{id:l,title:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{id:l,class:"anchor",children:s}),(0,i.jsx)("a",{class:"hash-link",href:"#"+l,title:"Direct link"})]})}},28758:(e,l,s)=>{s.d(l,{A:()=>a});s(96540);var i=s(21523),n=s(74848);const r=(e,l)=>(0,n.jsx)(n.Fragment,{children:l&&l.length>0&&(0,n.jsx)(n.Fragment,{children:l.map(((l,s)=>(0,n.jsxs)("div",{class:"cl-item",children:[(0,n.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,n.jsx)(i.o,{class:"cl-item-content",children:l})]})))})});function a(e){let{versionHistory:l,dateOnly:s}=e;return(0,n.jsx)(n.Fragment,{children:l&&l.map(((e,l)=>(0,n.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[s&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!s&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)]})))})}}}]);