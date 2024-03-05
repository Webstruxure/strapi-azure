"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[6337],{36337:(x,f,s)=>{s.d(f,{ProtectedListView:()=>rs});var t=s(92132),l=s(21272),h=s(38413),I=s(55356),d=s(25815),D=s(4198),o=s(14527),E=s(5194),a=s(96854),M=s(54894),e=s(17703),B=s(79053),K=s(78454),C=s(99831),W=s(22185),u=s(15126),V=s(63299),z=s(67014),F=s(59080),G=s(79275),Y=s(14718),p=s(82437),Q=s(94178),H=s(5790),J=s(48656),Z=s(35223),n=s(74930),r=s(2600),P=s(48940),O=s(41286),m=s(51187),T=s(56336),i=s(39404),v=s(58692),A=s(54257),y=s(501),X=s(57646),w=s(23120),b=s(44414),q=s(25962),ss=s(14664),_=s(42588),ts=s(90325),S=s(62785),Os=s(87443),ms=s(41032),As=s(22957),fs=s(93179),cs=s(29971),gs=s(15747),Ls=s(85306),Cs=s(77965),vs=s(26509),Rs=s(84624),Us=s(71210),hs=s(32058),Is=s(81185),Bs=s(82261);const _s=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],os=()=>{(0,o.L4)();const{formatMessage:c}=(0,M.A)(),R=(0,o.hN)(),ds=(0,B.j)(L=>L.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Es,allowedActions:{canCreate:k,canDelete:is,canUpdate:ls,canRead:U}}=(0,o.ec)(ds),{push:as}=(0,e.W6)(),{trackUsage:j}=(0,o.z1)(),{_unstableFormatAPIError:N}=(0,o.wq)();l.useEffect(()=>{as({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[as]),(0,B.b)(()=>{j("willAccessTokenList",{tokenType:C.T})});const Ms=_s.map(L=>({...L,metadatas:{...L.metadatas,label:c(L.metadatas.label)}})),{data:g=[],isLoading:Ts,error:$}=(0,K.c)(void 0,{skip:!U});l.useEffect(()=>{g&&j("didAccessTokenList",{number:g.length,tokenType:C.T})},[j,g]),l.useEffect(()=>{$&&R({type:"warning",message:N($)})},[$,N,R]);const[Ds]=(0,K.d)(),Ps=async L=>{try{const ns=await Ds(L);"error"in ns&&R({type:"warning",message:N(ns.error)})}catch{R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},es=Ts||Es;return(0,t.jsxs)(h.g,{"aria-busy":es,children:[(0,t.jsx)(o.x7,{name:"Transfer Tokens"}),(0,t.jsx)(I.Q,{title:c({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:c({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,t.jsx)(d.z,{"data-testid":"create-transfer-token-button",startIcon:(0,t.jsx)(E.A,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:C.T}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,t.jsxs)(D.s,{children:[!U&&(0,t.jsx)(o.UW,{}),U&&g.length>0&&(0,t.jsx)(W.T,{permissions:{canRead:U,canDelete:is,canUpdate:ls},headers:Ms,contentType:"trasfer-tokens",isLoading:es,onConfirmDelete:Ps,tokens:g,tokenType:C.T}),U&&k&&g.length===0&&(0,t.jsx)(o.R1,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,t.jsx)(d.z,{variant:"secondary",startIcon:(0,t.jsx)(E.A,{}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),U&&!k&&g.length===0&&(0,t.jsx)(o.R1,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rs=()=>{const c=(0,B.j)(R=>R.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,t.jsx)(o.kz,{permissions:c,children:(0,t.jsx)(os,{})})}},22185:(x,f,s)=>{s.d(f,{T:()=>F});var t=s(92132),l=s(21272),h=s(25641),I=s(90361),d=s(33363),D=s(30893),o=s(83997),E=s(94061),a=s(88353),M=s(21610),e=s(14527),B=s(50612),K=s(83925),C=s(41909),W=s(54894),u=s(17703),V=s(71389),z=s(63891);const F=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:A,canRead:y}=n;return(0,t.jsx)(e.Ee,{headers:r,contentType:P,rows:m,withBulkActions:v||A||y,isLoading:O,onConfirmDelete:T,children:(0,t.jsx)(G,{tokenType:i,permissions:n,onConfirmDelete:T})})},G=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:A}]=(0,e.sq)(),{formatMessage:y}=(0,W.A)(),[,X]=A&&A.sort?A.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.W6)(),{trackUsage:q}=(0,e.z1)(),ss=[...P].sort((_,ts)=>{const S=_.name.localeCompare(ts.name);return X==="DESC"?-S:S});return(0,t.jsx)(h.N,{children:ss.map(_=>(0,t.jsxs)(I.Tr,{...(0,e.qM)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:i}),children:[(0,t.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,t.jsx)(D.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,t.jsx)(D.o,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(D.o,{textColor:"neutral800",children:(0,t.jsx)(e.sR,{timestamp:new Date(_.createdAt)})})}),(0,t.jsx)(d.Td,{children:_.lastUsedAt&&(0,t.jsx)(D.o,{textColor:"neutral800",children:(0,t.jsx)(e.sR,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,t.jsx)(d.Td,{children:(0,t.jsxs)(o.s,{justifyContent:"end",children:[i&&(0,t.jsx)(Z,{tokenName:_.name,tokenId:_.id}),!i&&v&&(0,t.jsx)(J,{tokenName:_.name,tokenId:_.id}),T&&(0,t.jsx)(H,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},Y={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,W.A)(),{location:{pathname:T}}=(0,u.W6)();return(0,t.jsx)(Q,{forwardedAs:V.k2,to:`${T}/${r}`,title:m(Y[P],{target:n}),children:O})},Q=(0,z.Ay)(M.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,H=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,W.A)(),{trackUsage:m}=(0,e.z1)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,t.jsxs)(E.a,{paddingLeft:1,onClick:A=>A.stopPropagation(),children:[(0,t.jsx)(a.K,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,t.jsx)(B.A,{})}),(0,t.jsx)(e.TM,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},J=({tokenName:n,tokenId:r})=>(0,t.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,t.jsx)(K.A,{})}),Z=({tokenName:n,tokenId:r})=>(0,t.jsx)(p,{tokenName:n,tokenId:r,children:(0,t.jsx)(C.A,{width:12})})},99831:(x,f,s)=>{s.d(f,{A:()=>t,T:()=>l});const t="api-token",l="transfer-token"},78454:(x,f,s)=>{s.d(f,{a:()=>d,b:()=>o,c:()=>h,d:()=>D,u:()=>I});var t=s(79053);const l=t.n.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:h,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:o}=l}}]);
