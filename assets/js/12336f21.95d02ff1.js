"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9691],{50624:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var l=r(74848),t=r(28453),i=r(11470),s=r(19365),a=r(18175),d=(r(89898),r(28758)),o=r(98995);const c={description:"Sets the demographic age your product is designed for."},u="age_group",h={id:"feeds/offer/fields/age_group",title:"age_group",description:"Sets the demographic age your product is designed for.",source:"@site/docs/feeds/offer/fields/age_group.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/age_group",permalink:"/feeds/offer/fields/age_group",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/age_group.md",tags:[],version:"current",frontMatter:{description:"Sets the demographic age your product is designed for."},sidebar:"tutorialSidebar",previous:{title:"affiliate_link",permalink:"/feeds/offer/fields/affiliate_link"},next:{title:"availability",permalink:"/feeds/offer/fields/availability"}},g={},x=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Allowed Enum Values",id:"allowed-enum-values",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"age_group",children:"age_group"}),"\n",(0,l.jsx)(o.Ay,{}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Sets the demographic age your product is designed for."}),"\n",(0,l.jsx)(n.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(n.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nage_group -- may improve info for  --- size\n  click size "/feeds/offer/fields/size" "size" _blank\n\n  click age_group "/feeds/offer/fields/age_group" "age_group" _blank\n  style age_group fill:#4cb3d4'}),"\n",(0,l.jsx)(n.h2,{id:"allowed-enum-values",children:"Allowed Enum Values"}),"\n",(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)(n.p,{children:"adult"})})})}),(0,l.jsx)("dd",{}),(0,l.jsx)("dt",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)(n.p,{children:"infant"})})})}),(0,l.jsx)("dd",{}),(0,l.jsx)("dt",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)(n.p,{children:"kids"})})})}),(0,l.jsx)("dd",{}),(0,l.jsx)("dt",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)(n.p,{children:"newborn"})})})}),(0,l.jsx)("dd",{}),(0,l.jsx)("dt",{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)(n.p,{children:"toddler"})})})}),(0,l.jsx)("dd",{})]}),"\n",(0,l.jsx)(n.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Value must be one of the allowed enum values"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(n.h3,{id:"do",children:"Do"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"It is recommended to add this attribute for fashion products to improve results and listing"}),"\n",(0,l.jsxs)(n.li,{children:["Use to indicate demographic, not an ",(0,l.jsx)(n.a,{href:"/feeds/offer/fields/adult",children:(0,l.jsx)(n.code,{children:"adult"})})," audience"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(n.p,{children:["Here are examples of how a valid ",(0,l.jsx)(n.em,{children:"age_group"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(n.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>adult</g:age_group>\n"})})}),(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>adult</g:age_group>\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>infant</g:age_group>\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>kids</g:age_group>\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>newborn</g:age_group>\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>toddler</g:age_group>\n"})})]})]})]}),(0,l.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(n.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\nadult\n"})})}),(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\nadult\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\ninfant\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\nkids\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\nnewborn\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\ntoddler\n"})})]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(n.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(n.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,l.jsxs)(n.admonition,{type:"danger",children:[(0,l.jsx)(n.mdxAdmonitionTitle,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(a.A,{id:"validation_invalid_enum",title:"validation_invalid_enum"})})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<g:age_group>unknown</g:age_group>\n"})})]})}),(0,l.jsx)(s.A,{value:"invalid_csv",label:"CSV",children:(0,l.jsxs)(n.admonition,{type:"danger",children:[(0,l.jsx)(a.A,{id:"validation_invalid_enum",title:"validation_invalid_enum"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csv",children:"age_group\nunknown\n"})})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"right"},children:(0,l.jsx)(n.strong,{children:"Property"})}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"Value"})}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:"Description"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"string"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"False"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"False"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"False"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:(0,l.jsx)(n.strong,{children:"0"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://support.google.com/merchants/answer/6324463",children:"Google Merchant Specification"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},89898:(e,n,r)=>{r.d(n,{Ay:()=>s});var l=r(74848),t=r(28453);function i(e){return(0,l.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,l.jsx)("code",{children:e.name})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},98995:(e,n,r)=>{r.d(n,{Ay:()=>s});var l=r(74848),t=r(28453);function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,l.jsx)(n.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(n.p,{children:["This field is ",(0,l.jsx)(n.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var l=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>_});var l=r(96540),t=r(34164),i=r(23104),s=r(56347),a=r(205),d=r(57485),o=r(31682),c=r(89466);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[s,d]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[o,u]=x({queryString:r,groupId:t}),[p,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,c.Dv)(r);return[t,(0,l.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),j=(()=>{const e=o??p;return g({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function v(e){let{className:n,block:r,selectedValue:l,selectValue:s,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),t=a[r].value;t!==l&&(o(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,t.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function _(e){const n=(0,f.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},18175:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var l=r(28774),t=r(74848);function i(e){let{id:n,title:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.A,{id:n}),(0,t.jsx)("a",{class:"anchor",children:r}),(0,t.jsx)("a",{class:"hash-link",href:"#"+n,title:"Direct link"})]})}},28758:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var l=r(21523),t=r(74848);const i=(e,n)=>(0,t.jsx)(t.Fragment,{children:n&&n.length>0&&(0,t.jsx)(t.Fragment,{children:n.map(((n,r)=>(0,t.jsxs)("div",{class:"cl-item",children:[(0,t.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,t.jsx)(l.o,{class:"cl-item-content",children:n})]})))})});function s(e){let{versionHistory:n,dateOnly:r}=e;return(0,t.jsx)(t.Fragment,{children:n&&n.map(((e,n)=>(0,t.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[r&&(0,t.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!r&&(0,t.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)]})))})}}}]);