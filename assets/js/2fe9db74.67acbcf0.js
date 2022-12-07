"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8244],{3905:(e,l,t)=>{t.d(l,{Zo:()=>d,kt:()=>g});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function i(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?i(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var l=n.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},d=function(e){var l=u(e.components);return n.createElement(s.Provider,{value:l},e.children)},o={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||o[g]||i;return t?n.createElement(m,r(r({ref:l},d),{},{components:t})):n.createElement(m,r({ref:l},d))}));function g(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var p={};for(var s in l)hasOwnProperty.call(l,s)&&(p[s]=l[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2130:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>s,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const i={},r="shipping_height",p={unversionedId:"fields/shipping_height",id:"fields/shipping_height",title:"shipping_height",description:"Description",source:"@site/docs/fields/shipping_height.md",sourceDirName:"fields",slug:"/fields/shipping_height",permalink:"/docs/fields/shipping_height",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/shipping_height.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shipping",permalink:"/docs/fields/shipping"},next:{title:"shipping_label",permalink:"/docs/fields/shipping_label"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_format",id:"validation_invalid_format",level:3},{value:"validation_invalid_length_unit",id:"validation_invalid_length_unit",level:3},{value:"validation_invalid_value",id:"validation_invalid_value",level:3},{value:"validation_missing_value",id:"validation_missing_value",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],d={toc:u};function o(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shipping_height"},"shipping_height"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This attribute is ",(0,a.kt)("em",{parentName:"p"},"optional"),".\nIt is recommended to add this attribute if delivery costs based on dimensions."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optional"))),(0,a.kt)("h2",{id:"specification-details"},"Specification Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use accepted units systems")),(0,a.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"11 cm"),(0,a.kt)("li",{parentName:"ul"},"15.2 in"),(0,a.kt)("li",{parentName:"ul"},"10.12 cm"),(0,a.kt)("li",{parentName:"ul"},"0 cm"),(0,a.kt)("li",{parentName:"ul"},"0.0 in"),(0,a.kt)("li",{parentName:"ul"},"0 lb")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: String"),(0,a.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,a.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,a.kt)("li",{parentName:"ul"},"Length: up to 50 characters")),(0,a.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,a.kt)("h3",{id:"validation_invalid_format"},"validation_invalid_format"),(0,a.kt)("h3",{id:"validation_invalid_length_unit"},"validation_invalid_length_unit"),(0,a.kt)("h3",{id:"validation_invalid_value"},"validation_invalid_value"),(0,a.kt)("h3",{id:"validation_missing_value"},"validation_missing_value"),(0,a.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example                                  "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>                                     \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0 cm</g:shipping_height>    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>0.0 in</g:shipping_height>  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>11 cm</g:shipping_height>   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>15.2 in</g:shipping_height> \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>10.12 cm</g:shipping_height>\n")))))),(0,a.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example           "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'shipping_height\n""      \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0 cm    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n0.0 in  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n11 cm   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n15.2 in \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n10.12 cm\n")))))),(0,a.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example                                      "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>123cm</g:shipping_height>         \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format     \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>2 m</g:shipping_height>           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length_unit\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>unkn own</g:shipping_height>      \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height>111.222.333 in</g:shipping_height>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:shipping_height> in</g:shipping_height>           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_value      \n")))))),(0,a.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example               "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n123cm         \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format     \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n2 m           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length_unit\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\nunkn own      \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n111.222.333 in\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"shipping_height\n in           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_value      \n")))))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338"},"https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338"))))}o.isMDXComponent=!0}}]);