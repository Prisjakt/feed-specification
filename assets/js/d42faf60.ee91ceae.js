"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5699],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),s=a(67294),r=a(86010),l=a(12466),i=a(16550),o=a(91980),u=a(67392),m=a(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function c(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=g({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=o??d;return p({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var f=a(72389);const y="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==i&&(d(t),o(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:c},l,{className:(0,r.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",y)},s.createElement(v,(0,n.Z)({},e,t)),s.createElement(N,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return s.createElement(b,(0,n.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);function s(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(58538);const r=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(s.D,{class:"cl-item-content"},t))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},86786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),r=a(74866),l=a(85162),i=a(83581),o=(a(74588),a(12017)),u=a(78835);const m={description:"Using this attribute is required if [`size`](/fields/size) is specified for a product."},d="size_system",c={unversionedId:"fields/size_system",id:"fields/size_system",title:"size_system",description:"Using this attribute is required if [`size`](size.md) is specified for a product.",source:"@site/docs/fields/size_system.md",sourceDirName:"fields",slug:"/fields/size_system",permalink:"/fields/size_system",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/size_system.md",tags:[],version:"current",frontMatter:{description:"Using this attribute is required if [`size`](size.md) is specified for a product."},sidebar:"tutorialSidebar",previous:{title:"size",permalink:"/fields/size"},next:{title:"title",permalink:"/fields/title"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],k={toc:g};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"size_system"},"size_system"),(0,s.kt)(u.ZP,{mdxType:"OptionalField"}),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Using this attribute is required if ",(0,s.kt)("a",{parentName:"p",href:"/fields/size"},(0,s.kt)("inlineCode",{parentName:"a"},"size"))," is specified for a product."),(0,s.kt)("h2",{id:"related-fields"},"Related Fields"),(0,s.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsize_system -- required if used  --- size\n  click size "/fields/size" "size" _blank\n   \n  \n  click size_system "/fields/size_system" "size_system" _blank\n  style size_system fill:#4cb3d4'}),(0,s.kt)("h2",{id:"best-practices"},"Best Practices"),(0,s.kt)("h3",{id:"do"},"Do"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use accepted size systems"),(0,s.kt)("li",{parentName:"ul"},"Do not create own size systems")),(0,s.kt)("h2",{id:"example-values"},"Example Values"),(0,s.kt)("p",null,"Here are examples of how a valid ",(0,s.kt)("em",{parentName:"p"},"size_system")," value  should look like in XML and CSV (with header) respectively."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,s.kt)("admonition",{title:"Valid Value",type:"tip"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>au</g:size_system>\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Click to show more valid XML examples"),(0,s.kt)("div",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>au</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>br</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>cn</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>de</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>eu</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>fr</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>it</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>jp</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>mex</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>uk</g:size_system>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>us</g:size_system>\n"))))),(0,s.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,s.kt)("admonition",{title:"Valid Value",type:"tip"},(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nau\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Click to show more valid CSV examples"),(0,s.kt)("div",null,(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nau\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nbr\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\ncn\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nde\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\neu\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nfr\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nit\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\njp\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nmex\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nuk\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nus\n")))))),(0,s.kt)("h2",{id:"error-codes"},"Error Codes"),(0,s.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,s.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,s.kt)(i.Z,{id:"validation_invalid_enum",title:"validation_invalid_enum",mdxType:"Anchor"})," "),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<g:size_system>unknown</g:size_system>\n")))),(0,s.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,s.kt)(i.Z,{id:"validation_invalid_enum",title:"validation_invalid_enum",mdxType:"Anchor"})," "),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"size_system\nunknown\n"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"right"},(0,s.kt)("strong",{parentName:"th"},"Property")),(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"th"},"Value")),(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Description")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"False")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"False")),(0,s.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"False")),(0,s.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"0")),(0,s.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,s.kt)("h2",{id:"changelog"},"Changelog"),(0,s.kt)(o.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324502"},"Google Merchant Specification"))))}f.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{href:`/fields/${a.name}`,alt:a.name},(0,s.kt)("code",null,a.name)))}l.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Optional Field",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This field is ",(0,s.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}l.isMDXComponent=!0}}]);