"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9086],{65197:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>x,toc:()=>j});var l=n(74848),r=n(28453),s=n(11470),c=n(19365),d=n(18175),t=(n(51503),n(28758)),a=n(56218);const o={description:"Your products price in the specific store referenced by store code."},h="price",x={id:"feeds/local-offer/fields/price",title:"price",description:"Your products price in the specific store referenced by store code.",source:"@site/docs/feeds/local-offer/fields/price.md",sourceDirName:"feeds/local-offer/fields",slug:"/feeds/local-offer/fields/price",permalink:"/feeds/local-offer/fields/price",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/local-offer/fields/price.md",tags:[],version:"current",frontMatter:{description:"Your products price in the specific store referenced by store code."},sidebar:"tutorialSidebar",previous:{title:"pickup_sla",permalink:"/feeds/local-offer/fields/pickup_sla"},next:{title:"quantity",permalink:"/feeds/local-offer/fields/quantity"}},p={},j=[...a.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function g(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"price",children:"price"})}),"\n",(0,l.jsx)(a.Ay,{}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Your products price in the specific store referenced by store code."}),"\n",(0,l.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nprice -- overridden by if exist  --- sale_price\n  click sale_price "/feeds/local-offer/fields/sale_price" "sale_price" _blank\nprice -- determines if overridden  --- sale_price_effective_date\n  click sale_price_effective_date "/feeds/local-offer/fields/sale_price_effective_date" "sale_price_effective_date" _blank\n\n  click price "/feeds/local-offer/fields/price" "price" _blank\n  style price fill:#4cb3d4'}),"\n",(0,l.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Must be a number (value) followed by a space and a currency (unit)"}),"\n",(0,l.jsxs)(i.li,{children:["Number ",(0,l.jsx)(i.em,{children:"may"})," have ",(0,l.jsx)(i.strong,{children:"two decimals"}),", separated by a ",(0,l.jsx)(i.code,{children:"."})," (dot)"]}),"\n",(0,l.jsxs)(i.li,{children:["Currency must be three upper case characters and a valid ",(0,l.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})," currency"]}),"\n",(0,l.jsxs)(i.li,{children:["Zero prices are ",(0,l.jsx)(i.strong,{children:"not"})," allowed"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Submit price if your item has a different price per store"}),"\n",(0,l.jsx)(i.li,{children:"The inventory data price will override the price in the product data feed for the associated store."}),"\n",(0,l.jsx)(i.li,{children:"Accurately submit the product's price and currency, and match with the price from your stores"}),"\n",(0,l.jsx)(i.li,{children:"Ensure that the product can be purchased in-store for the submitted price."}),"\n",(0,l.jsx)(i.li,{children:"For products sold in bulk quantities, bundles, or multipacks: Submit the total price of the minimum purchasable quantity, bundle, or multipack."}),"\n",(0,l.jsx)(i.li,{children:"For the US and Canada: Don't include tax in the price."}),"\n",(0,l.jsxs)(i.li,{children:["For all other countries",":Include"," value added tax (VAT) or Goods and Services Tax (GST) in the price."]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Do ",(0,l.jsx)(i.strong,{children:"not"})," include extra charges in the cost (such as shipping cost)"]}),"\n",(0,l.jsxs)(i.li,{children:["Do ",(0,l.jsx)(i.strong,{children:"not"})," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,l.jsx)(i.code,{children:"10000.50 SEK"}),")"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,l.jsx)(i.em,{children:"price"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(c.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>99.99 SEK</g:price>\n"})})}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>99.99 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>100 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>SEK 100</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>99,99 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>10,000.00 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>10 000.00 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>10.000 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>1.144.000 SEK</g:price>\n"})})]})]})]}),(0,l.jsxs)(c.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n99.99 SEK\n"})})}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n99.99 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n100 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\nSEK 100\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:'price\n"99,99 SEK"\n'})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:'price\n"10,000.00 SEK"\n'})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n10 000.00 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n10.000 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n1.144.000 SEK\n"})})]})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsxs)(c.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_missing_currency",title:"validation_missing_currency"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>100$</g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>SEK</g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_missing_value",title:"validation_missing_value"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price></g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_not_number",title:"validation_not_number"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>10.0.00.00 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>10.0.00.00 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>foo SEK</g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>-10 SEK</g:price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>0 SEK</g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_price_out_of_range",title:"validation_price_out_of_range"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>1000000000 SEK</g:price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(d.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:price>$100</g:price>\n"})})]})]}),(0,l.jsxs)(c.A,{value:"invalid_csv",label:"CSV",children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n100$\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\nSEK\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:'price\n""\n'})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_not_number",title:"validation_not_number"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n10.0.00.00 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n10.0.00.00 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\nfoo SEK\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n-10 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n0 SEK\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_price_out_of_range",title:"validation_price_out_of_range"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n1000000000 SEK\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(d.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"price\n$100\n"})})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{style:{textAlign:"right"},children:(0,l.jsx)(i.strong,{children:"Property"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"Value"})}),(0,l.jsx)(i.th,{style:{textAlign:"left"},children:(0,l.jsx)(i.strong,{children:"Description"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"price"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"True"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"0"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(t.A,{versionHistory:[{added:["Initial definition"],date:"2025-02-24"}],dateOnly:!0}),"\n",(0,l.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324371?sjid=12668122117297241362-EU&visit_id=638760023831624244-3736320015&rd=1",children:"Google Local Inventory Data Specification For This Field"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://support.google.com/merchants/answer/14819809?hl=en",children:"Google Local Inventory Data Specification"})}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},56218:(e,i,n)=>{n.d(i,{Ay:()=>d,RM:()=>s});var l=n(74848),r=n(28453);const s=[];function c(e){const i={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,l.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(i.p,{children:["This field is ",(0,l.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);