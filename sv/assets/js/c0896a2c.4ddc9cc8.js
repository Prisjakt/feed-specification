"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2760],{3905:(e,a,l)=>{l.d(a,{Zo:()=>p,kt:()=>_});var n=l(7294);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,n)}return l}function d(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function r(e,a){if(null==e)return{};var l,n,t=function(e,a){if(null==e)return{};var l,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var o=n.createContext({}),u=function(e){var a=n.useContext(o),l=a;return e&&(l="function"==typeof e?e(a):d(d({},a),e)),l},p=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var l=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(l),_=t,f=m["".concat(o,".").concat(_)]||m[_]||s[_]||i;return l?n.createElement(f,d(d({ref:a},p),{},{components:l})):n.createElement(f,d({ref:a},p))}));function _(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=l.length,d=new Array(i);d[0]=m;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r.mdxType="string"==typeof e?e:t,d[1]=r;for(var u=2;u<i;u++)d[u]=l[u];return n.createElement.apply(null,d)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},3562:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=l(7462),t=(l(7294),l(3905));const i={},d="additional_fees",r={unversionedId:"fields/lists/additional_fees",id:"fields/lists/additional_fees",title:"additional_fees",description:"Description",source:"@site/docs/fields/lists/additional_fees.md",sourceDirName:"fields/lists",slug:"/fields/lists/additional_fees",permalink:"/sv/docs/fields/lists/additional_fees",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/lists/additional_fees.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/sv/docs/category/lists"},next:{title:"additional_image_link",permalink:"/sv/docs/fields/lists/additional_image_link"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_format",id:"validation_invalid_format",level:3},{value:"validation_missing_currency",id:"validation_missing_currency",level:3},{value:"validation_missing_field",id:"validation_missing_field",level:3},{value:"validation_missing_price_value",id:"validation_missing_price_value",level:3},{value:"validation_not_number",id:"validation_not_number",level:3},{value:"validation_not_positive_number",id:"validation_not_positive_number",level:3},{value:"validation_null_value",id:"validation_null_value",level:3},{value:"validation_too_many_repetitions",id:"validation_too_many_repetitions",level:3},{value:"validation_unknown_currency",id:"validation_unknown_currency",level:3},{value:"validation_unknown_field",id:"validation_unknown_field",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2}],p={toc:u};function s(e){let{components:a,...l}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"additional_fees"},"additional_fees"),(0,t.kt)("h2",{id:"description"},"Description"),(0,t.kt)("p",null,"This attribute is ",(0,t.kt)("em",{parentName:"p"},"optional"),'.\nInclude any additional fees that are applied during the checkout process. This should be used to eliminate "hidden fees" that might not be included in the product\'s specific price. Such as "pant" in Sweden, green taxation and similar.'),(0,t.kt)("h2",{id:"requirements"},"Requirements"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"optional"))),(0,t.kt)("h2",{id:"specification-details"},"Specification Details"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Include VAT in the price"),(0,t.kt)("li",{parentName:"ul"},"Add ISO 4217 currency code"),(0,t.kt)("li",{parentName:"ul"},"Don't provide comma or point as separator for both thousands and fractional part in fee_value, i.e. we don't support ",(0,t.kt)("inlineCode",{parentName:"li"},"1,000,00 SEK")," and ",(0,t.kt)("inlineCode",{parentName:"li"},"1.000.00 SEK")," formats")),(0,t.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Submit complete additional fee information"),(0,t.kt)("li",{parentName:"ul"},"Overestimate if you can't provide accurate additional fee cost"),(0,t.kt)("li",{parentName:"ul"},"Submit additional fee cost including VAT, use local currency")),(0,t.kt)("h2",{id:"format"},"Format"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Type: List","[Nested]"),(0,t.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,t.kt)("li",{parentName:"ul"},"Repeatable: yes, up to 3"),(0,t.kt)("li",{parentName:"ul"},"Subattributes:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"fee_name (",(0,t.kt)("strong",{parentName:"li"},"required"),") - String   - fee_value (",(0,t.kt)("strong",{parentName:"li"},"required"),") - Price, Number, currency (ISO 4217) and decimal point")))),(0,t.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,t.kt)("h3",{id:"validation_invalid_format"},"validation_invalid_format"),(0,t.kt)("h3",{id:"validation_missing_currency"},"validation_missing_currency"),(0,t.kt)("h3",{id:"validation_missing_field"},"validation_missing_field"),(0,t.kt)("h3",{id:"validation_missing_price_value"},"validation_missing_price_value"),(0,t.kt)("h3",{id:"validation_not_number"},"validation_not_number"),(0,t.kt)("h3",{id:"validation_not_positive_number"},"validation_not_positive_number"),(0,t.kt)("h3",{id:"validation_null_value"},"validation_null_value"),(0,t.kt)("h3",{id:"validation_too_many_repetitions"},"validation_too_many_repetitions"),(0,t.kt)("h3",{id:"validation_unknown_currency"},"validation_unknown_currency"),(0,t.kt)("h3",{id:"validation_unknown_field"},"validation_unknown_field"),(0,t.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,t.kt)("table",null,(0,t.kt)("thead",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Valid example                                                                                                                                                                                                                          "))),(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>100 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                     \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>SEK 100</pj:fee_value>\n</pj:additional_fees>                                                                                                                     \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>99.99 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                   \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>99,99 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                   \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10,000.00 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                               \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10 000.00 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                               \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10.000 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                  \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>1.144.000 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                               \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>5.99 EUR</pj:fee_value>\n</pj:additional_fees>\n<pj:additional_fees>\n  <pj:fee_name>bar</pj:fee_name>\n  <pj:fee_value>4.99 EUR</pj:fee_value>\n</pj:additional_fees>\n")))))),(0,t.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,t.kt)("table",null,(0,t.kt)("thead",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Valid example                                                  "))),(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n100 SEK:foo                \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\nSEK 100:foo                \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n99.99 SEK:foo              \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},'additional_fees(fee_value:fee_name)\n"99,99 SEK:foo"            \n')))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},'additional_fees(fee_value:fee_name)\n"10,000.00 SEK:foo"        \n')))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n10 000.00 SEK:foo          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n10.000 SEK:foo             \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n1.144.000 SEK:foo          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},'additional_fees(fee_value:fee_name)\n"5.99 EUR:foo,4.99 EUR:bar"\n')))))),(0,t.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,t.kt)("table",null,(0,t.kt)("thead",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "),(0,t.kt)("th",null,"Resulting error code           "))),(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10.0.00.00 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                          \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10.0.00.00 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                          \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>XC SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                  \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>1000</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                    \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format      \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>- 10 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_format      \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>0 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                   \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_positive_number \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>5.00 dollars</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                            \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_currency    \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                     \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_price_value \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>5.00</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                    \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_currency    \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value></pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                        \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_null_value          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>foo</pj:fee_name>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                                                        \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_missing_field       \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:bar>5</pj:bar>\n  <pj:fee_name>foo</pj:fee_name>\n  <pj:fee_value>10 SEK</pj:fee_value>\n</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                             \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_unknown_field       \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:additional_fees>\n  <pj:fee_name>test</pj:fee_name>\n  <pj:fee_value>5.00 EUR</pj:fee_value>\n</pj:additional_fees>\n<pj:additional_fees>\n  <pj:fee_name>test</pj:fee_name>\n  <pj:fee_value>5.00 EUR</pj:fee_value>\n</pj:additional_fees>\n<pj:additional_fees>\n  <pj:fee_name>test</pj:fee_name>\n  <pj:fee_value>5.00 EUR</pj:fee_value>\n</pj:additional_fees>\n<pj:additional_fees>\n  <pj:fee_name>test</pj:fee_name>\n  <pj:fee_value>5.00 EUR</pj:fee_value>\n</pj:additional_fees>\n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"validation_too_many_repetitions\n")))))),(0,t.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,t.kt)("table",null,(0,t.kt)("thead",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Invalid example                                                                              "),(0,t.kt)("th",null,"Resulting error code           "))),(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n10.0.00.00 SEK:foo                                       \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n10.0.00.00 SEK:foo                                       \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\nXC SEK:foo                                               \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_number          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n1000:foo                                                 \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format      \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n- 10 SEK:foo                                             \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_format      \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n0 SEK:foo                                                \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_positive_number \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n5.00 dollars:foo                                         \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_currency    \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\nSEK:foo                                                  \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_price_value \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n5.00:foo                                                 \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_currency    \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name)\n:foo                                                     \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_null_value          \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_name)\nfoo                                                                \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_missing_field       \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"additional_fees(fee_value:fee_name:bar)\n10 SEK:foo:5                                         \n"))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_unknown_field       \n")))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},'additional_fees(fee_value:fee_name)\n"5.00 EUR:test,5.00 EUR:test,5.00 EUR:test,5.00 EUR:test"\n'))),(0,t.kt)("td",null,(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csv"},"validation_too_many_repetitions\n")))))))}s.isMDXComponent=!0}}]);