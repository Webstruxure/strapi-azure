"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[7607],{17607:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var o=_(92132),P=_(77751),n=_(64623),A=_(21272),C=_(14527),R=_(96854),i=_(79053),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(94178),O=_(5790),T=_(48656),M=_(35223),E=_(74930),D=_(2600),K=_(48940),a=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),y=_(501),j=_(57646),N=_(23120),V=_(44414),F=_(25962),x=_(14664),H=_(42588),$=_(90325),c=_(62785),G=_(87443),X=_(41032),Y=_(22957),Z=_(93179),z=_(29971),e=_(15747),Q=_(85306),J=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(7765),t_=_(63209),s_=_(89935),O_=_(72810),M_=_(18022),D_=_(67031);const m=()=>((0,n.u)(),(0,o.jsx)(P.e,{}))},64623:(W,s,_)=>{_.d(s,{u:()=>B});var o=_(21272),P=_(14527),n=_(67031),A=_(54894),C=_(17703),R=_(79053);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};o.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,D,L])}}}]);