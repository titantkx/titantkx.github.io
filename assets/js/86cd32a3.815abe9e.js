"use strict";(self.webpackChunktitantkx_github_io=self.webpackChunktitantkx_github_io||[]).push([[399],{130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"security-and-operations","title":"\ud83d\udd10 Security and Operations","description":"Node liveness","source":"@site/docs/security-and-operations.md","sourceDirName":".","slug":"/security-and-operations","permalink":"/docs/security-and-operations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\udd16 Automatic Upgrades","permalink":"/docs/upgrade/automatic-upgrades"},"next":{"title":"\ud83e\ude7a Testnet","permalink":"/docs/testnet"}}');var o=t(6070),r=t(5658);const s={sidebar_position:3},a="\ud83d\udd10 Security and Operations",d={},l=[{value:"Node liveness",id:"node-liveness",level:2},{value:"Monitoring",id:"monitoring",level:3},{value:"Chain upgrade",id:"chain-upgrade",level:3},{value:"Government responsibility",id:"government-responsibility",level:2},{value:"Sensitive information",id:"sensitive-information",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-security-and-operations",children:"\ud83d\udd10 Security and Operations"})}),"\n",(0,o.jsx)(n.h2,{id:"node-liveness",children:"Node liveness"}),"\n",(0,o.jsx)(n.p,{children:"The validator node must be kept running continuously, connect to other nodes and submit a vote for each block. If not validator will be slashed from staked balance and will be jailed (currently is 0.01% staked TKX if offline in around 14h)"}),"\n",(0,o.jsx)(n.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,o.jsxs)(n.p,{children:["Cometbft can export prometheus metrics to monitor node status (",(0,o.jsx)(n.a,{href:"https://docs.cometbft.com/v0.37/core/metrics",children:"https://docs.cometbft.com/v0.37/core/metrics"}),"). You should use it belong with ",(0,o.jsx)(n.a,{href:"https://github.com/prometheus/node_exporter",children:"node exporter"})," to monitor node status."]}),"\n",(0,o.jsx)(n.h3,{id:"chain-upgrade",children:"Chain upgrade"}),"\n",(0,o.jsxs)(n.p,{children:["Every chain upgrade will require the validator download new ",(0,o.jsx)(n.code,{children:"titand"})," binary to replace the old one, some upgrades may require manual action like migrating config file or genesis (if that is a fork upgrade). "]}),"\n",(0,o.jsxs)(n.p,{children:["You should always follow ",(0,o.jsx)(n.a,{href:"https://github.com/titantkx/titan",children:"titand github repo"})," for the latest release version. Main upgrades always be decided by ",(0,o.jsx)(n.a,{href:"https://tkxscan.io/Titan/gov",children:"government proposal"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For automatic handle upgrade please follow this ",(0,o.jsx)(n.a,{href:"/docs/upgrade/automatic-upgrades",children:"guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"government-responsibility",children:"Government responsibility"}),"\n",(0,o.jsxs)(n.p,{children:["Titan chain has configuration factors that are determined by the government. Anyone can propose updates on configuration parameters (including chain upgrades). If the proposal is approved through government voting, that change will be implemented on the chain. Therefore, all validators have the right and responsibility to vote on every proposal and determine how the chain functions. ",(0,o.jsx)(n.a,{href:"https://tkxscan.io/Titan/gov",children:"Gov page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sensitive-information",children:"Sensitive information"}),"\n",(0,o.jsx)(n.p,{children:"After setting up your validator node, have some key files you need to keep secret and safe:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".titand/config/priv_validator_key.json"})," : This file contains the key that the validator node used to sign the block.. If this file is damaged or lost, your validator node may no longer sign new blocks, resulting in a loss of block rewards and potential jailing for missing signatures in too many blocks (being offline for too long)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".titand/config/node_key.json"})," : Not critical as ",(0,o.jsx)(n.code,{children:"priv_validator_key"})," but this file contains identity information of your validator node, helping other node identify your node in P2P network."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:".titand/data/priv_validator_state.json"})," : (updated every block) this file contains latest information about the singing process of your validator node, this helps your node prevent duplicate sign blocks (that may make slash large amounts of TKX). Move this file along with the 2 files above when transferring your node to a new machine or during a chain upgrade."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);