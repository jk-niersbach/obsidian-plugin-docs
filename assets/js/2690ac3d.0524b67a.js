"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={},s="Menu",i={unversionedId:"api/classes/Menu",id:"api/classes/Menu",title:"Menu",description:"Extends Component",source:"@site/docs/api/classes/Menu.md",sourceDirName:"api/classes",slug:"/api/classes/Menu",permalink:"/obsidian-plugin-docs/api/classes/Menu",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Menu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MarkdownView",permalink:"/obsidian-plugin-docs/api/classes/MarkdownView"},next:{title:"MenuItem",permalink:"/obsidian-plugin-docs/api/classes/MenuItem"}},l={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"setNoIcon",id:"setnoicon",level:3},{value:"addItem",id:"additem",level:3},{value:"addSeparator",id:"addseparator",level:3},{value:"showAtMouseEvent",id:"showatmouseevent",level:3},{value:"showAtPosition",id:"showatposition",level:3},{value:"hide",id:"hide",level:3},{value:"onHide",id:"onhide",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"menu"},"Menu"),(0,a.kt)("p",null,"Extends ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setnoicon"},"setNoIcon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setNoIcon(): this;\n")),(0,a.kt)("h3",{id:"additem"},"addItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"addItem(cb: (item: MenuItem) => any): this;\n")),(0,a.kt)("h3",{id:"addseparator"},"addSeparator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"addSeparator(): this;\n")),(0,a.kt)("h3",{id:"showatmouseevent"},"showAtMouseEvent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"showAtMouseEvent(evt: MouseEvent): this;\n")),(0,a.kt)("h3",{id:"showatposition"},"showAtPosition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"showAtPosition(position: Point, doc?: Document): this;\n")),(0,a.kt)("h3",{id:"hide"},"hide"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"hide(): this;\n")),(0,a.kt)("h3",{id:"onhide"},"onHide"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"onHide(callback: () => any): void;\n")))}u.isMDXComponent=!0}}]);