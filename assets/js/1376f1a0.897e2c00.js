"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[3584],{4378:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var r=t(4848),l=t(8453),o=t(1470),n=t(9365),s=t(8175),i=(t(1503),t(8758)),c=t(6218);const d={description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead."},u="google_product_category",g={id:"feeds/offer/fields/google_product_category",title:"google_product_category",description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead.",source:"@site/docs/feeds/offer/fields/google_product_category.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/google_product_category",permalink:"/feeds/offer/fields/google_product_category",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/google_product_category.md",tags:[],version:"current",frontMatter:{description:"This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit [`product_type`](/feeds/offer/fields/product_type.md) instead."},sidebar:"tutorialSidebar",previous:{title:"gender",permalink:"/feeds/offer/fields/gender"},next:{title:"gtin",permalink:"/feeds/offer/fields/gtin"}},h={},p=[...c.RM,{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function x(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...a.components},{Details:t}=e;return t||function(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"google_product_category",children:"google_product_category"})}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["This attribute is used to help us place products in relevant categories. It should contain full category path from Google Taxonomy or respective category id. If you don't know or have Google product category, submit ",(0,r.jsx)(e.a,{href:"/feeds/offer/fields/product_type",children:(0,r.jsx)(e.code,{children:"product_type"})})," instead."]}),"\n",(0,r.jsx)(e.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"This information helps us to make the products discoverable and searchable for the users"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,r.jsx)(e.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\ngoogle_product_category -- can be used instead  --- product_type\n  click product_type "/feeds/offer/fields/product_type" "product_type" _blank\n\n  click google_product_category "/feeds/offer/fields/google_product_category" "google_product_category" _blank\n  style google_product_category fill:#4cb3d4'}),"\n",(0,r.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"If id is used it must match an existing Google Product Category id (see references below)"}),"\n",(0,r.jsx)(e.li,{children:"If category path is used, it must match Google Product Category path exactly (see references below)"}),"\n",(0,r.jsx)(e.li,{children:"Use only one attribute of this type per product"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(e.h3,{id:"do",children:"Do"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Prefer using id's instead of strings if possible"}),"\n",(0,r.jsx)(e.li,{children:"Use the most nested category possible"}),"\n",(0,r.jsx)(e.li,{children:"Avoid using root categories"}),"\n",(0,r.jsx)(e.li,{children:"Use full category path or respective category id from the list (see references)"}),"\n",(0,r.jsx)(e.li,{children:"Wrap in a CDATA element if using xml"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"example-values",children:"Example Values"}),"\n",(0,r.jsxs)(e.p,{children:["Here are examples of how a valid ",(0,r.jsx)(e.em,{children:"google_product_category"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(n.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,r.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1144</g:google_product_category>\n"})})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1144</g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1</g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>1157</g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies]]></g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Dyr og tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til hunde]]></g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:google_product_category>\n"})})]})]})]}),(0,r.jsxs)(n.A,{value:"valid_csv",label:"CSV",children:[(0,r.jsx)(e.admonition,{title:"Valid Value",type:"tip",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1144\n"})})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1144\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\n1157\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\nAnimals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\nDyr og tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til k\xe6ledyr > Tilbeh\xf8r til hunde\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\nSporting Goods > Athletics > Figure Skating & Hockey > Ice Skates\n"})})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,r.jsxs)(e.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,r.jsx)(e.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(n.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{children:(0,r.jsx)(e.strong,{children:(0,r.jsx)(s.A,{id:"validation_category_not_found",title:"validation_category_not_found"})})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>144</g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[Divers sports > Water polo]]></g:google_product_category>\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category><![CDATA[toys & puzzle]]></g:google_product_category>\n"})})]}),(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{children:(0,r.jsx)(e.strong,{children:(0,r.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"})})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:"<g:google_product_category>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)</g:google_product_category>\n"})})]})]}),(0,r.jsxs)(n.A,{value:"invalid_csv",label:"CSV",children:[(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(s.A,{id:"validation_category_not_found",title:"validation_category_not_found"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\n144\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\nDivers sports > Water polo\n"})}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\ntoys & puzzle\n"})})]}),(0,r.jsxs)(e.admonition,{type:"danger",children:[(0,r.jsx)(s.A,{id:"validation_invalid_length",title:"validation_invalid_length"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-csv",children:"google_product_category\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)\n"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"right"},children:(0,r.jsx)(e.strong,{children:"Property"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Value"})}),(0,r.jsx)(e.th,{style:{textAlign:"left"},children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Data Type"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"string"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Nested"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"False"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"False"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"False"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"0"})}),(0,r.jsx)(e.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsx)(i.A,{versionHistory:[{added:["Remove requirement on [`google_product_category`](/feeds/offer/fields/google_product_category.md) if [`product_type`](/feeds/offer/fields/product_type.md) is not present"],date:"2023-02-07"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,r.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://support.google.com/merchants/answer/6324436",children:"Google Merchant Specification"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt",children:"Google Taxonomy With Ids (en-US)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.sv-SE.txt",children:"Google Taxonomy With Ids (sv-SE)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.google.com/basepages/producttype/taxonomy-with-ids.no-NO.txt",children:"Google Taxonomy With Ids (no-NO)"})}),"\n"]})]})}function f(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(x,{...a})}):x(a)}},1503:(a,e,t)=>{t.d(e,{Ay:()=>n});var r=t(4848),l=t(8453);function o(a){return(0,r.jsx)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name,children:(0,r.jsx)("code",{children:a.name})})}function n(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(o,{...a})}):o(a)}},6218:(a,e,t)=>{t.d(e,{Ay:()=>s,RM:()=>o});var r=t(4848),l=t(8453);const o=[];function n(a){const e={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...a.components};return(0,r.jsx)(e.admonition,{title:"Optional Field",type:"info",children:(0,r.jsxs)(e.p,{children:["This field is ",(0,r.jsx)(e.a,{href:"/policies/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function s(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(n,{...a})}):n(a)}},9365:(a,e,t)=>{t.d(e,{A:()=>n});t(6540);var r=t(4164);const l={tabItem:"tabItem_Ymn6"};var o=t(4848);function n(a){let{children:e,hidden:t,className:n}=a;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,n),hidden:t,children:e})}},1470:(a,e,t)=>{t.d(e,{A:()=>b});var r=t(6540),l=t(4164),o=t(3104),n=t(6347),s=t(205),i=t(7485),c=t(1682),d=t(679);function u(a){return r.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,r.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(a){const{values:e,children:t}=a;return(0,r.useMemo)((()=>{const a=e??function(a){return u(a).map((a=>{let{props:{value:e,label:t,attributes:r,default:l}}=a;return{value:e,label:t,attributes:r,default:l}}))}(t);return function(a){const e=(0,c.XI)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function h(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function p(a){let{queryString:e=!1,groupId:t}=a;const l=(0,n.W6)(),o=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((a=>{if(!o)return;const e=new URLSearchParams(l.location.search);e.set(o,a),l.replace({...l.location,search:e.toString()})}),[o,l])]}function x(a){const{defaultValue:e,queryString:t=!1,groupId:l}=a,o=g(a),[n,i]=(0,r.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find((a=>a.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:o}))),[c,u]=p({queryString:t,groupId:l}),[x,f]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[l,o]=(0,d.Dv)(t);return[l,(0,r.useCallback)((a=>{t&&o.set(a)}),[t,o])]}({groupId:l}),m=(()=>{const a=c??x;return h({value:a,tabValues:o})?a:null})();(0,s.A)((()=>{m&&i(m)}),[m]);return{selectedValue:n,selectValue:(0,r.useCallback)((a=>{if(!h({value:a,tabValues:o}))throw new Error(`Can't select invalid tab value=${a}`);i(a),u(a),f(a)}),[u,f,o]),tabValues:o}}var f=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function j(a){let{className:e,block:t,selectedValue:r,selectValue:n,tabValues:s}=a;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=a=>{const e=a.currentTarget,t=i.indexOf(e),l=s[t].value;l!==r&&(c(e),n(l))},u=a=>{let e=null;switch(a.key){case"Enter":d(a);break;case"ArrowRight":{const t=i.indexOf(a.currentTarget)+1;e=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(a.currentTarget)-1;e=i[t]??i[i.length-1];break}}e?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:s.map((a=>{let{value:e,label:t,attributes:o}=a;return(0,y.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:a=>i.push(a),onKeyDown:u,onClick:d,...o,className:(0,l.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===e}),children:t??e},e)}))})}function v(a){let{lazy:e,children:t,selectedValue:o}=a;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=n.find((a=>a.props.value===o));return a?(0,r.cloneElement)(a,{className:(0,l.A)("margin-top--md",a.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:n.map(((a,e)=>(0,r.cloneElement)(a,{key:e,hidden:a.props.value!==o})))})}function _(a){const e=x(a);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,y.jsx)(j,{...e,...a}),(0,y.jsx)(v,{...e,...a})]})}function b(a){const e=(0,f.A)();return(0,y.jsx)(_,{...a,children:u(a.children)},String(e))}},8175:(a,e,t)=>{t.d(e,{A:()=>o});t(6540);var r=t(8774),l=t(4848);function o(a){let{id:e,title:t}=a;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{id:e}),(0,l.jsx)("a",{class:"anchor",children:t}),(0,l.jsx)("a",{class:"hash-link",href:"#"+e,title:"Direct link"})]})}},8758:(a,e,t)=>{t.d(e,{A:()=>n});t(6540);var r=t(6888),l=t(4848);const o=(a,e)=>(0,l.jsx)(l.Fragment,{children:e&&e.length>0&&(0,l.jsx)(l.Fragment,{children:e.map(((e,t)=>(0,l.jsxs)("div",{class:"cl-item",children:[(0,l.jsx)("span",{class:`cl-pill cl-${a.toLowerCase()}`,children:a})," ",(0,l.jsx)(r.o,{class:"cl-item-content",children:e})]})))})});function n(a){let{versionHistory:e,dateOnly:t}=a;return(0,l.jsx)(l.Fragment,{children:e&&e.map(((a,e)=>(0,l.jsxs)("div",{id:a.semanticVersion,style:{marginTop:"1em"},children:[t&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(a.date).toISOString().slice(0,10)]}),!t&&(0,l.jsxs)("h3",{children:[" \ud83d\udcc5 [",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)]}),o("Added",a.added),o("Changed ",a.changed),o("Deprecated ",a.deprecated),o("Removed ",a.removed),o("Fixed",a.fixed),o("Security",a.security)]})))})}}}]);