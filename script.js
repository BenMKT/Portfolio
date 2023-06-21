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
    class: 'grid-item1 tonic',
    snapshoot: 'images/Snapshoot Portfolio (1).png',
    desktop: 'images/Snapshoot Portfolio (1).png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: 'images/Icon.png',
    source: 'images/Vector.png',
    skills: ['HTML', 'css', 'javaScript'],
  },
  {
    class: 'grid-item1 stories single',
    snapshoot: 'images/Snapshoot Portfolio (2).png',
    desktop: 'images/Snapshoot Portfolio (2).png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: 'images/Icon.png',
    source: 'images/Vector.png',
    skills: ['HTML', 'css', 'javaScript'],
  },
  {
    class: 'grid-item1 grid-item3 tonic',
    snapshoot: 'images/Snapshoot Portfolio (3).png',
    desktop: 'images/Snapshoot Portfolio (3).png',
    Tonic: 'Tonic',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: 'images/Icon.png',
    source: 'images/Vector.png',
    skills: ['HTML', 'css', 'javaScript'],
  },
  {
    class: 'grid-item1 stories',
    snapshoot: 'images/Snapshoot Portfolio (4).png',
    desktop: 'images/Snapshoot Portfolio (4).png',
    Tonic: 'Multi-Post Stories',
    offer: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    descriptionpop1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    descriptionpop: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it 1960s. Lorem Ipsum is 
    simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of 
    type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    liveversion: 'images/Icon.png',
    source: 'images/Vector.png',
    skills: ['HTML', 'css', 'javaScript'],
  },
];

const workscard = document.getElementById('works');

worksection.forEach((project) => {
  workscard.innerHTML += `
<div class='${project.class}'>
        <div class='image1'>
        <img src='${project.snapshoot}'
          alt='Project Image'></div>
        <div class='body1'>
          <h2>${project.Tonic}</h2>
          <ul class='flexy'>
            <li class='canopy'>${project.offer[0]}</li>
            <span class='point'></span>
            <li class='backend'>${project.offer[1]}</li>
            <span class='point'></span>
            <li class='year'>${project.offer[2]}</li>
          </ul>
            <p>${project.description}</p>
          <ul class='linkss'>
            <li>${project.skills[0]}</li>
            <li>${project.skills[1]}</li>
            <li></>${project.skills[2]}</li>
          </ul>
          <button id='prjbtn' name='prjbtn' data-modal-target='#prjbtn'>See Project</button>
        </div>
      </div>`;
});

const popupContainer = document.querySelector('.popupContainer');

function createPop() {
  for (let i = 0; i < 4; i += 1) {
    const pop = document.createElement('pop');
    pop.classList.add(`popup${i}`);
    pop.innerHTML = `
 <div class='grid-item1 tonic' id='grid-item1 tonic'>
    <nav>
      <h2>${worksection[i].Tonic}</h2>
      <button type='button' class='closepopup'><img src='images/Close-Icon1.png' alt='close button'></button>
    </nav>
    <div>
    <ul class='flexy'>
      <li class='canopy'>${worksection[i].offer[0]}</li>
      <li class='backend'>${worksection[i].offer[1]}</li>
      <li class='year'>${worksection[i].offer[2]}</li>
    
    </ul>
    </div>
    <div class='image1'>
      <img src='${worksection[i].snapshoot}' alt='project snapshot1'>
    </div>
    
    <div class='body1'>
      <p class='tonic'>${worksection[i].descriptionpop1}</p>
      </div>
      <div class='poplistbtn'>
      <div>
        <ul class='linkss'>
          <li>${worksection[i].skills[0]}</li>
          <li>${worksection[i].skills[1]}</li>
          <li>${worksection[i].skills[2]}</li>
        </ul>
      </div>
        <div class='seelive'>
          <button>See live <img class='imglive' src='${worksection[i].liveversion}' alt='live'></button>
          <button>See Source <img class='imglive' src='${worksection[i].source}' alt='source'></button>
        </div>
        </div>
      </div>
      `;
    popupContainer.appendChild(pop);
  }
}
createPop();

const seabtn = document.querySelectorAll('#prjbtn');
const cancelbtn = document.querySelectorAll('.closepopup');
const overlay = document.getElementById('overlay');

seabtn[0].addEventListener('click', () => {
  const popup0 = document.querySelector('.popup0');
  popup0.classList.add('active');
  overlay.classList.add('active');
});

function close(popup0) {
  if (popup0 == null) return;
  popup0.classList.remove('active');
  overlay.classList.remove('active');
}

cancelbtn.forEach((button) => {
  button.addEventListener('click', () => {
    const popup0 = button.closest('.popup0');
    close(popup0);
  });
});

seabtn[1].addEventListener('click', () => {
  const popup1 = document.querySelector('.popup1');
  popup1.classList.add('active');
  overlay.classList.add('active');
});

function close1(popup1) {
  if (popup1 == null) return;
  popup1.classList.remove('active');
  overlay.classList.remove('active');
}

cancelbtn.forEach((button) => {
  button.addEventListener('click', () => {
    const popup1 = button.closest('.popup1');
    close1(popup1);
  });
});

seabtn[2].addEventListener('click', () => {
  const popup2 = document.querySelector('.popup2');
  popup2.classList.add('active');
  overlay.classList.add('active');
});

function close2(popup2) {
  if (popup2 == null) return;
  popup2.classList.remove('active');
  overlay.classList.remove('active');
}

cancelbtn.forEach((button) => {
  button.addEventListener('click', () => {
    const popup2 = button.closest('.popup2');
    close2(popup2);
  });
});

seabtn[3].addEventListener('click', () => {
  const popup3 = document.querySelector('.popup3');
  popup3.classList.add('active');
  overlay.classList.add('active');
});

function close3(popup3) {
  if (popup3 == null) return;
  popup3.classList.remove('active');
  overlay.classList.remove('active');
}

cancelbtn.forEach((button) => {
  button.addEventListener('click', () => {
    const popup3 = button.closest('.popup3');
    close3(popup3);
  });
});
