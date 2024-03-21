"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4937],{23547:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var t=n(74848),a=n(28453),l=n(11470),s=n(19365),r=n(18175),d=(n(89898),n(28758)),c=n(73054);const o={description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."},h="id",u={id:"feeds/product/fields/id",title:"id",description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.",source:"@site/docs/feeds/product/fields/id.md",sourceDirName:"feeds/product/fields",slug:"/feeds/product/fields/id",permalink:"/feeds/product/fields/id",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/fields/id.md",tags:[],version:"current",frontMatter:{description:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."},sidebar:"tutorialSidebar",previous:{title:"gtin",permalink:"/feeds/product/fields/gtin"},next:{title:"image_link",permalink:"/feeds/product/fields/image_link"}},x={},g=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function j(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"id",children:"id"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique."}),"\n",(0,t.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Length must be between ",(0,t.jsx)(i.code,{children:"1-36"})]}),"\n",(0,t.jsx)(i.li,{children:"Must be unique"}),"\n",(0,t.jsxs)(i.li,{children:["Only ",(0,t.jsx)(i.strong,{children:"ascii"})," characters"]}),"\n",(0,t.jsx)(i.li,{children:"Trailing whitespace characters are not allowed"}),"\n",(0,t.jsxs)(i.li,{children:["Disallowed characters are ",(0,t.jsx)(i.code,{children:"!"})," ",(0,t.jsx)(i.code,{children:"+"})," ",(0,t.jsx)(i.code,{children:"@"})," ",(0,t.jsx)(i.code,{children:"#"})," ",(0,t.jsx)(i.code,{children:"$"})," ",(0,t.jsx)(i.code,{children:"%"})," ",(0,t.jsx)(i.code,{children:"^"})," ",(0,t.jsx)(i.code,{children:"&"})," ",(0,t.jsx)(i.code,{children:"*"})," ",(0,t.jsx)(i.code,{children:"<"})," ",(0,t.jsx)(i.code,{children:">"})," ",(0,t.jsx)(i.code,{children:";"})," ",(0,t.jsx)(i.code,{children:":"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Use SKUs as ids"}),"\n",(0,t.jsx)(i.li,{children:"You can follow Google format but in some rare cases we might reject some offers due to stricter validation."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Re-use, if re-used, your product might end up indexed to the wrong Prisjakt product"}),"\n",(0,t.jsx)(i.li,{children:"Change over time, if changed, the product will need to be indexed again"}),"\n",(0,t.jsx)(i.li,{children:'Don\'t add whitespace characters (" ", "\\n", "t") at the beginning or the end of the id field'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,t.jsx)(i.em,{children:"id"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[213888]]></g:id>\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[213888]]></g:id>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[aBCd1123]]></g:id>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[09az]]></g:id>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[a b./)(]]></g:id>\n"})})]})]})]}),(0,t.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n213888\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n213888\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\naBCd1123\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n09az\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\na b./)(\n"})})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_id_blacklisted_ascii_character",title:"validation_id_blacklisted_ascii_character"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[!+@#$%^&*]]></g:id>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]]></g:id>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_invalid_value",title:"validation_invalid_value"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[ ]]></g:id>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_missing_value",title:"validation_missing_value"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id></g:id>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_non_ascii_character",title:"validation_non_ascii_character"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[\u0105\u015b\u03c0\u0153\u0119\xa9]]></g:id>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_trailing_whitespace",title:"validation_trailing_whitespace"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[a ]]></g:id>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:id><![CDATA[ a]]></g:id>\n"})})]})]}),(0,t.jsxs)(s.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_id_blacklisted_ascii_character",title:"validation_id_blacklisted_ascii_character"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n!+@#$%^&*\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_invalid_value",title:"validation_invalid_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:'id\n""\n'})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_non_ascii_character",title:"validation_non_ascii_character"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n\u0105\u015b\u03c0\u0153\u0119\xa9\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_trailing_whitespace",title:"validation_trailing_whitespace"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\na\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"id\n a\n"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:(0,t.jsx)(i.strong,{children:"Property"})}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Value"})}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"string"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"True"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"0"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2024-03-30"}],dateOnly:!0}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://support.google.com/manufacturers/answer/7495188",children:"Google Manufacturer Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},89898:(e,i,n)=>{n.d(i,{Ay:()=>s});var t=n(74848),a=n(28453);function l(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function s(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},73054:(e,i,n)=>{n.d(i,{Ay:()=>s});var t=n(74848),a=n(28453);function l(e){const i={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"Required Field",type:"danger",children:(0,t.jsxs)(i.p,{children:["This field is ",(0,t.jsx)(i.a,{href:"/policies/required-vs-optional",children:"required"})," and must not be omitted"]})})}function s(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},19365:(e,i,n)=>{n.d(i,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:i,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:i})}},11470:(e,i,n)=>{n.d(i,{A:()=>A});var t=n(96540),a=n(34164),l=n(23104),s=n(56347),r=n(205),d=n(57485),c=n(31682),o=n(89466);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:a}}=e;return{value:i,label:n,attributes:t,default:a}}))}(n);return function(e){const i=(0,c.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function x(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function g(e){let{queryString:i=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,d.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const i=new URLSearchParams(a.location.search);i.set(l,e),a.replace({...a.location,search:i.toString()})}),[l,a])]}function j(e){const{defaultValue:i,queryString:n=!1,groupId:a}=e,l=u(e),[s,d]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!x({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:l}))),[c,h]=g({queryString:n,groupId:a}),[j,p]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[a,l]=(0,o.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=c??j;return x({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{m&&d(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function f(e){let{className:i,block:n,selectedValue:t,selectValue:s,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),o=e=>{const i=e.currentTarget,n=d.indexOf(i),a=r[n].value;a!==t&&(c(i),s(a))},h=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;i=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;i=d[n]??d[d.length-1];break}}i?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},i),children:r.map((e=>{let{value:i,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>d.push(e),onKeyDown:h,onClick:o,...l,className:(0,a.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function b(e){let{lazy:i,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function y(e){const i=j(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(f,{...e,...i}),(0,v.jsx)(b,{...e,...i})]})}function A(e){const i=(0,p.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(i))}},18175:(e,i,n)=>{n.d(i,{A:()=>l});n(96540);var t=n(28774),a=n(74848);function l(e){let{id:i,title:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.A,{id:i}),(0,a.jsx)("a",{class:"anchor",children:n}),(0,a.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,n)=>{n.d(i,{A:()=>s});n(96540);var t=n(21523),a=n(74848);const l=(e,i)=>(0,a.jsx)(a.Fragment,{children:i&&i.length>0&&(0,a.jsx)(a.Fragment,{children:i.map(((i,n)=>(0,a.jsxs)("div",{class:"cl-item",children:[(0,a.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,a.jsx)(t.o,{class:"cl-item-content",children:i})]})))})});function s(e){let{versionHistory:i,dateOnly:n}=e;return(0,a.jsx)(a.Fragment,{children:i&&i.map(((e,i)=>(0,a.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[n&&(0,a.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!n&&(0,a.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)]})))})}}}]);