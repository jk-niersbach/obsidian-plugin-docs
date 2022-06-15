"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[424],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62753:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_position:20},s="Anatomy of a plugin",c={unversionedId:"concepts/plugin-anatomy",id:"concepts/plugin-anatomy",isDocsHomePage:!1,title:"Anatomy of a plugin",description:"The Plugin class defines the lifecycle of a plugin and exposes the operations available to all plugins:",source:"@site/docs/concepts/plugin-anatomy.md",sourceDirName:"concepts",slug:"/concepts/plugin-anatomy",permalink:"/obsidian-plugin-docs/concepts/plugin-anatomy",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/concepts/plugin-anatomy.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"docs",previous:{title:"Development workflow",permalink:"/obsidian-plugin-docs/getting-started/development-workflow"},next:{title:"CodeMirror",permalink:"/obsidian-plugin-docs/concepts/codemirror"}},u=[{value:"Plugin lifecycle",id:"plugin-lifecycle",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anatomy-of-a-plugin"},"Anatomy of a plugin"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2"},(0,i.kt)("inlineCode",{parentName:"a"},"Plugin"))," class defines the lifecycle of a plugin and exposes the operations available to all plugins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{1,3} title="main.ts"',"{1,3}":!0,title:'"main.ts"'},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    // Configure resources needed by the plugin.\n  }\n  async onunload() {\n    // Release any resources configured by the plugin.\n  }\n}\n')),(0,i.kt)("h2",{id:"plugin-lifecycle"},"Plugin lifecycle"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Component#onload"},(0,i.kt)("inlineCode",{parentName:"a"},"onload()"))," runs whenever Obsidian the user starts using the plugin. This is where you'll configure most of the plugin's capabilities."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Component#onunload"},(0,i.kt)("inlineCode",{parentName:"a"},"onunload()"))," runs when the plugin is disabled. Any resources that your plugin is using must be released here to avoid affecting the performance of Obsidian after your plugin has been disabled."),(0,i.kt)("p",null,"To better understand when these methods are called, you can print a message to the console whenever the plugin loads and unloads. The console is a valuable tool that lets developers monitor the status of their code. "),(0,i.kt)("p",null,"To view the console:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Toggle the Developer Tools by pressing Ctrl+Shift+I in Windows and Linux, or Cmd-Option-I on macOS. "),(0,i.kt)("li",{parentName:"ol"},"Click on the Console tab in the Developer Tools window. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5,8} title="main.ts"',"{5,8}":!0,title:'"main.ts"'},"import { Plugin } from \"obsidian\";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    console.log('loading plugin')\n  }\n  async onunload() {\n    console.log('unloading plugin')\n  }\n}\n")))}d.isMDXComponent=!0}}]);