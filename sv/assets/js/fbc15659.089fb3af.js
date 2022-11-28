"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3398],{3905:(a,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>v});var t=l(7294);function i(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function n(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,t)}return l}function r(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?n(Object(l),!0).forEach((function(e){i(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function d(a,e){if(null==a)return{};var l,t,i=function(a,e){if(null==a)return{};var l,t,i={},n=Object.keys(a);for(t=0;t<n.length;t++)l=n[t],e.indexOf(l)>=0||(i[l]=a[l]);return i}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(t=0;t<n.length;t++)l=n[t],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(i[l]=a[l])}return i}var u=t.createContext({}),s=function(a){var e=t.useContext(u),l=e;return a&&(l="function"==typeof a?a(e):r(r({},e),a)),l},o=function(a){var e=s(a.components);return t.createElement(u.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(a,e){var l=a.components,i=a.mdxType,n=a.originalType,u=a.parentName,o=d(a,["components","mdxType","originalType","parentName"]),c=s(l),v=i,k=c["".concat(u,".").concat(v)]||c[v]||p[v]||n;return l?t.createElement(k,r(r({ref:e},o),{},{components:l})):t.createElement(k,r({ref:e},o))}));function v(a,e){var l=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var n=l.length,r=new Array(n);r[0]=c;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=a,d.mdxType="string"==typeof a?a:i,r[1]=d;for(var s=2;s<n;s++)r[s]=l[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},7330:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var t=l(7462),i=(l(7294),l(3905));const n={},r="availability_date",d={unversionedId:"fields/types/availability_date",id:"fields/types/availability_date",title:"availability_date",description:"Description",source:"@site/docs/fields/types/availability_date.md",sourceDirName:"fields/types",slug:"/fields/types/availability_date",permalink:"/sv/docs/fields/types/availability_date",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/types/availability_date.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"affiliate_link",permalink:"/sv/docs/fields/types/affiliate_link"},next:{title:"gtin",permalink:"/sv/docs/fields/types/gtin"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_format",id:"validation_invalid_format",level:3},{value:"validation_missing_field",id:"validation_missing_field",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],o={toc:s};function p(a){let{components:e,...l}=a;return(0,i.kt)("wrapper",(0,t.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"availability_date"},"availability_date"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This attribute is ",(0,i.kt)("em",{parentName:"p"},"optional"),".\nIt should be used to indicate either a preorder date or release date."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"specification-details"},"Specification Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ISO 8601 formatted datetime"),(0,i.kt)("li",{parentName:"ul"},"If time is missing, release will be set to 12:00 AM CET")),(0,i.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standard: ISO 8601")),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: String"),(0,i.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,i.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,i.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,i.kt)("h3",{id:"validation_invalid_format"},"validation_invalid_format"),(0,i.kt)("h3",{id:"validation_missing_field"},"validation_missing_field"),(0,i.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Valid example                                                                                                        "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>preorder</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>preorder</g:availability>\n<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>in_stock</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>out_of_stock</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>                  \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>pickup</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>                        \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>download</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>not_available_for_purchase</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>    \n")))))),(0,i.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Valid example                                                           "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,preorder                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,in_stock                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,out_of_stock                  \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,pickup                        \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,download                      \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,not_available_for_purchase    \n")))))),(0,i.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Invalid example                                                                      "),(0,i.kt)("th",null,"Resulting error code     "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021/12/22/12:23:00</g:availability_date>                       \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>today</g:availability_date>                                     \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>preorder</g:availability>\n<g:availability_date></g:availability_date>\n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_field \n")))))),(0,i.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Invalid example                         "),(0,i.kt)("th",null,"Resulting error code     "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\n2021/12/22/12:23:00   \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\ntoday                 \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n,preorder\n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_field \n")))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324470"},"https://support.google.com/merchants/answer/6324470"))))}p.isMDXComponent=!0}}]);