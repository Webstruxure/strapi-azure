"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[6403,8457],{76403:(F,W,s)=>{s.d(W,{ProtectedCreateView:()=>k});var t=s(92132),P=s(14527),m=s(82437),v=s(89935),C=s(48457),g=s(21272),y=s(72810),D=s(18022),_=s(79053),O=s(15126),e=s(63299),a=s(67014),N=s(59080),z=s(79275),c=s(14718),j=s(94178),A=s(5790),B=s(48656),x=s(35223),L=s(96854),l=s(74930),J=s(2600),H=s(48940),X=s(41286),w=s(51187),b=s(56336),q=s(39404),ss=s(58692),ts=s(54257),_s=s(501),ns=s(57646),as=s(23120),Es=s(44414),os=s(25962),rs=s(14664),es=s(42588),is=s(90325),ds=s(62785),Ms=s(87443),Ps=s(41032),Ds=s(22957),Os=s(93179),ls=s(29971),Ts=s(15747),ms=s(85306),vs=s(77965),Cs=s(26509),As=s(84624),Ls=s(71210),Is=s(32058),Us=s(81185),Rs=s(82261),Ws=s(78454),Bs=s(5275);const k=()=>{const G=(0,m.d4)(v.s);return(0,t.jsx)(P.kz,{permissions:G.settings?.["transfer-tokens"].create,children:(0,t.jsx)(C.w,{})})}},48457:(F,W,s)=>{s.d(W,{ProtectedEditView:()=>Ks,w:()=>Y});var t=s(92132),P=s(21272),m=s(38413),v=s(4198),C=s(83997),g=s(94061),y=s(30893),D=s(90151),_=s(68074),O=s(55356),e=s(85963),a=s(14527),N=s(54514),z=s(94178),c=s(54894),j=s(17703),A=s(48656),B=s(79053),x=s(78454),L=s(99831),l=s(5275),J=s(15126),H=s(63299),X=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),ns=s(96854),as=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(51187),is=s(56336),ds=s(39404),Ms=s(58692),Ps=s(54257),Ds=s(501),Os=s(57646),ls=s(23120),Ts=s(44414),ms=s(25962),vs=s(14664),Cs=s(42588),As=s(90325),Ls=s(62785),Is=s(87443),Us=s(41032),Rs=s(22957),Ws=s(93179),Bs=s(29971),k=s(15747),G=s(85306),Fs=s(77965),Ns=s(26509),zs=s(84624),ks=s(71210),Gs=s(32058),Ys=s(81185),$s=s(82261);const fs=A.Ik().shape({name:A.Yj().max(100).required(a.iW.required),description:A.Yj().nullable(),lifespan:A.ai().integer().min(0).nullable().defined(a.iW.required),permissions:A.Yj().required(a.iW.required)}),Y=()=>{(0,a.L4)();const{formatMessage:o}=(0,c.A)(),{lockApp:r,unlockApp:f}=(0,a.MA)(),d=(0,a.hN)(),I=(0,j.W6)(),{state:K}=(0,j.zy)(),[E,U]=P.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,a.z1)(),{setCurrentStep:ys}=(0,a.Cx)(),cs=(0,B.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:js,canUpdate:xs,canRegenerate:ps}}=(0,a.ec)(cs),p=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,M=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:$}=(0,a.wq)();P.useEffect(()=>{T(M?"didAddTokenFromList":"didEditTokenFromList",{tokenType:L.T})},[M,T]);const{data:S,error:V}=(0,x.u)(p,{skip:M||E!==null||!p});P.useEffect(()=>{V&&d({type:"warning",message:u(V)})},[V,u,d]),P.useEffect(()=>{S&&U(S)},[S]);const[us]=(0,x.a)(),[Ss]=(0,x.b)(),Vs=async(i,R)=>{T(M?"willCreateToken":"willEditToken",{tokenType:L.T}),r();const h=i.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(M){const n=await us({...i,permissions:h});if("error"in n){(0,B.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors($(n.error)):d({type:"warning",message:u(n.error)});return}U(n.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:L.T}),I.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),ys("transferTokens.success")}else{const n=await Ss({id:p,name:i.name,description:i.description,permissions:h});if("error"in n){(0,B.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors($(n.error)):d({type:"warning",message:u(n.error)});return}U(n.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:L.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{f()}},Q=xs&&!M||js&&M;return!M&&!E?(0,t.jsx)(gs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(z.l1,{validationSchema:fs,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,R)=>Vs(i,R),children:({errors:i,handleChange:R,isSubmitting:h,values:Z})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:U,canEditInputs:Q,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:L.T}),(0,t.jsx)(hs,{errors:i,onChange:R,canEditInputs:Q,isCreating:M,values:Z,transferToken:E})]})})]})})]})},Ks=()=>{const o=(0,B.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(Y,{})})},hs=({errors:o={},onChange:r,canEditInputs:f,isCreating:d,values:I,transferToken:K={}})=>{const{formatMessage:E}=(0,c.A)(),U=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(y.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:I.name,canEditInputs:f,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:I.description,canEditInputs:f,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:d,error:o.lifespan,value:I.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:I.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:U,canEditInputs:f})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,c.A)();return(0,a.L4)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(O.Q,{primaryAction:(0,t.jsx)(e.$,{disabled:!0,startIcon:(0,t.jsx)(N.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(a.Bl,{})})]})}},78454:(F,W,s)=>{s.d(W,{a:()=>C,b:()=>y,c:()=>m,d:()=>g,u:()=>v});var t=s(79053);const P=t.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:C,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:y}=P}}]);