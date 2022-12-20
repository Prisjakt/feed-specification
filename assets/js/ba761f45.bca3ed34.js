"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4979],{5162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),i=t(6010);const l="tabItem_Ymn6";function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},e)}},5488:(a,e,t)=>{t.d(e,{Z:()=>k});var n=t(7462),i=t(7294),l=t(6010),r=t(2389),o=t(7392),m=t(7094),d=t(2466);const p="tabList__CuJ",s="tabItem_LNqP";function c(a){var e;const{lazy:t,block:r,defaultValue:c,values:k,groupId:u,className:g}=a,h=i.Children.map(a.children,(a=>{if((0,i.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=k??h.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),_=(0,o.l)(v,((a,e)=>a.value===e.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(e=h.find((a=>a.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==N&&!v.some((a=>a.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:x}=(0,m.U)(),[y,b]=(0,i.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,d.o5)();if(null!=u){const a=f[u];null!=a&&a!==y&&v.some((e=>e.value===a))&&b(a)}const w=a=>{const e=a.currentTarget,t=T.indexOf(e),n=v[t].value;n!==y&&(A(e),b(n),null!=u&&x(u,String(n)))},Z=a=>{var e;let t=null;switch(a.key){case"Enter":w(a);break;case"ArrowRight":{const e=T.indexOf(a.currentTarget)+1;t=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(a.currentTarget)-1;t=T[e]??T[T.length-1];break}}null==(e=t)||e.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},v.map((a=>{let{value:e,label:t,attributes:r}=a;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:a=>T.push(a),onKeyDown:Z,onClick:w},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":y===e})}),t??e)}))),t?(0,i.cloneElement)(h.filter((a=>a.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((a,e)=>(0,i.cloneElement)(a,{key:e,hidden:a.props.value!==y})))))}function k(a){const e=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(e)},a))}},3581:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(7294);function i(a){let{id:e,title:t}=a;return n.createElement(n.Fragment,null,n.createElement("a",{id:e,class:"anchor"},t),n.createElement("a",{class:"hash-link",href:"#"+e,title:"Direct link"}))}},2017:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(7294),i=t(8538);const l=(a,e)=>n.createElement(n.Fragment,null,e&&e.length>0&&n.createElement(n.Fragment,null,n.createElement("h4",null,a),n.createElement("ul",null,e.map(((a,e)=>n.createElement("li",null,n.createElement(i.D,null,a)))))));function r(a){let{versionHistory:e,dateOnly:t}=a;return n.createElement(n.Fragment,null,e&&e.map(((a,e)=>n.createElement("div",{id:"v{v.semanticVersion}",style:{marginTop:"1em"}},t&&n.createElement("h3",null,new Date(a.date).toISOString().slice(0,10)),!t&&n.createElement("h3",null,"[",a.semanticVersion,"] - ",new Date(a.date).toISOString().slice(0,10)),l("Added",a.added),l("Changed ",a.changed),l("Deprecated ",a.deprecated),l("Removed ",a.removed),l("Fixed",a.fixed),l("Security",a.security)))))}},3095:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=t(7462),i=(t(7294),t(3905)),l=t(5488),r=t(5162),o=t(3581),m=t(2017),d=t(8835);const p={description:"Add it to improve search results and listing. If you have more then one image you can use the `additional_image_link` attribute to include more."},s="image_link",c={unversionedId:"fields/image_link",id:"fields/image_link",title:"image_link",description:"Add it to improve search results and listing. If you have more then one image you can use the `additional_image_link` attribute to include more.",source:"@site/docs/fields/image_link.md",sourceDirName:"fields",slug:"/fields/image_link",permalink:"/docs/fields/image_link",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/fields/image_link.md",tags:[],version:"current",frontMatter:{description:"Add it to improve search results and listing. If you have more then one image you can use the `additional_image_link` attribute to include more."},sidebar:"tutorialSidebar",previous:{title:"id",permalink:"/docs/fields/id"},next:{title:"is_bundle",permalink:"/docs/fields/is_bundle"}},k={},u=[{value:"Description",id:"description",level:2},{value:"Effects When Used",id:"effects-when-used",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Do",id:"do",level:3},{value:"Don\xb4t",id:"dont",level:3},{value:"Example Values",id:"example-values",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"References",id:"references",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Properties",id:"properties",level:2}],g={toc:u};function h(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image_link"},"image_link"),(0,i.kt)(d.ZP,{mdxType:"OptionalField"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Add it to improve search results and listing. If you have more then one image you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"additional_image_link")," attribute to include more."),(0,i.kt)("h3",{id:"effects-when-used"},"Effects When Used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding image helps us with indexing process"),(0,i.kt)("li",{parentName:"ul"},"In case of new products we can present the offer along with its image. This make users easier to find it in the product listing.")),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"url length is limited to 2047 characters")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"do"},"Do"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the url is encoded"),(0,i.kt)("li",{parentName:"ul"},"If product has variants, make sure the image presents the proper product variant")),(0,i.kt)("h3",{id:"dont"},"Don\xb4t"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't inlcude images with watermarks")),(0,i.kt)("h2",{id:"example-values"},"Example Values"),(0,i.kt)("p",null,"Here are examples of how a valid ",(0,i.kt)("em",{parentName:"p"},"image_link")," value  should look like in XML and CSV (with header) respectively."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"valid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link</g:image_link>\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid XML examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link(black)_(large)</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link#foo</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>ftp://example.com/link</g:image_link>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>ftps://example.com/link</g:image_link>\n"))))),(0,i.kt)(r.Z,{value:"valid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Valid Value",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to show more valid CSV examples"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link(black)_(large)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link#foo\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link?utm_source=1&utm_medium=2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com/link-%E2%84%A2-mu-20%C2%B5m\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nftp://example.com/link\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nftps://example.com/link\n")))))),(0,i.kt)("h2",{id:"error-codes"},"Error Codes"),(0,i.kt)("p",null,"Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"validation rules")," to understand the cause."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"invalid_xml",label:"XML",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url",title:"validation_invalid_url",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://bar</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_fragment",title:"validation_invalid_url_fragment",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link##</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_host",title:"validation_invalid_url_host",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example%.com/link</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_path",title:"validation_invalid_url_path",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link[12-34]</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_port",title:"validation_invalid_url_port",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>http://example.com:foo/link</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_query",title:"validation_invalid_url_query",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>https://example.com/link?param=value^up-arrow</g:image_link>\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<g:image_link>foo://example.com/link</g:image_link>\n")))),(0,i.kt)(r.Z,{value:"invalid_csv",label:"CSV",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_length",title:"validation_invalid_length",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url",title:"validation_invalid_url",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://bar\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_fragment",title:"validation_invalid_url_fragment",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link##\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_host",title:"validation_invalid_url_host",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example%.com/link\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_path",title:"validation_invalid_url_path",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link[12-34]\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_port",title:"validation_invalid_url_port",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttp://example.com:foo/link\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_invalid_url_query",title:"validation_invalid_url_query",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nhttps://example.com/link?param=value^up-arrow\n"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)(o.Z,{id:"validation_url_scheme_not_allowed",title:"validation_url_scheme_not_allowed",mdxType:"Anchor"})," "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"image_link\nfoo://example.com/link\n"))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/merchants/answer/6324350"},"Google Merchant Specification"))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)(m.Z,{versionHistory:[{added:["Initial definition"],date:"2022-12-07"}],dateOnly:!0,mdxType:"ChangeLog"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"th"},"Property")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"th"},"Value")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Data Type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closest data type in code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Nested"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Defines if this field consists of one or more sub-fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Case Sensitive"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If small or large letters matter for this field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you can supply multiple items of this field (it\xb4s a list)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Repeatable limit"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If a list, this specifices the max number of items")))))}h.isMDXComponent=!0},8835:(a,e,t)=>{t.d(e,{ZP:()=>r});var n=t(7462),i=(t(7294),t(3905));const l={toc:[]};function r(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Optional Field",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This field is ",(0,i.kt)("a",{parentName:"p",href:"/docs/terminology/required-vs-optional"},"optional"),", but omitting it may leave out functionality on Prisjakt for your offers")))}r.isMDXComponent=!0}}]);