(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],[,,,,,,,,,function(t,a,e){t.exports=e(17)},,,,,function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){"use strict";e.r(a);var n=e(0),r=e.n(n),i=e(3),o=e.n(i),s=(e(14),e(1)),l=e(4),c=e(5),u=e(7),m=e(6),d=e(8);e(15);var h=function(t){function a(t){var e;return Object(l.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this,t))).settings={maxValue:900,minValue:15,arraySize:200,barColor:"green",activeBarColor:"red",animationSpeed:.05},e.animation=[],e.resetArray=function(){for(;0!==e.state.timeouts.length;)clearTimeout(e.state.timeouts[0]),e.state.timeouts.shift();e.resetBars(),e.setState({array:e.randomizeArray(),isSorted:!1})},e.resetBars=function(){for(var t=document.getElementsByClassName("array-bar"),a=0;a<t.length;a++)t[a].style.backgroundColor=e.settings.barColor},e.runAlgorithm=function(t){if(0===e.state.timeouts.length){var a=Object(s.a)(e.state.array);e.animation=t(a),e.runAnimation(),e.setState({isSorted:!0})}},e.state={array:e.randomizeArray(),timeouts:[],isSorted:!1},e}return Object(d.a)(a,t),Object(c.a)(a,[{key:"randomizeArray",value:function(){for(var t=[],a=0;a<this.settings.arraySize;a++)t.push(Math.floor(Math.random()*(this.settings.maxValue-this.settings.minValue))+this.settings.minValue);return t}},{key:"runAnimation",value:function(){for(var t=this,a=-1,e=-1,n=document.getElementsByClassName("array-bar"),r=function(r){t.state.timeouts.push(setTimeout((function(){if(a>-1&&(n[a].style.backgroundColor=t.settings.barColor),e>-1&&(n[e].style.backgroundColor=t.settings.barColor),n[t.animation[r].bar1].style.backgroundColor=t.settings.activeBarColor,n[t.animation[r].bar2].style.backgroundColor=t.settings.activeBarColor,1===t.animation[r].swap){var i=t.state.array,o=i[t.animation[r].bar1];i[t.animation[r].bar1]=i[t.animation[r].bar2],i[t.animation[r].bar2]=o,t.setState({array:i})}a=t.animation[r].bar1,e=t.animation[r].bar2,t.state.timeouts.shift(),t.state.timeouts.length<=0&&t.setState({isSorted:!0})}),r*t.settings.animationSpeed))},i=0;i<this.animation.length;i++)r(i)}},{key:"render",value:function(){var t=this,a=this.state.array,e=this.settings.barColor,n=Object(s.a)(this.state.array);return r.a.createElement("div",null,r.a.createElement("div",{className:"array-container"},a.map((function(t,a){return r.a.createElement("div",{className:"array-bar",key:a,id:a.toString(),style:{backgroundColor:"".concat(e),height:"".concat(t,"px")}})}))),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"dropup"},r.a.createElement("button",{className:"dropbtn"},"Algorithms"),r.a.createElement("div",{className:"dropup-content"},r.a.createElement("button",{disabled:this.state.isSorted,className:"buttons",onClick:function(){0===t.state.timeouts.length&&(t.animation=function(t){var a,e=[];do{a=!1;for(var n=0;n<t.length-1;n++){var r={bar1:n,bar2:n+1,swap:0};if(t[n]>t[n+1]){r.swap=1;var i=t[n];t[n]=t[n+1],t[n+1]=i,a=!0}e.push(r)}}while(a);return e}(n),t.runAnimation(),t.setState({isSorted:!0}))}},"Bubble Sort"))," ")," ",r.a.createElement("button",{id:"resetBtn",onClick:this.resetArray},"Reset ")))}}]),a}(r.a.Component),b=(e(16),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null," "))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a39b673d.chunk.js.map