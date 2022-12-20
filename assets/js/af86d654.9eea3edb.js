"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1114],{5162:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(a){let{children:e,hidden:t,className:i}=a;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(7462),l=t(7294),r=t(6010),i=t(2389),o=t(7392),d=t(7094),s=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function u(a){var e;const{lazy:t,block:i,defaultValue:u,values:m,groupId:k,className:g}=a,h=l.Children.map(a.children,(a=>{if((0,l.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),f=(0,o.l)(v,((a,e)=>a.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(e=h.find((a=>a.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==y&&!v.some((a=>a.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,d.U)(),[_,T]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=k){const a=N[k];null!=a&&a!==_&&v.some((e=>e.value===a))&&T(a)}const E=a=>{const e=a.currentTarget,t=x.indexOf(e),n=v[t].value;n!==_&&(C(e),T(n),null!=k&&b(k,String(n)))},w=a=>{var e;let t=null;switch(a.key){case"Enter":E(a);break;case"ArrowRight":{const e=x.indexOf(a.currentTarget)+1;t=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(a.currentTarget)-1;t=x[e]??x[x.length-1];break}}null==(e=t)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},v.map((a=>{let{value:e,label:t,attributes:i}=a;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:a=>x.push(a),onKeyDown:w,onClick:E},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":_===e})}),t??e)}))),t?(0,l.cloneElement)(h.filter((a=>a.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==_})))))}function m(a){const e=(0,i.Z)();return l.createElement(u,(0,n.Z)({key:String(e)},a))}},3581:(a,e,t)=>{t.d(e,{Z:()=>l});var n=t(7294);function l(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},2017:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(7294),l=t(8538);const r=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,a),n.createElement("ul",null,e.map(((a,e)=>n.createElement("li",null,n.createElement(l.D,null,a)))))));function i(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),r("Added",a.added),r("Changed ",a.changed),r("Deprecated ",a.deprecated),r("Removed ",a.removed),r("Fixed",a.fixed),r("Security",a.security)))))}},921:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),i=t(5162),o=t(3581),d=t(2017),s=t(8835);const p={description:"Please note that `product_type` is **required** if `google_product_category` is not present."},c="product_type",u={unversionedId:"fields/product_type",id:"fields/product_type",title:"product_type",description:"Please note that `product_type` is **required** if `google_product_category` is not present.",source:"@site/docs/fields/product_type.md",sourceDirName:"fields",slug:"/fields/product_type",permalink:"/docs/fields/product_type",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/product_type.md",tags:[],version:"current",frontMatter:{description:"Please note that `product_type` is **required** if `google_product_category` is not present."},sidebar:"tutorialSidebar",previous:{title:"product_detail",permalink:"/docs/fields/product_detail"},next:{title:"promotion_id",permalink:"/docs/fields/promotion_id"}},m={},k=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],g={toc:k};function h(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"product_type"},"product_type"),(0,l.kt)(s.ZP,{mdxType:"OptionalField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Please note that ",(0,l.kt)("inlineCode",{parentName:"p"},"product_type")," is ",(0,l.kt)("strong",{parentName:"p"},"required")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"google_product_category")," is not present."),(0,l.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This field is used for product categorization.")),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Length must be between ",(0,l.kt)("inlineCode",{parentName:"li"},"1-255")," characters")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"do"},"Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add full category path like ",(0,l.kt)("inlineCode",{parentName:"li"},"Home & Garden / Furniture / Living room"))),(0,l.kt)("h3",{id:"dont"},"Don\xb4t"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Avoid adding categories like Apple, Sale, Black Friday 2023")),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"product_type")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_type><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:product_type>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_type><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:product_type>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_type><![CDATA[type 1]]></g:product_type>\n<g:product_type><![CDATA[type 2]]></g:product_type>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_type><![CDATA[computer_accessories]]></g:product_type>\n"))))),(0,l.kt)(i.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"product_type\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"product_type\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'product_type\n"type 1,type 2"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"product_type\ncomputer_accessories\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_type><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)]]></g:product_type>\n")))),(0,l.kt)(i.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"product_type\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)\n"))))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324406"},"Google Merchant Specification"))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}h.isMDXComponent=!0},8835:(a,e,t)=>{t.d(e,{ZP:()=>i});var n=t(7462),l=(t(7294),t(3905));const r={toc:[]};function i(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Optional Field",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/docs/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}i.isMDXComponent=!0}}]);