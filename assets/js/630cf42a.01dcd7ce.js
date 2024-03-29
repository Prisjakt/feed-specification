"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7232],{7789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(4848),i=t(8453),a=t(1470),s=t(9365);const l={sidebar_position:1},o="File Encoding",c={id:"advanced/file-encoding",title:"File Encoding",description:"In order for computers to understand each other and to be able to represent the large amount of different languages characters and symbols, encodings are needed. Encodings are a way of defining a set where numbers correspond to a certain symbol.",source:"@site/docs/advanced/file-encoding.md",sourceDirName:"advanced",slug:"/advanced/file-encoding",permalink:"/advanced/file-encoding",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/advanced/file-encoding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/advanced/"},next:{title:"Url Encoding",permalink:"/advanced/url-encode"}},d={},u=[{value:"Supported File Encodings",id:"supported-file-encodings",level:2},{value:"UTF8",id:"utf8",level:2},{value:"In Practice",id:"in-practice",level:2},{value:"Using a Text Editor",id:"using-a-text-editor",level:3},{value:"Using Programming",id:"using-programming",level:3},{value:"Why Not More Encodings?",id:"why-not-more-encodings",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"file-encoding",children:"File Encoding"}),"\n",(0,r.jsx)(n.p,{children:"In order for computers to understand each other and to be able to represent the large amount of different languages characters and symbols, encodings are needed. Encodings are a way of defining a set where numbers correspond to a certain symbol."}),"\n",(0,r.jsx)(n.h2,{id:"supported-file-encodings",children:"Supported File Encodings"}),"\n",(0,r.jsxs)(n.p,{children:["We support the following encodings (and only these, see ",(0,r.jsx)(n.a,{href:"#why-not-more-encodings",children:"below"}),")"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/UTF-8",children:"utf-8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.python.org/3/library/codecs.html#module-encodings.utf_8_sig",children:"utf-8-sig (or utf-8 with BOM)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://sv.wikipedia.org/wiki/ASCII",children:"ascii"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://sv.wikipedia.org/wiki/Windows-1252",children:"windows-1252"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://sv.wikipedia.org/wiki/ISO/IEC_8859-1",children:"iso-8859-1 (also called latin1)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"utf8",children:"UTF8"}),"\n",(0,r.jsxs)(n.p,{children:["We ",(0,r.jsx)(n.strong,{children:"strongly"})," recommend you to stick to UTF-8 as this is the most common used character encoding for the web and it is also the recommended encoding in the ",(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8",children:"HTML 5 Specification"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Learn about UTF 8",type:"note",children:[(0,r.jsx)(n.p,{children:"Here is a good explanation from YouTuber Alex that explains UTF-8 encoding."}),(0,r.jsx)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/ut74oHojxqo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),"\n",(0,r.jsx)(n.h2,{id:"in-practice",children:"In Practice"}),"\n",(0,r.jsx)(n.p,{children:"You can use multiple common tools or programming languages in order to create UTF-8 encoded files."}),"\n",(0,r.jsx)(n.h3,{id:"using-a-text-editor",children:"Using a Text Editor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open your file in a good text editor like ",(0,r.jsx)(n.a,{href:"https://sublimetext.com",children:"Sublime Text"})]}),"\n",(0,r.jsx)(n.li,{children:"Click\xa0File\xa0in the top-left corner"}),"\n",(0,r.jsxs)(n.li,{children:["Click\xa0",(0,r.jsx)(n.code,{children:"Save with Encoding..."})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"UTF-8"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-programming",children:"Using Programming"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"utf8_python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\nfile_path.write_text(content, "utf-8")\n'})})}),(0,r.jsx)(s.A,{value:"utf8_csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"var utf8WithoutBom = new System.Text.UTF8Encoding(false);\nFile.WriteAllText(_fileName, content, utf8WithoutBom);\n"})})}),(0,r.jsx)(s.A,{value:"utf8_java",label:"Java",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"try (\n    FileOutputStream fos = new FileOutputStream(file);\n    OutputStreamWriter osw = new OutputStreamWriter(fos, StandardCharsets.UTF_8);\n    BufferedWriter writer = new BufferedWriter(osw)) {\n      writer.append(line);\n}\n"})})}),(0,r.jsx)(s.A,{value:"utf8_rust",label:"Rust",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use std::fs::File;\nlet mut file = File::create(file_name)?;\nfile.write_all(b"content")?;\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"why-not-more-encodings",children:"Why Not More Encodings?"}),"\n",(0,r.jsxs)(n.p,{children:["There are multiple other encodings not listed above. We ",(0,r.jsx)(n.strong,{children:"do not"})," support sending us files using other encodings than the list above. This is a decision taken weighing in complexity vs benefit vs error proneness."]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc3629",children:"RFC3629"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/UTF-8",children:"Wikipedia"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8",children:"HTML 5 Specification"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),i=t(4164),a=t(3104),s=t(6347),l=t(205),o=t(7485),c=t(1682),d=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),b=(()=>{const e=c??m;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);