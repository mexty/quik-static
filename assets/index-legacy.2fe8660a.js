!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return o(this,r)}}function o(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=document.createElement("style");i.innerHTML=".mqik-94f05ec6{display:flex;width:91.666667%;align-items:center;justify-content:center}@media (min-width: 480px){.mqik-94f05ec6{width:60%}}.mqik-94f05ec6 .mqik-33cfbf8b{display:inline-flex;flex-direction:row;align-items:flex-start}.mqik-94f05ec6 .mqik-33cfbf8b .mqik-b53e00af{height:6rem}.mqik-94f05ec6 .mqik-33cfbf8b .mqik-9886d584 p{margin-bottom:.5rem;font-size:.875rem;line-height:1.25rem}.mqik-94f05ec6 .mqik-33cfbf8b .mqik-9886d584 h2{font-size:2.25rem;line-height:2.5rem}\n",document.head.appendChild(i),System.register(["./vendor-legacy.989851c4.js","./index-legacy.8d4e0b9f.js"],(function(e){"use strict";var o,a,i,s,c,l,u,d,f,h,m,_;return{setters:[function(e){o=e.x,a=e.U,i=e.y,s=e.R,c=e.V,l=e.F},function(e){u=e.bZ,d=e.bG,f=e.C,h=e.M,m=e.b2,_=e.b3}],execute:function(){var g=function(e){return o("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.className||"u3-h-5 u3-w-5",viewBox:"0 0 20 20",fill:"currentColor",children:o("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},N=function(e){var t=e.type,r=e.title,n=null;if(t)switch(t){case d.LOCAL_STORAGE:n=o(a,{id:"error.local_storage.title",defaultMessage:"Cannot Load Mexty"});break;case d.PERMALINK_NOT_FOUND:n=o(a,{id:"permalink.error.title",defaultMessage:"Message Not Found"});break;case d.OAUTH_ACCESS_DENIED:n=o(a,{id:"error.oauth_access_denied.title",defaultMessage:"Authorization Error"});break;case d.OAUTH_MISSING_CODE:n=o(a,{id:"error.oauth_missing_code.title",defaultMessage:"Mattermost Needs Your Help"});break;case d.OAUTH_INVALID_REDIRECT_URL:case d.OAUTH_INVALID_PARAM:n=o(a,{id:"error.oauth_invalid_param.title",defaultMessage:"OAuth Parameter Error"});break;case d.TEAM_NOT_FOUND:n=o(a,{id:"error.team_not_found.title",defaultMessage:"Team Not Found"});break;case d.CHANNEL_NOT_FOUND:n=o(a,{id:"error.channel_not_found.title",defaultMessage:"Channel Not Found"});break;case d.GROUP_NOT_FOUND:n=o(a,{id:"error.group_not_found.title",defaultMessage:"Nhóm không tồn tại"});break;case d.CHANNEL_BANNED:n=o(a,{id:"error.channel_not_found.title",defaultMessage:"Không có quyền xem nhóm"});break;case d.PAGE_NOT_FOUND:default:n=o(a,{id:"error.not_found.title",defaultMessage:"Page Not Found"})}else n=r||u("error.generic.title","Error");return n},p=function(e){var t=e.type,r=e.message,n=e.service,s=e.isGuest,c=null;if(t)switch(t){case d.LOCAL_STORAGE:c=i("div",{children:[o(a,{id:"error.local_storage.message",defaultMessage:"Mattermost was unable to load because a setting in your browser prevents the use of its local storage features. To allow Mattermost to load, try the following actions:"}),i("ul",{children:[o("li",{children:o(a,{id:"error.local_storage.help1",defaultMessage:"Enable cookies"})}),o("li",{children:o(a,{id:"error.local_storage.help2",defaultMessage:"Turn off private browsing"})}),o("li",{children:o(a,{id:"error.local_storage.help3",defaultMessage:"Use a supported browser (IE 11, Chrome 61+, Firefox 60+, Safari 12+, Edge 42+)"})})]})]});break;case d.PERMALINK_NOT_FOUND:c=o("p",{children:o(a,{id:"permalink.error.access",defaultMessage:"Permalink belongs to a deleted message or to a channel to which you do not have access."})});break;case d.TEAM_NOT_FOUND:c=o("p",{children:o(a,{id:"error.team_not_found.message",defaultMessage:"The team you're requesting is private or does not exist. Please contact your Administrator for an invitation."})});break;case d.CHANNEL_NOT_FOUND:c=o("p",{children:o(a,s?{id:"error.channel_not_found.message_guest",defaultMessage:"Your guest account has no channels assigned. Please contact an administrator."}:{id:"error.channel_not_found.message",defaultMessage:"The channel you're requesting is private or does not exist. Please contact an Administrator to be added to the channel."})});break;case d.GROUP_NOT_FOUND:c=o("p",{children:o(a,s?{id:"error.group_not_found.message_guest",defaultMessage:"Nhóm không tồn tại hoặc không có quyền xem nhóm."}:{id:"error.group_not_found.message",defaultMessage:"Nhóm không tồn tại hoặc không có quyền xem nhóm."})});break;case d.CHANNEL_BANNED:c=o("p",{children:o(a,s?{id:"error.channel_banned.message_guest",defaultMessage:"Bạn đã bị chặn xem nhóm. Hãy liên hệ Admin để được hỗ trợ."}:{id:"error.channel_banned.message",defaultMessage:"Bạn đã bị chặn xem nhóm. Hãy liên hệ Admin để được hỗ trợ."})});break;case d.OAUTH_ACCESS_DENIED:c=o("p",{children:o(a,{id:"error.oauth_access_denied",defaultMessage:"You must authorize Mattermost to log in with {service}.",values:{service:n}})});break;case d.OAUTH_INVALID_REDIRECT_URL:case d.OAUTH_INVALID_PARAM:c=o("p",{children:r});break;case d.PAGE_NOT_FOUND:default:c=o("p",{children:o(a,{id:"error.not_found.message",defaultMessage:"The page you were trying to reach does not exist"})})}else c=o("p",r?{children:r}:{children:o(a,{id:"error.generic.message",defaultMessage:"An error has occurred."})});return c},b="mqik-94f05ec6",y="mqik-33cfbf8b",O="mqik-b53e00af",k="mqik-9886d584",A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(m,e);var s,l,u,h=n(m);function m(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),h.call(this,e)}return s=m,(l=[{key:"componentDidMount",value:function(){var e;null===(e=document.getElementById("mexty-quik"))||void 0===e||e.setAttribute("class","sticky error")}},{key:"componentWillUnmount",value:function(){var e;null===(e=document.getElementById("mexty-quik"))||void 0===e||e.removeAttribute("class")}},{key:"render",value:function(){var e,t=this.props,r=t.isGuest,n=t.location,s=new URLSearchParams(n.search),l=s.get("type");return d.PERMALINK_NOT_FOUND,e=l===d.TEAM_NOT_FOUND?o(c,{to:"/",children:o(a,{id:"error.generic.link",defaultMessage:"Back to {siteName}",values:{siteName:this.props.siteName}})}):l===d.CHANNEL_NOT_FOUND&&r?o(c,{to:"/",children:o(a,{id:"error.channelNotFound.guest_link",defaultMessage:"Back"})}):l===d.CHANNEL_NOT_FOUND||l===d.GROUP_NOT_FOUND||l===d.CHANNEL_BANNED?o(c,{to:s.get("returnTo"),children:o(a,{id:"error.channelNotFound.link",defaultMessage:"Back to {defaultChannelName}",values:{defaultChannelName:f.DEFAULT_CHANNEL_UI_NAME}})}):l===d.OAUTH_ACCESS_DENIED||l===d.OAUTH_MISSING_CODE?o(c,{to:"/connect",children:o(a,{id:"error.generic.link_login",defaultMessage:"Back to Login Page"})}):l===d.OAUTH_INVALID_PARAM||l===d.OAUTH_INVALID_REDIRECT_URL?null:o(c,{to:"/",children:o(a,{id:"error.generic.link",defaultMessage:"Back to {siteName}",values:{siteName:this.props.siteName}})}),o("div",{className:b,children:i("div",{className:y,children:[o("div",{className:O,children:o(g,{className:"u3-w-20 u3-h-20 u3-text-secondary"})}),i("div",{className:k,children:[o("h2",{"data-testid":"errorMessageTitle",children:o(N,{type:l,title:""})}),o(p,{type:l,message:"",service:"",isGuest:r}),e]})]})})}}])&&t(s.prototype,l),u&&t(s,u),Object.defineProperty(s,"prototype",{writable:!1}),m}(s.Component);e("default",l((function(e){var t=h(e),r=m(e);return{siteName:t.SiteName,isGuest:Boolean(r&&_(r))}}),(function(e){return{}}))(A))}}}))}();
