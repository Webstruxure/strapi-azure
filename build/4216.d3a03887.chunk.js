"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[4216],{24216:(p,g,s)=>{s.r(g),s.d(g,{InformationBoxEE:()=>J});var t=s(92132),a=s(14527),e=s(79053),I=s(7153),_=s(83997),W=s(76517),A=s(80782),d=s(48323),L=s(30893),Y=s(43064),G=s(16918),z=s(10229),w=s(54894),y=s(18306),o=s(45534),V=s(21272),m=s(45084),R=s(25524),N=s(35658),X=s(15126),$=s(63299),k=s(67014),b=s(59080),q=s(79275),ss=s(14718),ts=s(82437),as=s(94178),os=s(5790),ns=s(48656),es=s(35223),_s=s(96854),ls=s(74930),is=s(2600),rs=s(48940),Es=s(41286),ds=s(51187),Ms=s(56336),Ds=s(39404),Os=s(58692),Ps=s(54257),gs=s(501),ms=s(57646),hs=s(23120),vs=s(44414),Cs=s(25962),As=s(14664),cs=s(42588),Is=s(90325),Ws=s(62785),Ls=s(87443),Rs=s(41032),Ts=s(22957),Bs=s(93179),fs=s(29971),Us=s(15747),Ks=s(85306),us=s(77965),ys=s(26509),js=s(84624),xs=s(71210),Ss=s(32058),ps=s(81185),ws=s(82261);const Z=()=>{const{initialData:l,layout:i,isSingleType:h,onChange:j}=(0,a.Cu)(),r=(0,e.j)(n=>n.admin_app.permissions),{formatMessage:E}=(0,w.A)(),{_unstableFormatAPIError:x}=(0,a.wq)(),S=(0,a.hN)(),{allowedActions:{canRead:T},isLoading:c}=(0,a.ec)(r.settings?.users),{data:v,isLoading:B,isError:f}=(0,e.k)({},{skip:c||!T}),M=v?.users||[],D=l?.[o.A]??null,[O,{error:U,isLoading:K}]=(0,y.u)(),u=async n=>{const P=await O({slug:h?"single-types":"collection-types",model:i.uid,id:l.id,data:{id:n?parseInt(n,10):null}});"data"in P&&(j?.({target:{type:"",name:o.A,value:P.data[o.A]}},!0),S({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}}))};return(0,t.jsx)(I.D,{name:o.A,id:o.A,children:(0,t.jsx)(_.s,{direction:"column",gap:2,alignItems:"stretch",children:(0,t.jsx)(W.G3,{clearLabel:E({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:(f&&T&&E({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||U&&x(U))??void 0,disabled:!c&&!B&&M.length===0,name:o.A,id:o.A,value:D?D.id.toString():null,onChange:u,onClear:()=>u(null),placeholder:E({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:E({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:B||c||K,children:M.map(n=>(0,t.jsx)(A.j,{value:n.id.toString(),textValue:(0,e.l)(n,E),children:(0,e.l)(n,E)},n.id))})})})},H=()=>{const{initialData:l,layout:i,isSingleType:h,onChange:j}=(0,a.Cu)(),{formatMessage:r}=(0,w.A)(),{_unstableFormatAPIError:E}=(0,a.wq)(),x=(0,a.hN)(),{data:S,isLoading:T}=(0,y.a)({slug:h?"single-types":"collection-types",model:i.uid,id:l.id},{skip:!l?.id||!i?.uid}),{meta:c,stages:v=[]}=S??{},{getFeature:B}=(0,e.m)(),[f,M]=V.useState(null),D=B("review-workflows")??{},O=l?.[o.S]??null,[U,{error:K}]=(0,y.b)(),u=async P=>{try{if(D?.[R.C]&&parseInt(D[R.C],10)<(c?.workflowCount??0))M("workflow");else if(D?.[R.a]&&parseInt(D[R.a],10)<v.length)M("stage");else if(l.id&&i){const C=await U({model:i.uid,id:l.id,slug:h?"single-types":"collection-types",data:{id:P}});"data"in C&&(j?.({target:{name:o.S,value:C.data[o.S],type:""}},!0),x({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}}))}}catch{}},{themeColorName:n}=(0,N.g)(O?.color)??{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.D,{hint:v.length===0&&r({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,t.jsxs)(_.s,{direction:"column",gap:2,alignItems:"stretch",children:[(0,t.jsx)(d.Z,{disabled:v.length===0,error:K&&E(K)||void 0,name:o.S,id:o.S,value:O?.id,onChange:u,label:r({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:O&&(0,t.jsx)(_.s,{as:"span",height:2,background:O?.color,borderColor:n==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,t.jsxs)(_.s,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(L.o,{textColor:"neutral800",ellipsis:!0,children:O?.name??""}),T?(0,t.jsx)(Y.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:v.map(({id:P,color:C,name:F})=>{const{themeColorName:Q}=(0,N.g)(C)??{};return(0,t.jsx)(d.eY,{startIcon:(0,t.jsx)(_.s,{height:2,background:C,borderColor:Q==="neutral0"?"neutral150":void 0,hasRadius:!0,shrink:0,width:2}),value:P,textValue:F,children:F},P)})}),(0,t.jsx)(G.o,{}),(0,t.jsx)(z.b,{})]})}),(0,t.jsxs)(m.L.Root,{isOpen:f==="workflow",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(m.L.Root,{isOpen:f==="stage",onClose:()=>M(null),children:[(0,t.jsx)(m.L.Title,{children:r({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(m.L.Body,{children:r({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},J=()=>{const{isCreatingEntry:l,layout:i}=(0,a.Cu)(),h=i?.options?.reviewWorkflows??!1;return(0,t.jsxs)(e.I.Root,{children:[(0,t.jsx)(e.I.Title,{}),h&&!l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H,{}),(0,t.jsx)(Z,{})]}),(0,t.jsx)(e.I.Body,{})]})}},35658:(p,g,s)=>{s.d(g,{a:()=>I,g:()=>e});var t=s(57438),a=s(25524);function e(_){if(!_)return null;const A=Object.entries(t._.colors).filter(([,d])=>d.toUpperCase()===_.toUpperCase()).reduce((d,[L])=>(a.S?.[L]&&(d=L),d),null);return A?{themeColorName:A,name:a.S[A]}:null}function I(){return Object.entries(a.S).map(([_,W])=>({hex:t._.colors[_].toUpperCase(),name:W}))}},45534:(p,g,s)=>{s.d(g,{A:()=>a,S:()=>t});const t="strapi_stage",a="strapi_assignee"}}]);
