(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/iStock.c1b1d32a.png"},function(e,t,a){e.exports=a.p+"static/media/memory_clicker.1564e8dd.png"},function(e,t,a){e.exports=a.p+"static/media/awnews.de45488e.png"},function(e,t,a){e.exports=a.p+"static/media/battlearena.ca9e2397.png"},function(e,t,a){e.exports=a.p+"static/media/voltron_screen.c14e772b.png"},function(e,t,a){e.exports=a.p+"static/media/bamazon.af77d5f0.png"},function(e,t,a){e.exports=a.p+"static/media/liri.01bdf4b7.png"},function(e,t,a){e.exports=a.p+"static/media/gbg.a9bc78ab.png"},function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),c=a.n(o),r=(a(23),a(2)),l=a(3),s=a(5),d=a(4),m=a(6),h=(a(24),a(25),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header-bg"},i.a.createElement("header",null,i.a.createElement("h1",null,"mattia pace")),i.a.createElement("section",{className:"about"},i.a.createElement("header",null,i.a.createElement("h1",{id:"about-header"},"is an atlanta based developer specializing in leveraging",i.a.createElement("br",null),i.a.createElement("span",{id:"line2"},"coding + design + economics"),i.a.createElement("br",null),i.a.createElement("span",{id:"line3"},"to create value, solve problems, and uplift humanity.")))))}}]),t}(i.a.Component)),u=(a(26),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer-container"},i.a.createElement("div",{className:"footer-icons"},i.a.createElement("a",{href:"https://github.com/CoombaPace"}," ",i.a.createElement("i",{className:"fab fa-github",id:"github-icon"}," ")),i.a.createElement("a",{href:"https://www.linkedin.com/in/mattia-pace/"}," ",i.a.createElement("i",{className:"fab fa-linkedin"}," ")),i.a.createElement("a",{href:"https://medium.com/@coombapace"}," ",i.a.createElement("i",{class:"fab fa-medium"}," ")),i.a.createElement("a",{href:"https://twitter.com/coombapace"}," ",i.a.createElement("i",{class:"fab fa-twitter-square"}," "))))}}]),t}(i.a.Component));a(27);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},b=a(1),f=(a(28),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleMouseMove=a.handleMouseMove.bind(Object(b.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(b.a)(a)),a.handleSlideClick=a.handleSlideClick.bind(Object(b.a)(a)),a.imageLoaded=a.imageLoaded.bind(Object(b.a)(a)),a.slide=i.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleMouseMove",value:function(e){var t=this.slide.current,a=t.getBoundingClientRect();t.style.setProperty("--x",e.clientX-(a.left+Math.floor(a.width/2))),t.style.setProperty("--y",e.clientY-(a.top+Math.floor(a.height/2)))}},{key:"handleMouseLeave",value:function(e){this.slide.current.style.setProperty("--x",0),this.slide.current.style.setProperty("--y",0)}},{key:"handleSlideClick",value:function(e){this.props.handleSlideClick(this.props.slide.index)}},{key:"imageLoaded",value:function(e){e.target.style.opacity=1}},{key:"render",value:function(){var e=this.props.slide,t=e.src,a=(e.button,e.headline),n=e.index,o=e.repo,c=e.demo,r=e.tools,l=this.props.current,s="slide";return l===n?s+=" slide--current":l-1===n?s+=" slide--previous":l+1===n&&(s+=" slide--next"),i.a.createElement("li",{ref:this.slide,className:s,onClick:this.handleSlideClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},i.a.createElement("div",{className:"slide__image-wrapper"},i.a.createElement("img",{className:"slide__image",alt:a,src:t,onLoad:this.imageLoaded})),i.a.createElement("article",{className:"slide__content"},i.a.createElement("h2",{className:"slide__headline"},a),i.a.createElement("button",{id:"tools",className:"slide__action btn"},r),i.a.createElement("br",null),i.a.createElement("a",{href:o}," ",i.a.createElement("i",{className:"fab fa-github-alt",id:"currentSlide"}," ")),i.a.createElement("a",{href:c}," ",i.a.createElement("i",{className:"fas fa-chevron-right",id:"currentSlide"}," "))))}}]),t}(i.a.Component)),v=function(e){var t=e.type,a=e.title,n=e.handleClick;return i.a.createElement("button",{className:"btn btn--".concat(t),title:a,onClick:n},i.a.createElement("svg",{className:"icon",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))},g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={current:0},a.handlePreviousClick=a.handlePreviousClick.bind(Object(b.a)(a)),a.handleNextClick=a.handleNextClick.bind(Object(b.a)(a)),a.handleSlideClick=a.handleSlideClick.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handlePreviousClick",value:function(){var e=this.state.current-1;this.setState({current:e<0?this.props.slides.length-1:e})}},{key:"handleNextClick",value:function(){var e=this.state.current+1;this.setState({current:e===this.props.slides.length?0:e})}},{key:"handleSlideClick",value:function(e){this.state.current!==e&&this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.current,n=(t.direction,this.props),o=n.slides,c=n.heading,r="slider-heading__".concat(c.replace(/\s+/g,"-").toLowerCase()),l={transform:"translateX(-".concat(a*(100/o.length),"%)")};return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",{className:"slider-heading"},"Work")),i.a.createElement("div",{className:"slider","aria-labelledby":r},i.a.createElement("ul",{className:"slider__wrapper",style:l},i.a.createElement("h3",{id:r,class:"visuallyhidden"},c),o.map(function(t){return i.a.createElement(f,{key:t.index,slide:t,current:a,handleSlideClick:e.handleSlideClick})})),i.a.createElement("div",{className:"slider__controls"},i.a.createElement(v,{type:"previous",title:"Go to previous slide",handleClick:this.handlePreviousClick}),i.a.createElement(v,{type:"next",title:"Go to next slide",handleClick:this.handleNextClick}))))}}]),t}(i.a.Component),w=a(9),E=a.n(w),k=a(10),y=a.n(k),C=a(11),M=a.n(C),x=a(12),j=a.n(x),N=a(13),S=a.n(N),O=a(14),P=a.n(O),L=a(15),_=a.n(L),I=a(16),A=a.n(I),B=[{id:1,index:0,headline:"Memory Clicker Game",src:y.a,creator:"Mattia Pace",repo:"https://github.com/CoombaPace/react-memory-game",demo:"https://coombapace.github.io/react-memory-game/",tools:"ReactJS, bootstrapped with create-react-app, Material UI components. UI design meant to mimick the screen of the Mass Effect game."},{id:2,index:1,headline:"Good-Bye Galaxy Ep.4",button:"Github",src:A.a,creator:"Mattia Pace, Ian Cho, Chad Parks",repo:"https://www.youtube.com/watch?v=Erp9IbaZNjY",demo:"https://www.youtube.com/watch?v=Erp9IbaZNjY",tools:"I illustrated, colored, animated and edited this webseries as a part of a 3-man team, including creating concept art and voicework."},{id:3,index:2,headline:"Stockabily",button:"Github",src:E.a,creator:"John Ortega, Erik Johnson, Sam Lutz, Mattia Pace",repo:"https://github.com/CoombaPace/reactstock",demo:"https://reactstock.herokuapp.com/",tools:"Coded Stock Card and Modal components, using .map() to display them with their respective data, and .createPortal() to render modals to the DOM."},{id:4,index:3,headline:"AW News Scraper",src:M.a,creator:"Mattia Pace",repo:"https://www.github.com/coombapace/awnews",demo:"https://awnews.herokuapp.com",description:"A news scraper that returns top headlines from the AntiWar.com XML feed.",tools:"Built with Node.js, MongoDB, Mongoose, Cheerio, Axios, Express, and Express Handlebars."},{id:5,index:4,headline:"Battle Clicky Game",button:"Get Focused",src:j.a,creator:"Mattia Pace",repo:"www.github.com/coombapace/",demo:"",description:"A clicky game where the challenge is to choose your opponent based on your selected hero. Themed off of Netflix's Dragon Prince Animated Series.",tools:"Written in JavaScript with HTML, CSS, and jQuery."},{id:6,index:5,headline:"Trivia Game",button:"Get Focused",src:S.a,repo:"www.github.com/coombapace/",demo:"",description:"Voltron themed trivia game. Race against the clock to plumb the depths of your Voltron knowledge and choose correctly.",tools:"HTML, CSS, jQuery, MomentJS"},{id:7,index:6,src:P.a,headline:"Bamazon",creator:"Mattia Pace",repo:"www.github.com/coombapace/",demo:"",description:"A store made with Node.js and MySQL. Has 3 different interfaces and levels of permission: customer, manager, and supervisor.",tools:" Node.js & SQL "},{id:8,index:7,src:_.a,headline:"Liri",creator:"Mattia Pace",repo:"www.github.com/coombapace/",demo:"",description:"A small app that runs on simple text commands. Similar to SIRI, but without the voice activation. It can search for movie or song info, find a performer's upcoming events, and misc. commands that can be specified in a .txt file.",tools:"Built on Node.js. Frameworks, tools, & APIs used include Node-Spotify-API, Axios, OMDB API, Bands In Town API, MomentJS, and DotEnv."}],G=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={showModal:!1},a.handleShowMessageClick=function(e){return a.setState({showModal:!0,clickedIndex:e})},a.handleCloseModal=function(){return a.setState({showModal:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"parallax-group"},i.a.createElement("div",{className:"panels",id:"header"},i.a.createElement(h,null)),i.a.createElement("div",{className:"panels",id:"app"},i.a.createElement(g,{heading:"Example Slider",slides:B})),i.a.createElement("div",{className:"panels",id:"footer"},i.a.createElement(u,null))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.accc909d.chunk.js.map