"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9546],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),i=n(67294),l=n(86010),r=n(12466),s=n(16550),o=n(91980),p=n(67392),d=n(50012);function m(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,p]=c({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=o??m;return u({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,l]),tabValues:l}}var k=n(72389);const f="tabList__CuJ",v="tabItem_LNqP";function _(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==s&&(m(t),o(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:h},r,{className:(0,l.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",f)},i.createElement(_,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return i.createElement(b,(0,a.Z)({key:String(t)},e))}},83581:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);function i(e){let{id:t,title:n}=e;return a.createElement(a.Fragment,null,a.createElement("a",{id:t,class:"anchor"},n),a.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(58538);const l=(e,t)=>a.createElement(a.Fragment,null,t&&t.length>0&&a.createElement(a.Fragment,null,t.map(((t,n)=>a.createElement("div",{class:"cl-item"},a.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",a.createElement(i.D,{class:"cl-item-content"},t))))));function r(e){let{versionHistory:t,dateOnly:n}=e;return a.createElement(a.Fragment,null,t&&t.map(((e,t)=>a.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},n&&a.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!n&&a.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},85387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),l=n(74866),r=n(85162),s=n(83581),o=(n(74588),n(12017)),p=n(78835);const d={description:"It is recommended to add this attribute if delivery costs based on dimensions."},m="shipping_height",h={unversionedId:"fields/offer/shipping_height",id:"fields/offer/shipping_height",title:"shipping_height",description:"It is recommended to add this attribute if delivery costs based on dimensions.",source:"@site/docs/fields/offer/shipping_height.md",sourceDirName:"fields/offer",slug:"/fields/offer/shipping_height",permalink:"/fields/offer/shipping_height",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/shipping_height.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on dimensions."},sidebar:"tutorialSidebar",previous:{title:"shipping",permalink:"/fields/offer/shipping"},next:{title:"shipping_label",permalink:"/fields/offer/shipping_label"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],g={toc:c};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shipping_height"},"shipping_height"),(0,i.kt)(p.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"It is recommended to add this attribute if delivery costs based on dimensions."),(0,i.kt)("h2",{id:"related-fields"},"Related Fields"),(0,i.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping_height -- should be supplied together  --- shipping_length\n  click shipping_length "/fields/offer/shipping_length" "shipping_length" _blank\nshipping_height -- should be supplied together  --- shipping_weight\n  click shipping_weight "/fields/offer/shipping_weight" "shipping_weight" _blank\nshipping_height -- should be supplied together  --- shipping_width\n  click shipping_width "/fields/offer/shipping_width" "shipping_width" _blank\nshipping_height -- affects price and eligibility of  --- shipping\n  click shipping "/fields/offer/shipping" "shipping" _blank\nshipping_height -- determines label of  --- shipping_label\n  click shipping_label "/fields/offer/shipping_label" "shipping_label" _blank\n\n  click shipping_height "/fields/offer/shipping_height" "shipping_height" _blank\n  style shipping_height fill:#4cb3d4'}),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Length must be between ",(0,i.kt)("inlineCode",{parentName:"li"},"1-50")," characters"),(0,i.kt)("li",{parentName:"ul"},"Unit must be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"cm")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"in"))),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"shipping_height")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>10.12 cm</g:shipping_height>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>10.12 cm</g:shipping_height>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0 cm</g:shipping_height>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0.0 in</g:shipping_height>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>11 cm</g:shipping_height>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>15.2 in</g:shipping_height>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n10.12 cm\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n10.12 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0.0 in\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n11 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n15.2 in\n")))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>123cm</g:shipping_height>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>2 m</g:shipping_height>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>unkn own</g:shipping_height>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>111.222.333 in</g:shipping_height>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height> in</g:shipping_height>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n123cm\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n2 m\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\nunkn own\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n111.222.333 in\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n in\n"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(o.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338"},"Google Merchant Specification"))))}k.isMDXComponent=!0},74588:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{href:`/fields/${n.dir}/${n.name}`,alt:n.name},(0,i.kt)("code",null,n.name)))}r.isMDXComponent=!0},78835:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);