"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},c="Escaping data in CSV",i={unversionedId:"advanced/escaping/escape-csv",id:"advanced/escaping/escape-csv",title:"Escaping data in CSV",description:'If you need to use commas , within the value of your offers (for example in a title or a description) then we expect the csv cell to be enclosed in quotes " according to RFC4180. For more information about our CSV support see our CSV file format article.',source:"@site/docs/advanced/escaping/escape-csv.md",sourceDirName:"advanced/escaping",slug:"/advanced/escaping/escape-csv",permalink:"/advanced/escaping/escape-csv",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/escaping/escape-csv.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Escaping",permalink:"/advanced/escaping/"},next:{title:"Deprecation Policy",permalink:"/deprecation-policy"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"escaping-data-in-csv"},"Escaping data in CSV"),(0,a.kt)("p",null,"If you need to use commas ",(0,a.kt)("inlineCode",{parentName:"p"},",")," within the value of your offers (for example in a title or a description) then we expect the csv cell to be enclosed in quotes ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," according to ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc4180.html#section-2"},"RFC4180"),". For more information about our CSV support see our ",(0,a.kt)("a",{parentName:"p",href:"/types-of-feeds/pull/file-formats/csv"},"CSV file format article"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'"aaa","b CRLF\nbb","ccc" CRLF\nzzz,yyy,xxx\n')),(0,a.kt)("admonition",{title:"Don\xb4t escape using backslash",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We ",(0,a.kt)("strong",{parentName:"p"},"do not")," support dialects where escaping characters is done by putting a backslash ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," before the value.")))}u.isMDXComponent=!0}}]);