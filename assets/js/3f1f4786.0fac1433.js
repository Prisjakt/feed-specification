"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4588],{76711:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>u,default:()=>_,frontMatter:()=>o,metadata:()=>f,toc:()=>p});var l=t(74848),s=t(28453),n=t(11470),r=t(19365),a=t(18175),d=(t(89898),t(28758)),c=t(98995);const o={description:"Datetime range indicating when [`sale_price`](/feeds/offer/fields/sale_price) is active. If you don't submit this attribute [`sale_price`](/feeds/offer/fields/sale_price) always applies."},u="sale_price_effective_date",f={id:"feeds/offer/fields/sale_price_effective_date",title:"sale_price_effective_date",description:"Datetime range indicating when [`sale_price`](/feeds/offer/fields/sale_price.md) is active. If you don't submit this attribute [`sale_price`](/feeds/offer/fields/sale_price.md) always applies.",source:"@site/docs/feeds/offer/fields/sale_price_effective_date.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/sale_price_effective_date",permalink:"/feeds/offer/fields/sale_price_effective_date",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/sale_price_effective_date.md",tags:[],version:"current",frontMatter:{description:"Datetime range indicating when [`sale_price`](/feeds/offer/fields/sale_price.md) is active. If you don't submit this attribute [`sale_price`](/feeds/offer/fields/sale_price.md) always applies."},sidebar:"tutorialSidebar",previous:{title:"sale_price",permalink:"/feeds/offer/fields/sale_price"},next:{title:"shipping",permalink:"/feeds/offer/fields/shipping"}},h={},p=[...c.RM,{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"sale_price_effective_date",children:"sale_price_effective_date"}),"\n",(0,l.jsx)(c.Ay,{}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(i.p,{children:["Datetime range indicating when ",(0,l.jsx)(i.a,{href:"/feeds/offer/fields/sale_price",children:(0,l.jsx)(i.code,{children:"sale_price"})})," is active. If you don't submit this attribute ",(0,l.jsx)(i.a,{href:"/feeds/offer/fields/sale_price",children:(0,l.jsx)(i.code,{children:"sale_price"})})," always applies."]}),"\n",(0,l.jsx)(i.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"This will cause sale_price to be applied only within interval specified by start and end datetime"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,l.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsale_price_effective_date -- used by  --- sale_price\n  click sale_price "/feeds/offer/fields/sale_price" "sale_price" _blank\n\n  click sale_price_effective_date "/feeds/offer/fields/sale_price_effective_date" "sale_price_effective_date" _blank\n  style sale_price_effective_date fill:#4cb3d4'}),"\n",(0,l.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Standard: ISO 8601"}),"\n",(0,l.jsx)(i.li,{children:"Up to 51 characters"}),"\n",(0,l.jsx)(i.li,{children:'Two dates separated with "/" (ISO 8601)'}),"\n",(0,l.jsx)(i.li,{children:"Start and end must be within one year from current date"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Start datetime shall be earlier than stop datetime"}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"If you don't include time, start time default to 12 AM CET (midnight) of start day and stop time is set to 23:59:59 of stop day"}),"\n",(0,l.jsx)(i.li,{children:"Don't set start or end datetime further than one year in the future. This will cause warning in feed validation. Moreover sale_price_effective_date and sale_price won't be used in product listing."}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,l.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,l.jsx)(i.em,{children:"sale_price_effective_date"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"})})}),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date></g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2016-02-24/2016-02-26</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"})})]})]})]}),(0,l.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,l.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00,11.50 SEK\n"})})}),(0,l.jsxs)(t,{children:[(0,l.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00,11.50 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n,11.50 SEK\n"})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n2016-02-24/2016-02-26,11.50 SEK\n"})})]})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,l.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,l.jsxs)(n.A,{children:[(0,l.jsxs)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(a.A,{id:"validation_date_out_of_range",title:"validation_date_out_of_range"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2050-02-05/2050-02-05</g:sale_price_effective_date>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(a.A,{id:"validation_invalid_format",title:"validation_invalid_format"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2018/2016-02-29</g:sale_price_effective_date>\n<g:sale_price></g:sale_price>\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(i.mdxAdmonitionTitle,{children:(0,l.jsx)(i.strong,{children:(0,l.jsx)(a.A,{id:"validation_missing_value",title:"validation_missing_value"})})}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:"<g:sale_price_effective_date>2016-02-29T15:30-0800</g:sale_price_effective_date>\n<g:sale_price>11.50 GBP</g:sale_price>\n"})})]})]}),(0,l.jsxs)(r.A,{value:"invalid_csv",label:"CSV",children:[(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(a.A,{id:"validation_date_out_of_range",title:"validation_date_out_of_range"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date\n2050-02-05/2050-02-05\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(a.A,{id:"validation_invalid_format",title:"validation_invalid_format"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n2018/2016-02-29,\n"})})]}),(0,l.jsxs)(i.admonition,{type:"danger",children:[(0,l.jsx)(a.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-csv",children:"sale_price_effective_date,sale_price\n2016-02-29T15:30-0800,11.50 GBP\n"})})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{style:{textAlign:"right"},children:(0,l.jsx)(i.strong,{children:"Property"})}),(0,l.jsx)(i.th,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"Value"})}),(0,l.jsx)(i.th,{style:{textAlign:"left"},children:(0,l.jsx)(i.strong,{children:"Description"})})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"string"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"False"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,l.jsx)(i.td,{style:{textAlign:"center"},children:(0,l.jsx)(i.strong,{children:"0"})}),(0,l.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(d.A,{versionHistory:[{added:["Start and end are limited to one year from current datetime"],date:"2023-04-06"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,l.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324460",children:"Google Merchant Specification"})}),"\n"]})]})}function _(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},89898:(e,i,t)=>{t.d(i,{Ay:()=>r});var l=t(74848),s=t(28453);function n(e){return(0,l.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,l.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(n,{...e})}):n(e)}},98995:(e,i,t)=>{t.d(i,{Ay:()=>a,RM:()=>n});var l=t(74848),s=t(28453);const n=[];function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,l.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,l.jsxs)(i.p,{children:["This field is ",(0,l.jsx)(i.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},19365:(e,i,t)=>{t.d(i,{A:()=>r});t(96540);var l=t(34164);const s={tabItem:"tabItem_Ymn6"};var n=t(74848);function r(e){let{children:i,hidden:t,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,r),hidden:t,children:i})}},11470:(e,i,t)=>{t.d(i,{A:()=>y});var l=t(96540),s=t(34164),n=t(23104),r=t(56347),a=t(205),d=t(57485),c=t(31682),o=t(89466);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:i,children:t}=e;return(0,l.useMemo)((()=>{const e=i??function(e){return u(e).map((e=>{let{props:{value:i,label:t,attributes:l,default:s}}=e;return{value:i,label:t,attributes:l,default:s}}))}(t);return function(e){const i=(0,c.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,t])}function h(e){let{value:i,tabValues:t}=e;return t.some((e=>e.value===i))}function p(e){let{queryString:i=!1,groupId:t}=e;const s=(0,r.W6)(),n=function(e){let{queryString:i=!1,groupId:t}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:i,groupId:t});return[(0,d.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const i=new URLSearchParams(s.location.search);i.set(n,e),s.replace({...s.location,search:i.toString()})}),[n,s])]}function x(e){const{defaultValue:i,queryString:t=!1,groupId:s}=e,n=f(e),[r,d]=(0,l.useState)((()=>function(e){let{defaultValue:i,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!h({value:i,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:n}))),[c,u]=p({queryString:t,groupId:s}),[x,_]=function(e){let{groupId:i}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(i),[s,n]=(0,o.Dv)(t);return[s,(0,l.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),m=(()=>{const e=c??x;return h({value:e,tabValues:n})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),_(e)}),[u,_,n]),tabValues:n}}var _=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:i,block:t,selectedValue:l,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),o=e=>{const i=e.currentTarget,t=d.indexOf(i),s=a[t].value;s!==l&&(c(i),r(s))},u=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;i=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;i=d[t]??d[d.length-1];break}}i?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},i),children:a.map((e=>{let{value:i,label:t,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===i?0:-1,"aria-selected":l===i,ref:e=>d.push(e),onKeyDown:u,onClick:o,...n,className:(0,s.A)("tabs__item",m.tabItem,n?.className,{"tabs__item--active":l===i}),children:t??i},i)}))})}function j(e){let{lazy:i,children:t,selectedValue:s}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,l.cloneElement)(e,{key:i,hidden:e.props.value!==s})))})}function b(e){const i=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...e,...i}),(0,g.jsx)(j,{...e,...i})]})}function y(e){const i=(0,_.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(i))}},18175:(e,i,t)=>{t.d(i,{A:()=>n});t(96540);var l=t(28774),s=t(74848);function n(e){let{id:i,title:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{id:i}),(0,s.jsx)("a",{class:"anchor",children:t}),(0,s.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,t)=>{t.d(i,{A:()=>r});t(96540);var l=t(99744),s=t(74848);const n=(e,i)=>(0,s.jsx)(s.Fragment,{children:i&&i.length>0&&(0,s.jsx)(s.Fragment,{children:i.map(((i,t)=>(0,s.jsxs)("div",{class:"cl-item",children:[(0,s.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,s.jsx)(l.o,{class:"cl-item-content",children:i})]})))})});function r(e){let{versionHistory:i,dateOnly:t}=e;return(0,s.jsx)(s.Fragment,{children:i&&i.map(((e,i)=>(0,s.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[t&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!t&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)]})))})}}}]);