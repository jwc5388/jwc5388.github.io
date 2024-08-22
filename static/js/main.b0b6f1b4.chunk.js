(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/dissertationlogo.de7467b3.jpg"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/graduation.723792f0.jpg"},function(e,t,a){e.exports=a.p+"static/media/judo.5895070a.jpg"},function(e,t,a){e.exports=a.p+"static/media/cotons1.fc5fff98.jpg"},function(e,t,a){e.exports=a.p+"static/media/cotons2.b3832ab9.jpg"},function(e,t,a){e.exports=a.p+"static/media/CSDissertation.5bbfe2ab.pdf"},function(e,t,a){e.exports=a.p+"static/media/MathDissertation.2b362807.pdf"},function(e,t,a){e.exports=a(21)},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),o=a.n(l);a(20),a(3);var r=function(e){let{title:t,location:a,dates:l,details:o,imageSrc:r,isExpanded:c,onClick:s}=e;const[d,m]=Object(n.useState)({});return i.a.createElement("div",{className:"entry"},i.a.createElement("div",{className:"entry-header",onClick:s},i.a.createElement("h3",null,t),i.a.createElement("span",{className:"arrow "+(c?"expanded":"")},"\u25bc")),c&&i.a.createElement("div",{className:"entry-details"},a&&i.a.createElement("p",null,a),l&&i.a.createElement("p",null,l),i.a.createElement("ul",null,o.map((e,t)=>i.a.createElement("li",{key:t},"string"===typeof e?i.a.createElement("span",null,e):i.a.createElement("div",null,i.a.createElement("div",{className:"detail-header",onClick:()=>(e=>{m(t=>({...t,[e]:!t[e]}))})(t)},i.a.createElement("span",null,e.title||"More Details"),i.a.createElement("span",{className:"arrow "+(d[t]?"expanded":"")},"\u25bc")),d[t]&&i.a.createElement("div",{className:"detail-content"},e.content))))),r&&i.a.createElement("img",{src:r,alt:"Related content",className:"entry-image"})))},c=a(5),s=a.n(c),d=a(6),m=a.n(d),u=a(1),p=a.n(u),E=a(7),h=a.n(E),f=a(8),g=a.n(f),y=a(9),v=a.n(y),x=a(10),C=a.n(x);var S=function(){const[e,t]=Object(n.useState)({experience:{expanded:!1,entries:{}},education:{expanded:!1,entries:{}},skills:{expanded:!1},volunteer:!1}),a=e=>{t(t=>({...t,[e]:{...t[e],expanded:!t[e].expanded}}))},l=(e,a)=>{t(t=>({...t,[e]:{...t[e],entries:{...t[e].entries,[a]:!t[e].entries[a]}}}))};return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Jae Woo Chang's Portfolio")),i.a.createElement("section",{className:"Experience-section"},i.a.createElement("h2",{onClick:()=>a("experience")},"Experience"),e.experience.expanded&&i.a.createElement("div",{className:"section-content"},i.a.createElement(r,{title:"BIG DATA ANALYST/ HRG COMPANY",location:"Jeju Island, South Korea",dates:"June 2019 - August 2019",details:["Conducted in-depth analysis of veterinary clinics in Korea, focusing on the profitability of services related to dogs and cats.","Gathered, cleaned, and organized large datasets from various sources to ensure data accuracy and integrity.","Applied statistical techniques to identify patterns, trends, and insights related to profit margins, customer behavior, and market demand."],isExpanded:e.experience.entries.bigDataAnalyst,onClick:()=>l("experience","bigDataAnalyst")}),i.a.createElement(r,{title:"MATHEMATICIAN/ CARESIX",location:"Jeju Island, South Korea",dates:"May 2022 \u2013 August 2022",details:["Implemented the Fourier Transform algorithm using Python to separate unnecessary signals from an ECG signal, improving the accuracy and reliability of ECG measurements.","Conducted data analysis to validate the effectiveness of the algorithm and identify potential areas for improvement.","Participated in team meetings and discussions to provide insights and recommendations on mathematical and analytical aspects of healthcare technologies.","Documented and communicated the algorithm and its findings to non-technical stakeholders."],isExpanded:e.experience.entries.mathematician,onClick:()=>l("experience","mathematician")}),i.a.createElement(r,{title:"APP DEVELOPER/ CARESIX",location:"Gyeong-gido, South Korea",dates:"June 2023 \u2013 August 2023",details:["Created a mobile application to facilitate the production of the Sense1 Pro model. The application efficiently mapped QR codes, barcodes, and subsequently encoded them onto NFC tags.","Designed and developed a Bluetooth version application \u2018Cotons ai\u2019 utilizing Kotlin to capture essential data, including the BCG signal, 6-axis sensor signal, and temperature, ensuring accurate and reliable data acquisition.","More Details about CareSix:"],isExpanded:e.experience.entries.appdeveloper,onClick:()=>l("experience","appdeveloper")}),i.a.createElement(r,{title:"WHAT COMPANY IS CARESIX?",location:"Jeju Island, South Korea",dates:"Future Of Veterinary Care",details:[{title:"AI collar for future veterinary care",content:i.a.createElement("div",null,i.a.createElement("p",null,"The AI collar developed by CareSix revolutionizes veterinary care by monitoring pets' health in real-time."),i.a.createElement("img",{src:h.a,alt:"CareSix AI Collar",style:{width:"100%",borderRadius:"8px"}}))},{title:"Awards",content:i.a.createElement("div",null,i.a.createElement("p",null,"CES 2023"),i.a.createElement("img",{src:g.a,alt:"CareSix AI Collar",style:{width:"100%",borderRadius:"8px"}}),i.a.createElement("ul",null,i.a.createElement("li",null,"Best Tech Innovation Award 2022"),i.a.createElement("li",null,"HealthTech Excellence Award 2023")))},{title:"More about the company",content:i.a.createElement("div",null,i.a.createElement("p",null,"CareSix is at the forefront of pet healthcare technology. Learn more on their"," ",i.a.createElement("a",{href:"https://cotons.ai",target:"_blank",rel:"noopener noreferrer"},"official website"),"."))}],isExpanded:e.experience.entries.caresix,onClick:()=>l("experience","caresix")}))),i.a.createElement("section",{className:"Education-section"},i.a.createElement("h2",{onClick:()=>a("education")},"Education/Qualification"),e.education.expanded&&i.a.createElement("div",{className:"section-content"},i.a.createElement(r,{title:"Bachelor of Science in Mathematics and Computer Science",location:"University of St Andrews, St Andrews, Scotland",dates:"Graduated June 2024",details:[i.a.createElement("div",{key:"dissertation1",className:"download-link"},i.a.createElement("a",{href:v.a,download:"Dissertation1.pdf"},i.a.createElement("img",{src:p.a,alt:"Download Dissertation 1",className:"download-icon"})),i.a.createElement("span",null,"Computer Science Dissertation")),i.a.createElement("div",{key:"dissertation2",className:"download-link"},i.a.createElement("a",{href:C.a,download:"Dissertation2.pdf"},i.a.createElement("img",{src:p.a,alt:"Download Dissertation 2",className:"download-icon"})),i.a.createElement("span",null,"Mathematics Dissertation"))],imageSrc:s.a,isExpanded:e.education.entries.degree,onClick:()=>l("education","degree")}),i.a.createElement(r,{title:"St Andrews Judo Club/ Registered as member of Judo Scotland",location:"",dates:"",details:[],imageSrc:m.a,isExpanded:e.education.entries.judo,onClick:()=>l("education","judo")}),i.a.createElement(r,{title:"Committee member of St Andrews Korean Society",location:"Treasurer for St Andrews Korean Society",details:[],isExpanded:e.education.entries.society,onClick:()=>l("education","society")}))),i.a.createElement("section",{className:"Skills-section"},i.a.createElement("h2",{onClick:()=>a("skills")},"Skills"),e.skills.expanded&&i.a.createElement("div",{className:"section-content"},i.a.createElement("ul",{className:"skills-list"},i.a.createElement("li",null,"Fluent in English and Korean."),i.a.createElement("li",null,"Proficient in app development using Kotlin and Flutter- Dart."),i.a.createElement("li",null,"Proficient in app/web development with React (JavaScript)."),i.a.createElement("li",null,"Skilled in mathematical modelling in python."),i.a.createElement("li",null,"Experienced in coding with Java, Python, and JavaScript."),i.a.createElement("li",null,"Background in financial mathematics, with strong proficiency in mathematical modelling, risk management, and financial analysis."),i.a.createElement("li",null,"Skilled in game theory, with an understanding of strategic decision-making and competitive behavior analysis. "),i.a.createElement("li",null,"Teamwork and Collaboration: Effective communication and collaboration skills to work in a team environment and contribute to project success."),i.a.createElement("li",null,"Leadership")))),i.a.createElement("section",{className:"Volunteer-section"},i.a.createElement("h2",{onClick:()=>a("volunteer")},"Volunteer Experience or Leadership"),e.volunteer&&i.a.createElement("div",{className:"section-content"},i.a.createElement("div",{className:"entry"},i.a.createElement("h3",null,"Volunteer Developer at Non-Profit"),i.a.createElement("p",null,"Community Center, Seoul"),i.a.createElement("p",null,"January 2020 - Present"),i.a.createElement("ul",null,i.a.createElement("li",null,"Helped develop a community-focused application to facilitate communication among members."),i.a.createElement("li",null,"Led workshops on coding and technology for young learners."))))))};var k=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:l,getTTFB:o}=t;a(e),n(e),i(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null))),k()}],[[11,1,2]]]);
//# sourceMappingURL=main.b0b6f1b4.chunk.js.map