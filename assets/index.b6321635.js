var e=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(a,n,t)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,l=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&r(e,n,a[n]);if(t)for(var n of t(a))i.call(a,n)&&r(e,n,a[n]);return e},o=(e,a,n)=>(r(e,"symbol"!=typeof a?a+"":a,n),n);import{B as h,x as c,F as d,R as m,y as p,A as u,U as f,D as C,Y as N,a as b,G as g,$ as v}from"./vendor.bbf9911b.js";import{F as _,av as S,ge as y,fQ as E,fS as T,Z as P,o as w,gf as M,a as A,gg as I,gh as x,gi as L,be as R,cH as D,e1 as k,cd as q,cW as H,bd as O,g7 as j,gj as U,aa as G,k as V,$ as B,M as F,gk as J,gl as K,f_ as z,cw as W,cv as $,cP as Y,C as Z,bZ as Q,cn as X,K as ee,d as ae,gm as ne,cJ as te,gn as se,L as ie,b4 as re,D as le,b2 as oe}from"./index.190edc01.js";import{Y as he,Z as ce,U as de,_ as me,$ as pe}from"./index.f9be2f73.js";import{r as ue}from"./jsx-runtime_commonjs-proxy.8e94ef61.js";import{P as fe,U as Ce,X as Ne}from"./index.0ec9f6e9.js";import{s as be,$ as ge,Q as ve,c as _e,M as Se,a as ye,b as Ee,G as Te,d as Pe}from"./index.7b48b190.js";var we=ue.jsx;var Me=h.exports.forwardRef((function(e,t){return we("svg",(s=l({},Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e)),a(s,n({children:we("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}))));var s}));function Ae(e){return{type:_.SIDEBAR_DRAGGING_SET_STATE,data:e}}function Ie(){return{type:_.SIDEBAR_DRAGGING_STOP}}function xe(e,a,n){return async(t,s)=>{if(n){const e=s().views.channelSidebar.multiSelectedChannelIds;n.forEach((a=>{e.indexOf(a)>=0&&t(De(a))}))}const i=await t(y(e,a,n));return t({type:_.ADD_NEW_CATEGORY_ID,data:i.data.id})}}function Le(e,a,n,t=!0){return(s,i)=>{const r=i(),l=r.views.channelSidebar.multiSelectedChannelIds;let o=[];if(l.length&&-1!==l.indexOf(n)){const a=E(r),t=T(r);let i=[n];const h=a.find((a=>a.id===e));i=l.filter((e=>{const a=t.find((a=>e===a.id)),n=(null==a?void 0:a.type)===P.DM_CHANNEL||(null==a?void 0:a.type)===P.GM_CHANNEL;return(null==h?void 0:h.type)===w.CUSTOM||(null==h?void 0:h.type)===w.FAVORITES||n&&(null==h?void 0:h.type)===w.DIRECT_MESSAGES||!n&&(null==h?void 0:h.type)!==w.DIRECT_MESSAGES}));const c=t.map((e=>e.id));i.sort(((e,a)=>c.indexOf(e)-c.indexOf(a))),i.forEach((e=>s(De(e)))),o=i}else o=[n];const h=function(e,a,n,t,s){if(0===t)return 0;const i=A(e,a),r=I()(e,i),l=r.filter(((e,a)=>e!==s&&-1!==n.indexOf(e)&&a<=t)),o=t-l.length;if(i.channel_ids.length===r.length)return o;const h=x(r,n,o),c=h[h.indexOf(n[0])-1];let d=i.channel_ids.indexOf(c)+1;const m=i.channel_ids.indexOf(n[0]);-1!==m&&m<d&&(d-=1);return Math.max(d-l.length,0)}(r,e,o,a,n);return s(M(e,o,h,t))}}function Re(){return(e,a)=>0===a().views.channelSidebar.multiSelectedChannelIds.length?Promise.resolve({data:!0}):e({type:_.MULTISELECT_CHANNEL_CLEAR})}function De(e){return(a,n)=>{const t=n();if(!t.views.channelSidebar.multiSelectedChannelIds.length){const e=S(t);a({type:_.MULTISELECT_CHANNEL,data:e})}return a({type:_.MULTISELECT_CHANNEL_ADD,data:e})}}function ke(e){return(a,n)=>{const t=n(),s=t.views.channelSidebar.multiSelectedChannelIds;let i=t.views.channelSidebar.lastSelectedChannel;if(!s.length){const e=S(t);a({type:_.MULTISELECT_CHANNEL,data:e}),i=e}const r=L(t).map((e=>e.id)),l=r.indexOf(e),o=r.indexOf(i);if(l===o)return null;const h=Math.min(o,l),c=Math.max(o,l),d=r.slice(h,c+1);return a({type:_.MULTISELECT_CHANNEL_TO,data:d})}}function qe(e){return a=>a({type:_.ADD_CHAT_ID,data:e})}function He(e){return a=>a({type:_.REMOVE_CHAT_ID,data:e})}function Oe(e){return a=>a({type:_.SET_CHAT_MINIMAL,data:e})}function je(e){return a=>a({type:_.REMOVE_CHAT_MINIMAL,data:e})}function Ue(e,a){return n=>n({type:_.SET_PRE_CHAT,data:l({id:e},a)})}var Ge=e=>c("div",{className:be.dialogActions,children:e.children});var Ve=d((function(e,a){if(!a.teamId)return{hasPermission:!1};for(const n of a.permissions)if(R(e,{team:a.teamId,permission:n}))return{hasPermission:!0};return{hasPermission:!1}}))((e=>{const{hasPermission:a,children:n,invert:t=!1}=e;return a&&!t||!a&&t?n:null}));var Be={filteredUserList:"mqik-534bc39c",channelList:"mqik-bcf3333f",modalRow:"mqik-ea25767e",modalDetail:"mqik-8b41cba2",modalItemName:"mqik-04b1596a",btn:"mqik-2027c07b",btnPrimary:"mqik-722a9ad7",searchableInput:"mqik-002551a5"};class Fe extends m.PureComponent{constructor(e){super(e),o(this,"nextTimeoutId"),o(this,"filter"),o(this,"channelListScroll"),o(this,"createChannelRow",(e=>{const a=`${e.display_name}, ${e.purpose}`.toLowerCase();return p("div",{className:u(Be.modalRow,"more-modal__row"),id:`ChannelRow-${e.name}`,children:[p("div",{className:u(Be.modalDetail,"more-modal__details"),children:[c("button",{onClick:this.handleJoin.bind(this,e),"aria-label":a,className:u(Be.modalItemName,"style--none more-modal__name"),children:e.display_name}),c("p",{className:"more-modal__description",children:e.purpose})]}),c("div",{className:u(Be.modalActions,"more-modal__actions"),children:c("button",{onClick:this.handleJoin.bind(this,e),className:u(Be.btn,Be.btnPrimary,"btn btn-primary"),disabled:this.state.joiningChannel,children:this.state.joiningChannel===e.id?c(f,{id:"more_channels.joining",defaultMessage:"Vào nhóm..."}):c(f,{id:"more_channels.join",defaultMessage:"Tham gia"})})})]},e.id)})),o(this,"nextPage",(e=>{e.preventDefault(),this.setState({page:this.state.page+1,nextDisabled:!0}),this.nextTimeoutId=setTimeout((()=>this.setState({nextDisabled:!1})),500),this.props.nextPage(this.state.page+1),ge(C.findDOMNode(this.channelListScroll.current)).scrollTop(0)})),o(this,"previousPage",(e=>{e.preventDefault(),this.setState({page:this.state.page-1}),ge(C.findDOMNode(this.channelListScroll.current)).scrollTop(0)})),o(this,"doSearch",(()=>{const e=this.filter.current.value;this.props.search(e),""===e&&this.setState({page:0})})),this.nextTimeoutId=0,this.state={joiningChannel:"",page:0,nextDisabled:!1},this.filter=m.createRef(),this.channelListScroll=m.createRef()}static getDerivedStateFromProps(e,a){return{isSearch:e.isSearch,page:e.isSearch&&!a.isSearch?0:a.page}}componentDidMount(){!D()&&this.filter.current&&this.filter.current.focus()}handleJoin(e){this.setState({joiningChannel:e.id}),this.props.handleJoin(e,(()=>{this.setState({joiningChannel:""})}))}render(){const e=this.props.channels;let a,n,t;if(this.props.loading&&0===e.length)a=c(q,{});else if(0===e.length)a=p("div",{className:"no-channel-message",children:[c("p",{className:"primary-message",children:c(f,{id:"more_channels.noMore",defaultMessage:"No more channels to join"})}),this.props.noResultsText]});else{const e=this.state.page*this.props.channelsPerPage,s=e+this.props.channelsPerPage,i=this.props.channels.slice(e,s);a=i.map(this.createChannelRow),i.length>=this.props.channelsPerPage&&s<this.props.channels.length&&(n=c("button",{className:"btn btn-link filter-control filter-control__next",onClick:this.nextPage,disabled:this.state.nextDisabled,children:c(f,{id:"more_channels.next",defaultMessage:"Next"})})),this.state.page>0&&(t=c("button",{className:"btn btn-link filter-control filter-control__prev",onClick:this.previousPage,children:c(f,{id:"more_channels.prev",defaultMessage:"Previous"})}))}let s=c("div",{className:"filter-row filter-row--full",children:c("div",{className:"col-sm-12",children:c(ve,{id:"searchChannelsTextbox",ref:this.filter,className:u(Be.searchableInput,"form-control filter-textbox"),placeholder:{id:k("filtered_channels_list.search"),defaultMessage:"Search channels"},inputComponent:_e,onInput:this.doSearch})})});return this.props.createChannelButton&&(s=p("div",{className:"channel_search",children:[c("div",{className:"search_input",children:c(ve,{id:"searchChannelsTextbox",ref:this.filter,className:"form-control filter-textbox",placeholder:{id:k("filtered_channels_list.search"),defaultMessage:"Search channels"},inputComponent:_e,onInput:this.doSearch})}),c("div",{className:"create_button",children:this.props.createChannelButton})]})),p("div",{className:Be.filteredUserList,children:[s,c("div",{role:"application",ref:"channelList",className:u(Be.channelList,"more-modal__list"),children:c("div",{id:"moreChannelsList",ref:this.channelListScroll,children:a})}),p("div",{className:"filter-controls",children:[t,n]})]})}}Fe.defaultProps={channels:[],isSearch:!1},Fe.propTypes={channels:N.arrayOf(N.object),channelsPerPage:N.number,nextPage:N.func.isRequired,isSearch:N.bool,search:N.func.isRequired,handleJoin:N.func.isRequired,noResultsText:N.object,loading:N.bool,createChannelButton:N.element,toggleArchivedChannels:N.func.isRequired,shouldShowArchivedChannels:N.bool.isRequired,canShowArchivedChannels:N.bool.isRequired};var Je="mqik-4a38de9e";class Ke extends m.PureComponent{constructor(e){super(e),o(this,"searchTimeoutId"),o(this,"handleHide",(()=>{this.setState({show:!1}),this.props.bodyOnly&&this.handleExit()})),o(this,"handleExit",(()=>{this.props.actions.closeModal(H.MORE_CHANNELS)})),o(this,"onChange",(e=>{this.state.search&&!e||this.setState({searchedChannels:[],serverError:null})})),o(this,"nextPage",(e=>{this.props.actions.getChannels(this.props.teamId,e+1,50)})),o(this,"handleJoin",(async(e,a)=>{const{actions:n,currentUserId:t,teamId:s,teamName:i}=this.props,r=await n.joinChannel(t,s,e.id);r.error?this.setState({serverError:r.error.message}):(this.props.actions.addChatId(e.id),this.handleHide()),a&&a()})),o(this,"search",(e=>{if(clearTimeout(this.searchTimeoutId),""===e)return this.onChange(!0),this.setState({search:!1,searchedChannels:[],searching:!1,searchTerm:e}),void(this.searchTimeoutId=0);this.setState({search:!0,searching:!0,searchTerm:e});const a=window.setTimeout((async()=>{try{const{data:n}=await this.props.actions.searchMoreChannels(e,this.state.shouldShowArchivedChannels);if(a!==this.searchTimeoutId)return;n?this.setSearchResults(n):this.setState({searchedChannels:[],searching:!1})}catch(n){this.setState({searchedChannels:[],searching:!1})}}),100);this.searchTimeoutId=a})),o(this,"setSearchResults",(e=>{this.setState({searchedChannels:this.state.shouldShowArchivedChannels?e.filter((e=>0!==e.delete_at)):e.filter((e=>0===e.delete_at)),searching:!1})})),o(this,"toggleArchivedChannels",(e=>{this.search(this.state.searchTerm),this.setState({shouldShowArchivedChannels:e})})),this.searchTimeoutId=0,this.state={show:!0,shouldShowArchivedChannels:"private"===this.props.morePublicChannelsModalType,search:!1,searchedChannels:[],serverError:null,searching:!1,searchTerm:""}}componentDidMount(){this.props.actions.getChannels(this.props.teamId,0,100),this.props.canShowArchivedChannels&&this.props.actions.getArchivedChannels(this.props.teamId,0,100)}render(){const{channels:e,archivedChannels:a,teamId:n,channelsRequestStarted:t,bodyOnly:s}=this.props,{search:i,searchedChannels:r,serverError:l,show:o,searching:h,shouldShowArchivedChannels:d}=this.state;let m;m=d?i?r:a:i?r:e;const u=c(Ve,{teamId:n,permissions:[O.CREATE_PUBLIC_CHANNEL,O.CREATE_PRIVATE_CHANNEL],children:c("p",{className:"secondary-message",children:c(f,{id:"more_channels.createClick",defaultMessage:"Click 'Create New Channel' to make a new one"})})});return p(Se,{dialogClassName:"a11y__modal more-modal more-modal--action",show:o,onHide:this.handleHide,onExited:this.handleExit,"aria-labelledby":"moreChannelsModalLabel",children:[c(ye,{closeButton:!0,onClose:this.handleHide,children:c(f,{id:"more_channels.title2",defaultMessage:"Tìm Nhóm"})}),c(Ee,{children:c("div",{className:Je,children:c(Fe,{channels:m,channelsPerPage:50,nextPage:this.nextPage,isSearch:i,search:this.search,handleJoin:this.handleJoin,noResultsText:u,loading:i?h:t,createChannelButton:s&&null,toggleArchivedChannels:this.toggleArchivedChannels,shouldShowArchivedChannels:this.state.shouldShowArchivedChannels,canShowArchivedChannels:this.props.canShowArchivedChannels})})})]})}}const ze=b(j,(e=>e&&e.filter((e=>0===e.delete_at)))),We=b(U,(e=>e&&e.filter((e=>0!==e.delete_at))));var $e=d((function(e){const a=G(e)||{};return{channels:ze(e)||[],archivedChannels:We(e)||[],currentUserId:V(e),teamId:a.id,teamName:a.name,channelsRequestStarted:e.requests.channels.getChannels.status===B.STARTED,canShowArchivedChannels:"true"===F(e).ExperimentalViewArchivedChannels}}),(function(e){return{actions:g({getChannels:J,getArchivedChannels:K,joinChannel:z,searchMoreChannels:he,openModal:W,closeModal:$,addChatId:qe},e)}}))(Ke);var Ye={newChannel:"mqik-8bb4a2e1",formGroup:"mqik-48ae4be8",inputHelp:"mqik-62279099",error:"mqik-7a20a2ef",formLabel:"mqik-9c7904d0",light:"mqik-8b64b48b",formValue:"mqik-c9f5aa32",formControl:"mqik-a77cc126",noResize:"mqik-ff660243",flexParent:"mqik-6f0b8d25",icon:"mqik-69bc8b90",radioSelect:"mqik-917b71ed",hasError:"mqik-7de8b87d",newChannelActions:"mqik-bf8193e1",btn:"mqik-0864b77b",btnPrimary:"mqik-9b678f1f",btnLink:"mqik-fc567c2d"};class Ze extends m.PureComponent{constructor(e){super(e),o(this,"displayNameInput"),o(this,"channelPurposeInput"),o(this,"onEnterKeyDown",(e=>{const a=Y(e,Z.KeyCodes.ENTER),{ctrlSend:n}=this.props;n&&a&&!e.ctrlKey?e.preventDefault():(n&&a&&e.ctrlKey||!n&&a&&!e.shiftKey&&!e.altKey)&&this.handleSubmit(e)})),o(this,"handleSubmit",(e=>{e.preventDefault();this.displayNameInput.current.value.trim().length<Z.MIN_CHANNELNAME_LENGTH?this.setState({displayNameError:!0}):this.props.onSubmitChannel()})),o(this,"handleChange",(()=>{const e={displayName:this.displayNameInput.current.value,purpose:this.channelPurposeInput.current.value};this.props.onDataChanged(e)})),o(this,"handleOnURLChange",(e=>{e.preventDefault(),this.props.onChangeURLPressed&&this.props.onChangeURLPressed()})),o(this,"handlePublicTypeSelect",(()=>{this.props.onTypeSwitched("O")})),o(this,"handlePrivateTypeSelect",(()=>{this.props.onTypeSwitched("P")})),this.state={displayNameError:""},this.channelPurposeInput=m.createRef(),this.displayNameInput=m.createRef()}static getDerivedStateFromProps(e){return!1===e.show?{displayNameError:""}:null}render(){const{canCreatePublicChannel:e,canCreatePrivateChannel:a,show:n}=this.props,t=e&&a;var s=null,i=null,r="";this.state.displayNameError&&(s=p("p",{className:u(Ye.inputHelp,Ye.error),children:[c(f,{id:"channel_modal.displayNameError",defaultMessage:"Display name must have at least 2 characters."}),this.state.displayNameError]}),r=Ye.hasError),this.props.serverError&&(i=c("div",{className:u(Ye.formGroup),children:c("p",{className:u(Ye.inputHelp,Ye.error),children:this.props.serverError})}));const l=p("div",{className:Ye.flexParent,children:[c(Te,{className:Ye.icon}),c(f,{id:"channel_modal.publicName",defaultMessage:"Public"}),c(f,{id:"channel_modal.publicHint",defaultMessage:" - Anyone can join this channel"})]}),o=p("div",{className:Ye.flexParent,children:[c(Pe,{className:Ye.icon}),c(f,{id:"channel_modal.privateName",defaultMessage:"Private"}),c(f,{id:"channel_modal.privateHint",defaultMessage:" - Only invited members can join this channel"})]});let h=null;return h=t?p("fieldset",{className:u(Ye.radioSelect),children:[c("div",{className:u(Ye.radio),children:p("label",{children:[c("input",{id:"public",type:"radio",name:"channelType",checked:"O"===this.props.channelType,onChange:this.handlePublicTypeSelect,"aria-labelledby":"channelModalTypeLabel"}),l]})}),c("div",{className:u(Ye.radio),children:p("label",{children:[c("input",{id:"private",type:"radio",name:"channelType",checked:"P"===this.props.channelType,onChange:this.handlePrivateTypeSelect,"aria-labelledby":"channelModalTypeLabel"}),o]})})]},"channelType"):c("div",{className:"type-container multi-select__radio",children:p("div",{className:"radio",children:[e?l:null,a?o:null]})}),p(Se,{dialogClassName:"a11y__modal more-modal more-modal--action",show:n,onHide:this.props.onModalDismissed,onExited:this.props.onModalExited,"aria-labelledby":"newChannelModalLabel",children:[c(ye,{closeButton:!0,onClose:this.props.onModalDismissed,children:c(f,{id:"channel_modal.modalTitle",defaultMessage:"New Channel"})}),c(Ee,{children:p("form",{role:"form",className:u(Ye.newChannel),children:[p("div",{className:u(Ye.formGroup),children:[c("label",{className:u(Ye.formLabel),children:c(f,{id:"channel_modal.type",defaultMessage:"Type"})}),c("div",{className:u(Ye.formValue),children:h})]}),p("div",{className:u(r,Ye.formGroup),children:[c("label",{className:u(Ye.formLabel),htmlFor:"newChannelName",children:c(f,{id:"channel_modal.name",defaultMessage:"Name"})}),p("div",{className:u(Ye.formValue),children:[c(_e,{id:"newChannelName",onChange:this.handleChange,type:"text",ref:this.displayNameInput,className:u(Ye.formControl),placeholder:{id:k("channel_modal.nameEx"),defaultMessage:'E.g.: "Bugs", "Marketing", "客户支持"'},maxLength:Z.MAX_CHANNELNAME_LENGTH,value:this.props.channelData.displayName,autoFocus:!0,onKeyDown:this.onEnterKeyDown}),s]})]}),p("div",{className:u(Ye.formGroup),children:[p("div",{className:u(Ye.formLabel),children:[c("label",{className:u(Ye.formLabel),htmlFor:"newChannelPurpose",children:c(f,{id:"channel_modal.purpose",defaultMessage:"Purpose"})}),c("label",{className:u(Ye.formLabel,Ye.light),children:c(f,{id:"channel_modal.optional",defaultMessage:"(optional)"})})]}),p("div",{className:u(Ye.formValue),children:[c("textarea",{id:"newChannelPurpose",className:u(Ye.formControl,Ye.noResize),ref:this.channelPurposeInput,rows:4,placeholder:Q("channel_modal.purposeEx",'E.g.: "A channel to file bugs and improvements"'),maxLength:250,value:this.props.channelData.purpose,onChange:this.handleChange}),i]})]})]})}),c(Ge,{children:p("div",{className:Ye.newChannelActions,children:[c("button",{id:"cancelNewChannel",type:"button",className:u(Ye.btn,Ye.btnLink),onClick:this.props.onModalDismissed,children:c(f,{id:"channel_modal.cancel",defaultMessage:"Cancel"})}),c("button",{id:"submitNewChannel",onClick:this.handleSubmit,type:"submit",className:u(Ye.btn,Ye.btnPrimary),children:c(f,{id:"channel_modal.createNew",defaultMessage:"Create Channel"})})]})})]})}}o(Ze,"propTypes",{show:N.bool.isRequired,currentTeamId:N.string.isRequired,channelType:N.string.isRequired,channelData:N.object.isRequired,ctrlSend:N.bool,serverError:N.node,onSubmitChannel:N.func.isRequired,onModalDismissed:N.func.isRequired,onModalExited:N.func,onTypeSwitched:N.func.isRequired,onChangeURLPressed:N.func.isRequired,onDataChanged:N.func.isRequired,canCreatePublicChannel:N.bool.isRequired,canCreatePrivateChannel:N.bool.isRequired});var Qe=d((function(e){return{ctrlSend:X(e,ee.CATEGORY_ADVANCED_SETTINGS,"send_on_ctrl_enter"),currentTeamId:ae(e)}}))(Ze);function Xe(e){let a=e.channelType||Z.OPEN_CHANNEL;return e.canCreatePublicChannel||a!==Z.OPEN_CHANNEL||(a=Z.PRIVATE_CHANNEL),e.canCreatePrivateChannel||a!==Z.PRIVATE_CHANNEL||(a=Z.OPEN_CHANNEL),a}class ea extends m.PureComponent{constructor(e){super(e),o(this,"onSubmit",(()=>{if(!this.state.channelDisplayName)return void this.setState({serverError:Q("channel_flow.invalidName","Invalid Channel Name")});if(this.state.channelName.length<2)return void this.setState({flowState:3});const{actions:e,currentTeamId:a,history:n}=this.props,t={team_id:a,name:this.state.channelName,display_name:this.state.channelDisplayName,purpose:this.state.channelPurpose,header:this.state.channelHeader,type:this.state.channelType,create_at:0,creator_id:"",delete_at:0,extra_update_at:0,group_constrained:!1,id:"",last_post_at:0,scheme_id:"",total_msg_count:0,total_msg_count_root:0,update_at:0,last_picture_update:0,verified:!1};e.createChannel(t).then((({data:a,error:t})=>{t?this.onCreateChannelError(t):a&&(this.onModalDismissed(),e.switchToChannel(a,n))}))})),o(this,"onModalDismissed",(()=>{this.props.actions.closeModal(H.NEW_CHANNEL_FLOW)})),o(this,"onCreateChannelError",(e=>{"model.channel.is_valid.2_or_more.app_error"===e.server_error_id?this.setState({flowState:3,serverError:c(f,{id:"channel_flow.handleTooShort",defaultMessage:"Channel URL must be 2 or more lowercase alphanumeric characters"})}):"store.sql_channel.update.exists.app_error"===e.server_error_id?this.setState({serverError:Q("channel_flow.alreadyExist","A channel with that URL already exists")}):this.setState({serverError:e.message})})),o(this,"typeSwitched",(e=>{this.setState({channelType:e,serverError:""})})),o(this,"urlChangeRequested",(e=>{e&&e.preventDefault(),this.setState({flowState:2})})),o(this,"urlChangeSubmitted",(e=>{3===this.state.flowState?this.setState({channelName:e,nameModified:!0},this.onSubmit):this.setState({flowState:1,serverError:null,channelName:e,nameModified:!0})})),o(this,"urlChangeDismissed",(()=>{this.setState({flowState:1})})),o(this,"channelDataChanged",(e=>{this.setState({channelDisplayName:e.displayName,channelPurpose:e.purpose,channelHeader:e.header}),this.state.nameModified||this.setState({channelName:ne(e.displayName.trim())})})),this.state={serverError:"",channelType:Xe(e),flowState:1,channelDisplayName:"",channelName:"",channelPurpose:"",channelHeader:"",nameModified:!1}}render(){const e={name:this.state.channelName,displayName:this.state.channelDisplayName,purpose:this.state.channelPurpose,header:this.state.channelHeader};let a=!1;switch(this.state.flowState){case 1:a=!0}return console.info("showChannelModal",a),c(h.exports.Fragment,{children:c(Qe,{show:a,channelType:this.state.channelType,canCreatePublicChannel:this.props.canCreatePublicChannel,canCreatePrivateChannel:this.props.canCreatePrivateChannel,channelData:e,serverError:this.state.serverError,onSubmitChannel:this.onSubmit,onModalDismissed:this.onModalDismissed,onTypeSwitched:this.typeSwitched,onChangeURLPressed:this.urlChangeRequested,onDataChanged:this.channelDataChanged})})}}o(ea,"defaultProps",{channelType:Z.OPEN_CHANNEL});var aa=d((function(e){const a=G(e),n=S(e);let t=!1,s=!1;return a&&(t=te(e,{channel:n,team:a.id,permission:O.CREATE_PUBLIC_CHANNEL}),s=te(e,{channel:n,team:a.id,permission:O.CREATE_PRIVATE_CHANNEL})),{currentTeamId:a.id,canCreatePrivateChannel:s,canCreatePublicChannel:t}}),(function(e){return{actions:g({createChannel:se,switchToChannel:ce,closeModal:$},e)}}))(ea);var na="mqik-0a9d2a73",ta="mqik-bf52855f",sa="mqik-3dbb95fa",ia="mqik-e187b183",ra="mqik-a5b73d28",la="mqik-bf41671d",oa="mqik-d3e0efae";var ha=d((function(e){const a=ie.getPreviousTeamId(V(e)),n=re(e,a);return{permalinkRedirectTeamName:n?n.name:"",chatActive:de(e),chatReady:me(e)}}),(function(e){return{actions:g({setChatActive:pe,openModal:W},e)}}))((e=>{const a=v(),{open:n}=e;return c("div",{className:u(na,{[ta]:!n}),children:n?c("div",{className:sa,children:p("ul",{children:[p("li",{children:[c("button",{onClick:()=>a.replace("/friends"),children:"Danh sách bạn bè"}),p("span",{className:u(ia),children:[c("span",{className:u(ra,"u3-animate-ping")}),c("span",{className:la})]})]}),c("li",{children:c("button",{onClick:()=>{e.onClose(),e.actions.openModal({modalId:H.MORE_CHANNELS,dialogType:$e,dialogProps:{morePublicChannelsModalType:"public",history:a}})},children:"Tìm nhóm chat"})}),c("li",{children:c("button",{onClick:()=>{e.onClose(),e.actions.openModal({modalId:H.NEW_CHANNEL_FLOW,dialogType:aa,dialogProps:{history:a}})},children:"Tạo nhóm chat"})}),c("li",{children:c("button",{className:oa,onClick:()=>e.onLogout(!1),children:"Tắt chat"})})]})}):null})}));var ca="mqik-ad29fc58",da="mqik-2cda1eee",ma="mqik-6f73654e",pa="mqik-c752aa57",ua="mqik-a3757568",fa="mqik-ccef951a",Ca="mqik-aa1c4648",Na="mqik-85ac1e93",ba="mqik-e8cda058",ga="mqik-0ce1936f";var va=d((function(e){const a=V(e),n=ie.getPreviousTeamId(a);return re(e,n),{userId:a,user:oe(e),chatActive:de(e),chatReady:me(e)}}),(function(e){return{actions:g({setChatActive:pe},e)}}))((e=>{const[a,n]=h.exports.useState(!1),[t,s]=h.exports.useState(!0);return p("div",{className:u(ca),children:[c(ha,{open:a,onClose:()=>n(!1),onLogout:()=>{n(!1),e.actions.setChatActive(!1)}}),p("div",{className:u(da),children:[c(fe,{src:le.getProfilePictureUrl(e.user.id,e.user.last_picture_update),size:"lg",userId:e.user.id,hasMention:!0,username:e.user.username}),c("div",{className:u(ma),children:c(Ce,{userId:e.userId,disablePopover:!0})}),p("div",{className:u(pa),children:[c("button",{className:u(ua,{[Ca]:a}),onClick:()=>n(!a),children:c(a?Ne:Me,{className:fa})}),p("span",{className:u(Na,{"u3-hidden":!t}),children:[c("span",{className:u(ba,"u3-animate-ping")}),c("span",{className:ga})]})]})]})]})}));export{Ge as M,va as U,ke as a,De as b,Re as c,qe as d,$e as e,Le as f,Ie as g,xe as h,Ue as i,je as l,Oe as m,He as r,Ae as s};
