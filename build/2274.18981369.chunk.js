"use strict";(self.webpackChunksanity_strapi=self.webpackChunksanity_strapi||[]).push([[2274],{62274:(fs,k,t)=>{t.r(k),t.d(k,{default:()=>ss});var e=t(92132),h=t(21272),B=t(94061),w=t(50215),y=t(83997),O=t(85963),q=t(61485),ee=t(6239),ve=t(43064),Ce=t(99248),R=t(30893),je=t(90151),se=t(68074),Ae=t(8361),Pe=t(67030),Oe=t(55356),ye=t(64871),Le=t(42455),te=t(38413),Te=t(74773),S=t(88353),Be=t(4198),Re=t(98765),Ie=t(48653),c=t(14527),Ue=t(14718),j=t(54894),L=t(17703),We=t(71389),s=t(54911),ps=t(98908),ne=t(96854),Fe=t(50612),Ke=t(17470),Se=t(3047),b=t(5194),be=t(28604),$e=t(46270),ze=t(20415),Qe=t(61906),Ve=t(60362),Ge=t(41909),$=t(63891),u=t(33544),Ne=t(94178),He=t(77965),ae=t(74930),hs=t(56336),Ms=t(48656),ms=t(35352),Ds=t(59484);const Je=(n,{pathname:o,query:l})=>{let r=[{id:null,label:{id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"},href:n?(0,s.a)(o,l):void 0}];return n?.parent?.parent&&r.push([]),n?.parent&&r.push({id:n.parent.id,label:n.parent.name,href:(0,s.a)(o,l,{folder:n.parent.id,folderPath:n.parent.path})}),n&&r.push({id:n.id,label:n.name}),r},Ye=n=>{const{id:o}=(0,s.u)();return(0,e.jsx)(B.a,{position:"relative",zIndex:2,children:(0,e.jsx)(w.J,{"aria-labelledby":`${o}-title`,...n})})},z=({pagination:n})=>(0,e.jsx)(B.a,{paddingTop:6,children:(0,e.jsxs)(y.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(c._u,{}),(0,e.jsx)(c.W7,{pagination:n})]})});z.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},z.propTypes={pagination:u.shape({page:u.number,pageCount:u.number,pageSize:u.number,total:u.number})};const oe=({selected:n,onSuccess:o})=>{const{formatMessage:l}=(0,j.A)(),[r,d]=(0,h.useState)(!1),{isLoading:g,remove:_}=(0,s.b)(),f=async()=>{await _(n),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.$,{variant:"danger-light",size:"S",startIcon:(0,e.jsx)(Fe.A,{}),onClick:()=>d(!0),children:l({id:"global.delete",defaultMessage:"Delete"})}),(0,e.jsx)(c.TM,{isConfirmButtonLoading:g,isOpen:r,onToggleDialog:()=>d(!1),onConfirm:f})]})};oe.propTypes={selected:u.arrayOf(s.A,s.F).isRequired,onSuccess:u.func.isRequired};const Xe=()=>{const n=(0,c.hN)(),o=(0,ae.useQueryClient)(),{post:l}=(0,c.ry)(),r=({destinationFolderId:_,filesAndFolders:f})=>{const E=f.reduce((p,x)=>{const{id:i,type:A}=x,M=A==="asset"?"fileIds":"folderIds";return p[M]||(p[M]=[]),p[M].push(i),p},{});return l("/upload/actions/bulk-move",{...E,destinationFolderId:_})},d=(0,ae.useMutation)(r,{onSuccess(_){const{data:{data:f}}=_;f?.files?.length>0&&(o.refetchQueries([s.p,"assets"],{active:!0}),o.refetchQueries([s.p,"asset-count"],{active:!0})),o.refetchQueries([s.p,"folders"],{active:!0}),n({type:"success",message:{id:(0,s.g)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...d,move:(_,f)=>d.mutateAsync({destinationFolderId:_,filesAndFolders:f})}},Q=({onClose:n,selected:o,currentFolder:l})=>{const{formatMessage:r}=(0,j.A)(),{data:d,isLoading:g}=(0,s.c)(),{move:_}=Xe();if(!d)return null;const f=async(x,{setErrors:i})=>{try{await _(x.destination.value,o),n()}catch(A){const I=(0,c.u7)(A).errors.reduce((U,v)=>(U[v.values?.path?.length||"destination"]=v.defaultMessage,U),{});He(I)||i(I)}},E=()=>{n()};if(g)return(0,e.jsx)(q.k,{onClose:E,labelledBy:"title",children:(0,e.jsx)(ee.c,{children:(0,e.jsx)(y.s,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:(0,e.jsx)(ve.a,{children:r({id:(0,s.g)("content.isLoading"),defaultMessage:"Content is loading."})})})})});const p={destination:{value:l?.id||"",label:l?.name||d[0].label}};return(0,e.jsx)(q.k,{onClose:E,labelledBy:"title",children:(0,e.jsx)(Ne.l1,{validateOnChange:!1,onSubmit:f,initialValues:p,children:({values:x,errors:i,setFieldValue:A})=>(0,e.jsxs)(c.lV,{noValidate:!0,children:[(0,e.jsx)(Ce.r,{children:(0,e.jsx)(R.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:r({id:(0,s.g)("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),(0,e.jsx)(ee.c,{children:(0,e.jsx)(je.x,{gap:4,children:(0,e.jsx)(se.E,{xs:12,col:12,children:(0,e.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(Ae.d,{htmlFor:"folder-destination",children:r({id:(0,s.g)("form.input.label.folder-location"),defaultMessage:"Location"})}),(0,e.jsx)(s.S,{options:d,onChange:M=>{A("destination",M)},defaultValue:x.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:i?.destination,ariaErrorMessage:"destination-error"}),i.destination&&(0,e.jsx)(R.o,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600",children:i.destination})]})})})}),(0,e.jsx)(Pe.j,{startActions:(0,e.jsx)(O.$,{onClick:E,variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(O.$,{type:"submit",loading:g,children:r({id:"modal.folder.move.submit",defaultMessage:"Move"})})})]})})})};Q.defaultProps={currentFolder:void 0},Q.propTypes={onClose:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.F,s.A).isRequired};const V=({selected:n,onSuccess:o,currentFolder:l})=>{const{formatMessage:r}=(0,j.A)(),[d,g]=(0,h.useState)(!1),_=()=>{g(!1),o()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.$,{variant:"secondary",size:"S",startIcon:(0,e.jsx)(Ke.A,{}),onClick:()=>g(!0),children:r({id:"global.move",defaultMessage:"Move"})}),d&&(0,e.jsx)(Q,{currentFolder:l,onClose:_,selected:n})]})};V.defaultProps={currentFolder:void 0},V.propTypes={onSuccess:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.A,s.F).isRequired};const G=({selected:n,onSuccess:o,currentFolder:l})=>{const{formatMessage:r}=(0,j.A)();return(0,e.jsxs)(y.s,{gap:2,paddingBottom:5,children:[(0,e.jsx)(R.o,{variant:"epsilon",textColor:"neutral600",children:r({id:(0,s.g)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:n.filter(({type:d})=>d==="folder").length,numberAssets:n.filter(({type:d})=>d==="asset").length})}),(0,e.jsx)(oe,{selected:n,onSuccess:o}),(0,e.jsx)(V,{currentFolder:l,selected:n,onSuccess:o})]})};G.defaultProps={currentFolder:void 0},G.propTypes={onSuccess:u.func.isRequired,currentFolder:s.F,selected:u.arrayOf(s.A,s.F).isRequired};const Ze=({isFiltering:n,canCreate:o,canRead:l})=>n?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:l?o?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},ie=({canCreate:n,isFiltering:o,canRead:l,onActionClick:r})=>{const{formatMessage:d}=(0,j.A)(),g=Ze({isFiltering:o,canCreate:n,canRead:l});return(0,e.jsx)(s.E,{icon:l?null:Se.A,action:n&&!o&&(0,e.jsx)(O.$,{variant:"secondary",startIcon:(0,e.jsx)(b.A,{}),onClick:r,children:d({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...g,id:(0,s.g)(g.id)})})};ie.propTypes={canCreate:u.bool.isRequired,canRead:u.bool.isRequired,isFiltering:u.bool.isRequired,onActionClick:u.func.isRequired};const ke=()=>{const n=(0,h.useRef)(null),[o,l]=(0,h.useState)(!1),{formatMessage:r}=(0,j.A)(),{trackUsage:d}=(0,c.z1)(),[{query:g},_]=(0,c.sq)(),f=g?.filters?.$and||[],E=()=>l(i=>!i),p=i=>{_({filters:{$and:i},page:1})},x=i=>{d("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(i[i.length-1])[0]}),_({filters:{$and:i},page:1})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.$,{variant:"tertiary",ref:n,startIcon:(0,e.jsx)(be.A,{}),onClick:E,size:"S",children:r({id:"app.utils.filters",defaultMessage:"Filters"})}),o&&(0,e.jsx)(s.d,{displayedFilters:s.e,filters:f,onSubmit:x,onToggle:E,source:n}),(0,e.jsx)(s.f,{appliedFilters:f,filtersSchema:s.e,onRemoveFilter:p})]})},N=({breadcrumbs:n,canCreate:o,folder:l,onToggleEditFolderDialog:r,onToggleUploadAssetDialog:d})=>{const{formatMessage:g}=(0,j.A)(),{pathname:_}=(0,L.zy)(),[{query:f}]=(0,c.sq)(),E={...f,folder:l?.parent?.id??void 0,folderPath:l?.parent?.path??void 0};return(0,e.jsx)(Oe.Q,{title:g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"}),subtitle:n&&l&&(0,e.jsx)(s.h,{as:"nav",label:g({id:(0,s.g)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:n,currentFolderId:l?.id}),navigationAction:l&&(0,e.jsx)(ye.N,{startIcon:(0,e.jsx)($e.A,{}),to:`${_}?${(0,ne.stringify)(E,{encode:!1})}`,children:g({id:(0,s.g)("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:o&&(0,e.jsxs)(y.s,{gap:2,children:[(0,e.jsx)(O.$,{startIcon:(0,e.jsx)(b.A,{}),variant:"secondary",onClick:r,children:g({id:(0,s.g)("header.actions.add-folder"),defaultMessage:"Add new folder"})}),(0,e.jsx)(O.$,{startIcon:(0,e.jsx)(b.A,{}),onClick:d,children:g({id:(0,s.g)("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})};N.defaultProps={breadcrumbs:!1,folder:null},N.propTypes={breadcrumbs:u.oneOfType([s.B,u.bool]),canCreate:u.bool.isRequired,folder:s.F,onToggleEditFolderDialog:u.func.isRequired,onToggleUploadAssetDialog:u.func.isRequired};const we=(0,$.Ay)(B.a)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,le=(0,$.Ay)(R.o)`
  max-width: 100%;
`,re=(0,$.Ay)(B.a)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }
`,qe=()=>{const{push:n}=(0,L.W6)(),{canRead:o,canCreate:l,canUpdate:r,canCopyLink:d,canDownload:g,isLoading:_}=(0,s.i)(),f=(0,h.useRef)(),{formatMessage:E}=(0,j.A)(),{pathname:p}=(0,L.zy)(),{trackUsage:x}=(0,c.z1)(),[{query:i},A]=(0,c.sq)(),M=Boolean(i._q||i.filters),[I,U]=(0,c.ud)(s.l.view,s.v.GRID),v=I===s.v.GRID,{data:C,isLoading:ts,errors:ns}=(0,s.j)({skipWhen:!o,query:i}),{data:as,isLoading:os,errors:is}=(0,s.k)({enabled:o&&C?.pagination?.page===1&&!(0,s.m)(i),query:i}),{data:H,isLoading:de,error:ls}=(0,s.n)(i?.folder,{enabled:o&&!!i?.folder});ls?.response?.status===404&&n(p);const W=as?.map(a=>({...a,type:"folder",folderURL:(0,s.a)(p,i,a.id),isSelectable:r}))??[],m=W?.length||0,F=C?.results?.map(a=>({...a,type:"asset",isSelectable:r}))||[],D=F?.length??0,rs=C?.pagination?.total,ce=de||os||_||ts,[ds,cs]=(0,h.useState)(!1),[gs,ge]=(0,h.useState)(!1),[ue,J]=(0,h.useState)(void 0),[Y,_e]=(0,h.useState)(void 0),[P,{selectOne:K,selectAll:Ee}]=(0,c.$0)(["type","id"],[]),fe=P?.length>0&&P?.length!==D+m,X=()=>cs(a=>!a),pe=({created:a=!1}={})=>{a&&i?.page!=="1"&&A({...i,page:1}),ge(T=>!T)},he=(a,T)=>{a.target.checked&&x("didSelectAllMediaLibraryElements"),Ee(T)},Me=a=>{x("didSortMediaLibraryElements",{location:"upload",sort:a}),A({sort:a})},me=a=>{_e(a),ge(!0)},us=a=>{_e(null),pe(a),f.current&&f.current.focus()},De=a=>{a===D&&C.pagination.page===C.pagination.pageCount&&C.pagination.page>1&&A({...i,page:C.pagination.page-1})},_s=()=>{Ee(),De(P.length)};return(0,c.L4)(),(0,e.jsxs)(Le.P,{children:[(0,e.jsxs)(te.g,{"aria-busy":ce,children:[(0,e.jsx)(N,{breadcrumbs:!de&&Je(H,{pathname:p,query:i}),canCreate:l,onToggleEditFolderDialog:pe,onToggleUploadAssetDialog:X,folder:H}),(0,e.jsx)(Te.B,{startActions:(0,e.jsxs)(e.Fragment,{children:[r&&v&&(D>0||m>0)&&(0,e.jsx)(we,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:(0,e.jsx)(w.J,{"aria-label":E({id:(0,s.g)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:fe,value:(D>0||m>0)&&P.length===D+m,onChange:a=>he(a,[...F,...W])})}),o&&v&&(0,e.jsx)(s.o,{value:i?.sort,onChangeSort:Me}),o&&(0,e.jsx)(ke,{})]}),endActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.d4,{permissions:s.P.configureView,children:(0,e.jsx)(re,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(S.K,{forwardedAs:We.N_,to:{pathname:`${p}/configuration`,search:(0,ne.stringify)(i,{encode:!1})},icon:(0,e.jsx)(ze.A,{}),label:E({id:"app.links.configure-view",defaultMessage:"Configure the view"})})})}),(0,e.jsx)(re,{paddingTop:1,paddingBottom:1,children:(0,e.jsx)(S.K,{icon:v?(0,e.jsx)(Qe.A,{}):(0,e.jsx)(Ve.A,{}),label:E(v?{id:(0,s.g)("view-switch.list"),defaultMessage:"List View"}:{id:(0,s.g)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>U(v?s.v.LIST:s.v.GRID)})}),(0,e.jsx)(c.q7,{label:E({id:(0,s.g)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),(0,e.jsxs)(Be.s,{children:[P.length>0&&(0,e.jsx)(G,{currentFolder:H,selected:P,onSuccess:_s}),ce&&(0,e.jsx)(c.Bl,{}),(ns||is)&&(0,e.jsx)(c.hH,{}),m===0&&D===0&&(0,e.jsx)(ie,{canCreate:l,canRead:o,isFiltering:M,onActionClick:X}),o&&!v&&(D>0||m>0)&&(0,e.jsx)(s.T,{assetCount:D,folderCount:m,indeterminate:fe,onChangeSort:Me,onChangeFolder:(a,T)=>n((0,s.a)(p,i,{folder:a,folderPath:T})),onEditAsset:J,onEditFolder:me,onSelectOne:K,onSelectAll:he,rows:[...W,...F],selected:P,shouldDisableBulkSelect:!r,sortQuery:i?.sort??""}),o&&v&&(0,e.jsxs)(e.Fragment,{children:[m>0&&(0,e.jsx)(s.q,{title:(M&&D>0||!M)&&E({id:(0,s.g)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:m})||"",children:W.map(a=>{const Es=!!P.filter(({type:Z})=>Z==="folder").find(Z=>Z.id===a.id),xe=(0,s.a)(p,i,{folder:a?.id,folderPath:a?.path});return(0,e.jsx)(se.E,{col:3,children:(0,e.jsx)(s.r,{ref:Y&&a.id===Y.id?f:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:xe,startAction:K&&a.isSelectable?(0,e.jsx)(Ye,{"data-testid":`folder-checkbox-${a.id}`,value:Es,onChange:()=>K(a)}):null,cardActions:(0,e.jsx)(S.K,{icon:(0,e.jsx)(Ge.A,{}),"aria-label":E({id:(0,s.g)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>me(a)}),children:(0,e.jsx)(s.s,{children:(0,e.jsx)(s.t,{to:xe,children:(0,e.jsxs)(y.s,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[(0,e.jsxs)(le,{fontWeight:"semiBold",ellipsis:!0,children:[a.name,(0,e.jsx)(Re.s,{children:":"})]}),(0,e.jsx)(le,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:E({id:(0,s.g)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})})]})})})})},`folder-${a.id}`)})}),D>0&&m>0&&(0,e.jsx)(B.a,{paddingTop:6,paddingBottom:4,children:(0,e.jsx)(Ie.c,{})}),D>0&&(0,e.jsx)(s.w,{assets:F,onEditAsset:J,onSelectAsset:K,selectedAssets:P.filter(({type:a})=>a==="asset"),title:(!M||M&&m>0)&&C?.pagination?.page===1&&E({id:(0,s.g)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:rs})||""})]}),C?.pagination&&(0,e.jsx)(z,{pagination:C.pagination})]})]}),ds&&(0,e.jsx)(s.U,{onClose:X,trackedLocation:"upload",folderId:i?.folder}),gs&&(0,e.jsx)(s.x,{onClose:us,folder:Y,parentFolderId:i?.folder,location:"upload"}),ue&&(0,e.jsx)(s.y,{onClose:a=>{a===null&&De(1),J(void 0)},asset:ue,canUpdate:r,canCopyLink:d,canDownload:g,trackedLocation:"upload"})]})},es=(0,h.lazy)(()=>t.e(8687).then(t.bind(t,48687))),ss=()=>{const{config:{isLoading:n,isError:o,data:l}}=(0,s.z)(),[{rawQuery:r},d]=(0,c.sq)(),{formatMessage:g}=(0,j.A)(),_=g({id:(0,s.g)("plugin.name"),defaultMessage:"Media Library"});return(0,h.useEffect)(()=>{n||o||r||d({sort:l.sort,page:1,pageSize:l.pageSize})},[n,o,l,r,d]),(0,c.L4)(),(0,e.jsxs)(te.g,{"aria-busy":n,children:[(0,e.jsx)(Ue.m,{title:_}),n&&(0,e.jsx)(c.Bl,{}),r?(0,e.jsx)(h.Suspense,{fallback:(0,e.jsx)(c.Bl,{}),children:(0,e.jsxs)(L.dO,{children:[(0,e.jsx)(L.qh,{exact:!0,path:`/plugins/${s.p}`,component:qe}),(0,e.jsx)(L.qh,{exact:!0,path:`/plugins/${s.p}/configuration`,render:()=>(0,e.jsx)(es,{config:l})})]})}):null]})}}}]);