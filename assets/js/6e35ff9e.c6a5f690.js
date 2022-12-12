"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[246],{3905:(e,l,t)=>{t.d(l,{Zo:()=>s,kt:()=>k});var a=t(7294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),o=function(e){var l=a.useContext(d),t=l;return e&&(t="function"==typeof e?e(l):u(u({},l),e)),t},s=function(e){var l=o(e.components);return a.createElement(d.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},c=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(t),k=n,m=c["".concat(d,".").concat(k)]||c[k]||p[k]||r;return t?a.createElement(m,u(u({ref:l},s),{},{components:t})):a.createElement(m,u({ref:l},s))}));function k(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=t.length,u=new Array(r);u[0]=c;var i={};for(var d in l)hasOwnProperty.call(l,d)&&(i[d]=l[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var o=2;o<r;o++)u[o]=t[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5234:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(7462),n=(t(7294),t(3905));const r={},u="adult",i={unversionedId:"fields/adult",id:"fields/adult",title:"adult",description:"Description",source:"@site/docs/fields/adult.md",sourceDirName:"fields",slug:"/fields/adult",permalink:"/docs/fields/adult",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/adult.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"additional_image_link",permalink:"/docs/fields/additional_image_link"},next:{title:"affiliate_link",permalink:"/docs/fields/affiliate_link"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_value",id:"validation_invalid_value",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:o};function p(e){let{components:l,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adult"},"adult"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("em",{parentName:"p"},"optional"),".\nShould be used for tagging products for an adult audience. Not used to describe age group, but for specific product types, such as sex toys."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"optional"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't use adult to indicate age_group")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"false"),(0,n.kt)("li",{parentName:"ul"},"no"),(0,n.kt)("li",{parentName:"ul"},"true"),(0,n.kt)("li",{parentName:"ul"},"yes")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: no")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_value"},"validation_invalid_value"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example           "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>              \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>true</g:adult> \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>false</g:adult>\n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>yes</g:adult>  \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>no</g:adult>   \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>YES</g:adult>  \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>NO</g:adult>   \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>tRuE</g:adult> \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>fAlSE</g:adult>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'adult\n""                \n')))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\ntrue                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nfalse                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nyes                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nno                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nYES                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nNO                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\ntRuE                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nfAlSE                \n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example           "),(0,n.kt)("th",null,"Resulting error code    "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:adult>unknown</g:adult>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_value\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example  "),(0,n.kt)("th",null,"Resulting error code    "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"adult\nunknown                  \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_value\n")))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324508"},"https://support.google.com/merchants/answer/6324508"))))}p.isMDXComponent=!0}}]);