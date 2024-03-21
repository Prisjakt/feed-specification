"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1096],{61436:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>x,toc:()=>f});var t=l(74848),a=l(28453),n=l(11470),s=l(19365),r=l(18175),d=(l(89898),l(21523)),o=l(28758),c=l(73054);const u={description:"Use the availability attribute to display your stock status."},h="availability",x={id:"feeds/offer/fields/availability",title:"availability",description:"Use the availability attribute to display your stock status.",source:"@site/docs/feeds/offer/fields/availability.md",sourceDirName:"feeds/offer/fields",slug:"/feeds/offer/fields/availability",permalink:"/feeds/offer/fields/availability",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/offer/fields/availability.md",tags:[],version:"current",frontMatter:{description:"Use the availability attribute to display your stock status."},sidebar:"tutorialSidebar",previous:{title:"age_group",permalink:"/feeds/offer/fields/age_group"},next:{title:"availability_date",permalink:"/feeds/offer/fields/availability_date"}},p={},f=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Allowed Enum Values",id:"allowed-enum-values",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function v(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{Details:l}=i;return l||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"availability",children:"availability"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Use the availability attribute to display your stock status."}),"\n",(0,t.jsx)(i.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Enables us to indicate if a customer can order the product"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,t.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\navailability -- requires for some values  --- availability_date\n  click availability_date "/feeds/offer/fields/availability_date" "availability_date" _blank\n\n  click availability "/feeds/offer/fields/availability" "availability" _blank\n  style availability fill:#4cb3d4'}),"\n",(0,t.jsx)(i.h2,{id:"allowed-enum-values",children:"Allowed Enum Values"}),"\n",(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(i.p,{children:"download"})})})}),(0,t.jsx)("dd",{children:(0,t.jsx)(d.o,{children:(0,t.jsx)(i.p,{children:"When the product is made digitally available, eg. game or software downloads"})})}),(0,t.jsx)("dt",{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(i.p,{children:"in_stock"})})})}),(0,t.jsx)("dd",{children:(0,t.jsx)(d.o,{children:(0,t.jsx)(i.p,{children:"You're currently accepting orders for this product and can fulfill the purchase request directly."})})}),(0,t.jsx)("dt",{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(i.p,{children:"out_of_stock"})})})}),(0,t.jsx)("dd",{children:(0,t.jsx)(d.o,{children:(0,t.jsx)(i.p,{children:"You're not currently accepting orders for this product."})})}),(0,t.jsx)("dt",{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(i.p,{children:"preorder"})})})}),(0,t.jsx)("dd",{children:(0,t.jsx)(d.o,{children:(0,t.jsxs)(i.p,{children:["You're currently taking orders for this product, but it's not yet been released for sale. You're required to provide the availability date ",(0,t.jsx)(i.a,{href:"/feeds/offer/fields/availability_date",children:(0,t.jsx)(i.code,{children:"availability_date"})})," attribute to indicate the day that the product becomes available for delivery."]})})}),(0,t.jsx)("dt",{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,t.jsx)(i.p,{children:"backorder"})})})}),(0,t.jsx)("dd",{children:(0,t.jsx)(d.o,{children:(0,t.jsxs)(i.p,{children:["The product is not available at the moment, but you're accepting orders and it'll be shipped as soon as it becomes available again. This status can be combined with the availability date ",(0,t.jsx)(i.a,{href:"/feeds/offer/fields/availability_date",children:(0,t.jsx)(i.code,{children:"availability_date"})})," attribute to indicate the day that the product becomes available for delivery."]})})})]}),"\n",(0,t.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Value must be one of the allowed enum values"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Use up-to-date stock info"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Don't use out of stock when the shop is temporarily down"}),"\n",(0,t.jsx)(i.li,{children:"Don't use out of stock when you want to remove the product from the listing"}),"\n",(0,t.jsx)(i.li,{children:"Don't use out of stock for products that are discontinued"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,t.jsx)(i.em,{children:"availability"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(n.A,{children:[(0,t.jsxs)(s.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>in_stock</g:availability>\n"})})}),(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>in_stock</g:availability>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>out_of_stock</g:availability>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>download</g:availability>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>preorder</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>backorder</g:availability>\n<g:availability_date>2021-03-21</g:availability_date>\n"})})]})]})]}),(0,t.jsxs)(s.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability\nin_stock\n"})})}),(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability\nin_stock\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability\nout_of_stock\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability\ndownload\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability,availability_date\npreorder,2021-03-21\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability,availability_date\nbackorder,2021-03-21\n"})})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(n.A,{children:[(0,t.jsxs)(s.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_invalid_enum",title:"validation_invalid_enum"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability>unknown</g:availability>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(r.A,{id:"validation_missing_value",title:"validation_missing_value"})})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:availability></g:availability>\n"})})]})]}),(0,t.jsxs)(s.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_invalid_enum",title:"validation_invalid_enum"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"availability\nunknown\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(r.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:'availability\n""\n'})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:(0,t.jsx)(i.strong,{children:"Property"})}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Value"})}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"enum"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"0"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(o.A,{versionHistory:[{date:"2023-09-14",deprecated:["Enum value `backorder` does not require [`availability_date`](/feeds/offer/fields/availability_date) to be set anymore."]},{date:"2023-03-20",deprecated:["Enum value `download` is now deprecated and should not be used anymore. Download is a delivery option and should be specified using the [`shipping`](/feeds/offer/fields/shipping) field."]},{date:"2023-03-17",deprecated:["Enum value `pickup` has been removed and should not be used anymore. Using `pickup` value would result in validation error. Pickup is a delivery option and should be specified using the [`shipping`](/feeds/offer/fields/shipping) field."]},{changed:["Offers with value `out_of_stock` are no longer orderable. See deprecation notice below."],date:"2023-03-13",deprecated:["Value `not_available_for_purchase` should no longer be used, please use `out_of_stock` instead"]},{date:"2023-01-05",deprecated:["Enum value `pickup` is now deprecated and should not be used anymore. Pickup is a delivery option and should be specified using the [`shipping`](/feeds/offer/fields/shipping) field."]},{date:"2022-12-20",deprecated:["Previously `out_of_stock` values were still orderable, from now on `out_of_stock` will not be orderable. If you want to represent a product that is not in stock but still orderable you should use `backorder` and set [`availability_date`](/feeds/offer/fields/availability_date)"]},{added:["New enum value `backorder`, this value should be used for products that are orderable but currently not in stock."],date:"2022-12-08"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324448",children:"Google Merchant Specification"})}),"\n"]})]})}function j(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},89898:(e,i,l)=>{l.d(i,{Ay:()=>s});var t=l(74848),a=l(28453);function n(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function s(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}},73054:(e,i,l)=>{l.d(i,{Ay:()=>s});var t=l(74848),a=l(28453);function n(e){const i={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"Required Field",type:"danger",children:(0,t.jsxs)(i.p,{children:["This field is ",(0,t.jsx)(i.a,{href:"/policies/required-vs-optional",children:"required"})," and must not be omitted"]})})}function s(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(n,{...e})}):n(e)}},19365:(e,i,l)=>{l.d(i,{A:()=>s});l(96540);var t=l(34164);const a={tabItem:"tabItem_Ymn6"};var n=l(74848);function s(e){let{children:i,hidden:l,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:l,children:i})}},11470:(e,i,l)=>{l.d(i,{A:()=>_});var t=l(96540),a=l(34164),n=l(23104),s=l(56347),r=l(205),d=l(57485),o=l(31682),c=l(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:l}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return u(e).map((e=>{let{props:{value:i,label:l,attributes:t,default:a}}=e;return{value:i,label:l,attributes:t,default:a}}))}(l);return function(e){const i=(0,o.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,l])}function x(e){let{value:i,tabValues:l}=e;return l.some((e=>e.value===i))}function p(e){let{queryString:i=!1,groupId:l}=e;const a=(0,s.W6)(),n=function(e){let{queryString:i=!1,groupId:l}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:i,groupId:l});return[(0,d.aZ)(n),(0,t.useCallback)((e=>{if(!n)return;const i=new URLSearchParams(a.location.search);i.set(n,e),a.replace({...a.location,search:i.toString()})}),[n,a])]}function f(e){const{defaultValue:i,queryString:l=!1,groupId:a}=e,n=h(e),[s,d]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!x({value:i,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:n}))),[o,u]=p({queryString:l,groupId:a}),[f,v]=function(e){let{groupId:i}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(i),[a,n]=(0,c.Dv)(l);return[a,(0,t.useCallback)((e=>{l&&n.set(e)}),[l,n])]}({groupId:a}),j=(()=>{const e=o??f;return x({value:e,tabValues:n})?e:null})();(0,r.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),v(e)}),[u,v,n]),tabValues:n}}var v=l(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=l(74848);function b(e){let{className:i,block:l,selectedValue:t,selectValue:s,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),c=e=>{const i=e.currentTarget,l=d.indexOf(i),a=r[l].value;a!==t&&(o(i),s(a))},u=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;i=d[l]??d[0];break}case"ArrowLeft":{const l=d.indexOf(e.currentTarget)-1;i=d[l]??d[d.length-1];break}}i?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},i),children:r.map((e=>{let{value:i,label:l,attributes:n}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>d.push(e),onKeyDown:u,onClick:c,...n,className:(0,a.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":t===i}),children:l??i},i)}))})}function g(e){let{lazy:i,children:l,selectedValue:a}=e;const n=(Array.isArray(l)?l:[l]).filter(Boolean);if(i){const e=n.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:n.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function y(e){const i=f(e);return(0,m.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,m.jsx)(b,{...e,...i}),(0,m.jsx)(g,{...e,...i})]})}function _(e){const i=(0,v.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(i))}},18175:(e,i,l)=>{l.d(i,{A:()=>n});l(96540);var t=l(28774),a=l(74848);function n(e){let{id:i,title:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.A,{id:i}),(0,a.jsx)("a",{class:"anchor",children:l}),(0,a.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,l)=>{l.d(i,{A:()=>s});l(96540);var t=l(21523),a=l(74848);const n=(e,i)=>(0,a.jsx)(a.Fragment,{children:i&&i.length>0&&(0,a.jsx)(a.Fragment,{children:i.map(((i,l)=>(0,a.jsxs)("div",{class:"cl-item",children:[(0,a.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,a.jsx)(t.o,{class:"cl-item-content",children:i})]})))})});function s(e){let{versionHistory:i,dateOnly:l}=e;return(0,a.jsx)(a.Fragment,{children:i&&i.map(((e,i)=>(0,a.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[l&&(0,a.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!l&&(0,a.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)]})))})}}}]);