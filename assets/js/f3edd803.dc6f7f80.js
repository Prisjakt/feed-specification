"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3330],{16694:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var t=a(74848),i=a(28453),n=a(11470),r=a(19365),l=a(18175),d=(a(89898),a(28758)),o=a(98995);const c={description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing."},u="size",h={id:"feeds/offer/fields/size",title:"size",description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing.",source:"@site/docs/feeds/offer/fields/size.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/size",permalink:"/feeds/offer/fields/size",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/size.md",tags:[],version:"current",frontMatter:{description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing."},sidebar:"tutorialSidebar",previous:{title:"shipping_width",permalink:"/feeds/offer/fields/shipping_width"},next:{title:"size_system",permalink:"/feeds/offer/fields/size_system"}},f={},x=[...o.RM,{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function m(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"size",children:"size"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Used to describe size in ",(0,t.jsx)(s.strong,{children:"fashion categories"}),". It is recommended to add this attribute for fashion products to improve results and listing."]}),"\n",(0,t.jsx)(s.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This attribute allows user to filter offers with specific size"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,t.jsx)(s.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsize -- required if size is used  --- size_system\n  click size_system "/feeds/offer/fields/size_system" "size_system" _blank\nsize -- used for conversion between size systems  --- age_group\n  click age_group "/feeds/offer/fields/age_group" "age_group" _blank\nsize -- used for conversion between size systems  --- gender\n  click gender "/feeds/offer/fields/gender" "gender" _blank\n\n  click size "/feeds/offer/fields/size" "size" _blank\n  style size fill:#4cb3d4'}),"\n",(0,t.jsx)(s.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Length must be between ",(0,t.jsx)(s.code,{children:"1-100"})," characters"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(s.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Use standard values"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(s.p,{children:["Here are examples of how a valid ",(0,t.jsx)(s.em,{children:"size"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(n.A,{children:[(0,t.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(s.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<g:size>XS</g:size>\n<g:size_system>EU</g:size_system>\n"})})}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<g:size>XS</g:size>\n<g:size_system>EU</g:size_system>\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<g:size>XXXL</g:size>\n<g:size_system>EU</g:size_system>\n"})})]})]})]}),(0,t.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(s.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csv",children:"size,size_system\nXS,EU\n"})})}),(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csv",children:"size,size_system\nXS,EU\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csv",children:"size,size_system\nXXXL,EU\n"})})]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(s.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(s.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(n.A,{children:[(0,t.jsxs)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)(s.mdxAdmonitionTitle,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<g:size>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)</g:size>\n<g:size_system>EU</g:size_system>\n"})})]}),(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)(s.mdxAdmonitionTitle,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(l.A,{id:"validation_size_without_size_system",title:"validation_size_without_size_system"})})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<g:size>XXXL</g:size>\n"})})]})]}),(0,t.jsxs)(r.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csv",children:"size,size_system\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value),EU\n"})})]}),(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsx)(l.A,{id:"validation_size_without_size_system",title:"validation_size_without_size_system"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csv",children:"size\nXXXL\n"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"right"},children:(0,t.jsx)(s.strong,{children:"Property"})}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"Value"})}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"string"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"False"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"False"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"False"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"0"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://support.google.com/merchants/answer/6324492",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},89898:(e,s,a)=>{a.d(s,{Ay:()=>r});var t=a(74848),i=a(28453);function n(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}},98995:(e,s,a)=>{a.d(s,{Ay:()=>l,RM:()=>n});var t=a(74848),i=a(28453);const n=[];function r(e){const s={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(s.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(s.p,{children:["This field is ",(0,t.jsx)(s.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},19365:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var t=a(34164);const i={tabItem:"tabItem_Ymn6"};var n=a(74848);function r(e){let{children:s,hidden:a,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:a,children:s})}},11470:(e,s,a)=>{a.d(s,{A:()=>z});var t=a(96540),i=a(34164),n=a(23104),r=a(56347),l=a(205),d=a(57485),o=a(31682),c=a(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:a}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:a,attributes:t,default:i}}=e;return{value:s,label:a,attributes:t,default:i}}))}(a);return function(e){const s=(0,o.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function f(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:a}=e;const i=(0,r.W6)(),n=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,d.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(i.location.search);s.set(n,e),i.replace({...i.location,search:s.toString()})}),[n,i])]}function m(e){const{defaultValue:s,queryString:a=!1,groupId:i}=e,n=h(e),[r,d]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!f({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:n}))),[o,u]=x({queryString:a,groupId:i}),[m,p]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,n]=(0,c.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:i}),g=(()=>{const e=o??m;return f({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,n]),tabValues:n}}var p=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){let{className:s,block:a,selectedValue:t,selectValue:r,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const s=e.currentTarget,a=d.indexOf(s),i=l[a].value;i!==t&&(o(s),r(i))},u=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;s=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;s=d[a]??d[d.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},s),children:l.map((e=>{let{value:s,label:a,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>d.push(e),onKeyDown:u,onClick:c,...n,className:(0,i.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":t===s}),children:a??s},s)}))})}function b(e){let{lazy:s,children:a,selectedValue:i}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=n.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function y(e){const s=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...s}),(0,j.jsx)(b,{...e,...s})]})}function z(e){const s=(0,p.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(s))}},18175:(e,s,a)=>{a.d(s,{A:()=>n});a(96540);var t=a(28774),i=a(74848);function n(e){let{id:s,title:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.A,{id:s}),(0,i.jsx)("a",{class:"anchor",children:a}),(0,i.jsx)("a",{class:"hash-link",href:"#"+s,title:"Direct link"})]})}},28758:(e,s,a)=>{a.d(s,{A:()=>r});a(96540);var t=a(99744),i=a(74848);const n=(e,s)=>(0,i.jsx)(i.Fragment,{children:s&&s.length>0&&(0,i.jsx)(i.Fragment,{children:s.map(((s,a)=>(0,i.jsxs)("div",{class:"cl-item",children:[(0,i.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,i.jsx)(t.o,{class:"cl-item-content",children:s})]})))})});function r(e){let{versionHistory:s,dateOnly:a}=e;return(0,i.jsx)(i.Fragment,{children:s&&s.map(((e,s)=>(0,i.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[a&&(0,i.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!a&&(0,i.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)]})))})}}}]);