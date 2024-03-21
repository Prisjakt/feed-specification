"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3954],{71773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(74848),a=n(28453);const c={},s="Escaping Data",i={id:"advanced/csv/escaping-data",title:"Escaping Data",description:'If you need to use commas , within the value of your offers (for example in a title or a description) then we expect the csv cell to be enclosed in quotes " according to RFC4180. For more information about our CSV support see our CSV file format article.',source:"@site/docs/advanced/csv/escaping-data.md",sourceDirName:"advanced/csv",slug:"/advanced/csv/escaping-data",permalink:"/advanced/csv/escaping-data",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/csv/escaping-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSV",permalink:"/advanced/csv/"},next:{title:"Third Party",permalink:"/third-party/"}},r={},d=[];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"escaping-data",children:"Escaping Data"}),"\n",(0,o.jsxs)(t.p,{children:["If you need to use commas ",(0,o.jsx)(t.code,{children:","})," within the value of your offers (for example in a title or a description) then we expect the csv cell to be enclosed in quotes ",(0,o.jsx)(t.code,{children:'"'})," according to ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc4180.html#section-2",children:"RFC4180"}),". For more information about our CSV support see our ",(0,o.jsx)(t.a,{href:"/advanced/csv/",children:"CSV file format article"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csv",children:'"aaa","b CRLF\nbb","ccc" CRLF\nzzz,yyy,xxx\n'})}),"\n",(0,o.jsx)(t.admonition,{title:"Don\xb4t escape using backslash",type:"caution",children:(0,o.jsxs)(t.p,{children:["We ",(0,o.jsx)(t.strong,{children:"do not"})," support dialects where escaping characters is done by putting a backslash ",(0,o.jsx)(t.code,{children:"\\"})," before the value."]})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const a={},c=o.createContext(a);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);