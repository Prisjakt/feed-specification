"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9379],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=l.createContext({}),o=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=o(e.components);return l.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},c=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(t),k=n,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return t?l.createElement(m,r(r({ref:a},d),{},{components:t})):l.createElement(m,r({ref:a},d))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var o=2;o<i;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7110:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=t(7462),n=(t(7294),t(3905));const i={},r="prisjakt_id",s={unversionedId:"fields/prisjakt-specific/prisjakt_id",id:"fields/prisjakt-specific/prisjakt_id",title:"prisjakt_id",description:"Description",source:"@site/docs/fields/prisjakt-specific/prisjakt_id.md",sourceDirName:"fields/prisjakt-specific",slug:"/fields/prisjakt-specific/prisjakt_id",permalink:"/sv/docs/fields/prisjakt-specific/prisjakt_id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/prisjakt-specific/prisjakt_id.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"member_price",permalink:"/sv/docs/fields/prisjakt-specific/member_price"},next:{title:"Enums",permalink:"/sv/docs/category/enums"}},p={},o=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Specification Details",id:"specification-details",level:2},{value:"Allowed Values",id:"allowed-values",level:2},{value:"Format",id:"format",level:2},{value:"Validation Error Codes",id:"validation-error-codes",level:2},{value:"validation_invalid_length",id:"validation_invalid_length",level:3},{value:"validation_not_integer",id:"validation_not_integer",level:3},{value:"Valid XML Examples",id:"valid-xml-examples",level:2},{value:"Valid CSV Examples",id:"valid-csv-examples",level:2},{value:"Invalid XML Examples",id:"invalid-xml-examples",level:2},{value:"Invalid CSV Examples",id:"invalid-csv-examples",level:2}],d={toc:o};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prisjakt_id"},"prisjakt_id"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This attribute is ",(0,n.kt)("em",{parentName:"p"},"optional"),".\nAdd this information if you know to which Prisjakt product we should match your product. Prisjakt XML namespace definition is available at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://storage.googleapis.com/prisjakt-namespace/ns")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"optional"))),(0,n.kt)("h2",{id:"specification-details"},"Specification Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding this will give you control over indexing process")),(0,n.kt)("h2",{id:"allowed-values"},"Allowed Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only digits are allowed")),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: String"),(0,n.kt)("li",{parentName:"ul"},"Encoding: UTF-8"),(0,n.kt)("li",{parentName:"ul"},"Repeatable: no"),(0,n.kt)("li",{parentName:"ul"},"Length: up to 50 characters")),(0,n.kt)("h2",{id:"validation-error-codes"},"Validation Error Codes"),(0,n.kt)("h3",{id:"validation_invalid_length"},"validation_invalid_length"),(0,n.kt)("h3",{id:"validation_not_integer"},"validation_not_integer"),(0,n.kt)("h2",{id:"valid-xml-examples"},"Valid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example                       "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:prisjakt_id>1</pj:prisjakt_id>  \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:prisjakt_id>123</pj:prisjakt_id>\n")))))),(0,n.kt)("h2",{id:"valid-csv-examples"},"Valid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Valid example  "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"prisjakt_id\n1  \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"prisjakt_id\n123\n")))))),(0,n.kt)("h2",{id:"invalid-xml-examples"},"Invalid XML Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                                     "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:prisjakt_id>foo</pj:prisjakt_id>                                                                                \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_not_integer   \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:prisjakt_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</pj:prisjakt_id>\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"validation_invalid_length\n")))))),(0,n.kt)("h2",{id:"invalid-csv-examples"},"Invalid CSV Examples"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Invalid example                                                                                "),(0,n.kt)("th",null,"Resulting error code     "))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"prisjakt_id\nfoo                                                                                \n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_not_integer   \n")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"prisjakt_id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)\n"))),(0,n.kt)("td",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"validation_invalid_length\n")))))))}u.isMDXComponent=!0}}]);