(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(26)},26:function(e,a,t){"use strict";t.r(a);t(19);var n=t(1),c=t.n(n),s=t(10),d=t.n(s),r=t(11),o=t(12),l=t(16),i=t(13),m=t(17),u=t(6),h=t(27),p=function(e){var a=e.display;return c.a.createElement(h.a,{id:"display"},a)},y=t(28),f=t(29),k=t(30),w=t(35),E=function(e){var a=e.id,t=e.src,n=e.desc,s=e.click;return c.a.createElement(y.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement(f.a,null,a),c.a.createElement(k.a,null,n),c.a.createElement(w.a,{onClick:s,className:"drum-pad",id:n},a,c.a.createElement("audio",{className:"clip",id:a,src:t})))},b=t(31),v=t(32),C=t(33),O=t(34),j=[{id:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",desc:"heater-1"},{id:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",desc:"heater-2"},{id:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",desc:"heater-3"},{id:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",desc:"chord-1"},{id:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",desc:"chord-2"},{id:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",desc:"chord-3"},{id:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",desc:"dsc-oh"},{id:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",desc:"give-us-a-light"},{id:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",desc:"side-stick"}],z=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).state={display:"Press a key to play a sound !"},t.audio=null,t.timeout=null,t.handleKeyDown=t.handleKeyDown.bind(Object(u.a)(Object(u.a)(t))),t.handleClick=t.handleClick.bind(Object(u.a)(Object(u.a)(t))),t.handlePlay=t.handlePlay.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){this.handlePlay(e.key)}},{key:"handleClick",value:function(e){this.handlePlay(e.target.innerText)}},{key:"handlePlay",value:function(e){var a=this;clearTimeout(this.timeout);var t=j.find(function(a){return a.id===e});t&&(document.getElementById(e).play(),this.setState({display:t.id}),this.timeout=setTimeout(function(){a.setState({display:"Press a key to play a new sound !"})},1e3))}},{key:"render",value:function(){var e=this.handleClick,a=this.state.display,t=j.map(function(a){return c.a.createElement(E,{id:a.id,key:a.id,src:a.src,desc:a.desc,click:e})});return c.a.createElement(b.a,{id:"drum-machine"},c.a.createElement(v.a,null,c.a.createElement(C.a,null,c.a.createElement(p,{display:a}))),c.a.createElement(v.a,null,c.a.createElement(C.a,null,c.a.createElement(O.a,null,t))))}}]),a}(n.Component);d.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b8681d26.chunk.js.map