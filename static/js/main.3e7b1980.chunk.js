(this.webpackJsonpmatch=this.webpackJsonpmatch||[]).push([[0],{11:function(e,a,t){e.exports={alert:"Alert_alert__2dlD-",winner:"Alert_winner__2_e47",alert__container:"Alert_alert__container__3P3pr","alert--isVisible":"Alert_alert--isVisible__1FIBH"}},12:function(e,a,t){e.exports={card:"Card_card__3I9LM",card__face:"Card_card__face__1Omms","card--face-up":"Card_card--face-up__3kyG_"}},16:function(e,a,t){e.exports={board:"Board_board__1XdY9","board__cards--container":"Board_board__cards--container__lwuDq"}},22:function(e,a,t){},23:function(e,a,t){e.exports={button:"Button_button__1PA_U"}},26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),o=t.n(c),l=(t(31),t(15)),i=t(22),u=t.n(i),d=t(6),m=t(8),s=t(13),f=t(5),b=t(10),p=t.n(b),_=t(11),g=t.n(_),O=function(e){var a=e.isVisible,t=e.children,n=p()(g.a.alert,Object(m.a)({},g.a["alert--isVisible"],a));return r.a.createElement("aside",{className:n},a?r.a.createElement("div",{className:g.a.alert__container},t):null)};O.defaultProps={isVisible:!1};var j=t(23),E=t.n(j),k=function(e){var a=e.onClick,t=e.children;return r.a.createElement("button",{onClick:a,className:E.a.button},t)},h=t(12),v=t.n(h),y=function(e){var a=e.card,t=e.onClick,n=(e.background,e.children,p()(v.a.card,Object(m.a)({},v.a["card--face-up"],a.isFaceUp)));return r.a.createElement("article",{className:n,onClick:t},r.a.createElement("span",{className:v.a.card__face}," ",a.face," ")," ")};y.defaultProps={isFaceUp:!1};var w=function(e){return e.concat(e)},B=function(e){for(var a=e.length,t=0,n=0;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},C={simon:{name:"Simon",theme:[{pageBackground:"linear-gradient(to bottom, orange, purple)"},{cardBackground:"orange"},{alertBackground:"linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)"},{alertName:"#fff"},{buttonColor:"orange"}]},nolan:{name:"Nolan",theme:[{pageBackground:"linear-gradient(to bottom, #f00000, #000)"},{cardBackground:"linear-gradient(147deg, #923cb5 0%, #000000 74%)"},{alertBackground:"linear-gradient(124deg, darkred, purple, blue, black)"},{alertName:"#fff"},{buttonColor:"darkred"}]},connor:{name:"Connor",theme:[{pageBackground:"linear-gradient(to bottom, #0575e6, #182848)"},{cardBackground:"linear-gradient(to bottom, #f00000, #dc281e)"},{alertBackground:"linear-gradient(124deg, blue, darkblue, black, red, black,darkblue, black, crimson)"},{alertName:"#fff"},{alertText:"#fff"},{buttonColor:"red"}]}},P=[{name:"popo",face:"\ud83d\ude93"},{name:"taxi",face:"\ud83d\ude95"},{name:"racecar",face:"\ud83c\udfce"},{name:"tractor",face:"\ud83d\ude9c"},{name:"firetruck",face:"\ud83d\ude92"},{name:"danger",face:"\u26a0\ufe0f"},{name:"comuter",face:"\ud83d\ude97"},{name:"moto",face:"\ud83c\udfcd"},{name:"train",face:"\ud83d\ude83"},{name:"bus",face:"\ud83d\ude8c"},{name:"rocket",face:"\ud83d\ude80"},{name:"train",face:"\ud83d\ude82"},{name:"airplane",face:"\u2708\ufe0f"},{name:"warning",face:"\u2622\ufe0f"},{name:"construction",face:"\ud83d\udea7"},{name:"copter",face:"\ud83d\ude81"},{name:"vespa",face:"\ud83d\udef5"}],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return B(w(B(P).slice(0,e)))},S=t(16),x=t.n(S);function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(Object(t),!0).forEach((function(a){Object(m.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var A=function(e){var a=e.player,t=Object(n.useState)(N(6)),c=Object(f.a)(t,2),o=c[0],l=c[1],i=Object(n.useState)([]),u=Object(f.a)(i,2),d=u[0],m=u[1],b=Object(n.useState)(0),p=Object(f.a)(b,2),_=p[0],g=p[1],j=Object(n.useState)(0),E=Object(f.a)(j,2),h=E[0],v=E[1],w=Object(n.useState)(0),B=Object(f.a)(w,2),C=B[0],P=B[1],S=Object(n.useState)([]),D=Object(f.a)(S,2),A=D[0],F=D[1],U=Object(n.useState)(!1),I=Object(f.a)(U,2),M=I[0],T=I[1],G=Object(n.useState)(!1),J=Object(f.a)(G,2),Y=J[0],q=J[1],H=o.length/2;a&&a.theme.forEach((function(e){var a=Object.keys(e),t=Object.values(e);document.documentElement.style.setProperty("--".concat(a),t)}));var L=function(e,a){if(!A.includes(e)&&!M){var t=Object(s.a)(A),n=Object(s.a)(d);t.push(e),F(t),void 0===d[_]?n[_]=[e]:(T(!0),n[_][1]=e,g(_+1),r=n[_],o[r[0]].name===o[r[1]].name?(H===h+1&&(P(C+1),q(!0),T(!1)),v(h+1),T(!1)):setTimeout((function(){var e=Object(s.a)(A);r.forEach((function(a){var t=e.indexOf(a);t>-1&&e.splice(t,1)})),F(e),T(!1)}),1e3)),m(n)}var r};return r.a.createElement("div",{className:x.a.board},r.a.createElement(O,{isVisible:Y},r.a.createElement("h1",null," ",a?"Go ".concat(a.name,"!"):"winner!"," ")," ",r.a.createElement("p",null,"You won ",r.a.createElement("strong",null," ",C," ")," ",1===C?"time":"times","!")," ",r.a.createElement("p",null,"This time it took you ",r.a.createElement("strong",null," ",_," ")," tries to find"," ",r.a.createElement("strong",null," ",h," ")," pairs"," ")," ",r.a.createElement(k,{onClick:function(){l(N(6)),m([]),g(0),v(0),F([]),q(!1),T(!1)}}," Play again! ")," ")," ",Y?null:r.a.createElement("div",{className:x.a["board__cards--container"]}," ",o.map((function(e,a){return r.a.createElement(y,{card:V({},e,{isFaceUp:A.includes(a)}),key:a,isFaceUp:A.includes(a),onClick:function(){L(a)}})}))," ")," ")},F=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(A,null)),r.a.createElement(d.a,{path:"/Simon"},r.a.createElement(A,{player:C.simon})),r.a.createElement(d.a,{path:"/Nolan"},r.a.createElement(A,{player:C.nolan})),r.a.createElement(d.a,{path:"/Connor"},r.a.createElement(A,{player:C.connor})))};o.a.render(r.a.createElement((function(){return r.a.createElement(l.a,null,r.a.createElement("main",{className:u.a.app},r.a.createElement(F,null)))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3e7b1980.chunk.js.map