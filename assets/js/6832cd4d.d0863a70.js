"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6075],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>c});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},f=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),m=d(i),c=r,u=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return i?n.createElement(u,a(a({ref:t},f),{},{components:i})):n.createElement(u,a({ref:t},f))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},918:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=i(7462),r=(i(7294),i(3905));const l={},a="Validation Severity Levels",o={unversionedId:"terminology/severity-levels",id:"terminology/severity-levels",title:"Validation Severity Levels",description:"Offers",source:"@site/docs/terminology/severity-levels.md",sourceDirName:"terminology",slug:"/terminology/severity-levels",permalink:"/docs/terminology/severity-levels",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/terminology/severity-levels.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Required Vs Optional Fields",permalink:"/docs/terminology/required-vs-optional"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},s={},d=[{value:"Offers",id:"offers",level:2},{value:"Fields",id:"fields",level:2},{value:"Nested Fields",id:"nested-fields",level:3},{value:"Optional Fields and Severity Levels",id:"optional-fields-and-severity-levels",level:3}],f={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation-severity-levels"},"Validation Severity Levels"),(0,r.kt)("h2",{id:"offers"},"Offers"),(0,r.kt)("p",null,"And offer as whole may be in ",(0,r.kt)("strong",{parentName:"p"},"three")," states"),(0,r.kt)("admonition",{title:"Accepted",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All ",(0,r.kt)("em",{parentName:"p"},"supplied")," fields are valid.")),(0,r.kt)("admonition",{title:"Partially Accepted",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"offer")," was accepted but ",(0,r.kt)("em",{parentName:"p"},"some")," fields were omitted due to them being invalid. The\neffect of an omitted field is different depending on which field it is.")),(0,r.kt)("admonition",{title:"Rejected",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We have a minimal set of required fields in order to show an offer on Prisjakt. If a required field\nis missing, the ",(0,r.kt)("strong",{parentName:"p"},"whole")," offer will be omitted from Prisjakt.")),(0,r.kt)("h2",{id:"fields"},"Fields"),(0,r.kt)("p",null,"A field is either valid or invalid. Invalid field data is always ",(0,r.kt)("strong",{parentName:"p"},"omitted")," when entering Prisjakts datastore."),(0,r.kt)("admonition",{title:"Valid",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("em",{parentName:"p"},"field")," is valid if it fulfills the validation rules of the field.")),(0,r.kt)("admonition",{title:"Invalid",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("em",{parentName:"p"},"field")," is invalid if it fulfills the validation rules of the field.")),(0,r.kt)("h3",{id:"nested-fields"},"Nested Fields"),(0,r.kt)("p",null,"Nested fields and lists may contain partially correct information, a nested field as whole:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"is considered ",(0,r.kt)("em",{parentName:"li"},"valid")," if it fulfills the minimum requirements of the field as given by the validation rules"),(0,r.kt)("li",{parentName:"ul"},"is considered ",(0,r.kt)("em",{parentName:"li"},"invalid")," if it does not fulfill the minimum requirements of the field as given by the validatio rules")),(0,r.kt)("h3",{id:"optional-fields-and-severity-levels"},"Optional Fields and Severity Levels"),(0,r.kt)("p",null,"An optional field may still be valid or invalid. If an optional field is submitted but the value is invalid, it will\nbe noted in the validation report and the value would be omitted. It would have the same effect as not sending the offer\nat all."))}p.isMDXComponent=!0}}]);