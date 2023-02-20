"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i="Url Encoding",l={unversionedId:"advanced/encoding/url-encode",id:"advanced/encoding/url-encode",title:"Url Encoding",description:"What Is An Url?",source:"@site/docs/advanced/encoding/url-encode.md",sourceDirName:"advanced/encoding",slug:"/advanced/encoding/url-encode",permalink:"/advanced/encoding/url-encode",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/encoding/url-encode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Encoding (UTF-8)",permalink:"/advanced/encoding/file-encoding"},next:{title:"Special Characters in XML",permalink:"/advanced/encoding/xml-escaping"}},s={},c=[{value:"Rules",id:"rules",level:2},{value:"Encoding",id:"encoding",level:2},{value:"Example",id:"example",level:2},{value:"Breakdown",id:"breakdown",level:3},{value:"Domain name",id:"domain-name",level:4},{value:"Path",id:"path",level:4},{value:"Parameter value",id:"parameter-value",level:4},{value:"Anchor",id:"anchor",level:4},{value:"Why So Strict?",id:"why-so-strict",level:2},{value:"References",id:"references",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"url-encoding"},"Url Encoding"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL"},(0,r.kt)("img",{alt:"What Is An Url?",src:a(92083).Z,width:"2493",height:"241"}))),(0,r.kt)("p",null,"URLs are complex datatypes that carry a lot of information and can be a bit hard to handle sometimes. In this article we will try to explain how to deal with some tricky but not uncommon cases. All fields that are of type URL such as the ",(0,r.kt)("a",{parentName:"p",href:"/fields/link"},"link")," field have both ",(0,r.kt)("a",{parentName:"p",href:"/fields/link#example-values"},"valid examples")," and ",(0,r.kt)("a",{parentName:"p",href:"/fields/link#error-codes"},"invalid examples")," of URLs in their respective sections."),(0,r.kt)("p",null,"The image above is borrowed from Mozilla MDN",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("p",null,"Before we explain how to encode URLs, here is what we expect regarding urls:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("strong",{parentName:"li"},"must")," follow RFC3986",(0,r.kt)("sup",{parentName:"li",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("strong",{parentName:"li"},"must")," be absolute (we do not accept relative urls)"),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("strong",{parentName:"li"},"must")," have a ",(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," (http/https)"),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("strong",{parentName:"li"},"must")," have an ",(0,r.kt)("inlineCode",{parentName:"li"},"authority")," (your domain usually)"),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("strong",{parentName:"li"},"must")," have a ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," (a single product or image are never placed in the root of a domain)"),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("em",{parentName:"li"},"may")," have ",(0,r.kt)("inlineCode",{parentName:"li"},"parameters")," but the parameters values ",(0,r.kt)("strong",{parentName:"li"},"must")," be properly URL encoded"),(0,r.kt)("li",{parentName:"ul"},"They ",(0,r.kt)("em",{parentName:"li"},"may")," have ",(0,r.kt)("inlineCode",{parentName:"li"},"anchors")," (also called fragment) but the anchors ",(0,r.kt)("strong",{parentName:"li"},"must")," be properly URL encoded")),(0,r.kt)("h2",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"In order to make a long RFC specification short, do this when passing urls to us: "),(0,r.kt)("admonition",{title:"TIP: Use an encoding tool",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to test conversion and encoding you can use one of the many available online tools, one such example is ",(0,r.kt)("a",{parentName:"p",href:"https://coderstoolbox.net/string/#!encoding=url&action=encode&charset=utf_8"},"Coder\xb4s Toolbox")," for encoding URL values and the ",(0,r.kt)("a",{parentName:"p",href:"https://www.verisign.com/en_US/channel-resources/domain-registry-products/idn/idn-conversion-tool/index.xhtml"},"Internationalized Domain Name (IDN) Conversion Tool")," for converting domain names.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"domain")," contain only ascii characters, unicode characters should be encoded",(0,r.kt)("sup",{parentName:"li",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("li",{parentName:"ul"},"Ensure that all ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," ",(0,r.kt)("em",{parentName:"li"},"sections")," contain only ascii characters, unicode characters should be encoded",(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("li",{parentName:"ul"},"Ensure that all ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," ",(0,r.kt)("em",{parentName:"li"},"keys")," contain only ascii characters, unicode characters should be encoded",(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("li",{parentName:"ul"},"Ensure that all ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter")," ",(0,r.kt)("em",{parentName:"li"},"values")," contain only ascii characters, unicode characters should be encoded",(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("li",{parentName:"ul"},"Ensure that all ",(0,r.kt)("inlineCode",{parentName:"li"},"anchor")," ",(0,r.kt)("em",{parentName:"li"},"values")," contain only ascii characters, unicode characters should be encoded",(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"If we look at a product url like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://mittf\xf6retag.com/categories/\xf6verlevnadsutrustning/super ficklampa?strength=extra-bright!#buy\u2014now\n")),(0,r.kt)("p",null,"We would expect it in the format of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://xn--mittfretag-icb.com/categories/%C3%B6verlevnadsutrustning/super%20ficklampa?strength=extra-bright!#buy%E2%80%94now\n")),(0,r.kt)("h3",{id:"breakdown"},"Breakdown"),(0,r.kt)("p",null,"In the example above the following encodings have taken place."),(0,r.kt)("h4",{id:"domain-name"},"Domain name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mittf\xf6retag.com")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"xn--mittfretag-icb.com")," According to IDN",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("h4",{id:"path"},"Path"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/categories/\xf6verlevnadsutrustning/super ficklampa")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/%C3%B6verlevnadsutrustning/super%20ficklampa")," according to percent encoding",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("h4",{id:"parameter-value"},"Parameter value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"extra-bright!")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"extra-bright!")," since here is nothing to do, all characters are already plain ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ASCII"},"ascii")),(0,r.kt)("h4",{id:"anchor"},"Anchor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buy\u2014now")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"buy%E2%80%94now")," according to percent encoding, the dash is a unicode character ",(0,r.kt)("inlineCode",{parentName:"p"},"U+2014")," called ",(0,r.kt)("em",{parentName:"p"},"emdash"),(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("admonition",{title:"Invisible characters and dashes are hard",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Unicode contains a lot of different representations of whitespaces, dashes and other hard-to-see-the-difference characters. But if you do url encoding programatically of everything you will ensure that things work properly."),(0,r.kt)("p",{parentName:"admonition"},"If you suspect that any of these characters exist in your url then paste it in an encoding tool like ",(0,r.kt)("a",{parentName:"p",href:"https://coderstoolbox.net/string/#!encoding=url&action=encode&charset=utf_8"},"Coder\xb4s Toolbox")," and see if it will be percent encoded.")),(0,r.kt)("h2",{id:"why-so-strict"},"Why So Strict?"),(0,r.kt)("p",null,"The URLs passed in for your products will be sent to a lot of systems (ours, partners, customer devices). Some of these systems are more liberal than others in accepting unicode characters and other symbols directly (browsers are very liberal), but some are not (for example older phones). We don\xb4t want to break the experience for any customer who is using our product in order to find your products and make a purchase. Hence we require well formed URLs that will work across the broadest range of devices and systems."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL"},"What is an url?")," by Mozilla Contributors is licensed under ",(0,r.kt)("a",{parentName:"li",href:"https://creativecommons.org/licenses/by-sa/2.5/"},"CC-BY-SA 2.5"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc3986"},"RFC3986"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Internationalized_domain_name#Internationalizing_Domain_Names_in_Applications"},"Internationalizing Domain Names In Applications"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"WikiPedia: Percent Encoding"),(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},92083:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/url-2117376844f75b5ca2e26272684cf986.png"}}]);