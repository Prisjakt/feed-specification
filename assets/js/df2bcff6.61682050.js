"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9321],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),d=a(67392),m=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,d]=f({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??p;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var h=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=d[a].value;n!==l&&(p(t),s(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:u},i,{className:(0,o.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(58538);const o=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(r.D,{class:"cl-item-content"},t))))));function i(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),o("Added",e.added),o("Changed ",e.changed),o("Deprecated ",e.deprecated),o("Removed ",e.removed),o("Fixed",e.fixed),o("Security",e.security)))))}},91248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162),l=a(83581),s=(a(74588),a(12017)),d=a(78835);const m={description:"The `promotion_id` field allows mapping your inventory to promotions.  Offer if mapped to promotion by [`promotion_id`](/fields/promotion/promotion_id) in promotion feed."},p="promotion_id",u={unversionedId:"fields/offer/promotion_id",id:"fields/offer/promotion_id",title:"promotion_id",description:"The `promotion_id` field allows mapping your inventory to promotions.  Offer if mapped to promotion by [`promotion_id`](/fields/promotion/promotion_id.md) in promotion feed.",source:"@site/docs/fields/offer/promotion_id.md",sourceDirName:"fields/offer",slug:"/fields/offer/promotion_id",permalink:"/fields/offer/promotion_id",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/promotion_id.md",tags:[],version:"current",frontMatter:{description:"The `promotion_id` field allows mapping your inventory to promotions.  Offer if mapped to promotion by [`promotion_id`](/fields/promotion/promotion_id.md) in promotion feed."},sidebar:"tutorialSidebar",previous:{title:"product_type",permalink:"/fields/offer/product_type"},next:{title:"sale_price",permalink:"/fields/offer/sale_price"}},c={},f=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],g={toc:f};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"promotion_id"},"promotion_id"),(0,r.kt)(d.ZP,{mdxType:"OptionalField"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"promotion_id")," field allows mapping your inventory to promotions.  Offer if mapped to promotion by ",(0,r.kt)("a",{parentName:"p",href:"/fields/promotion/promotion_id"},(0,r.kt)("inlineCode",{parentName:"a"},"promotion_id"))," in promotion feed."),(0,r.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use this attribute if you want to highlight offers included in your current promotion campaigns.")),(0,r.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Length must be between ",(0,r.kt)("inlineCode",{parentName:"li"},"1-50")," characters")),(0,r.kt)("h2",{id:"example-values"},"Example Values"),(0,r.kt)("p",null,"Here are examples of how a valid ",(0,r.kt)("em",{parentName:"p"},"promotion_id")," value  should look like in XML and CSV (with header) respectively."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>\n<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid XML examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>\n<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[super promo]]></g:promotion_id>\n"))))),(0,r.kt)(i.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'promotion_id\n"10-year-anniversary-promo,mega deals"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid CSV examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'promotion_id\n"10-year-anniversary-promo,mega deals"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"promotion_id\nsuper promo\n")))))),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(l.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>\n")))),(0,r.kt)(i.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(l.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"promotion_id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)\n"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Value")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"List","[String]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/7050148"},"Google Merchant Specification"))))}h.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name},(0,r.kt)("code",null,a.name)))}i.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Optional Field",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This field is ",(0,r.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}i.isMDXComponent=!0}}]);