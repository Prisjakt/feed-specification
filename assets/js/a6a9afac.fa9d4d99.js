"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8700],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>m});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=u(l),m=a,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||r;return l?n.createElement(k,i(i({ref:t},s),{},{components:l})):n.createElement(k,i({ref:t},s))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},5681:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=l(7462),a=(l(7294),l(3905));const r={},i="gender",d={unversionedId:"fields/gender",id:"fields/gender",title:"gender",description:"Description",source:"@site/docs/fields/gender.md",sourceDirName:"fields",slug:"/fields/gender",permalink:"/docs/fields/gender",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/gender.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"energy_efficiency_class",permalink:"/docs/fields/energy_efficiency_class"},next:{title:"google_product_category",permalink:"/docs/fields/google_product_category"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_enum",id:"validation_invalid_enum",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:u};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gender"},"gender"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This attribute is ",(0,a.kt)("em",{parentName:"p"},"optional"),".\nIt is recommended to use this attribute in Fashion categories. Add it to improve search results and listing."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optional"))),(0,a.kt)("h2",{id:"specification-details"},"Specification Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use standard values"),(0,a.kt)("li",{parentName:"ul"},"Don't add info like ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"NA"))),(0,a.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"female"),(0,a.kt)("li",{parentName:"ul"},"male"),(0,a.kt)("li",{parentName:"ul"},"unisex")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: String"),(0,a.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,a.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,a.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,a.kt)("h3",{id:"validation_invalid_enum"},"validation_invalid_enum"),(0,a.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example              "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gender>female</g:gender>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gender>male</g:gender>  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gender>unisex</g:gender>\n")))))),(0,a.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example  "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"gender\nfemale                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"gender\nmale                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"gender\nunisex                \n")))))),(0,a.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example             "),(0,a.kt)("th",null,"Resulting error code   "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gender>unknown</g:gender>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_enum\n")))))),(0,a.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example  "),(0,a.kt)("th",null,"Resulting error code   "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"gender\nunknown                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_enum\n")))))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324479"},"https://support.google.com/merchants/answer/6324479"))))}p.isMDXComponent=!0}}]);