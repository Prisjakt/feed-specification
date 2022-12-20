"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[947],{5162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),l=t(6010);const i="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>c});var n=t(7462),l=t(7294),i=t(6010),r=t(2389),o=t(7392),s=t(7094),d=t(2466);const m="tabList__CuJ",p="tabItem_LNqP";function u(a){var e;const{lazy:t,block:r,defaultValue:u,values:c,groupId:k,className:h}=a,g=l.Children.map(a.children,(a=>{if((0,l.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),f=(0,o.l)(v,((a,e)=>a.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(e=g.find((a=>a.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==N&&!v.some((a=>a.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[T,C]=(0,l.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=k){const a=b[k];null!=a&&a!==T&&v.some((e=>e.value===a))&&C(a)}const _=a=>{const e=a.currentTarget,t=x.indexOf(e),n=v[t].value;n!==T&&(E(e),C(n),null!=k&&y(k,String(n)))},w=a=>{var e;let t=null;switch(a.key){case"Enter":_(a);break;case"ArrowRight":{const e=x.indexOf(a.currentTarget)+1;t=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(a.currentTarget)-1;t=x[e]??x[x.length-1];break}}null==(e=t)||e.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},v.map((a=>{let{value:e,label:t,attributes:r}=a;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:a=>x.push(a),onKeyDown:w,onClick:_},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===e})}),t??e)}))),t?(0,l.cloneElement)(g.filter((a=>a.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==T})))))}function c(a){const e=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(e)},a))}},3581:(a,e,t)=>{t.d(e,{Z:()=>l});var n=t(7294);function l(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},2017:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),l=t(8538);const i=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,a),n.createElement("ul",null,e.map(((a,e)=>n.createElement("li",null,n.createElement(l.D,null,a)))))));function r(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),i("Added",a.added),i("Changed ",a.changed),i("Deprecated ",a.deprecated),i("Removed ",a.removed),i("Fixed",a.fixed),i("Security",a.security)))))}},1290:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var n=t(7462),l=(t(7294),t(3905)),i=t(5488),r=t(5162),o=t(3581),s=t(2017),d=t(8835);const m={description:"It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing."},p="material",u={unversionedId:"fields/material",id:"fields/material",title:"material",description:"It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing.",source:"@site/docs/fields/material.md",sourceDirName:"fields",slug:"/fields/material",permalink:"/docs/fields/material",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/material.md",tags:[],version:"current",frontMatter:{description:"It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing."},sidebar:"tutorialSidebar",previous:{title:"link",permalink:"/docs/fields/link"},next:{title:"member_price",permalink:"/docs/fields/member_price"}},c={},k=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],h={toc:k};function g(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"material"},"material"),(0,l.kt)(d.ZP,{mdxType:"OptionalField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing."),(0,l.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This attribute helps us categorize products and present relevant search results for the users.")),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add up to 3 materials separated by slash like ",(0,l.kt)("inlineCode",{parentName:"li"},"Cotton/Leather"))),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"dont"},"Don\xb4t"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Don't use values that do not describe material ",(0,l.kt)("inlineCode",{parentName:"li"},"None"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"N/A"))),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"material")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:material><![CDATA[Cotton]]></g:material>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:material><![CDATA[Cotton]]></g:material>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:material><![CDATA[Cotton/Leather]]></g:material>\n"))))),(0,l.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"material\nCotton\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"material\nCotton\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"material\nCotton/Leather\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:material><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)]]></g:material>\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:material><![CDATA[Cotton/Leather/Elastane/Cotton]]></g:material>\n")))),(0,l.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"material\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"material\nCotton/Leather/Elastane/Cotton\n"))))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324410"},"Google Merchant Specification"))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}g.isMDXComponent=!0},8835:(a,e,t)=>{t.d(e,{ZP:()=>r});var n=t(7462),l=(t(7294),t(3905));const i={toc:[]};function r(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Optional Field",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/docs/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);