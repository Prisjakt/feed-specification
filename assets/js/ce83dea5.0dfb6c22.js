"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3679],{55779:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var r=t(74848),n=t(28453),i=t(11470),l=t(19365),s=t(18175),o=(t(89898),t(28758)),d=t(98995);const c={description:"It's strongly recommended to use this attribute if [`google_product_category`](/feeds/offer/fields/google_product_category) is not present."},u="product_type",h={id:"feeds/offer/fields/product_type",title:"product_type",description:"It's strongly recommended to use this attribute if [`google_product_category`](/feeds/offer/fields/google_product_category.md) is not present.",source:"@site/docs/feeds/offer/fields/product_type.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/product_type",permalink:"/feeds/offer/fields/product_type",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/product_type.md",tags:[],version:"current",frontMatter:{description:"It's strongly recommended to use this attribute if [`google_product_category`](/feeds/offer/fields/google_product_category.md) is not present."},sidebar:"tutorialSidebar",previous:{title:"product_detail",permalink:"/feeds/offer/fields/product_detail"},next:{title:"promotion_id",permalink:"/feeds/offer/fields/promotion_id"}},p={},f=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function g(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...a.components},{Details:t}=e;return t||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"product_type",children:"product_type"}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["It's strongly recommended to use this attribute if ",(0,r.jsx)(e.a,{href:"/feeds/offer/fields/google_product_category",children:(0,r.jsx)(e.code,{children:"google_product_category"})})," is not present."]}),"\n",(0,r.jsx)(e.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"This field is used for product categorization."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,r.jsx)(e.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nproduct_type -- can be used instead  --- google_product_category\n  click google_product_category "/feeds/offer/fields/google_product_category" "google_product_category" _blank\n\n  click product_type "/feeds/offer/fields/product_type" "product_type" _blank\n  style product_type fill:#4cb3d4'}),"\n",(0,r.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Length must be between ",(0,r.jsx)(e.code,{children:"1-750"})," characters"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(e.h3,{id:"do",children:"Do"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Include the complete category hierarchy, such as ",(0,r.jsx)(e.code,{children:"Home & Garden > Furniture > Living Room"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["To list multiple product_type entries, separate them with a comma. For instance: ",(0,r.jsx)(e.code,{children:"Home & Garden > Furniture > Living Room, Home & Garden > Popular Living Room Furniture"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'Refrain from including categories such as "Apple," "Sale," or "Black Friday 2023."'}),"\n",(0,r.jsxs)(e.li,{children:["If using a CSV file, do not use comma ",(0,r.jsx)(e.code,{children:","})," within a single product_type entry. They will split the entry. For instance, ",(0,r.jsx)(e.code,{children:"Home, Garden > Furniture > Living Room"})," will become two separate entries: ",(0,r.jsx)(e.code,{children:"Home"})," and ",(0,r.jsx)(e.code,{children:"Garden > Furniture > Living Room"}),"."]}),"\n",(0,r.jsx)(e.li,{children:"When using XML, always use a distinct <product_type> tag for each category instead of combining them within one tag."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"example-values",children:"Example Values"}),"\n",(0,r.jsxs)(e.p,{children:["Here are examples of how a valid ",(0,r.jsx)(e.em,{children:"product_type"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,r.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:product_type><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:product_type>\n"})})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:product_type><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:product_type>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:product_type><![CDATA[type 1]]></g:product_type>\n<g:product_type><![CDATA[type 2]]></g:product_type>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:product_type><![CDATA[computer_accessories]]></g:product_type>\n"})})]})]})]}),(0,r.jsxs)(l.A,{value:"valid_csv",label:"CSV",children:[(0,r.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"product_type\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n"})})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"product_type\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:'product_type\n"type 1,type 2"\n'})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"product_type\ncomputer_accessories\n"})})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,r.jsxs)(e.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.jsx)(e.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"invalid_xml",label:"XML",default:!0,children:(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{children:(0,r.jsx)(e.strong,{children:(0,r.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:product_type><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 751 characters value)]]></g:product_type>\n"})})]})}),(0,r.jsx)(l.A,{value:"invalid_csv",label:"CSV",children:(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"product_type\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 751 characters value)\n"})})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"right"},children:(0,r.jsx)(e.strong,{children:"Property"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Value"})}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Data Type"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"string"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Nested"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"False"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"False"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"True"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"100"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(o.A,{versionHistory:[{added:["Change length limit for product_type to 750 characters"],date:"2023-08-21"},{added:["Remove requirement on [`product_type`](/feeds/offer/fields/product_type) if [`google_product_category`](/feeds/offer/fields/google_product_category) is not present"],date:"2023-02-07"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,r.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://support.google.com/merchants/answer/6324406",children:"Google Merchant Specification"})}),"\n"]})]})}function x(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(g,{...a})}):g(a)}},89898:(a,e,t)=>{t.d(e,{Ay:()=>l});var r=t(74848),n=t(28453);function i(a){return(0,r.jsx)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name,children:(0,r.jsx)("code",{children:a.name})})}function l(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(i,{...a})}):i(a)}},98995:(a,e,t)=>{t.d(e,{Ay:()=>l});var r=t(74848),n=t(28453);function i(a){const e={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...a.components};return(0,r.jsx)(e.admonition,{title:"Optional Field",type:"info",children:(0,r.jsxs)(e.p,{children:["This field is ",(0,r.jsx)(e.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function l(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(i,{...a})}):i(a)}},19365:(a,e,t)=>{t.d(e,{A:()=>l});t(96540);var r=t(34164);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(a){let{children:e,hidden:t,className:l}=a;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:t,children:e})}},11470:(a,e,t)=>{t.d(e,{A:()=>_});var r=t(96540),n=t(34164),i=t(23104),l=t(56347),s=t(205),o=t(57485),d=t(31682),c=t(89466);function u(a){return r.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,r.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(a){const{values:e,children:t}=a;return(0,r.useMemo)((()=>{const a=e??function(a){return u(a).map((a=>{let{props:{value:e,label:t,attributes:r,default:n}}=a;return{value:e,label:t,attributes:r,default:n}}))}(t);return function(a){const e=(0,d.X)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function p(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function f(a){let{queryString:e=!1,groupId:t}=a;const n=(0,l.W6)(),i=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((a=>{if(!i)return;const e=new URLSearchParams(n.location.search);e.set(i,a),n.replace({...n.location,search:e.toString()})}),[i,n])]}function g(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,i=h(a),[l,o]=(0,r.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find((a=>a.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:i}))),[d,u]=f({queryString:t,groupId:n}),[g,x]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,i]=(0,c.Dv)(t);return[n,(0,r.useCallback)((a=>{t&&i.set(a)}),[t,i])]}({groupId:n}),m=(()=>{const a=d??g;return p({value:a,tabValues:i})?a:null})();(0,s.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((a=>{if(!p({value:a,tabValues:i}))throw new Error(`Can't select invalid tab value=${a}`);o(a),u(a),x(a)}),[u,x,i]),tabValues:i}}var x=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function y(a){let{className:e,block:t,selectedValue:r,selectValue:l,tabValues:s}=a;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=a=>{const e=a.currentTarget,t=o.indexOf(e),n=s[t].value;n!==r&&(d(e),l(n))},u=a=>{let e=null;switch(a.key){case"Enter":c(a);break;case"ArrowRight":{const t=o.indexOf(a.currentTarget)+1;e=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(a.currentTarget)-1;e=o[t]??o[o.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},e),children:s.map((a=>{let{value:e,label:t,attributes:i}=a;return(0,j.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:a=>o.push(a),onKeyDown:u,onClick:c,...i,className:(0,n.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===e}),children:t??e},e)}))})}function v(a){let{lazy:e,children:t,selectedValue:n}=a;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=i.find((a=>a.props.value===n));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((a,e)=>(0,r.cloneElement)(a,{key:e,hidden:a.props.value!==n})))})}function b(a){const e=g(a);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,j.jsx)(y,{...a,...e}),(0,j.jsx)(v,{...a,...e})]})}function _(a){const e=(0,x.A)();return(0,j.jsx)(b,{...a,children:u(a.children)},String(e))}},18175:(a,e,t)=>{t.d(e,{A:()=>i});t(96540);var r=t(28774),n=t(74848);function i(a){let{id:e,title:t}=a;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{id:e}),(0,n.jsx)("a",{class:"anchor",children:t}),(0,n.jsx)("a",{class:"hash-link",href:"#"+e,title:"Direct link"})]})}},28758:(a,e,t)=>{t.d(e,{A:()=>l});t(96540);var r=t(21523),n=t(74848);const i=(a,e)=>(0,n.jsx)(n.Fragment,{children:e&&e.length>0&&(0,n.jsx)(n.Fragment,{children:e.map(((e,t)=>(0,n.jsxs)("div",{class:"cl-item",children:[(0,n.jsx)("span",{class:`cl-pill cl-${a.toLowerCase()}`,children:a})," ",(0,n.jsx)(r.o,{class:"cl-item-content",children:e})]})))})});function l(a){let{versionHistory:e,dateOnly:t}=a;return(0,n.jsx)(n.Fragment,{children:e&&e.map(((a,e)=>(0,n.jsxs)("div",{id:a.semanticVersion,style:{marginTop:"1em"},children:[t&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(a.date).toISOString().slice(0,10)]}),!t&&(0,n.jsxs)("h3",{children:[" \ud83d\udcc5 [",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)]}),i("Added",a.added),i("Changed ",a.changed),i("Deprecated ",a.deprecated),i("Removed ",a.removed),i("Fixed",a.fixed),i("Security",a.security)]})))})}}}]);