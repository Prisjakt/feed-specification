"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1377],{2290:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);const r={sidebar_position:1},a="CSV",c={id:"advanced/csv/index",title:"CSV",description:"While CSV is lightweight and easy to use, XML is more well defined and have better support for handling complex data encodings and strctures. We recommend using XML over CSV.",source:"@site/docs/advanced/csv/index.md",sourceDirName:"advanced/csv",slug:"/advanced/csv/",permalink:"/advanced/csv/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/csv/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Special Characters in XML",permalink:"/advanced/xml/xml-escaping"},next:{title:"Escaping Data",permalink:"/advanced/csv/escaping-data"}},d={},l=[{value:"Format",id:"format",level:2},{value:"Escaping",id:"escaping",level:2},{value:"Encoding sub-attributes and lists in CSV files",id:"encoding-sub-attributes-and-lists-in-csv-files",level:2},{value:"References",id:"references",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"csv",children:"CSV"}),"\n",(0,t.jsx)(n.admonition,{title:"Recommendation",type:"caution",children:(0,t.jsxs)(n.p,{children:["While CSV is lightweight and easy to use, ",(0,t.jsx)(n.a,{href:"/advanced/xml/",children:"XML"})," is more well defined and have better support for handling complex data encodings and strctures. We recommend using XML over CSV."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Comma-separated_values",children:"CSV"})," stands for ",(0,t.jsx)(n.strong,{children:"c"}),"omma ",(0,t.jsx)(n.strong,{children:"s"}),"eparated ",(0,t.jsx)(n.strong,{children:"v"}),"alues. It is a simple format very similar to having data organized in a spreadsheet. The CSV format is not fully standarized even if a proposed ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4180.html",children:"RFC4180"})," exists and different software often interprets the structures differently."]}),"\n",(0,t.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,t.jsxs)(n.p,{children:["We expect the following structure (following  ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4180.html",children:"RFC4180"}),") on CSV files, for a full example please see the ",(0,t.jsx)(n.a,{href:"/feeds/offer/formats/prisjakt_xml/#full",children:"CSV tab on our full example"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"First row is a header row"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"column_header_one,column_header_two,column_header_three\nvalue_1,value_2,value_3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Columns are separated by commas ",(0,t.jsx)(n.code,{children:","})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Rows are separated by newlines ",(0,t.jsx)(n.code,{children:"\\n"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Cells that contains newlines or commas ",(0,t.jsx)(n.strong,{children:"must"})," be quoted using double qoutes ",(0,t.jsx)(n.code,{children:'"'})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:'aaa,"my title, which contains a comma",ccc\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by preceding it with another double quote."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:'"aaa","b""bb","ccc"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"escaping",children:"Escaping"}),"\n",(0,t.jsxs)(n.p,{children:["Escaping values in CSV can be tricky, see ",(0,t.jsx)(n.a,{href:"/advanced/csv/escaping-data",children:"our section about escaping"})," for more details"]}),"\n",(0,t.jsx)(n.h2,{id:"encoding-sub-attributes-and-lists-in-csv-files",children:"Encoding sub-attributes and lists in CSV files"}),"\n",(0,t.jsx)(n.p,{children:"While the XML format is well suited for sub-attributes (child elements) and lists (repeated elements), the CSV format is not so."}),"\n",(0,t.jsxs)(n.p,{children:["In the CSV format, sub-attributes are added to an attribute as a list inside parentheses. The list of sub-attributes is separated by colon (",(0,t.jsx)(n.code,{children:":"}),"). For example, to specify sub-attributes to the shipping attribute:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"othercol1,shipping(country:service:price),othercol2\notherval1,SE:standard:10.99 SEK,otherval2\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the CSV format, lists are simply defined as repeated columns with the same name. Here are two shipping services:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"othercol1,shipping(country:service:price),shipping(country:service:price),othercol2\notherval1,SE:standard:10.99 SEK,NO:standard:10.99 SEK,otherval2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc4180.html",children:"RFC4180"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);