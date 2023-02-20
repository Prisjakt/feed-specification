"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4742],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),d=a(67392),c=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,d]=g({queryString:a,groupId:r}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??u;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,l]),tabValues:l}}var h=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=d[a].value;r!==i&&(u(t),s(r))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},83581:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(e){let{id:t,title:a}=e;return r.createElement(r.Fragment,null,r.createElement("a",{id:t,class:"anchor"},a),r.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},12017:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(58538);const l=(e,t)=>r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(r.Fragment,null,t.map(((t,a)=>r.createElement("div",{class:"cl-item"},r.createElement("span",{class:`cl-pill cl-${e.toLowerCase()}`},e)," ",r.createElement(n.D,{class:"cl-item-content"},t))))));function o(e){let{versionHistory:t,dateOnly:a}=e;return r.createElement(r.Fragment,null,t&&t.map(((e,t)=>r.createElement("div",{id:e.semanticVersion,style:{marginTop:"1em"}},a&&r.createElement("h3",null," \ud83d\udcc5 ",new Date(e.date).toISOString().slice(0,10)),!a&&r.createElement("h3",null," \ud83d\udcc5 [",e.semanticVersion,"] - ",new Date(e.date).toISOString().slice(0,10)),l("Added",e.added),l("Changed ",e.changed),l("Deprecated ",e.deprecated),l("Removed ",e.removed),l("Fixed",e.fixed),l("Security",e.security)))))}},31330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162),i=a(83581),s=(a(74588),a(12017)),d=a(78835);const c={description:"Describe your product's color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing."},u="color",m={unversionedId:"fields/color",id:"fields/color",title:"color",description:"Describe your product's color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing.",source:"@site/docs/fields/color.md",sourceDirName:"fields",slug:"/fields/color",permalink:"/fields/color",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/color.md",tags:[],version:"current",frontMatter:{description:"Describe your product's color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing."},sidebar:"tutorialSidebar",previous:{title:"brand",permalink:"/fields/brand"},next:{title:"condition",permalink:"/fields/condition"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],k={toc:g};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"color"),(0,n.kt)(d.ZP,{mdxType:"OptionalField"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Describe your product's color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing."),(0,n.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Up to three color strings separated by a forward slash is allowed")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("h3",{id:"do"},"Do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the same color as in your product page")),(0,n.kt)("h3",{id:"dont"},"Don\xb4t"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't use numbers and HTML color coding"),(0,n.kt)("li",{parentName:"ul"},"Don't use phrases describing other product properties like design, pattern, size etc")),(0,n.kt)("h2",{id:"example-values"},"Example Values"),(0,n.kt)("p",null,"Here are examples of how a valid ",(0,n.kt)("em",{parentName:"p"},"color")," value  should look like in XML and CSV (with header) respectively."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>red</g:color>\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid XML examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>red</g:color>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>green</g:color>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>blue</g:color>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>red/green/blue</g:color>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>RED/GREEN/BLUE</g:color>\n"))))),(0,n.kt)(o.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Valid Value",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nred\n"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to show more valid CSV examples"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nred\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\ngreen\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nblue\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nred/green/blue\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nRED/GREEN/BLUE\n")))))),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(i.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)</g:color>\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(i.Z,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<g:color>black/mint/blue/white</g:color>\n")))),(0,n.kt)(o.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(i.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)(i.Z,{id:"validation_too_many_repetitions",title:"validation_too_many_repetitions",mdxType:"Anchor"})," "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"color\nblack/mint/blue/white\n"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},(0,n.kt)("strong",{parentName:"th"},"Property")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Value")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"False")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"True")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)(s.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324487"},"Google Merchant Specification"))))}h.isMDXComponent=!0},74588:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{href:`/fields/${a.name}`,alt:a.name},(0,n.kt)("code",null,a.name)))}o.isMDXComponent=!0},78835:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Optional Field",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This field is ",(0,n.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}o.isMDXComponent=!0}}]);