"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9264],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=l.createContext({}),p=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return l.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return t?l.createElement(k,i(i({ref:a},s),{},{components:t})):l.createElement(k,i({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3274:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(7462),n=(t(7294),t(3905));const r={},i="mpn",o={unversionedId:"fields/mpn",id:"fields/mpn",title:"mpn",description:"Description",source:"@site/docs/fields/mpn.md",sourceDirName:"fields",slug:"/fields/mpn",permalink:"/sv/docs/fields/mpn",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/mpn.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"member_price",permalink:"/sv/docs/fields/member_price"},next:{title:"pattern",permalink:"/sv/docs/fields/pattern"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:p};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mpn"},"mpn"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("em",{parentName:"p"},"optional"),".\nAdd valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"optional"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MPN enables automated product classification therefore any new products added to the feed will be indexed automatically."),(0,n.kt)("li",{parentName:"ul"},"Only MPNs created by a manufacturer should be added here."),(0,n.kt)("li",{parentName:"ul"},"Distinguish between variants")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use only one attribute of this type per product")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: String"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,n.kt)("li",{parentName:"ul"},"Length: up to 70 characters")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example           "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>SM-G920F</g:mpn> \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>MGCH3LL/A</g:mpn>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\nSM-G920F                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\nMGCH3LL/A                \n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                                       "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:mpn>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:mpn>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example  "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"mpn\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)                  \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324482"},"https://support.google.com/merchants/answer/6324482"))))}d.isMDXComponent=!0}}]);