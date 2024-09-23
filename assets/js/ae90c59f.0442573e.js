"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6815],{24:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4848),a=s(8453);const i={},r="Special Characters in XML",c={id:"advanced/xml/xml-escaping",title:"Special Characters in XML",description:"It is possible to escape special characters in XML (see this answer and this answer) using number notations such as this example:",source:"@site/docs/advanced/xml/xml-escaping.md",sourceDirName:"advanced/xml",slug:"/advanced/xml/xml-escaping",permalink:"/advanced/xml/xml-escaping",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/xml/xml-escaping.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CDATA in XML Files",permalink:"/advanced/xml/cdata"},next:{title:"CSV",permalink:"/advanced/csv/"}},o={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"special-characters-in-xml",children:"Special Characters in XML"})}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to escape special characters in ",(0,t.jsx)(n.a,{href:"/advanced/xml/",children:"XML"})," (see ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/1091953",children:"this answer"})," and ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/46637835",children:"this answer"}),") using number notations such as this example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Joe's Caf\xe9 & Bar \u266b\n"})}),"\n",(0,t.jsx)(n.p,{children:"escaped using number notation:"}),"\n",(0,t.jsx)(n.admonition,{title:"TIP: Use an encoding tool",type:"info",children:(0,t.jsxs)(n.p,{children:["In order to test conversion and encoding you can use one of the many available online tools, one such example is ",(0,t.jsx)(n.a,{href:"https://coderstoolbox.net/string/#!encoding=xml&action=encode&charset=utf_8",children:"Coder\xb4s Toolbox"})," for encoding URL values."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Joe&#39;s Caf&#233; &amp; Bar &#9835;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["But in the case of product feeds, ",(0,t.jsx)(n.strong,{children:"you should never need to do this"})," as long as your XML file is ",(0,t.jsx)(n.a,{href:"/advanced/file-encoding",children:"UTF-8 encoded"})," and that ",(0,t.jsx)(n.strong,{children:"all fields containing strings"})," are ",(0,t.jsx)(n.a,{href:"/advanced/xml/cdata",children:"wrapped in CDATA tags"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Please note that for URLs we are more strict and require them to be ",(0,t.jsx)(n.a,{href:"/advanced/url-encode",children:"url encoded"})," properly according to RFC specification."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);