"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[9542],{3581:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(7294);function r(e){let{id:t,title:i}=e;return n.createElement(n.Fragment,null,n.createElement("a",{id:t,class:"anchor"},i),n.createElement("a",{class:"hash-link",href:"#"+t,title:"Direct link"}))}},4588:(e,t,i)=>{i.d(t,{ZP:()=>a});var n=i(7462),r=(i(7294),i(3905));const o={toc:[]};function a(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:`/fields/${i.name}`,alt:i.name},(0,r.kt)("code",null,i.name)))}a.isMDXComponent=!0},3169:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>u});var n=i(7462),r=i(7294),o=i(3905),a=i(3581),s=i(7770);function l(e){let{id:t,title:i,children:n}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,r.createElement(a.Z,{id:t,title:i})),r.createElement("blockquote",null,r.createElement(s.Z,null,n)))}var d=i(4588);const m={sidebar_position:1},c="Terms",p={unversionedId:"terminology/terms",id:"terminology/terms",title:"Terms",description:"Prisjakt",source:"@site/docs/terminology/terms.mdx",sourceDirName:"terminology",slug:"/terminology/terms",permalink:"/terminology/terms",draft:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/terminology/terms.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/terminology/"},next:{title:"Required vs Optional Fields",permalink:"/terminology/required-vs-optional"}},f={},u=[{value:"Prisjakt",id:"prisjakt",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Technical",id:"technical",level:2}],h={toc:u};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terms"},"Terms"),(0,o.kt)("h2",{id:"prisjakt"},"Prisjakt"),(0,o.kt)(l,{id:"term_shop",title:"Shop",mdxType:"Definition"},"A shop is an e-commerce retailer that is selling the products defined in its Product Feed; the inventory. A shop has a primary market, typically associated with an Internet domain (e.g. amazon.se is Amazon Sweden)."),(0,o.kt)(l,{id:"term_feed",title:"Feed",mdxType:"Definition"},"Feed is a structured representation of inventory information and updates. Most often represented as one or more xml or csv files."),(0,o.kt)(l,{id:"term_offer",title:"Offer",mdxType:"Definition"},"Offer is a set of data containing all information about product. It contains information about product itself, its price, shipping cost and delivery method."),(0,o.kt)(l,{id:"term_field",title:"Field",mdxType:"Definition"},"Field (or attribute) is a single datapoint describing one of offer's property like price, name, size etc."),(0,o.kt)(l,{id:"term_price",title:"Price",mdxType:"Definition"},"Price is the cost of the product including VAT."),(0,o.kt)("h2",{id:"ingestion"},"Ingestion"),(0,o.kt)(l,{id:"term_nested",title:"Nested",mdxType:"Definition"},(0,o.kt)("p",null,"Fields like ",(0,o.kt)(d.ZP,{name:"shipping",mdxType:"Field"})," have more complex structure to accomodate all data required to descibe them. In this case field contain internal fields that's why it's reffered as nested field (or attribute).")),(0,o.kt)(l,{id:"term_repeatable",title:"Repeatable",mdxType:"Definition"},"In some cases it's possible to repeat the same field for a single product. Each field has this defined along with maximum number of repetitions."),(0,o.kt)(l,{id:"term_agent",title:"Agent",mdxType:"Definition"},"Agent is internal prisjakt service that integrates the data with Prisjakt comparison engine."),(0,o.kt)(l,{id:"term_validation_rule",title:"Validation  Rule",mdxType:"Definition"},"Validation rule defines what type of offers are accepted by Prisjakt Agent."),(0,o.kt)(l,{id:"term_ingestion_run",title:"Ingestion Run",mdxType:"Definition"},"Ingestion run is an event when Prisjakt's Agent processes the data."),(0,o.kt)(l,{id:"term_severity",title:"Severity",mdxType:"Definition"},(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/terminology/severity-levels"},"validation severity levels"))),(0,o.kt)("h2",{id:"technical"},"Technical"),(0,o.kt)(l,{id:"term_case_sensitive",title:"Case Sensitive",mdxType:"Definition"},"When a comparison between strings consider capital vs small letters to be not equal."))}k.isMDXComponent=!0}}]);