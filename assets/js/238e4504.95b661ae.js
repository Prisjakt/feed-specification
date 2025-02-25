"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1486],{79561:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>x,contentTitle:()=>g,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>j});var s=n(74848),l=n(28453),t=n(11470),d=n(19365),r=n(18175),a=(n(51503),n(28758)),c=n(22051);const o={description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},g="gtin",h={id:"feeds/product/fields/gtin",title:"gtin",description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy.",source:"@site/docs/feeds/product/fields/gtin.md",sourceDirName:"feeds/product/fields",slug:"/feeds/product/fields/gtin",permalink:"/feeds/product/fields/gtin",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/fields/gtin.md",tags:[],version:"current",frontMatter:{description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},sidebar:"tutorialSidebar",previous:{title:"description",permalink:"/feeds/product/fields/description"},next:{title:"id",permalink:"/feeds/product/fields/id"}},x={},j=[...c.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"gtin",children:"gtin"})}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:["Use the GTIN attribute to submit a ",(0,s.jsx)(i.a,{href:"https://www.gs1.org/standards/id-keys/gtin",children:"Global Trade Item Number (GTIN) | GS1"}),".\nA GTIN uniquely identifies your product.\nIncluding this will help indexing your products faster on Pricespy."]}),"\n",(0,s.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Use only one attribute of this type per product"}),"\n",(0,s.jsxs)(i.li,{children:["Length should be one of ",(0,s.jsx)(i.code,{children:"0, 8, 12, 13, or 14"})," digits (UPC, EAN, JAN, or ISBN)"]}),"\n",(0,s.jsxs)(i.li,{children:["Make sure that the check digit is present and correct using the ",(0,s.jsx)(i.a,{href:"https://www.gs1.org/check-digit-calculator",children:"GS1 Check digit calculator"})]}),"\n",(0,s.jsxs)(i.li,{children:["Don't submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: ",(0,s.jsx)(i.code,{children:"02, 04, or 2 (when gtin is 13-digit number)"})]}),"\n",(0,s.jsxs)(i.li,{children:["Don't submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: ",(0,s.jsx)(i.code,{children:"05, 98\u201399 (when gtin is 13-digit number)"})]}),"\n",(0,s.jsx)(i.li,{children:"GTINs with restricted prefixes from above are valid when gtin is 12 or 14-digit number"}),"\n",(0,s.jsx)(i.li,{children:"Must be an number"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,s.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,s.jsx)(i.em,{children:"gtin"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(d.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,s.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>90311017</g:gtin>\n"})})}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>90311017</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>036282818705</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>8806088269696</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>9031-1017</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>0362 8281-8705</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>8806-08826 9696</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"})})]})]})]}),(0,s.jsxs)(d.A,{value:"valid_csv",label:"CSV",children:[(0,s.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n90311017\n"})})}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n90311017\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n036282818705\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n8806088269696\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n10614141000415\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n9031-1017\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n0362 8281-8705\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n8806-08826 9696\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n10614141000415\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:'gtin\n"10614141000415,90311017"\n'})})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,s.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(d.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(r.A,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit"})})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>026282818705</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>046282818705</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>03628281</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>97795145</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>8801088269696</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>996282818705</g:gtin>\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>03628281</g:gtin>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(r.A,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed"})})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>9900114145837</g:gtin>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>881111088111169696</g:gtin>\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(r.A,{id:"validation_not_integer",title:"validation_not_integer"})})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:"<g:gtin>88aaa08869696</g:gtin>\n"})})]})]}),(0,s.jsxs)(d.A,{value:"invalid_csv",label:"CSV",children:[(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(r.A,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n026282818705\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n046282818705\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n03628281\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n97795145\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n8801088269696\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n996282818705\n"})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n03628281\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(r.A,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n9900114145837\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n881111088111169696\n"})})]}),(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(r.A,{id:"validation_not_integer",title:"validation_not_integer"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-csv",children:"gtin\n88aaa08869696\n"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:(0,s.jsx)(i.strong,{children:"Property"})}),(0,s.jsx)(i.th,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"Value"})}),(0,s.jsx)(i.th,{style:{textAlign:"left"},children:(0,s.jsx)(i.strong,{children:"Description"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"string"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"False"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"False"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"True"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,s.jsx)(i.td,{style:{textAlign:"center"},children:(0,s.jsx)(i.strong,{children:"10"})}),(0,s.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(a.A,{versionHistory:[{added:["Initial definition"],date:"2024-03-30"}],dateOnly:!0}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://support.google.com/manufacturers/answer/7494888",children:"Google Manufacturer Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},22051:(e,i,n)=>{n.d(i,{Ay:()=>r,RM:()=>t});var s=n(74848),l=n(28453);const t=[];function d(e){const i={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,s.jsx)(i.admonition,{title:"Required Field",type:"danger",children:(0,s.jsxs)(i.p,{children:["This field is ",(0,s.jsx)(i.a,{href:"/policies/required-vs-optional",children:"required"})," and must not be omitted"]})})}function r(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);