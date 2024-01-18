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
    snapshoot: 'images/Space Travellers Hub.png',
    Tonic: 'Space Travelers Hub',
    offer: ['SPACEHUB', 'Front End Dev', '2023'],
    description:
      "🚀 Looking for an out-of-this-world experience? Our web app taps into real SpaceX's API to offer commercial and scientific space travel services. Book your rocket and join a selected space mission today!",
    descriptionpop1:
      '🚀☄Space Travelers\' Hub is a React-Redux app, built collaboratively, that fetches data from the SpaceX API and lets the user "reserve" rockets and missions for leisure or business travels. <br><br> To infinity and beyond!! 🌌',
    liveversion: 'images/Icon.png',
    liveLink: 'https://guileless-halva-645039.netlify.app/',
    source: 'images/Vector.png',
    sourceLink: 'https://github.com/BenMKT/Space-Travelers-Hub',
    skills: ['HTML5', 'CSS3', 'Redux', 'React', 'JavaScript'],
  },
  {
    class: 'grid-item1 stories single',
    snapshoot: 'images/Recipe App4.png',
    Tonic: 'Recipe App',
    offer: ['MYCAFE', 'Full Stack Dev', '2023'],
    description:
      'Looking for an easier way to manage your kitchen? Our Recipe app has got you covered! Keep track of all your recipes, ingredients, and inventory, and even generate a shopping list with just a few taps. Say goodbye to kitchen chaos and hello to stress-free cooking!',
    descriptionpop1: `Introducing the Recipe App: Your all-in-one solution for effortless cooking! <br><br>
    Seamlessly organize your recipes, ingredients, and pantry items. Craft delicious recipes with ease, generate smart shopping lists, and even share your culinary creations with the world. <br><br> Cooking has never been this convenient – simplify your kitchen adventures with our Recipe app!`,
    liveversion: 'images/Icon.png',
    liveLink: 'https://ror-recipeapp.onrender.com/',
    source: 'images/Vector.png',
    sourceLink: 'https://github.com/BenMKT/Recipe-App',
    skills: ['HTML5', 'CSS3', 'Rspec', 'PostgreSQL', 'Ruby on Rails'],
  },
  {
    class: 'grid-item1 grid-item3 tonic',
    snapshoot: 'images/BudgetApp Screenshot1.png',
    Tonic: 'Smart Budget App',
    offer: ['FINANCE', 'Full Stack Dev', '2023'],
    description:
      '💰💼 Gain control of your finances by categorizing your transactions and unlocking valuable insights into your spending habits. Make smarter decisions with ease!',
    descriptionpop1: `<br><br><br>
    💰💼 Easily categorize your transactions and gain insights into your spending habits, empowering you to make informed financial decisions in a glance.`,
    liveversion: 'images/Icon.png',
    liveLink: 'https://smartbudgetapp-v1wv.onrender.com/',
    source: 'images/Vector.png',
    sourceLink: 'https://github.com/BenMKT/Budget-App',
    skills: ['HTML5', 'CSS3', 'Rspec', 'PostgreSQL', 'Ruby on Rails'],
  },
  {
    class: 'grid-item1 stories',
    snapshoot: 'images/Math Magician.png',
    Tonic: 'Math Magician',
    offer: ['EDUCATION', 'Front End Dev', '2023'],
    description:
      "Are you a math enthusiast? Check out this awesome website! It's a Single Page App (SPA) that lets you do quick calculations and read some fun math-related quotes. Give it a try!",
    descriptionpop1: 'Math Magicians is a WebApp for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations while reading random math-related quotes.',
    liveversion: 'images/Icon.png',
    liveLink: 'https://benmkt-math-magicians.onrender.com',
    source: 'images/Vector.png',
    sourceLink: 'https://github.com/BenMKT/math-magicians',
    skills: ['HTML5', 'CSS3', 'React', 'Redux', 'JavaScript'],
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
            <li>${project.skills[2]}</li>
            <li>${project.skills[3]}</li>
            <li>${project.skills[4]}</li>
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
          <li>${worksection[i].skills[3]}</li>
          <li id='poprails'>${worksection[i].skills[4]}</li>
        </ul>
      </div>
        <div class='seelive'>
          <button id='liveLink'>See live <img class='imglive' src='${worksection[i].liveversion}' alt='live'></button>
          <button id='sourceLink'>See Source <img class='imglive' src='${worksection[i].source}' alt='source'></button>
        </div>
        </div>
      </div>
      `;
    popupContainer.appendChild(pop);
  }
}
createPop();

const seabtn = document.querySelectorAll('#prjbtn');
const sourcebtn = document.querySelectorAll('#sourceLink');
const livebtn = document.querySelectorAll('#liveLink');
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

sourcebtn[0].addEventListener('click', () => {
  window.open(`${worksection[0].sourceLink}`, '_blank');
});

livebtn[0].addEventListener('click', () => {
  window.open(`${worksection[0].liveLink}`, '_blank');
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

sourcebtn[1].addEventListener('click', () => {
  window.open(`${worksection[1].sourceLink}`, '_blank');
});

livebtn[1].addEventListener('click', () => {
  window.open(`${worksection[1].liveLink}`, '_blank');
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

sourcebtn[2].addEventListener('click', () => {
  window.open(`${worksection[2].sourceLink}`, '_blank');
});

livebtn[2].addEventListener('click', () => {
  window.open(`${worksection[2].liveLink}`, '_blank');
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

sourcebtn[3].addEventListener('click', () => {
  window.open(`${worksection[3].sourceLink}`, '_blank');
});

livebtn[3].addEventListener('click', () => {
  window.open(`${worksection[3].liveLink}`, '_blank');
});
