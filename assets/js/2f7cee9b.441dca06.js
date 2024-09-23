"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9966],{3724:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>u,contentTitle:()=>m,default:()=>j,frontMatter:()=>o,metadata:()=>h,toc:()=>p});var n=i(4848),s=i(8453),l=i(1470),t=i(9365),a=i(8175),c=(i(1503),i(8758)),d=i(6218);const o={description:"This is product price that is active for users with active membership"},m="member_price",h={id:"feeds/offer/fields/member_price",title:"member_price",description:"This is product price that is active for users with active membership",source:"@site/docs/feeds/offer/fields/member_price.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/member_price",permalink:"/feeds/offer/fields/member_price",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/member_price.md",tags:[],version:"current",frontMatter:{description:"This is product price that is active for users with active membership"},sidebar:"tutorialSidebar",previous:{title:"material",permalink:"/feeds/offer/fields/material"},next:{title:"mpn",permalink:"/feeds/offer/fields/mpn"}},u={},p=[...d.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"member_price",children:"member_price"})}),"\n",(0,n.jsx)(d.Ay,{}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"This is product price that is active for users with active membership"}),"\n",(0,n.jsx)(r.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,n.jsx)(r.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nmember_price -- overrides if member  --- price\n  click price "/feeds/offer/fields/price" "price" _blank\nmember_price -- overrides if member  --- sale_price\n  click sale_price "/feeds/offer/fields/sale_price" "sale_price" _blank\n\n  click member_price "/feeds/offer/fields/member_price" "member_price" _blank\n  style member_price fill:#4cb3d4'}),"\n",(0,n.jsx)(r.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Must be a number (value) followed by a space and a currency (unit)"}),"\n",(0,n.jsxs)(r.li,{children:["Number ",(0,n.jsx)(r.em,{children:"may"})," have ",(0,n.jsx)(r.strong,{children:"two decimals"}),", separated by a ",(0,n.jsx)(r.code,{children:"."})," (dot)"]}),"\n",(0,n.jsxs)(r.li,{children:["Currency must be three upper case characters and a valid ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})," currency"]}),"\n",(0,n.jsxs)(r.li,{children:["Zero prices are ",(0,n.jsx)(r.strong,{children:"not"})," allowed"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(r.h3,{id:"do",children:"Do"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Price sent in feed should be the same as the price value on your product page"}),"\n",(0,n.jsx)(r.li,{children:"Currency sent in feed should match currency on your product page"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Do ",(0,n.jsx)(r.strong,{children:"not"})," include extra charges in the cost (such as shipping cost)"]}),"\n",(0,n.jsxs)(r.li,{children:["Do ",(0,n.jsx)(r.strong,{children:"not"})," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,n.jsx)(r.code,{children:"10000.50 SEK"}),")"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example-values",children:"Example Values"}),"\n",(0,n.jsxs)(r.p,{children:["Here are examples of how a valid ",(0,n.jsx)(r.em,{children:"member_price"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(t.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,n.jsx)(r.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>99.99 SEK</pj:member_price>\n"})})}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>99.99 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>100 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>SEK 100</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>99,99 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>10,000.00 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>10 000.00 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>10.000 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>1.144.000 SEK</pj:member_price>\n"})})]})]})]}),(0,n.jsxs)(t.A,{value:"valid_csv",label:"CSV",children:[(0,n.jsx)(r.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n99.99 SEK\n"})})}),(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n99.99 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n100 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\nSEK 100\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:'member_price\n"99,99 SEK"\n'})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:'member_price\n"10,000.00 SEK"\n'})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n10 000.00 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n10.000 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n1.144.000 SEK\n"})})]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,n.jsxs)(r.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.jsx)(r.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(t.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.mdxAdmonitionTitle,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(a.A,{id:"validation_missing_currency",title:"validation_missing_currency"})})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>100$</pj:member_price>\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.mdxAdmonitionTitle,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(a.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"})})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>SEK</pj:member_price>\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.mdxAdmonitionTitle,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(a.A,{id:"validation_not_number",title:"validation_not_number"})})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>foo SEK</pj:member_price>\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.mdxAdmonitionTitle,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(a.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"})})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>-10 SEK</pj:member_price>\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>0 SEK</pj:member_price>\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(r.mdxAdmonitionTitle,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(a.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"})})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:"<pj:member_price>$100</pj:member_price>\n"})})]})]}),(0,n.jsxs)(t.A,{value:"invalid_csv",label:"CSV",children:[(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(a.A,{id:"validation_missing_currency",title:"validation_missing_currency"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n100$\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(a.A,{id:"validation_missing_price_value",title:"validation_missing_price_value"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\nSEK\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(a.A,{id:"validation_not_number",title:"validation_not_number"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n10.0.00.00 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n10.0.00.00 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\nfoo SEK\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(a.A,{id:"validation_not_positive_number",title:"validation_not_positive_number"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n-10 SEK\n"})}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n0 SEK\n"})})]}),(0,n.jsxs)(r.admonition,{type:"danger",children:[(0,n.jsx)(a.A,{id:"validation_unknown_currency",title:"validation_unknown_currency"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csv",children:"member_price\n$100\n"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"right"},children:(0,n.jsx)(r.strong,{children:"Property"})}),(0,n.jsx)(r.th,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"Value"})}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:(0,n.jsx)(r.strong,{children:"Description"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"right"},children:"Data Type"}),(0,n.jsx)(r.td,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"price"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"right"},children:"Nested"}),(0,n.jsx)(r.td,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"False"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,n.jsx)(r.td,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"False"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,n.jsx)(r.td,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"False"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,n.jsx)(r.td,{style:{textAlign:"center"},children:(0,n.jsx)(r.strong,{children:"0"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(c.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,n.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"Wikipedia on ISO 4217 Currency codes"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://storage.googleapis.com/prisjakt-namespace/ns%60",children:"Prisjakt XML namespace"})}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1503:(e,r,i)=>{i.d(r,{Ay:()=>t});var n=i(4848),s=i(8453);function l(e){return(0,n.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,n.jsx)("code",{children:e.name})})}function t(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6218:(e,r,i)=>{i.d(r,{Ay:()=>a,RM:()=>l});var n=i(4848),s=i(8453);const l=[];function t(e){const r={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(r.admonition,{title:"Optional Field",type:"info",children:(0,n.jsxs)(r.p,{children:["This field is ",(0,n.jsx)(r.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},9365:(e,r,i)=>{i.d(r,{A:()=>t});i(6540);var n=i(4164);const s={tabItem:"tabItem_Ymn6"};var l=i(4848);function t(e){let{children:r,hidden:i,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,t),hidden:i,children:r})}},1470:(e,r,i)=>{i.d(r,{A:()=>y});var n=i(6540),s=i(4164),l=i(3104),t=i(6347),a=i(205),c=i(7485),d=i(1682),o=i(679);function m(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:i}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return m(e).map((e=>{let{props:{value:r,label:i,attributes:n,default:s}}=e;return{value:r,label:i,attributes:n,default:s}}))}(i);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,i])}function u(e){let{value:r,tabValues:i}=e;return i.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:i}=e;const s=(0,t.W6)(),l=function(e){let{queryString:r=!1,groupId:i}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:r,groupId:i});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function x(e){const{defaultValue:r,queryString:i=!1,groupId:s}=e,l=h(e),[t,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[d,m]=p({queryString:i,groupId:s}),[x,j]=function(e){let{groupId:r}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,l]=(0,o.Dv)(i);return[s,(0,n.useCallback)((e=>{i&&l.set(e)}),[i,l])]}({groupId:s}),g=(()=>{const e=d??x;return u({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),j(e)}),[m,j,l]),tabValues:l}}var j=i(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(4848);function b(e){let{className:r,block:i,selectedValue:n,selectValue:t,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),o=e=>{const r=e.currentTarget,i=c.indexOf(r),s=a[i].value;s!==n&&(d(r),t(s))},m=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;r=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;r=c[i]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},r),children:a.map((e=>{let{value:r,label:i,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:m,onClick:o,...l,className:(0,s.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===r}),children:i??r},r)}))})}function v(e){let{lazy:r,children:i,selectedValue:l}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function _(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...r,...e}),(0,f.jsx)(v,{...r,...e})]})}function y(e){const r=(0,j.A)();return(0,f.jsx)(_,{...e,children:m(e.children)},String(r))}},8175:(e,r,i)=>{i.d(r,{A:()=>l});i(6540);var n=i(8774),s=i(4848);function l(e){let{id:r,title:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{id:r}),(0,s.jsx)("a",{class:"anchor",children:i}),(0,s.jsx)("a",{class:"hash-link",href:"#"+r,title:"Direct link"})]})}},8758:(e,r,i)=>{i.d(r,{A:()=>t});i(6540);var n=i(6888),s=i(4848);const l=(e,r)=>(0,s.jsx)(s.Fragment,{children:r&&r.length>0&&(0,s.jsx)(s.Fragment,{children:r.map(((r,i)=>(0,s.jsxs)("div",{class:"cl-item",children:[(0,s.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,s.jsx)(n.o,{class:"cl-item-content",children:r})]})))})});function t(e){let{versionHistory:r,dateOnly:i}=e;return(0,s.jsx)(s.Fragment,{children:r&&r.map(((e,r)=>(0,s.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[i&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!i&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)]})))})}}}]);