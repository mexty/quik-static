import{B as e,y as i,A as r,x as s,F as t,G as n}from"./vendor.bbf9911b.js";import{$ as a,b2 as c}from"./index.2c95629f.js";import{r as o,b as l}from"./index.3fc44a90.js";var u="mqik-60f4e87e",d="mqik-8589d34b",f="mqik-1d18b684",m="mqik-8bc66879";const h=["/connect","/error","/initial"];var p=t=>{const[n,a]=e.exports.useState(!1),[c,l]=e.exports.useState(""),{currentUser:p,actions:b,location:x,history:v}=t,g=async()=>{""!==c&&l("");const{data:e,error:i}=await b.userConnect();if(e){const e=(r=x.search,new URLSearchParams(r).get("next")||"");return e&&-1===h.indexOf(e)?v.replace(e):k()}var r;i&&l(i.message)},k=async()=>{a(!0),await o(t.history)};return e.exports.useEffect((()=>{if(t.initializing||!p){if(t.initializing||p&&n)return()=>{};g()}else k()}),[]),i("div",{className:r(u),children:[s("div",{className:r(d,"u3-hidden"),children:s("p",{children:"Kết nối tài khoản"})}),c?i("div",{className:f,children:[s("p",{children:c}),s("button",{className:m,onClick:g,children:"Thử lại"})]}):null]})};var b=t((function(e){return{initializing:e.requests.users.logout.status===a.SUCCESS||!e.storage.initialized,currentUser:c(e)}}),(function(e){return{actions:n({userConnect:l},e)}}))(p);export{b as default};
