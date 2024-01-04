"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8063],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),i=a(86010),l=a(12466),m=a(16550),o=a(91980),p=a(67392),s=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,m.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=d(e),[l,m]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[o,p]=k({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=o??c;return u({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&m(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);m(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var b=a(72389);const N="tabList__CuJ",v="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:m,selectValue:o,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),r=p[a].value;r!==m&&(c(t),o(r))},u=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:m===t?0:-1,"aria-selected":m===t,key:t,ref:e=>s.push(e),onKeyDown:u,onClick:d},l,{className:(0,i.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":m===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function _(e){const t=g(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",N)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(h,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(_,(0,r.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){let{id:t,title:a}=e;return r.createElement(r.Fragment,null,r.createElement("a",{id:t,class:"anchor"},a),r.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(58538);const i=(e,t)=>r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(r.Fragment,null,t.map(((t,a)=>r.createElement("div",{class:"cl-item"},r.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",r.createElement(n.D,{class:"cl-item-content"},t))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return r.createElement(r.Fragment,null,t&&t.map(((e,t)=>r.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&r.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&r.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),i("Added",e.added),i("Changed ",e.changed),i("Deprecated ",e.deprecated),i("Removed ",e.removed),i("Fixed",e.fixed),i("Security",e.security)))))}},84147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>k});var r=a(87462),n=(a(67294),a(3905)),i=a(74866),l=a(85162),m=a(83581),o=(a(74588),a(12017)),p=a(78835);const s={description:"This is product price that is active for users with active membership"},c="member_price",d={unversionedId:"fields/offer/member_price",id:"fields/offer/member_price",title:"member_price",description:"This is product price that is active for users with active membership",source:"@site/docs/fields/offer/member_price.md",sourceDirName:"fields/offer",slug:"/fields/offer/member_price",permalink:"/fields/offer/member_price",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/member_price.md",tags:[],version:"current",frontMatter:{description:"This is product price that is active for users with active membership"},sidebar:"tutorialSidebar",previous:{title:"material",permalink:"/fields/offer/material"},next:{title:"mpn",permalink:"/fields/offer/mpn"}},u={},k=[{value:"Description",id:"description",level:2},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],g={toc:k};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"member_price"},"member_price"),(0,n.kt)(p.ZP,{mdxType:"OptionalField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is product price that is active for users with active membership"),(0,n.kt)("h2",{id:"related-fields"},"Related Fields"),(0,n.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nmember_price -- overrides if member  --- price\n  click price "/fields/offer/price" "price" _blank\nmember_price -- overrides if member  --- sale_price\n  click sale_price "/fields//sale_price" "sale_price" _blank\n\n  click member_price "/fields/offer/member_price" "member_price" _blank\n  style member_price fill:#4cb3d4'}),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Must be a number (value) followed by a space and a currency (unit)"),(0,n.kt)("li",{parentName:"ul"},"Number ",(0,n.kt)("em",{parentName:"li"},"may")," have ",(0,n.kt)("strong",{parentName:"li"},"two decimals"),", separated by a ",(0,n.kt)("inlineCode",{parentName:"li"},".")," (dot)"),(0,n.kt)("li",{parentName:"ul"},"Currency must be three upper case characters and a valid ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_4217"},"ISO 4217")," currency"),(0,n.kt)("li",{parentName:"ul"},"Zero prices are ",(0,n.kt)("strong",{parentName:"li"},"not")," allowed")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("h3",{id:"do"},"Do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Price sent in feed should be the same as the price value on your product page"),(0,n.kt)("li",{parentName:"ul"},"Currency sent in feed should match currency on your product page")),(0,n.kt)("h3",{id:"dont"},"Don\xb4t"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do ",(0,n.kt)("strong",{parentName:"li"},"not")," include extra charges in the cost (such as shipping cost)"),(0,n.kt)("li",{parentName:"ul"},"Do ",(0,n.kt)("strong",{parentName:"li"},"not")," use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like ",(0,n.kt)("inlineCode",{parentName:"li"},"10000.50 SEK"),")")),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"member_price")," value  should look like in XML and CSV (with header) respectively."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>99.99 SEK</pj:member_price>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>99.99 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>100 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>SEK 100</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>99,99 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10,000.00 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10 000.00 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.000 SEK</pj:member_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>1.144.000 SEK</pj:member_price>\n"))))),(0,n.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n99.99 SEK\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid CSV examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n99.99 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n100 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nSEK 100\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'member_price\n"99,99 SEK"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'member_price\n"10,000.00 SEK"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10 000.00 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.000 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n1.144.000 SEK\n")))))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_missing_currency",title:"validation_missing_currency",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>1000</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>5.00 dollars</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>5.00</pj:member_price>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_missing_price_value",title:"validation_missing_price_value",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>foo SEK</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>SEK</pj:member_price>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_not_number",title:"validation_not_number",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_not_positive_number",title:"validation_not_positive_number",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>-10 SEK</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>0 SEK</pj:member_price>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_unknown_currency",title:"validation_unknown_currency",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>$100</pj:member_price>\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>100$</pj:member_price>\n")))),(0,n.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_missing_currency",title:"validation_missing_currency",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n1000\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n5.00 dollars\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n5.00\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_missing_price_value",title:"validation_missing_price_value",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nfoo SEK\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nSEK\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_not_number",title:"validation_not_number",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.0.00.00 SEK\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.0.00.00 SEK\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_not_positive_number",title:"validation_not_positive_number",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n-10 SEK\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n0 SEK\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(m.Z,{id:"validation_unknown_currency",title:"validation_unknown_currency",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n$100\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n100$\n"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"price")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(o.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_4217"},"Wikipedia on ISO 4217 Currency codes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/prisjakt-namespace/ns%60"},"Prisjakt XML namespace"))))}b.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name},(0,n.kt)("code",null,a.name)))}l.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Optional Field",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}l.isMDXComponent=!0}}]);