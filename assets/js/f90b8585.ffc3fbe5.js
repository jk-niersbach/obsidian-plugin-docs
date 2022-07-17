"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[142],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},d="Workspace",p={unversionedId:"api/classes/Workspace",id:"api/classes/Workspace",isDocsHomePage:!1,title:"Workspace",description:"Extends Events",source:"@site/docs/api/classes/Workspace.md",sourceDirName:"api/classes",slug:"/api/classes/Workspace",permalink:"/obsidian-plugin-docs/api/classes/Workspace",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/Workspace.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"View",permalink:"/obsidian-plugin-docs/api/classes/View"},next:{title:"WorkspaceContainer",permalink:"/obsidian-plugin-docs/api/classes/WorkspaceContainer"}},s=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"leftSplit",id:"leftsplit",children:[]},{value:"rightSplit",id:"rightsplit",children:[]},{value:"leftRibbon",id:"leftribbon",children:[]},{value:"rightRibbon",id:"rightribbon",children:[]},{value:"rootSplit",id:"rootsplit",children:[]},{value:"activeLeaf",id:"activeleaf",children:[]},{value:"containerEl",id:"containerel",children:[]},{value:"layoutReady",id:"layoutready",children:[]},{value:"requestSaveLayout",id:"requestsavelayout",children:[]},{value:"requestSaveHistory",id:"requestsavehistory",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onLayoutReady",id:"onlayoutready",children:[]},{value:"changeLayout",id:"changelayout",children:[]},{value:"getLayout",id:"getlayout",children:[]},{value:"createLeafInParent",id:"createleafinparent",children:[]},{value:"splitLeaf",id:"splitleaf",children:[]},{value:"createLeafBySplit",id:"createleafbysplit",children:[]},{value:"splitActiveLeaf",id:"splitactiveleaf",children:[]},{value:"duplicateLeaf",id:"duplicateleaf",children:[]},{value:"getUnpinnedLeaf",id:"getunpinnedleaf",children:[]},{value:"getLeaf",id:"getleaf",children:[]},{value:"moveLeafToPopout",id:"moveleaftopopout",children:[]},{value:"openPopoutLeaf",id:"openpopoutleaf",children:[]},{value:"openLinkText",id:"openlinktext",children:[]},{value:"setActiveLeaf",id:"setactiveleaf",children:[]},{value:"getLeafById",id:"getleafbyid",children:[]},{value:"getGroupLeaves",id:"getgroupleaves",children:[]},{value:"getMostRecentLeaf",id:"getmostrecentleaf",children:[]},{value:"getLeftLeaf",id:"getleftleaf",children:[]},{value:"getRightLeaf",id:"getrightleaf",children:[]},{value:"getActiveViewOfType",id:"getactiveviewoftype",children:[]},{value:"getActiveFile",id:"getactivefile",children:[]},{value:"iterateRootLeaves",id:"iteraterootleaves",children:[]},{value:"iterateAllLeaves",id:"iterateallleaves",children:[]},{value:"getLeavesOfType",id:"getleavesoftype",children:[]},{value:"detachLeavesOfType",id:"detachleavesoftype",children:[]},{value:"revealLeaf",id:"revealleaf",children:[]},{value:"getLastOpenFiles",id:"getlastopenfiles",children:[]},{value:"updateOptions",id:"updateoptions",children:[]},{value:"iterateCodeMirrors",id:"iteratecodemirrors",children:[]},{value:"on",id:"on",children:[]},{value:"on",id:"on-1",children:[]},{value:"on",id:"on-2",children:[]},{value:"on",id:"on-3",children:[]},{value:"on",id:"on-4",children:[]},{value:"on",id:"on-5",children:[]},{value:"on",id:"on-6",children:[]},{value:"on",id:"on-7",children:[]},{value:"on",id:"on-8",children:[]},{value:"on",id:"on-9",children:[]},{value:"on",id:"on-10",children:[]},{value:"on",id:"on-11",children:[]},{value:"on",id:"on-12",children:[]},{value:"on",id:"on-13",children:[]},{value:"on",id:"on-14",children:[]},{value:"on",id:"on-15",children:[]}]}],h={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"workspace"},"Workspace"),(0,i.kt)("p",null,"Extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Events")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"leftsplit"},"leftSplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"leftSplit: WorkspaceSidedock | WorkspaceMobileDrawer\n")),(0,i.kt)("h3",{id:"rightsplit"},"rightSplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"rightSplit: WorkspaceSidedock | WorkspaceMobileDrawer\n")),(0,i.kt)("h3",{id:"leftribbon"},"leftRibbon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"leftRibbon: WorkspaceRibbon\n")),(0,i.kt)("h3",{id:"rightribbon"},"rightRibbon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"rightRibbon: WorkspaceRibbon\n")),(0,i.kt)("h3",{id:"rootsplit"},"rootSplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"rootSplit: WorkspaceRoot\n")),(0,i.kt)("h3",{id:"activeleaf"},"activeLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"activeLeaf: WorkspaceLeaf\n")),(0,i.kt)("p",null,"Indicates the currently focused leaf, if one exists."),(0,i.kt)("p",null,"Please avoid using ",(0,i.kt)("inlineCode",{parentName:"p"},"activeLeaf")," directly, especially without checking whether\n",(0,i.kt)("inlineCode",{parentName:"p"},"activeLeaf")," is null."),(0,i.kt)("p",null,"The recommended alternatives are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need information about the current view, use {@link getActiveViewOfType}."),(0,i.kt)("li",{parentName:"ul"},"If you need to open a new file or navigate a view, use {@link getLeaf}.")),(0,i.kt)("h3",{id:"containerel"},"containerEl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"containerEl: HTMLElement\n")),(0,i.kt)("h3",{id:"layoutready"},"layoutReady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"layoutReady: boolean\n")),(0,i.kt)("h3",{id:"requestsavelayout"},"requestSaveLayout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"requestSaveLayout: () => void\n")),(0,i.kt)("h3",{id:"requestsavehistory"},"requestSaveHistory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"requestSaveHistory: () => void\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"onlayoutready"},"onLayoutReady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"onLayoutReady(callback: () => any): void;\n")),(0,i.kt)("p",null,"Runs the callback function right away if layout is already ready,\nor push it to a queue to be called later when layout is ready."),(0,i.kt)("h3",{id:"changelayout"},"changeLayout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"changeLayout(workspace: any): Promise<void>;\n")),(0,i.kt)("h3",{id:"getlayout"},"getLayout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLayout(): any;\n")),(0,i.kt)("h3",{id:"createleafinparent"},"createLeafInParent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"splitleaf"},"splitLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"splitLeaf(source: WorkspaceItem, newLeaf: WorkspaceItem, direction?: SplitDirection, before?: boolean): void;\n")),(0,i.kt)("h3",{id:"createleafbysplit"},"createLeafBySplit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"splitactiveleaf"},"splitActiveLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"duplicateleaf"},"duplicateLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<WorkspaceLeaf>;\n")),(0,i.kt)("h3",{id:"getunpinnedleaf"},"getUnpinnedLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getUnpinnedLeaf(type?: string): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"getleaf"},"getLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLeaf(newLeaf?: boolean, direction?: SplitDirection): WorkspaceLeaf;\n")),(0,i.kt)("p",null,"Returns a leaf that can be used for navigation."),(0,i.kt)("p",null,"If newLeaf is true, then a new leaf will be created in a preferred location within\nthe root split and returned."),(0,i.kt)("p",null,"If newLeaf is false (or not set), then an existing leaf which can be navigated will be returned,\nor a new leaf will be created if there was no leaf available."),(0,i.kt)("h3",{id:"moveleaftopopout"},"moveLeafToPopout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"moveLeafToPopout(leaf: WorkspaceLeaf, data?: WorkspaceWindowInitData): WorkspaceWindow;\n")),(0,i.kt)("p",null,"Migrates this leaf to a new popout window.\nOnly works on the desktop app."),(0,i.kt)("h3",{id:"openpopoutleaf"},"openPopoutLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"openPopoutLeaf(data?: WorkspaceWindowInitData): WorkspaceLeaf;\n")),(0,i.kt)("p",null,"Open a new popout window with a single new leaf and return that leaf.\nOnly works on the desktop app."),(0,i.kt)("h3",{id:"openlinktext"},"openLinkText"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"openLinkText(linktext: string, sourcePath: string, newLeaf?: boolean, openViewState?: OpenViewState): Promise<void>;\n")),(0,i.kt)("h3",{id:"setactiveleaf"},"setActiveLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setActiveLeaf(leaf: WorkspaceLeaf, pushHistory?: boolean, focus?: boolean): void;\n")),(0,i.kt)("p",null,"Sets the active leaf"),(0,i.kt)("h3",{id:"getleafbyid"},"getLeafById"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLeafById(id: string): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"getgroupleaves"},"getGroupLeaves"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getGroupLeaves(group: string): WorkspaceLeaf[];\n")),(0,i.kt)("h3",{id:"getmostrecentleaf"},"getMostRecentLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getMostRecentLeaf(root?: WorkspaceParent): WorkspaceLeaf | null;\n")),(0,i.kt)("h3",{id:"getleftleaf"},"getLeftLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLeftLeaf(split: boolean): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"getrightleaf"},"getRightLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getRightLeaf(split: boolean): WorkspaceLeaf;\n")),(0,i.kt)("h3",{id:"getactiveviewoftype"},"getActiveViewOfType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getActiveViewOfType<T extends View>(type: Constructor<T>): T | null;\n")),(0,i.kt)("h3",{id:"getactivefile"},"getActiveFile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getActiveFile(): TFile | null;\n")),(0,i.kt)("p",null,"Returns the file for the current view if it's a FileView."),(0,i.kt)("p",null,"Otherwise, it will recent the most recently active file."),(0,i.kt)("h3",{id:"iteraterootleaves"},"iterateRootLeaves"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;\n")),(0,i.kt)("p",null,"Iterate through all leaves in the main area of the workspace."),(0,i.kt)("h3",{id:"iterateallleaves"},"iterateAllLeaves"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;\n")),(0,i.kt)("p",null,"Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves."),(0,i.kt)("h3",{id:"getleavesoftype"},"getLeavesOfType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLeavesOfType(viewType: string): WorkspaceLeaf[];\n")),(0,i.kt)("h3",{id:"detachleavesoftype"},"detachLeavesOfType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"detachLeavesOfType(viewType: string): void;\n")),(0,i.kt)("h3",{id:"revealleaf"},"revealLeaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"revealLeaf(leaf: WorkspaceLeaf): void;\n")),(0,i.kt)("h3",{id:"getlastopenfiles"},"getLastOpenFiles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getLastOpenFiles(): string[];\n")),(0,i.kt)("h3",{id:"updateoptions"},"updateOptions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"updateOptions(): void;\n")),(0,i.kt)("p",null,"Calling this function will update/reconfigure the options of all markdown panes.\nIt is fairly expensive, so it should not be called frequently."),(0,i.kt)("h3",{id:"iteratecodemirrors"},"iterateCodeMirrors"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"iterateCodeMirrors(callback: (cm: CodeMirror.Editor) => any): void;\n")),(0,i.kt)("h3",{id:"on"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-1"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'resize', callback: () => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-2"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'click', callback: (evt: MouseEvent) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-3"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-4"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-5"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-6"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-7"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-8"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'css-change', callback: () => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-9"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-10"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, view: MarkdownView) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-11"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-change', callback: (editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-12"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-13"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, markdownView: MarkdownView) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-14"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'codemirror', callback: (cm: CodeMirror.Editor) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."),(0,i.kt)("h3",{id:"on-15"},"on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;\n")),(0,i.kt)("p",null,"Triggered when the CSS of the app has changed.\nTriggered when the user opens the context menu on a file.\nTriggered when the user opens the context menu on an editor.\nTriggered when changes to an editor has been applied, either programmatically or from a user event.\nTriggered when the editor receives a paste event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the editor receives a drop event.\nCheck for ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.defaultPrevented")," before attempting to handle this event, and return if it has been already handled.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"evt.preventDefault()")," to indicate that you've handled the event.\nTriggered when the app is about to quit. Not guaranteed to actually run.\nPerform some best effort cleanup here."))}c.isMDXComponent=!0}}]);