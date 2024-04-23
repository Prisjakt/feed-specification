"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9912],{97052:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>h,default:()=>x,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var t=n(74848),l=n(28453),s=n(11470),r=n(19365),a=n(18175),d=(n(89898),n(28758)),o=n(98995);const c={description:"Shipping label allows mapping your inventory to specific shipping service. Please see our [documentation for shipping services for details](https://support.prisjakt.nu/en/articles/5807189-shipping-services)."},h="shipping_label",p={id:"feeds/offer/fields/shipping_label",title:"shipping_label",description:"Shipping label allows mapping your inventory to specific shipping service. Please see our [documentation for shipping services for details](https://support.prisjakt.nu/en/articles/5807189-shipping-services).",source:"@site/docs/feeds/offer/fields/shipping_label.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/shipping_label",permalink:"/feeds/offer/fields/shipping_label",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/shipping_label.md",tags:[],version:"current",frontMatter:{description:"Shipping label allows mapping your inventory to specific shipping service. Please see our [documentation for shipping services for details](https://support.prisjakt.nu/en/articles/5807189-shipping-services)."},sidebar:"tutorialSidebar",previous:{title:"shipping_height",permalink:"/feeds/offer/fields/shipping_height"},next:{title:"shipping_length",permalink:"/feeds/offer/fields/shipping_length"}},u={},g=[...o.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function f(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"shipping_label",children:"shipping_label"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(i.p,{children:["Shipping label allows mapping your inventory to specific shipping service. Please see our ",(0,t.jsx)(i.a,{href:"https://support.prisjakt.nu/en/articles/5807189-shipping-services",children:"documentation for shipping services for details"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,t.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping_label -- might be determined by  --- shipping_length\n  click shipping_length "/feeds/offer/fields/shipping_length" "shipping_length" _blank\nshipping_label -- might be determined by  --- shipping_height\n  click shipping_height "/feeds/offer/fields/shipping_height" "shipping_height" _blank\nshipping_label -- might be determined by  --- shipping_weight\n  click shipping_weight "/feeds/offer/fields/shipping_weight" "shipping_weight" _blank\nshipping_label -- might be determined by  --- shipping_width\n  click shipping_width "/feeds/offer/fields/shipping_width" "shipping_width" _blank\nshipping_label -- affects price and eligibility of  --- shipping\n  click shipping "/feeds/offer/fields/shipping" "shipping" _blank\n\n  click shipping_label "/feeds/offer/fields/shipping_label" "shipping_label" _blank\n  style shipping_label fill:#4cb3d4'}),"\n",(0,t.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A maximum of 10 labels is allowed"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Choose your own values for shipping labels based on your inventory"}),"\n",(0,t.jsx)(i.li,{children:"Suggested types of products that should get own shipping_label: oversized products (i.e. white goods), perishable products (i.e. groceries)"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,t.jsx)(i.em,{children:"shipping_label"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_label>bulky</g:shipping_label>\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_label>bulky</g:shipping_label>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_label>dhl/free</g:shipping_label>\n"})})]})]})]}),(0,t.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_label\nbulky\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_label\nbulky\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_label\ndhl/free\n"})})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(a.A,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_label>a/b/c/d/e/f/g/h/i/j/k</g:shipping_label>\n"})})]})}),(0,t.jsx)(r.A,{value:"invalid_csv",label:"CSV",children:(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_label\na/b/c/d/e/f/g/h/i/j/k\n"})})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:(0,t.jsx)(i.strong,{children:"Property"})}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Value"})}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"List[String]"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"True"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"10"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324504",children:"Google Merchant Specification"})}),"\n"]})]})}function x(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},89898:(e,i,n)=>{n.d(i,{Ay:()=>r});var t=n(74848),l=n(28453);function s(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},98995:(e,i,n)=>{n.d(i,{Ay:()=>a,RM:()=>s});var t=n(74848),l=n(28453);const s=[];function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(i.p,{children:["This field is ",(0,t.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},19365:(e,i,n)=>{n.d(i,{A:()=>r});n(96540);var t=n(34164);const l={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:i,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:n,children:i})}},11470:(e,i,n)=>{n.d(i,{A:()=>_});var t=n(96540),l=n(34164),s=n(23104),r=n(56347),a=n(205),d=n(57485),o=n(31682),c=n(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:l}}=e;return{value:i,label:n,attributes:t,default:l}}))}(n);return function(e){const i=(0,o.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function u(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function g(e){let{queryString:i=!1,groupId:n}=e;const l=(0,r.W6)(),s=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,d.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const i=new URLSearchParams(l.location.search);i.set(s,e),l.replace({...l.location,search:i.toString()})}),[s,l])]}function f(e){const{defaultValue:i,queryString:n=!1,groupId:l}=e,s=p(e),[r,d]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:s}))),[o,h]=g({queryString:n,groupId:l}),[f,x]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[l,s]=(0,c.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),m=(()=>{const e=o??f;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:i,block:n,selectedValue:t,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const i=e.currentTarget,n=d.indexOf(i),l=a[n].value;l!==t&&(o(i),r(l))},h=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;i=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;i=d[n]??d[d.length-1];break}}i?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},i),children:a.map((e=>{let{value:i,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>d.push(e),onKeyDown:h,onClick:c,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function v(e){let{lazy:i,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==l})))})}function y(e){const i=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...e,...i}),(0,b.jsx)(v,{...e,...i})]})}function _(e){const i=(0,x.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(i))}},18175:(e,i,n)=>{n.d(i,{A:()=>s});n(96540);var t=n(28774),l=n(74848);function s(e){let{id:i,title:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{id:i}),(0,l.jsx)("a",{class:"anchor",children:n}),(0,l.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,n)=>{n.d(i,{A:()=>r});n(96540);var t=n(99744),l=n(74848);const s=(e,i)=>(0,l.jsx)(l.Fragment,{children:i&&i.length>0&&(0,l.jsx)(l.Fragment,{children:i.map(((i,n)=>(0,l.jsxs)("div",{class:"cl-item",children:[(0,l.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,l.jsx)(t.o,{class:"cl-item-content",children:i})]})))})});function r(e){let{versionHistory:i,dateOnly:n}=e;return(0,l.jsx)(l.Fragment,{children:i&&i.map(((e,i)=>(0,l.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[n&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!n&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),s("Added",e.added),s("Changed ",e.changed),s("Deprecated ",e.deprecated),s("Removed ",e.removed),s("Fixed",e.fixed),s("Security",e.security)]})))})}}}]);