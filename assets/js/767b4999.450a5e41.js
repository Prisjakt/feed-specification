"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8917],{3905:(e,l,t)=>{t.d(l,{Zo:()=>o,kt:()=>k});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function u(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var l=n.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},o=function(e){var l=d(e.components);return n.createElement(s.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=d(t),k=a,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return t?n.createElement(m,i(i({ref:l},o),{},{components:t})):n.createElement(m,i({ref:l},o))}));function k(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var u={};for(var s in l)hasOwnProperty.call(l,s)&&(u[s]=l[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6115:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const r={},i="is_bundle",u={unversionedId:"fields/is_bundle",id:"fields/is_bundle",title:"is_bundle",description:"Description",source:"@site/docs/fields/is_bundle.md",sourceDirName:"fields",slug:"/fields/is_bundle",permalink:"/docs/fields/is_bundle",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/is_bundle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"image_link",permalink:"/docs/fields/image_link"},next:{title:"item_group_id",permalink:"/docs/fields/item_group_id"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_value",id:"validation_invalid_value",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],o={toc:d};function p(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"is_bundle"},"is_bundle"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This attribute is ",(0,a.kt)("em",{parentName:"p"},"optional"),".\nThis attribute indicates if the offer is a bundle of products (mobile phone and subscription or DSLR camera and additional lens etc). It is ",(0,a.kt)("strong",{parentName:"p"},"optional")," in most countries, but ",(0,a.kt)("strong",{parentName:"p"},"required")," for products sold on French market."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optional"))),(0,a.kt)("h2",{id:"specification-details"},"Specification Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use this if your product is a custom bundle of products"),(0,a.kt)("li",{parentName:"ul"},"Don't use this for manufacturer-specified bundles")),(0,a.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"false"),(0,a.kt)("li",{parentName:"ul"},"no"),(0,a.kt)("li",{parentName:"ul"},"true"),(0,a.kt)("li",{parentName:"ul"},"yes")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,a.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,a.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,a.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,a.kt)("h3",{id:"validation_invalid_value"},"validation_invalid_value"),(0,a.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example                   "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>                      \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>true</g:is_bundle> \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>false</g:is_bundle>\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>yes</g:is_bundle>  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>no</g:is_bundle>   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>YES</g:is_bundle>  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>NO</g:is_bundle>   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>tRuE</g:is_bundle> \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>fAlSE</g:is_bundle>\n")))))),(0,a.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Valid example  "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'is_bundle\n""   \n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\ntrue \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nfalse\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nyes  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nno   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nYES  \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nNO   \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\ntRuE \n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nfAlSE\n")))))),(0,a.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example                   "),(0,a.kt)("th",null,"Resulting error code    "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<g:is_bundle>unknown</g:is_bundle>\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value\n")))))),(0,a.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Invalid example  "),(0,a.kt)("th",null,"Resulting error code    "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"is_bundle\nunknown\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value\n")))))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324449"},"https://support.google.com/merchants/answer/6324449"))))}p.isMDXComponent=!0}}]);