"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6675],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),d=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,d]=f({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??m;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var g=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==l&&(m(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:c},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(58538);const i=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(r.D,{class:"cl-item-content"},t))))));function o(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)))))}},49799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=(a(74866),a(85162),a(83581)),o=(a(74588),a(12017)),l=a(21624);const s={description:"Defines the time period when the promotion is active."},d="promotion_effective_dates",u={unversionedId:"fields/promotion/promotion_effective_dates",id:"fields/promotion/promotion_effective_dates",title:"promotion_effective_dates",description:"Defines the time period when the promotion is active.",source:"@site/docs/fields/promotion/promotion_effective_dates.md",sourceDirName:"fields/promotion",slug:"/fields/promotion/promotion_effective_dates",permalink:"/fields/promotion/promotion_effective_dates",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/promotion/promotion_effective_dates.md",tags:[],version:"current",frontMatter:{description:"Defines the time period when the promotion is active."},sidebar:"tutorialSidebar",previous:{title:"long_title",permalink:"/fields/promotion/long_title"},next:{title:"promotion_id",permalink:"/fields/promotion/promotion_id"}},m={},c=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],p={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"promotion_effective_dates"},"promotion_effective_dates"),(0,r.kt)(l.ZP,{mdxType:"RequiredField"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Defines the time period when the promotion is active."),(0,r.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must be a string"),(0,r.kt)("li",{parentName:"ul"},"Must contain two dates (start date, end date) separated by a forward slash `/"),(0,r.kt)("li",{parentName:"ul"},"ISO-8601 date format with timezone offset (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"2023-12-20T12:00:00+00:00"),")"),(0,r.kt)("li",{parentName:"ul"},"Start date must start in future (",(0,r.kt)("inlineCode",{parentName:"li"},"start_date > now"),")"),(0,r.kt)("li",{parentName:"ul"},"End date must be after start date (",(0,r.kt)("inlineCode",{parentName:"li"},"end_date > start_date"),")"),(0,r.kt)("li",{parentName:"ul"},"Ongoing promotion cannot be updated.")),(0,r.kt)("h2",{id:"example-values"},"Example Values"),(0,r.kt)("p",null,"Here are examples of how a valid ",(0,r.kt)("em",{parentName:"p"},"promotion_effective_dates")," value should look like in XML."),(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_effective_dates>2023-12-20T00:00:00+00:00/2023-12-24T00:00:00+00:00</g:promotion_effective_dates>\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid XML examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_effective_dates>2023-12-20T00:00:00+00:00/2023-12-24T00:00:00+00:00</g:promotion_effective_dates>\n")))),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(i.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_effective_dates>2023-12-24T00:00:00+00:00/2023-12-20T00:00:00+00:00</g:promotion_effective_dates>\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(i.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_effective_dates>2023-12-24T00:00:00+00:00/</g:promotion_effective_dates>\n"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Value")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)(o.Z,{versionHistory:[{added:["Initial definition"],date:"2023-12-11"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/13836990"},"Google Merchant Specification"))))}f.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name},(0,r.kt)("code",null,a.name)))}o.isMDXComponent=!0},21624:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Required Field",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This field is ",(0,r.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"required")," and must not be omitted")))}o.isMDXComponent=!0}}]);