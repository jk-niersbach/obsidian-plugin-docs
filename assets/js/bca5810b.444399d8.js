"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[5922],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:75},s="HTML elements",c={unversionedId:"guides/html-elements",id:"guides/html-elements",isDocsHomePage:!1,title:"HTML elements",description:"Several components in the Obsidian API, such as the settings tab, expose container elements:",source:"@site/docs/guides/html-elements.md",sourceDirName:"guides",slug:"/guides/html-elements",permalink:"/obsidian-plugin-docs/guides/html-elements",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/html-elements.md",tags:[],version:"current",sidebarPosition:75,frontMatter:{sidebar_position:75},sidebar:"docs",previous:{title:"Custom views",permalink:"/obsidian-plugin-docs/guides/custom-views"},next:{title:"React",permalink:"/obsidian-plugin-docs/guides/react"}},p=[{value:"Create HTML elements using <code>createEl()</code>",id:"create-html-elements-using-createel",children:[]},{value:"Style your elements",id:"style-your-elements",children:[{value:"Conditional styles",id:"conditional-styles",children:[]}]}],u={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"html-elements"},"HTML elements"),(0,o.kt)("p",null,"Several components in the Obsidian API, such as the ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/settings"},"settings tab"),", expose ",(0,o.kt)("em",{parentName:"p"},"container elements"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{12}","{12}":!0},'import { App, PluginSettingTab } from "obsidian";\n\nclass ExampleSettingTab extends PluginSettingTab {\n  plugin: ExamplePlugin;\n\n  constructor(app: App, plugin: ExamplePlugin) {\n    super(app, plugin);\n    this.plugin = plugin;\n  }\n\n  display(): void {\n    let { containerEl } = this;\n\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"Container elements are ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement")," objects that make it possible to create custom interfaces within Obsidian."),(0,o.kt)("h2",{id:"create-html-elements-using-createel"},"Create HTML elements using ",(0,o.kt)("inlineCode",{parentName:"h2"},"createEl()")),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", including the container element, exposes a ",(0,o.kt)("inlineCode",{parentName:"p"},"createEl()")," method that creates an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement")," under the original element."),(0,o.kt)("p",null,"For example, here's how you can add an ",(0,o.kt)("inlineCode",{parentName:"p"},"<h1>")," heading element inside the container element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'containerEl.createEl("h1", { text: "Heading 1" });\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createEl()")," returns a reference to the new element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const book = containerEl.createEl("div");\nbook.createEl("div", { text: "How to Take Smart Notes" });\nbook.createEl("small", { text: "S\xf6nke Ahrens" });\n')),(0,o.kt)("h2",{id:"style-your-elements"},"Style your elements"),(0,o.kt)("p",null,"You can add custom CSS styles to your plugin by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file in the plugin root directory. To add some styles for the previous book example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.css"',title:'"styles.css"'},".book {\n  border: 1px solid var(--background-modifier-border);\n  padding: 10px;\n}\n\n.book__title {\n  font-weight: 600;\n}\n\n.book__author {\n  color: var(--text-muted);\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--background-modifier-border")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--text-muted")," are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables")," that are defined and used by Obsidian itself. If you use these variables for your styles, your plugin will look great even if the user has a different theme! \ud83c\udf08"))),(0,o.kt)("p",null,"To make the HTML elements use the styles, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"cls")," property for the HTML element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const book = containerEl.createEl("div", { cls: "book" });\nbook.createEl("div", { text: "How to Take Smart Notes", cls: "book__title" });\nbook.createEl("small", { text: "S\xf6nke Ahrens", cls: "book__author" });\n')),(0,o.kt)("p",null,"Now it looks much better! \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Styled book item",src:n(93304).Z})),(0,o.kt)("h3",{id:"conditional-styles"},"Conditional styles"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"toggleClass")," method if you want to change the style of an element based on the user's settings or other values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'element.toggleClass("danger", status === "error");\n')))}m.isMDXComponent=!0},93304:function(e,t,n){t.Z=n.p+"assets/images/styles-ff62ac028b2089408fab448d00e3b431.png"}}]);