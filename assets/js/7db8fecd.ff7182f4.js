"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[489],{85162:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294),o=t(86010);const r="tabItem_Ymn6";function i(a){let{children:e,hidden:t,className:i}=a;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},e)}},74866:(a,e,t)=>{t.d(e,{Z:()=>b});var n=t(87462),o=t(67294),r=t(86010),i=t(12466),l=t(16550),p=t(91980),m=t(67392),s=t(50012);function d(a){return function(a){return o.Children.map(a,(a=>{if((0,o.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:o}}=a;return{value:e,label:t,attributes:n,default:o}}))}function u(a){const{values:e,children:t}=a;return(0,o.useMemo)((()=>{const a=e??d(t);return function(a){const e=(0,m.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function c(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function k(a){let{queryString:e=!1,groupId:t}=a;const n=(0,l.k6)(),r=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,p._X)(r),(0,o.useCallback)((a=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,a),n.replace({...n.location,search:e.toString()})}),[r,n])]}function g(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,r=u(a),[i,l]=(0,o.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[p,m]=k({queryString:t,groupId:n}),[d,g]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,r]=(0,s.Nk)(t);return[n,(0,o.useCallback)((a=>{t&&r.set(a)}),[t,r])]}({groupId:n}),_=(()=>{const a=p??d;return c({value:a,tabValues:r})?a:null})();(0,o.useLayoutEffect)((()=>{_&&l(_)}),[_]);return{selectedValue:i,selectValue:(0,o.useCallback)((a=>{if(!c({value:a,tabValues:r}))throw new Error(`Can't select invalid tab value=${a}`);l(a),m(a),g(a)}),[m,g,r]),tabValues:r}}var _=t(72389);const h="tabList__CuJ",f="tabItem_LNqP";function v(a){let{className:e,block:t,selectedValue:l,selectValue:p,tabValues:m}=a;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=a=>{const e=a.currentTarget,t=s.indexOf(e),n=m[t].value;n!==l&&(d(e),p(n))},c=a=>{var e;let t=null;switch(a.key){case"Enter":u(a);break;case"ArrowRight":{const e=s.indexOf(a.currentTarget)+1;t=s[e]??s[0];break}case"ArrowLeft":{const e=s.indexOf(a.currentTarget)-1;t=s[e]??s[s.length-1];break}}null==(e=t)||e.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},m.map((a=>{let{value:e,label:t,attributes:i}=a;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:a=>s.push(a),onKeyDown:c,onClick:u},i,{className:(0,r.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":l===e})}),t??e)})))}function N(a){let{lazy:e,children:t,selectedValue:n}=a;if(t=Array.isArray(t)?t:[t],e){const a=t.find((a=>a.props.value===n));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((a,e)=>(0,o.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function y(a){const e=g(a);return o.createElement("div",{className:(0,r.Z)("tabs-container",h)},o.createElement(v,(0,n.Z)({},a,e)),o.createElement(N,(0,n.Z)({},a,e)))}function b(a){const e=(0,_.Z)();return o.createElement(y,(0,n.Z)({key:String(e)},a))}},83581:(a,e,t)=>{t.d(e,{Z:()=>o});var n=t(67294);function o(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},12017:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294),o=t(58538);const r=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,e.map(((e,t)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${a.toLowerCase()}`},a)," ",n.createElement(o.D,{class:"cl-item-content"},e))))));function i(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:a.semanticVersion,style:{marginTop:"1em"}},t&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null," \ud83d\udcc5 [",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),r("Added",a.added),r("Changed ",a.changed),r("Deprecated ",a.deprecated),r("Removed ",a.removed),r("Fixed",a.fixed),r("Security",a.security)))))}},38180:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=t(87462),o=(t(67294),t(3905)),r=(t(74866),t(85162),t(83581)),i=(t(74588),t(12017)),l=t(78835);const p={description:"Link to the promotion page."},m="promotion_page_link",s={unversionedId:"fields/promotion/promotion_page_link",id:"fields/promotion/promotion_page_link",title:"promotion_page_link",description:"Link to the promotion page.",source:"@site/docs/fields/promotion/promotion_page_link.md",sourceDirName:"fields/promotion",slug:"/fields/promotion/promotion_page_link",permalink:"/fields/promotion/promotion_page_link",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/promotion/promotion_page_link.md",tags:[],version:"current",frontMatter:{description:"Link to the promotion page."},sidebar:"tutorialSidebar",previous:{title:"promotion_id",permalink:"/fields/promotion/promotion_id"},next:{title:"Terminology",permalink:"/terminology/"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:u};function k(a){let{components:e,...t}=a;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promotion_page_link"},"promotion_page_link"),(0,o.kt)(l.ZP,{mdxType:"OptionalField"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Link to the promotion page."),(0,o.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value must be a valid and properly encoded url.")),(0,o.kt)("h2",{id:"example-values"},"Example Values"),(0,o.kt)("p",null,"Here are examples of how a valid ",(0,o.kt)("em",{parentName:"p"},"promotion_page_link")," value should look like in XML."),(0,o.kt)("admonition",{title:"Valid Value",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://example.com/link</pj:promotion_page_link>\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to show more valid XML examples"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://example.com/link</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link(black)_(large)</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link#foo</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://mysite.com/promotion-campaign-2023</pj:promotion_page_link>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://mysite.com/promotion-campaign-2023</pj:promotion_page_link>\n")))),(0,o.kt)("h2",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url",title:"validation_invalid_url",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://bar</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url_fragment",title:"validation_invalid_url_fragment",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link##</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url_host",title:"validation_invalid_url_host",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://example%.com/link</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url_path",title:"validation_invalid_url_path",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link[12-34]</pj:promotion_page_link>\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url_port",title:"validation_invalid_url_port",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>http://example.com:foo/link</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_invalid_url_query",title:"validation_invalid_url_query",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>https://example.com/link?param=value^up-arrow</pj:promotion_page_link>\n"))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)(r.Z,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed",mdxType:"Anchor"})),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<pj:promotion_page_link>foo://example.com/link</pj:promotion_page_link>\n"))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},(0,o.kt)("strong",{parentName:"th"},"Property")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Value")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"False")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"False")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"False")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)(i.Z,{versionHistory:[{added:["Initial definition"],date:"2023-12-11"}],dateOnly:!0,mdxType:"ChangeLog"}))}k.isMDXComponent=!0},74588:(a,e,t)=>{t.d(e,{ZP:()=>i});var n=t(87462),o=(t(67294),t(3905));const r={toc:[]};function i(a){let{components:e,...t}=a;return(0,o.kt)("wrapper",(0,n.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:`/fields/${t.dir}/${t.name}`,alt:t.name},(0,o.kt)("code",null,t.name)))}i.isMDXComponent=!0},78835:(a,e,t)=>{t.d(e,{ZP:()=>i});var n=t(87462),o=(t(67294),t(3905));const r={toc:[]};function i(a){let{components:e,...t}=a;return(0,o.kt)("wrapper",(0,n.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Optional Field",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This field is ",(0,o.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}i.isMDXComponent=!0}}]);