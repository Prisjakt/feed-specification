"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5500],{2861:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>h,metadata:()=>g,toc:()=>u});var t=n(4848),s=n(8453),l=n(1470),r=n(9365),a=n(8175),d=(n(1503),n(8758)),c=n(6218);const h={description:"It is recommended to add this attribute if delivery costs based on weight."},o="shipping_weight",g={id:"feeds/offer/fields/shipping_weight",title:"shipping_weight",description:"It is recommended to add this attribute if delivery costs based on weight.",source:"@site/docs/feeds/offer/fields/shipping_weight.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/shipping_weight",permalink:"/feeds/offer/fields/shipping_weight",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/shipping_weight.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on weight."},sidebar:"tutorialSidebar",previous:{title:"shipping_length",permalink:"/feeds/offer/fields/shipping_length"},next:{title:"shipping_width",permalink:"/feeds/offer/fields/shipping_width"}},p={},u=[...c.RM,{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"shipping_weight",children:"shipping_weight"})}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"It is recommended to add this attribute if delivery costs based on weight."}),"\n",(0,t.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,t.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping_weight -- should be supplied together  --- shipping_length\n  click shipping_length "/feeds/offer/fields/shipping_length" "shipping_length" _blank\nshipping_weight -- should be supplied together  --- shipping_height\n  click shipping_height "/feeds/offer/fields/shipping_height" "shipping_height" _blank\nshipping_weight -- should be supplied together  --- shipping_width\n  click shipping_width "/feeds/offer/fields/shipping_width" "shipping_width" _blank\nshipping_weight -- affects price and eligibility of  --- shipping\n  click shipping "/feeds/offer/fields/shipping" "shipping" _blank\nshipping_weight -- determines label of  --- shipping_label\n  click shipping_label "/feeds/offer/fields/shipping_label" "shipping_label" _blank\n\n  click shipping_weight "/feeds/offer/fields/shipping_weight" "shipping_weight" _blank\n  style shipping_weight fill:#4cb3d4'}),"\n",(0,t.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Length must be between ",(0,t.jsx)(i.code,{children:"1-50"})," characters"]}),"\n",(0,t.jsxs)(i.li,{children:["Unit must be one of ",(0,t.jsx)(i.code,{children:"g"}),", ",(0,t.jsx)(i.code,{children:"kg"}),", ",(0,t.jsx)(i.code,{children:"lb"})," or ",(0,t.jsx)(i.code,{children:"oz"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,t.jsx)(i.em,{children:"shipping_weight"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11.2 kg</g:shipping_weight>\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11.2 kg</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 kg</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 g</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11.2 g</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 oz</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 lb</g:shipping_weight>\n"})})]})]})]}),(0,t.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11.2 kg\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11.2 kg\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11 kg\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11 g\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11.2 g\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11 oz\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11 lb\n"})})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(a.A,{id:"validation_invalid_format",title:"validation_invalid_format"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11.,.,.,111</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>unkn-own</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 </g:shipping_weight>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(a.A,{id:"validation_invalid_value",title:"validation_invalid_value"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>empty value</g:shipping_weight>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>111.222.333 kg</g:shipping_weight>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(a.A,{id:"validation_invalid_weight_unit",title:"validation_invalid_weight_unit"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping_weight>11 kilo</g:shipping_weight>\n"})})]})]}),(0,t.jsxs)(r.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_invalid_format",title:"validation_invalid_format"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:'shipping_weight\n"11.,.,.,111"\n'})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\nunkn-own\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\nempty value\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n111.222.333 kg\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_invalid_weight_unit",title:"validation_invalid_weight_unit"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping_weight\n11 kilo\n"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:(0,t.jsx)(i.strong,{children:"Property"})}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Value"})}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"string"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"0"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324503",children:"Google Merchant Specification"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},1503:(e,i,n)=>{n.d(i,{Ay:()=>r});var t=n(4848),s=n(8453);function l(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6218:(e,i,n)=>{n.d(i,{Ay:()=>a,RM:()=>l});var t=n(4848),s=n(8453);const l=[];function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(i.p,{children:["This field is ",(0,t.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},9365:(e,i,n)=>{n.d(i,{A:()=>r});n(6540);var t=n(4164);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function r(e){let{children:i,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:n,children:i})}},1470:(e,i,n)=>{n.d(i,{A:()=>b});var t=n(6540),s=n(4164),l=n(3104),r=n(6347),a=n(205),d=n(7485),c=n(1682),h=n(679);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return o(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:s}}=e;return{value:i,label:n,attributes:t,default:s}}))}(n);return function(e){const i=(0,c.XI)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function p(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function u(e){let{queryString:i=!1,groupId:n}=e;const s=(0,r.W6)(),l=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,d.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const i=new URLSearchParams(s.location.search);i.set(l,e),s.replace({...s.location,search:i.toString()})}),[l,s])]}function x(e){const{defaultValue:i,queryString:n=!1,groupId:s}=e,l=g(e),[r,d]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:l}))),[c,o]=u({queryString:n,groupId:s}),[x,m]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[s,l]=(0,h.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),m(e)}),[o,m,l]),tabValues:l}}var m=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:i,block:n,selectedValue:t,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),h=e=>{const i=e.currentTarget,n=d.indexOf(i),s=a[n].value;s!==t&&(c(i),r(s))},o=e=>{let i=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;i=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;i=d[n]??d[d.length-1];break}}i?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},i),children:a.map((e=>{let{value:i,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>d.push(e),onKeyDown:o,onClick:h,...l,className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function _(e){let{lazy:i,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==l})))})}function w(e){const i=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...i,...e}),(0,j.jsx)(_,{...i,...e})]})}function b(e){const i=(0,m.A)();return(0,j.jsx)(w,{...e,children:o(e.children)},String(i))}},8175:(e,i,n)=>{n.d(i,{A:()=>l});n(6540);var t=n(8774),s=n(4848);function l(e){let{id:i,title:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{id:i}),(0,s.jsx)("a",{class:"anchor",children:n}),(0,s.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},8758:(e,i,n)=>{n.d(i,{A:()=>r});n(6540);var t=n(6888),s=n(4848);const l=(e,i)=>(0,s.jsx)(s.Fragment,{children:i&&i.length>0&&(0,s.jsx)(s.Fragment,{children:i.map(((i,n)=>(0,s.jsxs)("div",{class:"cl-item",children:[(0,s.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,s.jsx)(t.o,{class:"cl-item-content",children:i})]})))})});function r(e){let{versionHistory:i,dateOnly:n}=e;return(0,s.jsx)(s.Fragment,{children:i&&i.map(((e,i)=>(0,s.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[n&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!n&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)]})))})}}}]);