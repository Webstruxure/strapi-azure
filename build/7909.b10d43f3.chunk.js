"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[7909],{87909:(x,D,s)=>{s.d(D,{ProtectedSSO:()=>V});var t=s(92132),g=s(42455),R=s(38413),L=s(55356),h=s(85963),m=s(4198),A=s(83997),v=s(30893),M=s(90151),E=s(68074),C=s(7441),I=s(43739),c=s(95336),O=s(56654),o=s(14527),W=s(54514),B=s(94178),y=s(54894),d=s(48656),r=s(79053),j=s(63209),q=s(15126),ss=s(63299),ts=s(67014),as=s(59080),os=s(79275),_s=s(14718),ns=s(21272),es=s(82437),ls=s(5790),Es=s(35223),is=s(96854),ds=s(74930),rs=s(2600),Ms=s(48940),Os=s(41286),Ps=s(51187),Ds=s(56336),gs=s(39404),Rs=s(58692),Ls=s(54257),hs=s(501),ms=s(57646),As=s(23120),vs=s(44414),Cs=s(25962),Is=s(14664),cs=s(42588),Ws=s(90325),Bs=s(62785),Ts=s(87443),Us=s(41032),Ks=s(22957),fs=s(93179),us=s(29971),xs=s(15747),ys=s(85306),js=s(77965),Ss=s(26509),ps=s(84624),Vs=s(71210),Fs=s(32058),zs=s(81185),Ns=s(82261);const S=d.Ik().shape({autoRegister:d.lc().required(o.iW.required),defaultRole:d.gl().when("autoRegister",(a,_)=>a?_.required(o.iW.required):_.nullable()),ssoLockedRoles:d.YO().nullable().of(d.gl().when("ssoLockedRoles",(a,_)=>a?_.required(o.iW.required):_.nullable()))}),p=()=>{(0,o.L4)();const{formatMessage:a}=(0,y.A)(),_=(0,r.j)(l=>l.admin_app.permissions),{lockApp:F,unlockApp:z}=(0,o.MA)(),T=(0,o.hN)(),{_unstableFormatAPIError:N,_unstableFormatValidationErrors:Q}=(0,o.wq)(),{isLoading:Z,data:X}=(0,r.W)(),[Y,{isLoading:$}]=(0,r.X)(),{isLoading:G,allowedActions:{canUpdate:U,canReadRoles:H}}=(0,o.ec)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:f,isLoading:J}=(0,j.u)(void 0,{skip:!H}),k=async(l,P)=>{F();try{const n=await Y(l);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(Q(n.error)):T({type:"warning",message:N(n.error)});return}T({type:"success",message:{id:"notification.success.saved"}})}catch{T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{z()}},u=J||G||Z;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(o.x7,{name:"SSO"}),(0,t.jsx)(R.g,{"aria-busy":$||u,tabIndex:-1,children:(0,t.jsx)(B.l1,{onSubmit:k,initialValues:X||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:S,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:l,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(o.lV,{children:[(0,t.jsx)(L.Q,{primaryAction:(0,t.jsx)(h.$,{disabled:!w,loading:P,startIcon:(0,t.jsx)(W.A,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(m.s,{children:P||u?(0,t.jsx)(o.Bl,{}):(0,t.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.o,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.x,{gap:4,children:[(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(C.l,{disabled:!U,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:l})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(I.l,{disabled:!U,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:e=>l({target:{name:"defaultRole",value:e}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:f.map(({id:e,name:K})=>(0,t.jsx)(c.c,{value:e.toString(),children:K},e))})}),(0,t.jsx)(E.E,{col:6,s:12,children:(0,t.jsx)(O.KF,{disabled:!U,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:e=>l({target:{value:e,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:f.map(({id:e,name:K})=>(0,t.jsx)(O.fe,{value:e.toString(),children:K},e))})})]})]})})]})})})]})},V=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.kz,{permissions:a,children:(0,t.jsx)(p,{})})}},63209:(x,D,s)=>{s.d(D,{u:()=>h});var t=s(21272),g=s(14527),R=s(54894),L=s(79053);const h=(m={},A)=>{const{locale:v}=(0,R.A)(),M=(0,g.QM)(v,{sensitivity:"base"}),{data:E,error:C,isError:I,isLoading:c,refetch:O}=(0,L.z)(m,A);return{roles:t.useMemo(()=>[...E??[]].sort((W,B)=>M.compare(W.name,B.name)),[E,M]),error:C,isError:I,isLoading:c,refetch:O}}}}]);
