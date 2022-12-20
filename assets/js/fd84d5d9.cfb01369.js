"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5433],{5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),r=t(6010),i=t(2389),o=t(7392),d=t(7094),s=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var a;const{lazy:t,block:i,defaultValue:p,values:c,groupId:k,className:h}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,o.l)(v,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,d.U)(),[T,x]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=N[k];null!=e&&e!==T&&v.some((a=>a.value===e))&&x(e)}const w=e=>{const a=e.currentTarget,t=C.indexOf(a),n=v[t].value;n!==T&&(E(a),x(n),null!=k&&y(k,String(n)))},D=e=>{var a;let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>C.push(e),onKeyDown:D,onClick:w},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===a})}),t??a)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function c(e){const a=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},3581:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294);function l(e){let{id:a,title:t}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:a,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+a,title:"Direct link"}))}},2017:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(8538);const r=(e,a)=>n.createElement(n.Fragment,null,a&&a.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,e),n.createElement("ul",null,a.map(((e,a)=>n.createElement("li",null,n.createElement(l.D,null,e)))))));function i(e){let{versionHistory:a,dateOnly:t}=e;return n.createElement(n.Fragment,null,a&&a.map(((e,a)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},1012:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>p,toc:()=>k});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),i=t(5162),o=t(3581),d=t(2017),s=t(8835);const m={description:"The brand attribute is used to indicate a product's brand/manufacturer name."},u="brand",p={unversionedId:"fields/brand",id:"fields/brand",title:"brand",description:"The brand attribute is used to indicate a product's brand/manufacturer name.",source:"@site/docs/fields/brand.md",sourceDirName:"fields",slug:"/fields/brand",permalink:"/docs/fields/brand",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/brand.md",tags:[],version:"current",frontMatter:{description:"The brand attribute is used to indicate a product's brand/manufacturer name."},sidebar:"tutorialSidebar",previous:{title:"availability_date",permalink:"/docs/fields/availability_date"},next:{title:"color",permalink:"/docs/fields/color"}},c={},k=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],h={toc:k};function g(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"brand"},"brand"),(0,l.kt)(s.ZP,{mdxType:"OptionalField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The brand attribute is used to indicate a product's brand/manufacturer name."),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Length must be between ",(0,l.kt)("inlineCode",{parentName:"li"},"1-70")," characters")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"do"},"Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use only valid brands")),(0,l.kt)("h3",{id:"dont"},"Don\xb4t"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Don\xb4t set ",(0,l.kt)("inlineCode",{parentName:"li"},"N/A"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"generic"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"no name"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"unknown")," and similar brand names as they are of no help when indexing your products/offers")),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"brand")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:brand><![CDATA[Prisjakt]]></g:brand>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:brand><![CDATA[Prisjakt]]></g:brand>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:brand><![CDATA[Sony]]></g:brand>\n"))))),(0,l.kt)(i.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"brand\nPrisjakt\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"brand\nPrisjakt\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"brand\nSony\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:brand><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)]]></g:brand>\n")))),(0,l.kt)(i.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"brand\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)\n"))))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324351"},"Google Merchant Specification"))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}g.isMDXComponent=!0},8835:(e,a,t)=>{t.d(a,{ZP:()=>i});var n=t(7462),l=(t(7294),t(3905));const r={toc:[]};function i(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Optional Field",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/docs/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}i.isMDXComponent=!0}}]);