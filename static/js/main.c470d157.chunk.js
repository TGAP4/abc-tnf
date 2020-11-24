(this.webpackJsonpabc=this.webpackJsonpabc||[]).push([[0],{53:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t(24),a=t.n(i),o=(t(53),t(6)),u=t(5),d=t(2),s=t(3);function j(){var n=Object(d.a)(["\n  margin: 0 15px;\n  cursor: pointer;\n\n  @media (max-width: 800px) {\n    margin: 0;\n  }\n"]);return j=function(){return n},n}function p(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  right: 25px;\n  box-sizing: border-box;\n\n  @media (max-width: 800px) {\n    width: 100%;\n    right: 0;\n    padding: 0 4vw;\n    margin: 0 auto;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 14px;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(d.a)(["\n  margin: 20px auto;\n  font-weight: 700;\n  font-size: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  z-index: 10;\n\n  @media (max-width: 500px) {\n    font-size: 20px;\n  }\n"]);return x=function(){return n},n}function l(){var n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  background: black;\n  color: white;\n"]);return l=function(){return n},n}var b=s.a.div(l()),f=s.a.div(x()),h=s.a.div(p()),O=s.a.div(j()),g=t(15),v=t(20),m="SIGNUP_LOGIN",w="LOGOUT";function y(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 25px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return y=function(){return n},n}function E(){var n=Object(d.a)(["\n  border-radius: 3px;\n  border: 1px solid ",";\n  padding: 10px 15px;\n  width: 200px;\n  margin-top: 5px;\n"]);return E=function(){return n},n}function k(){var n=Object(d.a)(["\n  margin-top: 18px;\n"]);return k=function(){return n},n}function S(){var n=Object(d.a)(["\n  font-size: 28px;\n  line-height: 28px;\n  font-weight: 700;\n"]);return S=function(){return n},n}function C(){var n=Object(d.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n"]);return C=function(){return n},n}function I(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  margin: auto;\n  border-radius: 5px;\n  font-weight: 500;\n  position: absolute;\n  z-index: 100;\n  top: 45px;\n  left: calc(50% - 166px);\n  box-shadow: 0 30px 30px black;\n"]);return I=function(){return n},n}var U=s.a.div(I()),A=s.a.div(C()),T=s.a.div(S()),M=s.a.div(k()),R=s.a.input(E(),(function(n){return n.error?"orange":"black"})),z=s.a.div(y()),D=function(n){var e=n.modalType,t=n.setModalType,i=Object(v.b)(),a=Object(c.useState)(""),o=Object(u.a)(a,2),d=o[0],s=o[1],j=Object(c.useState)(""),p=Object(u.a)(j,2),x=p[0],l=p[1],b=Object(c.useState)(""),f=Object(u.a)(b,2),h=f[0],O=f[1],g=Object(c.useState)(""),w=Object(u.a)(g,2),y=w[0],E=w[1],k=Object(c.useState)(!1),S=Object(u.a)(k,2),C=S[0],I=S[1],D=Object(c.useState)(!1),N=Object(u.a)(D,2),F=N[0],P=N[1];return Object(r.jsx)(r.Fragment,{children:F?Object(r.jsxs)(U,{children:[Object(r.jsxs)(T,{children:[d," has ","Sign Up"===e?"signed up!":"logged in!"]}),Object(r.jsx)(z,{onClick:function(){return t("")},children:"Close"})]}):Object(r.jsxs)(U,{children:[Object(r.jsx)(A,{onClick:function(){return t("")},children:"X"}),Object(r.jsx)(T,{children:e}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:"NAME"}),Object(r.jsx)(R,{type:"text",onChange:function(n){return s(n.target.value)},value:d,error:C&&!d})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:"EMAIL"}),Object(r.jsx)(R,{type:"email",onChange:function(n){return l(n.target.value)},value:x,error:C&&!x})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:"PASSWORD"}),Object(r.jsx)(R,{type:"password",onChange:function(n){return O(n.target.value)},value:h,error:C&&(!h||h!==y)})]}),"Sign Up"===e&&Object(r.jsxs)(M,{children:[Object(r.jsx)("div",{children:"CONFIRM PASSWORD"}),Object(r.jsx)(R,{type:"password",onChange:function(n){return E(n.target.value)},value:y,error:C&&(!y||h!==y)})]}),Object(r.jsx)(z,{onClick:function(){I(!0),d&&x&&h&&("Sign Up"===e&&h!==y||(i(function(n){return{type:m,payload:n}}(x)),P(!0)))},children:e})]})})},N=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.currentUser})),t=Object(c.useState)(""),i=Object(u.a)(t,2),a=i[0],o=i[1];return Object(r.jsxs)(r.Fragment,{children:[a&&Object(r.jsx)(D,{modalType:a,setModalType:o}),Object(r.jsxs)(b,{children:[Object(r.jsx)(f,{as:g.b,to:"/",children:"SCHWIFTYPEDIA"}),Object(r.jsx)(h,{children:e.email?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:e.email}),Object(r.jsx)(O,{onClick:function(){return n({type:w})},children:"LOGOUT"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{onClick:function(){return o("Sign Up")},children:"SIGN UP"}),Object(r.jsx)(O,{onClick:function(){return o("Login")},children:"LOGIN"})]})})]})]})};function F(){var n=Object(d.a)(["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  opacity: ",";\n\n  @media (max-width: 900px) {\n    top: 0px;\n  }\n"]);return F=function(){return n},n}function P(){var n=Object(d.a)(["\n  width: 300px;\n\n  @media (max-width: 900px) {\n    position: relative;\n  }\n"]);return P=function(){return n},n}function G(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n  width: 200px;\n  margin: 20px;\n  cursor: pointer;\n  background: green;\n  margin-top: 20px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n  text-decoration: none;\n\n  @media (max-width: 900px) {\n    margin: 40px 0;\n  }\n\n  &:hover {\n    transform: scale(1.08);\n  }\n"]);return G=function(){return n},n}function L(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding-top: 80px;\n\n  @media (max-width: 900px) {\n    flex-direction: column;\n    padding: 40px 0;\n    position: relative;\n  }\n"]);return L=function(){return n},n}var H=s.a.div(L()),W=s.a.div(G()),_=s.a.img(P()),X=s.a.img(F(),(function(n){return n.muted?"0.5":"1"})),B=t.p+"static/media/get_schwifty.001b8fff.mp3",J=t.p+"static/media/volume-icon.0ed76ab0.png",Y=t.p+"static/media/rick-morty.df79dbf0.jpg",V=function(){var n=Object(c.useState)(!0),e=Object(u.a)(n,2),t=e[0],i=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("audio",{id:"get-schwifty",children:Object(r.jsx)("source",{type:"audio/mp3",src:B,muted:"muted"})}),Object(r.jsxs)(H,{children:[Object(r.jsx)(W,{as:g.b,to:"/characters",children:"CHARACTERS"}),Object(r.jsx)(_,{src:Y,alt:"Rick and Morty"}),Object(r.jsx)(W,{as:g.b,to:"/episodes",children:"EPISODES"}),Object(r.jsx)(X,{src:J,alt:"Volume Icon",onClick:function(){var n=document.getElementById("get-schwifty");t?(n.play(),i(!1)):(n.pause(),i(!0))},muted:t})]})]})},q=t(11),K=t.n(q),Q=t(16);function Z(){var n=Object(d.a)(["\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  font-size: 36px;\n  margin: 80px auto;\n  width: 80%;\n"]);return Z=function(){return n},n}function $(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 30px;\n  margin-top: 25px;\n"]);return $=function(){return n},n}function nn(){var n=Object(d.a)(["\n  font-size: 36px;\n"]);return nn=function(){return n},n}function en(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10vw 80px;\n  color: white;\n  font-weight: 700;\n  margin-top: 40px;\n"]);return en=function(){return n},n}var tn=s.a.div(en()),rn=s.a.div(nn()),cn=s.a.div($()),an=s.a.div(Z()),on=t(17),un=t.n(on);function dn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 25px;\n  cursor: pointer;\n  background: green;\n  border-radius: 3px;\n  color: white;\n  margin-top: 20px;\n  font-weight: 600;\n"]);return dn=function(){return n},n}function sn(){var n=Object(d.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return sn=function(){return n},n}function jn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 25px 35px;\n  background: #eeeeee;\n  border-radius: 5px;\n  color: black;\n  font-weight: 500;\n  box-sizing: border-box;\n"]);return jn=function(){return n},n}var pn=s.a.div(jn()),xn=s.a.div(sn()),ln=s.a.div(dn()),bn=function(n){var e,t=n.character,c=n.setModalCharacter;return Object(r.jsxs)(pn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xn,{children:"NAME:"}),Object(r.jsx)("div",{children:t.name}),Object(r.jsx)(xn,{children:"ORIGIN:"}),Object(r.jsx)("div",{children:null===(e=t.origin)||void 0===e?void 0:e.name})]}),Object(r.jsx)(ln,{onClick:function(){window.scrollTo(0,0),c(t)},children:"More Information"})]})};function fn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 5px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return fn=function(){return n},n}function hn(){var n=Object(d.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return hn=function(){return n},n}function On(){var n=Object(d.a)(["\n  height: 250px;\n  padding: 10px 0;\n  overflow-y: auto;\n"]);return On=function(){return n},n}function gn(){var n=Object(d.a)(["\n  width: 75%;\n  margin: 20px auto 5px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(d.a)(["\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 800;\n  text-align: center;\n"]);return vn=function(){return n},n}function mn(){var n=Object(d.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n"]);return mn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  border-radius: 5px;\n  font-weight: 500;\n  position: absolute;\n  z-index: 100;\n  top: 45px;\n  left: calc(50% - 240px);\n  box-shadow: 0 30px 30px black;\n  width: 380px;\n\n  @media (max-width: 500px) {\n    width: calc(95% - 100px);\n    left: 2.5%;\n  }\n"]);return wn=function(){return n},n}var yn=s.a.div(wn()),En=s.a.div(mn()),kn=s.a.div(vn()),Sn=s.a.img(gn()),Cn=s.a.div(On()),In=s.a.div(hn()),Un=s.a.div(fn()),An=function(n){var e,t,i=n.character,a=n.setModalCharacter,o=Object(c.useState)([]),d=Object(u.a)(o,2),s=d[0],j=d[1];return Object(c.useEffect)((function(){var n=[];i.episode.forEach(function(){var e=Object(Q.a)(K.a.mark((function e(t){var r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,un.a.get(t);case 2:r=e.sent,n.push(r.data.name),n.length===i.episode.length&&j(n);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[i.episode]),Object(r.jsxs)(yn,{children:[Object(r.jsx)(En,{onClick:function(){return a({})},children:"X"}),Object(r.jsx)(kn,{children:i.name}),Object(r.jsx)(Sn,{src:i.image,alt:"Character Image"}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(In,{children:"ID"}),Object(r.jsx)("div",{children:i.id}),Object(r.jsx)(In,{children:"CREATED"}),Object(r.jsx)("div",{children:i.created}),Object(r.jsx)(In,{children:"GENDER"}),Object(r.jsx)("div",{children:i.gender||"Unknown"}),Object(r.jsx)(In,{children:"LOCATION"}),Object(r.jsx)("div",{children:(null===(e=i.location)||void 0===e?void 0:e.name)||"Unknown"}),Object(r.jsx)(In,{children:"ORIGIN"}),Object(r.jsx)("div",{children:(null===(t=i.origin)||void 0===t?void 0:t.name)||"Unknown"}),Object(r.jsx)(In,{children:"SPECIES"}),Object(r.jsx)("div",{children:i.species||"Unknown"}),Object(r.jsx)(In,{children:"STATUS"}),Object(r.jsx)("div",{children:i.status||"Unknown"}),Object(r.jsx)(In,{children:"TYPE"}),Object(r.jsx)("div",{children:i.type||"Unknown"}),Object(r.jsx)(In,{children:"EPISODES"}),s.map((function(n,e){return Object(r.jsx)("div",{children:n},"ep-".concat(e))}))]}),Object(r.jsx)(Un,{onClick:function(){return a({})},children:"Close"})]})},Tn=function(){var n=Object(c.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)({}),o=Object(u.a)(a,2),d=o[0],s=o[1],j=Object(c.useState)(""),p=Object(u.a)(j,2),x=p[0],l=p[1];return Object(c.useEffect)((function(){for(var n=[],e=1;e<23;e++)n.push(e);Object(Q.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,un.a.get("https://rickandmortyapi.com/api/character/".concat(n));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Error fetching characters, please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[d.id&&Object(r.jsx)(An,{character:d,setModalCharacter:s}),x?Object(r.jsx)(an,{children:x}):Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:"CHARACTERS"}),Object(r.jsx)(cn,{children:t.map((function(n,e){return Object(r.jsx)(bn,{character:n,setModalCharacter:s},"char-".concat(e))}))})]})]})};function Mn(){var n=Object(d.a)(["\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  font-size: 36px;\n  margin: 80px auto;\n  width: 80%;\n"]);return Mn=function(){return n},n}function Rn(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 30px;\n  margin-top: 25px;\n"]);return Rn=function(){return n},n}function zn(){var n=Object(d.a)(["\n  font-size: 36px;\n"]);return zn=function(){return n},n}function Dn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10vw 80px;\n  color: white;\n  font-weight: 700;\n  margin-top: 40px;\n"]);return Dn=function(){return n},n}var Nn=s.a.div(Dn()),Fn=s.a.div(zn()),Pn=s.a.div(Rn()),Gn=s.a.div(Mn());function Ln(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 25px;\n  cursor: pointer;\n  background: green;\n  border-radius: 3px;\n  color: white;\n  margin-top: 20px;\n  font-weight: 600;\n"]);return Ln=function(){return n},n}function Hn(){var n=Object(d.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return Hn=function(){return n},n}function Wn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 25px 35px;\n  background: #eeeeee;\n  border-radius: 5px;\n  color: black;\n  font-weight: 500;\n  box-sizing: border-box;\n"]);return Wn=function(){return n},n}var _n=s.a.div(Wn()),Xn=s.a.div(Hn()),Bn=s.a.div(Ln()),Jn=function(n){var e=n.episode,t=n.setModalEpisode;return Object(r.jsxs)(_n,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Xn,{children:"NAME:"}),Object(r.jsx)("div",{children:e.name}),Object(r.jsx)(Xn,{children:"AIR DATE:"}),Object(r.jsx)("div",{children:e.air_date})]}),Object(r.jsx)(Bn,{onClick:function(){window.scrollTo(0,0),t(e)},children:"More Information"})]})};function Yn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 5px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return Yn=function(){return n},n}function Vn(){var n=Object(d.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return Vn=function(){return n},n}function qn(){var n=Object(d.a)(["\n  height: 250px;\n  padding: 10px 0;\n  overflow-y: auto;\n"]);return qn=function(){return n},n}function Kn(){var n=Object(d.a)(["\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 800;\n  text-align: center;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(d.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  border-radius: 5px;\n  font-weight: 500;\n  position: absolute;\n  z-index: 100;\n  top: 45px;\n  left: calc(50% - 240px);\n  box-shadow: 0 30px 30px black;\n  width: 380px;\n\n  @media (max-width: 500px) {\n    width: calc(95% - 100px);\n    left: 2.5%;\n  }\n"]);return Zn=function(){return n},n}var $n=s.a.div(Zn()),ne=s.a.div(Qn()),ee=s.a.div(Kn()),te=s.a.div(qn()),re=s.a.div(Vn()),ce=s.a.div(Yn()),ie=function(n){var e=n.episode,t=n.setModalEpisode,i=Object(c.useState)([]),a=Object(u.a)(i,2),o=a[0],d=a[1];return Object(c.useEffect)((function(){var n=[];e.characters.forEach(function(){var t=Object(Q.a)(K.a.mark((function t(r){var c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,un.a.get(r);case 2:c=t.sent,n.push(c.data.name),n.length===e.characters.length&&d(n);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}),[e.characters]),Object(r.jsxs)($n,{children:[Object(r.jsx)(ne,{onClick:function(){return t({})},children:"X"}),Object(r.jsx)(ee,{children:e.name}),Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{children:"ID"}),Object(r.jsx)("div",{children:e.id}),Object(r.jsx)(re,{children:"EPISODE"}),Object(r.jsx)("div",{children:e.episode||"Unknown"}),Object(r.jsx)(re,{children:"CREATED"}),Object(r.jsx)("div",{children:e.created}),Object(r.jsx)(re,{children:"AIR DATE"}),Object(r.jsx)("div",{children:e.air_date||"Unknown"}),Object(r.jsx)(re,{children:"CHARACTERS"}),o.map((function(n,e){return Object(r.jsx)("div",{children:n},"ep-".concat(e))}))]}),Object(r.jsx)(ce,{onClick:function(){return t({})},children:"Close"})]})},ae=function(){var n=Object(c.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)({}),o=Object(u.a)(a,2),d=o[0],s=o[1],j=Object(c.useState)(""),p=Object(u.a)(j,2),x=p[0],l=p[1];return Object(c.useEffect)((function(){for(var n=[],e=1;e<19;e++)n.push(e);Object(Q.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,un.a.get("https://rickandmortyapi.com/api/episode/".concat(n));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Error fetching episodes, please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[d.id&&Object(r.jsx)(ie,{episode:d,setModalEpisode:s}),x?Object(r.jsx)(Gn,{children:x}):Object(r.jsxs)(Nn,{children:[Object(r.jsx)(Fn,{children:"EPISODES"}),Object(r.jsx)(Pn,{children:t.map((function(n,e){return Object(r.jsx)(Jn,{episode:n,setModalEpisode:s},"ep-".concat(e))}))})]})]})},oe=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf",component:V}),Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf/characters",component:Tn}),Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf/episodes",component:ae})]})]})},ue=t(14),de=t(22),se=t(23),je=t(45),pe=t(46),xe={key:"root",storage:t.n(pe).a,transforms:[Object(je.createWhitelistFilter)("reducer",["currentUser"])]},le={currentUser:{},modal:{open:!1}},be=Object(se.persistReducer)(xe,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(de.a)(Object(de.a)({},n),{},{currentUser:{email:e.payload}});case w:return Object(de.a)(Object(de.a)({},n),{},{currentUser:{}});default:return Object(de.a)({},n)}})),fe=Object(ue.c)(be),he=Object(se.persistStore)(fe),Oe=t(47);a.a.render(Object(r.jsx)(v.a,{store:fe,children:Object(r.jsx)(g.a,{children:Object(r.jsx)(Oe.a,{persistor:he,children:Object(r.jsx)(oe,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.c470d157.chunk.js.map