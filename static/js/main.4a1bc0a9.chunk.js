(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(24),s=a.n(i),l=(a(33),a(17)),r=a(27),o=a(12),m=a(13),u=a(15),d=a(14),v=a(16),h=a(6),E=(a(34),a(7)),g=(a(35),a(10)),f=a(11),N=function(e){var t=e.imgUrl,a=e.center,n=e.date_created,i=e.title,s=e.description,l=e.isFav,r=e.add,o=e.edit,m=e.remove,u=e.favorite;return c.a.createElement("li",{className:"image-item"},c.a.createElement("div",{className:"image-thumbnail"},c.a.createElement("div",{className:"main-image"},c.a.createElement("div",{className:"image-holder",style:{backgroundImage:'url("'+t+'")'}})),c.a.createElement("div",{className:"image-shadow"})),c.a.createElement("div",{className:"image-context"},c.a.createElement("div",{className:"row space-between"},c.a.createElement("p",{className:"author"},a),c.a.createElement("p",{className:"date-created"},n?n.substr(0,10):null)),c.a.createElement("div",{className:"context-detail"},c.a.createElement("h3",{className:"title"},i),c.a.createElement("p",{className:"description"},s)),c.a.createElement("ul",{className:"row image-cta"},r?c.a.createElement("li",null,c.a.createElement("button",{className:"cta",onClick:r},c.a.createElement(g.a,{icon:f.c,className:"inactive",size:"lg"}))):null,u?c.a.createElement("li",null,c.a.createElement("button",{className:"cta",onClick:u},c.a.createElement(g.a,{icon:f.b,className:l?"active-heart":"inactive",size:"lg"}))):null,o?c.a.createElement("li",null,c.a.createElement("button",{className:"cta",onClick:o},c.a.createElement(g.a,{icon:f.a,className:"inactive",size:"lg"}))):null,m?c.a.createElement("li",null,c.a.createElement("button",{className:"cta",onClick:m},c.a.createElement(g.a,{icon:f.d,className:"inactive",size:"lg"}))):null)))},p=(a(41),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).searchTimeout=null,e.search=function(t){var a=t.target.value;clearTimeout(e.searchTimeout),e.setState({isSearching:!0}),e.searchTimeout=setTimeout(function(){e.setState({searchTerm:a},function(){fetch("https://images-api.nasa.gov/search?q=".concat(encodeURIComponent(e.state.searchTerm))).then(function(e){return e.json()}).then(function(t){e.setState({searchResult:t.collection?t.collection.items:[],isSearching:!1})})})},300)},e.state={searchTerm:"",searchResult:[],isSearching:!1},e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.searchResult,n=t.isSearching;return c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"section section-page-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row space-between page-navigation"},c.a.createElement(E.b,{to:"/",className:"nav-item back"},"Back to Collection")),c.a.createElement("h2",{className:"page-title style-2"},"Search From Nasa"))),c.a.createElement("div",{className:"section section-search-form"},c.a.createElement("div",{className:"container"},c.a.createElement("input",{className:"custom-input input-block input-large",id:"searchForm",placeholder:"Type something to search...",onChange:this.search}))),c.a.createElement("div",{className:"section section-search-result"},c.a.createElement("div",{className:"container"},n?c.a.createElement("div",{className:"spinner"},"Searching..."):c.a.createElement("ul",{className:"row align-top image-list"},a.map(function(t,a){var n=t.data[0],i=n.date_created,s=n.title,l=n.center,r=n.description,o=t.links?t.links[0].href:"";return c.a.createElement(N,{key:"nasa-collection-item"+a,date_created:i,title:s,center:l,description:r,imgUrl:o,add:function(){return e.props.addItem(t)}})})))))}}]),t}(c.a.Component)),b=function(e){var t=e.collection,a=e.removeItem,n=e.favItem;return c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"section section-page-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row space-between"},c.a.createElement("h3",{className:"page-title"},"NASA Collections"),c.a.createElement(E.b,{to:"/search",className:"cta add-item"},"Add New Item")))),c.a.createElement("div",{className:"section section-image-list"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"row align-top image-list"},t.map(function(e,t){console.log(e);var i=e.data[0],s=i.date_created,l=i.title,r=i.center,o=i.description,m=e.links[0].href,u=e.favorite;return c.a.createElement(N,{key:"nasa-collection-item"+t,date_created:s,title:l,center:r,description:o,imgUrl:m,isFav:u,favorite:function(){n(t)},remove:function(){a(t)}})})))))},w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).addItemIntoCollection=function(t){var a=Object(r.a)({},t,{favorite:!1}),n=Object(l.a)(e.state.list);n=n.concat(a),e.setState({list:n},function(){e.saveToStorage()})},e.removeItem=function(t){if(-1!==t){var a=Object(l.a)(e.state.list);a.splice(t,1),e.setState({list:a},function(){e.saveToStorage()})}},e.favItem=function(t){if(-1!==t){var a=Object(l.a)(e.state.list);a[t].favorite=!a[t].favorite,e.setState({list:a},function(){e.saveToStorage()})}},e.saveToStorage=function(){localStorage.setItem("nasaCollection",JSON.stringify(e.state))},e.state={list:[]},e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("nasaCollection");e&&this.setState(JSON.parse(e))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,{path:"/search",render:function(t){return c.a.createElement(p,Object.assign({},t,{addItem:e.addItemIntoCollection}))}}),c.a.createElement(h.a,{path:"/",exact:!0,render:function(t){return c.a.createElement(b,Object.assign({},t,{collection:e.state.list,removeItem:e.removeItem,favItem:e.favItem}))}}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E.a,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.4a1bc0a9.chunk.js.map