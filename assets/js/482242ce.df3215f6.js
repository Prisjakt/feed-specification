"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6529],{77875:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>x,contentTitle:()=>h,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var s=i(74848),d=i(28453),n=i(11470),r=i(19365),t=(i(18175),i(51503),i(96888)),c=i(28758),a=i(56218);const o={description:"Specifies the expected date when an order will be ready for pickup, relative to when the order is placed."},h="pickup_sla",p={id:"feeds/local-offer/fields/pickup_sla",title:"pickup_sla",description:"Specifies the expected date when an order will be ready for pickup, relative to when the order is placed.",source:"@site/docs/feeds/local-offer/fields/pickup_sla.md",sourceDirName:"feeds/local-offer/fields",slug:"/feeds/local-offer/fields/pickup_sla",permalink:"/feeds/local-offer/fields/pickup_sla",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/local-offer/fields/pickup_sla.md",tags:[],version:"current",frontMatter:{description:"Specifies the expected date when an order will be ready for pickup, relative to when the order is placed."},sidebar:"tutorialSidebar",previous:{title:"pickup_method",permalink:"/feeds/local-offer/fields/pickup_method"},next:{title:"price",permalink:"/feeds/local-offer/fields/price"}},x={},u=[...a.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Allowed Enum Values",id:"allowed-enum-values",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function j(e){const l={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:i}=l;return i||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"pickup_sla",children:"pickup_sla"})}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(l.p,{children:"Specifies the expected date when an order will be ready for pickup, relative to when the order is placed."}),"\n",(0,s.jsx)(l.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,s.jsx)(l.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\npickup_sla -- relates to  --- pickup_method\n  click pickup_method "/feeds/local-offer/fields/pickup_method" "pickup_method" _blank\n\n  click pickup_sla "/feeds/local-offer/fields/pickup_sla" "pickup_sla" _blank\n  style pickup_sla fill:#4cb3d4'}),"\n",(0,s.jsx)(l.h2,{id:"allowed-enum-values",children:"Allowed Enum Values"}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"same day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product is available for pickup the same day that the order is placed, subject to cut off times."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"next day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product is available for pickup the following day that the order is placed."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"2-day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in 2 days."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"3-day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in 3 days."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"4-day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in 4 days"})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"5-day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in 5 days."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"6-day"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in 6 days."})}),(0,s.jsx)("dt",{children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:(0,s.jsx)(l.p,{children:"multi-week"})})})}),(0,s.jsx)("dd",{children:(0,s.jsx)(t.o,{children:"Indicates that the product will be shipped to a store for a customer to pick up in one week or more."})})]}),"\n",(0,s.jsx)(l.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Required to enable store pickup"}),"\n",(0,s.jsx)(l.li,{children:"Value must be one of the allowed enum values"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"example-values",children:"Example Values"}),"\n",(0,s.jsxs)(l.p,{children:["Here are examples of how a valid ",(0,s.jsx)(l.em,{children:"pickup_sla"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,s.jsx)(l.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>same day</g:pickup_sla>\n"})})}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>same day</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>next day</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>two-days</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>three-days</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>four-days</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>five-days</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>six-days</g:pickup_sla>\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-xml",children:"<g:pickup_sla>multi-week</g:pickup_sla>\n"})})]})]})]}),(0,s.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,s.jsx)(l.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nsame day\n"})})}),(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nsame day\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nnext day\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\ntwo-days\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nthree-days\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nfour-days\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nfive-days\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nsix-days\n"})}),(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-csv",children:"pickup_sla\nmulti-week\n"})})]})]})]})]}),"\n",(0,s.jsx)(l.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(l.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,s.jsx)(l.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(r.A,{value:"invalid_xml",label:"XML",default:!0}),(0,s.jsx)(r.A,{value:"invalid_csv",label:"CSV"})]}),"\n",(0,s.jsx)(l.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"right"},children:(0,s.jsx)(l.strong,{children:"Property"})}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"Value"})}),(0,s.jsx)(l.th,{style:{textAlign:"left"},children:(0,s.jsx)(l.strong,{children:"Description"})})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"right"},children:"Data Type"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"enum"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"right"},children:"Nested"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"False"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"True"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"False"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:(0,s.jsx)(l.strong,{children:"0"})}),(0,s.jsx)(l.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,s.jsx)(l.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(c.A,{versionHistory:[{added:["Initial definition"],date:"2025-02-24"}],dateOnly:!0}),"\n",(0,s.jsx)(l.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://support.google.com/merchants/answer/14635400?sjid=12668122117297241362-EU",children:"Google Local Inventory Data Specification For This Field"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.a,{href:"https://support.google.com/merchants/answer/14819809?hl=en",children:"Google Local Inventory Data Specification"})}),"\n"]})]})}function f(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},56218:(e,l,i)=>{i.d(l,{Ay:()=>t,RM:()=>n});var s=i(74848),d=i(28453);const n=[];function r(e){const l={a:"a",admonition:"admonition",p:"p",...(0,d.R)(),...e.components};return(0,s.jsx)(l.admonition,{title:"Optional Field",type:"info",children:(0,s.jsxs)(l.p,{children:["This field is ",(0,s.jsx)(l.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function t(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}}}]);