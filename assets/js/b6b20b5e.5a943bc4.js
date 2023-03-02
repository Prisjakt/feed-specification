"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7342],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(86010),i=a(12466),o=a(16550),d=a(91980),s=a(67392),u=a(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[d,s]=k({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=d??c;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),g(e)}),[s,g,r]),tabValues:r}}var f=a(72389);const h="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:o,selectValue:d,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==o&&(c(t),d(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h)},l.createElement(N,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);function l(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(58538);const r=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(l.D,{class:"cl-item-content"},t))))));function i(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},88546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),i=a(85162),o=a(83581),d=(a(74588),a(12017)),s=a(21624);const u={description:"State the condition of the product you are selling for your customers."},c="condition",m={unversionedId:"fields/condition",id:"fields/condition",title:"condition",description:"State the condition of the product you are selling for your customers.",source:"@site/docs/fields/condition.md",sourceDirName:"fields",slug:"/fields/condition",permalink:"/fields/condition",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/condition.md",tags:[],version:"current",frontMatter:{description:"State the condition of the product you are selling for your customers."},sidebar:"tutorialSidebar",previous:{title:"color",permalink:"/fields/color"},next:{title:"delta_command",permalink:"/fields/delta_command"}},p={},k=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Allowed Enum Values",id:"allowed-enum-values",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],g={toc:k};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"condition"},"condition"),(0,l.kt)(s.ZP,{mdxType:"RequiredField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"State the condition of the product you are selling for your customers."),(0,l.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Will improve filtering capabilities for customers")),(0,l.kt)("h2",{id:"allowed-enum-values"},"Allowed Enum Values"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("pre",null,(0,l.kt)("code",null,"damaged packaging"))),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("pre",null,(0,l.kt)("code",null,"demo"))),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("pre",null,(0,l.kt)("code",null,"new"))),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("pre",null,(0,l.kt)("code",null,"refurbished"))),(0,l.kt)("dd",null),(0,l.kt)("dt",null,(0,l.kt)("pre",null,(0,l.kt)("code",null,"used"))),(0,l.kt)("dd",null)),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value must be one of the allowed enum values")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"do"},"Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make sure the attributes reflects actual product condition")),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"condition")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>new</g:condition>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>new</g:condition>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>refurbished</g:condition>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>used</g:condition>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>damaged packaging</g:condition>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>demo</g:condition>\n"))))),(0,l.kt)(i.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\nnew\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\nnew\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\nrefurbished\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\nused\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\ndamaged packaging\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\ndemo\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_enum",title:"validation_invalid_enum",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition>unknown</g:condition>\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:condition></g:condition>\n")))),(0,l.kt)(i.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_enum",title:"validation_invalid_enum",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"condition\nunknown\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'condition\n""\n'))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324469"},"Google Merchant Specification"))))}f.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{href:`/fields/${a.name}`,alt:a.name},(0,l.kt)("code",null,a.name)))}i.isMDXComponent=!0},21624:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Required Field",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"required")," and must not be omitted")))}i.isMDXComponent=!0}}]);