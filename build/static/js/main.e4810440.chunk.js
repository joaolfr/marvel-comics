(this["webpackJsonpmarvel-comics"]=this["webpackJsonpmarvel-comics"]||[]).push([[0],{3:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),u=n.n(c),i=n(10),o=n(6),s=n(13),d=n.n(s),l=n(16),f=n(7);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var b=Object(f.b)("counter/fetchCount",function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(f.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(b.pending,(function(e){e.status="loading"})).addCase(b.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),m=h.actions,p=(m.increment,m.decrement,m.incrementByAmount,h.reducer),j=(n(3),n(1));var x,y=n(17),v=n(9),F=v.b.div(x||(x=Object(y.a)(["\n  height: 100%;\n  background: ",";\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),O=function(){return Object(j.jsx)(F,{children:Object(j.jsx)("span",{style:{color:"#fff"},children:"teste"})})},g=(n(34),{colors:{primary:"#031138",primary_dark:"#1E1A1A",primary_light:"#2E2C2C",primary_sub:"#D2D1D1",secondary:"#1d1d1d",secondary_dark:"#459A77",secondary_light:"#A2D7C1",secondary_sub:"#D0F5E6",ligth:"#FFFFFF",ligth_dark:"#EFEAEE",ligth_light:"#FFFBFE",ligth_sub:"#EAE8E8",auxiliary:"#f2f2f2",auxiliary_dark:"#3B6F86",auxiliary_light:"#66A8C5",auxiliary_sub:"#B6DBE1",text:"#000000",placeholder:"#efeaee",white:"#FFF"}});var C=function(){var e=Object(r.useState)(g),t=Object(i.a)(e,2),n=t[0];return t[1],Object(j.jsx)(v.a,{theme:n,children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{})})})},E=Object(f.a)({reducer:{counter:p}});u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{store:E,children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e4810440.chunk.js.map