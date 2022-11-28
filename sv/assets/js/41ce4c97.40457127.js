"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9018],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>s});var l=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,l)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function u(a,e){if(null==a)return{};var t,l,r=function(a,e){if(null==a)return{};var t,l,r={},n=Object.keys(a);for(l=0;l<n.length;l++)t=n[l],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(l=0;l<n.length;l++)t=n[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var c=l.createContext({}),i=function(a){var e=l.useContext(c),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},p=function(a){var e=i(a.components);return l.createElement(c.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(a,e){var t=a.components,r=a.mdxType,n=a.originalType,c=a.parentName,p=u(a,["components","mdxType","originalType","parentName"]),g=i(t),s=r,k=g["".concat(c,".").concat(s)]||g[s]||d[s]||n;return t?l.createElement(k,o(o({ref:e},p),{},{components:t})):l.createElement(k,o({ref:e},p))}));function s(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var n=t.length,o=new Array(n);o[0]=g;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=a,u.mdxType="string"==typeof a?a:r,o[1]=u;for(var i=2;i<n;i++)o[i]=t[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2205:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var l=t(7462),r=(t(7294),t(3905));const n={},o="google_product_category",u={unversionedId:"fields/required/google_product_category",id:"fields/required/google_product_category",title:"google_product_category",description:"Description",source:"@site/docs/fields/required/google_product_category.md",sourceDirName:"fields/required",slug:"/fields/required/google_product_category",permalink:"/sv/docs/fields/required/google_product_category",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/required/google_product_category.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"condition",permalink:"/sv/docs/fields/required/condition"},next:{title:"id",permalink:"/sv/docs/fields/required/id"}},c={},i=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_category_not_found",id:"validation_category_not_found",level:3},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],p={toc:i};function d(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,l.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google_product_category"},"google_product_category"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This attribute is ",(0,r.kt)("em",{parentName:"p"},"optional"),".\nIt should contain full category path from Google taxonomy or respective category id. If you don't know or have Google product category submit ",(0,r.kt)("inlineCode",{parentName:"p"},"product_type")," instead."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"optional"))),(0,r.kt)("h2",{id:"specification-details"},"Specification Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the most nested category possible, avoid using root categories"),(0,r.kt)("li",{parentName:"ul"},"This information helps us to make the products searchable for the users"),(0,r.kt)("li",{parentName:"ul"},"Use full category path or respective category id from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt"},"list"))),(0,r.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use only one attribute of this type per product")),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: String"),(0,r.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,r.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,r.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,r.kt)("h3",{id:"validation_category_not_found"},"validation_category_not_found"),(0,r.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,r.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Valid example                                                                                                                            "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category></g:google_product_category>                                                                                  \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>1</g:google_product_category>                                                                                 \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>1144</g:google_product_category>                                                                              \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>1157</g:google_product_category>                                                                              \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>Animals &amp; Pet Supplies &gt; Pet Supplies &gt; Reptile &amp; Amphibian Supplies</g:google_product_category>\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>Dyr og tilbeh\xf8r til k\xe6ledyr &gt; Tilbeh\xf8r til k\xe6ledyr &gt; Tilbeh\xf8r til hunde</g:google_product_category>     \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>Sporting Goods &gt; Athletics &gt; Figure Skating &amp; Hockey &gt; Ice Skates</g:google_product_category>    \n")))))),(0,r.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Valid example                                                                                  "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},'google_product_category\n""                                                                     \n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\n1                                                                      \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\n1144                                                                   \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\n1157                                                                   \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\nAnimals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies   \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\nDyr og tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til hunde\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates      \n")))))),(0,r.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "),(0,r.kt)("th",null,"Resulting error code         "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)</g:google_product_category>\n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length    \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>144</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"validation_category_not_found\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>Divers sports &gt; Water polo</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"validation_category_not_found\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<g:google_product_category>toys &amp; puzzle</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"validation_category_not_found\n")))))),(0,r.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "),(0,r.kt)("th",null,"Resulting error code         "))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)\n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length    \n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\n144                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"validation_category_not_found\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\nDivers sports > Water polo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"validation_category_not_found\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"google_product_category\ntoys & puzzle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"validation_category_not_found\n")))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324436"},"https://support.google.com/merchants/answer/6324436"))))}d.isMDXComponent=!0}}]);