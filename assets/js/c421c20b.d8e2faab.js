"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3740],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(87462),i=a(67294),r=a(86010),l=a(12466),o=a(16550),s=a(91980),d=a(67392),m=a(50012);function p(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,d]=g({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),N=(()=>{const e=s??p;return c({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var N=a(72389);const h="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:d}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=d[a].value;n!==o&&(p(t),s(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:u},l,{className:(0,r.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",h)},i.createElement(v,(0,n.Z)({},e,t)),i.createElement(b,(0,n.Z)({},e,t)))}function x(e){const t=(0,N.Z)();return i.createElement(y,(0,n.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);function i(e){let{id:t,title:a}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},a),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(58538);const r=(e,t)=>n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(n.Fragment,null,t.map(((t,a)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",n.createElement(i.D,{class:"cl-item-content"},t))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return n.createElement(n.Fragment,null,t&&t.map(((e,t)=>n.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&n.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},3415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var n=a(87462),i=(a(67294),a(3905)),r=a(74866),l=a(85162),o=a(83581),s=(a(74588),a(12017)),d=a(78835);const m={description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},p="gtin",u={unversionedId:"fields/gtin",id:"fields/gtin",title:"gtin",description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy.",source:"@site/docs/fields/gtin.md",sourceDirName:"fields",slug:"/fields/gtin",permalink:"/fields/gtin",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/gtin.md",tags:[],version:"current",frontMatter:{description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},sidebar:"tutorialSidebar",previous:{title:"google_product_category",permalink:"/fields/google_product_category"},next:{title:"id",permalink:"/fields/id"}},c={},g=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],k={toc:g};function N(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gtin"},"gtin"),(0,i.kt)(d.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Use the GTIN attribute to submit a ",(0,i.kt)("a",{parentName:"p",href:"https://www.gs1.org/standards/id-keys/gtin"},"Global Trade Item Number (GTIN) | GS1"),".\nA GTIN uniquely identifies your product.\nIncluding this will help indexing your products faster on Pricespy."),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use only one attribute of this type per product"),(0,i.kt)("li",{parentName:"ul"},"Length should be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"0, 8, 12, 13, or 14")," digits (UPC, EAN, JAN, or ISBN)"),(0,i.kt)("li",{parentName:"ul"},"Make sure that the check digit is present and correct using the ",(0,i.kt)("a",{parentName:"li",href:"https://www.gs1.org/check-digit-calculator"},"GS1 Check digit calculator")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: ",(0,i.kt)("inlineCode",{parentName:"li"},"02, 04, or 2 (when gtin is 13-digit number)")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: ",(0,i.kt)("inlineCode",{parentName:"li"},"05, 98\u201399 (when gtin is 13-digit number)")),(0,i.kt)("li",{parentName:"ul"},"GTINs with restricted prefixes from above are valid when gtin is 12 or 14-digit number"),(0,i.kt)("li",{parentName:"ul"},"Must be an number")),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"gtin")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>036282818705</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806088269696</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>9031-1017</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>0362 8281-8705</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806-08826 9696</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"))))),(0,i.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n036282818705\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806088269696\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n9031-1017\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n0362 8281-8705\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806-08826 9696\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n"10614141000415,90311017"\n')))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>026282818705</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>046282818705</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>03628281</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>97795145</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8801088269696</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>996282818705</g:gtin>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>03628281</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>9900114145837</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>881111088111169696</g:gtin>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_not_integer",title:"validation_not_integer",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>88aaa08869696</g:gtin>\n")))),(0,i.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n026282818705\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n046282818705\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n03628281\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n97795145\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8801088269696\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n996282818705\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n03628281\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n9900114145837\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n881111088111169696\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_not_integer",title:"validation_not_integer",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n88aaa08869696\n"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"10")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324461"},"Google Merchant Specification"))))}N.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{href:`/fields/${a.name}`,alt:a.name},(0,i.kt)("code",null,a.name)))}l.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}l.isMDXComponent=!0}}]);