"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1656],{3905:(e,l,t)=>{t.d(l,{Zo:()=>s,kt:()=>k});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function u(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var l=n.useContext(p),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},s=function(e){var l=c(e.components);return n.createElement(p.Provider,{value:l},e.children)},o={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},d=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,m=d["".concat(p,".").concat(k)]||d[k]||o[k]||r;return t?n.createElement(m,i(i({ref:l},s),{},{components:t})):n.createElement(m,i({ref:l},s))}));function k(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var p in l)hasOwnProperty.call(l,p)&&(u[p]=l[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8992:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const r={},i="price",u={unversionedId:"fields/price",id:"fields/price",title:"price",description:"Description",source:"@site/docs/fields/price.md",sourceDirName:"fields",slug:"/fields/price",permalink:"/docs/fields/price",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/price.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pattern",permalink:"/docs/fields/pattern"},next:{title:"prisjakt_id",permalink:"/docs/fields/prisjakt_id"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_missing_currency",id:"validation_missing_currency",level:3},{value:"validation_missing_price_value",id:"validation_missing_price_value",level:3},{value:"validation_missing_value",id:"validation_missing_value",level:3},{value:"validation_not_number",id:"validation_not_number",level:3},{value:"validation_not_positive_number",id:"validation_not_positive_number",level:3},{value:"validation_unknown_currency",id:"validation_unknown_currency",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:c};function o(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"price"},"price"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This attribute is ",(0,a.kt)("strong",{parentName:"p"},"required"),".\nIt should be the same as the price value on your product page. It should contain sale price if ",(0,a.kt)("inlineCode",{parentName:"p"},"sale_price")," attribute is not used."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"required"))),(0,a.kt)("h2",{id:"specification-details"},"Specification Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Price attribute should contain both price (value) and currency (unit)"),(0,a.kt)("li",{parentName:"ul"},"Make sure the price value and currency in the feed matches value and currency on your product page"),(0,a.kt)("li",{parentName:"ul"},"Don't include any additional cost in the price (e.g shipping cost)"),(0,a.kt)("li",{parentName:"ul"},"Price value must be greater than 0"),(0,a.kt)("li",{parentName:"ul"},"Don't provide more than 2 digits after decimal point"),(0,a.kt)("li",{parentName:"ul"},"Don't provide comma or point as separator for both thousands and fractional part, i.e. we don't support ",(0,a.kt)("inlineCode",{parentName:"li"},"1,000,00 SEK")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"1.000.00 SEK")," formats")),(0,a.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mixed values: number, currency (ISO 4217) and decimal point"),(0,a.kt)("li",{parentName:"ul"},"Only one price value per product followed by one currency unit, or one currency unit followed by only one price value per product")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: Price"),(0,a.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,a.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,a.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,a.kt)("h3",{id:"validation_missing_currency"},"validation_missing_currency"),(0,a.kt)("h3",{id:"validation_missing_price_value"},"validation_missing_price_value"),(0,a.kt)("h3",{id:"validation_missing_value"},"validation_missing_value"),(0,a.kt)("h3",{id:"validation_not_number"},"validation_not_number"),(0,a.kt)("h3",{id:"validation_not_positive_number"},"validation_not_positive_number"),(0,a.kt)("h3",{id:"validation_unknown_currency"},"validation_unknown_currency"),(0,a.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example                   "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>100 SEK</g:price>      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>SEK 100</g:price>      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>99.99 SEK</g:price>    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>99,99 SEK</g:price>    \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10,000.00 SEK</g:price>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10 000.00 SEK</g:price>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10.000 SEK</g:price>   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>1.144.000 SEK</g:price>\n")))))),(0,a.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example  "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n100 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\nSEK 100                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n99.99 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'price\n"99,99 SEK"                \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'price\n"10,000.00 SEK"                \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10 000.00 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10.000 SEK                \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n1.144.000 SEK                \n")))))),(0,a.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example                  "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>$100</g:price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>100$</g:price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10.0.00.00 SEK</g:price>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>10.0.00.00 SEK</g:price>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>foo SEK</g:price>       \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>1000</g:price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>-10 SEK</g:price>       \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>0 SEK</g:price>         \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>5.00 dollars</g:price>  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>SEK</g:price>           \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:price>5.00</g:price>          \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"                                 \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_value      \n")))))),(0,a.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example  "),(0,a.kt)("th",null,"Resulting error code          "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n$100                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n100$                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10.0.00.00 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n10.0.00.00 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\nfoo SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n1000                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n-10 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n0 SEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n5.00 dollars                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\nSEK                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"price\n5.00                  \n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'price\n""                  \n'))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_value      \n")))))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324371"},"https://support.google.com/merchants/answer/6324371"))))}o.isMDXComponent=!0}}]);