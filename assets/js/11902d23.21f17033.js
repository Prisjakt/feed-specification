"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7191],{3905:(a,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>c});var t=e(7294);function i(a,l,e){return l in a?Object.defineProperty(a,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[l]=e,a}function n(a,l){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),e.push.apply(e,t)}return e}function r(a){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?n(Object(e),!0).forEach((function(l){i(a,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(e,l))}))}return a}function d(a,l){if(null==a)return{};var e,t,i=function(a,l){if(null==a)return{};var e,t,i={},n=Object.keys(a);for(t=0;t<n.length;t++)e=n[t],l.indexOf(e)>=0||(i[e]=a[e]);return i}(a,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(t=0;t<n.length;t++)e=n[t],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var u=t.createContext({}),o=function(a){var l=t.useContext(u),e=l;return a&&(e="function"==typeof a?a(l):r(r({},l),a)),e},s=function(a){var l=o(a.components);return t.createElement(u.Provider,{value:l},a.children)},p={inlineCode:"code",wrapper:function(a){var l=a.children;return t.createElement(t.Fragment,{},l)}},v=t.forwardRef((function(a,l){var e=a.components,i=a.mdxType,n=a.originalType,u=a.parentName,s=d(a,["components","mdxType","originalType","parentName"]),v=o(e),c=i,k=v["".concat(u,".").concat(c)]||v[c]||p[c]||n;return e?t.createElement(k,r(r({ref:l},s),{},{components:e})):t.createElement(k,r({ref:l},s))}));function c(a,l){var e=arguments,i=l&&l.mdxType;if("string"==typeof a||i){var n=e.length,r=new Array(n);r[0]=v;var d={};for(var u in l)hasOwnProperty.call(l,u)&&(d[u]=l[u]);d.originalType=a,d.mdxType="string"==typeof a?a:i,r[1]=d;for(var o=2;o<n;o++)r[o]=e[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,e)}v.displayName="MDXCreateElement"},458:(a,l,e)=>{e.r(l),e.d(l,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var t=e(7462),i=(e(7294),e(3905));const n={},r="availability_date",d={unversionedId:"fields/availability_date",id:"fields/availability_date",title:"availability_date",description:"Description",source:"@site/docs/fields/availability_date.md",sourceDirName:"fields",slug:"/fields/availability_date",permalink:"/docs/fields/availability_date",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/availability_date.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"availability",permalink:"/docs/fields/availability"},next:{title:"brand",permalink:"/docs/fields/brand"}},u={},o=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_format",id:"validation_invalid_format",level:3},{value:"validation_invalid_value",id:"validation_invalid_value",level:3},{value:"validation_missing_field",id:"validation_missing_field",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:o};function p(a){let{components:l,...e}=a;return(0,i.kt)("wrapper",(0,t.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"availability_date"},"availability_date"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This attribute is ",(0,i.kt)("em",{parentName:"p"},"optional"),".\nIt should be used to indicate either a preorder date or release date."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"optional"))),(0,i.kt)("h2",{id:"specification-details"},"Specification Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ISO 8601 formatted datetime"),(0,i.kt)("li",{parentName:"ul"},"If time is missing, release will be set to 12:00 AM CET")),(0,i.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Standard: ISO 8601")),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: String"),(0,i.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,i.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,i.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,i.kt)("h3",{id:"validation_invalid_format"},"validation_invalid_format"),(0,i.kt)("h3",{id:"validation_invalid_value"},"validation_invalid_value"),(0,i.kt)("h3",{id:"validation_missing_field"},"validation_missing_field"),(0,i.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Valid example  "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>preorder</g:availability>                \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n<g:availability>preorder</g:availability>                \n")))))),(0,i.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Valid example  "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,preorder                \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder                \n")))))),(0,i.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Invalid example                                               "),(0,i.kt)("th",null,"Resulting error code     "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021/12/22/12:23:00</g:availability_date>\n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>today</g:availability_date>              \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability>preorder</g:availability>                     \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_field \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>in_stock</g:availability>                                                               \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>out_of_stock</g:availability>                                                               \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>pickup</g:availability>                                                               \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>download</g:availability>                                                               \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>not_available_for_purchase</g:availability>                                                               \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value \n")))))),(0,i.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Invalid example  "),(0,i.kt)("th",null,"Resulting error code     "))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\n2021/12/22/12:23:00                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\ntoday                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format\n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n,preorder                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_field \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,in_stock                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,out_of_stock                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,pickup                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,download                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value \n")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,not_available_for_purchase                  \n"))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value \n")))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324470"},"https://support.google.com/merchants/answer/6324470"))))}p.isMDXComponent=!0}}]);