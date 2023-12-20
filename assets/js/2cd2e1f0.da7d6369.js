"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9173],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),d=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=s??p;return c({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var k=a(72389);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=d[a].value;r!==l&&(p(t),s(r))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){let{id:t,title:a}=e;return r.createElement(r.Fragment,null,r.createElement("a",{id:t,class:"anchor"},a),r.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(58538);const o=(e,t)=>r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(r.Fragment,null,t.map(((t,a)=>r.createElement("div",{class:"cl-item"},r.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",r.createElement(n.D,{class:"cl-item-content"},t))))));function i(e){let{versionHistory:t,dateOnly:a}=e;return r.createElement(r.Fragment,null,t&&t.map(((e,t)=>r.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&r.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&r.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),o("Added",e.added),o("Changed ",e.changed),o("Deprecated ",e.deprecated),o("Removed ",e.removed),o("Fixed",e.fixed),o("Security",e.security)))))}},20139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=(a(74866),a(85162),a(83581)),i=(a(74588),a(12017)),l=a(21624);const s={description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/fields/offer/promotion_id) field is used to map a promotion to a product."},d="promotion_id",u={unversionedId:"fields/promotion/promotion_id",id:"fields/promotion/promotion_id",title:"promotion_id",description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/fields/offer/promotion_id.md) field is used to map a promotion to a product.",source:"@site/docs/fields/promotion/promotion_id.md",sourceDirName:"fields/promotion",slug:"/fields/promotion/promotion_id",permalink:"/fields/promotion/promotion_id",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/promotion/promotion_id.md",tags:[],version:"current",frontMatter:{description:"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/fields/offer/promotion_id.md) field is used to map a promotion to a product."},sidebar:"tutorialSidebar",previous:{title:"promotion_effective_dates",permalink:"/fields/promotion/promotion_effective_dates"},next:{title:"promotion_page_link",permalink:"/fields/promotion/promotion_page_link"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],c={toc:m};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"promotion_id"},"promotion_id"),(0,n.kt)(l.ZP,{mdxType:"RequiredField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, ",(0,n.kt)("a",{parentName:"p",href:"/fields/offer/promotion_id"},(0,n.kt)("inlineCode",{parentName:"a"},"promotion_id"))," field is used to map a promotion to a product."),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Must be a string"),(0,n.kt)("li",{parentName:"ul"},"Must be shorter than ",(0,n.kt)("inlineCode",{parentName:"li"},"50")," characters"),(0,n.kt)("li",{parentName:"ul"},"Must be unique for every promotion")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("h3",{id:"do"},"Do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use a unique ID for each different promotion.")),(0,n.kt)("h3",{id:"dont"},"Don\xb4t"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don\u2019t reuse or recycle the same ID for different promotions"),(0,n.kt)("li",{parentName:"ul"},"Avoid whitespaces")),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"promotion_id")," value should look like in XML."),(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>\n")))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>\n"))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"True")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(i.Z,{versionHistory:[{added:["Initial definition"],date:"2023-12-11"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/7050148"},"Google Merchant Specification"))))}f.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name},(0,n.kt)("code",null,a.name)))}i.isMDXComponent=!0},21624:(e,t,a)=>{a.d(t,{ZP:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Required Field",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"required")," and must not be omitted")))}i.isMDXComponent=!0}}]);