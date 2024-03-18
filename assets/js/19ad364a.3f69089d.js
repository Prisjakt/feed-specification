"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5320],{42543:(a,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>h,default:()=>p,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var l=i(74848),n=i(28453),t=i(11470),s=i(19365),r=i(18175),d=(i(89898),i(28758)),o=i(98995);const c={description:"Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product."},h="additional_image_link",m={id:"fields/offer/additional_image_link",title:"additional_image_link",description:"Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product.",source:"@site/docs/fields/offer/additional_image_link.md",sourceDirName:"fields/offer",slug:"/fields/offer/additional_image_link",permalink:"/fields/offer/additional_image_link",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/additional_image_link.md",tags:[],version:"current",frontMatter:{description:"Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product."},sidebar:"tutorialSidebar",previous:{title:"Fields",permalink:"/fields/"},next:{title:"adult",permalink:"/fields/offer/adult"}},u={},g=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...a.components},{Details:i}=e;return i||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"additional_image_link",children:"additional_image_link"}),"\n",(0,l.jsx)(o.Ay,{}),"\n",(0,l.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.p,{children:"Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product."}),"\n",(0,l.jsx)(e.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Your user will se more product images"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(e.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nadditional_image_link -- extends  --- image_link\n  click image_link "/fields/offer/image_link" "image_link" _blank\n\n  click additional_image_link "/fields/offer/additional_image_link" "additional_image_link" _blank\n  style additional_image_link fill:#4cb3d4'}),"\n",(0,l.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Must be valid ",(0,l.jsx)(e.a,{href:"https://www.rfc-editor.org/rfc/rfc3986",children:"RFC 3986"})," uri"]}),"\n",(0,l.jsxs)(e.li,{children:["Must have a protocol (eg. ",(0,l.jsx)(e.code,{children:"https"}),")"]}),"\n",(0,l.jsxs)(e.li,{children:["Must have a path (eg. ",(0,l.jsx)(e.code,{children:".../my-product"}),")"]}),"\n",(0,l.jsxs)(e.li,{children:["Must be shorter than ",(0,l.jsx)(e.code,{children:"2047"})," characters"]}),"\n",(0,l.jsxs)(e.li,{children:["Unicode characters must be ",(0,l.jsx)(e.a,{href:"/advanced/encoding/url-encode",children:"url encoded"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(e.h3,{id:"do",children:"Do"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Use URL to pre-selected product variants (if applicable)"}),"\n",(0,l.jsx)(e.li,{children:"Prefer using high resolution images at least 300x300 pixels size, the bigger size the better"}),"\n",(0,l.jsx)(e.li,{children:"The product should be in the center of the image"}),"\n",(0,l.jsx)(e.li,{children:"Prefer a white background without added content"}),"\n",(0,l.jsx)(e.li,{children:"Use professional images only, not amateur, shadows from the camera flash or bad image setup is often an indicator"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Supply URIs to other things than images"}),"\n",(0,l.jsx)(e.li,{children:'Don\'t put "stickers" in the images, eg. with "30% off" "new" or "SALE"'}),"\n",(0,l.jsx)(e.li,{children:"Don't watermark the images eg. with the store logo or name"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(e.p,{children:["Here are examples of how a valid ",(0,l.jsx)(e.em,{children:"additional_image_link"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://example.com/link</g:additional_image_link>\n"})})}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://example.com/link</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>https://example.com/link</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>https://example.com/link(black)_(large)</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>https://example.com/link#foo</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>ftp://example.com/link</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>https://example.com/image1.jpg</g:additional_image_link>\n<g:additional_image_link>https://example.com/image2.jpg</g:additional_image_link>\n"})})]})]})]}),(0,l.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://example.com/link\n"})})}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://example.com/link\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttps://example.com/link\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttps://example.com/link(black)_(large)\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttps://example.com/link#foo\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttps://example.com/link?utm_source=1&utm_medium=2\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://example.com/link-%E2%84%A2-mu-20%C2%B5m\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nftp://example.com/link\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:'additional_image_link\n"https://example.com/image1.jpg,https://example.com/image2.jpg"\n'})})]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(e.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(e.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</g:additional_image_link>\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url",title:"validation_invalid_url"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://bar</g:additional_image_link>\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url_host",title:"validation_invalid_url_host"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://example%.com/link</g:additional_image_link>\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url_port",title:"validation_invalid_url_port"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>http://example.com:foo/link</g:additional_image_link>\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>foo://example.com/link</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>ftps://example.com/link</g:additional_image_link>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:"<g:additional_image_link>sftp://example.com/link</g:additional_image_link>\n"})})]})]}),(0,l.jsxs)(s.A,{value:"invalid_csv",label:"CSV",children:[(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttps://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url",title:"validation_invalid_url"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://bar\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url_host",title:"validation_invalid_url_host"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://example%.com/link\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_invalid_url_port",title:"validation_invalid_url_port"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nhttp://example.com:foo/link\n"})})]}),(0,l.jsxs)(e.admonition,{type:"danger",children:[(0,l.jsx)(r.A,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nfoo://example.com/link\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nftps://example.com/link\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-csv",children:"additional_image_link\nsftp://example.com/link\n"})})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"right"},children:(0,l.jsx)(e.strong,{children:"Property"})}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"Value"})}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:(0,l.jsx)(e.strong,{children:"Description"})})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"Url"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"False"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"True"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"True"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:(0,l.jsx)(e.strong,{children:"10"})}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,l.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://support.google.com/merchants/answer/6324370?hl=en",children:"Google Merchant Specification"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.rfc-editor.org/rfc/rfc3986",children:"Uniform Resource Identifier (URI): Generic Syntax"})}),"\n"]})]})}function p(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(x,{...a})}):x(a)}},89898:(a,e,i)=>{i.d(e,{Ay:()=>s});var l=i(74848),n=i(28453);function t(a){return(0,l.jsx)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name,children:(0,l.jsx)("code",{children:a.name})})}function s(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(t,{...a})}):t(a)}},98995:(a,e,i)=>{i.d(e,{Ay:()=>s});var l=i(74848),n=i(28453);function t(a){const e={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...a.components};return(0,l.jsx)(e.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(e.p,{children:["This field is ",(0,l.jsx)(e.a,{href:"/terminology/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function s(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(t,{...a})}):t(a)}},19365:(a,e,i)=>{i.d(e,{A:()=>s});i(96540);var l=i(34164);const n={tabItem:"tabItem_Ymn6"};var t=i(74848);function s(a){let{children:e,hidden:i,className:s}=a;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(n.tabItem,s),hidden:i,children:e})}},11470:(a,e,i)=>{i.d(e,{A:()=>b});var l=i(96540),n=i(34164),t=i(23104),s=i(56347),r=i(205),d=i(57485),o=i(31682),c=i(89466);function h(a){return l.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,l.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(a){const{values:e,children:i}=a;return(0,l.useMemo)((()=>{const a=e??function(a){return h(a).map((a=>{let{props:{value:e,label:i,attributes:l,default:n}}=a;return{value:e,label:i,attributes:l,default:n}}))}(i);return function(a){const e=(0,o.X)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,i])}function u(a){let{value:e,tabValues:i}=a;return i.some((a=>a.value===e))}function g(a){let{queryString:e=!1,groupId:i}=a;const n=(0,s.W6)(),t=function(a){let{queryString:e=!1,groupId:i}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,d.aZ)(t),(0,l.useCallback)((a=>{if(!t)return;const e=new URLSearchParams(n.location.search);e.set(t,a),n.replace({...n.location,search:e.toString()})}),[t,n])]}function x(a){const{defaultValue:e,queryString:i=!1,groupId:n}=a,t=m(a),[s,d]=(0,l.useState)((()=>function(a){let{defaultValue:e,tabValues:i}=a;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=i.find((a=>a.default))??i[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:t}))),[o,h]=g({queryString:i,groupId:n}),[x,p]=function(a){let{groupId:e}=a;const i=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,t]=(0,c.Dv)(i);return[n,(0,l.useCallback)((a=>{i&&t.set(a)}),[i,t])]}({groupId:n}),j=(()=>{const a=o??x;return u({value:a,tabValues:t})?a:null})();(0,r.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,l.useCallback)((a=>{if(!u({value:a,tabValues:t}))throw new Error(`Can't select invalid tab value=${a}`);d(a),h(a),p(a)}),[h,p,t]),tabValues:t}}var p=i(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function _(a){let{className:e,block:i,selectedValue:l,selectValue:s,tabValues:r}=a;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=a=>{const e=a.currentTarget,i=d.indexOf(e),n=r[i].value;n!==l&&(o(e),s(n))},h=a=>{let e=null;switch(a.key){case"Enter":c(a);break;case"ArrowRight":{const i=d.indexOf(a.currentTarget)+1;e=d[i]??d[0];break}case"ArrowLeft":{const i=d.indexOf(a.currentTarget)-1;e=d[i]??d[d.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},e),children:r.map((a=>{let{value:e,label:i,attributes:t}=a;return(0,f.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:a=>d.push(a),onKeyDown:h,onClick:c,...t,className:(0,n.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":l===e}),children:i??e},e)}))})}function v(a){let{lazy:e,children:i,selectedValue:n}=a;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){const a=t.find((a=>a.props.value===n));return a?(0,l.cloneElement)(a,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==n})))})}function k(a){const e=x(a);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(_,{...a,...e}),(0,f.jsx)(v,{...a,...e})]})}function b(a){const e=(0,p.A)();return(0,f.jsx)(k,{...a,children:h(a.children)},String(e))}},18175:(a,e,i)=>{i.d(e,{A:()=>n});i(96540);var l=i(74848);function n(a){let{id:e,title:i}=a;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{id:e,class:"anchor",children:i}),(0,l.jsx)("a",{class:"hash-link",href:"#"+e,title:"Direct link"})]})}},28758:(a,e,i)=>{i.d(e,{A:()=>s});i(96540);var l=i(21523),n=i(74848);const t=(a,e)=>(0,n.jsx)(n.Fragment,{children:e&&e.length>0&&(0,n.jsx)(n.Fragment,{children:e.map(((e,i)=>(0,n.jsxs)("div",{class:"cl-item",children:[(0,n.jsx)("span",{class:`cl-pill cl-${a.toLowerCase()}`,children:a})," ",(0,n.jsx)(l.o,{class:"cl-item-content",children:e})]})))})});function s(a){let{versionHistory:e,dateOnly:i}=a;return(0,n.jsx)(n.Fragment,{children:e&&e.map(((a,e)=>(0,n.jsxs)("div",{id:a.semanticVersion,style:{marginTop:"1em"},children:[i&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(a.date).toISOString().slice(0,10)]}),!i&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 [",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)]}),t("Added",a.added),t("Changed ",a.changed),t("Deprecated ",a.deprecated),t("Removed ",a.removed),t("Fixed",a.fixed),t("Security",a.security)]})))})}}}]);