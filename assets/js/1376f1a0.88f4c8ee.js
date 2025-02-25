"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3584],{24378:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var o=t(74848),l=t(28453),r=t(11470),i=t(19365),s=t(18175),n=(t(51503),t(28758)),d=t(56218);const c={description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead."},g="google_product_category",h={id:"feeds/offer/fields/google_product_category",title:"google_product_category",description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead.",source:"@site/docs/feeds/offer/fields/google_product_category.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/google_product_category",permalink:"/feeds/offer/fields/google_product_category",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/google_product_category.md",tags:[],version:"current",frontMatter:{description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead."},sidebar:"tutorialSidebar",previous:{title:"gender",permalink:"/feeds/offer/fields/gender"},next:{title:"gtin",permalink:"/feeds/offer/fields/gtin"}},p={},u=[...d.RM,{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...a.components},{Details:t}=e;return t||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"google_product_category",children:"google_product_category"})}),"\n",(0,o.jsx)(d.Ay,{}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(e.p,{children:["This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit ",(0,o.jsx)(e.a,{href:"/feeds/offer/fields/product_type",children:(0,o.jsx)(e.code,{children:"product_type"})})," instead."]}),"\n",(0,o.jsx)(e.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"This information helps us to make the products discoverable and searchable for the users"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,o.jsx)(e.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\ngoogle_product_category -- can be used instead  --- product_type\n  click product_type "/feeds/offer/fields/product_type" "product_type" _blank\n\n  click google_product_category "/feeds/offer/fields/google_product_category" "google_product_category" _blank\n  style google_product_category fill:#4cb3d4'}),"\n",(0,o.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"If id is used it must match an existing Google Product Category id (see references below)"}),"\n",(0,o.jsx)(e.li,{children:"If category path is used, it must match Google Product Category path exactly (see references below)"}),"\n",(0,o.jsx)(e.li,{children:"Use only one attribute of this type per product"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsx)(e.h3,{id:"do",children:"Do"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Prefer using id's instead of strings if possible"}),"\n",(0,o.jsx)(e.li,{children:"Use the most nested category possible"}),"\n",(0,o.jsx)(e.li,{children:"Avoid using root categories"}),"\n",(0,o.jsx)(e.li,{children:"Use full category path or respective category id from the list (see references)"}),"\n",(0,o.jsx)(e.li,{children:"Wrap in a CDATA element if using xml"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"example-values",children:"Example Values"}),"\n",(0,o.jsxs)(e.p,{children:["Here are examples of how a valid ",(0,o.jsx)(e.em,{children:"google_product_category"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsxs)(i.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,o.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1144</g:google_product_category>\n"})})}),(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1144</g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1</g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1157</g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies]]></g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Dyr og tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til hunde]]></g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:google_product_category>\n"})})]})]})]}),(0,o.jsxs)(i.A,{value:"valid_csv",label:"CSV",children:[(0,o.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1144\n"})})}),(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1144\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1157\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\nAnimals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\nDyr og tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til hunde\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n"})})]})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,o.jsxs)(e.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,o.jsx)(e.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsxs)(i.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,o.jsxs)(e.admonition,{type:"danger",children:[(0,o.jsx)(e.mdxAdmonitionTitle,{children:(0,o.jsx)(e.strong,{children:(0,o.jsx)(s.A,{id:"validation_category_not_found",title:"validation_category_not_found"})})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>144</g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Divers sports > Water polo]]></g:google_product_category>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[toys & puzzle]]></g:google_product_category>\n"})})]}),(0,o.jsxs)(e.admonition,{type:"danger",children:[(0,o.jsx)(e.mdxAdmonitionTitle,{children:(0,o.jsx)(e.strong,{children:(0,o.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)</g:google_product_category>\n"})})]})]}),(0,o.jsxs)(i.A,{value:"invalid_csv",label:"CSV",children:[(0,o.jsxs)(e.admonition,{type:"danger",children:[(0,o.jsx)(s.A,{id:"validation_category_not_found",title:"validation_category_not_found"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\n144\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\nDivers sports > Water polo\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\ntoys & puzzle\n"})})]}),(0,o.jsxs)(e.admonition,{type:"danger",children:[(0,o.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csv",children:"google_product_category\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)\n"})})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{style:{textAlign:"right"},children:(0,o.jsx)(e.strong,{children:"Property"})}),(0,o.jsx)(e.th,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"Value"})}),(0,o.jsx)(e.th,{style:{textAlign:"left"},children:(0,o.jsx)(e.strong,{children:"Description"})})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"Data Type"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"string"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"Nested"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"False"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"False"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"False"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:(0,o.jsx)(e.strong,{children:"0"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"changelog",children:"Changelog"}),"\n",(0,o.jsx)(n.A,{versionHistory:[{added:["Remove requirement on [`google_product_category`](/feeds/offer/fields/google_product_category.md) if [`product_type`](/feeds/offer/fields/product_type.md) is not present"],date:"2023-02-07"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,o.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://support.google.com/merchants/answer/6324436",children:"Google Merchant Specification"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt",children:"Google Taxonomy With Ids (en-US)"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.sv-SE.txt",children:"Google Taxonomy With Ids (sv-SE)"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.no-NO.txt",children:"Google Taxonomy With Ids (no-NO)"})}),"\n"]})]})}function f(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(x,{...a})}):x(a)}},56218:(a,e,t)=>{t.d(e,{Ay:()=>s,RM:()=>r});var o=t(74848),l=t(28453);const r=[];function i(a){const e={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...a.components};return(0,o.jsx)(e.admonition,{title:"Optional Field",type:"info",children:(0,o.jsxs)(e.p,{children:["This field is ",(0,o.jsx)(e.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function s(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(i,{...a})}):i(a)}}}]);