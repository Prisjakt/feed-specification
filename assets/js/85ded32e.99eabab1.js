"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3223],{8238:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var s=l(74848),n=l(28453),r=l(11470),a=l(19365),t=l(18175),c=(l(89898),l(28758)),d=l(98995);const o={description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](/fields/offer/sale_price_effective_date) attribute should be used."},u="sale_price",h={id:"fields/offer/sale_price",title:"sale_price",description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used.",source:"@site/docs/fields/offer/sale_price.md",sourceDirName:"fields/offer",slug:"/fields/offer/sale_price",permalink:"/fields/offer/sale_price",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/sale_price.md",tags:[],version:"current",frontMatter:{description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used."},sidebar:"tutorialSidebar",previous:{title:"promotion_id",permalink:"/fields/offer/promotion_id"},next:{title:"sale_price_effective_date",permalink:"/fields/offer/sale_price_effective_date"}},p={},x=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function m(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:l}=i;return l||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"sale_price",children:"sale_price"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:["It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or ",(0,s.jsx)(i.a,{href:"/fields/offer/sale_price_effective_date",children:(0,s.jsx)(i.code,{children:"sale_price_effective_date"})})," attribute should be used."]}),"\n",(0,s.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,s.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsale_price -- overrides if exist  --- price\n  click price "/fields/offer/price" "price" _blank\nsale_price -- overridden by if member  --- member_price\n  click member_price "/fields/offer/member_price" "member_price" _blank\nsale_price -- can be enhanced by  --- sale_price_effective_date\n  click sale_price_effective_date "/fields/offer/sale_price_effective_date" "sale_price_effective_date" _blank\n\n  click sale_price "/fields/offer/sale_price" "sale_price" _blank\n  style sale_price fill:#4cb3d4'}),"\n",(0,s.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Must be a number (value) followed by a space and a currency (unit)"}),"\n",(0,s.jsxs)(i.li,{children:["Number ",(0,s.jsx)(i.em,{children:"may"})," have ",(0,s.jsx)(i.strong,{children:"two decimals"}),", separated by a ",(0,s.jsx)(i.code,{children:"."})," (dot)"]}),"\n",(0,s.jsxs)(i.li,{children:["Currency must be three upper case characters and a valid ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})," currency"]}),"\n",(0,s.jsxs)(i.li,{children:["Zero prices are ",(0,s.jsx)(i.strong,{children:"not"})," allowed"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Price sent in feed should be the same as the price value on your product page"}),"\n",(0,s.jsx)(i.li,{children:"Currency sent in feed should match currency on your product page"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.strong,{children:"not"})," include extra charges in the cost (such as shipping cost)"]}),"\n",(0,s.jsxs)(i.li,{children:["Do ",(0,s.jsx)(i.strong,{children:"not"})," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,s.jsx)(i.code,{children:"10000.50 SEK"}),")"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,s.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,s.jsx)(i.em,{children:"sale_price"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(a.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,s.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n"})})}),(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>SEK 100</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99,99 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10,000.00 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10 000.00 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.000 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>1.144.000 SEK</g:sale_price>\n"})})]})]})]}),(0,s.jsxs)(a.A,{value:"valid_csv",label:"CSV",children:[(0,s.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n99.99 SEK\n"})})}),(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n99.99 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n100 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\nSEK 100\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:'sale_price\n"99,99 SEK"\n'})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:'sale_price\n"10,000.00 SEK"\n'})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n10 000.00 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n10.000 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n1.144.000 SEK\n"})})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,s.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsxs)(a.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100$</g:sale_price>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>SEK</g:sale_price>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>foo SEK</g:sale_price>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>-10 SEK</g:sale_price>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>0 SEK</g:sale_price>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>$100</g:sale_price>\n"})})]})]}),(0,s.jsxs)(a.A,{value:"invalid_csv",label:"CSV",children:[(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n100$\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\nSEK\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n10.0.00.00 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n10.0.00.00 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\nfoo SEK\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n-10 SEK\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n0 SEK\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"sale_price\n$100\n"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"Property"})}),(0,s.jsx)(i.th,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"Value"})}),(0,s.jsx)(i.th,{style:{textAlign:"left"},children:(0,s.jsx)(i.strong,{children:"Description"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"price"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"False"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"False"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"False"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"0"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(c.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324471",children:"Google Merchant Specification"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"Wikipedia on ISO 4217 Currency codes"})}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},89898:(e,i,l)=>{l.d(i,{Ay:()=>a});var s=l(74848),n=l(28453);function r(e){return(0,s.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,s.jsx)("code",{children:e.name})})}function a(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},98995:(e,i,l)=>{l.d(i,{Ay:()=>a});var s=l(74848),n=l(28453);function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,s.jsxs)(i.p,{children:["This field is ",(0,s.jsx)(i.a,{href:"/terminology/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},19365:(e,i,l)=>{l.d(i,{A:()=>a});l(96540);var s=l(34164);const n={tabItem:"tabItem_Ymn6"};var r=l(74848);function a(e){let{children:i,hidden:l,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:l,children:i})}},11470:(e,i,l)=>{l.d(i,{A:()=>y});var s=l(96540),n=l(34164),r=l(23104),a=l(56347),t=l(205),c=l(57485),d=l(31682),o=l(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:l}=e;return(0,s.useMemo)((()=>{const e=i??function(e){return u(e).map((e=>{let{props:{value:i,label:l,attributes:s,default:n}}=e;return{value:i,label:l,attributes:s,default:n}}))}(l);return function(e){const i=(0,d.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,l])}function p(e){let{value:i,tabValues:l}=e;return l.some((e=>e.value===i))}function x(e){let{queryString:i=!1,groupId:l}=e;const n=(0,a.W6)(),r=function(e){let{queryString:i=!1,groupId:l}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:i,groupId:l});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(n.location.search);i.set(r,e),n.replace({...n.location,search:i.toString()})}),[r,n])]}function m(e){const{defaultValue:i,queryString:l=!1,groupId:n}=e,r=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:i,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:r}))),[d,u]=x({queryString:l,groupId:n}),[m,g]=function(e){let{groupId:i}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(i),[n,r]=(0,o.Dv)(l);return[n,(0,s.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),j=(()=>{const e=d??m;return p({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=l(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=l(74848);function _(e){let{className:i,block:l,selectedValue:s,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const i=e.currentTarget,l=c.indexOf(i),n=t[l].value;n!==s&&(d(i),a(n))},u=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;i=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;i=c[l]??c[c.length-1];break}}i?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},i),children:t.map((e=>{let{value:i,label:l,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===i?0:-1,"aria-selected":s===i,ref:e=>c.push(e),onKeyDown:u,onClick:o,...r,className:(0,n.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===i}),children:l??i},i)}))})}function v(e){let{lazy:i,children:l,selectedValue:n}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,s.cloneElement)(e,{key:i,hidden:e.props.value!==n})))})}function b(e){const i=m(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(_,{...e,...i}),(0,f.jsx)(v,{...e,...i})]})}function y(e){const i=(0,g.A)();return(0,f.jsx)(b,{...e,children:u(e.children)},String(i))}},18175:(e,i,l)=>{l.d(i,{A:()=>n});l(96540);var s=l(74848);function n(e){let{id:i,title:l}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{id:i,class:"anchor",children:l}),(0,s.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,l)=>{l.d(i,{A:()=>a});l(96540);var s=l(21523),n=l(74848);const r=(e,i)=>(0,n.jsx)(n.Fragment,{children:i&&i.length>0&&(0,n.jsx)(n.Fragment,{children:i.map(((i,l)=>(0,n.jsxs)("div",{class:"cl-item",children:[(0,n.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,n.jsx)(s.o,{class:"cl-item-content",children:i})]})))})});function a(e){let{versionHistory:i,dateOnly:l}=e;return(0,n.jsx)(n.Fragment,{children:i&&i.map(((e,i)=>(0,n.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[l&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!l&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)]})))})}}}]);