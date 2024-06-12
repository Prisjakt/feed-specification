"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7876],{96511:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=i(74848),r=i(28453),s=(i(11470),i(19365),i(18175)),l=(i(89898),i(28758)),a=i(98995);const o={description:"Offer Id that specific promotion is attached."},d="item_id",c={id:"feeds/promotion/fields/item_id",title:"item_id",description:"Offer Id that specific promotion is attached.",source:"@site/docs/feeds/promotion/fields/item_id.md",sourceDirName:"feeds/promotion/fields",slug:"/feeds/promotion/fields/item_id",permalink:"/feeds/promotion/fields/item_id",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/promotion/fields/item_id.md",tags:[],version:"current",frontMatter:{description:"Offer Id that specific promotion is attached."},sidebar:"tutorialSidebar",previous:{title:"image_link",permalink:"/feeds/promotion/fields/image_link"},next:{title:"long_title",permalink:"/feeds/promotion/fields/long_title"}},u={},h=[...a.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"item_id",children:"item_id"}),"\n",(0,n.jsx)(a.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Offer Id that specific promotion is attached."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["It must be same as the ",(0,n.jsx)(t.code,{children:"id"})," in offer feed for same item."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["See ",(0,n.jsx)(t.a,{href:"/feeds/offer/fields/id",children:"offer_id"})," for more information."]}),"\n",(0,n.jsxs)(t.li,{children:["See ",(0,n.jsx)(t.a,{href:"/feeds/offer/",children:"offer_feed"})," for more information."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Must be a string"}),"\n",(0,n.jsxs)(t.li,{children:["Must be shorter than ",(0,n.jsx)(t.code,{children:"36"})," characters"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-values",children:"Example Values"}),"\n",(0,n.jsxs)(t.p,{children:["Here are examples of how a valid ",(0,n.jsx)(t.em,{children:"item_id"})," value should look like in XML."]}),"\n",(0,n.jsx)(t.admonition,{title:"Valid Value",type:"tip",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<pj:item_id><![CDATA[shop_offer_id_1]]></pj:item_id>\n"})})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<pj:item_id><![CDATA[offer_id_1]]></pj:item_id>\n<pj:item_id><![CDATA[id_1]]></pj:item_id>\n<pj:item_id>offer_id_1</pj:item_id>\n<pj:item_id>0421</pj:item_id>\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,n.jsxs)(t.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.jsx)(t.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length (more then 36 characters)"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<pj:item_id><![CDATA[shop_offer_id_1_attached_to_promotion_for_shop_odder_id_1]]></pj:item_id>\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:(0,n.jsx)(t.strong,{children:"Property"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"Value"})}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Data Type"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Nested"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"False"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"True"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"yes"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"0"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(l.A,{versionHistory:[{added:["Initial definition"],date:"2024-06-06"}],dateOnly:!0}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://support.google.com/merchants/answer/6324405",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},89898:(e,t,i)=>{i.d(t,{Ay:()=>l});var n=i(74848),r=i(28453);function s(e){return(0,n.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,n.jsx)("code",{children:e.name})})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},98995:(e,t,i)=>{i.d(t,{Ay:()=>a,RM:()=>s});var n=i(74848),r=i(28453);const s=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{title:"Optional Field",type:"info",children:(0,n.jsxs)(t.p,{children:["This field is ",(0,n.jsx)(t.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var n=i(34164);const r={tabItem:"tabItem_Ymn6"};var s=i(74848);function l(e){let{children:t,hidden:i,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>_});var n=i(96540),r=i(34164),s=i(23104),l=i(56347),a=i(205),o=i(57485),d=i(31682),c=i(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:r}}=e;return{value:t,label:i,attributes:n,default:r}}))}(i);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function f(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:i}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,u]=p({queryString:i,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(i);return[r,(0,n.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),j=(()=>{const e=d??m;return f({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=i(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function v(e){let{className:t,block:i,selectedValue:n,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,i=o.indexOf(t),r=a[i].value;r!==n&&(d(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;t=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;t=o[i]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},t),children:a.map((e=>{let{value:t,label:i,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function b(e){let{lazy:t,children:i,selectedValue:r}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(b,{...e,...t})]})}function _(e){const t=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},18175:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(28774),r=i(74848);function s(e){let{id:t,title:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{id:t}),(0,r.jsx)("a",{class:"anchor",children:i}),(0,r.jsx)("a",{class:"hash-link",href:"#"+t,title:"Direct link"})]})}},28758:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var n=i(99744),r=i(74848);const s=(e,t)=>(0,r.jsx)(r.Fragment,{children:t&&t.length>0&&(0,r.jsx)(r.Fragment,{children:t.map(((t,i)=>(0,r.jsxs)("div",{class:"cl-item",children:[(0,r.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,r.jsx)(n.o,{class:"cl-item-content",children:t})]})))})});function l(e){let{versionHistory:t,dateOnly:i}=e;return(0,r.jsx)(r.Fragment,{children:t&&t.map(((e,t)=>(0,r.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[i&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!i&&(0,r.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),s("Added",e.added),s("Changed ",e.changed),s("Deprecated ",e.deprecated),s("Removed ",e.removed),s("Fixed",e.fixed),s("Security",e.security)]})))})}}}]);