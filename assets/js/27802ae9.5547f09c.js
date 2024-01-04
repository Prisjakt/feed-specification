"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,u=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return n?o.createElement(u,i(i({ref:t},d),{},{components:n})):o.createElement(u,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3},i="Promotions XML",s={unversionedId:"types-of-feeds/pull/file-formats/promotions-xml",id:"types-of-feeds/pull/file-formats/promotions-xml",title:"Promotions XML",description:"XML stands for eXtensinble Markup Language. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner.",source:"@site/docs/types-of-feeds/pull/file-formats/promotions-xml.md",sourceDirName:"types-of-feeds/pull/file-formats",slug:"/types-of-feeds/pull/file-formats/promotions-xml",permalink:"/types-of-feeds/pull/file-formats/promotions-xml",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/types-of-feeds/pull/file-formats/promotions-xml.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CSV",permalink:"/types-of-feeds/pull/file-formats/csv"},next:{title:"Push",permalink:"/types-of-feeds/push/"}},l={},p=[{value:"Namespaces",id:"namespaces",level:2},{value:"Priority When Parsed",id:"priority-when-parsed",level:4},{value:"Prisjakt Promotions XML Namespace",id:"prisjakt-promotions-xml-namespace",level:3},{value:"Use UTF-8",id:"use-utf-8",level:2},{value:"Use CDATA",id:"use-cdata",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"promotions-xml"},"Promotions XML"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/XML"},"XML")," stands for e",(0,r.kt)("strong",{parentName:"p"},"X"),"tensinble ",(0,r.kt)("strong",{parentName:"p"},"M"),"arkup ",(0,r.kt)("strong",{parentName:"p"},"L"),"anguage. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner."),(0,r.kt)("p",null,"Prisjakt Promotions XML feeds are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/merchants/answer/2906014?hl=en"},"Google Promotions Feed Specification")," which means that in most cases you can generate a Google Promotions feed and then send the link to us and let us consume it."),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"A Prisjakt feed should use two namespaces, the ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," namespace which most fields belong to that are defined by the Google Promotions Feed Specification and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"pj")," namespace which contains some ",(0,r.kt)("a",{parentName:"p",href:"/terminology/prisjakt-specific-fields#promotion-feeds"},"additional Prisjakt specific fields (promotions feeds)")," defined by us."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<rss xmlns:pj="https://schema.prisjakt.nu/ns/promotions-1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n')),(0,r.kt)("p",null,"All fields stemming from the Google Promotions Feed specification will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"g:")," namespace prefix and the Prisjakt specific fields should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pj:")," prefix."),(0,r.kt)("h4",{id:"priority-when-parsed"},"Priority When Parsed"),(0,r.kt)("p",null,"If multiple fields with the same name but different namespaces exist, the field will be parsed with the following priority:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pj:")," first eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"<pj:some_field>My new promotion</pj:some_field>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"g:")," second eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"<g:some_field>My new promotion</g:some_field>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"no namespace")," third eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"<some_field>My new promotion</some_field>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"other/unknown")," in undefined order eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"<xyz:some_field>My new promotion</xyz:some_field>"))),(0,r.kt)("h3",{id:"prisjakt-promotions-xml-namespace"},"Prisjakt Promotions XML Namespace"),(0,r.kt)("p",null,"Our namespace definition file is located at the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://schema.prisjakt.nu/ns/promotions-1.0\n")),(0,r.kt)("h2",{id:"use-utf-8"},"Use UTF-8"),(0,r.kt)("p",null,"All XML feeds should start with the following header and the files should be properly ",(0,r.kt)("a",{parentName:"p",href:"/advanced/encoding/file-encoding"},"UTF-8 encoded"),"."),(0,r.kt)("p",null,"Do not use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Control_character"},"control characters")," in feed file. We support some of them trying to follow ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Valid_characters_in_XML"},"XML spec")," but not guarantee to fully support it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?xml version='1.0' encoding='UTF-8'?>\n")),(0,r.kt)("h2",{id:"use-cdata"},"Use CDATA"),(0,r.kt)("p",null,"You should lower the risk of your data causing xml parsers to fail because of invalid data by encoding your data correctly. Take a look on our ",(0,r.kt)("a",{parentName:"p",href:"/advanced/encoding/cdata"},"CDATA")," article to achieve this."))}m.isMDXComponent=!0}}]);