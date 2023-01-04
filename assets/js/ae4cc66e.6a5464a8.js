"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3707],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),s=a(7094),d=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function g(e){var t;const{lazy:a,block:r,defaultValue:g,values:c,groupId:u,className:h}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===g?g:g??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:b}=(0,s.U)(),[y,x]=(0,i.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,d.o5)();if(null!=u){const e=_[u];null!=e&&e!==y&&v.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==y&&(w(t),x(n),null!=u&&b(u,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:Z,onClick:E},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,i.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,r.Z)();return i.createElement(g,(0,n.Z)({key:String(t)},e))}},3581:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(8538);const l=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(i.D,{class:"cl-item-content"},t))))));function r(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},1552:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(3581),s=a(2017),d=a(8835);const p={description:"It is recommended to add this attribute if delivery costs based on dimensions."},m="shipping_length",g={unversionedId:"fields/shipping_length",id:"fields/shipping_length",title:"shipping_length",description:"It is recommended to add this attribute if delivery costs based on dimensions.",source:"@site/docs/fields/shipping_length.md",sourceDirName:"fields",slug:"/fields/shipping_length",permalink:"/fields/shipping_length",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/shipping_length.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on dimensions."},sidebar:"tutorialSidebar",previous:{title:"shipping_label",permalink:"/fields/shipping_label"},next:{title:"shipping_weight",permalink:"/fields/shipping_weight"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],h={toc:u};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shipping_length"},"shipping_length"),(0,i.kt)(d.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"It is recommended to add this attribute if delivery costs based on dimensions."),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Length must be between ",(0,i.kt)("inlineCode",{parentName:"li"},"1-50")," characters"),(0,i.kt)("li",{parentName:"ul"},"Unit must be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"cm")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"in"))),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"shipping_length")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>10.12 cm</g:shipping_length>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>10.12 cm</g:shipping_length>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>0 cm</g:shipping_length>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>0.0 in</g:shipping_length>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>11 cm</g:shipping_length>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>15.2 in</g:shipping_length>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n10.12 cm\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n10.12 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n0 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n0.0 in\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n11 cm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n15.2 in\n")))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>123cm</g:shipping_length>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>2 m</g:shipping_length>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length>unkn own</g:shipping_length>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_length> in</g:shipping_length>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n123cm\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n2 m\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\nunkn own\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_length\n in\n"))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338"},"Google Merchant Specification"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}k.isMDXComponent=!0},8835:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(7462),i=(a(7294),a(3905));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);