"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(a),c=r,m=k["".concat(i,".").concat(c)]||k[c]||u[c]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[k]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},o="Install MetaMask Flask",l={unversionedId:"get-started/install-flask",id:"get-started/install-flask",title:"Install MetaMask Flask",description:"Install MetaMask Flask to start building your own Snaps.",source:"@site/snaps/get-started/install-flask.md",sourceDirName:"get-started",slug:"/get-started/install-flask",permalink:"/better-flask-onboarding/snaps/get-started/install-flask",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/install-flask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Install MetaMask Flask to start building your own Snaps.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Get started",permalink:"/better-flask-onboarding/snaps/get-started"},next:{title:"Snaps quickstart",permalink:"/better-flask-onboarding/snaps/get-started/quickstart"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the MetaMask Flask browser extension",id:"install-the-metamask-flask-browser-extension",level:2}],d={toc:p},k="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-metamask-flask"},"Install MetaMask Flask"),(0,r.kt)("p",null,"To get started building your own Snaps, you must install the MetaMask Flask browser extension."),(0,r.kt)("admonition",{title:"Developers only",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Flask is an experimental tool only for developers.\nIf you are not a developer, you should not install MetaMask Flask. ")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Up-to-date Chromium or Firefox browser")),(0,r.kt)("h2",{id:"install-the-metamask-flask-browser-extension"},"Install the MetaMask Flask browser extension"),(0,r.kt)("p",null,"MetaMask Flask is an experimental playground that provides developers access to upcoming MetaMask features.\nIt is available as a browser extension.\nYou can install MetaMask Flask for\n",(0,r.kt)("a",{parentName:"p",href:"https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"},"Google Chrome"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/metamask-flask/"},"Mozilla Firefox"),"."),(0,r.kt)("p",null,'While a small set of audited Snaps are allowlisted in the stable version of the MetaMask browser extension, MetaMask Flask is intended for developers building and testing Snaps locally or from npm.\nAlso, new Snaps API features are enabled in Flask for testing and developer feedback before they\'re enabled in MetaMask stable.\nThese features appear in the documentation with the "Flask only" tag.\nYou can also view Flask-specific features by looking for the ',"[","FLASK","]"," label in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-extension/blob/develop/CHANGELOG.md"},"MetaMask Extension CHANGELOG"),". "),(0,r.kt)("admonition",{title:"Install in a new browser profile",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Install the Metamask Flask browser extension in a new browser profile, or disable any existing installed versions of MetaMask before installing Flask.\nRunning multiple instances of MetaMask in the same browser profile breaks dapp interactions.")),(0,r.kt)("admonition",{title:"Do not import accounts with funds to Flask ",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended to import your SRP from MetaMask stable to MetaMask Flask. If you import accounts with funds into Flask, you do so at your own risk.")))}u.isMDXComponent=!0}}]);