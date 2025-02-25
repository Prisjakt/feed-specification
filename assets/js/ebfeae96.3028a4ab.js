"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9178],{51457:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>j,contentTitle:()=>h,default:()=>p,frontMatter:()=>o,metadata:()=>x,toc:()=>g});var d=n(74848),s=n(28453),l=n(11470),a=n(19365),t=n(18175),r=(n(51503),n(28758)),c=n(22051);const o={description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."},h="id",x={id:"feeds/offer/fields/id",title:"id",description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.",source:"@site/docs/feeds/offer/fields/id.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/id",permalink:"/feeds/offer/fields/id",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/id.md",tags:[],version:"current",frontMatter:{description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."},sidebar:"tutorialSidebar",previous:{title:"gtin",permalink:"/feeds/offer/fields/gtin"},next:{title:"image_link",permalink:"/feeds/offer/fields/image_link"}},j={},g=[...c.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"id",children:"id"})}),"\n",(0,d.jsx)(c.Ay,{}),"\n",(0,d.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(i.p,{children:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."}),"\n",(0,d.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["Length must be between ",(0,d.jsx)(i.code,{children:"1-36"})]}),"\n",(0,d.jsx)(i.li,{children:"Must be unique"}),"\n",(0,d.jsxs)(i.li,{children:["Only ",(0,d.jsx)(i.strong,{children:"ascii"})," characters"]}),"\n",(0,d.jsx)(i.li,{children:"Trailing whitespace characters are not allowed"}),"\n",(0,d.jsxs)(i.li,{children:["Disallowed characters are ",(0,d.jsx)(i.code,{children:"!"})," ",(0,d.jsx)(i.code,{children:"+"})," ",(0,d.jsx)(i.code,{children:"@"})," ",(0,d.jsx)(i.code,{children:"#"})," ",(0,d.jsx)(i.code,{children:"$"})," ",(0,d.jsx)(i.code,{children:"%"})," ",(0,d.jsx)(i.code,{children:"^"})," ",(0,d.jsx)(i.code,{children:"&"})," ",(0,d.jsx)(i.code,{children:"*"})," ",(0,d.jsx)(i.code,{children:"<"})," ",(0,d.jsx)(i.code,{children:">"})," ",(0,d.jsx)(i.code,{children:";"})," ",(0,d.jsx)(i.code,{children:":"})]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,d.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Use SKUs as ids"}),"\n",(0,d.jsx)(i.li,{children:"You can follow Google format but in some rare cases we might reject some offers due to stricter validation."}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Re-use, if re-used, your product might end up indexed to the wrong Prisjakt product"}),"\n",(0,d.jsx)(i.li,{children:"Change over time, if changed, the product will need to be indexed again"}),"\n",(0,d.jsx)(i.li,{children:'Don\'t add whitespace characters (" ", "\\n", "t") at the beginning or the end of the id field'}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,d.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,d.jsx)(i.em,{children:"id"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,d.jsxs)(l.A,{children:[(0,d.jsxs)(a.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,d.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[213888]]></g:id>\n"})})}),(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[213888]]></g:id>\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[aBCd1123]]></g:id>\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[09az]]></g:id>\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[a b./)(]]></g:id>\n"})})]})]})]}),(0,d.jsxs)(a.A,{value:"valid_csv",label:"CSV",children:[(0,d.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n213888\n"})})}),(0,d.jsxs)(n,{children:[(0,d.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,d.jsxs)("div",{children:[(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n213888\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\naBCd1123\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n09az\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\na b./)(\n"})})]})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,d.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,d.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,d.jsxs)(l.A,{children:[(0,d.jsxs)(a.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_id_blacklisted_ascii_character",title:"validation_id_blacklisted_ascii_character"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[!+@#$%^&*]]></g:id>\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]]></g:id>\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_invalid_value",title:"validation_invalid_value"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[ ]]></g:id>\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_missing_value",title:"validation_missing_value"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id></g:id>\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_non_ascii_character",title:"validation_non_ascii_character"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[\u0105\u015b\u03c0\u0153\u0119\xa9]]></g:id>\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(i.mdxAdmonitionTitle,{children:(0,d.jsx)(i.strong,{children:(0,d.jsx)(t.A,{id:"validation_trailing_whitespace",title:"validation_trailing_whitespace"})})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[a ]]></g:id>\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[ a]]></g:id>\n"})})]})]}),(0,d.jsxs)(a.A,{value:"invalid_csv",label:"CSV",children:[(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_id_blacklisted_ascii_character",title:"validation_id_blacklisted_ascii_character"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n!+@#$%^&*\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:'id\n""\n'})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_non_ascii_character",title:"validation_non_ascii_character"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n\u0105\u015b\u03c0\u0153\u0119\xa9\n"})})]}),(0,d.jsxs)(i.admonition,{type:"danger",children:[(0,d.jsx)(t.A,{id:"validation_trailing_whitespace",title:"validation_trailing_whitespace"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\na\n"})}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-csv",children:"id\n a\n"})})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{style:{textAlign:"right"},children:(0,d.jsx)(i.strong,{children:"Property"})}),(0,d.jsx)(i.th,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"Value"})}),(0,d.jsx)(i.th,{style:{textAlign:"left"},children:(0,d.jsx)(i.strong,{children:"Description"})})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,d.jsx)(i.td,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"string"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,d.jsx)(i.td,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"False"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,d.jsx)(i.td,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"True"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,d.jsx)(i.td,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"False"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,d.jsx)(i.td,{style:{textAlign:"center"},children:(0,d.jsx)(i.strong,{children:"0"})}),(0,d.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,d.jsx)(r.A,{versionHistory:[{changed:["Rule for id validation has been updated. Only ASCII characters (with some exceptions) are now allowed. There is also a list of disallowed characters. Please check documentaiton for more details."],date:"2023-06-07"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,d.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324405",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},22051:(e,i,n)=>{n.d(i,{Ay:()=>t,RM:()=>l});var d=n(74848),s=n(28453);const l=[];function a(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,d.jsx)(i.admonition,{title:"Required Field",type:"danger",children:(0,d.jsxs)(i.p,{children:["This field is ",(0,d.jsx)(i.a,{href:"/policies/required-vs-optional",children:"required"})," and must not be omitted"]})})}function t(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}}}]);