import{r as i,j as a,a as f,R as w,b as we,c as Se}from"./FirebaseAPI-e60643d4.js";var R={},Oe={get exports(){return R},set exports(e){R=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var l=typeof s;if(l==="string"||l==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var u=o.apply(null,s);u&&n.push(u)}}else if(l==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&n.push(c)}}}return n.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(Oe);const I=R,Ae=["as","disabled"];function Be(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function Ie(e){return!e||e.trim()==="#"}function q({tagName:e,disabled:t,href:o,target:n,rel:r,role:s,onClick:l,tabIndex:u=0,type:c}){e||(o!=null||n!=null||r!=null?e="a":e="button");const d={tagName:e};if(e==="button")return[{type:c||"button",disabled:t},d];const p=h=>{if((t||e==="a"&&Ie(o))&&h.preventDefault(),t){h.stopPropagation();return}l==null||l(h)},g=h=>{h.key===" "&&(h.preventDefault(),p(h))};return e==="a"&&(o||(o="#"),t&&(o=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:u,href:o,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?r:void 0,onClick:p,onKeyDown:g},d]}const ke=i.forwardRef((e,t)=>{let{as:o,disabled:n}=e,r=Be(e,Ae);const[s,{tagName:l}]=q(Object.assign({tagName:o,disabled:n},r));return a(l,Object.assign({},r,s,{ref:t}))});ke.displayName="Button";const _e=["xxl","xl","lg","md","sm","xs"],Me="xs",D=i.createContext({prefixes:{},breakpoints:_e,minBreakpoint:Me});function M(e,t){const{prefixes:o}=i.useContext(D);return e||o[t]||t}function J(){const{breakpoints:e}=i.useContext(D);return e}function Y(){const{minBreakpoint:e}=i.useContext(D);return e}const Ne={variant:"primary",active:!1,disabled:!1},y=i.forwardRef(({as:e,bsPrefix:t,variant:o,size:n,active:r,className:s,...l},u)=>{const c=M(t,"btn"),[d,{tagName:p}]=q({tagName:e,...l});return a(p,{...d,...l,ref:u,className:I(s,c,r&&"active",o&&`${c}-${o}`,n&&`${c}-${n}`,l.href&&l.disabled&&"disabled")})});y.displayName="Button";y.defaultProps=Ne;var T={},Ee={get exports(){return T},set exports(e){T=e}},Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Re=Le,$e=Re;function Q(){}function X(){}X.resetWarningCache=Q;var Pe=function(){function e(n,r,s,l,u,c){if(c!==$e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X,resetWarningCache:Q};return o.PropTypes=o,o};Ee.exports=Pe();function De({as:e,bsPrefix:t,className:o,...n}){t=M(t,"col");const r=J(),s=Y(),l=[],u=[];return r.forEach(c=>{const d=n[c];delete n[c];let p,g,h;typeof d=="object"&&d!=null?{span:p,offset:g,order:h}=d:p=d;const b=c!==s?`-${c}`:"";p&&l.push(p===!0?`${t}${b}`:`${t}${b}-${p}`),h!=null&&u.push(`order${b}-${h}`),g!=null&&u.push(`offset${b}-${g}`)}),[{...n,className:I(o,...l,...u)},{as:e,bsPrefix:t,spans:l}]}const Z=i.forwardRef((e,t)=>{const[{className:o,...n},{as:r="div",bsPrefix:s,spans:l}]=De(e);return a(r,{...n,ref:t,className:I(o,!l.length&&s)})});Z.displayName="Col";const x=Z,je={fluid:!1},j=i.forwardRef(({bsPrefix:e,fluid:t,as:o="div",className:n,...r},s)=>{const l=M(e,"container"),u=typeof t=="string"?`-${t}`:"-fluid";return a(o,{ref:s,...r,className:I(n,t?`${l}${u}`:l)})});j.displayName="Container";j.defaultProps=je;const ee=j,te=i.forwardRef(({bsPrefix:e,className:t,as:o="div",...n},r)=>{const s=M(e,"row"),l=J(),u=Y(),c=`${s}-cols`,d=[];return l.forEach(p=>{const g=n[p];delete n[p];let h;g!=null&&typeof g=="object"?{cols:h}=g:h=g;const b=p!==u?`-${p}`:"";h!=null&&d.push(`${c}${b}-${h}`)}),a(o,{ref:r,...n,className:I(t,s,...d)})});te.displayName="Row";const oe=te,He="_z_4nbi7_1",ze={z:He},Ve=({CallbackFunction:e})=>{const t=new URLSearchParams(window.location.search),o=t.get("team"),n=t.get("match"),[r,s]=i.useState(0),[l,u]=i.useState(0);return i.useEffect(()=>{s(o),u(n)},[]),a("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(50,50,50,0.8)",position:"fixed",top:"0%",zIndex:"99999999 !importiant",display:"block"},children:f("div",{className:ze.z,style:{width:"80%",height:"80%",backgroundColor:"var(--Background)",border:"2px solid var(--Text)",borderRadius:"8px",position:"absolute",top:"10%",left:"10%",zIndex:"99999 !importiant"},children:[a("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Match Number:"}),a("input",{value:l,onChange:c=>{u(c.target.value)},type:"number",style:{width:"20%",height:"10%",marginTop:"1%",zIndex:"99999 !importiant",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),a("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Team Number:"}),a("input",{value:r,onChange:c=>{s(c.target.value)},type:"number",style:{width:"20%",zIndex:"99999 !importiant",height:"10%",marginTop:"1%",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),a("button",{style:{width:"100%",height:"auto",position:"absolute",bottom:"0%",color:"var(--Text)",border:"2px solid var(--Text)",borderRadius:"8px",backgroundColor:"var(--ButtonsMain)"},onClick:()=>{e(r,l)},children:"CONFIRM"})]})})};var We=["color","size","title"];function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},$.apply(this,arguments)}function Ue(e,t){if(e==null)return{};var o=Ke(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ke(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var H=i.forwardRef(function(e,t){var o=e.color,n=e.size,r=e.title,s=Ue(e,We);return w.createElement("svg",$({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:o},s),r?w.createElement("title",null,r):null,w.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))});H.propTypes={color:T.string,size:T.oneOfType([T.string,T.number]),title:T.string};H.defaultProps={color:"currentColor",size:"1em",title:null};const Fe=H;var Ge=["color","size","title"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},P.apply(this,arguments)}function qe(e,t){if(e==null)return{};var o=Je(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Je(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var z=i.forwardRef(function(e,t){var o=e.color,n=e.size,r=e.title,s=qe(e,Ge);return w.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:o},s),r?w.createElement("title",null,r):null,w.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))});z.propTypes={color:T.string,size:T.oneOfType([T.string,T.number]),title:T.string};z.defaultProps={color:"currentColor",size:"1em",title:null};const Ye=z;const F=({Title:e,ColorA:t,ColorB:o,setNum:n,Num:r})=>f("div",{children:[a("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px"},children:e}),f(oe,{children:[a(x,{children:f(y,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>n(r<=0?0:--r),children:[" ",a(Fe,{color:"var(--ArrowColor)"})," "]})}),a(x,{children:a("div",{style:{width:"100%",height:"100%",backgroundColor:"var("+o+")",border:"0px solid white",color:"var(--Text)",borderRadius:"9px",textAlign:"center",verticalAlign:"middle",lineHeight:"400%"},children:r})}),a(x,{children:f(y,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>n(++r),children:[" ",a(Ye,{color:"var(--ArrowColor)"})," "]})})]})]}),v=({Title:e,isCone:t,setValue:o,Value:n})=>a(ee,{fluid:!0,children:t?a(F,{Title:e,setNum:o,Num:n,ColorA:"--ConesPrimary",ColorB:"--ConesSecondary"}):a(F,{Title:e,setNum:o,Num:n,ColorA:"--CubesPrimary",ColorB:"--CubesSecondary"})}),G=({Title:e,isTicked:t,onTicked:o,isEnd:n})=>a(ee,{fluid:!0,children:f("div",{children:[a("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px",marginLeft:"5px"},children:e}),f(oe,{style:{marginBottom:"10px"},children:[a(x,{children:a(y,{onClick:()=>{o(0)},style:{width:"100%",height:"100%",backgroundColor:t==0?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==0?"bold":"normal",border:"2px solid black"},children:"Off"})}),n?a(x,{children:a(y,{onClick:()=>{o(1)},style:{width:"100%",height:"100%",backgroundColor:t==1?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==1?"bold":"normal",border:"2px solid black"},children:"Parked"})}):"",a(x,{children:a(y,{onClick:()=>{o(2)},style:{width:"100%",height:"100%",backgroundColor:t==2?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==2?"bold":"normal",border:"2px solid black"},children:"Docked"})}),a(x,{children:a(y,{onClick:()=>{o(3)},style:{width:"100%",height:"100%",backgroundColor:t==3?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==3?"bold":"normal",border:"2px solid black"},children:"Docked & Engaged (BALANCED)"})})]})]})});function Qe(){const e=new URLSearchParams(window.location.search),[t,o]=i.useState(!0),[n,r]=i.useState(0),[s,l]=i.useState(0),[u,c]=i.useState(0),[d,p]=i.useState(0),[g,h]=i.useState(0),[b,ne]=i.useState(0),[O,re]=i.useState(0),[A,se]=i.useState(0),[k,ae]=i.useState(0),[N,ie]=i.useState(0),[V,le]=i.useState(0),[ce,ue]=i.useState(0),[de,he]=i.useState(0),[pe,me]=i.useState(0),[W,ge]=i.useState(""),[E,fe]=i.useState(0),[L,be]=i.useState(0),[U,Xe]=i.useState(!1);function Ce(m,C){console.log("Got Team @ "+m+" : "+C),m==0||C==0||m==null||C==null?o(!0):(o(!1),localStorage.setItem("SavedItems",!0),r(parseInt(m)),l(parseInt(C)))}const[Ze,K]=i.useState("DARK");function ve(m){console.log("Setting To Theme: "+m);let C;m==null?(K("DARK"),C="DARK"):(K(m),C=m),localStorage.setItem("Theme",C);const S=document.getElementsByTagName("style");for(let _=0;_<S.length;_++){const B=S[_].firstChild.data;if((typeof B=="string"||B instanceof String)&&B.includes("/*THEME=")&&B.includes(":root")){let xe=B.includes("/*THEME="+C);document.styleSheets.item(_).disabled=!xe}}}function Te(){if(window.location.href.includes("server=")){const C=`http://${e.get("server")}:3000`;console.log(C),console.log("Chose Team @ "+teamNum+" : on Match "+matchNum),fetch(C,{method:"POST",mode:"no-cors",headers:{Accept:"text/html","Content-Type":"application/json"},body:JSON.stringify({name:e.get("name").replace("_"," ")})}).then(S=>S.json()).then(S=>console.log(JSON.stringify(S)))}console.log("Waiting To Submit Document...");let m={TeamNumber:n,MatchNumber:s,WonMatch:U,TO_ConesHigh:k,TO_ConesMid:N,TO_ConesLow:V,TO_CubesHigh:b,TO_CubesMid:O,TO_CubesLow:A,A_ConesHigh:u,A_ConesMid:d,A_ConesLow:g,A_CubesHigh:b,A_CubesMid:O,A_CubesLow:A,AutoBalanced:E,EndGame:L,Notes:W};console.log(m),we(m)}function ye(){localStorage.setItem("SavedItems",!1),localStorage.setItem("TeamNumber",0),localStorage.setItem("MatchNumber",0),localStorage.setItem("WonMatch",!1),localStorage.setItem("TO_ConesHigh",0),localStorage.setItem("TO_ConesMid",0),localStorage.setItem("TO_ConesLow",0),localStorage.setItem("TO_CubesHigh",0),localStorage.setItem("TO_CubesMid",0),localStorage.setItem("TO_CubesLow",0),localStorage.setItem("A_ConesHigh",0),localStorage.setItem("A_ConesMid",0),localStorage.setItem("A_ConesLow",0),localStorage.setItem("A_CubesHigh",0),localStorage.setItem("A_CubesMid",0),localStorage.setItem("A_CubesLow",0),localStorage.setItem("AutoBalanced",0),localStorage.setItem("EndGame",0),o(!1)}return i.useEffect(()=>{ve(localStorage.getItem("Theme"));const m=setInterval(function(){localStorage.setItem("TeamNumber",n),localStorage.setItem("MatchNumber",s),localStorage.setItem("WonMatch",U),localStorage.setItem("TO_ConesHigh",k),localStorage.setItem("TO_ConesMid",N),localStorage.setItem("TO_ConesHigh",k),localStorage.setItem("TO_CubesHigh",b),localStorage.setItem("TO_CubesMid",O),localStorage.setItem("TO_CubesLow",A),localStorage.setItem("A_ConesHigh",u),localStorage.setItem("A_ConesMid",d),localStorage.setItem("A_ConesLow",g),localStorage.setItem("A_CubesHigh",b),localStorage.setItem("A_CubesMid",O),localStorage.setItem("A_CubesLow",A),localStorage.setItem("AutoBalanced",E),localStorage.setItem("EndGame",L)},3e3);return()=>clearInterval(m)},[]),a(i.Suspense,{children:f("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)"},className:"App",children:[t?a(Ve,{CallbackFunction:Ce}):"",a("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)",position:"fixed",display:"block",zIndex:"-2"}}),f("div",{style:{borderBottom:"1px solid white",paddingBottom:"1px",marginBottom:"4px",justifyContent:"right",textAlign:"right",color:"var(--Text)",fontWeight:"bold"},children:["Match #",s," | Team #",n,a("button",{style:{marginLeft:"5px",height:"100%",width:"auto",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"},onClick:()=>{ye(),o(!0)},children:"Logout"})]}),f("div",{style:{width:"auto",padding:"12px"},children:[a(v,{Value:u,setValue:c,Title:"[AUTO] Cones High",isCone:!0}),a(v,{Value:d,setValue:p,Title:"[AUTO] Cones Mid",isCone:!0}),a(v,{Value:g,setValue:h,Title:"[AUTO] Cones Low",isCone:!0})]}),f("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[a(v,{Value:b,setValue:ne,Title:"[AUTO] Cubes High",isCone:!0}),a(v,{Value:O,setValue:re,Title:"[AUTO] Cubes Mid",isCone:!0}),a(v,{Value:A,setValue:se,Title:"[AUTO] Cubes Low",isCone:!0})]}),f("div",{style:{width:"auto",paddingBottom:"12px"},children:[a(v,{Value:k,setValue:ae,Title:"Cones High",isCone:!0}),a(v,{Value:N,setValue:ie,Title:"Cones Mid",isCone:!0}),a(v,{Value:V,setValue:le,Title:"Cones Low",isCone:!0})]}),f("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[a(v,{Value:ce,setValue:ue,Title:"Cubes High",isCone:!0}),a(v,{Value:de,setValue:he,Title:"Cubes Mid",isCone:!0}),a(v,{Value:pe,setValue:me,Title:"Cubes Low",isCone:!0})]}),f("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[a(G,{isTicked:E,onTicked:fe,Title:"AUTO Balanced On Charge Station"}),a(G,{isTicked:L,onTicked:be,Title:"ENDGAME Charge Station",isEnd:!0})]}),a("div",{style:{width:"auto",borderBottom:"0px solid white",paddingBottom:"8px",width:"98%",height:"25%"},children:a("textarea",{placeholder:"Was There a Red or Yellow Card? Did the Robt Become Disabled? Did They Play Defense? Did Someone Play Defense on Them? What Else Should the Drivers Know?",type:"text",style:{width:"100%",height:"100%",marginLeft:"1%",resize:"none"},onChange:m=>{ge(m.target.value)},value:W})}),a("div",{style:{width:"auto",borderBottom:"0px solid white",paddingTop:"0px",paddingBottom:"15px"},children:a(y,{style:{width:"97.5%",height:"100%",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)",border:"0px",marginLeft:"15px"},onClick:Te,children:"SUBMIT"})}),a("div",{style:{width:"auto",borderBottom:"0px solid white",paddingTop:"0px",paddingBottom:"15px",color:"var(--Text)",fontSize:"0.75rem"},children:"© Sadiq Ahmed 2023 & Kieran Musser"})]})})}Se.createRoot(document.getElementById("root")).render(a(w.StrictMode,{children:a(Qe,{})}));
