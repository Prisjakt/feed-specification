"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6559],{60546:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>x,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var t=n(74848),r=n(28453),l=n(11470),i=n(19365),s=n(18175),d=(n(89898),n(28758)),o=n(98995);const c={description:"The brand attribute is used to indicate a product's brand/manufacturer name."},u="brand",h={id:"feeds/offer/fields/brand",title:"brand",description:"The brand attribute is used to indicate a product's brand/manufacturer name.",source:"@site/docs/feeds/offer/fields/brand.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/brand",permalink:"/feeds/offer/fields/brand",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/brand.md",tags:[],version:"current",frontMatter:{description:"The brand attribute is used to indicate a product's brand/manufacturer name."},sidebar:"tutorialSidebar",previous:{title:"availability_date",permalink:"/feeds/offer/fields/availability_date"},next:{title:"color",permalink:"/feeds/offer/fields/color"}},x={},f=[...o.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"brand",children:"brand"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(a.p,{children:"The brand attribute is used to indicate a product's brand/manufacturer name."}),"\n",(0,t.jsx)(a.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Length must be between ",(0,t.jsx)(a.code,{children:"1-70"})," characters"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(a.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Use only valid brands"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Don't set ",(0,t.jsx)(a.code,{children:"N/A"}),", ",(0,t.jsx)(a.code,{children:"generic"}),", ",(0,t.jsx)(a.code,{children:"no name"}),", ",(0,t.jsx)(a.code,{children:"unknown"})," and similar brand names as they are of no help when indexing your products/offers"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(a.p,{children:["Here are examples of how a valid ",(0,t.jsx)(a.em,{children:"brand"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(i.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Prisjakt]]></g:brand>\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Prisjakt]]></g:brand>\n"})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[Sony]]></g:brand>\n"})})]})]})]}),(0,t.jsxs)(i.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(a.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csv",children:"brand\nPrisjakt\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csv",children:"brand\nPrisjakt\n"})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csv",children:"brand\nSony\n"})})]})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(a.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(a.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,t.jsxs)(a.admonition,{type:"danger",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{children:(0,t.jsx)(a.strong,{children:(0,t.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"<g:brand><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)]]></g:brand>\n"})})]})}),(0,t.jsx)(i.A,{value:"invalid_csv",label:"CSV",children:(0,t.jsxs)(a.admonition,{type:"danger",children:[(0,t.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csv",children:"brand\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)\n"})})]})})]}),"\n",(0,t.jsx)(a.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{style:{textAlign:"right"},children:(0,t.jsx)(a.strong,{children:"Property"})}),(0,t.jsx)(a.th,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"Value"})}),(0,t.jsx)(a.th,{style:{textAlign:"left"},children:(0,t.jsx)(a.strong,{children:"Description"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(a.td,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"string"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(a.td,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"False"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(a.td,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"False"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(a.td,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"False"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(a.td,{style:{textAlign:"center"},children:(0,t.jsx)(a.strong,{children:"0"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://support.google.com/merchants/answer/6324351",children:"Google Merchant Specification"})}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},89898:(e,a,n)=>{n.d(a,{Ay:()=>i});var t=n(74848),r=n(28453);function l(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function i(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},98995:(e,a,n)=>{n.d(a,{Ay:()=>s,RM:()=>l});var t=n(74848),r=n(28453);const l=[];function i(e){const a={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(a.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(a.p,{children:["This field is ",(0,t.jsx)(a.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function s(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>A});var t=n(96540),r=n(34164),l=n(23104),i=n(56347),s=n(205),d=n(57485),o=n(31682),c=n(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function x(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,d.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function p(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=h(e),[i,d]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!x({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[o,u]=f({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,c.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),j=(()=>{const e=o??p;return x({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function b(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const a=e.currentTarget,n=d.indexOf(a),r=s[n].value;r!==t&&(o(a),i(r))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>d.push(e),onKeyDown:u,onClick:c,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...a}),(0,g.jsx)(v,{...e,...a})]})}function A(e){const a=(0,m.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(a))}},18175:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var t=n(28774),r=n(74848);function l(e){let{id:a,title:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{id:a}),(0,r.jsx)("a",{class:"anchor",children:n}),(0,r.jsx)("a",{class:"hash-link",href:"#"+a,title:"Direct link"})]})}},28758:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(99744),r=n(74848);const l=(e,a)=>(0,r.jsx)(r.Fragment,{children:a&&a.length>0&&(0,r.jsx)(r.Fragment,{children:a.map(((a,n)=>(0,r.jsxs)("div",{class:"cl-item",children:[(0,r.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,r.jsx)(t.o,{class:"cl-item-content",children:a})]})))})});function i(e){let{versionHistory:a,dateOnly:n}=e;return(0,r.jsx)(r.Fragment,{children:a&&a.map(((e,a)=>(0,r.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[n&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!n&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)]})))})}}}]);