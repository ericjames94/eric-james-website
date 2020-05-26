(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},52:function(e){e.exports=JSON.parse('{"Name":"Eric James","Education":{"University":"University of Central Florida","GraduationDate":"December 2017","Degree":"Bachelor of Science in Computer Engineering"},"Experience":[{"Employer":"Sigma Sourcing, LLC","Role":"Web Developer","DoE":{"Start":"May 2017","End":"Present"},"Tasks":[{"MainTask":"Managed UI/UX for ASP.NET based web application with 100+ active users.","SubTasks":[],"id":1},{"MainTask":"Combined multiple stylesheets into a dynamic CSS file using ASP.NET Razor pages.","SubTasks":[],"id":2},{"MainTask":"Created full-stack jQuery widget to streamline client\'s vendor invoice processing.","SubTasks":["Developed visualization capability to display server validation information to end user more efficiently and effectively."],"id":3},{"MainTask":"Managed and updated use of open-source JavaScript frameworks.","SubTasks":[],"id":4},{"MainTask":"Contributed to improvements to company and team SDLC.","SubTasks":[],"id":5},{"MainTask":"Created C# classes and Razor pages for users to generate PDF reports and filter data.","SubTasks":[],"id":6},{"MainTask":"Created responsive and user customizable email templates using ASP.NET Razor pages.","SubTasks":[],"id":7}]}],"Skills":{"Programming Languages":["jQuery","JavaScript","HTML/CSS","C#","SQL"],"Misc":["SVN","Git","ASP.NET","Windows OS","Mac OS"],"Additional Skills":["Familiarity with Xamarin","Familiarity with Android development","Familiarity with Java","Experience using Adobe CC apps (PS, Premiere, After Effects)"]}}')},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),s=(t(43),t(44),t(15)),i=t(6),o=t.n(i);var m=function(){return l.a.createElement("nav",{className:"color-05"},l.a.createElement(o.a,{selector:"#home"},l.a.createElement(s.b,{to:"/",className:"color-text-01"},l.a.createElement("h3",{className:"home-link"},"E"))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement(o.a,{selector:"#skills"},l.a.createElement("a",{className:"color-text-01"},l.a.createElement("li",null,"Skills"))),l.a.createElement(o.a,{selector:"#experience"},l.a.createElement("a",{className:"color-text-01"},l.a.createElement("li",null,"Experience"))),l.a.createElement(o.a,{selector:"#contact"},l.a.createElement("a",{className:"color-text-01"},l.a.createElement("li",null,"Contact")))))},u=t(10),E=t(12),d=t(3),p=Object(n.createContext)(),v=function(e){var a=Object(n.useState)(t(52)),r=Object(d.a)(a,2),c=r[0],s=r[1];return l.a.createElement(p.Provider,{value:[c,s]},e.children)};var f=function(){var e=Object(n.useContext)(p),a=Object(d.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(t.Experience)),c=Object(d.a)(r,2),s=c[0];return c[1],l.a.createElement("div",{className:"section-content job-summary-div "},l.a.createElement("h2",{className:"section-header"},"Experience Summary"),s.map((function(e,a){return l.a.createElement("div",{key:"job-summary-"+a},l.a.createElement("h3",{className:"color-text-02"},e.Employer),l.a.createElement("div",null,l.a.createElement("ul",{className:"job-summary-list"},function(e,a){for(var t=e.Tasks.length,n=Object.assign([],e.Tasks),r=[],c=0;c<a;c++){var s=Math.floor(Math.random()*Math.floor(t)),i=n[s];r.push(l.a.createElement("li",{key:"rand-task-"+i.id},i.MainTask));for(var o=s;o<n.length-1;o++)n[o]=n[o+1];delete n[t--]}return r}(e,4))),l.a.createElement("div",null,l.a.createElement("a",{download:"resume.pdf",className:"download-link",href:"resume.pdf"}," Click here to download resume")))})))};var h=function(){var e=Object(n.useContext)(p),a=Object(d.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(t.Skills)),c=Object(d.a)(r,2);return c[0],c[1],l.a.createElement("div",null,l.a.createElement("div",{className:"section-content"},l.a.createElement("h3",{className:"section-header"},"Skills Summary"),l.a.createElement("div",{className:"skill-summary-list-container"},l.a.createElement("div",{className:"skills-columns-container"},l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("p",null,"Programming Languages"),l.a.createElement("ul",null,l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"HTML")))),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("p",null,"Frameworks & Technologies"),l.a.createElement("ul",null,l.a.createElement("li",null,"Visual Studio"),l.a.createElement("li",null,"SVN"),l.a.createElement("li",null,"GIT"),l.a.createElement("li",null,"ASP.NET")))),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("p",null,"Things I am Learning"),l.a.createElement("ul",null,l.a.createElement("li",null,"React*"),l.a.createElement("li",null,"AWS"),l.a.createElement("li",null,"Vue"),l.a.createElement("li",null,"Angular"))))))),l.a.createElement("span",{style:{position:"relative"}},"* Used to build what you're seeing here!"))},b=t(32),k=t(33),g=t(37),N=t(36),S=t(21),y=t.n(S),x=t(34),j=t(11),w=(t(68),function(){var e=Object(x.a)(y.a.mark((function e(a){var t,n,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.url,delete a.url,e.prev=2,e.next=5,fetch(t,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 5:if(!((n=e.sent).status<200&&n.status>=300)){e.next=11;break}return e.next=9,n.json();case 9:throw l=e.sent,new Error(l);case 11:return e.abrupt("return",n.json());case 14:throw e.prev=14,e.t0=e.catch(2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}()),T=function(e){Object(g.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={error:null,submitted:!1,fields:{name:"",email:"",message:""}},e.showNotification=function(e){switch(e){case"success":j.NotificationManager.success("Thank you for your message, and I will get back to you soon.","Message Sent!");break;case"error":j.NotificationManager.error("Please try again, or refresh.","Something Went Wrong");break;default:j.NotificationManager.warning("Message","Title")}},e.submitForm=function(e){var a=this;e.preventDefault();var t=e.target.elements,n=t.name,l=t.email,r=t.message,c={url:"https://2g6dka98da.execute-api.us-east-1.amazonaws.com/local",name:n.value,email:l.value,message:r.value};w(c).then((function(){a.setState({error:null,submitted:!0}),a.showNotification("success")})).catch((function(e){a.setState({error:e.message,submitted:!1}),a.showNotification("error")}))},e}return Object(k.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"contact-form section-content color-text-04 no-text-shadow"},l.a.createElement("h2",null,"Let's Get In Touch"),l.a.createElement("form",{ref:this.formElement,onSubmit:function(a){return e.submitForm(a)}},l.a.createElement("span",null,l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Email"})),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4",columns:"50"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"color-04 color-text-01"},"Submit")),l.a.createElement(j.NotificationContainer,null))}}]),t}(n.Component);var O=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("section",{id:"home"},l.a.createElement("div",{className:"section-div-container color-04 color-text-01"},l.a.createElement("div",{className:"section-content home-div-header"},l.a.createElement("span",null,l.a.createElement("h3",{className:"slide-from-left"},"HI",l.a.createElement("span",{className:"color-text-03"},","),l.a.createElement("br",null),"I",l.a.createElement("span",{className:"color-text-03"},"'"),"M ERIC",l.a.createElement("span",{className:"color-text-03"},"."))),l.a.createElement("span",{className:"color-text-01"},l.a.createElement("h4",{className:"slide-from-right"},"WEB DEVELOPER")),l.a.createElement(o.a,{selector:"#skills"},l.a.createElement("span",{className:"scroll-span"},l.a.createElement("span",null,"View skills"),l.a.createElement("span",null,l.a.createElement(u.a,{icon:E.a}))))))),l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"section-div-container skills-container color-04 color-text-01"},l.a.createElement("div",{className:"skill-summary-background"}),l.a.createElement(h,null),l.a.createElement(o.a,{selector:"#experience"},l.a.createElement("span",{className:"scroll-span"},l.a.createElement("span",null,"View experience"),l.a.createElement("span",null,l.a.createElement(u.a,{icon:E.a})))))),l.a.createElement("section",{id:"experience"},l.a.createElement("div",{className:"section-div-container color-04 color-text-01"},l.a.createElement("div",{className:"job-summary-background"}),l.a.createElement(f,null),l.a.createElement(o.a,{selector:"#contact"},l.a.createElement("span",{className:"scroll-span"},l.a.createElement("span",null,"Contact me"),l.a.createElement("span",null,l.a.createElement(u.a,{icon:E.a})))))),l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"section-div-container color-02"},l.a.createElement("div",{className:"contact-form-background"}),l.a.createElement(T,null),l.a.createElement(o.a,{selector:"#home",className:"center color-text-04"},l.a.createElement("span",{className:"scroll-span no-text-shadow"},l.a.createElement("span",null,l.a.createElement(u.a,{icon:E.b})),l.a.createElement("span",null,"Back to top"))))))};var C=function(e){return e.index,l.a.createElement("li",{className:"resume-list-item"},e.MainTask,l.a.createElement("ul",null,e.SubTasks.map((function(e,a){return l.a.createElement("li",{key:"job-subtask-"+a,className:"resume-list-item"},e)}))))};var M=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,e.Employer),l.a.createElement("h4",null,e.Role),l.a.createElement("div",null,l.a.createElement("ul",{className:"resume-list"},e.Tasks.map((function(e,a){return l.a.createElement("div",{key:"job-task-"+a},l.a.createElement(C,Object.assign({},e,{index:a})))})))))},P=t(35),A=t.n(P);var D=function(e){var a=e.keyName,t=Object(n.useState)("skills-div"),r=Object(d.a)(t,2),c=r[0],s=r[1];return l.a.createElement(A.a,{onChange:function(e){s(e?"skills-div skills-div-animate":"skills-div")},children:!0},l.a.createElement("div",{className:c},l.a.createElement("h4",null,a),l.a.createElement("ul",{className:"resume-list resume-list-center"},e[a].map((function(e,a){return l.a.createElement("li",{key:a,className:"resume-list-item"},e)})))))};var L=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,e.University),l.a.createElement("p",null,e.Degree," - ",e.GraduationDate))};var I=function(){var e=Object(n.useContext)(p),a=Object(d.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(t.Experience)),c=Object(d.a)(r,2),s=c[0],i=(c[1],Object(n.useState)(t.Skills)),o=Object(d.a)(i,2),m=o[0];return o[1],l.a.createElement("div",null,l.a.createElement("div",{className:"contact-info-div"},l.a.createElement("p",null,t.Name),l.a.createElement("p",null,t.Address),l.a.createElement("p",null,t.Phone," ")),l.a.createElement("div",null,l.a.createElement("h3",null,"Education"),l.a.createElement(L,t.Education)),l.a.createElement("div",null,l.a.createElement("h3",null,"Work Experience"),s.map((function(e,a){return l.a.createElement("div",{key:"job-"+a},l.a.createElement(M,Object.assign({},e,{index:a})))}))),l.a.createElement("div",null,l.a.createElement("div",null,Object.keys(m).map((function(e,a){return l.a.createElement("div",{key:"skills-"+a},l.a.createElement(D,Object.assign({keyName:e},m)))})))))};var J=function(){return window.addEventListener("scroll",(function(e){console.log(e)})),l.a.createElement("div",{className:"container"},l.a.createElement("section",{className:"no-scroll-snap"},l.a.createElement("h3",null,"About Page"),l.a.createElement("div",null,l.a.createElement(I,null))))};var W=function(){return l.a.createElement("div",{className:"center"},l.a.createElement(T,null))},F=t(8);var R=function(){return l.a.createElement(s.a,null,l.a.createElement(v,null,l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(F.c,null,l.a.createElement(F.a,{path:"/",exact:!0,component:O}),l.a.createElement(F.a,{path:"/about",component:J}),l.a.createElement(F.a,{path:"/contact",component:W})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.5665566b.chunk.js.map