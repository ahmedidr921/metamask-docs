"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(70989),u=n(72389);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(d(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",s.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",s.tabList)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function m(e){const t=(0,u.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),o=n(91980),l=n(67392),i=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=s(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=d??h;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),f(e)}),[m,f,o]),tabValues:o}}},56874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={description:"Set up a new simple dapp to integrate with MetaMask.",sidebar_position:1},u="Set up your development environment",s={unversionedId:"how-to/get-started-building/set-up-dev-environment",id:"how-to/get-started-building/set-up-dev-environment",title:"Set up your development environment",description:"Set up a new simple dapp to integrate with MetaMask.",source:"@site/wallet/how-to/get-started-building/set-up-dev-environment.md",sourceDirName:"how-to/get-started-building",slug:"/how-to/get-started-building/set-up-dev-environment",permalink:"/702-feedback-test/wallet/how-to/get-started-building/set-up-dev-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/get-started-building/set-up-dev-environment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Set up a new simple dapp to integrate with MetaMask.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Get started building a dapp",permalink:"/702-feedback-test/wallet/how-to/get-started-building"},next:{title:"Run a development network",permalink:"/702-feedback-test/wallet/how-to/get-started-building/run-devnet"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up a new project",id:"set-up-a-new-project",level:2},{value:"Example",id:"example",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-your-development-environment"},"Set up your development environment"),(0,r.kt)("p",null,"You can easily set up a simple dapp to integrate with MetaMask.\nFor a full end-to-end tutorial using ",(0,r.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/"},"Vite"),", see the\n",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/wallet/tutorials/react-dapp-local-state"},"Create a simple React dapp")," tutorial."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," installed in the browser of your choice on your development\nmachine.\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/wallet/how-to/get-started-building/run-devnet"},"running a development network")," on MetaMask when\ndeveloping a dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A text editor of your choice, such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),".\nYou can install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server"),"\nextension for VS Code to easily launch a local development server for your dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A module bundler, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"),"."))),(0,r.kt)("h2",{id:"set-up-a-new-project"},"Set up a new project"),(0,r.kt)("p",null,"Create a project directory with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"simple-dapp/\n\u251c\u2500 src/\n\u2502  \u251c\u2500 index.js\n\u251c\u2500 dist/\n\u2502  \u251c\u2500 index.html\n")),(0,r.kt)("p",null,"For any Ethereum dapp to work, your project script ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/wallet/how-to/connect/detect-metamask"},"Detect the Ethereum provider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/wallet/how-to/connect/detect-network"},"Detect which Ethereum network the user is connected to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/wallet/how-to/connect/access-accounts"},"Access the user's Ethereum accounts."))),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you import any modules into your project, such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider")),", use a bundler such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," to compile the modules and create an output script\n",(0,r.kt)("inlineCode",{parentName:"p"},"dist/main.js"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/"},"Webpack's Getting Started guide")," for more information.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We also recommend ",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/wallet/how-to/connect/set-up-sdk/"},"setting up MetaMask SDK")," to enable a reliable, secure,\nand seamless connection from your dapp to the MetaMask browser extension and MetaMask Mobile.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example simple dapp script and HTML file:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"JavaScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"/*****************************************/\n/* Detect the MetaMask Ethereum provider */\n/*****************************************/\n\nimport detectEthereumProvider from '@metamask/detect-provider';\n\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  startApp(provider);\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n/**********************************************************/\n/* Handle chain (network) and chainChanged (per EIP-1193) */\n/**********************************************************/\n\nconst chainId = await window.ethereum.request({ method: 'eth_chainId' });\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  window.location.reload();\n}\n\n/***********************************************************/\n/* Handle user accounts and accountsChanged (per EIP-1193) */\n/***********************************************************/\n\nlet currentAccount = null;\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    console.error(err);\n  });\n\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    currentAccount = accounts[0];\n    showAccount.innerHTML = currentAccount;\n  }\n}\n\n/*********************************************/\n/* Access the user's accounts (per EIP-1102) */\n/*********************************************/\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n"))),(0,r.kt)(l.Z,{label:"HTML",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Simple dapp</title>\n  <script type="module" src="main.js"><\/script>\n</head>\n<body>\n  \x3c!-- Display a connect button and the current account --\x3e\n  <button class="enableEthereumButton">Enable Ethereum</button>\n  <h2>Account: <span class="showAccount"></span></h2>\n</body>\n</html>\n')))))}h.isMDXComponent=!0}}]);