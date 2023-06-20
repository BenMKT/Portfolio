const navMenu = document.querySelector('.nav-menu');

const menuBtn = document.getElementById('headermenubtn');

const closeBtn = document.getElementById('close-btn');

const navLink = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
});

const worksection = [
  {
    class: "grid-item1 tonic",
    snapshoot: "images/Snapshoot Portfolio (1).png",
    desktop: "images/Snapshoot Portfolio (1).png",
    Tonic: "Tonic",
    offer: ["CANOPY", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: "images/Icon.png",
    source: "images/Vector.png",
    skills: ["HTML", "css", "javaScript"],
  },
  {
    class: "grid-item1 stories single",
    snapshoot: "images/Snapshoot Portfolio (2).png",
    desktop: "images/Snapshoot Portfolio (2).png",
    Tonic: "Multi-Post Stories",
    offer: ["CANOPY", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: "images/Icon.png",
    source: "images/Vector.png",
    skills: ["HTML", "css", "javaScript"],
  },
  {
    class: "grid-item1 grid-item3 tonic",
    snapshoot: "images/Snapshoot Portfolio (3).png",
    desktop: "images/Snapshoot Portfolio (3).png",
    Tonic: "Tonic",
    offer: ["CANOPY", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: "images/Icon.png",
    source: "images/Vector.png",
    skills: ["HTML", "css", "javaScript"],
  },
  {
    class: "grid-item1 stories",
    snapshoot: "images/Snapshoot Portfolio (4).png",
    desktop: "images/Snapshoot Portfolio (4).png",
    Tonic: "Multi-Post Stories",
    offer: ["CANOPY", "Back End Dev", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: "images/Icon.png",
    source: "images/Vector.png",
    skills: ["HTML", "css", "javaScript"],
  },
];

const workscard = document.getElementById("works");

worksection.forEach((project) => {
  workscard.innerHTML += `
<div class="${project.class}">
        <div class="image1">
        <img src="${project.snapshoot}"
          alt="Project Image"></div>
        <div class="body1">
          <h2>${project.Tonic}</h2>
          <ul class="flexy">
            <li class="canopy">${project.offer[0]}</li>
            <span class="point"></span>
            <li class="backend">${project.offer[1]}</li>
            <span class="point"></span>
            <li class="year">${project.offer[2]}</li>
          </ul>
            <p>${project.description}</p>
          <ul class="linkss">
            <li>${project.skills[0]}</li>
            <li>${project.skills[1]}</li>
            <li></>${project.skills[2]}</li>
          </ul>
          <button id='prjbtn' name='prjbtn' data-modal-target="#prjbtn">See Project</button>
        </div>
      </div>`;
});

