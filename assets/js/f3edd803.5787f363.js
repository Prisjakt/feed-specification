"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3330],{6694:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var s=t(4848),i=t(8453),n=t(1470),r=t(9365),l=t(8175),d=(t(9898),t(8758)),o=t(8995);const c={description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing."},u="size",h={id:"feeds/offer/fields/size",title:"size",description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing.",source:"@site/docs/feeds/offer/fields/size.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/size",permalink:"/feeds/offer/fields/size",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/size.md",tags:[],version:"current",frontMatter:{description:"Used to describe size in **fashion categories**. It is recommended to add this attribute for fashion products to improve results and listing."},sidebar:"tutorialSidebar",previous:{title:"shipping_width",permalink:"/feeds/offer/fields/shipping_width"},next:{title:"size_system",permalink:"/feeds/offer/fields/size_system"}},f={},x=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"size",children:"size"}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(a.p,{children:["Used to describe size in ",(0,s.jsx)(a.strong,{children:"fashion categories"}),". It is recommended to add this attribute for fashion products to improve results and listing."]}),"\n",(0,s.jsx)(a.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"This attribute allows user to filter offers with specific size"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,s.jsx)(a.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsize -- required if size is used  --- size_system\n  click size_system "/feeds/offer/fields/size_system" "size_system" _blank\nsize -- used for conversion between size systems  --- age_group\n  click age_group "/feeds/offer/fields/age_group" "age_group" _blank\nsize -- used for conversion between size systems  --- gender\n  click gender "/feeds/offer/fields/gender" "gender" _blank\n\n  click size "/feeds/offer/fields/size" "size" _blank\n  style size fill:#4cb3d4'}),"\n",(0,s.jsx)(a.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Length must be between ",(0,s.jsx)(a.code,{children:"1-100"})," characters"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(a.h3,{id:"do",children:"Do"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Use standard values"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"example-values",children:"Example Values"}),"\n",(0,s.jsxs)(a.p,{children:["Here are examples of how a valid ",(0,s.jsx)(a.em,{children:"size"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,s.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<g:size>XS</g:size>\n"})})}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<g:size>XS</g:size>\n"})}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<g:size>XXXL</g:size>\n"})})]})]})]}),(0,s.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,s.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csv",children:"size\nXS\n"})})}),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csv",children:"size\nXS\n"})}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csv",children:"size\nXXXL\n"})})]})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(a.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,s.jsx)(a.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,s.jsxs)(a.admonition,{type:"danger",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{children:(0,s.jsx)(a.strong,{children:(0,s.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-xml",children:"<g:size>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)</g:size>\n"})})]})}),(0,s.jsx)(r.A,{value:"invalid_csv",label:"CSV",children:(0,s.jsxs)(a.admonition,{type:"danger",children:[(0,s.jsx)(l.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-csv",children:"size\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)\n"})})]})})]}),"\n",(0,s.jsx)(a.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{style:{textAlign:"right"},children:(0,s.jsx)(a.strong,{children:"Property"})}),(0,s.jsx)(a.th,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"Value"})}),(0,s.jsx)(a.th,{style:{textAlign:"left"},children:(0,s.jsx)(a.strong,{children:"Description"})})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"right"},children:"Data Type"}),(0,s.jsx)(a.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"string"})}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"right"},children:"Nested"}),(0,s.jsx)(a.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"False"})}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,s.jsx)(a.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"False"})}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,s.jsx)(a.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"False"})}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,s.jsx)(a.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.strong,{children:"0"})}),(0,s.jsx)(a.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,s.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://support.google.com/merchants/answer/6324492",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9898:(e,a,t)=>{t.d(a,{Ay:()=>r});var s=t(4848),i=t(8453);function n(e){return(0,s.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,s.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(n,{...e})}):n(e)}},8995:(e,a,t)=>{t.d(a,{Ay:()=>r});var s=t(4848),i=t(8453);function n(e){const a={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(a.admonition,{title:"Optional Field",type:"info",children:(0,s.jsxs)(a.p,{children:["This field is ",(0,s.jsx)(a.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function r(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(n,{...e})}):n(e)}},9365:(e,a,t)=>{t.d(a,{A:()=>r});t(6540);var s=t(4164);const i={tabItem:"tabItem_Ymn6"};var n=t(4848);function r(e){let{children:a,hidden:t,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:a})}},1470:(e,a,t)=>{t.d(a,{A:()=>A});var s=t(6540),i=t(4164),n=t(3104),r=t(6347),l=t(205),d=t(7485),o=t(1682),c=t(9466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:t}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:s,default:i}}=e;return{value:a,label:t,attributes:s,default:i}}))}(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function f(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function x(e){let{queryString:a=!1,groupId:t}=e;const i=(0,r.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,d.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(i.location.search);a.set(n,e),i.replace({...i.location,search:a.toString()})}),[n,i])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,n=h(e),[r,d]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:n}))),[o,u]=x({queryString:t,groupId:i}),[m,p]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,n]=(0,c.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:i}),g=(()=>{const e=o??m;return f({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,n]),tabValues:n}}var p=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:a,block:t,selectedValue:s,selectValue:r,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const a=e.currentTarget,t=d.indexOf(a),i=l[t].value;i!==s&&(o(a),r(i))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>d.push(e),onKeyDown:u,onClick:c,...n,className:(0,i.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":s===a}),children:t??a},a)}))})}function b(e){let{lazy:a,children:t,selectedValue:i}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function y(e){const a=m(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...a}),(0,j.jsx)(b,{...e,...a})]})}function A(e){const a=(0,p.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(a))}},8175:(e,a,t)=>{t.d(a,{A:()=>n});t(6540);var s=t(8774),i=t(4848);function n(e){let{id:a,title:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{id:a}),(0,i.jsx)("a",{class:"anchor",children:t}),(0,i.jsx)("a",{class:"hash-link",href:"#"+a,title:"Direct link"})]})}},8758:(e,a,t)=>{t.d(a,{A:()=>r});t(6540);var s=t(9744),i=t(4848);const n=(e,a)=>(0,i.jsx)(i.Fragment,{children:a&&a.length>0&&(0,i.jsx)(i.Fragment,{children:a.map(((a,t)=>(0,i.jsxs)("div",{class:"cl-item",children:[(0,i.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,i.jsx)(s.o,{class:"cl-item-content",children:a})]})))})});function r(e){let{versionHistory:a,dateOnly:t}=e;return(0,i.jsx)(i.Fragment,{children:a&&a.map(((e,a)=>(0,i.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[t&&(0,i.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!t&&(0,i.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)]})))})}}}]);