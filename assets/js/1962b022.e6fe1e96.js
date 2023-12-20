"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9247],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),n=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var i=a(87462),n=a(67294),r=a(86010),l=a(12466),s=a(16550),o=a(91980),d=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function _(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=u(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[o,d]=f({queryString:a,groupId:i}),[p,_]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),v=(()=>{const e=o??p;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),_(e)}),[d,_,r]),tabValues:r}}var v=a(72389);const k="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),i=d[a].value;i!==s&&(p(t),o(i))},m=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},l,{className:(0,r.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:i}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function b(e){const t=_(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",k)},n.createElement(h,(0,i.Z)({},e,t)),n.createElement(N,(0,i.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return n.createElement(b,(0,i.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294);function n(e){let{id:t,title:a}=e;return i.createElement(i.Fragment,null,i.createElement("a",{id:t,class:"anchor"},a),i.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),n=a(58538);const r=(e,t)=>i.createElement(i.Fragment,null,t&&t.length>0&&i.createElement(i.Fragment,null,t.map(((t,a)=>i.createElement("div",{class:"cl-item"},i.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",i.createElement(n.D,{class:"cl-item-content"},t))))));function l(e){let{versionHistory:t,dateOnly:a}=e;return i.createElement(i.Fragment,null,t&&t.map(((e,t)=>i.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&i.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&i.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),r("Added",e.added),r("Changed ",e.changed),r("Deprecated ",e.deprecated),r("Removed ",e.removed),r("Fixed",e.fixed),r("Security",e.security)))))}},70837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var i=a(87462),n=(a(67294),a(3905)),r=a(74866),l=a(85162),s=a(83581),o=(a(74588),a(12017)),d=a(78835);const c={description:"Datetime range indicating when [`sale_price`](/fields/offer/sale_price) is active. If you don't submit this attribute [`sale_price`](/fields/offer/sale_price) always applies."},p="sale_price_effective_date",u={unversionedId:"fields/offer/sale_price_effective_date",id:"fields/offer/sale_price_effective_date",title:"sale_price_effective_date",description:"Datetime range indicating when [`sale_price`](/fields/offer/sale_price.md) is active. If you don't submit this attribute [`sale_price`](/fields/offer/sale_price.md) always applies.",source:"@site/docs/fields/offer/sale_price_effective_date.md",sourceDirName:"fields/offer",slug:"/fields/offer/sale_price_effective_date",permalink:"/fields/offer/sale_price_effective_date",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/sale_price_effective_date.md",tags:[],version:"current",frontMatter:{description:"Datetime range indicating when [`sale_price`](/fields/offer/sale_price.md) is active. If you don't submit this attribute [`sale_price`](/fields/offer/sale_price.md) always applies."},sidebar:"tutorialSidebar",previous:{title:"sale_price",permalink:"/fields/offer/sale_price"},next:{title:"shipping",permalink:"/fields/offer/shipping"}},m={},f=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],_={toc:f};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sale_price_effective_date"},"sale_price_effective_date"),(0,n.kt)(d.ZP,{mdxType:"OptionalField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Datetime range indicating when ",(0,n.kt)("a",{parentName:"p",href:"/fields/offer/sale_price"},(0,n.kt)("inlineCode",{parentName:"a"},"sale_price"))," is active. If you don't submit this attribute ",(0,n.kt)("a",{parentName:"p",href:"/fields/offer/sale_price"},(0,n.kt)("inlineCode",{parentName:"a"},"sale_price"))," always applies."),(0,n.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This will cause sale_price to be applied only within interval specified by start and end datetime")),(0,n.kt)("h2",{id:"related-fields"},"Related Fields"),(0,n.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nsale_price_effective_date -- used by  --- sale_price\n  click sale_price "/fields/offer/sale_price" "sale_price" _blank\n\n  click sale_price_effective_date "/fields/offer/sale_price_effective_date" "sale_price_effective_date" _blank\n  style sale_price_effective_date fill:#4cb3d4'}),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Standard: ISO 8601"),(0,n.kt)("li",{parentName:"ul"},"Up to 51 characters"),(0,n.kt)("li",{parentName:"ul"},'Two dates separated with "/" (ISO 8601)'),(0,n.kt)("li",{parentName:"ul"},"Start and end must be within one year from current date")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("h3",{id:"do"},"Do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start datetime shall be earlier than stop datetime")),(0,n.kt)("h3",{id:"dont"},"Don\xb4t"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you don't include time, start time default to 12 AM CET (midnight) of start day and stop time is set to 23:59:59 of stop day"),(0,n.kt)("li",{parentName:"ul"},"Don't set start or end datetime further than one year in the future. This will cause warning in feed validation. Moreover sale_price_effective_date and sale_price won't be used in product listing.")),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"sale_price_effective_date")," value  should look like in XML and CSV (with header) respectively."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date></g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2016-02-24/2016-02-26</g:sale_price_effective_date>\n<g:sale_price>11.50 SEK</g:sale_price>\n"))))),(0,n.kt)(l.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00,11.50 SEK\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid CSV examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n2016-02-24T13:00:00-08:00/2016-02-29T15:30:00+02:00,11.50 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n,11.50 SEK\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n2016-02-24/2016-02-26,11.50 SEK\n")))))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_date_out_of_range",title:"validation_date_out_of_range",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2050-02-05/2050-02-05</g:sale_price_effective_date>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2018/2016-02-29</g:sale_price_effective_date>\n<g:sale_price></g:sale_price>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:sale_price_effective_date>2016-02-29T15:30-0800</g:sale_price_effective_date>\n<g:sale_price>11.50 GBP</g:sale_price>\n")))),(0,n.kt)(l.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_date_out_of_range",title:"validation_date_out_of_range",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date\n2050-02-05/2050-02-05\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n2018/2016-02-29,\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(s.Z,{id:"validation_missing_value",title:"validation_missing_value",mdxType:"Anchor"})),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"sale_price_effective_date,sale_price\n2016-02-29T15:30-0800,11.50 GBP\n"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(o.Z,{versionHistory:[{added:["Start and end are limited to one year from current datetime"],date:"2023-04-06"},{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324460"},"Google Merchant Specification"))))}v.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:`/fields/${a.dir}/${a.name}`,alt:a.name},(0,n.kt)("code",null,a.name)))}l.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Optional Field",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}l.isMDXComponent=!0}}]);