(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/vader.98a8b2f6.svg"},function(e,t,a){e.exports=a.p+"static/media/death-star.2e4838bd.svg"},function(e,t,a){e.exports=a.p+"static/media/tie-fighter.6027a8e6.svg"},function(e,t,a){e.exports=a.p+"static/media/empire.88b9c1f5.png"},function(e,t,a){e.exports=a.p+"static/media/bb8-body.060443cf.svg"},function(e,t,a){e.exports=a.p+"static/media/bb8-head.73124d26.svg"},function(e,t,a){e.exports=a.p+"static/media/rebel-alliance.e9f04552.png"},,,,function(e,t,a){e.exports=a(76)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){var n={"./active-star.svg":61,"./bb8-body.svg":25,"./bb8-head.svg":26,"./death-star.svg":22,"./empire.png":24,"./inactive-star.svg":62,"./rebel-alliance.png":27,"./tie-fighter.svg":23,"./vader.svg":21};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=60},function(e,t,a){e.exports=a.p+"static/media/active-star.4407be4a.svg"},function(e,t,a){e.exports=a.p+"static/media/inactive-star.eb32f0e0.svg"},function(e,t,a){e.exports=a.p+"static/media/character-bg.b5539d88.png"},,,function(e,t,a){var n={"./planet-1.png":67,"./planet-2.png":68,"./planet-3.png":69,"./planet-4.png":70,"./planet-5.png":71,"./planet-6.png":72,"./planet-7.png":73};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=66},function(e,t,a){e.exports=a.p+"static/media/planet-1.8c123015.png"},function(e,t,a){e.exports=a.p+"static/media/planet-2.8efd3468.png"},function(e,t,a){e.exports=a.p+"static/media/planet-3.04f4528e.png"},function(e,t,a){e.exports=a.p+"static/media/planet-4.63fbdc29.png"},function(e,t,a){e.exports=a.p+"static/media/planet-5.6c34ccb8.png"},function(e,t,a){e.exports=a.p+"static/media/planet-6.9cf527df.png"},function(e,t,a){e.exports=a.p+"static/media/planet-7.1807eb95.png"},function(e,t,a){e.exports=a.p+"static/media/vehicle-bg.5229d72b.png"},function(e,t,a){e.exports=a.p+"static/media/star-wars-title.17105726.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=(a(37),a(11)),s=a(8),l=a(3),u=a(4),m=a(6),p=a(5),d=a(7),v=a(30),f=a.n(v),h=function(e){var t=e.setActive,n=e.activeBtn;return r.a.createElement("button",{type:"button",className:"".concat("people"===n?"active category-btn":"category-btn"),name:"people",onClick:t},r.a.createElement("img",{name:"people",alt:"card background",src:a(21)}),"People")},g=function(e){var t=e.setActive,n=e.activeBtn;return r.a.createElement("button",{type:"button",className:"".concat("planets"===n?"active category-btn":"category-btn"),name:"planets",onClick:t},r.a.createElement("img",{name:"planets",alt:"card background",src:a(22)}),"Planets")},b=function(e){var t=e.setActive,n=e.activeBtn;return r.a.createElement("button",{type:"button",className:"".concat("vehicles"===n?"active category-btn":"category-btn"),name:"vehicles",onClick:t},r.a.createElement("img",{name:"vehicles",alt:"card background",src:a(23)}),"Vehicles")},E=function(e){var t=e.activeBtn,a=e.setActive,n=e.favoriteCount;return r.a.createElement("button",{type:"button",className:"".concat("favorites"===t?"active view-fav-btn":"view-fav-btn"),onClick:a,name:"favorites",disabled:!n>0},!n>0?"No favorites":"Favorites",n>0&&r.a.createElement("span",{id:"favorites",className:"fav-total"},n))},C=function(e){var t=e.setActive,a=e.activeBtn;return r.a.createElement("button",{type:"button",className:"home"===a?"active home-btn":"home-btn",name:"home",onClick:t},"Home")},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).saveCard=function(t){var a=t.concat([e.props.card]);localStorage.setItem("favorites",JSON.stringify(a)),e.props.updateFavoriteCount()},e.deleteCard=function(t){var a=t.filter(function(t){return t.url!==e.props.card.url});localStorage.setItem("favorites",JSON.stringify(a)),e.props.updateFavoriteCount()},e.toggleFavorite=function(){var t=JSON.parse(localStorage.getItem("favorites"))||[];e.setState({active:!e.state.active},function(){e.state.active?e.saveCard(t):e.deleteCard(t)})},e.state={active:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;(JSON.parse(localStorage.getItem("favorites"))||[]).forEach(function(t){return t.name===e.props.card.name&&e.setState({active:!0})})}},{key:"render",value:function(){return r.a.createElement("button",{className:this.state.active?"active-fav favorite-card-btn":"favorite-card-btn",name:"favorite-card",title:"Add to Favorites",type:"button",onClick:this.toggleFavorite},r.a.createElement("img",{alt:"card background",src:a(24)}),r.a.createElement("img",{alt:"card background",src:a(60)("./".concat(this.state.active?"active-star.svg":"inactive-star.svg"))}),r.a.createElement("img",{alt:"card background",src:a(27)}))}}]),t}(n.Component),N=function(e){var t=e.showMore,a=e.showLess,n=e.currentPage;return r.a.createElement("div",{className:"more-less-btns"},r.a.createElement("button",{name:"show-more",onClick:t},"Show More"),n>1&&r.a.createElement("button",{name:"show-less",onClick:a},"Show Less"))},w=function(e){var t=e.card,n=e.updateFavoriteCount;return r.a.createElement("article",{key:t.id,className:"character-card"},r.a.createElement(y,{card:t,updateFavoriteCount:n}),r.a.createElement("h3",null,t.name),r.a.createElement("h4",null," Species: "),r.a.createElement("p",null,t.speciesName),r.a.createElement("div",{className:"home-planet"},r.a.createElement("h4",null,"Home Planet:"),r.a.createElement("p",{className:"world-name"},t.worldName),r.a.createElement("p",null,t.worldPopulation)),r.a.createElement("img",{className:"bg-img",alt:"card background",src:a(63)}))},k=a(28),O=function(e){var t=e.card,n=e.updateFavoriteCount;return r.a.createElement("article",{key:t.id,className:"planet-card"},r.a.createElement(y,{updateFavoriteCount:n,card:t}),r.a.createElement("h3",null,t.name),r.a.createElement("div",{className:"terrain-container"},r.a.createElement("h4",null,"Terrain:"),t.terrain.split(",").map(function(e){return r.a.createElement("p",{key:k()},e)})),r.a.createElement("h4",null,"Climate:"),r.a.createElement("p",null,t.climate),r.a.createElement("h4",null,"Population"),r.a.createElement("p",null,t.population),r.a.createElement("div",{className:"residents"},r.a.createElement("h4",null,"Residents:"),t.residentNames.length?t.residentNames.map(function(e){return r.a.createElement("p",{key:e.id},e.name)}):r.a.createElement("p",null,"None")),r.a.createElement("img",{className:"bg-img",alt:"card background",src:a(66)("./planet-".concat(t.imgNum,".png"))}))},S=function(e){var t=e.card,n=e.updateFavoriteCount;return r.a.createElement("article",{className:"vehicle-card"},r.a.createElement(y,{card:t,updateFavoriteCount:n}),r.a.createElement("h3",null,t.name),r.a.createElement("div",{className:"vehicle-specs"},r.a.createElement("h4",null,"Model:"),r.a.createElement("p",null,t.model),r.a.createElement("h4",null,"Class:"),r.a.createElement("p",null,t.vehicle_class),r.a.createElement("h4",null,"Crew:"),r.a.createElement("p",null,t.crew),r.a.createElement("h4",null,"Passenger Capacity:"),r.a.createElement("p",null,t.passengers)),r.a.createElement("img",{className:"bg-img",alt:"card background",src:a(74)}))},P=function(){return r.a.createElement("div",{className:"bb8-container"},r.a.createElement("img",{className:"head",alt:"bb8",src:a(26)}),r.a.createElement("img",{className:"body",alt:"bb8",src:a(25)}),r.a.createElement("h4",null,"Loading..."))},j=function(e){var t=e.movie,a=e.loading,n=e.category,c=e.cards,o=e.updateFavoriteCount,i=e.showMore,s=e.showLess,l=e.currentPage,u=t.opening_crawl,m=t.title,p=t.release_date,d=t.episode_id,v=r.a.createElement(f.a,{title:"Episode ".concat(["I","II","III","IV","V","VI","VII","VII"][d-1]),subTitle:m,text:u,releaseYear:p}),h=c.map(function(e){var t;switch(!0){case"character"===e.type:t=r.a.createElement(w,{card:e,key:e.id,updateFavoriteCount:o});break;case"planet"===e.type:t=r.a.createElement(O,{card:e,key:e.id,updateFavoriteCount:o});break;default:t=r.a.createElement(S,{card:e,key:e.id,updateFavoriteCount:o})}return t}),g=r.a.createElement(N,{showMore:i,showLess:s,currentPage:l}),b=c.length?r.a.createElement("section",{className:"card-container"},h,"favorites"!==n&&g):r.a.createElement("div",{className:"bb8-container"},r.a.createElement(P,null));return"home"===n?r.a.createElement("div",{className:"crawl-container"},a?r.a.createElement(P,null):v):b},F=function(e){var t=e.category;return r.a.createElement("header",null,r.a.createElement("img",{src:a(75),alt:"Star Wars Title"}),"home"===t?void 0:r.a.createElement("h2",null,t.toUpperCase()))},x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).setActiveBtn=function(t){var a=t.target.name?t.target.name:t.target.id;e.setState({activeBtn:a}),e.props.changeCategory(a)},e.state={activeBtn:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.activeBtn;return r.a.createElement("section",{className:"categories-btn-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement(g,{setActive:this.setActiveBtn,activeBtn:e}),r.a.createElement(h,{setActive:this.setActiveBtn,activeBtn:e}),r.a.createElement(b,{setActive:this.setActiveBtn,activeBtn:e})),r.a.createElement(C,{setActive:this.setActiveBtn,activeBtn:this.props.currCategory}),r.a.createElement(E,{setActive:this.setActiveBtn,activeBtn:e,favoriteCount:this.props.favoriteCount}))}}]),t}(n.Component),B=function(e){return fetch("https://swapi.co/api/".concat(e)).then(function(e){if(e.ok)return e.json();throw Error("Error fetching category items")}).then(function(e){return e.results})},A=function(e){return fetch(e).then(function(e){if(e.ok)return e.json();throw Error("Error fetching item")})},I=a(28),M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).updateFavoriteCount=function(){var t=JSON.parse(localStorage.getItem("favorites"))||[];e.setState({favoriteCount:t.length})},e.renderFavorites=function(){var t=JSON.parse(localStorage.getItem("favorites"))||[];t.length&&e.setState({renderCards:t})},e.changeCategory=function(t){e.setState({categorySelected:t,renderCards:[],currentPage:1}),"people"===t&&e.fetchPeople(),"planets"===t&&e.fetchPlanets(),"vehicles"===t&&e.fetchVehicles(),"favorites"===t&&e.renderFavorites()},e.fetchPeople=function(t){return B("".concat(t?"people/?page=".concat(e.state.currentPage):"people")).then(function(t){return t.map(function(t){var a=A(t.homeworld).then(function(e){return{worldName:e.name,worldPopulation:e.population}}),n=A.apply(void 0,Object(s.a)(t.species)).then(function(e){return{speciesName:e.name}});return Promise.all([a,n]).then(function(a){var n=Object(i.a)({},a[0],a[1],t,{id:I(),type:"character"}),r=[].concat(Object(s.a)(e.state.renderCards),[n]);return e.setState({renderCards:r}),r})})}).catch(function(e){return console.log(e)})},e.fetchPlanets=function(t){return B("".concat(t?"planets/?page=".concat(e.state.currentPage):"planets")).then(function(t){return t.map(function(t){var a=t.residents.map(function(e){return A(e).then(function(e){return{name:e.name,id:I()}})});return Promise.all(a).then(function(a){var n=Object(i.a)({residentNames:a},t,{id:I(),type:"planet",imgNum:Math.floor(7*Math.random())+1}),r=[].concat(Object(s.a)(e.state.renderCards),[n]);return e.setState({renderCards:r}),r})})}).catch(function(e){return console.log(e)})},e.fetchVehicles=function(t){return B("".concat(t?"vehicles/?page=".concat(e.state.currentPage):"vehicles")).then(function(t){return t.map(function(t){var a=Object(i.a)({},t,{id:I(),type:"vehicle"}),n=[].concat(Object(s.a)(e.state.renderCards),[a]);return e.setState({renderCards:n}),n})}).catch(function(e){return console.log(e)})},e.showMore=function(){e.setState({currentPage:e.state.currentPage+1},function(){var t=e.state.categorySelected;"people"===t&&e.fetchPeople(!0),"planets"===t&&e.fetchPlanets(!0),"vehicles"===t&&e.fetchVehicles(!0)})},e.showLess=function(){e.setState({currentPage:e.state.currentPage-1},function(){var t=Object(s.a)(e.state.renderCards).slice(0,e.state.renderCards.length-10);e.setState({renderCards:t})})},e.state={selectedMovie:{},loading:!1,categorySelected:"home",renderCards:[],favoriteCount:0,currentPage:1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=Math.floor(7*Math.random())+1;this.setState({loading:!0}),this.updateFavoriteCount(),(e=a,fetch("https://swapi.co/api/films/".concat(e)).then(function(e){if(e.ok)return e.json();throw Error("Error fetching movies")})).then(function(e){return t.setState({selectedMovie:e,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,{category:this.state.categorySelected}),r.a.createElement(j,{loading:this.state.loading,movie:this.state.selectedMovie,cards:this.state.renderCards,updateFavoriteCount:this.updateFavoriteCount,category:this.state.categorySelected,showMore:this.showMore,showLess:this.showLess,currentPage:this.state.currentPage}),r.a.createElement(x,{currCategory:this.state.categorySelected,changeCategory:this.changeCategory,favoriteCount:this.state.favoriteCount,updateFavoriteCount:this.props.updateFavoriteCount}))}}]),t}(n.Component);o.a.render(r.a.createElement(M,null),document.getElementById("root"))}]),[[31,1,2]]]);
//# sourceMappingURL=main.6d1650d2.chunk.js.map