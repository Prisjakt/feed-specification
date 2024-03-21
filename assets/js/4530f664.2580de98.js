"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[4249],{33915:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=n(74848),r=n(28453);function s(e){const i={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/products-1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Minimal Product Feed</title>\n    <description>This is an products feed with the minimal values required</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:brand><![CDATA[Prisjakt]]></g:brand>\n      <g:description><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]]></g:description>\n      <g:gtin>10614141000415</g:gtin>\n      <g:id><![CDATA[a b./)(]]></g:id>\n      <g:image_link>https://example.com/link#foo</g:image_link>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n'})})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function l(e){const i={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<rss xmlns:pj="https://schema.prisjakt.nu/ns/products-1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">\n  <channel>\n    <title>Prisjakt Example Product Feed</title>\n    <description>This is an example product feed with all possible values</description>\n    <link>https://schema.prisjakt.nu</link>\n    <item>\n      <g:brand><![CDATA[Sony]]></g:brand>\n      <g:description><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]]></g:description>\n      <g:gtin>10614141000415</g:gtin>\n      <g:gtin>90311017</g:gtin>\n      <g:id><![CDATA[a b./)(]]></g:id>\n      <g:image_link>ftp://example.com/link</g:image_link>\n      <g:item_group_id>aaa111</g:item_group_id>\n      <g:mpn>MGCH3LL/A</g:mpn>\n      <g:product_detail>\n        <g:section_name><![CDATA[disc]]></g:section_name>\n        <g:attribute_name><![CDATA[memory]]></g:attribute_name>\n        <g:attribute_value><![CDATA[500 GB]]></g:attribute_value>\n      </g:product_detail>\n      <g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>\n    </item>\n  </channel>\n</rss>\n\n'})})}function a(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const d={sidebar_position:1},c="Google Manufacturer XML",u={id:"feeds/product/formats/google_manufacturer_xml/index",title:"Google Manufacturer XML",description:"Description",source:"@site/docs/feeds/product/formats/google_manufacturer_xml/index.md",sourceDirName:"feeds/product/formats/google_manufacturer_xml",slug:"/feeds/product/formats/google_manufacturer_xml/",permalink:"/feeds/product/formats/google_manufacturer_xml/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/formats/google_manufacturer_xml/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Product File Formats",permalink:"/feeds/product/formats/"},next:{title:"Trade XML",permalink:"/feeds/product/formats/tradexml/"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Required Fields",id:"required-fields",level:2},{value:"Example Files",id:"example-files",level:2},{value:"Minimal",id:"minimal",level:3},{value:"Full",id:"full",level:3}];function f(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"google-manufacturer-xml",children:"Google Manufacturer XML"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"https://support.google.com/manufacturers/answer/6124116?hl=en&ref_topic=7663870,&visit_id=638095616516154262-3704335796&rd=1",children:"Google Manufacturer Product Data Specification"})," is currently our primary way of ingesting product data from manufacturers."]}),"\n",(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.a,{href:"/feeds/product/fields/product_detail",children:"product_detail"})," field to send your properties/attributes in a structured format. We will continuously add mappings for the different attributes to our internal taxonomy so add as much information as possible."]}),"\n",(0,t.jsx)(i.h2,{id:"required-fields",children:"Required Fields"}),"\n",(0,t.jsx)(i.p,{children:"The following fields are required for an product to ingest successfully:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/id",children:"Id"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/gtin",children:"GTIN"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/title",children:"Title"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/brand",children:"Brand"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/description",children:"Description"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/feeds/product/fields/image_link",children:"Image Link"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"example-files",children:"Example Files"}),"\n",(0,t.jsx)(i.h3,{id:"minimal",children:"Minimal"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"pathname:///examples/offer/min.xml",children:"Download XML File"})}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(i.h3,{id:"full",children:"Full"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"pathname:///examples/offer/full.xml",children:"Download XML File"})}),"\n",(0,t.jsx)(a,{})]})}function g(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);