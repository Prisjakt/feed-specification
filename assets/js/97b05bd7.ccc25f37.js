"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4958],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),d=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||r;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const r={},i="item_group_id",o={unversionedId:"fields/item_group_id",id:"fields/item_group_id",title:"item_group_id",description:"Description",source:"@site/docs/fields/item_group_id.md",sourceDirName:"fields",slug:"/fields/item_group_id",permalink:"/docs/fields/item_group_id",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/item_group_id.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"is_bundle",permalink:"/docs/fields/is_bundle"},next:{title:"link",permalink:"/docs/fields/link"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"item_group_id"},"item_group_id"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("em",{parentName:"p"},"optional"),".\nThis attribute is strongly recommended for fashion and beauty segment. It helps us group variant offers and present relevant offers to the users."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"optional"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't mix up ",(0,n.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"item_group_id")),(0,n.kt)("li",{parentName:"ul"},"Make sure the combination of ",(0,n.kt)("inlineCode",{parentName:"li"},"item_group_id")," and color/pattern/size matches the information on the product page")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the same value for variants of the same product"),(0,n.kt)("li",{parentName:"ul"},"Don't re-use the same ",(0,n.kt)("inlineCode",{parentName:"li"},"item_group_id")," for other products")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: String"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,n.kt)("li",{parentName:"ul"},"Length: up to 50 characters")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example                            "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>                               \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:item_group_id>AAA111</g:item_group_id>\n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:item_group_id>aaa111</g:item_group_id>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example       "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'item_group_id\n""    \n')))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"item_group_id\nAAA111\n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"item_group_id\naaa111\n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                                       "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:item_group_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</g:item_group_id>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                  "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"item_group_id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324507"},"https://support.google.com/merchants/answer/6324507"))))}s.isMDXComponent=!0}}]);