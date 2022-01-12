
var projects = [
 
];

var skills = {
  "skills":[
    "img/html5.svg",
    "img/css-5.svg",
    "img/javascript.svg",
    "img/hugo.svg",
    "img/go.svg",
    "img/docker.svg",
    "img/kubernets.svg",
    "img/mysql.svg",
    "img/redis.svg",
    "img/mongodb.svg",
  ],
  "competency":{
    "img/html5.svg":2,
    "img/css-5.svg":2,
    "img/javascript.svg":2,
    "img/hugo.svg":2,
    "img/go.svg":3,
    "img/docker.svg":1,
    "img/kubernets.svg":1,
    "img/mysql.svg":2,
    "img/redis.svg":2,
    "img/mongodb.svg":2,
  },
};


function loadProjects(){
  let hook = document.getElementById("projectsHook");
  for (let i = 0; i < projects.length; i++) {
    let tech ="";
    for (let j = 0; j < projects[i].technology.length; j++) {
      tech+=`<img class="projectSkillsIcon" src="`+projects[i].technology[j]+`">`;
    }
    hook.innerHTML += `<div class="project">
    <a class="projectLink" href="`+projects[i].projLink+`">
        <div class="projectHeading">`+projects[i].projName+`</div>
        <img class="projectImage" src="`+projects[i].projImage+`">
    </a> 
    <div class="projectInformation">
        <div class="projectDescriptionHeading">Description</div>
        <div class="projectDescription"> `+projects[i].description+`</div>
        <div class="projectSkillsHeading">Technologies Used</div>
        <div class="projectSkillsIcons"> 
            `+tech+`
        </div>
    </div>
</div>` ;
  }
}

function loadSkills(){
  typeWriter(0);
  let element = document.getElementById("skillsList");  
  for (let i = 0; i < skills.skills.length; i++) {
    let skillStar;
    switch (skills.competency[skills.skills[i]]) {
      case 1:
        skillStar=`<p class="devicon-star skillStarFull"></p>
        <p class="devicon-star"></p>
        <p class="devicon-star"></p>`;
        break;
      case 2:
        skillStar=`<p class="devicon-star skillStarFull"></p>
        <p class="devicon-star skillStarFull"></p>
        <p class="devicon-star"></p>`;
        break;
      case 3:
        skillStar=`<p class="devicon-star skillStarFull"></p>
        <p class="devicon-star skillStarFull"></p>
        <p class="devicon-star skillStarFull"></p>`;
        break;    
      default:
        break;
    }

    element.innerHTML+=`<li class="list-inline-item">
    <div class="skill"> <img class="logo" src="`+skills.skills[i]+`">
        <div class="skillStars">
            `+skillStar+`
        </div>
    </div>
    </li>`;
  }
}

// heavy cringe code
function typeWriter(buf) {
  var list = ['Backend Developer','Frontend Developer','Freelance Fullstack Developer'];
  var speed = 90;
  var element = document.getElementById("typewriter");
  for (let i = 0; i < list.length; i++) {
    let txt = list[i];
    for (let j = 0; j < txt.length; j++) {
      let addTime = (j*speed)+buf;
      let removeTime = ((j+txt.length)*speed)+500+buf;
      setTimeout(() => {
        element.innerHTML += txt.charAt(j);
      }, addTime);
      if (i==(list.length-1)){
        removeTime+=8000;
      }
      setTimeout(() => {
        element.innerHTML = element.innerHTML.slice(0,-1);
      }, removeTime);
    }
    buf+=(txt.length*2*speed)+500+1000;
  }
  if (buf<1000000){
    buf+=8000;
    typeWriter(buf);
  }
}
