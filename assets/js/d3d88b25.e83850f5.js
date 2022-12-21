"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9965],{5162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),i=t(6010);const l="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>c});var n=t(7462),i=t(7294),l=t(6010),r=t(2389),o=t(7392),d=t(7094),s=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(a){var e;const{lazy:t,block:r,defaultValue:p,values:c,groupId:g,className:k}=a,v=i.Children.map(a.children,(a=>{if((0,i.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??v.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),f=(0,o.l)(h,((a,e)=>a.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(e=v.find((a=>a.props.default)))?void 0:e.props.value)??v[0].props.value;if(null!==b&&!h.some((a=>a.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:N}=(0,d.U)(),[y,T]=(0,i.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=g){const a=_[g];null!=a&&a!==y&&h.some((e=>e.value===a))&&T(a)}const A=a=>{const e=a.currentTarget,t=x.indexOf(e),n=h[t].value;n!==y&&(D(e),T(n),null!=g&&N(g,String(n)))},C=a=>{var e;let t=null;switch(a.key){case"Enter":A(a);break;case"ArrowRight":{const e=x.indexOf(a.currentTarget)+1;t=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(a.currentTarget)-1;t=x[e]??x[x.length-1];break}}null==(e=t)||e.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},h.map((a=>{let{value:e,label:t,attributes:r}=a;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:a=>x.push(a),onKeyDown:C,onClick:A},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":y===e})}),t??e)}))),t?(0,i.cloneElement)(v.filter((a=>a.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((a,e)=>(0,i.cloneElement)(a,{key:e,hidden:a.props.value!==y})))))}function c(a){const e=(0,r.Z)();return i.createElement(p,(0,n.Z)({key:String(e)},a))}},3581:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(7294);function i(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},2017:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),i=t(8538);const l=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,a),n.createElement("ul",null,e.map(((a,e)=>n.createElement("li",null,n.createElement(i.D,null,a)))))));function r(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),l("Added",a.added),l("Changed ",a.changed),l("Deprecated ",a.deprecated),l("Removed ",a.removed),l("Fixed",a.fixed),l("Security",a.security)))))}},8331:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>p,toc:()=>g});var n=t(7462),i=(t(7294),t(3905)),l=t(5488),r=t(5162),o=t(3581),d=t(2017),s=t(8835);const u={description:"In this attribute add all structured information about the product."},m="product_detail",p={unversionedId:"fields/product_detail",id:"fields/product_detail",title:"product_detail",description:"In this attribute add all structured information about the product.",source:"@site/docs/fields/product_detail.md",sourceDirName:"fields",slug:"/fields/product_detail",permalink:"/fields/product_detail",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/product_detail.md",tags:[],version:"current",frontMatter:{description:"In this attribute add all structured information about the product."},sidebar:"tutorialSidebar",previous:{title:"prisjakt_id",permalink:"/fields/prisjakt_id"},next:{title:"product_type",permalink:"/fields/product_type"}},c={},g=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],k={toc:g};function v(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"product_detail"},"product_detail"),(0,i.kt)(s.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"In this attribute add all structured information about the product."),(0,i.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We're able to present this information in product page which makes it more visible in search.")),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"make sure data is properly formatted - no HTML tags inside attributes")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"do"},"Do"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only add confirmed information")),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"product_detail")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_detail>\n  <g:section_name><![CDATA[Display]]></g:section_name>\n  <g:attribute_name><![CDATA[Diagonal Size]]></g:attribute_name>\n  <g:attribute_value><![CDATA[2.5]]></g:attribute_value>\n</g:product_detail>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_detail>\n  <g:section_name><![CDATA[Display]]></g:section_name>\n  <g:attribute_name><![CDATA[Diagonal Size]]></g:attribute_name>\n  <g:attribute_value><![CDATA[2.5]]></g:attribute_value>\n</g:product_detail>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_detail>\n  <g:section_name><![CDATA[disc]]></g:section_name>\n  <g:attribute_name><![CDATA[memory]]></g:attribute_name>\n  <g:attribute_value><![CDATA[500 GB]]></g:attribute_value>\n</g:product_detail>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"product_detail(section_name:attribute_name:attribute_value)\nDisplay:Diagonal Size:2.5\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"product_detail(section_name:attribute_name:attribute_value)\nDisplay:Diagonal Size:2.5\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"product_detail(section_name:attribute_name:attribute_value)\ndisc:memory:500 GB\n")))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_detail>\n  <g:section_name><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)]]></g:section_name>\n  <g:attribute_name><![CDATA[memory]]></g:attribute_name>\n  <g:attribute_value><![CDATA[500 GB]]></g:attribute_value>\n</g:product_detail>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_missing_field",title:"validation_missing_field",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:product_detail>\n  <g:section_name><![CDATA[x]]></g:section_name>\n</g:product_detail>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"product_detail(section_name:attribute_name:attribute_value)\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value):memory:500 GB\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_missing_field",title:"validation_missing_field",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"product_detail(section_name)\nx\n"))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/9218260"},"Google Merchant Specification"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"List","[Nested]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}v.isMDXComponent=!0},8835:(a,e,t)=>{t.d(e,{ZP:()=>r});var n=t(7462),i=(t(7294),t(3905));const l={toc:[]};function r(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);