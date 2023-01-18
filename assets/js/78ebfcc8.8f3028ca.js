"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,d=c["".concat(s,".").concat(u)]||c[u]||g[u]||r;return t?i.createElement(d,l(l({ref:n},p),{},{components:t})):i.createElement(d,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var i=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(7462),a=t(7294),r=t(6010),l=t(2389),o=t(7392),s=t(7094),m=t(2466);const p="tabList__CuJ",g="tabItem_LNqP";function c(e){var n;const{lazy:t,block:l,defaultValue:c,values:u,groupId:d,className:_}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??h.map((e=>{let{props:{value:n,label:t,attributes:i}}=e;return{value:n,label:t,attributes:i}})),k=(0,o.l)(f,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=(0,s.U)(),[x,S]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,m.o5)();if(null!=d){const e=v[d];null!=e&&e!==x&&f.some((n=>n.value===e))&&S(e)}const T=e=>{const n=e.currentTarget,t=E.indexOf(n),i=f[t].value;i!==x&&(A(n),S(i),null!=d&&b(d,String(i)))},C=e=>{var n;let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},_)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>E.push(e),onKeyDown:C,onClick:T},l,{className:(0,r.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function u(e){const n=(0,l.Z)();return a.createElement(c,(0,i.Z)({key:String(n)},e))}},8284:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"availability,condition,google_product_category,id,link,price,title\nout_of_stock,refurbished,1,120431832,https://example.com/link,100 SEK,Samsung Galaxy S8 Black 128G\n")))}l.isMDXComponent=!0},7984:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'additional_image_link,adult,affiliate_link,age_group,availability,availability_date,brand,color,condition,description,energy_efficiency_class,gender,google_product_category,gtin,id,image_link,is_bundle,item_group_id,link,material,mpn,member_price,delta_command,pattern,price,prisjakt_id,product_detail(section_name:attribute_name:attribute_value),product_type,promotion_id,sale_price,sale_price_effective_date,shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time:max_transit_time),shipping_label,size,shipping_weight,shipping_height,shipping_length,shipping_width,size_system,title\n"https://example.com/image1.jpg,https://example.com/image2.jpg",fAlSE,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,toddler,preorder,2021-03-21,Sony,RED/GREEN/BLUE,demo,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",g,unisex,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,"10614141000415,90311017",sv-2131.prod-1,ftps://example.com/link,fAlSE,aaa111,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,Cotton/Leather,MGCH3LL/A,1.144.000 SEK,remove,strips,1.144.000 SEK,1,disc:memory:500 GB,computer_accessories,super promo,11.50 SEK,2016-02-24/2016-02-26,"SE:Sk\xe5ne:DHL:25.00 SEK:1:2:1:3,SE:Sk\xe5ne:POST:5.00 SEK:1:5:1:3,SE:Sk\xe5ne:UPC:45.00 SEK:1:8:3:10",dhl/free,XXXL,11 lb,15.2 in,15.2 in,15.2 in,us,Samsung Galaxy S8 Black 128G\n,,,,not_available_for_purchase,,,,demo,,,,,,aBCd_1123,,,,https://example.com/link?utm_source=1&utm_medium=2,,,,,,"10,000.00 SEK",,,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,,,,,,,,,,,,Samsung Galaxy S8 Black 128G\n,,,,preorder,2021-03-21,,,new,,,,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,,aBCd1123,,,,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,,,,,,10 000.00 SEK,,,,,,,,,,,,,,,Samsung Galaxy S8 Black 128G\n')))}l.isMDXComponent=!0},8299:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Minimal Example Feed</title>\n    <description>This is an example feed with the minimal values required</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:availability>in_stock</g:availability>\n      <g:condition>new</g:condition>\n      <g:google_product_category>1144</g:google_product_category>\n      <g:id><![CDATA[213888]]></g:id>\n      <g:link>http://example.com/link</g:link>\n      <g:price>99.99 SEK</g:price>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n')))}l.isMDXComponent=!0},82:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Example Feed</title>\n    <description>This is an example feed with the minimal required and all accepted values</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:additional_image_link>https://example.com/image1.jpg</g:additional_image_link>\n      <g:additional_image_link>https://example.com/image2.jpg</g:additional_image_link>\n      <g:adult>fAlSE</g:adult>\n      <g:affiliate_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:affiliate_link>\n      <g:age_group>toddler</g:age_group>\n      <g:availability>preorder</g:availability>\n      <g:availability_date>2021-03-21</g:availability_date>\n      <g:brand><![CDATA[Sony]]></g:brand>\n      <g:color>RED/GREEN/BLUE</g:color>\n      <g:condition>demo</g:condition>\n      <g:description><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]]></g:description>\n      <g:energy_efficiency_class>g</g:energy_efficiency_class>\n      <g:gender>unisex</g:gender>\n      <g:google_product_category><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:google_product_category>\n      <g:gtin>10614141000415</g:gtin>\n      <g:gtin>90311017</g:gtin>\n      <g:id><![CDATA[sv-2131.prod-1]]></g:id>\n      <g:image_link>ftps://example.com/link</g:image_link>\n      <g:is_bundle>fAlSE</g:is_bundle>\n      <g:item_group_id>aaa111</g:item_group_id>\n      <g:link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:link>\n      <g:material><![CDATA[Cotton/Leather]]></g:material>\n      <g:mpn>MGCH3LL/A</g:mpn>\n      <pj:member_price>1.144.000 SEK</pj:member_price>\n      <g:delta_command>remove</g:delta_command>\n      <g:pattern><![CDATA[strips]]></g:pattern>\n      <g:price>1.144.000 SEK</g:price>\n      <pj:prisjakt_id>1</pj:prisjakt_id>\n      <g:product_detail>\n        <g:section_name><![CDATA[disc]]></g:section_name>\n        <g:attribute_name><![CDATA[memory]]></g:attribute_name>\n        <g:attribute_value><![CDATA[500 GB]]></g:attribute_value>\n      </g:product_detail>\n      <g:product_type><![CDATA[computer_accessories]]></g:product_type>\n      <g:promotion_id><![CDATA[super promo]]></g:promotion_id>\n      <g:sale_price>11.50 SEK</g:sale_price>\n      <g:sale_price_effective_date>2016-02-24/2016-02-26</g:sale_price_effective_date>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>DHL</g:service>\n        <g:price>25.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>2</g:max_handling_time>\n        <g:min_transit_time>1</g:min_transit_time>\n        <g:max_transit_time>3</g:max_transit_time>\n      </g:shipping>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>POST</g:service>\n        <g:price>5.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>5</g:max_handling_time>\n        <g:min_transit_time>1</g:min_transit_time>\n        <g:max_transit_time>3</g:max_transit_time>\n      </g:shipping>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>UPC</g:service>\n        <g:price>45.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>8</g:max_handling_time>\n        <g:min_transit_time>3</g:min_transit_time>\n        <g:max_transit_time>10</g:max_transit_time>\n      </g:shipping>\n      <g:shipping_label>dhl/free</g:shipping_label>\n      <g:size>XXXL</g:size>\n      <g:shipping_weight>11 lb</g:shipping_weight>\n      <g:shipping_height>15.2 in</g:shipping_height>\n      <g:shipping_length>15.2 in</g:shipping_length>\n      <g:shipping_width>15.2 in</g:shipping_width>\n      <g:size_system>us</g:size_system>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n    <item>\n      <g:availability>pickup</g:availability>\n      <g:condition>used</g:condition>\n      <g:id><![CDATA[aBCd1123]]></g:id>\n      <g:link>https://example.com/link(black)_(large)</g:link>\n      <g:price>SEK 100</g:price>\n      <g:product_type><![CDATA[computer_accessories]]></g:product_type>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n    <item>\n      <g:availability>download</g:availability>\n      <g:condition>damaged packaging</g:condition>\n      <g:google_product_category><![CDATA[Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies]]></g:google_product_category>\n      <g:id><![CDATA[aBCd-1123]]></g:id>\n      <g:link>https://example.com/link#foo</g:link>\n      <g:price>99,99 SEK</g:price>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n')))}l.isMDXComponent=!0},9370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>_,frontMatter:()=>m,metadata:()=>g,toc:()=>u});var i=t(7462),a=(t(7294),t(3905)),r=t(5488),l=t(5162),o=(t(82),t(7984),t(8299)),s=t(8284);const m={sidebar_position:1},p="Minimal Required Fields",g={unversionedId:"examples/minimal",id:"examples/minimal",title:"Minimal Required Fields",description:"Examples of the minimal set of required fields you need to provide.",source:"@site/docs/examples/minimal.mdx",sourceDirName:"examples",slug:"/examples/minimal",permalink:"/examples/minimal",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/examples/minimal.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/examples/"},next:{title:"All Supported Fields",permalink:"/examples/all"}},c={},u=[{value:"Example XML file",id:"example-xml-file",level:2}],d={toc:u};function _(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minimal-required-fields"},"Minimal Required Fields"),(0,a.kt)("p",null,"Examples of the ",(0,a.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"minimal set of required fields")," you need to provide."),(0,a.kt)("h2",{id:"example-xml-file"},"Example XML file"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"xml_minimal",label:"XML",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"pathname:///examples/min-sample.xml"},"Download XML File"),"  "),(0,a.kt)(o.ZP,{mdxType:"SampleXmlMinimal"})),(0,a.kt)(l.Z,{value:"csv_minimal",label:"CSV",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"pathname:///examples/min-sample.csv"},"Download CSV File"),"  "),(0,a.kt)(s.ZP,{mdxType:"SampleCsvMinimal"}))))}_.isMDXComponent=!0}}]);