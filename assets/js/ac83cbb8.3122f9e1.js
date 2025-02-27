"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[629],{19183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var s=i(74848),l=i(28453),n=(i(11470),i(19365),i(18175),i(51503),i(28758)),r=i(56218);const d={description:"Longitude and latitude is used to locate your shop in the cases if we cannot lookup your address."},o="longitude",a={id:"feeds/local-shop/fields/longitude",title:"longitude",description:"Longitude and latitude is used to locate your shop in the cases if we cannot lookup your address.",source:"@site/docs/feeds/local-shop/fields/longitude.md",sourceDirName:"feeds/local-shop/fields",slug:"/feeds/local-shop/fields/longitude",permalink:"/feeds/local-shop/fields/longitude",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/local-shop/fields/longitude.md",tags:[],version:"current",frontMatter:{description:"Longitude and latitude is used to locate your shop in the cases if we cannot lookup your address."},sidebar:"tutorialSidebar",previous:{title:"locality",permalink:"/feeds/local-shop/fields/locality"},next:{title:"monday_hours",permalink:"/feeds/local-shop/fields/monday_hours"}},c={},h=[...r.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"longitude",children:"longitude"})}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Longitude and latitude is used to locate your shop in the cases if we cannot lookup your address."}),"\n",(0,s.jsx)(t.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Between -180 and 180"}),"\n",(0,s.jsx)(t.li,{children:"At least 6 digits after the decimal point"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-values",children:"Example Values"}),"\n",(0,s.jsxs)(t.p,{children:["Here are examples of how a valid ",(0,s.jsx)(t.em,{children:"longitude"})," value  should look like in CSV (with header)."]}),"\n",(0,s.jsx)(t.admonition,{title:"Valid CSV Value",type:"tip",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",children:"longitude\n12.862385\n"})})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",children:"longitude\n12.862385\n"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csv",children:"longitude\n12.7527635\n"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(t.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in CSV that would trigger the code. Please refer to the ",(0,s.jsx)(t.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"Property"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Value"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Data Type"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Nested"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"False"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(n.A,{versionHistory:[{added:["Initial definition"],date:"2025-02-24"}],dateOnly:!0}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://support.google.com/business/answer/3370250?hl=en&sjid=9926158084056215740-EU",children:"Google Merchant - Bulk Upload Spreadsheet For Business Profiles"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://developers.google.com/merchant/api/reference/rest/lfp_v1beta/accounts.lfpStores#LfpStore",children:"Google Merchant API - LfpStore Definition"})}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},56218:(e,t,i)=>{i.d(t,{Ay:()=>d,RM:()=>n});var s=i(74848),l=i(28453);const n=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,s.jsx)(t.admonition,{title:"Optional Field",type:"info",children:(0,s.jsxs)(t.p,{children:["This field is ",(0,s.jsx)(t.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}}}]);