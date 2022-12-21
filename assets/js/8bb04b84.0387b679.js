"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8031],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),s=a(7094),d=a(2466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:a,block:l,defaultValue:u,values:c,groupId:g,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[_,T]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,d.o5)();if(null!=g){const e=N[g];null!=e&&e!==_&&v.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==_&&(w(t),T(n),null!=g&&b(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:C},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":_===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function c(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},3581:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(8538);const i=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,e),n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",null,n.createElement(r.D,null,e)))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},a&&n.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)))))}},9528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),l=a(5162),o=a(3581),s=a(2017),d=a(8835);const m={description:"Promotion_id allows mapping your inventory to promotion defined in Business Center."},p="promotion_id",u={unversionedId:"fields/promotion_id",id:"fields/promotion_id",title:"promotion_id",description:"Promotion_id allows mapping your inventory to promotion defined in Business Center.",source:"@site/docs/fields/promotion_id.md",sourceDirName:"fields",slug:"/fields/promotion_id",permalink:"/fields/promotion_id",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/promotion_id.md",tags:[],version:"current",frontMatter:{description:"Promotion_id allows mapping your inventory to promotion defined in Business Center."},sidebar:"tutorialSidebar",previous:{title:"product_type",permalink:"/fields/product_type"},next:{title:"sale_price",permalink:"/fields/sale_price"}},c={},g=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"promotion_id"},"promotion_id"),(0,r.kt)(d.ZP,{mdxType:"OptionalField"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Promotion_id allows mapping your inventory to promotion defined in Business Center."),(0,r.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use this attribute if you want to highlight offers included in your current promotion campaigns.")),(0,r.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Length must be between ",(0,r.kt)("inlineCode",{parentName:"li"},"1-50")," characters")),(0,r.kt)("h2",{id:"example-values"},"Example Values"),(0,r.kt)("p",null,"Here are examples of how a valid ",(0,r.kt)("em",{parentName:"p"},"promotion_id")," value  should look like in XML and CSV (with header) respectively."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>\n<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid XML examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>\n<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[super promo]]></g:promotion_id>\n"))))),(0,r.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'promotion_id\n"10-year-anniversary-promo,mega deals"\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid CSV examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'promotion_id\n"10-year-anniversary-promo,mega deals"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"promotion_id\nsuper promo\n")))))),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>\n")))),(0,r.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"promotion_id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)\n"))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/7050148"},"Google Merchant Specification"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Value")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"List","[String]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}h.isMDXComponent=!0},8835:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Optional Field",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This field is ",(0,r.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}l.isMDXComponent=!0}}]);