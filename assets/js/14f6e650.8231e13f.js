"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6686],{90649:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var l=n(74848),s=n(28453),t=n(11470),d=n(19365),r=n(18175),h=(n(51503),n(28758)),a=n(56218);const c={description:"It is recommended to add this attribute if delivery costs based on dimensions."},g="shipping_length",o={id:"feeds/offer/fields/shipping_length",title:"shipping_length",description:"It is recommended to add this attribute if delivery costs based on dimensions.",source:"@site/docs/feeds/offer/fields/shipping_length.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/shipping_length",permalink:"/feeds/offer/fields/shipping_length",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/shipping_length.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on dimensions."},sidebar:"tutorialSidebar",previous:{title:"shipping_label",permalink:"/feeds/offer/fields/shipping_label"},next:{title:"shipping_weight",permalink:"/feeds/offer/fields/shipping_weight"}},p={},x=[...a.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function j(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"shipping_length",children:"shipping_length"})}),"\n",(0,l.jsx)(a.Ay,{}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"It is recommended to add this attribute if delivery costs based on dimensions."}),"\n",(0,l.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping_length -- should be supplied together  --- shipping_height\n  click shipping_height "/feeds/offer/fields/shipping_height" "shipping_height" _blank\nshipping_length -- should be supplied together  --- shipping_weight\n  click shipping_weight "/feeds/offer/fields/shipping_weight" "shipping_weight" _blank\nshipping_length -- should be supplied together  --- shipping_width\n  click shipping_width "/feeds/offer/fields/shipping_width" "shipping_width" _blank\nshipping_length -- affects price and eligibility of  --- shipping\n  click shipping "/feeds/offer/fields/shipping" "shipping" _blank\nshipping_length -- determines label of  --- shipping_label\n  click shipping_label "/feeds/offer/fields/shipping_label" "shipping_label" _blank\n\n  click shipping_length "/feeds/offer/fields/shipping_length" "shipping_length" _blank\n  style shipping_length fill:#4cb3d4'}),"\n",(0,l.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Length must be between ",(0,l.jsx)(i.code,{children:"1-50"})," characters"]}),"\n",(0,l.jsxs)(i.li,{children:["Unit must be one of ",(0,l.jsx)(i.code,{children:"cm"})," or ",(0,l.jsx)(i.code,{children:"in"})]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,l.jsx)(i.em,{children:"shipping_length"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(d.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>10.12 cm</g:shipping_length>\n"})})}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>10.12 cm</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>0 cm</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>0.0 in</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>11 cm</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>15.2 in</g:shipping_length>\n"})})]})]})]}),(0,l.jsxs)(d.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n10.12 cm\n"})})}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n10.12 cm\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n0 cm\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n0.0 in\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n11 cm\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n15.2 in\n"})})]})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(d.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(r.A,{id:"validation_invalid_format",title:"validation_invalid_format"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>123cm</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length> in</g:shipping_length>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(r.A,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>2 m</g:shipping_length>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(r.A,{id:"validation_invalid_value",title:"validation_invalid_value"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>unkn own</g:shipping_length>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:shipping_length>111.222.333 in</g:shipping_length>\n"})})]})]}),(0,l.jsxs)(d.A,{value:"invalid_csv",label:"CSV",children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_format",title:"validation_invalid_format"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n123cm\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n in\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n2 m\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\nunkn own\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"shipping_length\n111.222.333 in\n"})})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{style:{textAlign:"right"},children:(0,l.jsx)(i.strong,{children:"Property"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"Value"})}),(0,l.jsx)(i.th,{style:{textAlign:"left"},children:(0,l.jsx)(i.strong,{children:"Description"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"string"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"0"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(h.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,l.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338",children:"Google Merchant Specification"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},56218:(e,i,n)=>{n.d(i,{Ay:()=>r,RM:()=>t});var l=n(74848),s=n(28453);const t=[];function d(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,l.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(i.p,{children:["This field is ",(0,l.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function r(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);