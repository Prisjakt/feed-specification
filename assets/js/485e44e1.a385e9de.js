"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8979],{6245:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>g,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>m});var t=n(74848),s=n(28453),r=n(11470),l=n(19365),a=n(18175),d=(n(89898),n(28758)),c=n(98995);const o={description:"The `shipping` attribute is used to set cost, time and methods of delivery. Please note, that `shipping` is **required** for all products sold on French market."},g="shipping",h={id:"fields/offer/shipping",title:"shipping",description:"The `shipping` attribute is used to set cost, time and methods of delivery. Please note, that `shipping` is **required** for all products sold on French market.",source:"@site/docs/fields/offer/shipping.md",sourceDirName:"fields/offer",slug:"/fields/offer/shipping",permalink:"/fields/offer/shipping",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/shipping.md",tags:[],version:"current",frontMatter:{description:"The `shipping` attribute is used to set cost, time and methods of delivery. Please note, that `shipping` is **required** for all products sold on French market."},sidebar:"tutorialSidebar",previous:{title:"sale_price_effective_date",permalink:"/fields/offer/sale_price_effective_date"},next:{title:"shipping_height",permalink:"/fields/offer/shipping_height"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"shipping",children:"shipping"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"shipping"})," attribute is used to set cost, time and methods of delivery. Please note, that ",(0,t.jsx)(i.code,{children:"shipping"})," is ",(0,t.jsx)(i.strong,{children:"required"})," for all products sold on French market."]}),"\n",(0,t.jsx)(i.h3,{id:"effects-when-used",children:"Effects When Used"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This information will be visible for the users in offer listing."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-fields",children:"Related Fields"}),"\n",(0,t.jsx)(i.mermaid,{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nshipping -- might be determined by  --- shipping_length\n  click shipping_length "/fields/offer/shipping_length" "shipping_length" _blank\nshipping -- might be determined by  --- shipping_height\n  click shipping_height "/fields/offer/shipping_height" "shipping_height" _blank\nshipping -- might be determined by  --- shipping_weight\n  click shipping_weight "/fields/offer/shipping_weight" "shipping_weight" _blank\nshipping -- might be determined by  --- shipping_width\n  click shipping_width "/fields/offer/shipping_width" "shipping_width" _blank\nshipping -- might be determined by  --- shipping_label\n  click shipping_label "/fields/offer/shipping_label" "shipping_label" _blank\n\n  click shipping "/fields/offer/shipping" "shipping" _blank\n  style shipping fill:#4cb3d4'}),"\n",(0,t.jsx)(i.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Submit complete shipping information"}),"\n",(0,t.jsx)(i.li,{children:"Handling time and transit time should be specified in days."}),"\n",(0,t.jsx)(i.li,{children:"Overestimate if you can't provide accurate shipping cost"}),"\n",(0,t.jsx)(i.li,{children:"Submit shipping cost including VAT, use local currency"}),"\n",(0,t.jsx)(i.li,{children:"If you provide information about handling or transit time then min_handling_time should be lesser or equal to max_handling_time and min_transit_time should be lesser or equal to max_transit_time"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(i.h3,{id:"do",children:"Do"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Keep shipping information as precise as possible. Add multiple shipping attributes if shipping cost or time varies for different country, region or service."}),"\n",(0,t.jsxs)(i.li,{children:["If any of ",(0,t.jsx)(i.code,{children:"min_handling_time"}),", ",(0,t.jsx)(i.code,{children:"max_handling_time"}),", ",(0,t.jsx)(i.code,{children:"min_transit_time"}),", ",(0,t.jsx)(i.code,{children:"max_transit_time"})," is present then all those fields must be present for the current shipping item."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"dont",children:"Don\xb4t"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Don't provide comma or point as separator for both thousands and fractional part of the shipping price, i.e. we don't support ",(0,t.jsx)(i.code,{children:"1,000,00 SEK"})," and ",(0,t.jsx)(i.code,{children:"1.000.00 SEK"})," formats"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-values",children:"Example Values"}),"\n",(0,t.jsxs)(i.p,{children:["Here are examples of how a valid ",(0,t.jsx)(i.em,{children:"shipping"})," value  should look like in XML and CSV (with header) respectively."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsxs)(l.A,{value:"valid_xml",label:"XML",default:!0,children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>25.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>2</g:max_handling_time>\n  <g:min_transit_time>1</g:min_transit_time>\n  <g:max_transit_time>3</g:max_transit_time>\n</g:shipping>\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid XML examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>25.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>2</g:max_handling_time>\n  <g:min_transit_time>1</g:min_transit_time>\n  <g:max_transit_time>3</g:max_transit_time>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>New York</g:region>\n  <g:service>Home Delivery</g:service>\n  <g:price>5 SEK</g:price>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>London</g:region>\n  <g:service>Standard</g:service>\n  <g:price>0 GBP</g:price>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>25.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>2</g:max_handling_time>\n  <g:min_transit_time>1</g:min_transit_time>\n  <g:max_transit_time>3</g:max_transit_time>\n</g:shipping>\n<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>POST</g:service>\n  <g:price>5.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>5</g:max_handling_time>\n  <g:min_transit_time>1</g:min_transit_time>\n  <g:max_transit_time>3</g:max_transit_time>\n</g:shipping>\n<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>45.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>8</g:max_handling_time>\n  <g:min_transit_time>3</g:min_transit_time>\n  <g:max_transit_time>10</g:max_transit_time>\n</g:shipping>\n"})})]})]})]}),(0,t.jsxs)(l.A,{value:"valid_csv",label:"CSV",children:[(0,t.jsx)(i.admonition,{title:"Valid Value",type:"tip",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time:max_transit_time)\nSE:Sk\xe5ne:Express:25.00 SEK:1:2:1:3\n"})})}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to show more valid CSV examples"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time:max_transit_time)\nSE:Sk\xe5ne:Express:25.00 SEK:1:2:1:3\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price)\nSE:New York:Home Delivery:5 SEK\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price)\nSE:London:Standard:0 GBP\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:'shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time:max_transit_time)\n"SE:Sk\xe5ne:Express:25.00 SEK:1:2:1:3,SE:Sk\xe5ne:POST:5.00 SEK:1:5:1:3,SE:Sk\xe5ne:Express:45.00 SEK:1:8:3:10"\n'})})]})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsxs)(i.p,{children:["Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,t.jsx)(i.a,{href:"#validation-rules",children:"validation rules"})," to understand the cause."]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsxs)(l.A,{value:"invalid_xml",label:"XML",default:!0,children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country></g:country>\n  <g:region>New York</g:region>\n  <g:service>Express</g:service>\n  <g:price>5 SEK</g:price>\n  <g:min_handling_time>-1</g:min_handling_time>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>New York</g:region>\n  <g:service>Express</g:service>\n  <g:price></g:price>\n  <g:min_handling_time>-1</g:min_handling_time>\n</g:shipping>\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_shipping_time_missing_values",title:"validation_shipping_time_missing_values"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>5.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>5.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>2</g:max_handling_time>\n</g:shipping>\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<g:shipping>\n  <g:country>SE</g:country>\n  <g:region>Sk\xe5ne</g:region>\n  <g:service>Express</g:service>\n  <g:price>5.00 SEK</g:price>\n  <g:min_handling_time>1</g:min_handling_time>\n  <g:max_handling_time>2</g:max_handling_time>\n  <g:min_transit_time>1</g:min_transit_time>\n</g:shipping>\n"})})]})]}),(0,t.jsxs)(l.A,{value:"invalid_csv",label:"CSV",children:[(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_missing_value",title:"validation_missing_value"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time)\n:New York:Express:5 SEK:-1\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time)\nSE:New York:Express::-1\n"})})]}),(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(a.A,{id:"validation_shipping_time_missing_values",title:"validation_shipping_time_missing_values"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time)\nSE:Sk\xe5ne:Express:5.00 SEK:1\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time:max_handling_time)\nSE:Sk\xe5ne:Express:5.00 SEK:1:2\n"})}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time)\nSE:Sk\xe5ne:Express:5.00 SEK:1:2:1\n"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:(0,t.jsx)(i.strong,{children:"Property"})}),(0,t.jsx)(i.th,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"Value"})}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:"Description"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Data Type"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"List[Nested]"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Closest data type in code"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Nested"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"True"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Defines if this field consists of one or more sub-fields"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Case Sensitive"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"False"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If small or large letters matter for this field"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"True"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If you can supply multiple items of this field (it\xb4s a list)"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"Repeatable limit"}),(0,t.jsx)(i.td,{style:{textAlign:"center"},children:(0,t.jsx)(i.strong,{children:"100"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"If a list, this specifices the max number of items"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.A,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://support.google.com/merchants/answer/6324484",children:"Google Merchant Specification"})}),"\n"]})]})}function x(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},89898:(e,i,n)=>{n.d(i,{Ay:()=>l});var t=n(74848),s=n(28453);function r(e){return(0,t.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,t.jsx)("code",{children:e.name})})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},98995:(e,i,n)=>{n.d(i,{Ay:()=>l});var t=n(74848),s=n(28453);function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"Optional Field",type:"info",children:(0,t.jsxs)(i.p,{children:["This field is ",(0,t.jsx)(i.a,{href:"/terminology/required-vs-optional",children:"optional"}),", but omitting it may leave out functionality on Prisjakt for your offers"]})})}function l(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},19365:(e,i,n)=>{n.d(i,{A:()=>l});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function l(e){let{children:i,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:i})}},11470:(e,i,n)=>{n.d(i,{A:()=>b});var t=n(96540),s=n(34164),r=n(23104),l=n(56347),a=n(205),d=n(57485),c=n(31682),o=n(89466);function g(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return g(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:s}}=e;return{value:i,label:n,attributes:t,default:s}}))}(n);return function(e){const i=(0,c.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function p(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function m(e){let{queryString:i=!1,groupId:n}=e;const s=(0,l.W6)(),r=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,d.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(s.location.search);i.set(r,e),s.replace({...s.location,search:i.toString()})}),[r,s])]}function u(e){const{defaultValue:i,queryString:n=!1,groupId:s}=e,r=h(e),[l,d]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:r}))),[c,g]=m({queryString:n,groupId:s}),[u,x]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[s,r]=(0,o.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),_=(()=>{const e=c??u;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{_&&d(_)}),[_]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),g(e),x(e)}),[g,x,r]),tabValues:r}}var x=n(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:i,block:n,selectedValue:t,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),o=e=>{const i=e.currentTarget,n=d.indexOf(i),s=a[n].value;s!==t&&(c(i),l(s))},g=e=>{let i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;i=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;i=d[n]??d[d.length-1];break}}i?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},i),children:a.map((e=>{let{value:i,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>d.push(e),onKeyDown:g,onClick:o,...r,className:(0,s.A)("tabs__item",_.tabItem,r?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function j(e){let{lazy:i,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==s})))})}function y(e){const i=u(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",_.tabList),children:[(0,f.jsx)(v,{...e,...i}),(0,f.jsx)(j,{...e,...i})]})}function b(e){const i=(0,x.A)();return(0,f.jsx)(y,{...e,children:g(e.children)},String(i))}},18175:(e,i,n)=>{n.d(i,{A:()=>s});n(96540);var t=n(74848);function s(e){let{id:i,title:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{id:i,class:"anchor",children:n}),(0,t.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}},28758:(e,i,n)=>{n.d(i,{A:()=>l});n(96540);var t=n(21523),s=n(74848);const r=(e,i)=>(0,s.jsx)(s.Fragment,{children:i&&i.length>0&&(0,s.jsx)(s.Fragment,{children:i.map(((i,n)=>(0,s.jsxs)("div",{class:"cl-item",children:[(0,s.jsx)("span",{class:`cl-pill cl-${e.toLowerCase()}`,children:e})," ",(0,s.jsx)(t.o,{class:"cl-item-content",children:i})]})))})});function l(e){let{versionHistory:i,dateOnly:n}=e;return(0,s.jsx)(s.Fragment,{children:i&&i.map(((e,i)=>(0,s.jsxs)("div",{id:e.semanticVersion,style:{marginTop:"1em"},children:[n&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)]}),!n&&(0,s.jsxs)("h3",{children:[" \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)]}),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)]})))})}}}]);