import{r as a,j as i,a as m,R as w,c as ye}from"./FirebaseAPI-f195b5c5.js";var R={},xe={get exports(){return R},set exports(e){R=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var l=typeof s;if(l==="string"||l==="number")n.push(s);else if(Array.isArray(s)){if(s.length){var u=o.apply(null,s);u&&n.push(u)}}else if(l==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){n.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&n.push(c)}}}return n.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(xe);const B=R,we=["as","disabled"];function Se(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function Oe(e){return!e||e.trim()==="#"}function Y({tagName:e,disabled:t,href:o,target:n,rel:r,role:s,onClick:l,tabIndex:u=0,type:c}){e||(o!=null||n!=null||r!=null?e="a":e="button");const p={tagName:e};if(e==="button")return[{type:c||"button",disabled:t},p];const h=d=>{if((t||e==="a"&&Oe(o))&&d.preventDefault(),t){d.stopPropagation();return}l==null||l(d)},g=d=>{d.key===" "&&(d.preventDefault(),h(d))};return e==="a"&&(o||(o="#"),t&&(o=void 0)),[{role:s??"button",disabled:void 0,tabIndex:t?void 0:u,href:o,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?r:void 0,onClick:h,onKeyDown:g},p]}const ke=a.forwardRef((e,t)=>{let{as:o,disabled:n}=e,r=Se(e,we);const[s,{tagName:l}]=Y(Object.assign({tagName:o,disabled:n},r));return i(l,Object.assign({},r,s,{ref:t}))});ke.displayName="Button";const Be=["xxl","xl","lg","md","sm","xs"],Ae="xs",P=a.createContext({prefixes:{},breakpoints:Be,minBreakpoint:Ae});function _(e,t){const{prefixes:o}=a.useContext(P);return e||o[t]||t}function J(){const{breakpoints:e}=a.useContext(P);return e}function Q(){const{minBreakpoint:e}=a.useContext(P);return e}const Ie={variant:"primary",active:!1,disabled:!1},v=a.forwardRef(({as:e,bsPrefix:t,variant:o,size:n,active:r,className:s,...l},u)=>{const c=_(t,"btn"),[p,{tagName:h}]=Y({tagName:e,...l});return i(h,{...p,...l,ref:u,className:B(s,c,r&&"active",o&&`${c}-${o}`,n&&`${c}-${n}`,l.href&&l.disabled&&"disabled")})});v.displayName="Button";v.defaultProps=Ie;var C={},_e={get exports(){return C},set exports(e){C=e}},Me="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Le=Me,Ee=Le;function X(){}function Z(){}Z.resetWarningCache=X;var Ne=function(){function e(n,r,s,l,u,c){if(c!==Ee){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Z,resetWarningCache:X};return o.PropTypes=o,o};_e.exports=Ne();function Re({as:e,bsPrefix:t,className:o,...n}){t=_(t,"col");const r=J(),s=Q(),l=[],u=[];return r.forEach(c=>{const p=n[c];delete n[c];let h,g,d;typeof p=="object"&&p!=null?{span:h,offset:g,order:d}=p:h=p;const x=c!==s?`-${c}`:"";h&&l.push(h===!0?`${t}${x}`:`${t}${x}-${h}`),d!=null&&u.push(`order${x}-${d}`),g!=null&&u.push(`offset${x}-${g}`)}),[{...n,className:B(o,...l,...u)},{as:e,bsPrefix:t,spans:l}]}const ee=a.forwardRef((e,t)=>{const[{className:o,...n},{as:r="div",bsPrefix:s,spans:l}]=Re(e);return i(r,{...n,ref:t,className:B(o,!l.length&&s)})});ee.displayName="Col";const y=ee,$e={fluid:!1},j=a.forwardRef(({bsPrefix:e,fluid:t,as:o="div",className:n,...r},s)=>{const l=_(e,"container"),u=typeof t=="string"?`-${t}`:"-fluid";return i(o,{ref:s,...r,className:B(n,t?`${l}${u}`:l)})});j.displayName="Container";j.defaultProps=$e;const H=j,te=a.forwardRef(({bsPrefix:e,className:t,as:o="div",...n},r)=>{const s=_(e,"row"),l=J(),u=Q(),c=`${s}-cols`,p=[];return l.forEach(h=>{const g=n[h];delete n[h];let d;g!=null&&typeof g=="object"?{cols:d}=g:d=g;const x=h!==u?`-${h}`:"";d!=null&&p.push(`${c}${x}-${d}`)}),i(o,{ref:r,...n,className:B(t,s,...p)})});te.displayName="Row";const z=te,De="_z_4nbi7_1",Pe={z:De},je=({CallbackFunction:e})=>{const t=new URLSearchParams(window.location.search),o=t.get("team"),n=t.get("match"),[r,s]=a.useState(0),[l,u]=a.useState(0);return a.useEffect(()=>{s(o),u(n)},[]),i("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(50,50,50,0.8)",position:"fixed",top:"0%",zIndex:"99999999 !importiant",display:"block"},children:m("div",{className:Pe.z,style:{width:"80%",height:"80%",backgroundColor:"var(--Background)",border:"2px solid var(--Text)",borderRadius:"8px",position:"absolute",top:"10%",left:"10%",zIndex:"99999 !importiant"},children:[i("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Match Number:"}),i("input",{value:r,onChange:c=>{s(c.target.value)},type:"number",style:{width:"20%",height:"10%",marginTop:"1%",zIndex:"99999 !importiant",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),i("div",{style:{width:"100%",height:"8%",color:"var(--Text)",fontSize:"4vh",borderBottom:"1px solid white",display:"block",zIndex:"99999 !importiant"},children:"Team Number:"}),i("input",{value:l,onChange:c=>{u(c.target.value)},type:"number",style:{width:"20%",zIndex:"99999 !importiant",height:"10%",marginTop:"1%",marginBottom:"3%",display:"block",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"}}),i("button",{style:{width:"100%",height:"auto",position:"absolute",bottom:"0%",color:"var(--Text)",border:"2px solid var(--Text)",borderRadius:"8px",backgroundColor:"var(--ButtonsMain)"},onClick:()=>{console.log("Chose Team @ "+r+" : on Match "+l),e(r,l)},children:"CONFIRM"})]})})};var He=["color","size","title"];function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},$.apply(this,arguments)}function ze(e,t){if(e==null)return{};var o=We(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function We(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var W=a.forwardRef(function(e,t){var o=e.color,n=e.size,r=e.title,s=ze(e,He);return w.createElement("svg",$({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:o},s),r?w.createElement("title",null,r):null,w.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))});W.propTypes={color:C.string,size:C.oneOfType([C.string,C.number]),title:C.string};W.defaultProps={color:"currentColor",size:"1em",title:null};const Ve=W;var Ue=["color","size","title"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},D.apply(this,arguments)}function Ke(e,t){if(e==null)return{};var o=Fe(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Fe(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var V=a.forwardRef(function(e,t){var o=e.color,n=e.size,r=e.title,s=Ke(e,Ue);return w.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:o},s),r?w.createElement("title",null,r):null,w.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}))});V.propTypes={color:C.string,size:C.oneOfType([C.string,C.number]),title:C.string};V.defaultProps={color:"currentColor",size:"1em",title:null};const Ge=V;const G=({Title:e,ColorA:t,ColorB:o,setNum:n,Num:r})=>m("div",{children:[i("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px"},children:e}),m(z,{children:[i(y,{children:m(v,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>n(r<=0?0:--r),children:[" ",i(Ve,{color:"var(--ArrowColor)"})," "]})}),i(y,{children:i("div",{style:{width:"100%",height:"100%",backgroundColor:"var("+o+")",border:"0px solid white",color:"var(--Text)",borderRadius:"9px",textAlign:"center",verticalAlign:"middle",lineHeight:"400%"},children:r})}),i(y,{children:m(v,{style:{backgroundColor:"var("+t+")",border:"2px solid black",color:"var(--Text)"},className:"tallbtn",onClick:()=>n(++r),children:[" ",i(Ge,{color:"var(--ArrowColor)"})," "]})})]})]}),b=({Title:e,isCone:t,setValue:o,Value:n})=>i(H,{fluid:!0,children:t?i(G,{Title:e,setNum:o,Num:n,ColorA:"--ConesPrimary",ColorB:"--ConesSecondary"}):i(G,{Title:e,setNum:o,Num:n,ColorA:"--CubesPrimary",ColorB:"--CubesSecondary"})}),q=({Title:e,isTicked:t,onTicked:o,isEnd:n})=>i(H,{fluid:!0,children:m("div",{children:[i("div",{style:{width:"auto",height:"100%",color:"var(--Text)",textDecoration:"underline",marginBottom:"5px",marginLeft:"5px"},children:e}),m(z,{style:{marginBottom:"10px"},children:[i(y,{children:i(v,{onClick:()=>{o(0)},style:{width:"100%",height:"100%",backgroundColor:t==0?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==0?"bold":"normal",border:"2px solid black"},children:"Off"})}),n?i(y,{children:i(v,{onClick:()=>{o(1)},style:{width:"100%",height:"100%",backgroundColor:t==1?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==1?"bold":"normal",border:"2px solid black"},children:"Parked"})}):"",i(y,{children:i(v,{onClick:()=>{o(2)},style:{width:"100%",height:"100%",backgroundColor:t==2?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==2?"bold":"normal",border:"2px solid black"},children:"Docked"})}),i(y,{children:i(v,{onClick:()=>{o(3)},style:{width:"100%",height:"100%",backgroundColor:t==3?"var(--TickSelected)":"var(--TickDeselected)",fontWeight:t==3?"bold":"normal",border:"2px solid black"},children:"Docked & Engaged (BALANCED)"})})]})]})}),qe=({Title:e,isTicked:t,onTicked:o})=>i(H,{fluid:!0,children:m("div",{children:[i("div",{style:{width:"auto",height:"100%",color:"white",textDecoration:"underline",marginBottom:"5px",marginLeft:"5px"},children:e}),m(z,{style:{marginBottom:"10px"},children:[i(y,{children:i(v,{onClick:()=>{o(!1)},style:{width:"100%",height:"100%",backgroundColor:t==!1?"var(--TickSelected)":"var(--TickDeselected)",border:"2px solid black"},children:"Lose"})}),i(y,{children:i(v,{onClick:()=>{o(!0)},style:{width:"100%",height:"100%",backgroundColor:t==!0?"var(--TickSelected)":"var(--TickDeselected)",border:"2px solid black"},children:"Win"})})]})]})});function Ye(){const[e,t]=a.useState(!0),[o,n]=a.useState(0),[r,s]=a.useState(0),[l,u]=a.useState(0),[c,p]=a.useState(0),[h,g]=a.useState(0),[d,x]=a.useState(0),[S,oe]=a.useState(0),[O,ne]=a.useState(0),[A,re]=a.useState(0),[M,ie]=a.useState(0),[U,se]=a.useState(0),[ae,le]=a.useState(0),[ce,de]=a.useState(0),[ue,he]=a.useState(0),[L,pe]=a.useState(0),[E,me]=a.useState(0),[N,ge]=a.useState(!1);function fe(f,T){console.log("Got Team @ "+T+" : "+f),T==0||f==0||T==null||f==null?t(!0):(t(!1),localStorage.setItem("SavedItems",!0),n(parseInt(T)),s(parseInt(f)))}const[Je,K]=a.useState("DARK");function be(f){console.log("Setting To Theme: "+f);let T;f==null?(K("DARK"),T="DARK"):(K(f),T=f),localStorage.setItem("Theme",T);const F=document.getElementsByTagName("style");for(let I=0;I<F.length;I++){const k=F[I].firstChild.data;if((typeof k=="string"||k instanceof String)&&k.includes("/*THEME=")&&k.includes(":root")){let Te=k.includes("/*THEME="+T);document.styleSheets.item(I).disabled=!Te}}}function Ce(){console.log("Waiting To Submit Document..."),console.log({TeamNumber:o,MatchNumber:r,WonMatch:N,TO_ConesHigh:A,TO_ConesMid:M,TO_ConesLow:U,TO_CubesHigh:d,TO_CubesMid:S,TO_CubesLow:O,A_ConesHigh:l,A_ConesMid:c,A_ConesLow:h,A_CubesHigh:d,A_CubesMid:S,A_CubesLow:O,AutoBalanced:L,EndGame:E})}function ve(){localStorage.setItem("SavedItems",!1),localStorage.setItem("TeamNumber",0),localStorage.setItem("MatchNumber",0),localStorage.setItem("WonMatch",!1),localStorage.setItem("TO_ConesHigh",0),localStorage.setItem("TO_ConesMid",0),localStorage.setItem("TO_ConesLow",0),localStorage.setItem("TO_CubesHigh",0),localStorage.setItem("TO_CubesMid",0),localStorage.setItem("TO_CubesLow",0),localStorage.setItem("A_ConesHigh",0),localStorage.setItem("A_ConesMid",0),localStorage.setItem("A_ConesLow",0),localStorage.setItem("A_CubesHigh",0),localStorage.setItem("A_CubesMid",0),localStorage.setItem("A_CubesLow",0),localStorage.setItem("AutoBalanced",0),localStorage.setItem("EndGame",0),t(!1)}return a.useEffect(()=>{be(localStorage.getItem("Theme"));const f=setInterval(function(){localStorage.setItem("TeamNumber",o),localStorage.setItem("MatchNumber",r),localStorage.setItem("WonMatch",N),localStorage.setItem("TO_ConesHigh",A),localStorage.setItem("TO_ConesMid",M),localStorage.setItem("TO_ConesHigh",A),localStorage.setItem("TO_CubesHigh",d),localStorage.setItem("TO_CubesMid",S),localStorage.setItem("TO_CubesLow",O),localStorage.setItem("A_ConesHigh",l),localStorage.setItem("A_ConesMid",c),localStorage.setItem("A_ConesLow",h),localStorage.setItem("A_CubesHigh",d),localStorage.setItem("A_CubesMid",S),localStorage.setItem("A_CubesLow",O),localStorage.setItem("AutoBalanced",L),localStorage.setItem("EndGame",E)},3e3);return()=>clearInterval(f)},[]),i(a.Suspense,{children:m("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)"},className:"App",children:[e?i(je,{CallbackFunction:fe}):"",i("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--Background)",position:"fixed",display:"block",zIndex:"-2"}}),m("div",{style:{borderBottom:"1px solid white",paddingBottom:"1px",marginBottom:"4px",justifyContent:"right",textAlign:"right",color:"var(--Text)",fontWeight:"bold"},children:["Match #",r," | Team #",o,i("button",{style:{marginLeft:"5px",height:"100%",width:"auto",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)"},onClick:()=>{ve(),t(!0)},children:"Logout"})]}),m("div",{style:{width:"auto",padding:"12px"},children:[i(b,{Value:l,setValue:u,Title:"[AUTO] Cones High",isCone:!0}),i(b,{Value:c,setValue:p,Title:"[AUTO] Cones Mid",isCone:!0}),i(b,{Value:h,setValue:g,Title:"[AUTO] Cones Low",isCone:!0})]}),m("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[i(b,{Value:d,setValue:x,Title:"[AUTO] Cubes High",isCone:!0}),i(b,{Value:S,setValue:oe,Title:"[AUTO] Cubes Mid",isCone:!0}),i(b,{Value:O,setValue:ne,Title:"[AUTO] Cubes Low",isCone:!0})]}),m("div",{style:{width:"auto",paddingBottom:"12px"},children:[i(b,{Value:A,setValue:re,Title:"Cones High",isCone:!0}),i(b,{Value:M,setValue:ie,Title:"Cones Mid",isCone:!0}),i(b,{Value:U,setValue:se,Title:"Cones Low",isCone:!0})]}),m("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[i(b,{Value:ae,setValue:le,Title:"Cubes High",isCone:!0}),i(b,{Value:ce,setValue:de,Title:"Cubes Mid",isCone:!0}),i(b,{Value:ue,setValue:he,Title:"Cubes Low",isCone:!0})]}),m("div",{style:{width:"auto",borderBottom:"1px solid white",paddingBottom:"12px"},children:[i(q,{isTicked:L,onTicked:pe,Title:"AUTO Balanced On Charge Station"}),i(q,{isTicked:E,onTicked:me,Title:"ENDGAME Charge Station",isEnd:!0})]}),i("div",{style:{width:"auto",borderBottom:"0px solid white",paddingBottom:"8px"},children:i(qe,{isTicked:N,onTicked:ge,Title:"Won Match?"})}),i("div",{style:{width:"auto",borderBottom:"0px solid white",paddingBottom:"8px",width:"98%",height:"25%"},children:i("textarea",{placeholder:"Was There a Red or Yellow Card? Did the Robt Become Disabled? Did They Play Defense? Did Someone Play Defense on Them? What Else Should the Drivers Know?",type:"text",style:{width:"100%",height:"100%",marginLeft:"1%"}})}),i("div",{style:{width:"auto",borderBottom:"0px solid white",paddingTop:"0px",paddingBottom:"15px"},children:i(v,{style:{width:"97.5%",height:"100%",backgroundColor:"var(--ButtonsMain)",color:"var(--Text)",border:"0px",marginLeft:"15px"},onClick:Ce,children:"SUBMIT"})}),i("div",{style:{width:"auto",borderBottom:"0px solid white",paddingTop:"0px",paddingBottom:"15px",color:"var(--Text)",fontSize:"0.75rem"},children:"© Sadiq Ahmed 2023 & Kieran Musser"})]})})}ye.createRoot(document.getElementById("root")).render(i(w.StrictMode,{children:i(Ye,{})}));
