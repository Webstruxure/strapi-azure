"use strict";(self.webpackChunkazure_strapi=self.webpackChunkazure_strapi||[]).push([[7872],{37872:(N,O,_)=>{_.r(O),_.d(O,{InstalledPluginsPage:()=>C,ProtectedInstalledPluginsPage:()=>f});var s=_(92132),I=_(21272),T=_(11273),d=_(42455),o=_(38413),L=_(55356),r=_(4198),B=_(35513),W=_(26127),i=_(90361),a=_(33363),P=_(30893),K=_(25641),t=_(14527),U=_(14718),g=_(54894),R=_(82437),h=_(89935),m=_(79053),u=_(72810),z=_(18022),F=_(48940),S=_(2600),$=_(51187),c=_(15126),Q=_(63299),V=_(67014),X=_(59080),Z=_(79275),G=_(94178),H=_(5790),J=_(48656),Y=_(35223),e=_(96854),p=_(74930),k=_(41286),b=_(56336),w=_(39404),q=_(58692),__=_(54257),s_=_(501),E_=_(57646),t_=_(23120),a_=_(44414),P_=_(25962),M_=_(14664),l_=_(42588),n_=_(90325),D_=_(62785),O_=_(87443),d_=_(41032),o_=_(22957),i_=_(93179),g_=_(29971),C_=_(15747),v_=_(85306),A_=_(77965),I_=_(26509),T_=_(84624),L_=_(71210),r_=_(32058),B_=_(81185),W_=_(82261);const C=()=>{const{formatMessage:E}=(0,g.A)(),{notifyStatus:M}=(0,T.W)(),v=(0,t.hN)(),{_unstableFormatAPIError:A}=(0,t.wq)();(0,t.L4)();const{isLoading:j,data:l,error:n}=(0,m.q)();return I.useEffect(()=>{l&&M(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:E({id:"global.plugins",defaultMessage:"Plugins"})})),n&&v({type:"warning",message:A(n)})},[l,n,A,E,M,v]),j?(0,s.jsx)(d.P,{children:(0,s.jsx)(o.g,{"aria-busy":!0,children:(0,s.jsx)(t.Bl,{})})}):(0,s.jsx)(d.P,{children:(0,s.jsxs)(o.g,{children:[(0,s.jsx)(L.Q,{title:E({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:E({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,s.jsx)(r.s,{children:(0,s.jsxs)(B.X,{colCount:2,rowCount:l?.plugins?.length??0+1,children:[(0,s.jsx)(W.d,{children:(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(a.Th,{children:(0,s.jsx)(P.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.description",defaultMessage:"description"})})})]})}),(0,s.jsx)(K.N,{children:l?.plugins.map(({name:D,displayName:x,description:y})=>(0,s.jsxs)(i.Tr,{children:[(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:E({id:`global.plugins.${D}`,defaultMessage:x})})}),(0,s.jsx)(a.Td,{children:(0,s.jsx)(P.o,{textColor:"neutral800",children:E({id:`global.plugins.${D}.description`,defaultMessage:y})})})]},D))})]})})]})})},f=()=>{const{formatMessage:E}=(0,g.A)(),M=(0,R.d4)(h.s);return(0,s.jsxs)(t.kz,{permissions:M.marketplace?.main,children:[(0,s.jsx)(U.m,{title:E({id:"global.plugins",defaultMessage:"Plugins"})}),(0,s.jsx)(C,{})]})}}}]);