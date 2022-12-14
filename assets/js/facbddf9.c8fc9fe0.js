"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9264],{5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(7462),l=t(7294),r=t(6010),i=t(2389),s=t(7392),o=t(7094),d=t(2466);const p="tabList__CuJ",m="tabItem_LNqP";function u(e){var a;const{lazy:t,block:i,defaultValue:u,values:c,groupId:g,className:k}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,s.l)(h,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,o.U)(),[x,w]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,d.o5)();if(null!=g){const e=b[g];null!=e&&e!==x&&h.some((a=>a.value===e))&&w(e)}const E=e=>{const a=e.currentTarget,t=T.indexOf(a),n=h[t].value;n!==x&&(_(a),w(n),null!=g&&y(g,String(n)))},M=e=>{var a;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},h.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>T.push(e),onKeyDown:M,onClick:E},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===a})}),t??a)}))),t?(0,l.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function c(e){const a=(0,i.Z)();return l.createElement(u,(0,n.Z)({key:String(a)},e))}},3581:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294);function l(e){let{id:a,title:t}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:a,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+a,title:"Direct link"}))}},2017:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(8538);const r=(e,a)=>n.createElement(n.Fragment,null,a&&a.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,e),n.createElement("ul",null,a.map(((e,a)=>n.createElement("li",null,n.createElement(l.D,null,e)))))));function i(e){let{versionHistory:a,dateOnly:t}=e;return n.createElement(n.Fragment,null,a&&a.map(((e,a)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},1643:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),i=t(5162);const s={},o=void 0,d={unversionedId:"fields/gtin_valid_examples",id:"fields/gtin_valid_examples",title:"gtin_valid_examples",description:"Click to show more valid examples",source:"@site/docs/fields/gtin_valid_examples.mdx",sourceDirName:"fields",slug:"/fields/gtin_valid_examples",permalink:"/docs/fields/gtin_valid_examples",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/gtin_valid_examples.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gtin",permalink:"/docs/fields/gtin"},next:{title:"id",permalink:"/docs/fields/id"}},p={},m=[],u={toc:m};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>                                \n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin></g:gtin>                                        \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>036282818705</g:gtin>                            \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806088269696</g:gtin>                           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin> -</g:gtin>                                      \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>9031-1017</g:gtin>                               \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>0362 8281-8705</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806-08826 9696</g:gtin>                         \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"))))),(0,l.kt)(i.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017                 \n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n""                       \n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n036282818705             \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806088269696            \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n -                       \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n9031-1017                \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n0362 8281-8705           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806-08826 9696          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n"10614141000415,90311017"\n')))))))}c.isMDXComponent=!0},3274:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),i=t(5162),s=(t(1643),t(3581)),o=t(2017),d=t(8835);const p={description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."},m="mpn",u={unversionedId:"fields/mpn",id:"fields/mpn",title:"mpn",description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently.",source:"@site/docs/fields/mpn.md",sourceDirName:"fields",slug:"/fields/mpn",permalink:"/docs/fields/mpn",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/mpn.md",tags:[],version:"current",frontMatter:{description:"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."},sidebar:"tutorialSidebar",previous:{title:"member_price",permalink:"/docs/fields/member_price"},next:{title:"pattern",permalink:"/docs/fields/pattern"}},c={},g=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Allowed Enum Values",id:"allowed-enum-values",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],k={toc:g};function f(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mpn"},"mpn"),(0,l.kt)(d.ZP,{mdxType:"OptionalField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."),(0,l.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Including this will help indexing your products faster on Pricespy.")),(0,l.kt)("h2",{id:"allowed-enum-values"},"Allowed Enum Values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"None\n")),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Length must be between ",(0,l.kt)("inlineCode",{parentName:"li"},"1-70")," characters")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"do"},"Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only MPNs created by a manufacturer should be added here.")),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"mpn")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>SM-G920F</g:mpn>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>SM-G920F</g:mpn>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>MGCH3LL/A</g:mpn>\n"))))),(0,l.kt)(i.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\nSM-G920F\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\nSM-G920F\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\nMGCH3LL/A\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(s.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:mpn>\n")))),(0,l.kt)(i.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(s.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)\n"))))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324482"},"Google Merchant Specification"))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(o.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}f.isMDXComponent=!0},8835:(e,a,t)=>{t.d(a,{ZP:()=>i});var n=t(7462),l=(t(7294),t(3905));const r={toc:[]};function i(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Optional Field",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/docs/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}i.isMDXComponent=!0}}]);