"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={},o="View",i={unversionedId:"api/classes/View",id:"api/classes/View",title:"View",description:"Extends Component",source:"@site/docs/api/classes/View.md",sourceDirName:"api/classes",slug:"/api/classes/View",permalink:"/obsidian-plugin-docs/api/classes/View",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/View.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Vault",permalink:"/obsidian-plugin-docs/api/classes/Vault"},next:{title:"Workspace",permalink:"/obsidian-plugin-docs/api/classes/Workspace"}},s={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"app",id:"app",level:3},{value:"icon",id:"icon",level:3},{value:"navigation",id:"navigation",level:3},{value:"leaf",id:"leaf",level:3},{value:"containerEl",id:"containerel",level:3},{value:"Methods",id:"methods",level:2},{value:"onOpen",id:"onopen",level:3},{value:"onClose",id:"onclose",level:3},{value:"getViewType",id:"getviewtype",level:3},{value:"getState",id:"getstate",level:3},{value:"setState",id:"setstate",level:3},{value:"getEphemeralState",id:"getephemeralstate",level:3},{value:"setEphemeralState",id:"setephemeralstate",level:3},{value:"getIcon",id:"geticon",level:3},{value:"onResize",id:"onresize",level:3},{value:"getDisplayText",id:"getdisplaytext",level:3},{value:"onPaneMenu",id:"onpanemenu",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"view"},"View"),(0,r.kt)("p",null,"Extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(leaf: WorkspaceLeaf);\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"app"},"app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"app: App\n")),(0,r.kt)("h3",{id:"icon"},"icon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"icon: string\n")),(0,r.kt)("h3",{id:"navigation"},"navigation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"navigation: boolean\n")),(0,r.kt)("p",null,"Whether or not the view is intended for navigation.\nIf your view is a static view that is not intended to be navigated away, set this to false.\n(For example: File explorer, calendar, etc.)\nIf your view opens a file or can be otherwise navigated, set this to true.\n(For example: Markdown editor view, Kanban view, PDF view, etc.)"),(0,r.kt)("h3",{id:"leaf"},"leaf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"leaf: WorkspaceLeaf\n")),(0,r.kt)("h3",{id:"containerel"},"containerEl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"containerEl: HTMLElement\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"onopen"},"onOpen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"protected onOpen(): Promise<void>;\n")),(0,r.kt)("h3",{id:"onclose"},"onClose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"protected onClose(): Promise<void>;\n")),(0,r.kt)("h3",{id:"getviewtype"},"getViewType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getViewType(): string;\n")),(0,r.kt)("h3",{id:"getstate"},"getState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getState(): any;\n")),(0,r.kt)("h3",{id:"setstate"},"setState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setState(state: any, result: ViewStateResult): Promise<void>;\n")),(0,r.kt)("h3",{id:"getephemeralstate"},"getEphemeralState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getEphemeralState(): any;\n")),(0,r.kt)("h3",{id:"setephemeralstate"},"setEphemeralState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setEphemeralState(state: any): void;\n")),(0,r.kt)("h3",{id:"geticon"},"getIcon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getIcon(): string;\n")),(0,r.kt)("h3",{id:"onresize"},"onResize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onResize(): void;\n")),(0,r.kt)("p",null,"Called when the size of this view is changed."),(0,r.kt)("h3",{id:"getdisplaytext"},"getDisplayText"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"abstract getDisplayText(): string;\n")),(0,r.kt)("h3",{id:"onpanemenu"},"onPaneMenu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"onPaneMenu(menu: Menu, source: 'more-options' | 'tab-header' | string): void;\n")),(0,r.kt)("p",null,"Populates the pane menu."),(0,r.kt)("p",null,"(Replaces the previously removed ",(0,r.kt)("inlineCode",{parentName:"p"},"onHeaderMenu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onMoreOptionsMenu"),")"))}u.isMDXComponent=!0}}]);