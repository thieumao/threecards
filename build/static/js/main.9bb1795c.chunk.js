(this.webpackJsonpthreecards=this.webpackJsonpthreecards||[]).push([[0],{100:function(n,e,t){n.exports=t.p+"static/media/2D.1451de5d.png"},101:function(n,e,t){n.exports=t.p+"static/media/3D.690d5a47.png"},102:function(n,e,t){n.exports=t.p+"static/media/4D.89eaac32.png"},103:function(n,e,t){n.exports=t.p+"static/media/5D.24fd440c.png"},104:function(n,e,t){n.exports=t.p+"static/media/6D.ff1c6299.png"},105:function(n,e,t){n.exports=t.p+"static/media/7D.58d872f0.png"},106:function(n,e,t){n.exports=t.p+"static/media/8D.fcafeaf2.png"},107:function(n,e,t){n.exports=t.p+"static/media/9D.1d495bb1.png"},108:function(n,e,t){n.exports=t.p+"static/media/1C.17ca9f77.png"},109:function(n,e,t){n.exports=t.p+"static/media/2C.136dab43.png"},110:function(n,e,t){n.exports=t.p+"static/media/3C.6ed5bf64.png"},111:function(n,e,t){n.exports=t.p+"static/media/4C.23c51e0b.png"},112:function(n,e,t){n.exports=t.p+"static/media/5C.3ac88edd.png"},113:function(n,e,t){n.exports=t.p+"static/media/6C.5c96f40f.png"},114:function(n,e,t){n.exports=t.p+"static/media/7C.4808cc41.png"},115:function(n,e,t){n.exports=t.p+"static/media/8C.a46a54d9.png"},116:function(n,e,t){n.exports=t.p+"static/media/9C.4f8d0d8f.png"},117:function(n,e,t){n.exports=t.p+"static/media/1S.e6a6d2f8.png"},118:function(n,e,t){n.exports=t.p+"static/media/2S.33c964ae.png"},119:function(n,e,t){n.exports=t.p+"static/media/3S.9638bf9f.png"},120:function(n,e,t){n.exports=t.p+"static/media/4S.5156259e.png"},121:function(n,e,t){n.exports=t.p+"static/media/5S.5ab3d862.png"},122:function(n,e,t){n.exports=t.p+"static/media/6S.c99b0f04.png"},123:function(n,e,t){n.exports=t.p+"static/media/7S.82d62864.png"},124:function(n,e,t){n.exports=t.p+"static/media/8S.497eed1e.png"},125:function(n,e,t){n.exports=t.p+"static/media/9S.50caac18.png"},177:function(n,e,t){n.exports=t(239)},182:function(n,e,t){},183:function(n,e,t){},207:function(n,e,t){n.exports=t.p+"static/media/gray_back.db53954a.png"},213:function(n,e,t){},239:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"data",(function(){return he}));var a=t(0),c=t.n(a),i=t(25),o=t.n(i),u=(t(182),t(175)),f=t(13),l=t(14),s=(t(183),t(80)),O=t(89),E=[t(90),t(91),t(92),t(93),t(94),t(95),t(96),t(97),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(105),t(106),t(107),t(108),t(109),t(110),t(111),t(112),t(113),t(114),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125)],d=function(){var n=Object(a.useState)(void 0),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(void 0),o=Object(l.a)(i,2),u=o[0],f=o[1],d=Object(a.useState)(void 0),p=Object(l.a)(d,2),b=p[0],m=p[1],h=Object(a.useState)(0),g=Object(l.a)(h,2),j=g[0],x=g[1],v=Object(a.useState)(!1),C=Object(l.a)(v,2),R=C[0],A=C[1];Object(a.useEffect)((function(){D()}),[]);var w=function(n){return Math.floor(Math.random()*Math.floor(n))},T=function(n){var e=n/9;return e<1?n+1:e<2?Math.floor((n-8)%10):e<3?Math.floor((n-17)%10):Math.floor((n-26)%10)},D=function(){for(var n=w(36),e=w(36);e===n;)e=w(36);for(var t=w(36);t===n||t===e;)t=w(36);console.log("score = ",T(n));var a=function(n,e,t){var r=(T(n)+T(e)+T(t))%10;return r>0?r:10}(n,e,t);x(a),r(E[n]),f(E[e]),m(E[t]),A(!1)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"images"},c.a.createElement("img",{src:t,className:"App-logo",alt:"logo"}),c.a.createElement("img",{src:u,className:"App-logo",alt:"logo"}),c.a.createElement("img",{src:b,className:"App-logo",alt:"logo"})),!R&&c.a.createElement("button",{className:"submitButton",onClick:Object(s.debounce)((function(){A(!0),r(O),f(O),m(O),Object(s.debounce)(D,1600)()}),400)},"Random"),!R&&j>0&&c.a.createElement("h1",{className:"total"},j))},p=t(140),b=t(143),m=t(5),h=t(6),g=t(20),j={TRANSPARENT:"transparent",WHITE:"#FFFFFF",BLACK:"#000000",PURPLE:"#3A1145",SILVER:"#BDBDBD",SILVER2:"#CCC",ORANGE:"#E88200",LIGHT_GREEN:"#C2E000",DARK_GREEN:"#A2C927",MINE_SHAFT:"#323232",MINE_SHAFT2:"#303030",YUKON_GOLD:"#666804",CONFETTI:"#EAEB5E",CURIOUS_BLUE:"#2F95DC",CURIOUS_BLUE2:"#158ECB",CORNFLOWER_BLUE:"#6195ED",CERULEAN:"#0C8AC9",TUNDORA:"#4D4D4D",MALIBU:"#59D7FF",GRAY:"#888888",SILVER_CHALICE:"#A3A3A3",DENIM:"#1489C8",DENIM2:"#1382BE",SCORPION:"#585858",JAZZBERRY_JAM:"#A51276",OBSERVATORY:"#03867F",BUDDHA_GOLD:"#CD9A00",DOVE_GRAY:"#666666",DODGER_BLUE:"#1A9FFF",SCARLET:"#FF2F00",PISTACHIO:"#9ACD00",INDIGO:"#5C6BC1",HOLLYWOOD_CERISE:"#E00087",KEPPEL:"#3EAEAD",DEEP_BLUSH:"#E05CA9",ELECTRIC_VIOLET:"#9A00CD",BITTER_SWEET:"#FF6A65",SPRING_GREEN:"#00FCB2",CYAN_AQUA:"#19EDFF",EASTERN_BLUE:"#1984BD",REGENT_ST_BLUE:"#ABD2E7",HARLEQUIN:"#30CD00",RED_ORANGE:"#FF2F2F",GALLERY:"#ECECEC",CREAM:"#FFFFCD",OUTRAGEOUS_ORANGE:"#FF6633",CONCRETE:"#F2F2F2",MERCURY:"#E9E9E9",MERCURY2:"#E3E3E3",DUSTY_GRAY:"#9C9C9C",MONA_LISA:"#FF9A9A",FOUNTAIN_BLUE:"#5AC7C6",ALTO:"#DADADA",LOCHMARA:"#0B83BF",SCIENCE_BLUE:"#0366D6",REEF:"#CCFF99",YOUR_PINK:"#FFCCCC",RAJAH:"#F9C66B",CHICAGO:"#5A5A58",LINK_WATER:"#E1EFF7",PEPPER_MINT:"#D2F0D2",BLIZZARD_BLUE:"#A4D3EB",BOULDER:"#777",GRAY_NICKEL:"#C5C5C4",ANAKIWA:"#8EE7FC",EMERALD:"#5DCD5D",RED:"#FF0000",BLUE:"#0000FF",GREEN:"#00FF00",YELLOW:"#FFFF00"},x={TINT_COLOR:j.CURIOUS_BLUE,MAIN_COLOR:"#3A5997",TEXT_COLOR:"#000000",BACKGROUND_COLOR:"#FFFFFF",SECOND_COLOR:"#EBEDF0",LINE_COLOR:"#EAEAEA"},v={TAB_ICON_DEFAULT:j.SILVER2,TAB_ICON_SELECTED:x.TINT_COLOR,TAB_BAR:j.WHITE,ERROR_BACKGROUND:j.RED,ERROR_TEXT:j.WHITE,WARNING_BACKGROUND:j.CONFETTI,WARNING_TEXT:j.YUKON_GOLD,NOTICE_BACKGROUND:x.TINT_COLOR,NOTICE_TEXT:j.WHITE,TEXT:j.MINE_SHAFT,TEXT_HEADER:j.TUNDORA,DIVIDER:j.MERCURY},C=Object(g.a)(Object(g.a)(Object(g.a)({},j),x),v);function R(){var n=Object(m.a)(["\n  font-size: 12px;\n"]);return R=function(){return n},n}function A(){var n=Object(m.a)(["\n  font-size: 14px;\n"]);return A=function(){return n},n}function w(){var n=Object(m.a)(["\n  font-size: 16px;\n"]);return w=function(){return n},n}function T(){var n=Object(m.a)(["\n  font-size: 18px;\n"]);return T=function(){return n},n}function D(){var n=Object(m.a)(["\n  font-size: 20px;\n"]);return D=function(){return n},n}function N(){var n=Object(m.a)(["\n  font-size: 20px;\n  font-weight: bold;\n"]);return N=function(){return n},n}function _(){var n=Object(m.a)(["\n  font-size: 22px;\n  font-weight: bold;\n"]);return _=function(){return n},n}function F(){var n=Object(m.a)(["\n  font-size: 24px;\n  font-weight: bold;\n"]);return F=function(){return n},n}function L(){var n=Object(m.a)(["\n  font-size: 28px;\n  font-weight: bold;\n"]);return L=function(){return n},n}function I(){var n=Object(m.a)(["\n  font-size: 30px;\n  font-weight: bold;\n"]);return I=function(){return n},n}function S(){var n=Object(m.a)(["\n  font-size: 40px;\n  font-weight: bold;\n"]);return S=function(){return n},n}function B(){var n=Object(m.a)(["\n  font-weight: bold;\n"]);return B=function(){return n},n}function U(){var n=Object(m.a)(["\n  font-family: ",";\n  font-size: 14px;\n  font-weight: normal;\n  color: ",";\n"]);return U=function(){return n},n}function M(){var n=Object(m.a)(["\n  font-family: ",";\n  color: ",";\n"]);return M=function(){return n},n}var H=h.a.Text(M(),"sans-serif",C.TEXT),y=h.a.Text(U(),"sans-serif",C.TEXT),P={Normal:y,Bold:Object(h.a)(y)(B()),Heading1:Object(h.a)(H)(S()),Heading2:Object(h.a)(H)(I()),Heading3:Object(h.a)(H)(L()),Heading4:Object(h.a)(H)(F()),Heading5:Object(h.a)(H)(_()),Heading6:Object(h.a)(H)(N()),Title1:Object(h.a)(H)(D()),Title2:Object(h.a)(H)(T()),Title3:Object(h.a)(H)(w()),Title4:Object(h.a)(H)(A()),Title5:Object(h.a)(H)(R())},V=Object(g.a)(Object(g.a)({},P),{}),G=t(66),z=t(167),k=t.n(z);function W(){var n=Object(m.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 16px;\n  width: 100%;\n"]);return W=function(){return n},n}function Y(){var n=Object(m.a)(["\n  width: 40%;\n  padding-vertical: 6px;\n  background-color: ",";\n"]);return Y=function(){return n},n}var K=h.a.TouchableOpacity(Y(),C.MAIN_COLOR),X=Object(h.a)(V.Bold)(W(),C.WHITE),J=Object(a.memo)((function(n){var e=n.title,t=n.onPress;return c.a.createElement(K,{onPress:t},c.a.createElement(X,null,e))}));function Z(){var n=Object(m.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 16px;\n  width: 100%;\n"]);return Z=function(){return n},n}function Q(){var n=Object(m.a)(["\n  width: 40%;\n  padding-vertical: 5px;\n  border-width: 1px;\n  border-color: ",";\n"]);return Q=function(){return n},n}var $=h.a.TouchableOpacity(Q(),C.MAIN_COLOR),q=Object(h.a)(V.Bold)(Z(),C.MAIN_COLOR),nn=Object(a.memo)((function(n){var e=n.title,t=n.onPress;return c.a.createElement($,{onPress:t},c.a.createElement(q,null,e))})),en=t(89),tn=(t(207),[t(108),t(109),t(110),t(111),t(112),t(113),t(114),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(125),t(90),t(91),t(92),t(93),t(94),t(95),t(96),t(97),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(105),t(106),t(107)]),rn=t(88);function an(){var n=Object(m.a)(["\n  width: 28px;\n  height: 2px;\n"]);return an=function(){return n},n}function cn(){var n=Object(m.a)(["\n  width: 28px;\n"]);return cn=function(){return n},n}function on(){var n=Object(m.a)(["\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return n},n}function un(){var n=Object(m.a)(["\n  width: ","px;\n  height: ","px;\n  resize-mode: contain;\n  align-self: center;\n  margin-horizontal: 2px;\n"]);return un=function(){return n},n}function fn(){var n=Object(m.a)(["\n  width: 100%;\n  margin-vertical: 4px;\n"]);return fn=function(){return n},n}function ln(){var n=Object(m.a)(["\n  font-size: 18px;\n  padding: 8px;\n"]);return ln=function(){return n},n}Object(h.a)(V.Bold)(ln());var sn=h.a.View(fn()),On=h.a.Image(un(),(function(n){return n.width}),(function(n){return n.height})),En=h.a.View(on()),dn=h.a.View(cn()),pn=h.a.View(an()),bn=Object(a.memo)((function(n){var e=n.item,t=n.isWin;return c.a.createElement(sn,null,c.a.createElement(En,null,t&&c.a.createElement(rn.a,{color:C.MAIN_COLOR,size:28}),!t&&c.a.createElement(pn,null),c.a.createElement(On,{source:tn[e[0]],width:60,height:90}),c.a.createElement(On,{source:tn[e[1]],width:60,height:90}),c.a.createElement(On,{source:tn[e[2]],width:60,height:90}),c.a.createElement(dn,null),c.a.createElement(On,{source:tn[e[3]],width:60,height:90}),c.a.createElement(On,{source:tn[e[4]],width:60,height:90}),c.a.createElement(On,{source:tn[e[5]],width:60,height:90}),!t&&c.a.createElement(rn.a,{color:C.MAIN_COLOR,size:28}),t&&c.a.createElement(pn,null)))})),mn=function(n){return Math.floor(Math.random()*Math.floor(n))},hn=function(n){var e=n/9;return e<1?n+1:e<2?Math.floor((n-8)%10):e<3?Math.floor((n-17)%10):Math.floor((n-26)%10)},gn=function(n,e,t){var r=(hn(n)+hn(e)+hn(t))%10;return r>0?r:10},jn=function(n){if(6==n.length){var e=gn(n[0],n[1],n[2]),t=gn(n[3],n[4],n[5]);if(e>t)return!0;if(e<t)return!1;var r=[n[0],n[1],n[2]],a=[n[3],n[4],n[5]];if(r.indexOf(27)>-1)return!0;if(a.indexOf(27)>-1)return!1;for(var c=35;c>27;c--){if(r.indexOf(c)>-1)return!0;if(a.indexOf(c)>-1)return!1}if(r.indexOf(18)>-1)return!0;if(a.indexOf(18)>-1)return!1;for(var i=26;i>18;i--){if(r.indexOf(i)>-1)return!0;if(a.indexOf(i)>-1)return!1}if(r.indexOf(9)>-1)return!0;if(a.indexOf(9)>-1)return!1;for(var o=17;o>9;o--){if(r.indexOf(o)>-1)return!0;if(a.indexOf(o)>-1)return!1}if(r.indexOf(0)>-1)return!0;if(a.indexOf(0)>-1)return!1;for(var u=8;u>0;u--){if(r.indexOf(u)>-1)return!0;if(a.indexOf(u)>-1)return!1}}};function xn(){var n=Object(m.a)(["\n  width: 28px;\n"]);return xn=function(){return n},n}function vn(){var n=Object(m.a)(["\n  flex-direction: row;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 12px;\n  margin-top: 12px;\n"]);return vn=function(){return n},n}function Cn(){var n=Object(m.a)(["\n  font-size: 16px;\n  background-color: ",";\n  padding: 12px;\n"]);return Cn=function(){return n},n}function Rn(){var n=Object(m.a)(["\n  font-size: 14px;\n  background-color: ",";\n  color: ",";\n  flex: 1;\n"]);return Rn=function(){return n},n}function An(){var n=Object(m.a)(["\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 2px;\n"]);return An=function(){return n},n}function wn(){var n=Object(m.a)(["\n  margin-horizontal: 2px;\n  padding-vertical: 4px;\n"]);return wn=function(){return n},n}function Tn(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(m.a)(["\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 2px;\n  shadow-color: #000;\n  shadow-opacity: 0.25;\n  shadow-radius: 3.84px;\n  elevation: 5;\n  width: 80%;\n  height: 80%;\n"]);return Dn=function(){return n},n}function Nn(){var n=Object(m.a)(["\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n"]);return Nn=function(){return n},n}function _n(){var n=Object(m.a)(["\n  padding: 8px;\n  text-align: center;\n"]);return _n=function(){return n},n}function Fn(){var n=Object(m.a)(["\n  padding: 4px;\n  color: white;\n  text-align: left;\n"]);return Fn=function(){return n},n}function Ln(){var n=Object(m.a)(["\n  background-color: ",";\n  padding: 4px;\n  elevation: 2;\n  margin-vertical: 12px;\n"]);return Ln=function(){return n},n}function In(){var n=Object(m.a)(["\n  margin-top: 1px;\n  background-color: ",";\n  width: 100%;\n  height: 1px;\n"]);return In=function(){return n},n}function Sn(){var n=Object(m.a)(["\n  padding: 10px;\n"]);return Sn=function(){return n},n}h.a.TouchableOpacity(Sn()),h.a.View(In(),C.MAIN_COLOR),h.a.TouchableOpacity(Ln(),C.MAIN_COLOR),Object(h.a)(V.Bold)(Fn()),Object(h.a)(V.Normal)(_n());var Bn=h.a.View(Nn()),Un=h.a.View(Dn()),Mn=Object(h.a)(G.a)(Tn()),Hn=(h.a.TouchableOpacity(wn()),h.a.View(An()),Object(h.a)(V.Normal)(Rn(),C.BACKGROUND_COLOR,(function(n){return n.color})),Object(h.a)(V.Bold)(Cn(),C.BACKGROUND_COLOR)),yn=h.a.View(vn()),Pn=h.a.View(xn()),Vn=function(n){var e,t=n.modalVisible,r=n.setModalVisible,a=n.onReset,i=n.scores,o=0,u=0,f=Object(b.a)(i);try{for(f.s();!(e=f.n()).done;){var l=e.value;jn(l)?o+=1:u+=1}}catch(s){f.e(s)}finally{f.f()}return c.a.createElement(k.a,{animationType:"slide",transparent:!0,visible:t,onBackdropPress:function(){return r()}},c.a.createElement(Bn,null,c.a.createElement(Un,null,c.a.createElement(Hn,null,"Result: ".concat(o," - ").concat(u)),c.a.createElement(Mn,{data:i,renderItem:function(n){var e=n.index,t=i[e];return c.a.createElement(bn,{item:t,isWin:jn(t)||!1})},keyExtractor:function(n,e){return"".concat(e,"_").concat(n)}}),c.a.createElement(yn,null,c.a.createElement(J,{title:"Close",onPress:function(){return r()}}),c.a.createElement(Pn,null),c.a.createElement(nn,{title:"Reset",onPress:function(){return a()}})),c.a.createElement(Hn,null,o," - ",u))))},Gn=function(){var n="undefined"!==typeof window;function e(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}}var t=Object(a.useState)(e()),r=Object(l.a)(t,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){if(n){function t(){i(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n]),c},zn=t(61),kn=function(n){return n.data.scores||[]};function Wn(){var n=Object(m.a)(["\n  width: 28px;\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(m.a)(["\n  flex-direction: row;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n"]);return Yn=function(){return n},n}function Kn(){var n=Object(m.a)(["\n  font-weight: bold;\n  font-size: 28px;\n  color: ",";\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(m.a)(["\n  font-weight: bold;\n  font-size: 28px;\n  color: ",";\n"]);return Xn=function(){return n},n}function Jn(){var n=Object(m.a)(["\n  padding: 10px;\n"]);return Jn=function(){return n},n}function Zn(){var n=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n"]);return Zn=function(){return n},n}function Qn(){var n=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]);return Qn=function(){return n},n}function $n(){var n=Object(m.a)(["\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]);return $n=function(){return n},n}function qn(){var n=Object(m.a)(["\n  width: ","px;\n  height: ","px;\n  resize-mode: contain;\n  align-self: center;\n"]);return qn=function(){return n},n}function ne(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  padding-top: 10px;\n"]);return ne=function(){return n},n}function ee(){var n=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return ee=function(){return n},n}var te=h.a.View(ee()),re=h.a.View(ne()),ae=h.a.Image(qn(),(function(n){return n.width}),(function(n){return n.height})),ce=h.a.View($n()),ie=h.a.View(Qn()),oe=h.a.View(Zn()),ue=h.a.TouchableOpacity(Jn()),fe=h.a.Text(Xn(),C.RED),le=h.a.Text(Kn(),C.RED),se=h.a.View(Yn()),Oe=h.a.View(Wn()),Ee=function(){var n=Object(zn.b)(),e=Object(zn.c)(kn),t=Object(a.useState)(!1),r=Object(l.a)(t,2),i=r[0],o=r[1],u=Object(a.useState)(!0),f=Object(l.a)(u,2),s=f[0],O=f[1],E=Object(a.useState)(en),d=Object(l.a)(E,2),b=d[0],m=d[1],h=Object(a.useState)(en),g=Object(l.a)(h,2),j=g[0],x=g[1],v=Object(a.useState)(en),C=Object(l.a)(v,2),R=C[0],A=C[1],w=Object(a.useState)(en),T=Object(l.a)(w,2),D=T[0],N=T[1],_=Object(a.useState)(en),F=Object(l.a)(_,2),L=F[0],I=F[1],S=Object(a.useState)(en),B=Object(l.a)(S,2),U=B[0],M=B[1],H=Object(a.useState)(0),y=Object(l.a)(H,2),P=y[0],V=y[1],G=Object(a.useState)(0),z=Object(l.a)(G,2),k=z[0],W=z[1],Y=Object(a.useState)([]),K=Object(l.a)(Y,2),X=K[0],Z=K[1],Q=Gn(),$=Q.width,q=Q.height,rn=$<q?$/5:q/5,an=3*rn/2,cn=function(n){switch(n){case 0:m(tn[X[0]]);break;case 1:x(tn[X[1]]);break;case 2:A(tn[X[2]]);break;case 3:N(tn[X[3]]);break;case 4:I(tn[X[4]]);break;case 5:M(tn[X[5]])}},on=function(){if(6==X.length){var n=gn(X[0],X[1],X[2]);V(n)}},un=function(){if(6==X.length){var n=gn(X[3],X[4],X[5]);W(n)}};Object(a.useEffect)((function(){fn()}),[]);var fn=function(){Z(function(){for(var n=[];n.length<6;){var e=mn(36);n.includes(e)||n.push(e)}return n}())},ln=function(){m(en),x(en),A(en),N(en),I(en),M(en),fn(),V(0),W(0),O(!1)};return c.a.createElement(te,null,c.a.createElement(p.a,null,c.a.createElement("title",null,"Three Cards")),c.a.createElement(re,null,c.a.createElement(Vn,{modalVisible:i,setModalVisible:function(){return o(!1)},onReset:function(){return n({type:"REMOVE_ALL_SCORES"})},scores:e}),c.a.createElement(ie,null,P<=0&&c.a.createElement(nn,{title:"Show",onPress:function(){6==X.length&&(m(tn[X[0]]),x(tn[X[1]]),A(tn[X[2]]),on())}}),P>0&&c.a.createElement(fe,null,P)),c.a.createElement(ce,null,c.a.createElement(ue,{onPress:function(){return cn(0)}},c.a.createElement(ae,{source:b,width:rn,height:an})),c.a.createElement(ue,{onPress:function(){return cn(1)}},c.a.createElement(ae,{source:j,width:rn,height:an})),c.a.createElement(ue,{onPress:function(){return cn(2)}},c.a.createElement(ae,{source:R,width:rn,height:an}))),c.a.createElement(ie,null,s&&c.a.createElement(J,{title:"Shuffle",onPress:function(){return ln()}}),!s&&c.a.createElement(se,null,c.a.createElement(J,{title:"Save & Shuffle",onPress:function(){return n({type:"ADD_SCORE",score:X}),void ln()}}),c.a.createElement(Oe,null),c.a.createElement(nn,{title:"Shuffle",onPress:function(){ln()}}))),c.a.createElement(ce,null,c.a.createElement(ue,{onPress:function(){return cn(3)}},c.a.createElement(ae,{source:D,width:rn,height:an})),c.a.createElement(ue,{onPress:function(){return cn(4)}},c.a.createElement(ae,{source:L,width:rn,height:an})),c.a.createElement(ue,{onPress:function(){return cn(5)}},c.a.createElement(ae,{source:U,width:rn,height:an}))),c.a.createElement(ie,null,k>0&&c.a.createElement(le,null,k),k<=0&&c.a.createElement(nn,{title:"Show",onPress:function(){6==X.length&&(N(tn[X[3]]),I(tn[X[4]]),M(tn[X[5]]),un())}})),c.a.createElement(oe,null,c.a.createElement(J,{title:"History",onPress:function(){return o(!0)}}))))},de=(t(213),function(){return c.a.createElement(u.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/old"},c.a.createElement(d,null)),c.a.createElement(f.a,{path:"/"},c.a.createElement(Ee,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(37),be=t(176),me=(t(62),{scores:[]});function he(n,e){var t=n||me;switch(e.type){case"ADD_SCORE":return Object(g.a)(Object(g.a)({},n),{},{scores:[].concat(Object(be.a)(n.scores),[e.score])});case"REMOVE_ALL_SCORES":return Object(g.a)(Object(g.a)({},n),{},{scores:[]});default:return t}}var ge=t(169),je=t.n(ge),xe=t(170),ve=t(74),Ce=t.n(ve),Re=t(173),Ae=t(174),we=t.n(Ae);Ce.a.persistOptions={storage:Re};var Te=Object(g.a)(Object(g.a)({},Ce.a),{},{effect:function(n,e){return we.a.post(n.url,e.payload&&e.payload.content)}}),De=Object(pe.combineReducers)(r),Ne=Object(pe.createStore)(De,Object(pe.compose)(Object(pe.applyMiddleware)(je.a),Object(xe.offline)(Te)));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(zn.a,{store:Ne},c.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},89:function(n,e,t){n.exports=t.p+"static/media/blue_back.8a890151.png"},90:function(n,e,t){n.exports=t.p+"static/media/1H.a762540d.png"},91:function(n,e,t){n.exports=t.p+"static/media/2H.ebe43495.png"},92:function(n,e,t){n.exports=t.p+"static/media/3H.7278d51d.png"},93:function(n,e,t){n.exports=t.p+"static/media/4H.6695f1d5.png"},94:function(n,e,t){n.exports=t.p+"static/media/5H.5457f189.png"},95:function(n,e,t){n.exports=t.p+"static/media/6H.84564e31.png"},96:function(n,e,t){n.exports=t.p+"static/media/7H.c8475b53.png"},97:function(n,e,t){n.exports=t.p+"static/media/8H.1e9e59b0.png"},98:function(n,e,t){n.exports=t.p+"static/media/9H.33ab7891.png"},99:function(n,e,t){n.exports=t.p+"static/media/1D.f37d608f.png"}},[[177,1,2]]]);
//# sourceMappingURL=main.9bb1795c.chunk.js.map