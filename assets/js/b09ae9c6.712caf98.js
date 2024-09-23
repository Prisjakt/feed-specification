"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[5098],{9588:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var n=t(4848),s=t(8453);const l={sidebar_position:2},d="Validation Severity Levels",r={id:"reference/validation-severity-levels",title:"Validation Severity Levels",description:"Offers",source:"@site/docs/reference/validation-severity-levels.md",sourceDirName:"reference",slug:"/reference/validation-severity-levels",permalink:"/reference/validation-severity-levels",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/reference/validation-severity-levels.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/reference/terminology"},next:{title:"General Exceptions",permalink:"/reference/general-exceptions"}},o={},a=[{value:"Offers",id:"offers",level:2},{value:"Fields",id:"fields",level:2},{value:"Nested Fields",id:"nested-fields",level:3},{value:"Optional Fields and Severity Levels",id:"optional-fields-and-severity-levels",level:3}];function c(e){const i={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"validation-severity-levels",children:"Validation Severity Levels"})}),"\n",(0,n.jsx)(i.h2,{id:"offers",children:"Offers"}),"\n",(0,n.jsx)(i.p,{children:"And offer as whole may be in the following states"}),"\n",(0,n.jsx)(i.admonition,{title:"Accepted",type:"tip",children:(0,n.jsxs)(i.p,{children:["All ",(0,n.jsx)(i.em,{children:"supplied"})," fields are valid."]})}),"\n",(0,n.jsx)(i.admonition,{title:"Skipped",type:"info",children:(0,n.jsx)(i.p,{children:"We can filter offers based on some criteria. Eg. skipping vendors known to be malicious, or categories not used by Prisjakt."})}),"\n",(0,n.jsx)(i.admonition,{title:"Partially Accepted",type:"caution",children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"offer"})," was accepted but ",(0,n.jsx)(i.em,{children:"some"})," fields were omitted due to them being invalid. The\neffect of an omitted field is different depending on which field it is."]})}),"\n",(0,n.jsx)(i.admonition,{title:"Rejected",type:"danger",children:(0,n.jsxs)(i.p,{children:["We have a minimal set of required fields in order to show an offer on Prisjakt. If a required field\nis missing, the ",(0,n.jsx)(i.strong,{children:"whole"})," offer will be omitted from Prisjakt."]})}),"\n",(0,n.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(i.p,{children:["A field is either valid, invalid or omitted. Invalid field data is always ",(0,n.jsx)(i.strong,{children:"omitted"})," when entering Prisjakt's datastore."]}),"\n",(0,n.jsx)(i.admonition,{title:"Valid",type:"tip",children:(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.em,{children:"field"})," is valid if it fulfills the validation rules of the field."]})}),"\n",(0,n.jsx)(i.admonition,{title:"Invalid",type:"danger",children:(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.em,{children:"field"})," is invalid if it does not fulfills the validation rules of the field."]})}),"\n",(0,n.jsx)(i.admonition,{title:"Omitted",type:"tip",children:(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.em,{children:"field"})," is omitted if it is not present in offer or it is empty."]})}),"\n",(0,n.jsx)(i.h3,{id:"nested-fields",children:"Nested Fields"}),"\n",(0,n.jsx)(i.p,{children:"Nested fields and lists may contain partially correct information, a nested field as whole:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["is considered ",(0,n.jsx)(i.em,{children:"valid"})," if it fulfills the minimum requirements of the field as given by the validation rules"]}),"\n",(0,n.jsxs)(i.li,{children:["is considered ",(0,n.jsx)(i.em,{children:"invalid"})," if it does not fulfill the minimum requirements of the field as given by the validation rules"]}),"\n",(0,n.jsxs)(i.li,{children:["is considered ",(0,n.jsx)(i.em,{children:"omitted"})," if it is not present or it is empty"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"optional-fields-and-severity-levels",children:"Optional Fields and Severity Levels"}),"\n",(0,n.jsx)(i.p,{children:"An optional field may still be valid or invalid. If an optional field is submitted but the value is invalid, it will\nbe noted in the validation report and the value would be omitted. It would have the same effect as not sending the offer\nat all."})]})}function f(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>r});var n=t(6540);const s={},l=n.createContext(s);function d(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);