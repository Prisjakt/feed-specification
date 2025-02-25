"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6559],{26043:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>j,contentTitle:()=>h,default:()=>p,frontMatter:()=>o,metadata:()=>x,toc:()=>u});var n=i(74848),t=i(28453),l=i(11470),s=i(19365),r=i(18175),d=(i(51503),i(28758)),c=i(56218);const o={description:"The brand attribute is used to indicate a product's brand/manufacturer name."},h="brand",x={id:"feeds/offer/fields/brand",title:"brand",description:"The brand attribute is used to indicate a product's brand/manufacturer name.",source:"@site/docs/feeds/offer/fields/brand.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/brand",permalink:"/feeds/offer/fields/brand",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/brand.md",tags:[],version:"current",frontMatter:{description:"The brand attribute is used to indicate a product's brand/manufacturer name."},sidebar:"tutorialSidebar",previous:{title:"availability_date",permalink:"/feeds/offer/fields/availability_date"},next:{title:"color",permalink:"/feeds/offer/fields/color"}},j={},u=[...c.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function f(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"brand",children:"brand"})}),"\n",(0,n.jsx)(c.Ay,{}),"\n",(0,n.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(a.p,{children:"The brand attribute is used to indicate a product's brand/manufacturer name."}),"\n",(0,n.jsx)(a.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Length must be between ",(0,n.jsx)(a.code,{children:"1-70"})," characters"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(a.h3,{id:"do",children:"Do"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Use only valid brands"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Don't set ",(0,n.jsx)(a.code,{children:"N/A"}),", ",(0,n.jsx)(a.code,{children:"generic"}),", ",(0,n.jsx)(a.code,{children:"no name"}),", ",(0,n.jsx)(a.code,{children:"unknown"})," and similar brand names as they are of no help when indexing your products/offers"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"example-values",children:"Example Values"}),"\n",(0,n.jsxs)(a.p,{children:["Here are examples of how a valid ",(0,n.jsx)(a.em,{children:"brand"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,n.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Prisjakt]]></g:brand>\n"})})}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Prisjakt]]></g:brand>\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Sony]]></g:brand>\n"})})]})]})]}),(0,n.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,n.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csv",children:"brand\nPrisjakt\n"})})}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csv",children:"brand\nPrisjakt\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csv",children:"brand\nSony\n"})})]})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,n.jsxs)(a.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.jsx)(a.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,n.jsxs)(a.admonition,{type:"danger",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{children:(0,n.jsx)(a.strong,{children:(0,n.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)]]></g:brand>\n"})})]})}),(0,n.jsx)(s.A,{value:"invalid_csv",label:"CSV",children:(0,n.jsxs)(a.admonition,{type:"danger",children:[(0,n.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csv",children:"brand\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)\n"})})]})})]}),"\n",(0,n.jsx)(a.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{style:{textAlign:"right"},children:(0,n.jsx)(a.strong,{children:"Property"})}),(0,n.jsx)(a.th,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"Value"})}),(0,n.jsx)(a.th,{style:{textAlign:"left"},children:(0,n.jsx)(a.strong,{children:"Description"})})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"right"},children:"Data Type"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"string"})}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"right"},children:"Nested"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"False"})}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"False"})}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"False"})}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,n.jsx)(a.td,{style:{textAlign:"center"},children:(0,n.jsx)(a.strong,{children:"0"})}),(0,n.jsx)(a.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,n.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://support.google.com/merchants/answer/6324351",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},56218:(e,a,i)=>{i.d(a,{Ay:()=>r,RM:()=>l});var n=i(74848),t=i(28453);const l=[];function s(e){const a={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,n.jsx)(a.admonition,{title:"Optional Field",type:"info",children:(0,n.jsxs)(a.p,{children:["This field is ",(0,n.jsx)(a.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function r(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}}}]);