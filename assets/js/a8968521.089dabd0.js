"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8681],{3905:(a,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var l=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,l,r=function(a,e){if(null==a)return{};var t,l,r={},n=Object.keys(a);for(l=0;l<n.length;l++)t=n[l],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(l=0;l<n.length;l++)t=n[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var d=l.createContext({}),p=function(a){var e=l.useContext(d),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},s=function(a){var e=p(a.components);return l.createElement(d.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(a,e){var t=a.components,r=a.mdxType,n=a.originalType,d=a.parentName,s=o(a,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||n;return t?l.createElement(k,i(i({ref:e},s),{},{components:t})):l.createElement(k,i({ref:e},s))}));function m(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var n=t.length,i=new Array(n);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=a,o.mdxType="string"==typeof a?a:r,i[1]=o;for(var p=2;p<n;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5335:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=t(7462),r=(t(7294),t(3905));const n={},i="marketplace_retailer",o={unversionedId:"fields/marketplace_retailer",id:"fields/marketplace_retailer",title:"marketplace_retailer",description:"Description",source:"@site/docs/fields/marketplace_retailer.md",sourceDirName:"fields",slug:"/fields/marketplace_retailer",permalink:"/docs/fields/marketplace_retailer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/marketplace_retailer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"link",permalink:"/docs/fields/link"},next:{title:"material",permalink:"/docs/fields/material"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2}],s={toc:p};function c(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"marketplace_retailer"},"marketplace_retailer"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This attribute is ",(0,r.kt)("em",{parentName:"p"},"optional"),".\nIt's intended for distinguishing marketplace and retail offers for shops that have mixed inventory. Regular shops can completely ignore this (keep empty), for marketplaces it's strongly recommended to add information about which retailer (shop) sells the product."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"optional"))),(0,r.kt)("h2",{id:"specification-details"},"Specification Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding this information will allow us present marketplace offers in a better way")),(0,r.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a name of the ratailer offering the given product")),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,r.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,r.kt)("li",{parentName:"ul"},"Length: up to 50 characters")),(0,r.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,r.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,r.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Valid example                                             "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:marketplace_retailer>Some shop</g:marketplace_retailer>\n")))))),(0,r.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Valid example  "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"marketplace_retailer\nSome shop                \n")))))),(0,r.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Invalid example                                                                                                                                                                                                                                                                                                                                   "),(0,r.kt)("th",null,"Resulting error code     "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:marketplace_retailer>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)</g:marketplace_retailer>\n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length\n")))))),(0,r.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Invalid example  "),(0,r.kt)("th",null,"Resulting error code     "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"marketplace_retailer\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)                  \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length\n")))))))}c.isMDXComponent=!0}}]);