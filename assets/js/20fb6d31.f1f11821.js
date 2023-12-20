"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[863],{85162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(67294),i=t(86010);const l="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},e)}},74866:(a,e,t)=>{t.d(e,{Z:()=>y});var n=t(87462),i=t(67294),l=t(86010),r=t(12466),o=t(16550),m=t(91980),d=t(67392),s=t(50012);function p(a){return function(a){return i.Children.map(a,(a=>{if((0,i.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:i}}=a;return{value:e,label:t,attributes:n,default:i}}))}function u(a){const{values:e,children:t}=a;return(0,i.useMemo)((()=>{const a=e??p(t);return function(a){const e=(0,d.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function c(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function k(a){let{queryString:e=!1,groupId:t}=a;const n=(0,o.k6)(),l=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,m._X)(l),(0,i.useCallback)((a=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,a),n.replace({...n.location,search:e.toString()})}),[l,n])]}function g(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,l=u(a),[r,o]=(0,i.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[m,d]=k({queryString:t,groupId:n}),[p,g]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,l]=(0,s.Nk)(t);return[n,(0,i.useCallback)((a=>{t&&l.set(a)}),[t,l])]}({groupId:n}),h=(()=>{const a=m??p;return c({value:a,tabValues:l})?a:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:r,selectValue:(0,i.useCallback)((a=>{if(!c({value:a,tabValues:l}))throw new Error(`Can't select invalid tab value=${a}`);o(a),d(a),g(a)}),[d,g,l]),tabValues:l}}var h=t(72389);const f="tabList__CuJ",_="tabItem_LNqP";function v(a){let{className:e,block:t,selectedValue:o,selectValue:m,tabValues:d}=a;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),u=a=>{const e=a.currentTarget,t=s.indexOf(e),n=d[t].value;n!==o&&(p(e),m(n))},c=a=>{var e;let t=null;switch(a.key){case"Enter":u(a);break;case"ArrowRight":{const e=s.indexOf(a.currentTarget)+1;t=s[e]??s[0];break}case"ArrowLeft":{const e=s.indexOf(a.currentTarget)-1;t=s[e]??s[s.length-1];break}}null==(e=t)||e.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e)},d.map((a=>{let{value:e,label:t,attributes:r}=a;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:a=>s.push(a),onKeyDown:c,onClick:u},r,{className:(0,l.Z)("tabs__item",_,null==r?void 0:r.className,{"tabs__item--active":o===e})}),t??e)})))}function N(a){let{lazy:e,children:t,selectedValue:n}=a;if(t=Array.isArray(t)?t:[t],e){const a=t.find((a=>a.props.value===n));return a?(0,i.cloneElement)(a,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},t.map(((a,e)=>(0,i.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function x(a){const e=g(a);return i.createElement("div",{className:(0,l.Z)("tabs-container",f)},i.createElement(v,(0,n.Z)({},a,e)),i.createElement(N,(0,n.Z)({},a,e)))}function y(a){const e=(0,h.Z)();return i.createElement(x,(0,n.Z)({key:String(e)},a))}},83581:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294);function i(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},12017:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(67294),i=t(58538);const l=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,e.map(((e,t)=>n.createElement("div",{class:"cl-item"},n.createElement("span",{class:`cl-pill cl-${a.toLowerCase()}`},a)," ",n.createElement(i.D,{class:"cl-item-content"},e))))));function r(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:a.semanticVersion,style:{marginTop:"1em"}},t&&n.createElement("h3",null," \ud83d\udcc5 ",new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null," \ud83d\udcc5 [",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),l("Added",a.added),l("Changed ",a.changed),l("Deprecated ",a.deprecated),l("Removed ",a.removed),l("Fixed",a.fixed),l("Security",a.security)))))}},97746:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>k});var n=t(87462),i=(t(67294),t(3905)),l=t(74866),r=t(85162),o=t(83581),m=(t(74588),t(12017)),d=t(78835);const s={description:"Add it to improve search results and listing. If you have more then one image you can use the [`additional_image_link`](/fields/offer/additional_image_link) attribute to include more."},p="image_link",u={unversionedId:"fields/offer/image_link",id:"fields/offer/image_link",title:"image_link",description:"Add it to improve search results and listing. If you have more then one image you can use the [`additional_image_link`](/fields/offer/additional_image_link.md) attribute to include more.",source:"@site/docs/fields/offer/image_link.md",sourceDirName:"fields/offer",slug:"/fields/offer/image_link",permalink:"/fields/offer/image_link",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/offer/image_link.md",tags:[],version:"current",frontMatter:{description:"Add it to improve search results and listing. If you have more then one image you can use the [`additional_image_link`](/fields/offer/additional_image_link.md) attribute to include more."},sidebar:"tutorialSidebar",previous:{title:"id",permalink:"/fields/offer/id"},next:{title:"is_bundle",permalink:"/fields/offer/is_bundle"}},c={},k=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Related Fields",id:"related-fields",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Properties",id:"properties",level:2},{value:"Changelog",id:"changelog",level:2},{value:"References",id:"references",level:2}],g={toc:k};function h(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image_link"},"image_link"),(0,i.kt)(d.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Add it to improve search results and listing. If you have more then one image you can use the ",(0,i.kt)("a",{parentName:"p",href:"/fields/offer/additional_image_link"},(0,i.kt)("inlineCode",{parentName:"a"},"additional_image_link"))," attribute to include more."),(0,i.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding image helps us indexing the product"),(0,i.kt)("li",{parentName:"ul"},"In case of new products we can present the offer along with it's image. This makes it easier for users to find the product in the product listing.")),(0,i.kt)("h2",{id:"related-fields"},"Related Fields"),(0,i.kt)("mermaid",{value:'%%{init: {\'theme\':\'neutral\'}}%%\nflowchart LR\nimage_link -- can be extended by  --- additional_image_link\n  click additional_image_link "/fields/offer/additional_image_link" "additional_image_link" _blank\n\n  click image_link "/fields/offer/image_link" "image_link" _blank\n  style image_link fill:#4cb3d4'}),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Url length is limited to 2047 characters"),(0,i.kt)("li",{parentName:"ul"},"Must be valid ",(0,i.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc3986"},"RFC 3986")," uri"),(0,i.kt)("li",{parentName:"ul"},"Must have a protocol (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"https"),")"),(0,i.kt)("li",{parentName:"ul"},"Must have a path (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},".../my-product"),")"),(0,i.kt)("li",{parentName:"ul"},"Must be shorter than ",(0,i.kt)("inlineCode",{parentName:"li"},"2047")," characters"),(0,i.kt)("li",{parentName:"ul"},"Unicode characters must be ",(0,i.kt)("a",{parentName:"li",href:"/advanced/encoding/url-encode"},"url encoded"))),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"do"},"Do"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the url is encoded"),(0,i.kt)("li",{parentName:"ul"},"If product has variants, make sure the image presents the proper product variant"),(0,i.kt)("li",{parentName:"ul"},"Prefer using high resolution images at least 300x300 pixels size, the bigger size the better"),(0,i.kt)("li",{parentName:"ul"},"The product should be in the center of the image"),(0,i.kt)("li",{parentName:"ul"},"Prefer a white background without added content"),(0,i.kt)("li",{parentName:"ul"},"Prefer professional images, shadows from the camera flash or bad image setup is often an indicator of amateur images, although any image is better than no image")),(0,i.kt)("h3",{id:"dont"},"Don\xb4t"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supply URIs to other things than images"),(0,i.kt)("li",{parentName:"ul"},'Don\'t put "stickers" in the images, eg. with "30% off" "new" or "SALE"'),(0,i.kt)("li",{parentName:"ul"},"Don't watermark the images eg. with the store logo or name")),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"image_link")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link</g:image_link>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link(black)_(large)</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link#foo</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>ftp://example.com/link</g:image_link>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link(black)_(large)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link#foo\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link?utm_source=1&utm_medium=2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link-%E2%84%A2-mu-20%C2%B5m\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nftp://example.com/link\n")))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url",title:"validation_invalid_url",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://bar</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_fragment",title:"validation_invalid_url_fragment",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link##</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_host",title:"validation_invalid_url_host",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example%.com/link</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_path",title:"validation_invalid_url_path",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link[12-34]</g:image_link>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_port",title:"validation_invalid_url_port",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com:foo/link</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_query",title:"validation_invalid_url_query",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link?param=value^up-arrow</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>foo://example.com/link</g:image_link>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>ftps://example.com/link</g:image_link>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>sftp://example.com/link</g:image_link>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url",title:"validation_invalid_url",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://bar\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_fragment",title:"validation_invalid_url_fragment",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link##\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_host",title:"validation_invalid_url_host",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example%.com/link\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_path",title:"validation_invalid_url_path",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link[12-34]\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_port",title:"validation_invalid_url_port",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com:foo/link\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_query",title:"validation_invalid_url_query",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link?param=value^up-arrow\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed",mdxType:"Anchor"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nfoo://example.com/link\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nftps://example.com/link\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nsftp://example.com/link\n"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(m.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324350"},"Google Merchant Specification"))))}h.isMDXComponent=!0},74588:(a,e,t)=>{t.d(e,{ZP:()=>r});var n=t(87462),i=(t(67294),t(3905));const l={toc:[]};function r(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("a",{href:`/fields/${t.dir}/${t.name}`,alt:t.name},(0,i.kt)("code",null,t.name)))}r.isMDXComponent=!0},78835:(a,e,t)=>{t.d(e,{ZP:()=>r});var n=t(87462),i=(t(67294),t(3905));const l={toc:[]};function r(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);