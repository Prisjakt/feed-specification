"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[8288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return n?i.createElement(d,l(l({ref:t},c),{},{components:n})):i.createElement(d,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(67294),a=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(87462),a=n(67294),r=n(86010),l=n(12466),o=n(16550),s=n(91980),m=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function _(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[s,m]=d({queryString:n,groupId:i}),[p,_]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),h=(()=>{const e=s??p;return g({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),_(e)}),[m,_,r]),tabValues:r}}var h=n(72389);const f="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=m[n].value;i!==o&&(p(t),s(i))},g=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},m.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:u},l,{className:(0,r.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:i}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function v(e){const t=_(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(b,(0,i.Z)({},e,t)),a.createElement(k,(0,i.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return a.createElement(v,(0,i.Z)({key:String(t)},e))}},29670:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"availability,condition,google_product_category,id,link,price,title\nout_of_stock,refurbished,1,120431832,https://example.com/link,100 SEK,Samsung Galaxy S8 Black 128G\n")))}l.isMDXComponent=!0},27984:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},'additional_image_link,adult,affiliate_link,age_group,availability,availability_date,brand,color,condition,description,energy_efficiency_class,gender,google_product_category,gtin,id,image_link,is_bundle,item_group_id,link,material,mpn,member_price,delta_command,pattern,price,prisjakt_id,product_detail(section_name:attribute_name:attribute_value),product_type,promotion_id,sale_price,sale_price_effective_date,shipping(country:region:service:price:min_handling_time:max_handling_time:min_transit_time:max_transit_time),shipping_label,size,shipping_weight,shipping_height,shipping_length,shipping_width,size_system,title\n"https://example.com/image1.jpg,https://example.com/image2.jpg",fAlSE,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,toddler,preorder,2021-03-21,Sony,RED/GREEN/BLUE,demo,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",g,unisex,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,"10614141000415,90311017",sv-2131.prod-1,ftps://example.com/link,fAlSE,aaa111,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,Cotton/Leather,MGCH3LL/A,1.144.000 SEK,remove,strips,1.144.000 SEK,1,disc:memory:500 GB,computer_accessories,super promo,11.50 SEK,2016-02-24/2016-02-26,"SE:Sk\xe5ne:DHL:25.00 SEK:1:2:1:3,SE:Sk\xe5ne:POST:5.00 SEK:1:5:1:3,SE:Sk\xe5ne:UPC:45.00 SEK:1:8:3:10",dhl/free,XXXL,11 lb,15.2 in,15.2 in,15.2 in,us,Samsung Galaxy S8 Black 128G\n,,,,not_available_for_purchase,,,,demo,,,,,,aBCd_1123,,,,https://example.com/link?utm_source=1&utm_medium=2,,,,,,"10,000.00 SEK",,,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,,,,,,,,,,,,Samsung Galaxy S8 Black 128G\n,,,,preorder,2021-03-21,,,new,,,,Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates,,aBCd1123,,,,http://example.com/link-%E2%84%A2-mu-20%C2%B5m,,,,,,10 000.00 SEK,,,,,,,,,,,,,,,Samsung Galaxy S8 Black 128G\n')))}l.isMDXComponent=!0},48299:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Minimal Example Feed</title>\n    <description>This is an example feed with the minimal values required</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:availability>in_stock</g:availability>\n      <g:condition>new</g:condition>\n      <g:google_product_category>1144</g:google_product_category>\n      <g:id><![CDATA[213888]]></g:id>\n      <g:link>http://example.com/link</g:link>\n      <g:price>99.99 SEK</g:price>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n')))}l.isMDXComponent=!0},40082:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Example Feed</title>\n    <description>This is an example feed with the minimal required and all accepted values</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:additional_image_link>https://example.com/image1.jpg</g:additional_image_link>\n      <g:additional_image_link>https://example.com/image2.jpg</g:additional_image_link>\n      <g:adult>fAlSE</g:adult>\n      <g:affiliate_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:affiliate_link>\n      <g:age_group>toddler</g:age_group>\n      <g:availability>preorder</g:availability>\n      <g:availability_date>2021-03-21</g:availability_date>\n      <g:brand><![CDATA[Sony]]></g:brand>\n      <g:color>RED/GREEN/BLUE</g:color>\n      <g:condition>demo</g:condition>\n      <g:description><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]]></g:description>\n      <g:energy_efficiency_class>g</g:energy_efficiency_class>\n      <g:gender>unisex</g:gender>\n      <g:google_product_category><![CDATA[Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates]]></g:google_product_category>\n      <g:gtin>10614141000415</g:gtin>\n      <g:gtin>90311017</g:gtin>\n      <g:id><![CDATA[sv-2131.prod-1]]></g:id>\n      <g:image_link>ftps://example.com/link</g:image_link>\n      <g:is_bundle>fAlSE</g:is_bundle>\n      <g:item_group_id>aaa111</g:item_group_id>\n      <g:link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:link>\n      <g:material><![CDATA[Cotton/Leather]]></g:material>\n      <g:mpn>MGCH3LL/A</g:mpn>\n      <pj:member_price>1.144.000 SEK</pj:member_price>\n      <g:delta_command>remove</g:delta_command>\n      <g:pattern><![CDATA[strips]]></g:pattern>\n      <g:price>1.144.000 SEK</g:price>\n      <pj:prisjakt_id>1</pj:prisjakt_id>\n      <g:product_detail>\n        <g:section_name><![CDATA[disc]]></g:section_name>\n        <g:attribute_name><![CDATA[memory]]></g:attribute_name>\n        <g:attribute_value><![CDATA[500 GB]]></g:attribute_value>\n      </g:product_detail>\n      <g:product_type><![CDATA[computer_accessories]]></g:product_type>\n      <g:promotion_id><![CDATA[super promo]]></g:promotion_id>\n      <g:sale_price>11.50 SEK</g:sale_price>\n      <g:sale_price_effective_date>2016-02-24/2016-02-26</g:sale_price_effective_date>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>DHL</g:service>\n        <g:price>25.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>2</g:max_handling_time>\n        <g:min_transit_time>1</g:min_transit_time>\n        <g:max_transit_time>3</g:max_transit_time>\n      </g:shipping>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>POST</g:service>\n        <g:price>5.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>5</g:max_handling_time>\n        <g:min_transit_time>1</g:min_transit_time>\n        <g:max_transit_time>3</g:max_transit_time>\n      </g:shipping>\n      <g:shipping>\n        <g:country>SE</g:country>\n        <g:region>Sk\xe5ne</g:region>\n        <g:service>UPC</g:service>\n        <g:price>45.00 SEK</g:price>\n        <g:min_handling_time>1</g:min_handling_time>\n        <g:max_handling_time>8</g:max_handling_time>\n        <g:min_transit_time>3</g:min_transit_time>\n        <g:max_transit_time>10</g:max_transit_time>\n      </g:shipping>\n      <g:shipping_label>dhl/free</g:shipping_label>\n      <g:size>XXXL</g:size>\n      <g:shipping_weight>11 lb</g:shipping_weight>\n      <g:shipping_height>15.2 in</g:shipping_height>\n      <g:shipping_length>15.2 in</g:shipping_length>\n      <g:shipping_width>15.2 in</g:shipping_width>\n      <g:size_system>us</g:size_system>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n    <item>\n      <g:availability>pickup</g:availability>\n      <g:condition>used</g:condition>\n      <g:id><![CDATA[aBCd1123]]></g:id>\n      <g:link>https://example.com/link(black)_(large)</g:link>\n      <g:price>SEK 100</g:price>\n      <g:product_type><![CDATA[computer_accessories]]></g:product_type>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n    <item>\n      <g:availability>download</g:availability>\n      <g:condition>damaged packaging</g:condition>\n      <g:google_product_category><![CDATA[Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies]]></g:google_product_category>\n      <g:id><![CDATA[aBCd-1123]]></g:id>\n      <g:link>https://example.com/link#foo</g:link>\n      <g:price>99,99 SEK</g:price>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n')))}l.isMDXComponent=!0},19370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>_,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var i=n(87462),a=(n(67294),n(3905)),r=n(74866),l=n(85162),o=(n(40082),n(27984),n(48299)),s=n(29670);const m={sidebar_position:1},c="Minimal Required Fields",p={unversionedId:"examples/minimal",id:"examples/minimal",title:"Minimal Required Fields",description:"Examples of the minimal set of required fields you need to provide.",source:"@site/docs/examples/minimal.mdx",sourceDirName:"examples",slug:"/examples/minimal",permalink:"/examples/minimal",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/examples/minimal.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/examples/"},next:{title:"All Supported Fields",permalink:"/examples/all"}},u={},g=[{value:"Example XML file",id:"example-xml-file",level:2}],d={toc:g};function _(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minimal-required-fields"},"Minimal Required Fields"),(0,a.kt)("p",null,"Examples of the ",(0,a.kt)("a",{parentName:"p",href:"/terminology/required-vs-optional"},"minimal set of required fields")," you need to provide."),(0,a.kt)("h2",{id:"example-xml-file"},"Example XML file"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"xml_minimal",label:"XML",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"pathname:///examples/min-sample.xml"},"Download XML File"),"  "),(0,a.kt)(o.ZP,{mdxType:"SampleXmlMinimal"})),(0,a.kt)(l.Z,{value:"csv_minimal",label:"CSV",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"pathname:///examples/min-sample.csv"},"Download CSV File"),"  "),(0,a.kt)(s.ZP,{mdxType:"SampleCsvMinimal"}))))}_.isMDXComponent=!0}}]);