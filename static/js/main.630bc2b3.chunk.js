(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},18:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),s=(t(18),t(3)),o=t(4),i=t(6),m=t(5),u=t(8),d=t(11),h=t.n(d),p=(t(21),t(12)),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.certificates,a=this.props.data.github,t=this.props.data.name,n=this.props.data.description;this.props.data.address.city,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}return l.a.createElement("header",{id:"home"},l.a.createElement(p.a,{type:"cobweb",color:"#D4AF37",num:"150",bg:!0}),l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Projects and Background")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("br",null),l.a.createElement("h1",{className:"responsive-headline"},t),l.a.createElement("br",null),l.a.createElement("h3",null,n,"."),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("a",{href:e,className:"button btn project-btn"},l.a.createElement("i",{className:"fa fa-book"}),"Certificates"),l.a.createElement("a",{href:a,className:"button btn github-btn"},l.a.createElement("i",{className:"fa fa-github"}),"Github")))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright Arshika Lalan"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=this.props.data.bio,t=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload)}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:e,alt:"Nordic Giant Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:t,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"View/Download Resume")))))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(this.props.data){this.props.data.skillmessage;var a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(a){var t="bar-expand "+a.name.toLowerCase();return l.a.createElement("li",{key:a.name},l.a.createElement("span",{style:{width:a.level,backgroundColor:e.getRandomColor()},className:t}),l.a.createElement("em",null,a.name))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a))),l.a.createElement("a",{id:"project"})),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Projects"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("br",null),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email;var e=this.props.data.contactmessage}return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},e))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("a",{id:"writing"}),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_tweets"},l.a.createElement("h2",{className:"widget-title"},l.a.createElement("font",{color:"#BFBFFF"},"Writings")),l.a.createElement("ul",{id:"twitter"},l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("a",{href:"https://bethenovelpoet.wordpress.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"Check out my writing blog!")))),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.instagram.com/scribesbyarshika/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"Check out my Instagram writing account!")))),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("a",{href:"https://store.pothi.com/book/arshika-lalan-dear-diary/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"Check out my published poetry book!")))))))))}}]),t}(n.Component),N=(n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),t}(n.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/MyWebsite",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/MyWebsite","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.630bc2b3.chunk.js.map