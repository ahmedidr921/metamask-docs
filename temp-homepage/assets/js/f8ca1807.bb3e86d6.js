"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},i),{},{components:n})):a.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={description:"Configure and connect a Ganache development network."},l="Run a development network",c={unversionedId:"get-started/run-development-network",id:"get-started/run-development-network",title:"Run a development network",description:"Configure and connect a Ganache development network.",source:"@site/wallet/get-started/run-development-network.md",sourceDirName:"get-started",slug:"/get-started/run-development-network",permalink:"/temp-homepage/wallet/get-started/run-development-network",draft:!1,tags:[],version:"current",frontMatter:{description:"Configure and connect a Ganache development network."},sidebar:"walletSidebar",previous:{title:"Set up your development environment",permalink:"/temp-homepage/wallet/get-started/set-up-dev-environment"},next:{title:"Detect MetaMask",permalink:"/temp-homepage/wallet/get-started/detect-metamask"}},s={},p=[{value:"Connect to Ganache",id:"connect-to-ganache",level:2},{value:"Reset your local nonce calculation",id:"reset-your-local-nonce-calculation",level:2}],i={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-development-network"},"Run a development network"),(0,r.kt)("p",null,"You can run a personal Ethereum development network using ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/ganache"},"Ganache"),",\nwhich allows you to develop a dapp in a secure test environment."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using a local development blockchain such as Ganache or\n",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/#overview-of-anvil"},"anvil"),", your node must calculate gas to make\ntransactions on MetaMask.")),(0,r.kt)("h2",{id:"connect-to-ganache"},"Connect to Ganache"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/ganache/quickstart/"},"Ganache quickstart")," to set\nup a development network."),(0,r.kt)("p",null,"When you create a Ganache workspace, enter your MetaMask seed phrase into\nthe ",(0,r.kt)("strong",{parentName:"p"},"Account & Keys")," setting.\nGanache automatically gives each of your first 10 accounts 100 test ether (you can configure\nthese numbers in ",(0,r.kt)("strong",{parentName:"p"},"Accounts & Keys"),"), which makes it easy to start development."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Your seed phrase controls all your accounts, so we recommend keeping at least one seed phrase for\ndevelopment, separate from any used to store real value.\nYou can manage multiple seed phrases by using multiple browser profiles, each with its own\nMetaMask installation.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Server")," setting of your workspace, find the hostname and port of your Ganache\nnetwork, which comprises the RPC URL of your network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"http://<hostname>:<port>\n")),(0,r.kt)("p",null,"In the MetaMask extension, connect to your Ganache network:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the network you're currently connected to."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Add network"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Add a network manually"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the RPC URL of your network."),(0,r.kt)("li",{parentName:"ol"},"Enter MetaMask's default ",(0,r.kt)("a",{parentName:"li",href:"/temp-homepage/wallet/get-started/detect-network#chain-ids"},"chain ID")," for Ganache, ",(0,r.kt)("inlineCode",{parentName:"li"},"1337"),".")),(0,r.kt)("h2",{id:"reset-your-local-nonce-calculation"},"Reset your local nonce calculation"),(0,r.kt)("p",null,"If you restart your development network, you can accidentally confuse MetaMask\nbecause it calculates the next ",(0,r.kt)("a",{parentName:"p",href:"/temp-homepage/wallet/how-to/send-transactions#nonce"},"nonce")," based on both the\nnetwork state ",(0,r.kt)("em",{parentName:"p"},"and")," the known sent transactions."),(0,r.kt)("p",null,"To clear MetaMask's transaction queue and reset its nonce calculation, go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Advanced"),"\nand select ",(0,r.kt)("strong",{parentName:"p"},"Reset account"),"."))}u.isMDXComponent=!0}}]);