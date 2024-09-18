"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2017],{37022:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var n=r(74848),s=r(28453),l=r(11470),a=r(19365),t=r(18175),c=(r(89898),r(28758)),d=r(98995);const o={description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](/feeds/offer/fields/sale_price_effective_date) attribute should be used."},p="sale_price",h={id:"feeds/offer/fields/sale_price",title:"sale_price",description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used.",source:"@site/docs/feeds/offer/fields/sale_price.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/sale_price",permalink:"/feeds/offer/fields/sale_price",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/sale_price.md",tags:[],version:"current",frontMatter:{description:"It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used."},sidebar:"tutorialSidebar",previous:{title:"promotion_id",permalink:"/feeds/offer/fields/promotion_id"},next:{title:"sale_price_effective_date",permalink:"/feeds/offer/fields/sale_price_effective_date"}},u={},x=[...d.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function g(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"sale_price",children:"sale_price"}),"\n",(0,n.jsx)(d.Ay,{}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(i.p,{children:["It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or ",(0,n.jsx)(i.a,{href:"/feeds/offer/fields/sale_price_effective_date",children:(0,n.jsx)(i.code,{children:"sale_price_effective_date"})})," attribute should be used."]}),"\n",(0,n.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,n.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsale_price -- overrides if exist  --- price\n  click price "/feeds/offer/fields/price" "price" _blank\nsale_price -- overridden by if member  --- member_price\n  click member_price "/feeds/offer/fields/member_price" "member_price" _blank\nsale_price -- can be enhanced by  --- sale_price_effective_date\n  click sale_price_effective_date "/feeds/offer/fields/sale_price_effective_date" "sale_price_effective_date" _blank\n\n  click sale_price "/feeds/offer/fields/sale_price" "sale_price" _blank\n  style sale_price fill:#4cb3d4'}),"\n",(0,n.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Must be a number (value) followed by a space and a currency (unit)"}),"\n",(0,n.jsxs)(i.li,{children:["Number ",(0,n.jsx)(i.em,{children:"may"})," have ",(0,n.jsx)(i.strong,{children:"two decimals"}),", separated by a ",(0,n.jsx)(i.code,{children:"."})," (dot)"]}),"\n",(0,n.jsxs)(i.li,{children:["Currency must be three upper case characters and a valid ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})," currency"]}),"\n",(0,n.jsxs)(i.li,{children:["Zero prices are ",(0,n.jsx)(i.strong,{children:"not"})," allowed"]}),"\n",(0,n.jsxs)(i.li,{children:["Must be lower than ",(0,n.jsx)(i.a,{href:"/feeds/offer/fields/price",children:(0,n.jsx)(i.code,{children:"price"})})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Price sent in feed should be the same as the price value on your product page"}),"\n",(0,n.jsx)(i.li,{children:"Currency sent in feed should match currency on your product page"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Do ",(0,n.jsx)(i.strong,{children:"not"})," include extra charges in the cost (such as shipping cost)"]}),"\n",(0,n.jsxs)(i.li,{children:["Do ",(0,n.jsx)(i.strong,{children:"not"})," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,n.jsx)(i.code,{children:"10000.50 SEK"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,n.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,n.jsx)(i.em,{children:"sale_price"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(a.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,n.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99.99 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>SEK 100</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>99,99 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10,000.00 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10 000.00 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.000 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>1.144.000 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]})]})]}),(0,n.jsxs)(a.A,{value:"valid_csv",label:"CSV",children:[(0,n.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n99.99 SEK,3200000 SEK\n"})})}),(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n99.99 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n100 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\nSEK 100,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:'sale_price,price\n"99,99 SEK",3200000 SEK\n'})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:'sale_price,price\n"10,000.00 SEK",3200000 SEK\n'})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n10 000.00 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n10.000 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n1.144.000 SEK,3200000 SEK\n"})})]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,n.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(a.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100$</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>10.0.00.00 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>foo SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>-10 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>0 SEK</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_sale_price_is_not_lower_then_price",title:"validation_sale_price_is_not_lower_then_price"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100 SEK</g:sale_price>\n<g:price>100 SEK</g:price>\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>100 SEK</g:sale_price>\n<g:price>50 SEK</g:price>\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"})})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<g:sale_price>$100</g:sale_price>\n<g:price>3200000 SEK</g:price>\n"})})]})]}),(0,n.jsxs)(a.A,{value:"invalid_csv",label:"CSV",children:[(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n100$,3200000 SEK\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\nSEK,3200000 SEK\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_not_number",title:"validation_not_number"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n10.0.00.00 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n10.0.00.00 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\nfoo SEK,3200000 SEK\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n-10 SEK,3200000 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n0 SEK,3200000 SEK\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_sale_price_is_not_lower_then_price",title:"validation_sale_price_is_not_lower_then_price"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n100 SEK,100 SEK\n"})}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n100 SEK,50 SEK\n"})})]}),(0,n.jsxs)(i.admonition,{type:"danger",children:[(0,n.jsx)(t.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-csv",children:"sale_price,price\n$100,3200000 SEK\n"})})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"right"},children:(0,n.jsx)(i.strong,{children:"Property"})}),(0,n.jsx)(i.th,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"Value"})}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:(0,n.jsx)(i.strong,{children:"Description"})})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"price"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"False"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"False"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"False"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,n.jsx)(i.td,{style:{textAlign:"center"},children:(0,n.jsx)(i.strong,{children:"0"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(c.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324471",children:"Google Merchant Specification"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"Wikipedia on ISO 4217 Currency codes"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},89898:(e,i,r)=>{r.d(i,{Ay:()=>a});var n=r(74848),s=r(28453);function l(e){return(0,n.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,n.jsx)("code",{children:e.name})})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},98995:(e,i,r)=>{r.d(i,{Ay:()=>t,RM:()=>l});var n=r(74848),s=r(28453);const l=[];function a(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,n.jsxs)(i.p,{children:["This field is ",(0,n.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function t(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},19365:(e,i,r)=>{r.d(i,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:i,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:i})}},11470:(e,i,r)=>{r.d(i,{A:()=>y});var n=r(96540),s=r(34164),l=r(23104),a=r(56347),t=r(205),c=r(57485),d=r(31682),o=r(89466);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:r}=e;return(0,n.useMemo)((()=>{const e=i??function(e){return p(e).map((e=>{let{props:{value:i,label:r,attributes:n,default:s}}=e;return{value:i,label:r,attributes:n,default:s}}))}(r);return function(e){const i=(0,d.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,r])}function u(e){let{value:i,tabValues:r}=e;return r.some((e=>e.value===i))}function x(e){let{queryString:i=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:i=!1,groupId:r}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:i,groupId:r});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const i=new URLSearchParams(s.location.search);i.set(l,e),s.replace({...s.location,search:i.toString()})}),[l,s])]}function g(e){const{defaultValue:i,queryString:r=!1,groupId:s}=e,l=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:i,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:l}))),[d,p]=x({queryString:r,groupId:s}),[g,m]=function(e){let{groupId:i}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(i),[s,l]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),j=(()=>{const e=d??g;return u({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),m(e)}),[p,m,l]),tabValues:l}}var m=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function _(e){let{className:i,block:r,selectedValue:n,selectValue:a,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),o=e=>{const i=e.currentTarget,r=c.indexOf(i),s=t[r].value;s!==n&&(d(i),a(s))},p=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;i=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;i=c[r]??c[c.length-1];break}}i?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},i),children:t.map((e=>{let{value:i,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===i?0:-1,"aria-selected":n===i,ref:e=>c.push(e),onKeyDown:p,onClick:o,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":n===i}),children:r??i},i)}))})}function v(e){let{lazy:i,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(i){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,i)=>(0,n.cloneElement)(e,{key:i,hidden:e.props.value!==s})))})}function b(e){const i=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(_,{...e,...i}),(0,f.jsx)(v,{...e,...i})]})}function y(e){const i=(0,m.A)();return(0,f.jsx)(b,{...e,children:p(e.children)},String(i))}},18175:(e,i,r)=>{r.d(i,{A:()=>l});r(96540);var n=r(28774),s=r(74848);function l(e){let{id:i,title:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{id:i}),(0,s.jsx)("a",{class:"anchor",children:r}),(0,s.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,r)=>{r.d(i,{A:()=>a});r(96540);var n=r(99744),s=r(74848);const l=(e,i)=>(0,s.jsx)(s.Fragment,{children:i&&i.length>0&&(0,s.jsx)(s.Fragment,{children:i.map(((i,r)=>(0,s.jsxs)("div",{class:"cl-item",children:[(0,s.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,s.jsx)(n.o,{class:"cl-item-content",children:i})]})))})});function a(e){let{versionHistory:i,dateOnly:r}=e;return(0,s.jsx)(s.Fragment,{children:i&&i.map(((e,i)=>(0,s.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[r&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!r&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)]})))})}}}]);