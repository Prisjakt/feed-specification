"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5971],{72089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>f});var n=a(74848),r=a(28453),i=a(11470),s=a(19365),l=a(18175),d=(a(89898),a(28758)),c=a(98995);const o={description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."},u="mpn",h={id:"feeds/product/fields/mpn",title:"mpn",description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently.",source:"@site/docs/feeds/product/fields/mpn.md",sourceDirName:"feeds/product/fields",slug:"/feeds/product/fields/mpn",permalink:"/feeds/product/fields/mpn",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/fields/mpn.md",tags:[],version:"current",frontMatter:{description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."},sidebar:"tutorialSidebar",previous:{title:"item_group_id",permalink:"/feeds/product/fields/item_group_id"},next:{title:"product_detail",permalink:"/feeds/product/fields/product_detail"}},p={},f=[...c.RM,{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"mpn",children:"mpn"}),"\n",(0,n.jsx)(c.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."}),"\n",(0,n.jsx)(t.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Including this will help indexing your products faster on Pricespy."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Length must be between ",(0,n.jsx)(t.code,{children:"1-70"})," characters"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(t.h3,{id:"do",children:"Do"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only MPNs created by a manufacturer should be added here."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-values",children:"Example Values"}),"\n",(0,n.jsxs)(t.p,{children:["Here are examples of how a valid ",(0,n.jsx)(t.em,{children:"mpn"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,n.jsx)(t.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<g:mpn>SM-G920F</g:mpn>\n"})})}),(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<g:mpn>SM-G920F</g:mpn>\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<g:mpn>MGCH3LL/A</g:mpn>\n"})})]})]})]}),(0,n.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,n.jsx)(t.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csv",children:"mpn\nSM-G920F\n"})})}),(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csv",children:"mpn\nSM-G920F\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csv",children:"mpn\nMGCH3LL/A\n"})})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,n.jsxs)(t.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.jsx)(t.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<g:mpn>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:mpn>\n"})})]})}),(0,n.jsx)(s.A,{value:"invalid_csv",label:"CSV",children:(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csv",children:"mpn\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)\n"})})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"Property"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"Value"})}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Data Type"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Nested"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"False"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"False"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"False"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"0"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2024-03-30"}],dateOnly:!0}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://support.google.com/manufacturers/answer/7421352",children:"Google Manufacturer Specification"})}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},89898:(e,t,a)=>{a.d(t,{Ay:()=>s});var n=a(74848),r=a(28453);function i(e){return(0,n.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,n.jsx)("code",{children:e.name})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},98995:(e,t,a)=>{a.d(t,{Ay:()=>l,RM:()=>i});var n=a(74848),r=a(28453);const i=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{title:"Optional Field",type:"info",children:(0,n.jsxs)(t.p,{children:["This field is ",(0,n.jsx)(t.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(96540),r=a(34164),i=a(23104),s=a(56347),l=a(205),d=a(57485),c=a(31682),o=a(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=f({queryString:a,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,a=d.indexOf(t),r=l[a].value;r!==n&&(c(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function b(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function A(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},18175:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(28774),r=a(74848);function i(e){let{id:t,title:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{id:t}),(0,r.jsx)("a",{class:"anchor",children:a}),(0,r.jsx)("a",{class:"hash-link",href:"#"+t,title:"Direct link"})]})}},28758:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(99744),r=a(74848);const i=(e,t)=>(0,r.jsx)(r.Fragment,{children:t&&t.length>0&&(0,r.jsx)(r.Fragment,{children:t.map(((t,a)=>(0,r.jsxs)("div",{class:"cl-item",children:[(0,r.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,r.jsx)(n.o,{class:"cl-item-content",children:t})]})))})});function s(e){let{versionHistory:t,dateOnly:a}=e;return(0,r.jsx)(r.Fragment,{children:t&&t.map(((e,t)=>(0,r.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[a&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!a&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)]})))})}}}]);