"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3097],{61939:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>v,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var l=a(74848),t=a(28453),n=a(11470),r=a(19365),s=a(18175),d=(a(89898),a(28758)),o=a(98995);const c={description:"This field is used together with [`availability`](/fields/offer/availability) for `preorder` or `backorder` values."},h="availability_date",u={id:"fields/offer/availability_date",title:"availability_date",description:"This field is used together with [`availability`](/fields/offer/availability.md) for `preorder` or `backorder` values.",source:"@site/docs/fields/offer/availability_date.md",sourceDirName:"fields/offer",slug:"/fields/offer/availability_date",permalink:"/fields/offer/availability_date",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/availability_date.md",tags:[],version:"current",frontMatter:{description:"This field is used together with [`availability`](/fields/offer/availability.md) for `preorder` or `backorder` values."},sidebar:"tutorialSidebar",previous:{title:"availability",permalink:"/fields/offer/availability"},next:{title:"brand",permalink:"/fields/offer/brand"}},v={},x=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Effects When Omitted",id:"effects-when-omitted",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function f(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:a}=i;return a||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"availability_date",children:"availability_date"}),"\n",(0,l.jsx)(o.Ay,{}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(i.p,{children:["This field is used together with ",(0,l.jsx)(i.a,{href:"/fields/offer/availability",children:(0,l.jsx)(i.code,{children:"availability"})})," for ",(0,l.jsx)(i.code,{children:"preorder"})," or ",(0,l.jsx)(i.code,{children:"backorder"})," values."]}),"\n",(0,l.jsx)(i.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"We will display a label alongside with availability indicator that says when the product is available"}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"effects-when-omitted",children:"Effects When Omitted"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["No information is available for customer regarding when a ",(0,l.jsx)(i.code,{children:"preorder"})," or ",(0,l.jsx)(i.code,{children:"backorder"})," offer is available"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\navailability_date -- used by  --- availability\n  click availability "/fields/offer/availability" "availability" _blank\n\n  click availability_date "/fields/offer/availability_date" "availability_date" _blank\n  style availability_date fill:#4cb3d4'}),"\n",(0,l.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Value must parse as valid ISO 8601, see examples"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Include the time portion of the date (if missing 12:00 AM CET will be set)"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,l.jsx)(i.em,{children:"availability_date"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n<g:availability>preorder</g:availability>\n"})})}),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n<g:availability>preorder</g:availability>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>preorder</g:availability>\n"})})]})]})]}),(0,l.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder\n"})})}),(0,l.jsxs)(a,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-03-21,preorder\n"})})]})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_invalid_format",title:"validation_invalid_format"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021/12/22/12:23:00</g:availability_date>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>today</g:availability_date>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>in_stock</g:availability>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>out_of_stock</g:availability>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>download</g:availability>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>not_available_for_purchase</g:availability>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_missing_field",title:"validation_missing_field"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:availability_date></g:availability_date>\n<g:availability>preorder</g:availability>\n"})})]})]}),(0,l.jsxs)(r.A,{value:"invalid_csv",label:"CSV",children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_invalid_format",title:"validation_invalid_format"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date\n2021/12/22/12:23:00\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date\ntoday\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-03-21,in_stock\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-03-21,out_of_stock\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-03-21,download\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n2021-03-21,not_available_for_purchase\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(s.A,{id:"validation_missing_field",title:"validation_missing_field"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"availability_date,availability\n,preorder\n"})})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{style:{textAlign:"right"},children:(0,l.jsx)(i.strong,{children:"Property"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"Value"})}),(0,l.jsx)(i.th,{style:{textAlign:"left"},children:(0,l.jsx)(i.strong,{children:"Description"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"date"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"0"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,l.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324470",children:"Google Merchant Specification"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"Wikipedia on ISO 8601"})}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},89898:(e,i,a)=>{a.d(i,{Ay:()=>r});var l=a(74848),t=a(28453);function n(e){return(0,l.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,l.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(n,{...e})}):n(e)}},98995:(e,i,a)=>{a.d(i,{Ay:()=>r});var l=a(74848),t=a(28453);function n(e){const i={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,l.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(i.p,{children:["This field is ",(0,l.jsx)(i.a,{href:"/terminology/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function r(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(n,{...e})}):n(e)}},19365:(e,i,a)=>{a.d(i,{A:()=>r});a(96540);var l=a(34164);const t={tabItem:"tabItem_Ymn6"};var n=a(74848);function r(e){let{children:i,hidden:a,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,r),hidden:a,children:i})}},11470:(e,i,a)=>{a.d(i,{A:()=>_});var l=a(96540),t=a(34164),n=a(23104),r=a(56347),s=a(205),d=a(57485),o=a(31682),c=a(89466);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:i,children:a}=e;return(0,l.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:a,attributes:l,default:t}}=e;return{value:i,label:a,attributes:l,default:t}}))}(a);return function(e){const i=(0,o.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,a])}function v(e){let{value:i,tabValues:a}=e;return a.some((e=>e.value===i))}function x(e){let{queryString:i=!1,groupId:a}=e;const t=(0,r.W6)(),n=function(e){let{queryString:i=!1,groupId:a}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:i,groupId:a});return[(0,d.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const i=new URLSearchParams(t.location.search);i.set(n,e),t.replace({...t.location,search:i.toString()})}),[n,t])]}function f(e){const{defaultValue:i,queryString:a=!1,groupId:t}=e,n=u(e),[r,d]=(0,l.useState)((()=>function(e){let{defaultValue:i,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!v({value:i,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:n}))),[o,h]=x({queryString:a,groupId:t}),[f,g]=function(e){let{groupId:i}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(i),[t,n]=(0,c.Dv)(a);return[t,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:t}),p=(()=>{const e=o??f;return v({value:e,tabValues:n})?e:null})();(0,s.A)((()=>{p&&d(p)}),[p]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!v({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,n]),tabValues:n}}var g=a(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function m(e){let{className:i,block:a,selectedValue:l,selectValue:r,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const i=e.currentTarget,a=d.indexOf(i),t=s[a].value;t!==l&&(o(i),r(t))},h=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;i=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;i=d[a]??d[d.length-1];break}}i?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},i),children:s.map((e=>{let{value:i,label:a,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===i?0:-1,"aria-selected":l===i,ref:e=>d.push(e),onKeyDown:h,onClick:c,...n,className:(0,t.A)("tabs__item",p.tabItem,n?.className,{"tabs__item--active":l===i}),children:a??i},i)}))})}function j(e){let{lazy:i,children:a,selectedValue:t}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,l.cloneElement)(e,{key:i,hidden:e.props.value!==t})))})}function y(e){const i=f(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",p.tabList),children:[(0,b.jsx)(m,{...e,...i}),(0,b.jsx)(j,{...e,...i})]})}function _(e){const i=(0,g.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(i))}},18175:(e,i,a)=>{a.d(i,{A:()=>t});a(96540);var l=a(74848);function t(e){let{id:i,title:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{id:i,class:"anchor",children:a}),(0,l.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,a)=>{a.d(i,{A:()=>r});a(96540);var l=a(21523),t=a(74848);const n=(e,i)=>(0,t.jsx)(t.Fragment,{children:i&&i.length>0&&(0,t.jsx)(t.Fragment,{children:i.map(((i,a)=>(0,t.jsxs)("div",{class:"cl-item",children:[(0,t.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,t.jsx)(l.o,{class:"cl-item-content",children:i})]})))})});function r(e){let{versionHistory:i,dateOnly:a}=e;return(0,t.jsx)(t.Fragment,{children:i&&i.map(((e,i)=>(0,t.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[a&&(0,t.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!a&&(0,t.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)]})))})}}}]);