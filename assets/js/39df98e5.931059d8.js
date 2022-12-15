"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7583],{3905:(e,l,t)=>{t.d(l,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),u=function(e){var l=n.useContext(m),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},c=function(e){var l=u(e.components);return n.createElement(m.Provider,{value:l},e.children)},s={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},o=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=u(t),d=a,k=o["".concat(m,".").concat(d)]||o[d]||s[d]||r;return t?n.createElement(k,i(i({ref:l},c),{},{components:t})):n.createElement(k,i({ref:l},c))}));function d(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=o;var p={};for(var m in l)hasOwnProperty.call(l,m)&&(p[m]=l[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},4357:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const r={},i="member_price",p={unversionedId:"fields/member_price",id:"fields/member_price",title:"member_price",description:"Description",source:"@site/docs/fields/member_price.md",sourceDirName:"fields",slug:"/fields/member_price",permalink:"/docs/fields/member_price",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/member_price.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"material",permalink:"/docs/fields/material"},next:{title:"mpn",permalink:"/docs/fields/mpn"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_missing_currency",id:"validation_missing_currency",level:3},{value:"validation_missing_price_value",id:"validation_missing_price_value",level:3},{value:"validation_not_number",id:"validation_not_number",level:3},{value:"validation_not_positive_number",id:"validation_not_positive_number",level:3},{value:"validation_unknown_currency",id:"validation_unknown_currency",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2}],c={toc:u};function s(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"member_price"},"member_price"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This attribute is ",(0,a.kt)("em",{parentName:"p"},"optional"),".\nIt should be the same as the price value on your product page with active membership program. Prisjakt XML namespace definition is available at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://storage.googleapis.com/prisjakt-namespace/ns")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optional"))),(0,a.kt)("h2",{id:"specification-details"},"Specification Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Price value must be greater than 0"),(0,a.kt)("li",{parentName:"ul"},"Don't provide more than 2 digits after decimal point"),(0,a.kt)("li",{parentName:"ul"},"Don't provide comma or point as separator for both thousands and fractional part, i.e. we don't support ",(0,a.kt)("inlineCode",{parentName:"li"},"1,000,00 SEK")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"1.000.00 SEK")," formats")),(0,a.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mixed values: number, currency (ISO 4217) and decimal point"),(0,a.kt)("li",{parentName:"ul"},"Only one price value per product followed by one currency unit, or one currency unit followed by only one price value per product")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: Price"),(0,a.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,a.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,a.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,a.kt)("h3",{id:"validation_missing_currency"},"validation_missing_currency"),(0,a.kt)("h3",{id:"validation_missing_price_value"},"validation_missing_price_value"),(0,a.kt)("h3",{id:"validation_not_number"},"validation_not_number"),(0,a.kt)("h3",{id:"validation_not_positive_number"},"validation_not_positive_number"),(0,a.kt)("h3",{id:"validation_unknown_currency"},"validation_unknown_currency"),(0,a.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example                                   "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>                                      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>100 SEK</pj:member_price>      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>SEK 100</pj:member_price>      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>99.99 SEK</pj:member_price>    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>99,99 SEK</pj:member_price>    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10,000.00 SEK</pj:member_price>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10 000.00 SEK</pj:member_price>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.000 SEK</pj:member_price>   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>1.144.000 SEK</pj:member_price>\n")))))),(0,a.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example  "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'member_price\n""                \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n100 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nSEK 100                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n99.99 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'member_price\n"99,99 SEK"                \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'member_price\n"10,000.00 SEK"                \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10 000.00 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.000 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n1.144.000 SEK                \n")))))),(0,a.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example                                  "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>$100</pj:member_price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>100$</pj:member_price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>10.0.00.00 SEK</pj:member_price>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>foo SEK</pj:member_price>       \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>1000</pj:member_price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>-10 SEK</pj:member_price>       \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>0 SEK</pj:member_price>         \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>5.00 dollars</pj:member_price>  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>SEK</pj:member_price>           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:member_price>5.00</pj:member_price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))))),(0,a.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example  "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n$100                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n100$                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.0.00.00 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n10.0.00.00 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nfoo SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n1000                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n-10 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n0 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n5.00 dollars                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\nSEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"member_price\n5.00                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))))))}s.isMDXComponent=!0}}]);