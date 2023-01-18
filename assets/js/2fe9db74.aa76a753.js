"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8244],{5162:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(7294),n=i(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:i,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,r),hidden:i},t)}},5488:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(7462),n=i(7294),l=i(6010),r=i(2389),s=i(7392),p=i(7094),o=i(2466);const d="tabList__CuJ",m="tabItem_LNqP";function h(e){var t;const{lazy:i,block:r,defaultValue:h,values:g,groupId:c,className:u}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=g??k.map((e=>{let{props:{value:t,label:i,attributes:a}}=e;return{value:t,label:i,attributes:a}})),_=(0,s.l)(v,((e,t)=>e.value===t.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===h?h:h??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,p.U)(),[y,x]=(0,n.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=c){const e=N[c];null!=e&&e!==y&&v.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,i=T.indexOf(t),a=v[i].value;a!==y&&(w(t),x(a),null!=c&&b(c,String(a)))},E=e=>{var t;let i=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;i=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;i=T[t]??T[T.length-1];break}}null==(t=i)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},u)},v.map((e=>{let{value:t,label:i,attributes:r}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:Z},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":y===t})}),i??t)}))),i?(0,n.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function g(e){const t=(0,r.Z)();return n.createElement(h,(0,a.Z)({key:String(t)},e))}},3581:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(7294);function n(e){let{id:t,title:i}=e;return a.createElement(a.Fragment,null,a.createElement("a",{id:t,class:"anchor"},i),a.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(7294),n=i(8538);const l=(e,t)=>a.createElement(a.Fragment,null,t&&t.length>0&&a.createElement(a.Fragment,null,t.map(((t,i)=>a.createElement("div",{class:"cl-item"},a.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",a.createElement(n.D,{class:"cl-item-content"},t))))));function r(e){let{versionHistory:t,dateOnly:i}=e;return a.createElement(a.Fragment,null,t&&t.map(((e,t)=>a.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},i&&a.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!i&&a.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},2130:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>c});var a=i(7462),n=(i(7294),i(3905)),l=i(5488),r=i(5162),s=i(3581),p=(i(4588),i(2017)),o=i(8835);const d={description:"It is recommended to add this attribute if delivery costs based on dimensions."},m="shipping_height",h={unversionedId:"fields/shipping_height",id:"fields/shipping_height",title:"shipping_height",description:"It is recommended to add this attribute if delivery costs based on dimensions.",source:"@site/docs/fields/shipping_height.md",sourceDirName:"fields",slug:"/fields/shipping_height",permalink:"/fields/shipping_height",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/shipping_height.md",tags:[],version:"current",frontMatter:{description:"It is recommended to add this attribute if delivery costs based on dimensions."},sidebar:"tutorialSidebar",previous:{title:"shipping",permalink:"/fields/shipping"},next:{title:"shipping_label",permalink:"/fields/shipping_label"}},g={},c=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],u={toc:c};function k(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shipping_height"},"shipping_height"),(0,n.kt)(o.ZP,{mdxType:"OptionalField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"It is recommended to add this attribute if delivery costs based on dimensions."),(0,n.kt)("h2",{id:"related-fields"},"Related Fields"),(0,n.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping_height -- should be supplied together  --- shipping_length\n  click shipping_length "/fields/shipping_length" "shipping_length" _blank\nshipping_height -- should be supplied together  --- shipping_weight\n  click shipping_weight "/fields/shipping_weight" "shipping_weight" _blank\nshipping_height -- should be supplied together  --- shipping_width\n  click shipping_width "/fields/shipping_width" "shipping_width" _blank\nshipping_height -- affects price and eligibility of  --- shipping\n  click shipping "/fields/shipping" "shipping" _blank\nshipping_height -- determines label of  --- shipping_label\n  click shipping_label "/fields/shipping_label" "shipping_label" _blank\n   \n  \n  click shipping_height "/fields/shipping_height" "shipping_height" _blank\n  style shipping_height fill:#4cb3d4'}),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Length must be between ",(0,n.kt)("inlineCode",{parentName:"li"},"1-50")," characters"),(0,n.kt)("li",{parentName:"ul"},"Unit must be one of ",(0,n.kt)("inlineCode",{parentName:"li"},"cm")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"in"))),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"shipping_height")," value  should look like in XML and CSV (with header) respectively."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>10.12 cm</g:shipping_height>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>10.12 cm</g:shipping_height>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0 cm</g:shipping_height>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0.0 in</g:shipping_height>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>11 cm</g:shipping_height>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>15.2 in</g:shipping_height>\n"))))),(0,n.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n10.12 cm\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid CSV examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n10.12 cm\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0 cm\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0.0 in\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n11 cm\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n15.2 in\n")))))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>123cm</g:shipping_height>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>2 m</g:shipping_height>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>unkn own</g:shipping_height>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height> in</g:shipping_height>\n")))),(0,n.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n123cm\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_length_unit",title:"validation_invalid_length_unit",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n2 m\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\nunkn own\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n in\n"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(p.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338"},"Google Merchant Specification"))))}k.isMDXComponent=!0},4588:(e,t,i)=>{i.d(t,{ZP:()=>r});var a=i(7462),n=(i(7294),i(3905));const l={toc:[]};function r(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:`/fields/${i.name}`,alt:i.name},(0,n.kt)("code",null,i.name)))}r.isMDXComponent=!0},8835:(e,t,i)=>{i.d(t,{ZP:()=>r});var a=i(7462),n=(i(7294),i(3905));const l={toc:[]};function r(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Optional Field",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);