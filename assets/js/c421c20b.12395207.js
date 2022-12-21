"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3740],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),d=a(7094),s=a(2466);const m="tabList__CuJ",p="tabItem_LNqP";function g(e){var t;const{lazy:a,block:r,defaultValue:g,values:u,groupId:c,className:k}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===g?g:g??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,d.U)(),[x,T]=(0,i.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=c){const e=y[c];null!=e&&e!==x&&h.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==x&&(w(t),T(n),null!=c&&b(c,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]??_[_.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>_.push(e),onKeyDown:E,onClick:I},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,i.cloneElement)(N.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,r.Z)();return i.createElement(g,(0,n.Z)({key:String(t)},e))}},3581:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(8538);const l=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,e),n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",null,n.createElement(i.D,null,e)))))));function r(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},a&&n.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},3415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(3581),d=a(2017),s=a(8835);const m={description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},p="gtin",g={unversionedId:"fields/gtin",id:"fields/gtin",title:"gtin",description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy.",source:"@site/docs/fields/gtin.md",sourceDirName:"fields",slug:"/fields/gtin",permalink:"/fields/gtin",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/gtin.md",tags:[],version:"current",frontMatter:{description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},sidebar:"tutorialSidebar",previous:{title:"google_product_category",permalink:"/fields/google_product_category"},next:{title:"id",permalink:"/fields/id"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],k={toc:c};function N(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gtin"},"gtin"),(0,i.kt)(s.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Use the GTIN attribute to submit a ",(0,i.kt)("a",{parentName:"p",href:"https://www.gs1.org/standards/id-keys/gtin"},"Global Trade Item Number (GTIN) | GS1"),".\nA GTIN uniquely identifies your product.\nIncluding this will help indexing your products faster on Pricespy."),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use only one attribute of this type per product"),(0,i.kt)("li",{parentName:"ul"},"Length should be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"0, 8, 12, 13, or 14")," digits (UPC, EAN, JAN, or ISBN)"),(0,i.kt)("li",{parentName:"ul"},"Make sure that the check digit is present and correct using the ",(0,i.kt)("a",{parentName:"li",href:"https://www.gs1.org/check-digit-calculator"},"GS1 Check digit calculator")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: ",(0,i.kt)("inlineCode",{parentName:"li"},"02, 04, or 2")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: ",(0,i.kt)("inlineCode",{parentName:"li"},"05, 98\u201399")),(0,i.kt)("li",{parentName:"ul"},"Must be an number")),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"gtin")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>036282818705</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806088269696</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>9031-1017</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>0362 8281-8705</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806-08826 9696</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n036282818705\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806088269696\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n9031-1017\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n0362 8281-8705\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806-08826 9696\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n"10614141000415,90311017"\n')))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>03628281</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>026282818705</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>881111088111169696</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_not_integer",title:"validation_not_integer",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>88aaa08869696</g:gtin>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n03628281\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n026282818705\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n881111088111169696\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_not_integer",title:"validation_not_integer",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n88aaa08869696\n"))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324461"},"Google Merchant Specification"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}N.isMDXComponent=!0},8835:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(7462),i=(a(7294),a(3905));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);