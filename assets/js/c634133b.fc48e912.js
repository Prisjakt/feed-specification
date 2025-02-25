"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4350],{92572:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=t(74848),n=t(28453),r=(t(11470),t(19365),t(18175)),s=(t(51503),t(28758)),d=t(22051);const l={description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/feeds/offer/fields/promotion_id.md) field is used to map a promotion to a product."},a="promotion_id",c={id:"feeds/promotion/fields/promotion_id",title:"promotion_id",description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/feeds/offer/fields/promotion_id.md) field is used to map a promotion to a product.",source:"@site/docs/feeds/promotion/fields/promotion_id.md",sourceDirName:"feeds/promotion/fields",slug:"/feeds/promotion/fields/promotion_id",permalink:"/feeds/promotion/fields/promotion_id",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/fields/promotion_id.md",tags:[],version:"current",frontMatter:{description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/feeds/offer/fields/promotion_id.md) field is used to map a promotion to a product."},sidebar:"tutorialSidebar",previous:{title:"promotion_effective_dates",permalink:"/feeds/promotion/fields/promotion_effective_dates"},next:{title:"promotion_page_link",permalink:"/feeds/promotion/fields/promotion_page_link"}},h={},p=[...d.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function f(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"promotion_id",children:"promotion_id"})}),"\n",(0,o.jsx)(d.Ay,{}),"\n",(0,o.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(i.p,{children:["Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, ",(0,o.jsx)(i.a,{href:"/feeds/offer/fields/promotion_id",children:(0,o.jsx)(i.code,{children:"promotion_id"})})," field is used to map a promotion to a product."]}),"\n",(0,o.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Must be a string"}),"\n",(0,o.jsxs)(i.li,{children:["Must be shorter than ",(0,o.jsx)(i.code,{children:"50"})," characters"]}),"\n",(0,o.jsx)(i.li,{children:"Must be unique for every promotion"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Use a unique ID for each different promotion."}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Don't reuse or recycle the same ID for different promotions"}),"\n",(0,o.jsx)(i.li,{children:"Avoid whitespaces"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,o.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,o.jsx)(i.em,{children:"promotion_id"})," value should look like in XML."]}),"\n",(0,o.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-xml",children:"<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>\n"})})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,o.jsx)("div",{children:(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-xml",children:"<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>\n"})})})]}),"\n",(0,o.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,o.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,o.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,o.jsxs)(i.admonition,{type:"danger",children:[(0,o.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-xml",children:"<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>\n"})})]}),"\n",(0,o.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{style:{textAlign:"right"},children:(0,o.jsx)(i.strong,{children:"Property"})}),(0,o.jsx)(i.th,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"Value"})}),(0,o.jsx)(i.th,{style:{textAlign:"left"},children:(0,o.jsx)(i.strong,{children:"Description"})})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,o.jsx)(i.td,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"string"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,o.jsx)(i.td,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"False"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,o.jsx)(i.td,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"True"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,o.jsx)(i.td,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"False"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,o.jsx)(i.td,{style:{textAlign:"center"},children:(0,o.jsx)(i.strong,{children:"0"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,o.jsx)(s.A,{versionHistory:[{added:["Initial definition"],date:"2023-12-11"}],dateOnly:!0}),"\n",(0,o.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://support.google.com/merchants/answer/7050148",children:"Google Merchant Specification"})}),"\n"]})]})}function x(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},22051:(e,i,t)=>{t.d(i,{Ay:()=>d,RM:()=>r});var o=t(74848),n=t(28453);const r=[];function s(e){const i={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,o.jsx)(i.admonition,{title:"Required Field",type:"danger",children:(0,o.jsxs)(i.p,{children:["This field is ",(0,o.jsx)(i.a,{href:"/policies/required-vs-optional",children:"required"})," and must not be omitted"]})})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}}}]);