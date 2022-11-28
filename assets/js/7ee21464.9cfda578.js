"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1895],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=o.createContext({}),m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(t),s=l,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||r;return t?o.createElement(k,a(a({ref:n},u),{},{components:t})):o.createElement(k,a({ref:n},u))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var m=2;m<r;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=t(7462),l=(t(7294),t(3905));const r={},a="promotion",i={unversionedId:"fields/lists/promotion",id:"fields/lists/promotion",title:"promotion",description:"Description",source:"@site/docs/fields/lists/promotion.md",sourceDirName:"fields/lists",slug:"/fields/lists/promotion",permalink:"/docs/fields/lists/promotion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/lists/promotion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"product_type",permalink:"/docs/fields/lists/product_type"},next:{title:"promotion_id",permalink:"/docs/fields/lists/promotion_id"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_format",id:"validation_invalid_format",level:3},{value:"validation_missing_currency",id:"validation_missing_currency",level:3},{value:"validation_missing_field",id:"validation_missing_field",level:3},{value:"validation_missing_price_value",id:"validation_missing_price_value",level:3},{value:"validation_not_number",id:"validation_not_number",level:3},{value:"validation_not_positive_number",id:"validation_not_positive_number",level:3},{value:"validation_unknown_currency",id:"validation_unknown_currency",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2}],u={toc:m};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"promotion"},"promotion"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This attribute is ",(0,l.kt)("em",{parentName:"p"},"optional"),".\nUse it to indicate if the product can be bought at a different price than a sales or regular price eg. discount coupon can be applied. Membership price is excluded (We have different separated field for this type of promotion - 'member_price'.)"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"optional"))),(0,l.kt)("h2",{id:"specification-details"},"Specification Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add the full promotion price"),(0,l.kt)("li",{parentName:"ul"},"If there are discount coupons, add the product price, do not add the discount percentage"),(0,l.kt)("li",{parentName:"ul"},"Don't provide comma or point as separator for both thousands and fractional part of the promotion price, i.e. we don't support ",(0,l.kt)("inlineCode",{parentName:"li"},"1,000,00 SEK")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"1.000.00 SEK")," formats")),(0,l.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Submit complete promotion information")),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: List","[Nested]"),(0,l.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,l.kt)("li",{parentName:"ul"},"Repeatable: yes, up to 10"),(0,l.kt)("li",{parentName:"ul"},"Subattributes:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"promotion_name (",(0,l.kt)("strong",{parentName:"li"},"required"),") - String, up to 10 characters   - promotion_price (",(0,l.kt)("strong",{parentName:"li"},"required"),") - Price, Number, currency (ISO 4217) and decimal point")))),(0,l.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,l.kt)("h3",{id:"validation_invalid_format"},"validation_invalid_format"),(0,l.kt)("h3",{id:"validation_missing_currency"},"validation_missing_currency"),(0,l.kt)("h3",{id:"validation_missing_field"},"validation_missing_field"),(0,l.kt)("h3",{id:"validation_missing_price_value"},"validation_missing_price_value"),(0,l.kt)("h3",{id:"validation_not_number"},"validation_not_number"),(0,l.kt)("h3",{id:"validation_not_positive_number"},"validation_not_positive_number"),(0,l.kt)("h3",{id:"validation_unknown_currency"},"validation_unknown_currency"),(0,l.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Valid example                                                                                                                              "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>100 SEK</pj:promotion_price>\n</pj:promotion>      \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>SEK 100</pj:promotion_price>\n</pj:promotion>      \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>99.99 SEK</pj:promotion_price>\n</pj:promotion>    \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>99,99 SEK</pj:promotion_price>\n</pj:promotion>    \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>10,000.00 SEK</pj:promotion_price>\n</pj:promotion>\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>10 000.00 SEK</pj:promotion_price>\n</pj:promotion>\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>10.000 SEK</pj:promotion_price>\n</pj:promotion>   \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>1.144.000 SEK</pj:promotion_price>\n</pj:promotion>\n")))))),(0,l.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Valid example                                                       "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:100 SEK        \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:SEK 100        \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:99.99 SEK      \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'promotion(promotion_name:promotion_price)\n"Club Price:99,99 SEK"    \n')))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'promotion(promotion_name:promotion_price)\n"Club Price:10,000.00 SEK"\n')))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:10 000.00 SEK  \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:10.000 SEK     \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:1.144.000 SEK  \n")))))),(0,l.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Invalid example                                                                                                                             "),(0,l.kt)("th",null,"Resulting error code          "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>10.0.00.00 SEK</pj:promotion_price>\n</pj:promotion>\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>10.0.00.00 SEK</pj:promotion_price>\n</pj:promotion>\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>XC SEK</pj:promotion_price>\n</pj:promotion>        \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>1000</pj:promotion_price>\n</pj:promotion>          \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format     \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>- 10 SEK</pj:promotion_price>\n</pj:promotion>      \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format     \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>0 SEK</pj:promotion_price>\n</pj:promotion>         \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>5.00 dollars</pj:promotion_price>\n</pj:promotion>  \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency   \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>SEK</pj:promotion_price>\n</pj:promotion>           \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n  <pj:promotion_price>5.00</pj:promotion_price>\n</pj:promotion>          \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency   \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion>\n  <pj:promotion_name>Club Price</pj:promotion_name>\n</pj:promotion>                                                          \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_field      \n")))))),(0,l.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Invalid example                                                    "),(0,l.kt)("th",null,"Resulting error code          "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:10.0.00.00 SEK\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:10.0.00.00 SEK\n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:XC SEK        \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number         \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:1000          \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format     \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:- 10 SEK      \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format     \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:0 SEK         \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:5.00 dollars  \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency   \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:SEK           \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name:promotion_price)\nClub Price:5.00          \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency   \n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"promotion(promotion_name)\nClub Price                               \n"))),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_field      \n")))))))}c.isMDXComponent=!0}}]);