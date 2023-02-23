import{r as C,j as g,a as z,R as Ot,c as za}from"./client-14ab808f.js";var ls={},Wa={get exports(){return ls},set exports(e){ls=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var s=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var o=typeof r;if(o==="string"||o==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&s.push(a)}}else if(o==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var l in r)t.call(r,l)&&r[l]&&s.push(l)}}}return s.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Wa);const ke=ls,Qa=["as","disabled"];function Xa(e,t){if(e==null)return{};var n={},s=Object.keys(e),i,r;for(r=0;r<s.length;r++)i=s[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ya(e){return!e||e.trim()==="#"}function Sr({tagName:e,disabled:t,href:n,target:s,rel:i,role:r,onClick:o,tabIndex:a=0,type:l}){e||(n!=null||s!=null||i!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const u=f=>{if((t||e==="a"&&Ya(n))&&f.preventDefault(),t){f.stopPropagation();return}o==null||o(f)},h=f=>{f.key===" "&&(f.preventDefault(),u(f))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:r??"button",disabled:void 0,tabIndex:t?void 0:a,href:n,target:e==="a"?s:void 0,"aria-disabled":t||void 0,rel:e==="a"?i:void 0,onClick:u,onKeyDown:h},c]}const Ja=C.forwardRef((e,t)=>{let{as:n,disabled:s}=e,i=Xa(e,Qa);const[r,{tagName:o}]=Sr(Object.assign({tagName:n,disabled:s},i));return g(o,Object.assign({},i,r,{ref:t}))});Ja.displayName="Button";const Za=["xxl","xl","lg","md","sm","xs"],tl="xs",Ls=C.createContext({prefixes:{},breakpoints:Za,minBreakpoint:tl});function Tn(e,t){const{prefixes:n}=C.useContext(Ls);return e||n[t]||t}function Ar(){const{breakpoints:e}=C.useContext(Ls);return e}function Dr(){const{minBreakpoint:e}=C.useContext(Ls);return e}const el={variant:"primary",active:!1,disabled:!1},lt=C.forwardRef(({as:e,bsPrefix:t,variant:n,size:s,active:i,className:r,...o},a)=>{const l=Tn(t,"btn"),[c,{tagName:u}]=Sr({tagName:e,...o});return g(u,{...c,...o,ref:a,className:ke(r,l,i&&"active",n&&`${l}-${n}`,s&&`${l}-${s}`,o.href&&o.disabled&&"disabled")})});lt.displayName="Button";lt.defaultProps=el;var rt={},nl={get exports(){return rt},set exports(e){rt=e}},sl="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",il=sl,rl=il;function _r(){}function Nr(){}Nr.resetWarningCache=_r;var ol=function(){function e(s,i,r,o,a,l){if(l!==rl){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Nr,resetWarningCache:_r};return n.PropTypes=n,n};nl.exports=ol();function al({as:e,bsPrefix:t,className:n,...s}){t=Tn(t,"col");const i=Ar(),r=Dr(),o=[],a=[];return i.forEach(l=>{const c=s[l];delete s[l];let u,h,f;typeof c=="object"&&c!=null?{span:u,offset:h,order:f}=c:u=c;const E=l!==r?`-${l}`:"";u&&o.push(u===!0?`${t}${E}`:`${t}${E}-${u}`),f!=null&&a.push(`order${E}-${f}`),h!=null&&a.push(`offset${E}-${h}`)}),[{...s,className:ke(n,...o,...a)},{as:e,bsPrefix:t,spans:o}]}const kr=C.forwardRef((e,t)=>{const[{className:n,...s},{as:i="div",bsPrefix:r,spans:o}]=al(e);return g(i,{...s,ref:t,className:ke(n,!o.length&&r)})});kr.displayName="Col";const ft=kr,ll={fluid:!1},Ps=C.forwardRef(({bsPrefix:e,fluid:t,as:n="div",className:s,...i},r)=>{const o=Tn(e,"container"),a=typeof t=="string"?`-${t}`:"-fluid";return g(n,{ref:r,...i,className:ke(s,t?`${o}${a}`:o)})});Ps.displayName="Container";Ps.defaultProps=ll;const Bs=Ps,xr=C.forwardRef(({bsPrefix:e,className:t,as:n="div",...s},i)=>{const r=Tn(e,"row"),o=Ar(),a=Dr(),l=`${r}-cols`,c=[];return o.forEach(u=>{const h=s[u];delete s[u];let f;h!=null&&typeof h=="object"?{cols:f}=h:f=h;const E=u!==a?`-${u}`:"";f!=null&&c.push(`${l}${E}-${f}`)}),g(n,{ref:i,...s,className:ke(t,r,...c)})});xr.displayName="Row";const Fs=xr,cl="_z_4nbi7_1",ul={z:cl},hl=({CallbackFunction:e})=>{const t=new URLSearchParams(window.location.search),n=t.get("team"),s=t.get("match"),[i,r]=C.useState(0),[o,a]=C.useState(0);return C.useEffect(()=>{r(n),a(s)},[]),g("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(50,50,50,0.8)",position:"fixed",top:"0%",zIndex:"99999999 !importiant",display:"block"},children:z("div",{className:ul.z,style:{width:"80%",height:"80%",backgroundColor:"var(--Background)",border:"2px solid var(--Text)",borderRadius:"8px",position:"absolute",top:"10%",left:"10%",zIndex:"99999 !importiant"},children:[g("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Match Number:"}),g("input",{value:i,onChange:l=>{r(l.target.value)},type:"number",style:{width:"20%",height:"10%",marginTop:"1%",zIndex:"99999 !importiant",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),g("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Team Number:"}),g("input",{value:o,onChange:l=>{a(l.target.value)},type:"number",style:{width:"20%",zIndex:"99999 !importiant",height:"10%",marginTop:"1%",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),g("button",{style:{width:"100%",height:"auto",position:"absolute",bottom:"0%",color:"var(--Text)",border:"2px solid var(--Text)",borderRadius:"8px",backgroundColor:"var(--ButtonsMain)"},onClick:()=>{console.log("Chose Team @ "+i+" : on Match "+o),e(i,o)},children:"CONFIRM"})]})})};var dl=["color","size","title"];function cs(){return cs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},cs.apply(this,arguments)}function fl(e,t){if(e==null)return{};var n=pl(e,t),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function pl(e,t){if(e==null)return{};var n={},s=Object.keys(e),i,r;for(r=0;r<s.length;r++)i=s[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Vs=C.forwardRef(function(e,t){var n=e.color,s=e.size,i=e.title,r=fl(e,dl);return Ot.createElement("svg",cs({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:n},r),i?Ot.createElement("title",null,i):null,Ot.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))});Vs.propTypes={color:rt.string,size:rt.oneOfType([rt.string,rt.number]),title:rt.string};Vs.defaultProps={color:"currentColor",size:"1em",title:null};const gl=Vs;var ml=["color","size","title"];function us(){return us=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},us.apply(this,arguments)}function yl(e,t){if(e==null)return{};var n=vl(e,t),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function vl(e,t){if(e==null)return{};var n={},s=Object.keys(e),i,r;for(r=0;r<s.length;r++)i=s[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Us=C.forwardRef(function(e,t){var n=e.color,s=e.size,i=e.title,r=yl(e,ml);return Ot.createElement("svg",us({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:n},r),i?Ot.createElement("title",null,i):null,Ot.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))});Us.propTypes={color:rt.string,size:rt.oneOfType([rt.string,rt.number]),title:rt.string};Us.defaultProps={color:"currentColor",size:"1em",title:null};const wl=Us;const Ri=({Title:e,ColorA:t,ColorB:n,setNum:s,Num:i})=>z("div",{children:[g("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px"},children:e}),z(Fs,{children:[g(ft,{children:z(lt,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>s(i<=0?0:--i),children:[" ",g(gl,{color:"var(--ArrowColor)"})," "]})}),g(ft,{children:g("div",{style:{width:"100%",height:"100%",backgroundColor:"var("+n+")",border:"0px solid white",color:"var(--Text)",borderRadius:"9px",textAlign:"center",verticalAlign:"middle",lineHeight:"400%"},children:i})}),g(ft,{children:z(lt,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>s(++i),children:[" ",g(wl,{color:"var(--ArrowColor)"})," "]})})]})]}),it=({Title:e,isCone:t,setValue:n,Value:s})=>g(Bs,{fluid:!0,children:t?g(Ri,{Title:e,setNum:n,Num:s,ColorA:"--ConesPrimary",ColorB:"--ConesSecondary"}):g(Ri,{Title:e,setNum:n,Num:s,ColorA:"--CubesPrimary",ColorB:"--CubesSecondary"})}),Mi=({Title:e,isTicked:t,onTicked:n,isEnd:s})=>g(Bs,{fluid:!0,children:z("div",{children:[g("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px",marginLeft:"5px"},children:e}),z(Fs,{style:{marginBottom:"10px"},children:[g(ft,{children:g(lt,{onClick:()=>{n(0)},style:{width:"100%",height:"100%",backgroundColor:t==0?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==0?"bold":"normal",border:"2px solid black"},children:"Off"})}),s?g(ft,{children:g(lt,{onClick:()=>{n(1)},style:{width:"100%",height:"100%",backgroundColor:t==1?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==1?"bold":"normal",border:"2px solid black"},children:"Parked"})}):"",g(ft,{children:g(lt,{onClick:()=>{n(2)},style:{width:"100%",height:"100%",backgroundColor:t==2?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==2?"bold":"normal",border:"2px solid black"},children:"Docked"})}),g(ft,{children:g(lt,{onClick:()=>{n(3)},style:{width:"100%",height:"100%",backgroundColor:t==3?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==3?"bold":"normal",border:"2px solid black"},children:"Docked & Engaged (BALANCED)"})})]})]})}),El=({Title:e,isTicked:t,onTicked:n})=>g(Bs,{fluid:!0,children:z("div",{children:[g("div",{style:{width:"auto",height:"100%",color:"white",textDecoration:"underline",marginBottom:"5px",marginLeft:"5px"},children:e}),z(Fs,{style:{marginBottom:"10px"},children:[g(ft,{children:g(lt,{onClick:()=>{n(!1)},style:{width:"100%",height:"100%",backgroundColor:t==!1?"var(--TickSelected)":"var(--TickDeselected)",border:"2px solid black"},children:"Lose"})}),g(ft,{children:g(lt,{onClick:()=>{n(!0)},style:{width:"100%",height:"100%",backgroundColor:t==!0?"var(--TickSelected)":"var(--TickDeselected)",border:"2px solid black"},children:"Win"})})]})]})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Tl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Rr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,E=c&63;l||(E=64,o||(f=64)),s.push(n[u],n[h],n[f],n[E])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Or(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Tl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const E=a<<4&240|c>>2;if(s.push(E),h!==64){const b=c<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},bl=function(e){const t=Or(e);return Rr.encodeByteArray(t,!0)},en=function(e){return bl(e).replace(/\./g,"")},Cl=function(e){try{return Rr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=()=>Il().__FIREBASE_DEFAULTS__,Al=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Dl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cl(e[1]);return t&&JSON.parse(t)},Mr=()=>{try{return Sl()||Al()||Dl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_l=e=>{var t,n;return(n=(t=Mr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Nl=e=>{const t=_l(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},kl=()=>{var e;return(e=Mr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[en(JSON.stringify(n)),en(JSON.stringify(o)),a].join(".")}function Rl(){try{return typeof indexedDB=="object"}catch{return!1}}function Ml(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="FirebaseError";class Zt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ll,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Pl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zt(i,a,s)}}function Pl(e,t){return e.replace(Bl,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Bl=/\{\$([^}]+)}/g;function hs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Li(r)&&Li(o)){if(!hs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Li(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return e&&e._delegate?e._delegate:e}class ye{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new xl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ul(t))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=_t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_t){return this.instances.has(t)}getOptions(t=_t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=_t){return this.component?this.component.multipleInstances?t:_t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vl(e){return e===_t?void 0:e}function Ul(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(A||(A={}));const jl={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Hl=A.INFO,Kl={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},ql=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Kl[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pr{constructor(t){this.name=t,this._logLevel=Hl,this._logHandler=ql,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}const Gl=(e,t)=>t.some(n=>e instanceof n);let Pi,Bi;function zl(){return Pi||(Pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wl(){return Bi||(Bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Br=new WeakMap,ds=new WeakMap,Fr=new WeakMap,Qn=new WeakMap,$s=new WeakMap;function Ql(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(wt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Br.set(n,e)}).catch(()=>{}),$s.set(t,e),t}function Xl(e){if(ds.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ds.set(e,t)}let fs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ds.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yl(e){fs=e(fs)}function Jl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Xn(this),t,...n);return Fr.set(s,t.sort?t.sort():[t]),wt(s)}:Wl().includes(e)?function(...t){return e.apply(Xn(this),t),wt(Br.get(this))}:function(...t){return wt(e.apply(Xn(this),t))}}function Zl(e){return typeof e=="function"?Jl(e):(e instanceof IDBTransaction&&Xl(e),Gl(e,zl())?new Proxy(e,fs):e)}function wt(e){if(e instanceof IDBRequest)return Ql(e);if(Qn.has(e))return Qn.get(e);const t=Zl(e);return t!==e&&(Qn.set(e,t),$s.set(t,e)),t}const Xn=e=>$s.get(e);function tc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=wt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(wt(o.result),l.oldVersion,l.newVersion,wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ec=["get","getKey","getAll","getAllKeys","count"],nc=["put","add","delete","clear"],Yn=new Map;function Fi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Yn.get(t))return Yn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=nc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ec.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yn.set(t,r),r}Yl(e=>({...e,get:(t,n,s)=>Fi(t,n)||e.get(t,n,s),has:(t,n)=>!!Fi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ic(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ic(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ps="@firebase/app",Vi="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Pr("@firebase/app"),rc="@firebase/app-compat",oc="@firebase/analytics-compat",ac="@firebase/analytics",lc="@firebase/app-check-compat",cc="@firebase/app-check",uc="@firebase/auth",hc="@firebase/auth-compat",dc="@firebase/database",fc="@firebase/database-compat",pc="@firebase/functions",gc="@firebase/functions-compat",mc="@firebase/installations",yc="@firebase/installations-compat",vc="@firebase/messaging",wc="@firebase/messaging-compat",Ec="@firebase/performance",Tc="@firebase/performance-compat",bc="@firebase/remote-config",Cc="@firebase/remote-config-compat",Ic="@firebase/storage",Sc="@firebase/storage-compat",Ac="@firebase/firestore",Dc="@firebase/firestore-compat",_c="firebase",Nc="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]",kc={[ps]:"fire-core",[rc]:"fire-core-compat",[ac]:"fire-analytics",[oc]:"fire-analytics-compat",[cc]:"fire-app-check",[lc]:"fire-app-check-compat",[uc]:"fire-auth",[hc]:"fire-auth-compat",[dc]:"fire-rtdb",[fc]:"fire-rtdb-compat",[pc]:"fire-fn",[gc]:"fire-fn-compat",[mc]:"fire-iid",[yc]:"fire-iid-compat",[vc]:"fire-fcm",[wc]:"fire-fcm-compat",[Ec]:"fire-perf",[Tc]:"fire-perf-compat",[bc]:"fire-rc",[Cc]:"fire-rc-compat",[Ic]:"fire-gcs",[Sc]:"fire-gcs-compat",[Ac]:"fire-fst",[Dc]:"fire-fst-compat","fire-js":"fire-js",[_c]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,ms=new Map;function xc(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function sn(e){const t=e.name;if(ms.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,e);for(const n of nn.values())xc(n,e);return!0}function Oc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Et=new Lr("app","Firebase",Rc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=Nc;function Vr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:gs,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});if(n||(n=kl()),!n)throw Et.create("no-options");const r=nn.get(i);if(r){if(hs(n,r.options)&&hs(s,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const o=new $l(i);for(const l of ms.values())o.addComponent(l);const a=new Mc(n,s,o);return nn.set(i,a),a}function Pc(e=gs){const t=nn.get(e);if(!t&&e===gs)return Vr();if(!t)throw Et.create("no-app",{appName:e});return t}function Ht(e,t,n){var s;let i=(s=kc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}sn(new ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="firebase-heartbeat-database",Fc=1,ve="firebase-heartbeat-store";let Jn=null;function Ur(){return Jn||(Jn=tc(Bc,Fc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ve)}}}).catch(e=>{throw Et.create("idb-open",{originalErrorMessage:e.message})})),Jn}async function Vc(e){try{return(await Ur()).transaction(ve).objectStore(ve).get($r(e))}catch(t){if(t instanceof Zt)Lt.warn(t.message);else{const n=Et.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(n.message)}}}async function Ui(e,t){try{const s=(await Ur()).transaction(ve,"readwrite");return await s.objectStore(ve).put(t,$r(e)),s.done}catch(n){if(n instanceof Zt)Lt.warn(n.message);else{const s=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(s.message)}}}function $r(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=1024,$c=30*24*60*60*1e3;class jc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$i();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=$c}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$i(),{heartbeatsToSend:n,unsentEntries:s}=Hc(this._heartbeatsCache.heartbeats),i=en(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $i(){return new Date().toISOString().substring(0,10)}function Hc(e,t=Uc){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ji(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ji(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rl()?Ml().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ji(e){return en(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e){sn(new ye("platform-logger",t=>new sc(t),"PRIVATE")),sn(new ye("heartbeat",t=>new jc(t),"PRIVATE")),Ht(ps,Vi,e),Ht(ps,Vi,"esm2017"),Ht("fire-js","")}qc("");var Gc="firebase",zc="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Gc,zc,"app");var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,js=js||{},v=Wc||self;function rn(){}function bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function xe(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Qc(e){return Object.prototype.hasOwnProperty.call(e,Zn)&&e[Zn]||(e[Zn]=++Xc)}var Zn="closure_uid_"+(1e9*Math.random()>>>0),Xc=0;function Yc(e,t,n){return e.call.apply(e.bind,arguments)}function Jc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Yc:X=Jc,X.apply(null,arguments)}function Ge(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function St(){this.s=this.s,this.o=this.o}var Zc=0;St.prototype.s=!1;St.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zc!=0)&&Qc(this)};St.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hs(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Hi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var tu=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",rn,t),v.removeEventListener("test",rn,t)}catch{}return e}();function on(e){return/^[\s\xa0]*$/.test(e)}var Ki=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ts(e,t){return e<t?-1:e>t?1:0}function Cn(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return Cn().indexOf(e)!=-1}function Ks(e){return Ks[" "](e),e}Ks[" "]=rn;function eu(e){var t=iu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var nu=ut("Opera"),Gt=ut("Trident")||ut("MSIE"),Hr=ut("Edge"),ys=Hr||Gt,Kr=ut("Gecko")&&!(Cn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),su=Cn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function qr(){var e=v.document;return e?e.documentMode:void 0}var an;t:{var es="",ns=function(){var e=Cn();if(Kr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Hr)return/Edge\/([\d\.]+)/.exec(e);if(Gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(su)return/WebKit\/(\S+)/.exec(e);if(nu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ns&&(es=ns?ns[1]:""),Gt){var ss=qr();if(ss!=null&&ss>parseFloat(es)){an=String(ss);break t}}an=es}var iu={};function ru(){return eu(function(){let e=0;const t=Ki(String(an)).split("."),n=Ki("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=ts(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ts(i[2].length==0,r[2].length==0)||ts(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var vs;if(v.document&&Gt){var qi=qr();vs=qi||parseInt(an,10)||void 0}else vs=void 0;var ou=vs;function we(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Kr){t:{try{Ks(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:au[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&we.X.h.call(this)}}K(we,Y);var au={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),lu=0;function cu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++lu,this.ba=this.ea=!1}function In(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function qs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Gr(e){const t={};for(const n in e)t[n]=e[n];return t}const Gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Gi.length;r++)n=Gi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Sn(e){this.src=e,this.g={},this.h=0}Sn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Es(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new cu(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function ws(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=jr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(In(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Es(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Gs="closure_lm_"+(1e6*Math.random()|0),is={};function Wr(e,t,n,s,i){if(s&&s.once)return Xr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Wr(e,t[r],n,s,i);return null}return n=Qs(n),e&&e[Oe]?e.N(t,n,xe(s)?!!s.capture:!!s,i):Qr(e,t,n,!1,s,i)}function Qr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=xe(i)?!!i.capture:!!i,a=Ws(e);if(a||(e[Gs]=a=new Sn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=uu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)tu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Jr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uu(){function e(n){return t.call(e.src,e.listener,n)}const t=hu;return e}function Xr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Xr(e,t[r],n,s,i);return null}return n=Qs(n),e&&e[Oe]?e.O(t,n,xe(s)?!!s.capture:!!s,i):Qr(e,t,n,!0,s,i)}function Yr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Yr(e,t[r],n,s,i);else s=xe(s)?!!s.capture:!!s,n=Qs(n),e&&e[Oe]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Es(r,n,s,i),-1<n&&(In(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ws(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Es(t,n,s,i)),(n=-1<e?t[e]:null)&&zs(n))}function zs(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Oe])ws(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Jr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ws(t))?(ws(n,e),n.h==0&&(n.src=null,t[Gs]=null)):In(e)}}}function Jr(e){return e in is?is[e]:is[e]="on"+e}function hu(e,t){if(e.ba)e=!0;else{t=new we(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&zs(e),e=n.call(s,t)}return e}function Ws(e){return e=e[Gs],e instanceof Sn?e:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qs(e){return typeof e=="function"?e:(e[rs]||(e[rs]=function(t){return e.handleEvent(t)}),e[rs])}function U(){St.call(this),this.i=new Sn(this),this.P=this,this.I=null}K(U,St);U.prototype[Oe]=!0;U.prototype.removeEventListener=function(e,t,n,s){Yr(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(s,e),zr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ze(o,s,!0,t)&&i}if(o=t.g=e,i=ze(o,s,!0,t)&&i,i=ze(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ze(o,s,!1,t)&&i}U.prototype.M=function(){if(U.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)In(n[s]);delete e.g[t],e.h--}}this.I=null};U.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};U.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ws(e.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Xs=v.JSON.stringify;function du(){var e=eo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class fu{constructor(){this.h=this.g=null}add(t,n){const s=Zr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new pu,e=>e.reset());class pu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gu(e){v.setTimeout(()=>{throw e},0)}function to(e,t){Ts||mu(),bs||(Ts(),bs=!0),eo.add(e,t)}var Ts;function mu(){var e=v.Promise.resolve(void 0);Ts=function(){e.then(yu)}}var bs=!1,eo=new fu;function yu(){for(var e;e=du();){try{e.h.call(e.g)}catch(n){gu(n)}var t=Zr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bs=!1}function An(e,t){U.call(this),this.h=e||1,this.g=t||v,this.j=X(this.lb,this),this.l=Date.now()}K(An,U);m=An.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Ys(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ys(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){An.X.M.call(this),Ys(this),delete this.g};function Js(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function no(e){e.g=Js(()=>{e.g=null,e.i&&(e.i=!1,no(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class vu extends St{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:no(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(e){St.call(this),this.h=e,this.g={}}K(Ee,St);var zi=[];function so(e,t,n,s){Array.isArray(n)||(n&&(zi[0]=n.toString()),n=zi);for(var i=0;i<n.length;i++){var r=Wr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function io(e){qs(e.g,function(t,n){this.g.hasOwnProperty(n)&&zs(t)},e),e.g={}}Ee.prototype.M=function(){Ee.X.M.call(this),io(this)};Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dn(){this.g=!0}Dn.prototype.Aa=function(){this.g=!1};function wu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Eu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function jt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+bu(e,n)+(s?" "+s:"")})}function Tu(e,t){e.info(function(){return"TIMEOUT: "+t})}Dn.prototype.info=function(){};function bu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xs(n)}catch{return t}}var Vt={},Wi=null;function _n(){return Wi=Wi||new U}Vt.Pa="serverreachability";function ro(e){Y.call(this,Vt.Pa,e)}K(ro,Y);function Te(e){const t=_n();H(t,new ro(t))}Vt.STAT_EVENT="statevent";function oo(e,t){Y.call(this,Vt.STAT_EVENT,e),this.stat=t}K(oo,Y);function J(e){const t=_n();H(t,new oo(t,e))}Vt.Qa="timingevent";function ao(e,t){Y.call(this,Vt.Qa,e),this.size=t}K(ao,Y);function Re(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Nn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zs(){}Zs.prototype.h=null;function Qi(e){return e.h||(e.h=e.i())}function co(){}var Me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ti(){Y.call(this,"d")}K(ti,Y);function ei(){Y.call(this,"c")}K(ei,Y);var Cs;function kn(){}K(kn,Zs);kn.prototype.g=function(){return new XMLHttpRequest};kn.prototype.i=function(){return{}};Cs=new kn;function Le(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Ee(this),this.O=Cu,e=ys?125:void 0,this.T=new An(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new uo}function uo(){this.i=null,this.g="",this.h=!1}var Cu=45e3,Is={},ln={};m=Le.prototype;m.setTimeout=function(e){this.O=e};function Ss(e,t,n){e.K=1,e.v=On(yt(t)),e.s=n,e.P=!0,ho(e,null)}function ho(e,t){e.F=Date.now(),Pe(e),e.A=yt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Eo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new uo,e.g=$o(e.l,n?t:null,!e.s),0<e.N&&(e.L=new vu(X(e.La,e,e.g),e.N)),so(e.S,e.g,"readystatechange",e.ib),t=e.H?Gr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Te(),wu(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&pt(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)t:{const u=pt(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ys||this.g&&(this.h.h||this.g.fa()||Zi(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Te(3):Te(2)),xn(this);var n=this.g.aa();this.Y=n;e:if(fo(this)){var s=Zi(this.g);e="";var i=s.length,r=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),he(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Eu(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!on(a)){var c=a;break e}}c=null}if(n=c)jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,As(this,n);else{this.i=!1,this.o=3,J(12),Nt(this),he(this);break t}}this.P?(po(this,u,o),ys&&this.i&&u==3&&(so(this.S,this.T,"tick",this.hb),this.T.start())):(jt(this.j,this.m,o,null),As(this,o)),u==4&&Nt(this),this.i&&!this.I&&(u==4?Bo(this.l,this):(this.i=!1,Pe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),Nt(this),he(this)}}}catch{}finally{}};function fo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function po(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Iu(e,n),i==ln){t==4&&(e.o=4,J(14),s=!1),jt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Is){e.o=4,J(15),jt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else jt(e.j,e.m,i,null),As(e,i);fo(e)&&i!=ln&&i!=Is&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,J(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),li(t),t.K=!0,J(11))):(jt(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),he(e))}m.hb=function(){if(this.g){var e=pt(this.g),t=this.g.fa();this.C<t.length&&(xn(this),po(this,e,t),this.i&&e!=4&&Pe(this))}};function Iu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ln:(n=Number(t.substring(n,s)),isNaN(n)?Is:(s+=1,s+n>t.length?ln:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Nt(this)};function Pe(e){e.V=Date.now()+e.O,go(e,e.O)}function go(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Re(X(e.gb,e),t)}function xn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Tu(this.j,this.A),this.K!=2&&(Te(),J(17)),Nt(this),this.o=2,he(this)):go(this,this.V-e)};function he(e){e.l.G==0||e.I||Bo(e.l,e)}function Nt(e){xn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ys(e.T),io(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function As(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ds(n.h,e))){if(!e.J&&Ds(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)hn(n),Ln(n);else break t;ai(n),J(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Re(X(n.cb,n),6e3));if(1>=Co(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kt(n,11)}else if((e.J||n.g==e)&&hn(n),!on(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const E=e.g;if(E){const b=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var r=s.h;r.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ni(r,r.h),r.h=null))}if(s.D){const D=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.za=D,k(s.F,s.D,D))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Uo(s,s.H?s.ka:null,s.V),o.J){Io(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(xn(a),Pe(a)),s.g=o}else Lo(s);0<n.i.length&&Pn(n)}else c[0]!="stop"&&c[0]!="close"||kt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?kt(n,7):oi(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Te(4)}catch{}}function Su(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(bn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Au(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(bn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function mo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(bn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Au(e),s=Su(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Du(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Rt){this.h=t!==void 0?t:e.h,cn(this,e.j),this.s=e.s,this.g=e.g,un(this,e.m),this.l=e.l,t=e.i;var n=new be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xi(this,n),this.o=e.o}else e&&(n=String(e).match(yo))?(this.h=!!t,cn(this,n[1]||"",!0),this.s=ce(n[2]||""),this.g=ce(n[3]||"",!0),un(this,n[4]),this.l=ce(n[5]||"",!0),Xi(this,n[6]||"",!0),this.o=ce(n[7]||"")):(this.h=!!t,this.i=new be(null,this.h))}Rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ue(t,Yi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ue(t,Yi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ue(n,n.charAt(0)=="/"?ku:Nu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ue(n,Ou)),e.join("")};function yt(e){return new Rt(e)}function cn(e,t,n){e.j=n?ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function un(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xi(e,t,n){t instanceof be?(e.i=t,Ru(e.i,e.h)):(n||(t=ue(t,xu)),e.i=new be(t,e.h))}function k(e,t,n){e.i.set(t,n)}function On(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ue(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,_u),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function _u(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Yi=/[#\/\?@]/g,Nu=/[#\?:]/g,ku=/[#\?]/g,xu=/[#\?@]/g,Ou=/#/g;function be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&Du(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=be.prototype;m.add=function(e,t){At(this),this.i=null,e=te(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function vo(e,t){At(e),t=te(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wo(e,t){return At(e),t=te(e,t),e.g.has(t)}m.forEach=function(e,t){At(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};m.oa=function(){At(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};m.W=function(e){At(this);let t=[];if(typeof e=="string")wo(this,e)&&(t=t.concat(this.g.get(te(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return At(this),this.i=null,e=te(this,e),wo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Eo(e,t,n){vo(e,t),0<n.length&&(e.i=null,e.g.set(te(e,t),Hs(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function te(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ru(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(vo(this,s),Eo(this,i,n))},e)),e.j=t}var Mu=class{constructor(t,n){this.h=t,this.g=n}};function To(e){this.l=e||Lu,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ga&&v.g.Ga()&&v.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lu=10;function bo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Co(e){return e.h?1:e.g?e.g.size:0}function Ds(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ni(e,t){e.g?e.g.add(t):e.h=t}function Io(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}To.prototype.cancel=function(){if(this.i=So(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function So(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hs(e.i)}function si(){}si.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)};si.prototype.parse=function(e){return v.JSON.parse(e,void 0)};function Pu(){this.g=new si}function Bu(e,t,n){const s=n||"";try{mo(e,function(i,r){let o=i;xe(i)&&(o=Xs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Fu(e,t){const n=new Dn;if(v.Image){const s=new Image;s.onload=Ge(We,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ge(We,n,s,"TestLoadImage: error",!1,t),s.onabort=Ge(We,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ge(We,n,s,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function We(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Be(e){this.l=e.ac||null,this.j=e.jb||!1}K(Be,Zs);Be.prototype.g=function(){return new Rn(this.l,this.j)};Be.prototype.i=function(e){return function(){return e}}({});function Rn(e,t){U.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Rn,U);var ii=0;m=Rn.prototype;m.open=function(e,t){if(this.readyState!=ii)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ce(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||v).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=ii};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ce(this)),this.g&&(this.readyState=3,Ce(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ao(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ao(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fe(this):Ce(this),this.readyState==3&&Ao(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,Fe(this))};m.Ua=function(e){this.g&&(this.response=e,Fe(this))};m.ga=function(){this.g&&Fe(this)};function Fe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ce(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ce(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Vu=v.JSON.parse;function R(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Do,this.K=this.L=!1}K(R,U);var Do="",Uu=/^https?$/i,$u=["POST","PUT"];m=R.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cs.g(),this.C=this.u?Qi(this.u):Qi(Cs),this.g.onreadystatechange=X(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ji(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=v.FormData&&e instanceof v.FormData,!(0<=jr($u,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ko(this),0<this.B&&((this.K=ju(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.qa,this)):this.A=Js(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ji(this,r)}};function ju(e){return Gt&&ru()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof js<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Ji(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_o(e),Mn(e)}function _o(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),Mn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),R.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?No(this):this.fb())};m.fb=function(){No(this)};function No(e){if(e.h&&typeof js<"u"&&(!e.C[1]||pt(e)!=4||e.aa()!=2)){if(e.v&&pt(e)==4)Js(e.Ha,0,e);else if(H(e,"readystatechange"),pt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(yo)[1]||null;if(!i&&v.self&&v.self.location){var r=v.self.location.protocol;i=r.substr(0,r.length-1)}s=!Uu.test(i?i.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<pt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",_o(e)}}finally{Mn(e)}}}}function Mn(e,t){if(e.g){ko(e);const n=e.g,s=e.C[0]?rn:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function ko(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function pt(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Vu(t)}};function Zi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Do:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xo(e){let t="";return qs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ri(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=xo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function le(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Oo(e){this.Ca=0,this.i=[],this.j=new Dn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=le("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=le("baseRetryDelayMs",5e3,e),this.bb=le("retryDelaySeedMs",1e4,e),this.$a=le("forwardChannelMaxRetries",2,e),this.ta=le("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new To(e&&e.concurrentRequestLimit),this.Fa=new Pu,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Oo.prototype;m.ma=8;m.G=1;function oi(e){if(Ro(e),e.G==3){var t=e.U++,n=yt(e.F);k(n,"SID",e.I),k(n,"RID",t),k(n,"TYPE","terminate"),Ve(e,n),t=new Le(e,e.j,t,void 0),t.K=2,t.v=On(yt(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=$o(t.l,null),t.g.da(t.v)),t.F=Date.now(),Pe(t)}Vo(e)}function Ln(e){e.g&&(li(e),e.g.cancel(),e.g=null)}function Ro(e){Ln(e),e.u&&(v.clearTimeout(e.u),e.u=null),hn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Pn(e){bo(e.h)||e.m||(e.m=!0,to(e.Ja,e),e.C=0)}function Hu(e,t){return Co(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Re(X(e.Ja,e,t),Fo(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Le(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Gr(r),zr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Mo(this,i,t),n=yt(this.F),k(n,"RID",e),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),Ve(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(xo(r)))+"&"+t:this.o&&ri(n,this.o,r)),ni(this.h,i),this.Ya&&k(n,"TYPE","init"),this.O?(k(n,"$req",t),k(n,"SID","null"),i.Z=!0,Ss(i,n,null)):Ss(i,n,t),this.G=2}}else this.G==3&&(e?tr(this,e):this.i.length==0||bo(this.h)||tr(this))};function tr(e,t){var n;t?n=t.m:n=e.U++;const s=yt(e.F);k(s,"SID",e.I),k(s,"RID",n),k(s,"AID",e.T),Ve(e,s),e.o&&e.s&&ri(s,e.o,e.s),n=new Le(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Mo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ni(e.h,n),Ss(n,s,t)}function Ve(e,t){e.ia&&qs(e.ia,function(n,s){k(t,s,n)}),e.l&&mo({},function(n,s){k(t,s,n)})}function Mo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?X(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Bu(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Lo(e){e.g||e.u||(e.Z=1,to(e.Ia,e),e.A=0)}function ai(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Re(X(e.Ia,e),Fo(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,Po(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Re(X(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,J(10),Ln(this),Po(this))};function li(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function Po(e){e.g=new Le(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=yt(e.sa);k(t,"RID","rpc"),k(t,"SID",e.I),k(t,"CI",e.L?"0":"1"),k(t,"AID",e.T),k(t,"TYPE","xmlhttp"),Ve(e,t),e.o&&e.s&&ri(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=On(yt(t)),n.s=null,n.P=!0,ho(n,e)}m.cb=function(){this.v!=null&&(this.v=null,Ln(this),ai(this),J(19))};function hn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Bo(e,t){var n=null;if(e.g==t){hn(e),li(e),e.g=null;var s=2}else if(Ds(e.h,t))n=t.D,Io(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=_n(),H(s,new ao(s,n)),Pn(e)}else Lo(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Hu(e,t)||s==2&&ai(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:kt(e,5);break;case 4:kt(e,10);break;case 3:kt(e,6);break;default:kt(e,2)}}}function Fo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function kt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=X(e.kb,e);n||(n=new Rt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||cn(n,"https"),On(n)),Fu(n.toString(),s)}else J(2);e.G=0,e.l&&e.l.va(t),Vo(e),Ro(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Vo(e){if(e.G=0,e.la=[],e.l){const t=So(e.h);(t.length!=0||e.i.length!=0)&&(Hi(e.la,t),Hi(e.la,e.i),e.h.i.length=0,Hs(e.i),e.i.length=0),e.l.ua()}}function Uo(e,t,n){var s=n instanceof Rt?yt(n):new Rt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),un(s,s.m);else{var i=v.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Rt(null,void 0);s&&cn(r,s),t&&(r.g=t),i&&un(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&k(s,n,t),k(s,"VER",e.ma),Ve(e,s),s}function $o(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new R(new Be({jb:!0})):new R(e.ra),t.Ka(e.H),t}function jo(){}m=jo.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function dn(){if(Gt&&!(10<=Number(ou)))throw Error("Environmental error: no available transport.")}dn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){U.call(this),this.g=new Oo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!on(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!on(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ee(this)}K(st,U);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;J(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Uo(e,null,e.V),Pn(e)};st.prototype.close=function(){oi(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Xs(e),e=n);t.i.push(new Mu(t.ab++,e)),t.G==3&&Pn(t)};st.prototype.M=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,st.X.M.call(this)};function Ho(e){ti.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(Ho,ti);function Ko(){ei.call(this),this.status=1}K(Ko,ei);function ee(e){this.g=e}K(ee,jo);ee.prototype.xa=function(){H(this.g,"a")};ee.prototype.wa=function(e){H(this.g,new Ho(e))};ee.prototype.va=function(e){H(this.g,new Ko)};ee.prototype.ua=function(){H(this.g,"b")};dn.prototype.createWebChannel=dn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Nn.NO_ERROR=0;Nn.TIMEOUT=8;Nn.HTTP_ERROR=6;lo.COMPLETE="complete";co.EventType=Me;Me.OPEN="a";Me.CLOSE="b";Me.ERROR="c";Me.MESSAGE="d";U.prototype.listen=U.prototype.N;R.prototype.listenOnce=R.prototype.O;R.prototype.getLastError=R.prototype.Oa;R.prototype.getLastErrorCode=R.prototype.Ea;R.prototype.getStatus=R.prototype.aa;R.prototype.getResponseJson=R.prototype.Sa;R.prototype.getResponseText=R.prototype.fa;R.prototype.send=R.prototype.da;R.prototype.setWithCredentials=R.prototype.Ka;var Ku=function(){return new dn},qu=function(){return _n()},os=Nn,Gu=lo,zu=Vt,er={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Wu=Be,Qe=co,Qu=R;const nr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Pr("@firebase/firestore");function sr(){return Pt.logLevel}function y(e,...t){if(Pt.logLevel<=A.DEBUG){const n=t.map(ci);Pt.debug(`Firestore (${ne}): ${e}`,...n)}}function Bt(e,...t){if(Pt.logLevel<=A.ERROR){const n=t.map(ci);Pt.error(`Firestore (${ne}): ${e}`,...n)}}function _s(e,...t){if(Pt.logLevel<=A.WARN){const n=t.map(ci);Pt.warn(`Firestore (${ne}): ${e}`,...n)}}function ci(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: `+e;throw Bt(t),new Error(t)}function P(e,t){e||I()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Zt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Yu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ju{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Mt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new qo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return P(t===null||typeof t=="string"),new G(t)}}class Zu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=G.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(P(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class th{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Zu(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(P(typeof n.token=="string"),this.A=n.token,new eh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=sh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function _(e,t){return e<t?-1:e>t?1:0}function zt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new V(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_(this.nanoseconds,t.nanoseconds):_(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new V(0,0))}static max(){return new x(new V(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ie.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ie?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ie{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const ih=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Ie{construct(t,n,s){return new Q(t,n,s)}static isValidIdentifier(t){return ih.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(O.fromString(t))}static fromName(t){return new T(O.fromString(t).popFirst(5))}static empty(){return new T(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new O(t.slice()))}}function rh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new V(n+1,0):new V(n,s));return new bt(i,T.empty(),t)}function oh(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new bt(x.min(),T.empty(),-1)}static max(){return new bt(x.max(),T.empty(),-1)}}function ah(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:_(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ch{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==lh)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new d((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(t,n){return new d((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Bn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Wo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,n,s,i,r,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ue(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Qo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){return e==null}function pn(e){return e===0&&1/e==-1/0}function hh(e){return typeof e=="number"&&Number.isInteger(e)&&!pn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new vt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new vt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const dh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(e){if(P(!!e),typeof e=="string"){let t=0;const n=dh.exec(e);if(P(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Se(e){return typeof e=="string"?vt.fromBase64String(e):vt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gn(e){const t=Ft(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fh(e)?4:ph(e)?9007199254740991:10:I()}function ht(e,t){if(e===t)return!0;const n=Wt(e);if(n!==Wt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gn(e).isEqual(gn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ft(s.timestampValue),o=Ft(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Se(s.bytesValue).isEqual(Se(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return $(s.geoPointValue.latitude)===$(i.geoPointValue.latitude)&&$(s.geoPointValue.longitude)===$(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $(s.integerValue)===$(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=$(s.doubleValue),o=$(i.doubleValue);return r===o?pn(r)===pn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return zt(e.arrayValue.values||[],t.arrayValue.values||[],ht);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ir(r)!==ir(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ht(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ae(e,t){return(e.values||[]).find(n=>ht(n,t))!==void 0}function Qt(e,t){if(e===t)return 0;const n=Wt(e),s=Wt(t);if(n!==s)return _(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=$(i.integerValue||i.doubleValue),a=$(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return rr(e.timestampValue,t.timestampValue);case 4:return rr(gn(e),gn(t));case 5:return _(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Se(i),a=Se(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_(o[l],a[l]);if(c!==0)return c}return _(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=_($(i.latitude),$(r.latitude));return o!==0?o:_($(i.longitude),$(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Qt(o[l],a[l]);if(c)return c}return _(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Xe.mapValue&&r===Xe.mapValue)return 0;if(i===Xe.mapValue)return 1;if(r===Xe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=_(a[u],c[u]);if(h!==0)return h;const f=Qt(o[a[u]],l[c[u]]);if(f!==0)return f}return _(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function rr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _(e,t);const n=Ft(e),s=Ft(t),i=_(n.seconds,s.seconds);return i!==0?i:_(n.nanos,s.nanos)}function Xt(e){return Ns(e)}function Ns(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Ft(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Se(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ns(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ns(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function ks(e){return!!e&&"integerValue"in e}function hi(e){return!!e&&"arrayValue"in e}function Ze(e){return!!e&&"mapValue"in e}function de(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ue(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=de(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=de(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ph(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n){this.position=t,this.inclusive=n}}function or(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ar(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ht(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{}class F extends Xo{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new mh(t,n,s):n==="array-contains"?new wh(t,s):n==="in"?new Eh(t,s):n==="not-in"?new Th(t,s):n==="array-contains-any"?new bh(t,s):new F(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new yh(t,s):new vh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qt(n,this.value)):n!==null&&Wt(this.value)===Wt(n)&&this.matchesComparison(Qt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ct extends Xo{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Ct(t,n)}matches(t){return Yo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Yo(e){return e.op==="and"}function Jo(e){return gh(e)&&Yo(e)}function gh(e){for(const t of e.filters)if(t instanceof Ct)return!1;return!0}function xs(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Xt(e.value);if(Jo(e))return e.filters.map(t=>xs(t)).join(",");{const t=e.filters.map(n=>xs(n)).join(",");return`${e.op}(${t})`}}function Zo(e,t){return e instanceof F?function(n,s){return s instanceof F&&n.op===s.op&&n.field.isEqual(s.field)&&ht(n.value,s.value)}(e,t):e instanceof Ct?function(n,s){return s instanceof Ct&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Zo(r,s.filters[o]),!0):!1}(e,t):void I()}function ta(e){return e instanceof F?function(t){return`${t.field.canonicalString()} ${t.op} ${Xt(t.value)}`}(e):e instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(ta).join(" ,")+"}"}(e):"Filter"}class mh extends F{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class yh extends F{constructor(t,n){super(t,"in",n),this.keys=ea("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vh extends F{constructor(t,n){super(t,"not-in",n),this.keys=ea("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ea(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class wh extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hi(n)&&Ae(n.arrayValue,this.value)}}class Eh extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class Th extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class bh extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ch(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??j.RED,this.left=i??j.EMPTY,this.right=r??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new j(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return j.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new lr(this.data.getIterator())}getIteratorFrom(t){return new lr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class lr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new ct([])}unionWith(t){let n=new Z(Q.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return zt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ze(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=de(n)}setAll(t){let n=Q.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=de(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ze(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ht(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ze(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Ue(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new at(de(this.value))}}function na(e){const t=[];return Ue(e.fields,(n,s)=>{const i=new Q([n]);if(Ze(s)){const r=na(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ot(t,0,x.min(),x.min(),x.min(),at.empty(),0)}static newFoundDocument(t,n,s,i){return new ot(t,1,n,x.min(),s,i,0)}static newNoDocument(t,n){return new ot(t,2,n,x.min(),x.min(),at.empty(),0)}static newUnknownDocument(t,n){return new ot(t,3,n,x.min(),x.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function cr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Ih(e,t,n,s,i,r,o)}function di(e){const t=N(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>xs(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ui(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xt(s)).join(",")),t.ft=n}return t.ft}function fi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ch(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ar(e.startAt,t.startAt)&&ar(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Sh(e,t,n,s,i,r,o,a){return new Fn(e,t,n,s,i,r,o,a)}function Ah(e){return new Fn(e)}function ur(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _h(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Nh(e){return e.collectionGroup!==null}function Kt(e){const t=N(e);if(t.dt===null){t.dt=[];const n=_h(t),s=Dh(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new fe(n)),t.dt.push(new fe(Q.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new fe(Q.keyField(),r))}}}return t.dt}function Yt(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=cr(t.path,t.collectionGroup,Kt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Kt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new fe(r.field,o))}const s=t.endAt?new mn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new mn(t.startAt.position,t.startAt.inclusive):null;t._t=cr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function Os(e,t,n){return new Fn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sa(e,t){return fi(Yt(e),Yt(t))&&e.limitType===t.limitType}function ia(e){return`${di(Yt(e))}|lt:${e.limitType}`}function hr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ta(s)).join(", ")}]`),ui(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xt(s)).join(",")),`Target(${n})`}(Yt(e))}; limitType=${e.limitType})`}function pi(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Kt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=or(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Kt(n),s)||n.endAt&&!function(i,r,o){const a=or(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Kt(n),s))}(e,t)}function kh(e){return(t,n)=>{let s=!1;for(const i of Kt(e)){const r=xh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function xh(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Qt(a,l):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pn(t)?"-0":t}}function oa(e){return{integerValue:""+e}}function Oh(e,t){return hh(t)?oa(t):ra(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this._=void 0}}function Rh(e,t,n){return e instanceof yn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof De?la(e,t):e instanceof _e?ca(e,t):function(s,i){const r=aa(s,i),o=dr(r)+dr(s.gt);return ks(r)&&ks(s.gt)?oa(o):ra(s.yt,o)}(e,t)}function Mh(e,t,n){return e instanceof De?la(e,t):e instanceof _e?ca(e,t):n}function aa(e,t){return e instanceof vn?ks(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class yn extends Vn{}class De extends Vn{constructor(t){super(),this.elements=t}}function la(e,t){const n=ua(t);for(const s of e.elements)n.some(i=>ht(i,s))||n.push(s);return{arrayValue:{values:n}}}class _e extends Vn{constructor(t){super(),this.elements=t}}function ca(e,t){let n=ua(t);for(const s of e.elements)n=n.filter(i=>!ht(i,s));return{arrayValue:{values:n}}}class vn extends Vn{constructor(t,n){super(),this.yt=t,this.gt=n}}function dr(e){return $(e.integerValue||e.doubleValue)}function ua(e){return hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Lh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof De&&s instanceof De||n instanceof _e&&s instanceof _e?zt(n.elements,s.elements,ht):n instanceof vn&&s instanceof vn?ht(n.gt,s.gt):n instanceof yn&&s instanceof yn}(e.transform,t.transform)}class Ph{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function tn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Un{}function ha(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new fa(e.key,gt.none()):new $e(e.key,e.data,gt.none());{const n=e.data,s=at.empty();let i=new Z(Q.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ut(e.key,s,new ct(i.toArray()),gt.none())}}function Bh(e,t,n){e instanceof $e?function(s,i,r){const o=s.value.clone(),a=pr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ut?function(s,i,r){if(!tn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=pr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(da(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function pe(e,t,n,s){return e instanceof $e?function(i,r,o,a){if(!tn(i.precondition,r))return o;const l=i.value.clone(),c=gr(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ut?function(i,r,o,a){if(!tn(i.precondition,r))return o;const l=gr(i.fieldTransforms,a,r),c=r.data;return c.setAll(da(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(i,r,o){return tn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Fh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=aa(s.transform,i||null);r!=null&&(n===null&&(n=at.empty()),n.set(s.field,r))}return n||null}function fr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zt(n,s,(i,r)=>Lh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $e extends Un{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends Un{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function da(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function pr(e,t,n){const s=new Map;P(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Mh(o,a,n[i]))}return s}function gr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Rh(r,o,t))}return s}class fa extends Un{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vh extends Un{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,S;function Uh(e){switch(e){default:return I();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function $h(e){if(e===void 0)return Bt("GRPC error has no .code"),p.UNKNOWN;switch(e){case M.OK:return p.OK;case M.CANCELLED:return p.CANCELLED;case M.UNKNOWN:return p.UNKNOWN;case M.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case M.INTERNAL:return p.INTERNAL;case M.UNAVAILABLE:return p.UNAVAILABLE;case M.UNAUTHENTICATED:return p.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case M.NOT_FOUND:return p.NOT_FOUND;case M.ALREADY_EXISTS:return p.ALREADY_EXISTS;case M.PERMISSION_DENIED:return p.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case M.ABORTED:return p.ABORTED;case M.OUT_OF_RANGE:return p.OUT_OF_RANGE;case M.UNIMPLEMENTED:return p.UNIMPLEMENTED;case M.DATA_LOSS:return p.DATA_LOSS;default:return I()}}(S=M||(M={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ue(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Qo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new et(T.comparator);function wn(){return jh}const pa=new et(T.comparator);function Je(...e){let t=pa;for(const n of e)t=t.insert(n.key,n);return t}function ga(e){let t=pa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function xt(){return ge()}function ma(){return ge()}function ge(){return new se(e=>e.toString(),(e,t)=>e.isEqual(t))}const Hh=new et(T.comparator),Kh=new Z(T.comparator);function W(...e){let t=Kh;for(const n of e)t=t.add(n);return t}const qh=new Z(_);function Gh(){return qh}class zh{constructor(t,n){this.databaseId=t,this.wt=n}}function Rs(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wh(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Qh(e,t){return Rs(e,t.toTimestamp())}function qt(e){return P(!!e),x.fromTimestamp(function(t){const n=Ft(t);return new V(n.seconds,n.nanos)}(e))}function ya(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Xh(e){const t=O.fromString(e);return P(id(t)),t}function Ms(e,t){return ya(e.databaseId,t.path)}function Yh(e){const t=Xh(e);return t.length===4?O.emptyPath():Zh(t)}function Jh(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Zh(e){return P(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function mr(e,t,n){return{name:Ms(e,t),fields:n.value.mapValue.fields}}function td(e,t){let n;if(t instanceof $e)n={update:mr(e,t.key,t.value)};else if(t instanceof fa)n={delete:Ms(e,t.key)};else if(t instanceof Ut)n={update:mr(e,t.key,t.data),updateMask:sd(t.fieldMask)};else{if(!(t instanceof Vh))return I();n={verify:Ms(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof yn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof De)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _e)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Qh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function ed(e,t){return e&&e.length>0?(P(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?qt(s.updateTime):qt(i);return r.isEqual(x.min())&&(r=qt(i)),new Ph(r,s.transformResults||[])}(n,t))):[]}function nd(e){let t=Yh(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){P(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=va(u);return h instanceof Ct&&Jo(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fe($t(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ui(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new mn(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new mn(f,h)}(n.endAt)),Sh(t,i,o,r,a,"F",l,c)}function va(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=$t(t.unaryFilter.field);return F.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$t(t.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$t(t.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$t(t.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return F.create($t(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(n=>va(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function $t(e){return Q.fromServerFormat(e.fieldPath)}function sd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function id(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Bh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=pe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=pe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ma();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=ha(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),W())}isEqual(t){return this.batchId===t.batchId&&zt(this.mutations,t.mutations,(n,s)=>fr(n,s))&&zt(this.baseMutations,t.baseMutations,(n,s)=>fr(n,s))}}class gi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){P(t.mutations.length===s.length);let i=Hh;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new gi(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.ie=t}}function ld(e){const t=nd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.Je=new ud}addToCollectionParentIndex(t,n){return this.Je.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(bt.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class ud{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new Z(O.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Z(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Jt(0)}static vn(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.changes=new se(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&pe(s.mutation,i,ct.empty(),V.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,W()).next(()=>s))}getLocalViewOfDocuments(t,n,s=W()){const i=xt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Je();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=xt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,W()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=wn();const o=ge(),a=ge();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ut)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),pe(u.mutation,c,u.mutation.getFieldMask(),V.now())):o.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new dd(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ge();let i=new et((o,a)=>o-a),r=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||ct.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ma();u.forEach(f=>{if(!r.has(f)){const E=ha(n.get(f),s.get(f));E!==null&&h.set(f,E),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Nh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):d.resolve(xt());let a=-1,l=r;return o.next(c=>d.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?d.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,l,c,W())).next(u=>({batchId:a,changes:ga(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let i=Je();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Je();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const l=function(c,u){return new Fn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,ot.newInvalidDocument(c)))});let o=Je();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&pe(c.mutation,l,ct.empty(),V.now()),pi(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return d.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:qt(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ld(s.bundledQuery),readTime:qt(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.overlays=new et(T.comparator),this.es=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=xt();return d.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=xt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=xt(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=xt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return d.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new od(n,s));let r=this.es.get(n);r===void 0&&(r=W(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.ns=new Z(B.ss),this.rs=new Z(B.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new B(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new B(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new T(new O([])),s=new B(n,t),i=new B(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new T(new O([])),s=new B(n,t),i=new B(n,t+1);let r=W();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new B(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return T.comparator(t.key,n.key)||_(t._s,n._s)}static os(t,n){return _(t._s,n._s)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Z(B.ss)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rd(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Z(_);return n.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),d.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new B(new T(r),0);let a=new Z(_);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),d.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){P(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return d.forEach(n.mutations,i=>{const r=new B(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new B(n,0),i=this.gs.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.Es=t,this.docs=new et(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(t,n){let s=wn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ot.newInvalidDocument(i))}),d.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=wn();const o=n.path,a=new T(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ah(oh(u),s)<=0||(i.has(u.key)||pi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,i){I()}As(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new vd(this)}getSize(t){return d.resolve(this.size)}}class vd extends hd{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.persistence=t,this.Rs=new se(n=>di(n),fi),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.bs=0,this.Ps=new mi,this.targetCount=0,this.vs=Jt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),d.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Jt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Dn(n),d.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Wo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new wd(this),this.indexManager=new cd,this.remoteDocumentCache=function(s){return new yd(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ad(n),this.Ns=new pd(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new md(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Td(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return d.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Td extends ch{constructor(t){super(),this.currentSequenceNumber=t}}class yi{constructor(t){this.persistence=t,this.Fs=new mi,this.$s=null}static Bs(t){return new yi(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),d.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ls,s=>{const i=T.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return d.or([()=>d.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=W(),i=W();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new vi(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(ur(n))return d.resolve(null);let s=Yt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Os(n,null,"F"),s=Yt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=W(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(t,Os(n,null,"F")):this.Bi(t,c,n,l)}))})))}Oi(t,n,s,i){return ur(n)||i.isEqual(x.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(sr()<=A.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hr(n)),this.Bi(t,o,n,rh(i,-1)))})}Fi(t,n){let s=new Z(kh(t));return n.forEach((i,r)=>{pi(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return sr()<=A.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",hr(n)),this.Ni.getDocumentsMatchingQuery(t,n,bt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new et(_),this.Ui=new se(r=>di(r),fi),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Id(e,t,n,s){return new Cd(e,t,n,s)}async function wa(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=W();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Sd(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=d.resolve();return h.forEach(E=>{f=f.next(()=>c.getEntry(a,E)).next(b=>{const D=l.docVersions.get(E);P(D!==null),b.version.compareTo(D)<0&&(u.applyToRemoteDocument(b,l),b.isValidDocument()&&(b.setReadTime(l.commitVersion),c.addEntry(b)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Ad(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Dd(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class yr{constructor(){this.activeTargetIds=Gh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _d{constructor(){this.Lr=new yr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new yr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(l=>(y("RestConnection","Received: ",l),l),l=>{throw _s("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",s),l})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ne,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=kd[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Qu;a.setWithCredentials(!0),a.listenOnce(Gu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case os.NO_ERROR:const c=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(c)),r(c);break;case os.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const u=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const E=function(b){const D=b.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(f.status);o(new w(E,f.message))}else o(new w(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(p.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ku(),o=qu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Wu({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");y("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const f=new xd({Hr:b=>{h?y("Connection","Not sending because WebChannel is closed:",b):(u||(y("Connection","Opening WebChannel transport."),c.open(),u=!0),y("Connection","WebChannel sending:",b),c.send(b))},Jr:()=>c.close()}),E=(b,D,L)=>{b.listen(D,nt=>{try{L(nt)}catch(q){setTimeout(()=>{throw q},0)}})};return E(c,Qe.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),E(c,Qe.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),f.io())}),E(c,Qe.EventType.ERROR,b=>{h||(h=!0,_s("Connection","WebChannel transport errored:",b),f.io(new w(p.UNAVAILABLE,"The operation could not be completed")))}),E(c,Qe.EventType.MESSAGE,b=>{var D;if(!h){const L=b.data[0];P(!!L);const nt=L,q=nt.error||((D=nt[0])===null||D===void 0?void 0:D.error);if(q){y("Connection","WebChannel received error:",q);const ie=q.status;let Dt=function(Ke){const oe=M[Ke];if(oe!==void 0)return $h(oe)}(ie),re=q.message;Dt===void 0&&(Dt=p.INTERNAL,re="Unknown error status: "+ie+" with message "+q.message),h=!0,f.io(new w(Dt,re)),c.close()}else y("Connection","WebChannel received:",L),f.ro(L)}}),E(o,zu.STAT_EVENT,b=>{b.stat===er.PROXY?y("Connection","Detected buffering proxy"):b.stat===er.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function as(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){return new zh(e,!0)}class Ea{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n,s,i,r,o,a,l){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ea(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new w(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Md extends Rd{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(P(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=ed(t.writeResults,t.commitTime),s=qt(t.commitTime);return this.listener.Zo(s,n)}return P(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Jh(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>td(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(p.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Pd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Bt(n),this.ou=!1):y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{He(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=N(a);l._u.add(4),await je(l),l.gu.set("Unknown"),l._u.delete(4),await jn(l)}(this))})}),this.gu=new Pd(s,i)}}async function jn(e){if(He(e))for(const t of e.wu)await t(!0)}async function je(e){for(const t of e.wu)await t(!1)}function He(e){return N(e)._u.size===0}async function Ta(e,t,n){if(!Bn(t))throw t;e._u.add(1),await je(e),e.gu.set("Offline"),n||(n=()=>Ad(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await jn(e)})}function ba(e,t){return t().catch(n=>Ta(e,n,t))}async function Hn(e){const t=N(e),n=It(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Fd(t);)try{const i=await Dd(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,Vd(t,i)}catch(i){await Ta(t,i)}Ca(t)&&Ia(t)}function Fd(e){return He(e)&&e.fu.length<10}function Vd(e,t){e.fu.push(t);const n=It(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ca(e){return He(e)&&!It(e).No()&&e.fu.length>0}function Ia(e){It(e).start()}async function Ud(e){It(e).eu()}async function $d(e){const t=It(e);for(const n of e.fu)t.Xo(n.mutations)}async function jd(e,t,n){const s=e.fu.shift(),i=gi.from(s,t,n);await ba(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Hn(e)}async function Hd(e,t){t&&It(e).Yo&&await async function(n,s){if(i=s.code,Uh(i)&&i!==p.ABORTED){const r=n.fu.shift();It(n).Mo(),await ba(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hn(n)}var i}(e,t),Ca(e)&&Ia(e)}async function wr(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=He(n);n._u.add(3),await je(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await jn(n)}async function Kd(e,t){const n=N(e);t?(n._u.delete(2),await jn(n)):t||(n._u.add(2),await je(n),n.gu.set("Unknown"))}function It(e){return e.Iu||(e.Iu=function(t,n,s){const i=N(t);return i.su(),new Md(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:Ud.bind(null,e),Zr:Hd.bind(null,e),tu:$d.bind(null,e),Zo:jd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Hn(e)):(await e.Iu.stop(),e.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new wi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(e,t){if(Bt("AsyncQueue",`${t}: ${e}`),Bn(e))return new w(p.UNAVAILABLE,`${t}: ${e}`);throw e}class qd{constructor(){this.queries=new se(t=>ia(t),sa),this.onlineState="Unknown",this.Ru=new Set}}function Gd(e){e.Ru.forEach(t=>{t.next()})}class zd{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new se(a=>ia(a),sa),this.rc=new Map,this.oc=new Set,this.uc=new et(T.comparator),this.cc=new Map,this.ac=new mi,this.hc={},this.lc=new Map,this.fc=Jt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Wd(e,t,n){const s=Jd(e);try{const i=await function(r,o){const a=N(r),l=V.now(),c=o.reduce((f,E)=>f.add(E.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=wn(),b=W();return a.Gi.getEntries(f,c).next(D=>{E=D,E.forEach((L,nt)=>{nt.isValidDocument()||(b=b.add(L))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,E)).next(D=>{u=D;const L=[];for(const nt of o){const q=Fh(nt,u.get(nt.key).overlayedDocument);q!=null&&L.push(new Ut(nt.key,q,na(q.value.mapValue),gt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,L,o)}).next(D=>{h=D;const L=D.applyToLocalDocumentSet(u,b);return a.documentOverlayCache.saveOverlays(f,D.batchId,L)})}).then(()=>({batchId:h.batchId,changes:ga(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new et(_)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Kn(s,i.changes),await Hn(s.remoteStore)}catch(i){const r=Sa(i,"Failed to persist write");n.reject(r)}}function Er(e,t,n){const s=N(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Gd(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Qd(e,t){const n=N(e),s=t.batch.batchId;try{const i=await Sd(n.localStore,t);Da(n,s,null),Aa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Kn(n,i)}catch(i){await zo(i)}}async function Xd(e,t,n){const s=N(e);try{const i=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(P(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,t);Da(s,t,n),Aa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Kn(s,i)}catch(i){await zo(i)}}function Aa(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Da(e,t,n){const s=N(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}async function Kn(e,t,n){const s=N(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=vi.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=N(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(l,h=>d.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>d.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Bn(u))throw u;y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.qi.get(h),E=f.snapshotVersion,b=f.withLastLimboFreeSnapshotVersion(E);c.qi=c.qi.insert(h,b)}}}(s.localStore,r))}async function Yd(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await wa(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new w(p.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Kn(n,s.ji)}}function Jd(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xd.bind(null,t),t}class Zd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=$n(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Id(this.persistence,new bd,t.initialUser,this.yt)}yc(t){return new Ed(yi.Bs,this.yt)}gc(t){return new _d}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Er(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yd.bind(null,this.syncEngine),await Kd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qd}createDatastore(t){const n=$n(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Od(i));var i;return function(r,o,a,l){return new Ld(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Er(this.syncEngine,a,0),o=vr.C()?new vr:new Nd,new Bd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,l,c){const u=new zd(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await je(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e,t,n){if(!n)throw new w(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ef(e,t,n,s){if(t===!0&&s===!0)throw new w(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Tr(e){if(!T.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function br(e){if(T.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Na(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ei(e);throw new w(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map;class Ir{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ef("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ir({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ir(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xu;switch(n.type){case"gapi":const s=n.client;return new th(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Cr.get(t);n&&(y("ComponentProvider","Removing Datastore"),Cr.delete(t),n.terminate())}(this),Promise.resolve()}}function nf(e,t,n,s={}){var i;const r=(e=Na(e,qn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&_s("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=G.MOCK_USER;else{o=Ol(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new G(l)}e._authCredentials=new Yu(new qo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class Ti{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ti(this.firestore,t,this._query)}}class Tt extends Ti{constructor(t,n,s){super(t,n,Ah(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new T(t))}withConverter(t){return new Tt(this.firestore,t,this._path)}}function sf(e,t,...n){if(e=me(e),_a("collection","path",t),e instanceof qn){const s=O.fromString(t,...n);return br(s),new Tt(e,null,s)}{if(!(e instanceof mt||e instanceof Tt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return br(s),new Tt(e.firestore,null,s)}}function rf(e,t,...n){if(e=me(e),arguments.length===1&&(t=Go.R()),_a("doc","path",t),e instanceof qn){const s=O.fromString(t,...n);return Tr(s),new mt(e,null,new T(s))}{if(!(e instanceof mt||e instanceof Tt))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Tr(s),new mt(e.firestore,e instanceof Tt?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=G.UNAUTHENTICATED,this.clientId=Go.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Sa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function af(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await wa(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function lf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await cf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>wr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>wr(t.remoteStore,r)),e.onlineComponents=t}async function cf(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await af(e,new Zd)),e.offlineComponents}async function uf(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await lf(e,new tf)),e.onlineComponents}function hf(e){return uf(e).then(t=>t.syncEngine)}class df{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ea(this,"async_queue_retry"),this.Wc=()=>{const n=as();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=as();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=as();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Mt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Bn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Bt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=wi.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class ka extends qn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new df,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xa(this),this._firestoreClient.terminate()}}function ff(e,t){const n=typeof e=="object"?e:Pc(),s=typeof e=="string"?e:t||"(default)",i=Oc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Nl("firestore");r&&nf(i,...r)}return i}function pf(e){return e._firestoreClient||xa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new uh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new of(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(vt.fromBase64String(t))}catch(n){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ne(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _(this._lat,t._lat)||_(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=/^__.*__$/;class mf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ut(t,this.data,this.fieldMask,n,this.fieldTransforms):new $e(t,this.data,n,this.fieldTransforms)}}function La(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class bi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new bi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return En(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(La(this.sa)&&gf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class yf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||$n(t)}da(t,n,s,i=!1){return new bi({sa:t,methodName:n,fa:s,path:Q.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function vf(e){const t=e._freezeSettings(),n=$n(e._databaseId);return new yf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wf(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);Va("Data must be an object, but it was:",o,s);const a=Ba(s,o);let l,c;if(r.merge)l=new ct(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=Ef(t,h,n);if(!o.contains(f))throw new w(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Cf(u,f)||u.push(f)}l=new ct(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new mf(new at(a),l,c)}function Pa(e,t){if(Fa(e=me(e)))return Va("Unsupported field value:",t,e),Ba(e,t);if(e instanceof Ra)return function(n,s){if(!La(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Pa(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Oh(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=V.fromDate(n);return{timestampValue:Rs(s.yt,i)}}if(n instanceof V){const i=new V(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rs(s.yt,i)}}if(n instanceof Ma)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ne)return{bytesValue:Wh(s.yt,n._byteString)};if(n instanceof mt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ei(n)}`)}(e,t)}function Ba(e,t){const n={};return Qo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ue(e,(s,i)=>{const r=Pa(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Fa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof V||e instanceof Ma||e instanceof Ne||e instanceof mt||e instanceof Ra)}function Va(e,t,n){if(!Fa(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ei(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Ef(e,t,n){if((t=me(t))instanceof Oa)return t._internalPath;if(typeof t=="string")return bf(e,t);throw En("Field path arguments must be of type string or ",e,!1,void 0,n)}const Tf=new RegExp("[~\\*/\\[\\]]");function bf(e,t,n){if(t.search(Tf)>=0)throw En(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Oa(...t.split("."))._internalPath}catch{throw En(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function En(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new w(p.INVALID_ARGUMENT,a+e+l)}function Cf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function Sf(e,t){const n=Na(e.firestore,ka),s=rf(e),i=If(e.converter,t);return Af(n,[wf(vf(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,gt.exists(!1))]).then(()=>s)}function Af(e,t){return function(n,s){const i=new Mt;return n.asyncQueue.enqueueAndForget(async()=>Wd(await hf(n),s,i)),i.promise}(pf(e),t)}(function(e,t=!0){(function(n){ne=n})(Lc),sn(new ye("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new ka(new Ju(n.getProvider("auth-internal")),new nh(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ht(nr,"3.8.3",e),Ht(nr,"3.8.3","esm2017")})();const Df={apiKey:"AIzaSyBM21jdRY5pd5kFK5TAe0QO1AOu-QVuxKs",authDomain:"firebearss.firebaseapp.com",projectId:"firebearss",storageBucket:"firebearss.appspot.com",messagingSenderId:"347330491543",appId:"1:347330491543:web:e5efeace61d79359fee5d2",measurementId:"G-L8EJKK3MSZ"},_f=Vr(Df),Nf=ff(_f),kf=sf(Nf,"scouts");async function xf(e){try{const t=await Sf(kf,e);console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}}function Of(){const[e,t]=C.useState(!0),[n,s]=C.useState(0),[i,r]=C.useState(0),[o,a]=C.useState(0),[l,c]=C.useState(0),[u,h]=C.useState(0),[f,E]=C.useState(0),[b,D]=C.useState(0),[L,nt]=C.useState(0),[q,ie]=C.useState(0),[Dt,re]=C.useState(0),[Ke,oe]=C.useState(0),[Ua,Ci]=C.useState(0),[$a,Ii]=C.useState(0),[ja,Si]=C.useState(0),[Gn,Ai]=C.useState(0),[zn,Di]=C.useState(0),[Wn,_i]=C.useState(!1);function Ha(tt,dt){console.log("Got Team @ "+tt+" : "+dt),tt==0||dt==0||tt==null||dt==null?t(!0):(t(!1),s(parseInt(tt)),r(parseInt(dt)))}const[Rf,Ni]=C.useState("DARK");function Ka(tt){console.log("Setting To Theme: "+tt);let dt;tt==null?(Ni("DARK"),dt="DARK"):(Ni(tt),dt=tt),localStorage.setItem("Theme",dt);const Oi=document.getElementsByTagName("style");for(let qe=0;qe<Oi.length;qe++){const ae=Oi[qe].firstChild.data;if((typeof ae=="string"||ae instanceof String)&&ae.includes("/*THEME=")&&ae.includes(":root")){let Ga=ae.includes("/*THEME="+dt);document.styleSheets.item(qe).disabled=!Ga}}}function qa(){console.log("Waiting To Submit Document...");let tt={TeamNumber:n,MatchNumber:i,WonMatch:Wn,TO_ConesHigh:q,TO_ConesMid:Dt,TO_ConesLow:Ke,TO_CubesHigh:f,TO_CubesMid:b,TO_CubesLow:L,A_ConesHigh:o,A_ConesMid:l,A_ConesLow:u,A_CubesHigh:f,A_CubesMid:b,A_CubesLow:L,AutoBalanced:Gn,EndGame:zn};console.log(tt),xf(tt),xi()}function ki(){r(localStorage.getItem("MatchNumber")),s(localStorage.getItem("TeamNumber")),t(localStorage.getItem("SavedItems")==null||localStorage.getItem("SavedItems")=="false"||n==null||n<=0||i==null||i<=0),a(localStorage.getItem("A_ConesHigh")),c(localStorage.getItem("A_ConesMid")),h(localStorage.getItem("A_ConesLow")),E(localStorage.getItem("A_CubesHigh")),D(localStorage.getItem("A_CubesMid")),nt(localStorage.getItem("A_CubesLow")),ie(localStorage.getItem("TO_ConesHigh")),re(localStorage.getItem("TO_ConesMid")),oe(localStorage.getItem("TO_ConesLow")),Ci(localStorage.getItem("TO_CubesHigh")),Ii(localStorage.getItem("TO_CubesMid")),Si(localStorage.getItem("TO_CubesLow")),Ai(localStorage.getItem("AutoBalanced")),Di(localStorage.getItem("EndGame")),_i(localStorage.getItem("WonMatch"))}function xi(){localStorage.setItem("SavedItems",!1),localStorage.setItem("TeamNumber",0),localStorage.setItem("MatchNumber",0),localStorage.setItem("WonMatch",!1),localStorage.setItem("TO_ConesHigh",0),localStorage.setItem("TO_ConesMid",0),localStorage.setItem("TO_ConesLow",0),localStorage.setItem("TO_CubesHigh",0),localStorage.setItem("TO_CubesMid",0),localStorage.setItem("TO_CubesLow",0),localStorage.setItem("A_ConesHigh",0),localStorage.setItem("A_ConesMid",0),localStorage.setItem("A_ConesLow",0),localStorage.setItem("A_CubesHigh",0),localStorage.setItem("A_CubesMid",0),localStorage.setItem("A_CubesLow",0),localStorage.setItem("AutoBalanced",0),localStorage.setItem("EndGame",0),t(!1),ki()}return C.useEffect(()=>{Ka(localStorage.getItem("Theme")),ki();const tt=setInterval(function(){localStorage.setItem("SavedItems",!e),localStorage.setItem("TeamNumber",n),localStorage.setItem("MatchNumber",i),localStorage.setItem("WonMatch",Wn),localStorage.setItem("TO_ConesHigh",q),localStorage.setItem("TO_ConesMid",Dt),localStorage.setItem("TO_ConesHigh",q),localStorage.setItem("TO_CubesHigh",f),localStorage.setItem("TO_CubesMid",b),localStorage.setItem("TO_CubesLow",L),localStorage.setItem("A_ConesHigh",o),localStorage.setItem("A_ConesMid",l),localStorage.setItem("A_ConesLow",u),localStorage.setItem("A_CubesHigh",f),localStorage.setItem("A_CubesMid",b),localStorage.setItem("A_CubesLow",L),localStorage.setItem("AutoBalanced",Gn),localStorage.setItem("EndGame",zn)},3e3);return()=>clearInterval(tt)},[]),g(C.Suspense,{children:z("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)"},className:"App",children:[e?g(hl,{CallbackFunction:Ha}):"",g("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)",position:"fixed",display:"block",zIndex:"-2"}}),z("div",{style:{borderBottom:"1px solid white",paddingBottom:"1px",marginBottom:"4px",justifyContent:"right",textAlign:"right",color:"var(--Text)",fontWeight:"bold"},children:["Match #",i," | Team #",n,g("button",{style:{marginLeft:"5px",height:"100%",width:"auto",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"},onClick:()=>{xi(),t(!0)},children:"Logout"})]}),z("div",{style:{width:"auto",paddingBottom:"12px"},children:[g(it,{Value:o,setValue:a,Title:"[AUTO] Cones High",isCone:!0}),g(it,{Value:l,setValue:c,Title:"[AUTO] Cones Mid",isCone:!0}),g(it,{Value:u,setValue:h,Title:"[AUTO] Cones Bottom",isCone:!0})]}),z("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[g(it,{Value:f,setValue:E,Title:"[AUTO] Cones High",isCone:!0}),g(it,{Value:b,setValue:D,Title:"[AUTO] Cones Mid",isCone:!0}),g(it,{Value:L,setValue:nt,Title:"[AUTO] Cones Bottom",isCone:!0})]}),z("div",{style:{width:"auto",paddingBottom:"12px"},children:[g(it,{Value:q,setValue:ie,Title:"Cones High",isCone:!0}),g(it,{Value:Dt,setValue:re,Title:"Cones Mid",isCone:!0}),g(it,{Value:Ke,setValue:oe,Title:"Cones Bottom",isCone:!0})]}),z("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[g(it,{Value:Ua,setValue:Ci,Title:"Cones High",isCone:!0}),g(it,{Value:$a,setValue:Ii,Title:"Cones Mid",isCone:!0}),g(it,{Value:ja,setValue:Si,Title:"Cones Bottom",isCone:!0})]}),z("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[g(Mi,{isTicked:Gn,onTicked:Ai,Title:"AUTO Balanced On Charge Station"}),g(Mi,{isTicked:zn,onTicked:Di,Title:"ENDGAME Charge Station",isEnd:!0})]}),g("div",{style:{width:"auto",borderBottom:"0px solid white",paddingBottom:"8px"},children:g(El,{isTicked:Wn,onTicked:_i,Title:"Won Match?"})}),g("div",{style:{width:"auto",borderBottom:"0px solid white",paddingTop:"0px",paddingBottom:"15px"},children:g(lt,{style:{width:"97.5%",height:"100%",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)",border:"0px",marginLeft:"15px"},onClick:qa,children:"SUBMIT"})})]})})}za.createRoot(document.getElementById("root")).render(g(Ot.StrictMode,{children:g(Of,{})}));
