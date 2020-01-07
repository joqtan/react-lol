(this["webpackJsonppersonal-project-react"]=this["webpackJsonppersonal-project-react"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(10),o=a(11),i=a(2),m=a(3),u=a(5),h=a(4),p=a(6),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"flex items-center justify-between w-full px-6 py-4 bg-gray-900 "},r.a.createElement("div",{className:"mr-6 text-white"},r.a.createElement(s.b,{to:"/",className:"navbar-brand hover:text-gray-500"},r.a.createElement("span",{className:"font-semibold text-2xl trackin-tight"},"LeagueDex"))),r.a.createElement("div",{className:"block lg:hidden"},r.a.createElement("button",{className:"flex items-center justify-between px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"text-xl mr-6"},r.a.createElement(s.b,{className:"text-white mr-4 hover:text-gray-500",to:""},"Home"),r.a.createElement(s.b,{className:"text-white mr-4 hover:text-gray-500",to:"/champs"},"Champs"),r.a.createElement(s.b,{className:"text-white mr-4 hover:text-gray-500",to:"items"},"Items"))))}}]),t}(n.Component);function f(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),e.children)}var g=a(13),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-1"},r.a.createElement("div",{className:"flex items-center p-2 h-20 w-48 shadow-lg bg-gray-700 rounded-lg "},r.a.createElement("div",{className:"w-3/12"},r.a.createElement("div",{className:"w-12"},r.a.createElement("img",{className:"rounded-full",src:"https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/"+this.props.champ.id+".png",alt:""}))),r.a.createElement("div",{className:"ml-4 w-9/12"},r.a.createElement("h2",{className:"text-sm text-white font-semibold capitalize"},this.props.champ.name),r.a.createElement("p",{className:"text-xs text-white font-light capitalize"},this.props.champ.title)))))}}]),t}(n.Component);function b(e){var t=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(e),s=Object(g.a)(l,2),o=s[0],i=s[1];return Object(n.useMemo)((function(){var t=e.filter((function(e){return"".concat(e.name).toLowerCase().includes(r.toLowerCase())}));i(t)}),[e,r]),{query:r,setQuery:c,filteredChamps:o}}(e.info),a=t.query,c=t.setQuery,l=t.filteredChamps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container flex flex-wrap justify-center"},r.a.createElement("div",{className:"container flex flex-wrap justify-center items-center py-4"},r.a.createElement("label",{className:"text-sm text-white mr-4"},"Search by name"),r.a.createElement("div",{className:"bg-gray-700 rounded"},r.a.createElement("input",{className:"bg-gray-700 text-white text-md outline-none rounded appearance-none p-4 h-6",type:"text",value:a,onChange:function(e){c(e.target.value)}}))),l.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(s.b,{to:"/champs/".concat(e.id)},r.a.createElement(v,{champ:e})))}))))}var E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={data:[],region:"en_US",patch:"9.24.2"},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ddragon.leagueoflegends.com/cdn/".concat(this.state.patch,"/data/").concat(this.state.region,"/champion.json")).then((function(e){return e.json()})).then((function(t){var a=t.data,n=[];for(var r in a)n.push(a[r]);e.setState({data:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container flex flex-wrap justify-center"},r.a.createElement(b,{info:this.state.data})))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"flex items-center p-2 w-40 shadow-2xl bg-gray-700 rounded-lg "},r.a.createElement("div",{className:"w-3/12"},r.a.createElement("div",{className:"w-10"},r.a.createElement("img",{className:"rounded-full",src:"https://ddragon.leagueoflegends.com/cdn/9.24.2/img/item/"+this.props.item.image.full,alt:""}))),r.a.createElement("div",{className:"ml-4 w-9/12"},r.a.createElement("h2",{className:"text-xs text-white"},this.props.item.name)))))}}]),t}(n.Component);function x(e){var t=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(e),s=Object(g.a)(l,2),o=s[0],i=s[1];return Object(n.useMemo)((function(){var t=e.filter((function(e){return"".concat(e.name).toLowerCase().includes(r.toLowerCase())}));i(t)}),[e,r]),{query:r,setQuery:c,filteredItems:o}}(e.info),a=t.query,c=t.setQuery,l=t.filteredItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container flex flex-wrap justify-center"},r.a.createElement("div",{className:"container flex flex-wrap justify-center items-center py-4"},r.a.createElement("label",{className:"text-sm text-white mr-4"},"Search by name"),r.a.createElement("div",{className:"bg-gray-700 rounded"},r.a.createElement("input",{className:"bg-gray-700 text-white text-md outline-none rounded appearance-none p-4 h-6",type:"text",value:a,onChange:function(e){c(e.target.value)}}))),l.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.image.full},r.a.createElement(j,{item:e}))}))))}var y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={data:[],region:"en_US",patch:"9.24.2"},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ddragon.leagueoflegends.com/cdn/".concat(this.state.patch,"/data/").concat(this.state.region,"/item.json")).then((function(e){return e.json()})).then((function(t){var a=t.data,n=[];for(var r in a)n.push(a[r]);e.setState({data:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{info:this.state.data}))}}]),t}(n.Component),w=a(23),O=a.n(w),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0,region:"en_US",patch:"9.24.2",champ:a.props.match.params.champ},a.fetchData=function(){return O.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0,error:null});try{fetch("https://ddragon.leagueoflegends.com/cdn/".concat(a.state.patch,"/data/").concat(a.state.region,"/champion/").concat(a.state.champ,".json")).then((function(e){return e.json()})).then((function(e){var t=e.data;console.log(t),a.setState({loading:!1,data:t})}))}catch(t){}case 2:case"end":return e.stop()}}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,"/nada/")}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0,region:"en_US",patch:"9.24.2"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"/nada/")}}]),t}(n.Component);a(35);var C=document.getElementById("root");l.a.render(r.a.createElement((function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"min-h-screen relative bg-gray-800"},r.a.createElement(f,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:E}),r.a.createElement(o.a,{exact:!0,path:"/champs",component:E}),r.a.createElement(o.a,{exact:!0,path:"/champs/:champ",component:N}),r.a.createElement(o.a,{exact:!0,path:"/items",component:y}),r.a.createElement(o.a,{exact:!0,path:"/item/:item",component:k})))))}),null),C)}},[[24,1,2]]]);
//# sourceMappingURL=main.202bd52f.chunk.js.map