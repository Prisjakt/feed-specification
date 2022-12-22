"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1656],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),p=a(7094),d=a(2466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:u,groupId:k,className:g}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,p.U)(),[_,x]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=k){const e=y[k];null!=e&&e!==_&&v.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==_&&(T(t),x(n),null!=k&&b(k,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>E.push(e),onKeyDown:w,onClick:S},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":_===t})}),a??t)}))),a?(0,r.cloneElement)(N.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function u(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3581:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},2017:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(8538);const i=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,e),n.createElement("ul",null,t.map(((e,t)=>n.createElement("li",null,n.createElement(r.D,null,e)))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},a&&n.createElement("h3",null,new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null,"[",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)))))}},8992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),l=a(5162),o=a(3581),p=a(2017),d=a(1624);const s={description:"Use this attribute to tell customers what you charge for your product."},m="price",c={unversionedId:"fields/price",id:"fields/price",title:"price",description:"Use this attribute to tell customers what you charge for your product.",source:"@site/docs/fields/price.md",sourceDirName:"fields",slug:"/fields/price",permalink:"/fields/price",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/price.md",tags:[],version:"current",frontMatter:{description:"Use this attribute to tell customers what you charge for your product."},sidebar:"tutorialSidebar",previous:{title:"pattern",permalink:"/fields/pattern"},next:{title:"prisjakt_id",permalink:"/fields/prisjakt_id"}},u={},k=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],g={toc:k};function N(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"price"},"price"),(0,r.kt)(d.ZP,{mdxType:"RequiredField"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Use this attribute to tell customers what you charge for your product. A price can be overriden by a ",(0,r.kt)("a",{parentName:"p",href:"/fields/sale_price"},"sale_price")," during a given time period using ",(0,r.kt)("a",{parentName:"p",href:"/fields/sale_price_effective_date"},"sale_price_effective_date")," or it may be complemented for members by using ",(0,r.kt)("a",{parentName:"p",href:"/fields/member_price"},"member_price"),"."),(0,r.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must be a number (value) followed by a space and a currency (unit)"),(0,r.kt)("li",{parentName:"ul"},"Number ",(0,r.kt)("em",{parentName:"li"},"may")," have ",(0,r.kt)("strong",{parentName:"li"},"two decimals"),", separated by a ",(0,r.kt)("inlineCode",{parentName:"li"},".")," (dot)"),(0,r.kt)("li",{parentName:"ul"},"Currency must be three upper case characters and a valid ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_4217"},"ISO 4217")," currency"),(0,r.kt)("li",{parentName:"ul"},"Zero prices are ",(0,r.kt)("strong",{parentName:"li"},"not")," allowed")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("h3",{id:"do"},"Do"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Price sent in feed should be the same as the price value on your product page"),(0,r.kt)("li",{parentName:"ul"},"Currency sent in feed should match currency on your product page")),(0,r.kt)("h3",{id:"dont"},"Don\xb4t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do ",(0,r.kt)("strong",{parentName:"li"},"not")," include extra charges in the cost (such as shipping cost)"),(0,r.kt)("li",{parentName:"ul"},"Do ",(0,r.kt)("strong",{parentName:"li"},"not")," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,r.kt)("inlineCode",{parentName:"li"},"10000.50 SEK"),")")),(0,r.kt)("h2",{id:"example-values"},"Example Values"),(0,r.kt)("p",null,"Here are examples of how a valid ",(0,r.kt)("em",{parentName:"p"},"price")," value  should look like in XML and CSV (with header) respectively."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>99.99 SEK</g:price>\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid XML examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>99.99 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>100 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>SEK 100</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>99,99 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10,000.00 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10 000.00 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10.000 SEK</g:price>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>1.144.000 SEK</g:price>\n"))))),(0,r.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Valid Value",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n99.99 SEK\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to show more valid CSV examples"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n99.99 SEK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n100 SEK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\nSEK 100\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'price\n"99,99 SEK"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'price\n"10,000.00 SEK"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10 000.00 SEK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10.000 SEK\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n1.144.000 SEK\n")))))),(0,r.kt)("h2",{id:"error-codes"},"Error Codes"),(0,r.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_currency",title:"validation_missing_currency",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>1000</g:price>\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_price_value",title:"validation_missing_price_value",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>foo SEK</g:price>\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"(empty string)\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_not_number",title:"validation_not_number",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10.0.00.00 SEK</g:price>\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_not_positive_number",title:"validation_not_positive_number",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>-10 SEK</g:price>\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_unknown_currency",title:"validation_unknown_currency",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>$100</g:price>\n")))),(0,r.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_currency",title:"validation_missing_currency",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n1000\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_price_value",title:"validation_missing_price_value",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\nfoo SEK\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'price\n""\n'))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_not_number",title:"validation_not_number",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10.0.00.00 SEK\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_not_positive_number",title:"validation_not_positive_number",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n-10 SEK\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)(o.Z,{id:"validation_unknown_currency",title:"validation_unknown_currency",mdxType:"Anchor"})," "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"price\n$100\n"))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324371"},"Google Merchant Specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_4217"},"Wikipedia on ISO 4217 Currency codes"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)(p.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"th"},"Property")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Value")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"price")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}N.isMDXComponent=!0},1624:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Required Field",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This field is ",(0,r.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"required")," and must not be omitted")))}l.isMDXComponent=!0}}]);