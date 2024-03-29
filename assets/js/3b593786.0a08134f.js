"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[1690],{7859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(4848),o=t(8453);const s={sidebar_position:1},i="Web Server Configuration",a={id:"infrastructure/web-server-configuration",title:"Web Server Configuration",description:"For optimal results it is preferable if you host your feeds with the support for the following features and configuration, please see your web server/cloud provider documentation of how to set them up.",source:"@site/docs/infrastructure/web-server-configuration.md",sourceDirName:"infrastructure",slug:"/infrastructure/web-server-configuration",permalink:"/infrastructure/web-server-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/infrastructure/web-server-configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Infrastructure",permalink:"/infrastructure/"},next:{title:"Transport Protocols",permalink:"/infrastructure/protocols/"}},d={},l=[{value:"Features",id:"features",level:2},{value:"Feed Generation",id:"feed-generation",level:2},{value:"Do",id:"do",level:3},{value:"Controlled Generation",id:"controlled-generation",level:4},{value:"Atomic Updates",id:"atomic-updates",level:4},{value:"Do Not",id:"do-not",level:3},{value:"Non Public Feeds",id:"non-public-feeds",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"web-server-configuration",children:"Web Server Configuration"}),"\n",(0,r.jsx)(n.p,{children:"For optimal results it is preferable if you host your feeds with the support for the following features and configuration, please see your web server/cloud provider documentation of how to set them up."}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Use ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/HTTP_compression",children:"gzip compression"})," or ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Brotli",children:"brotli compression"})," and send a correct compression header"]}),", this will reduce the amount of data sent and improve handling time as well"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ensure that you ",(0,r.jsxs)(n.strong,{children:["send a correct ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length",children:"content-length"})," header"]}),", this makes it easier for us to ensure that we have ingested your whole feed and not gotten aborted by any network issues or anything similar, our retry policies will also behave better"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disable bot protection"})," for our ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",children:"user agent"}),": ",(0,r.jsx)(n.code,{children:"feed-ingestion-service"}),", some bot protection systems will cause issues for us when we read your feed. If possible, then allow requests from our user agent to come through"]}),"\n",(0,r.jsx)(n.admonition,{title:"We use dynamically assigned ip\xb4s",type:"info",children:(0,r.jsx)(n.p,{children:"We do not support a configuration where you disable bot protection for specific ip addresses. Our agents are cloud based and spin up and change after load, hence they get dynamically assigned ip addresses that vary."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Send a proper ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag",children:"etag"})," header"]})," this will save both us and you work and costs of data transfer since we can then detect if there is any changes to your feed or not without having to download it"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.strong,{children:"https"})," with a valid certificate as transport protocol"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Allow resuming downloads"})," of files by supporting the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges",children:"accept-ranges"})," header"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"feed-generation",children:"Feed Generation"}),"\n",(0,r.jsx)(n.h3,{id:"do",children:"Do"}),"\n",(0,r.jsx)(n.h4,{id:"controlled-generation",children:"Controlled Generation"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend that you generate the files on your backend in a matter ",(0,r.jsx)(n.strong,{children:"you control"}),", either scheduled or upon changes to your data. Then host the resulting files via your server for us to fetch."]}),"\n",(0,r.jsx)(n.h4,{id:"atomic-updates",children:"Atomic Updates"}),"\n",(0,r.jsxs)(n.p,{children:["You should update your feed in an atomic operation. This means you ",(0,r.jsx)(n.em,{children:"should not overwrite your current feed while your are generating"})," as there is a small chance that we are currently reading it. You should ",(0,r.jsx)(n.strong,{children:"generate to a new file and then switch them out"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Do this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"feed.xml\ngenerate new feed to .new_feed.xml\nmv -f .new_feed.xml feed.xml # atomic operation\n"})}),"\n",(0,r.jsx)(n.p,{children:"instead of"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"feed.xml\ngenerate new feed to feed.xml\n"})}),"\n",(0,r.jsx)(n.p,{children:"the latter can cause problems as seen here"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Atomic Update Fail",src:t(2954).A+"",width:"1802",height:"205"})}),"\n",(0,r.jsx)(n.h3,{id:"do-not",children:"Do Not"}),"\n",(0,r.jsxs)(n.p,{children:["We ",(0,r.jsx)(n.strong,{children:"do not"})," recommend that you dynamically generate your feed on a per request basis."]}),"\n",(0,r.jsx)(n.p,{children:"The reasons for this is that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Over time your inventory might grow and this generation time increases"}),"\n",(0,r.jsx)(n.li,{children:"Your system will vurnerable to DDoS attacks since it would be easy to send multiple requests to this feed generation URL"}),"\n",(0,r.jsxs)(n.li,{children:["We have a timeout of ",(0,r.jsx)(n.code,{children:"120s"}),", if we do not recieve the first byte within this time period, we will abort the attempt"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"non-public-feeds",children:"Non Public Feeds"}),"\n",(0,r.jsxs)(n.p,{children:["If you wan\xb4t to avoid to publish your feeds public we do support various ",(0,r.jsx)(n.a,{href:"/infrastructure/auth",children:"authentication methods"})," in order to protect your feeds."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2954:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/atomic-update-fail-0f0f3ea96328385ac47c3657bd841590.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);