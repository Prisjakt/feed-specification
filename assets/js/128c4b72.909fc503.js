"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3016],{70635:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>g,default:()=>p,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var t=i(74848),l=i(28453),s=i(11470),r=i(19365),a=i(18175),d=(i(89898),i(28758)),c=i(98995);const o={description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},g="gtin",h={id:"feeds/offer/fields/gtin",title:"gtin",description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy.",source:"@site/docs/feeds/offer/fields/gtin.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/gtin",permalink:"/feeds/offer/fields/gtin",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/gtin.md",tags:[],version:"current",frontMatter:{description:"Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy."},sidebar:"tutorialSidebar",previous:{title:"google_product_category",permalink:"/feeds/offer/fields/google_product_category"},next:{title:"id",permalink:"/feeds/offer/fields/id"}},u={},x=[...c.RM,{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"gtin",children:"gtin"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Use the GTIN attribute to submit a ",(0,t.jsx)(n.a,{href:"https://www.gs1.org/standards/id-keys/gtin",children:"Global Trade Item Number (GTIN) | GS1"}),".\nA GTIN uniquely identifies your product.\nIncluding this will help indexing your products faster on Pricespy."]}),"\n",(0,t.jsx)(n.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use only one attribute of this type per product"}),"\n",(0,t.jsxs)(n.li,{children:["Length should be one of ",(0,t.jsx)(n.code,{children:"0, 8, 12, 13, or 14"})," digits (UPC, EAN, JAN, or ISBN)"]}),"\n",(0,t.jsxs)(n.li,{children:["Make sure that the check digit is present and correct using the ",(0,t.jsx)(n.a,{href:"https://www.gs1.org/check-digit-calculator",children:"GS1 Check digit calculator"})]}),"\n",(0,t.jsxs)(n.li,{children:["Don't submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: ",(0,t.jsx)(n.code,{children:"02, 04, or 2 (when gtin is 13-digit number)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Don't submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: ",(0,t.jsx)(n.code,{children:"05, 98\u201399 (when gtin is 13-digit number)"})]}),"\n",(0,t.jsx)(n.li,{children:"GTINs with restricted prefixes from above are valid when gtin is 12 or 14-digit number"}),"\n",(0,t.jsx)(n.li,{children:"Must be an number"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(n.p,{children:["Here are examples of how a valid ",(0,t.jsx)(n.em,{children:"gtin"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(r.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(n.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>90311017</g:gtin>\n"})})}),(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>90311017</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>036282818705</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>8806088269696</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>9031-1017</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>0362 8281-8705</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>8806-08826 9696</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"})})]})]})]}),(0,t.jsxs)(r.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(n.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n90311017\n"})})}),(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n90311017\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n036282818705\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n8806088269696\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n10614141000415\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n9031-1017\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n0362 8281-8705\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n8806-08826 9696\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n10614141000415\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:'gtin\n"10614141000415,90311017"\n'})})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(n.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(n.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(r.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.A,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>026282818705</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>046282818705</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>03628281</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>97795145</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>8801088269696</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>996282818705</g:gtin>\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>03628281</g:gtin>\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.A,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>9900114145837</g:gtin>\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>881111088111169696</g:gtin>\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.A,{id:"validation_not_integer",title:"validation_not_integer"})})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<g:gtin>88aaa08869696</g:gtin>\n"})})]})]}),(0,t.jsxs)(r.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_gtin_invalid_check_digit",title:"validation_gtin_invalid_check_digit"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n026282818705\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n046282818705\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n03628281\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n97795145\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n8801088269696\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n996282818705\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n03628281\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_gtin_prefix_not_allowed",title:"validation_gtin_prefix_not_allowed"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n9900114145837\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n881111088111169696\n"})})]}),(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_not_integer",title:"validation_not_integer"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csv",children:"gtin\n88aaa08869696\n"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"right"},children:(0,t.jsx)(n.strong,{children:"Property"})}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"Value"})}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"False"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"False"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"True"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.strong,{children:"10"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://support.google.com/merchants/answer/6324461",children:"Google Merchant Specification"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},89898:(e,n,i)=>{i.d(n,{Ay:()=>r});var t=i(74848),l=i(28453);function s(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},98995:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>s});var t=i(74848),l=i(28453);const s=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(n.p,{children:["This field is ",(0,t.jsx)(n.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(34164);const l={tabItem:"tabItem_Ymn6"};var s=i(74848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>N});var t=i(96540),l=i(34164),s=i(23104),r=i(56347),a=i(205),d=i(57485),c=i(31682),o=i(89466);function g(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return g(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function u(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const l=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,d.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,s=h(e),[r,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,g]=x({queryString:i,groupId:l}),[j,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,o.Dv)(i);return[l,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:l}),m=(()=>{const e=c??j;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),g(e),p(e)}),[g,p,s]),tabValues:s}}var p=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function v(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const n=e.currentTarget,i=d.indexOf(n),l=a[i].value;l!==t&&(c(n),r(l))},g=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const i=d.indexOf(e.currentTarget)+1;n=d[i]??d[0];break}case"ArrowLeft":{const i=d.indexOf(e.currentTarget)-1;n=d[i]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:g,onClick:o,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:l}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function N(e){const n=(0,p.A)();return(0,f.jsx)(y,{...e,children:g(e.children)},String(n))}},18175:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(28774),l=i(74848);function s(e){let{id:n,title:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{id:n}),(0,l.jsx)("a",{class:"anchor",children:i}),(0,l.jsx)("a",{class:"hash-link",href:"#"+n,title:"Direct link"})]})}},28758:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(99744),l=i(74848);const s=(e,n)=>(0,l.jsx)(l.Fragment,{children:n&&n.length>0&&(0,l.jsx)(l.Fragment,{children:n.map(((n,i)=>(0,l.jsxs)("div",{class:"cl-item",children:[(0,l.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,l.jsx)(t.o,{class:"cl-item-content",children:n})]})))})});function r(e){let{versionHistory:n,dateOnly:i}=e;return(0,l.jsx)(l.Fragment,{children:n&&n.map(((e,n)=>(0,l.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[i&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!i&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),s("Added",e.added),s("Changed ",e.changed),s("Deprecated ",e.deprecated),s("Removed ",e.removed),s("Fixed",e.fixed),s("Security",e.security)]})))})}}}]);