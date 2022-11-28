"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=l,d=m["".concat(o,".").concat(g)]||m[g]||p[g]||r;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),l=n(7294),r=n(6010),s=n(2389),i=n(7392),o=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:g,groupId:d,className:f}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=g??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:h}=(0,o.U)(),[x,w]=(0,l.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=N[d];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==x&&(T(t),w(a),null!=d&&h(d,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},k.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:_},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,l.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function g(e){const t=(0,s.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},2428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),s=n(5162);const i={},o=void 0,c={unversionedId:"fields/types/gtin_valid_examples",id:"fields/types/gtin_valid_examples",title:"gtin_valid_examples",description:"Click to show more valid examples",source:"@site/docs/fields/types/gtin_valid_examples.mdx",sourceDirName:"fields/types",slug:"/fields/types/gtin_valid_examples",permalink:"/docs/fields/types/gtin_valid_examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/fields/types/gtin_valid_examples.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gtin",permalink:"/docs/fields/types/gtin"},next:{title:"image_link",permalink:"/docs/fields/types/image_link"}},u={},p=[],m={toc:p};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"xml",label:"XML",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>90311017</g:gtin>                                \n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin></g:gtin>                                        \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>036282818705</g:gtin>                            \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806088269696</g:gtin>                           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin> -</g:gtin>                                      \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>9031-1017</g:gtin>                               \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>0362 8281-8705</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>8806-08826 9696</g:gtin>                         \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>                          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<g:gtin>10614141000415</g:gtin>\n<g:gtin>90311017</g:gtin>\n"))))),(0,l.kt)(s.Z,{value:"csv",label:"CSV",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n90311017                 \n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to show more valid examples"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n""                       \n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n036282818705             \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806088269696            \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n -                       \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n9031-1017                \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n0362 8281-8705           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n8806-08826 9696          \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"gtin\n10614141000415           \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'gtin\n"10614141000415,90311017"\n')))))))}g.isMDXComponent=!0}}]);