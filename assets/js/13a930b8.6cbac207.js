"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1364],{3905:(a,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var l=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,l,n=function(a,e){if(null==a)return{};var t,l,n={},r=Object.keys(a);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var s=l.createContext({}),u=function(a){var e=l.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},d=function(a){var e=u(a.components);return l.createElement(s.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(a,e){var t=a.components,n=a.mdxType,r=a.originalType,s=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),p=u(t),m=n,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?l.createElement(k,i(i({ref:e},d),{},{components:t})):l.createElement(k,i({ref:e},d))}));function m(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o.mdxType="string"==typeof a?a:n,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9679:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(7462),n=(t(7294),t(3905));const r={},i="title",o={unversionedId:"fields/title",id:"fields/title",title:"title",description:"Description",source:"@site/docs/fields/title.md",sourceDirName:"fields",slug:"/fields/title",permalink:"/docs/fields/title",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/title.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"size_system",permalink:"/docs/fields/size_system"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"validation_missing_value",id:"validation_missing_value",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],d={toc:u};function c(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,l.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"title"},"title"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("strong",{parentName:"p"},"required"),".\nIt should contain the full product name. The title is used to clearly state what product your shop is selling. It's the ",(0,n.kt)("strong",{parentName:"p"},"most important attribute")," for Prisjakt to be able to index your product/offer correctly. It should contain a manufacturer name along with product name or model. Including size, color and gender is recommended for product types that specifies this."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"required"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It should contain the full product name (it should be easy to identify the product by title)"),(0,n.kt)("li",{parentName:"ul"},"Use the same title as it is present on your product page"),(0,n.kt)("li",{parentName:"ul"},"Add variant information if applicable: colour, size, gender etc."),(0,n.kt)("li",{parentName:"ul"},"Do not use HTML tag - Do not include promotional text"),(0,n.kt)("li",{parentName:"ul"},"Do not use tabs or extra spaces"),(0,n.kt)("li",{parentName:"ul"},"Do not write detailed information in title, this belongs in the description attribute"),(0,n.kt)("li",{parentName:"ul"},"Preferred syntax ","[brand]"," + ","[model name]"," + ","[additional product information]"),(0,n.kt)("li",{parentName:"ul"},"Use language of the specific market where the product is being sold (for better user experience)")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use only one title attribute per product")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: String"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,n.kt)("li",{parentName:"ul"},"Length: from 1 up to 255 characters")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,n.kt)("h3",{id:"validation_missing_value"},"validation_missing_value"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example                                  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:title>Samsung Galaxy S8 Black 128G</g:title>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"title\nSamsung Galaxy S8 Black 128G                \n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                                                                                                                                                                                                                                      "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"                                                                                                                                                                                                                                                                                                                     \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_value \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:title>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)</g:title>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example  "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'title\n""                  \n'))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_value \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"title\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)                  \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324415"},"https://support.google.com/merchants/answer/6324415"))))}c.isMDXComponent=!0}}]);