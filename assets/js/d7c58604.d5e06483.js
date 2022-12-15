"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4742],{3905:(e,l,t)=>{t.d(l,{Zo:()=>s,kt:()=>m});var a=t(7294);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var l=a.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},s=function(e){var l=c(e.components);return a.createElement(u.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},p=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(k,o(o({ref:l},s),{},{components:t})):a.createElement(k,o({ref:l},s))}));function m(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1330:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const r={},o="color",i={unversionedId:"fields/color",id:"fields/color",title:"color",description:"Description",source:"@site/docs/fields/color.md",sourceDirName:"fields",slug:"/fields/color",permalink:"/docs/fields/color",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/color.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"brand",permalink:"/docs/fields/brand"},next:{title:"condition",permalink:"/docs/fields/condition"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"validation_too_many_repetitions",id:"validation_too_many_repetitions",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2},{value:"References",id:"references",level:2}],s={toc:c};function d(e){let{components:l,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"color"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("em",{parentName:"p"},"optional"),".\nUsing this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"optional"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Include up to 3 different color in format ",(0,n.kt)("inlineCode",{parentName:"li"},"blue/black/green")," where the first is primary, and the other two secondary"),(0,n.kt)("li",{parentName:"ul"},"Don't use numbers and HTML color coding"),(0,n.kt)("li",{parentName:"ul"},"Don't use phrases describing other product properties like design, pattern, size etc")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the same color as in your product page")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: List","[String]"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: yes, up to 3"),(0,n.kt)("li",{parentName:"ul"},"Length: up to 40 characters")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,n.kt)("h3",{id:"validation_too_many_repetitions"},"validation_too_many_repetitions"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example                    "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<channel/>                       \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>red</g:color>           \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>green</g:color>         \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>blue</g:color>          \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>red/green/blue</g:color>\n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>RED/GREEN/BLUE</g:color>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},'color\n""                \n')))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nred                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\ngreen                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nblue                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nred/green/blue                \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nRED/GREEN/BLUE                \n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                             "),(0,n.kt)("th",null,"Resulting error code           "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)</g:color>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length      \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>black/mint/blue/white</g:color>                                                    \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_too_many_repetitions\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example  "),(0,n.kt)("th",null,"Resulting error code           "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)                  \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length      \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nblack/mint/blue/white                  \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_too_many_repetitions\n")))))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324487"},"https://support.google.com/merchants/answer/6324487"))))}d.isMDXComponent=!0}}]);