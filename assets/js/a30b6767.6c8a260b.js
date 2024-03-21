"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1033],{89898:(e,i,t)=>{t.d(i,{Ay:()=>o});var n=t(74848),r=t(28453);function s(e){return(0,n.jsx)("a",{href:`/fields/${e.dir}/${e.name}`,alt:e.name,children:(0,n.jsx)("code",{children:e.name})})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},64110:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var n=t(74848),r=t(28453),s=(t(96540),t(18175)),o=t(11544);function a(e){let{id:i,title:t,children:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(s.A,{id:i,title:t})}),(0,n.jsx)("blockquote",{children:(0,n.jsx)(o.A,{children:r})})]})}var l=t(89898);const d={sidebar_position:1},c="Terminology",h={id:"reference/terminology",title:"Terminology",description:"Prisjakt",source:"@site/docs/reference/terminology.md",sourceDirName:"reference",slug:"/reference/terminology",permalink:"/reference/terminology",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/reference/terminology.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/reference/"},next:{title:"Validation Severity Levels",permalink:"/reference/validation-severity-levels"}},p={},f=[{value:"Prisjakt",id:"prisjakt",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Technical",id:"technical",level:2}];function m(e){const i={a:"a",h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(i.h2,{id:"prisjakt",children:"Prisjakt"}),"\n",(0,n.jsx)(a,{id:"shop",title:"Shop",children:(0,n.jsx)(i.p,{children:"A shop is an e-commerce retailer that is selling the products defined in its Product Feed; the inventory. A shop has a primary market, typically associated with an Internet domain (e.g. amazon.se is Amazon Sweden)."})}),"\n",(0,n.jsx)(a,{id:"feed",title:"Feed",children:(0,n.jsx)(i.p,{children:"Feed is a structured representation of inventory information and updates. Most often represented as one or more xml or csv files."})}),"\n",(0,n.jsx)(a,{id:"feed",title:"Promotion Feed",children:(0,n.jsx)(i.p,{children:"Promotion Feed is a structured representation of promotion."})}),"\n",(0,n.jsx)(a,{id:"offer",title:"Offer",children:(0,n.jsx)(i.p,{children:"Offer is a set of data containing all information about product. It contains information about product itself, its price, shipping cost and delivery method."})}),"\n",(0,n.jsx)(a,{id:"promotion",title:"Promotion",children:(0,n.jsx)(i.p,{children:"Promotion is a set of data containing all information about promotion."})}),"\n",(0,n.jsx)(a,{id:"field",title:"Field",children:(0,n.jsx)(i.p,{children:"Field (or attribute) is a single datapoint describing one of offer's property like price, name, size etc."})}),"\n",(0,n.jsx)(a,{id:"price",title:"Price",children:(0,n.jsx)(i.p,{children:"Price is the cost of the product including VAT."})}),"\n",(0,n.jsx)(i.h2,{id:"ingestion",children:"Ingestion"}),"\n",(0,n.jsx)(a,{id:"nested",title:"Nested",children:(0,n.jsxs)(i.p,{children:["Fields like ",(0,n.jsx)(l.Ay,{name:"shipping",dir:"offer"})," have more complex structure to accommodate all data required to describe them. In this case field contain internal fields that's why it's referred as nested field (or attribute)."]})}),"\n",(0,n.jsx)(a,{id:"repeatable",title:"Repeatable",children:(0,n.jsx)(i.p,{children:"In some cases it's possible to repeat the same field for a single product. Each field has this defined along with maximum number of repetitions."})}),"\n",(0,n.jsx)(a,{id:"agent",title:"Agent",children:(0,n.jsx)(i.p,{children:"Agent is internal prisjakt service that integrates the data with Prisjakt comparison engine."})}),"\n",(0,n.jsx)(a,{id:"validation_rule",title:"Validation  Rule",children:(0,n.jsx)(i.p,{children:"Validation rule defines what type of offers are accepted by Prisjakt Agent."})}),"\n",(0,n.jsx)(a,{id:"ingestion_run",title:"Ingestion Run",children:(0,n.jsx)(i.p,{children:"Ingestion run is an event when Prisjakt's Agent processes the data."})}),"\n",(0,n.jsx)(a,{id:"severity",title:"Severity",children:(0,n.jsxs)(i.p,{children:["Please see ",(0,n.jsx)(i.a,{href:"/reference/validation-severity-levels",children:"validation severity levels"})]})}),"\n",(0,n.jsx)(i.h2,{id:"technical",children:"Technical"}),"\n",(0,n.jsx)(a,{id:"case_sensitive",title:"Case Sensitive",children:(0,n.jsx)(i.p,{children:"When a comparison between strings consider capital vs small letters to be not equal."})})]})}function j(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},18175:(e,i,t)=>{t.d(i,{A:()=>s});t(96540);var n=t(28774),r=t(74848);function s(e){let{id:i,title:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{id:i}),(0,r.jsx)("a",{class:"anchor",children:t}),(0,r.jsx)("a",{class:"hash-link",href:"#"+i,title:"Direct link"})]})}}}]);