(this.webpackJsonpabc=this.webpackJsonpabc||[]).push([[0],{53:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t(24),a=t.n(i),o=(t(53),t(6)),d=t(5),u=t(2),s=t(3);function p(){var n=Object(u.a)(["\n  margin: 0 15px;\n  cursor: pointer;\n\n  @media (max-width: 800px) {\n    margin: 0;\n  }\n"]);return p=function(){return n},n}function j(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  position: absolute;\n  right: 25px;\n  box-sizing: border-box;\n\n  @media (max-width: 800px) {\n    width: 100%;\n    right: 0;\n    padding: 0 4vw;\n    margin: 0 auto;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 14px;\n    margin-top: 30px;\n    padding: 0 18vw;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(u.a)(["\n  margin: 20px auto;\n  font-weight: 700;\n  font-size: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  z-index: 10;\n\n  @media (max-width: 500px) {\n    font-size: 32px;\n  }\n"]);return x=function(){return n},n}function l(){var n=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  background: black;\n  color: white;\n\n  @media (max-width: 500px) {\n    padding-bottom: 15px;\n  }\n"]);return l=function(){return n},n}var b=s.a.div(l()),f=s.a.div(x()),h=s.a.div(j()),O=s.a.div(p()),g=t(15),v=t(20),m="SIGNUP_LOGIN",w="LOGOUT";function y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 30px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return y=function(){return n},n}function E(){var n=Object(u.a)(["\n  border-radius: 3px;\n  border: 1px solid ",";\n  padding: 10px 15px;\n  width: 200px;\n  margin-top: 5px;\n"]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\n  margin-top: 16px;\n  width: 100%;\n"]);return k=function(){return n},n}function S(){var n=Object(u.a)(["\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 700;\n  text-align: center;\n"]);return S=function(){return n},n}function C(){var n=Object(u.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n"]);return C=function(){return n},n}function I(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  width: 330px;\n  margin: auto;\n  border-radius: 5px;\n  font-weight: 700;\n  position: absolute;\n  z-index: 11;\n  top: 45px;\n  left: calc(50% - 165px);\n  box-shadow: 0 30px 30px black;\n  box-sizing: border-box;\n"]);return I=function(){return n},n}var U=s.a.div(I()),A=s.a.div(C()),T=s.a.div(S()),z=s.a.div(k()),M=s.a.input(E(),(function(n){return n.error?"orange":"black"})),R=s.a.div(y()),D=function(n){var e=n.modalType,t=n.setModalType,i=Object(v.b)(),a=Object(c.useState)(""),o=Object(d.a)(a,2),u=o[0],s=o[1],p=Object(c.useState)(""),j=Object(d.a)(p,2),x=j[0],l=j[1],b=Object(c.useState)(""),f=Object(d.a)(b,2),h=f[0],O=f[1],g=Object(c.useState)(""),w=Object(d.a)(g,2),y=w[0],E=w[1],k=Object(c.useState)(!1),S=Object(d.a)(k,2),C=S[0],I=S[1],D=Object(c.useState)(!1),N=Object(d.a)(D,2),F=N[0],P=N[1];return Object(r.jsx)(r.Fragment,{children:F?Object(r.jsxs)(U,{children:[Object(r.jsx)(T,{children:"Sign Up"===e?"".concat(u," has signed up!"):"You are now signed in!"}),Object(r.jsx)(R,{onClick:function(){return t("")},children:"Close"})]}):Object(r.jsxs)(U,{children:[Object(r.jsx)(A,{onClick:function(){return t("")},children:"X"}),Object(r.jsx)(T,{children:e}),"Sign Up"===e&&Object(r.jsxs)(z,{children:[Object(r.jsx)("div",{children:"NAME"}),Object(r.jsx)(M,{type:"text",onChange:function(n){return s(n.target.value)},value:u,error:C&&!u})]}),Object(r.jsxs)(z,{children:[Object(r.jsx)("div",{children:"EMAIL"}),Object(r.jsx)(M,{type:"email",onChange:function(n){return l(n.target.value)},value:x,error:C&&!x})]}),Object(r.jsxs)(z,{children:[Object(r.jsx)("div",{children:"PASSWORD"}),Object(r.jsx)(M,{type:"password",onChange:function(n){return O(n.target.value)},value:h,error:C&&(!h||h!==y)})]}),"Sign Up"===e&&Object(r.jsxs)(z,{children:[Object(r.jsx)("div",{children:"CONFIRM PASSWORD"}),Object(r.jsx)(M,{type:"password",onChange:function(n){return E(n.target.value)},value:y,error:C&&(!y||h!==y)})]}),Object(r.jsx)(R,{onClick:function(){I(!0),x&&h&&("Sign Up"!==e||h===y&&u)&&(i(function(n){return{type:m,payload:n}}(x)),P(!0))},children:e})]})})},N=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.currentUser})),t=Object(c.useState)(""),i=Object(d.a)(t,2),a=i[0],o=i[1];return Object(r.jsxs)(r.Fragment,{children:[a&&Object(r.jsx)(D,{modalType:a,setModalType:o}),Object(r.jsxs)(b,{children:[Object(r.jsx)(f,{as:g.b,to:"/abc-tnf",children:"SCHWIFTYPEDIA"}),Object(r.jsx)(h,{children:e.email?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:e.email}),Object(r.jsx)(O,{onClick:function(){return n({type:w})},children:"LOGOUT"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{onClick:function(){return o("Sign Up")},children:"SIGN UP"}),Object(r.jsx)(O,{onClick:function(){return o("Login")},children:"LOGIN"})]})})]})]})};function F(){var n=Object(u.a)(["\n  width: 50px;\n  cursor: pointer;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  opacity: ",";\n\n  @media (max-width: 900px) {\n    top: 0px;\n  }\n"]);return F=function(){return n},n}function P(){var n=Object(u.a)(["\n  width: 300px;\n\n  @media (max-width: 900px) {\n    position: relative;\n  }\n"]);return P=function(){return n},n}function G(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n  width: 200px;\n  margin: 20px;\n  cursor: pointer;\n  background: green;\n  margin-top: 20px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n  text-decoration: none;\n\n  @media (max-width: 900px) {\n    margin: 40px 0;\n  }\n\n  &:hover {\n    transform: scale(1.08);\n  }\n"]);return G=function(){return n},n}function L(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding-top: 80px;\n\n  @media (max-width: 900px) {\n    flex-direction: column;\n    padding: 40px 0;\n    position: relative;\n  }\n"]);return L=function(){return n},n}var H=s.a.div(L()),W=s.a.div(G()),_=s.a.img(P()),X=s.a.img(F(),(function(n){return n.muted?"0.5":"1"})),Y=t.p+"static/media/get_schwifty.001b8fff.mp3",B=t.p+"static/media/volume-icon.0ed76ab0.png",J=t.p+"static/media/rick-morty.df79dbf0.jpg",V=function(){var n=Object(c.useState)(!0),e=Object(d.a)(n,2),t=e[0],i=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("audio",{id:"get-schwifty",children:Object(r.jsx)("source",{type:"audio/mp3",src:Y,muted:"muted"})}),Object(r.jsxs)(H,{children:[Object(r.jsx)(W,{as:g.b,to:"/abc-tnf/characters",children:"CHARACTERS"}),Object(r.jsx)(_,{src:J,alt:"Rick and Morty"}),Object(r.jsx)(W,{as:g.b,to:"/abc-tnf/episodes",children:"EPISODES"}),Object(r.jsx)(X,{src:B,alt:"Volume Icon",onClick:function(){var n=document.getElementById("get-schwifty");t?(n.play(),i(!1)):(n.pause(),i(!0))},muted:t})]})]})},q=t(11),K=t.n(q),Q=t(16);function Z(){var n=Object(u.a)(["\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  font-size: 36px;\n  margin: 80px auto;\n  width: 80%;\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));\n  grid-gap: 30px;\n  margin-top: 25px;\n"]);return $=function(){return n},n}function nn(){var n=Object(u.a)(["\n  font-size: 36px;\n\n  @media (max-width: 500px) {\n    text-align: center;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10vw 80px;\n  color: white;\n  font-weight: 700;\n  margin-top: 40px;\n"]);return en=function(){return n},n}var tn=s.a.div(en()),rn=s.a.div(nn()),cn=s.a.div($()),an=s.a.div(Z()),on=t(17),dn=t.n(on);function un(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 25px;\n  cursor: pointer;\n  background: green;\n  border-radius: 3px;\n  color: white;\n  margin-top: 20px;\n  font-weight: 600;\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return sn=function(){return n},n}function pn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 25px 35px;\n  background: #eeeeee;\n  border-radius: 5px;\n  color: black;\n  font-weight: 500;\n  box-sizing: border-box;\n"]);return pn=function(){return n},n}var jn=s.a.div(pn()),xn=s.a.div(sn()),ln=s.a.div(un()),bn=function(n){var e,t=n.character,c=n.setModalCharacter;return Object(r.jsxs)(jn,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xn,{children:"NAME:"}),Object(r.jsx)("div",{children:t.name}),Object(r.jsx)(xn,{children:"ORIGIN:"}),Object(r.jsx)("div",{children:null===(e=t.origin)||void 0===e?void 0:e.name})]}),Object(r.jsx)(ln,{onClick:function(){window.scrollTo(0,0),c(t)},children:"More Information"})]})};function fn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 5px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return fn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return hn=function(){return n},n}function On(){var n=Object(u.a)(["\n  height: 250px;\n  padding: 10px 0;\n  overflow-y: auto;\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n  width: 75%;\n  margin: 20px auto 5px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 800;\n  text-align: center;\n"]);return vn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n  font-weight: 700;\n"]);return mn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  border-radius: 5px;\n  font-weight: 500;\n  position: absolute;\n  z-index: 100;\n  top: 45px;\n  left: calc(50% - 240px);\n  box-shadow: 0 30px 30px black;\n  width: 380px;\n\n  @media (max-width: 500px) {\n    width: calc(95% - 100px);\n    left: 2.5%;\n  }\n"]);return wn=function(){return n},n}var yn=s.a.div(wn()),En=s.a.div(mn()),kn=s.a.div(vn()),Sn=s.a.img(gn()),Cn=s.a.div(On()),In=s.a.div(hn()),Un=s.a.div(fn()),An=function(n){var e,t,i=n.character,a=n.setModalCharacter,o=Object(c.useState)([]),u=Object(d.a)(o,2),s=u[0],p=u[1];return Object(c.useEffect)((function(){Object(Q.a)(K.a.mark((function n(){var e,t,r;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],i.episode.forEach((function(n){var t=n.split("episode/")[1];e.push(t)})),n.next=4,dn.a.get("https://rickandmortyapi.com/api/episode/".concat(e));case 4:t=n.sent,r=t.data.map((function(n){return n.name})),p(r);case 7:case"end":return n.stop()}}),n)})))()}),[i.episode]),Object(r.jsxs)(yn,{children:[Object(r.jsx)(En,{onClick:function(){return a({})},children:"X"}),Object(r.jsx)(kn,{children:i.name}),Object(r.jsx)(Sn,{src:i.image,alt:"Character Image"}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(In,{children:"ID"}),Object(r.jsx)("div",{children:i.id}),Object(r.jsx)(In,{children:"CREATED"}),Object(r.jsx)("div",{children:i.created}),Object(r.jsx)(In,{children:"GENDER"}),Object(r.jsx)("div",{children:i.gender||"Unknown"}),Object(r.jsx)(In,{children:"LOCATION"}),Object(r.jsx)("div",{children:(null===(e=i.location)||void 0===e?void 0:e.name)||"Unknown"}),Object(r.jsx)(In,{children:"ORIGIN"}),Object(r.jsx)("div",{children:(null===(t=i.origin)||void 0===t?void 0:t.name)||"Unknown"}),Object(r.jsx)(In,{children:"SPECIES"}),Object(r.jsx)("div",{children:i.species||"Unknown"}),Object(r.jsx)(In,{children:"STATUS"}),Object(r.jsx)("div",{children:i.status||"Unknown"}),Object(r.jsx)(In,{children:"TYPE"}),Object(r.jsx)("div",{children:i.type||"Unknown"}),Object(r.jsx)(In,{children:"EPISODES"}),s.map((function(n,e){return Object(r.jsx)("div",{children:n},"ep-".concat(e))}))]}),Object(r.jsx)(Un,{onClick:function(){return a({})},children:"Close"})]})},Tn=function(){var n=Object(c.useState)([]),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)({}),o=Object(d.a)(a,2),u=o[0],s=o[1],p=Object(c.useState)(""),j=Object(d.a)(p,2),x=j[0],l=j[1];return Object(c.useEffect)((function(){for(var n=[],e=1;e<23;e++)n.push(e);Object(Q.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,dn.a.get("https://rickandmortyapi.com/api/character/".concat(n));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Error fetching characters, please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[u.id&&Object(r.jsx)(An,{character:u,setModalCharacter:s}),x?Object(r.jsx)(an,{children:x}):Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:"CHARACTERS"}),Object(r.jsx)(cn,{children:t.map((function(n,e){return Object(r.jsx)(bn,{character:n,setModalCharacter:s},"char-".concat(e))}))})]})]})};function zn(){var n=Object(u.a)(["\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  font-size: 36px;\n  margin: 80px auto;\n  width: 80%;\n"]);return zn=function(){return n},n}function Mn(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));\n  grid-gap: 30px;\n  margin-top: 25px;\n"]);return Mn=function(){return n},n}function Rn(){var n=Object(u.a)(["\n  font-size: 36px;\n\n  @media (max-width: 500px) {\n    text-align: center;\n  }\n"]);return Rn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10vw 80px;\n  color: white;\n  font-weight: 700;\n  margin-top: 40px;\n"]);return Dn=function(){return n},n}var Nn=s.a.div(Dn()),Fn=s.a.div(Rn()),Pn=s.a.div(Mn()),Gn=s.a.div(zn());function Ln(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 25px;\n  cursor: pointer;\n  background: green;\n  border-radius: 3px;\n  color: white;\n  margin-top: 20px;\n  font-weight: 600;\n"]);return Ln=function(){return n},n}function Hn(){var n=Object(u.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return Hn=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 25px 35px;\n  background: #eeeeee;\n  border-radius: 5px;\n  color: black;\n  font-weight: 500;\n  box-sizing: border-box;\n"]);return Wn=function(){return n},n}var _n=s.a.div(Wn()),Xn=s.a.div(Hn()),Yn=s.a.div(Ln()),Bn=function(n){var e=n.episode,t=n.setModalEpisode;return Object(r.jsxs)(_n,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Xn,{children:"NAME:"}),Object(r.jsx)("div",{children:e.name}),Object(r.jsx)(Xn,{children:"AIR DATE:"}),Object(r.jsx)("div",{children:e.air_date})]}),Object(r.jsx)(Yn,{onClick:function(){window.scrollTo(0,0),t(e)},children:"More Information"})]})};function Jn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 30px;\n  cursor: pointer;\n  background: green;\n  margin-top: 5px;\n  border-radius: 3px;\n  color: white;\n  font-weight: 600;\n"]);return Jn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  font-weight: 800;\n  margin: 15px 0 3px;\n"]);return Vn=function(){return n},n}function qn(){var n=Object(u.a)(["\n  height: 250px;\n  padding: 10px 0;\n  overflow-y: auto;\n"]);return qn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n  font-size: 28px;\n  line-height: 32px;\n  font-weight: 800;\n  text-align: center;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  color: gray;\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  cursor: pointer;\n  font-weight: 700;\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  background: #EEEEEE;\n  padding: 40px 50px;\n  border-radius: 5px;\n  font-weight: 500;\n  position: absolute;\n  z-index: 100;\n  top: 45px;\n  left: calc(50% - 240px);\n  box-shadow: 0 30px 30px black;\n  width: 380px;\n\n  @media (max-width: 500px) {\n    width: calc(95% - 100px);\n    left: 2.5%;\n  }\n"]);return Zn=function(){return n},n}var $n=s.a.div(Zn()),ne=s.a.div(Qn()),ee=s.a.div(Kn()),te=s.a.div(qn()),re=s.a.div(Vn()),ce=s.a.div(Jn()),ie=function(n){var e=n.episode,t=n.setModalEpisode,i=Object(c.useState)([]),a=Object(d.a)(i,2),o=a[0],u=a[1];return Object(c.useEffect)((function(){Object(Q.a)(K.a.mark((function n(){var t,r,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],e.characters.forEach((function(n){var e=n.split("character/")[1];t.push(e)})),n.next=4,dn.a.get("https://rickandmortyapi.com/api/character/".concat(t));case 4:r=n.sent,c=r.data.map((function(n){return n.name})),u(c);case 7:case"end":return n.stop()}}),n)})))()}),[e.characters]),Object(r.jsxs)($n,{children:[Object(r.jsx)(ne,{onClick:function(){return t({})},children:"X"}),Object(r.jsx)(ee,{children:e.name}),Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{children:"ID"}),Object(r.jsx)("div",{children:e.id}),Object(r.jsx)(re,{children:"EPISODE"}),Object(r.jsx)("div",{children:e.episode||"Unknown"}),Object(r.jsx)(re,{children:"CREATED"}),Object(r.jsx)("div",{children:e.created}),Object(r.jsx)(re,{children:"AIR DATE"}),Object(r.jsx)("div",{children:e.air_date||"Unknown"}),Object(r.jsx)(re,{children:"CHARACTERS"}),o.map((function(n,e){return Object(r.jsx)("div",{children:n},"ep-".concat(e))}))]}),Object(r.jsx)(ce,{onClick:function(){return t({})},children:"Close"})]})},ae=function(){var n=Object(c.useState)([]),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)({}),o=Object(d.a)(a,2),u=o[0],s=o[1],p=Object(c.useState)(""),j=Object(d.a)(p,2),x=j[0],l=j[1];return Object(c.useEffect)((function(){for(var n=[],e=1;e<19;e++)n.push(e);Object(Q.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,dn.a.get("https://rickandmortyapi.com/api/episode/".concat(n));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Error fetching episodes, please try again later.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.jsxs)(r.Fragment,{children:[u.id&&Object(r.jsx)(ie,{episode:u,setModalEpisode:s}),x?Object(r.jsx)(Gn,{children:x}):Object(r.jsxs)(Nn,{children:[Object(r.jsx)(Fn,{children:"EPISODES"}),Object(r.jsx)(Pn,{children:t.map((function(n,e){return Object(r.jsx)(Bn,{episode:n,setModalEpisode:s},"ep-".concat(e))}))})]})]})},oe=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf",component:V}),Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf/characters",component:Tn}),Object(r.jsx)(o.a,{exact:!0,path:"/abc-tnf/episodes",component:ae})]})]})},de=t(14),ue=t(22),se=t(23),pe=t(45),je=t(46),xe={key:"root",storage:t.n(je).a,transforms:[Object(pe.createWhitelistFilter)("reducer",["currentUser"])]},le={currentUser:{},modal:{open:!1}},be=Object(se.persistReducer)(xe,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(ue.a)(Object(ue.a)({},n),{},{currentUser:{email:e.payload}});case w:return Object(ue.a)(Object(ue.a)({},n),{},{currentUser:{}});default:return Object(ue.a)({},n)}})),fe=Object(de.c)(be),he=Object(se.persistStore)(fe),Oe=t(47);a.a.render(Object(r.jsx)(v.a,{store:fe,children:Object(r.jsx)(g.a,{children:Object(r.jsx)(Oe.a,{persistor:he,children:Object(r.jsx)(oe,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.cec33348.chunk.js.map