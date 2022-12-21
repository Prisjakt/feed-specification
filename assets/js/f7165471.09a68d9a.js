"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5560],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294),n=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(7462),n=a(7294),l=a(6010),r=a(2389),o=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function g(e){var t;const{lazy:a,block:r,defaultValue:g,values:u,groupId:c,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??k.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),N=(0,o.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===g?g:g??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:w}=(0,s.U)(),[b,y]=(0,n.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const e=_[c];null!=e&&e!==b&&v.some((t=>t.value===e))&&y(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),i=v[a].value;i!==b&&(T(t),y(i),null!=c&&w(c,String(i)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>x.push(e),onKeyDown:Z,onClick:E},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":b===t})}),a??t)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function u(e){const t=(0,r.Z)();return n.createElement(g,(0,i.Z)({key:String(t)},e))}},3581:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294);function n(e){let{id:t,title:a}=e;return i.createElement(i.Fragment,null,i.createElement("a",{id:t,class:"anchor"},a),i.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294),n=a(8538);const l=(e,t)=>i.createElement(i.Fragment,null,t&&t.length>0&&i.createElement(i.Fragment,null,i.createElement("h4",null,e),i.createElement("ul",null,t.map(((e,t)=>i.createElement("li",null,i.createElement(n.D,null,e)))))));function r(e){let{versionHistory:t,dateOnly:a}=e;return i.createElement(i.Fragment,null,t&&t.map(((e,t)=>i.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},a&&i.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!a&&i.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},4260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>c});var i=a(7462),n=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(3581),s=a(2017),p=a(8835);const d={description:"It is recommended to add this attribute if delivery costs based on weight."},m="shipping_weight",g={unversionedId:"fields/shipping_weight",id:"fields/shipping_weight",title:"shipping_weight",description:"It is recommended to add this attribute if delivery costs based on weight.",source:"@site/docs/fields/shipping_weight.md",sourceDirName:"fields",slug:"/fields/shipping_weight",permalink:"/fields/shipping_weight",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/shipping_weight.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on weight."},sidebar:"tutorialSidebar",previous:{title:"shipping_length",permalink:"/fields/shipping_length"},next:{title:"shipping_width",permalink:"/fields/shipping_width"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],h={toc:c};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shipping_weight"},"shipping_weight"),(0,n.kt)(p.ZP,{mdxType:"OptionalField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"It is recommended to add this attribute if delivery costs based on weight."),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Length must be between ",(0,n.kt)("inlineCode",{parentName:"li"},"1-50")," characters"),(0,n.kt)("li",{parentName:"ul"},"Unit must be one of ",(0,n.kt)("inlineCode",{parentName:"li"},"g"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kg"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"lb")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"oz"))),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"shipping_weight")," value  should look like in XML and CSV (with header) respectively."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11.2 kg</g:shipping_weight>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11.2 kg</g:shipping_weight>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 kg</g:shipping_weight>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 g</g:shipping_weight>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11.2 g</g:shipping_weight>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 oz</g:shipping_weight>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 lb</g:shipping_weight>\n"))))),(0,n.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11.2 kg\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid CSV examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11.2 kg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11 kg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11 g\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11.2 g\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11 oz\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11 lb\n")))))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11.,.,.,111</g:shipping_weight>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>empty value</g:shipping_weight>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_weight_unit",title:"validation_invalid_weight_unit",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 kilo</g:shipping_weight>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_weight>11 </g:shipping_weight>\n")))),(0,n.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'shipping_weight\n"11.,.,.,111"\n'))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\nempty value\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_invalid_weight_unit",title:"validation_invalid_weight_unit",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11 kilo\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_weight\n11\n"))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324503"},"Google Merchant Specification"))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}k.isMDXComponent=!0},8835:(e,t,a)=>{a.d(t,{ZP:()=>r});var i=a(7462),n=(a(7294),a(3905));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Optional Field",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);