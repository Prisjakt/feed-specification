"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[2859],{85162:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(67294),l=t(86010);const n="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,r),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>_});var i=t(87462),l=t(67294),n=t(86010),r=t(12466),o=t(16550),d=t(91980),s=t(67392),m=t(50012);function u(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:i,default:l}}=e;return{value:a,label:t,attributes:i,default:l}}))}function p(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function c(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const i=(0,o.k6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,d._X)(n),(0,l.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(i.location.search);a.set(n,e),i.replace({...i.location,search:a.toString()})}),[n,i])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,n=p(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:n}))),[d,s]=v({queryString:t,groupId:i}),[u,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,n]=(0,m.Nk)(t);return[i,(0,l.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:i}),k=(()=>{const e=d??u;return c({value:e,tabValues:n})?e:null})();(0,l.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,n]),tabValues:n}}var k=t(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:a,block:t,selectedValue:o,selectValue:d,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),p=e=>{const a=e.currentTarget,t=m.indexOf(a),i=s[t].value;i!==o&&(u(a),d(i))},c=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}null==(a=t)||a.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>m.push(e),onKeyDown:c,onClick:p},r,{className:(0,n.Z)("tabs__item",b,null==r?void 0:r.className,{"tabs__item--active":o===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:i}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==i}))))}function N(e){const a=f(e);return l.createElement("div",{className:(0,n.Z)("tabs-container",g)},l.createElement(y,(0,i.Z)({},e,a)),l.createElement(h,(0,i.Z)({},e,a)))}function _(e){const a=(0,k.Z)();return l.createElement(N,(0,i.Z)({key:String(a)},e))}},83581:(e,a,t)=>{t.d(a,{Z:()=>l});var i=t(67294);function l(e){let{id:a,title:t}=e;return i.createElement(i.Fragment,null,i.createElement("a",{id:a,class:"anchor"},t),i.createElement("a",{class:"hash-link",href:"#"+a,title:"Direct link"}))}},12017:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(67294),l=t(58538);const n=(e,a)=>i.createElement(i.Fragment,null,a&&a.length>0&&i.createElement(i.Fragment,null,a.map(((a,t)=>i.createElement("div",{class:"cl-item"},i.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",i.createElement(l.D,{class:"cl-item-content"},a))))));function r(e){let{versionHistory:a,dateOnly:t}=e;return i.createElement(i.Fragment,null,a&&a.map(((e,a)=>i.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},t&&i.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!t&&i.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),n("Added",e.added),n("Changed ",e.changed),n("Deprecated ",e.deprecated),n("Removed ",e.removed),n("Fixed",e.fixed),n("Security",e.security)))))}},45409:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>v});var i=t(87462),l=(t(67294),t(3905)),n=t(74866),r=t(85162),o=t(83581),d=(t(74588),t(12017)),s=t(78835);const m={description:"This field is used together with [`availability`](/fields/offer/availability) for `preorder` or `backorder` values."},u="availability_date",p={unversionedId:"fields/offer/availability_date",id:"fields/offer/availability_date",title:"availability_date",description:"This field is used together with [`availability`](/fields/offer/availability.md) for `preorder` or `backorder` values.",source:"@site/docs/fields/offer/availability_date.md",sourceDirName:"fields/offer",slug:"/fields/offer/availability_date",permalink:"/fields/offer/availability_date",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/availability_date.md",tags:[],version:"current",frontMatter:{description:"This field is used together with [`availability`](/fields/offer/availability.md) for `preorder` or `backorder` values."},sidebar:"tutorialSidebar",previous:{title:"availability",permalink:"/fields/offer/availability"},next:{title:"brand",permalink:"/fields/offer/brand"}},c={},v=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Effects When Omitted",id:"effects-when-omitted",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],f={toc:v};function k(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"availability_date"},"availability_date"),(0,l.kt)(s.ZP,{mdxType:"OptionalField"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This field is used together with ",(0,l.kt)("a",{parentName:"p",href:"/fields/offer/availability"},(0,l.kt)("inlineCode",{parentName:"a"},"availability"))," for ",(0,l.kt)("inlineCode",{parentName:"p"},"preorder")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"backorder")," values."),(0,l.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We will display a label alongside with availability indicator that says when the product is available")),(0,l.kt)("h3",{id:"effects-when-omitted"},"Effects When Omitted"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No information is available for customer regarding when a ",(0,l.kt)("inlineCode",{parentName:"li"},"preorder")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"backorder")," offer is available")),(0,l.kt)("h2",{id:"related-fields"},"Related Fields"),(0,l.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\navailability_date -- used by  --- availability\n  click availability "/fields/offer/availability" "availability" _blank\n\n  click availability_date "/fields/offer/availability_date" "availability_date" _blank\n  style availability_date fill:#4cb3d4'}),(0,l.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Value must parse as valid ISO 8601, see examples")),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("h3",{id:"do"},"Do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Include the time portion of the date (if missing 12:00 AM CET will be set)")),(0,l.kt)("h2",{id:"example-values"},"Example Values"),(0,l.kt)("p",null,"Here are examples of how a valid ",(0,l.kt)("em",{parentName:"p"},"availability_date")," value  should look like in XML and CSV (with header) respectively."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n<g:availability>preorder</g:availability>\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid XML examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>\n<g:availability>preorder</g:availability>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>preorder</g:availability>\n"))))),(0,l.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Valid Value",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid CSV examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-12-22T03:12:58.019077+00:00,preorder\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,preorder\n")))))),(0,l.kt)("h2",{id:"error-codes"},"Error Codes"),(0,l.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021/12/22/12:23:00</g:availability_date>\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>today</g:availability_date>\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>in_stock</g:availability>\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>out_of_stock</g:availability>\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>download</g:availability>\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date>2021-03-21</g:availability_date>\n<g:availability>not_available_for_purchase</g:availability>\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_missing_field",title:"validation_missing_field",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:availability_date></g:availability_date>\n<g:availability>preorder</g:availability>\n")))),(0,l.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_format",title:"validation_invalid_format",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\n2021/12/22/12:23:00\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date\ntoday\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_invalid_value",title:"validation_invalid_value",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,in_stock\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,out_of_stock\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,download\n")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n2021-03-21,not_available_for_purchase\n"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)(o.Z,{id:"validation_missing_field",title:"validation_missing_field",mdxType:"Anchor"})),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"availability_date,availability\n,preorder\n"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"th"},"Property")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},"Value")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)(d.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324470"},"Google Merchant Specification")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"Wikipedia on ISO 8601"))))}k.isMDXComponent=!0},74588:(e,a,t)=>{t.d(a,{ZP:()=>r});var i=t(87462),l=(t(67294),t(3905));const n={toc:[]};function r(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},n,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("a",{href:`/fields/${t.dir}/${t.name}`,alt:t.name},(0,l.kt)("code",null,t.name)))}r.isMDXComponent=!0},78835:(e,a,t)=>{t.d(a,{ZP:()=>r});var i=t(87462),l=(t(67294),t(3905));const n={toc:[]};function r(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},n,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Optional Field",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This field is ",(0,l.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);