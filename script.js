const navMenu = document.querySelector(".nav-menu");

const menuBtn = document.getElementById("headermenubtn");

const closeBtn = document.getElementById("close-btn");

const navLink = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  navMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
});

navLink.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.style.display = "none";
  });
});
// project section
const worksection = [
  {
    class: "grid-item1 stories single",
    snapshoot: "images/ATP.png",
    Tonic: "ATP App",
    offer: ["GOVERNANCE", "Full Stack Dev", "2024"],
    description:
      "A hybrid civic‑tech platform enabling real‑time citizen participation in governance, driving an estimated 87% increase in community engagement during pilot programs.",
    descriptionpop1: `A full-stack hybrid platform engineered with Next.js, TypeScript, Prisma, PostgreSQL, and deployed seamlessly on Vercel. It features secure authentication via NextAuth, real-time messaging through Twilio, Redis-powered caching, and extended backend capabilities using Supabase. The frontend delivers a beautiful, animated, WCAG-compliant, responsive UI crafted with Tailwind CSS, DaisyUI, ShadcnUI, Framer Motion, and Recharts—enabling dynamic dashboards and interactive user experiences. Core features include role-based access control, encrypted data handling with Bcrypt, and scheduled tasks via Cron. Robust unit and integration testing are implemented using Jest to ensure reliability across both frontend and backend workflows.`,
    liveversion: "images/Icon.png",
    liveLink: "https://atparty.ke",
    source: "images/Vector.png",
    sourceLink: "https://github.com/BenMKT/atp-party",
    skills: ["Jest", "Next.js", "Tailwind", "NextAuth", "TypeScript"],
  },
  {
    class: "grid-item1 grid-item3 tonic",
    snapshoot: "images/BudgetApp Screenshot1.png",
    Tonic: "Smart Budget App",
    offer: ["FINANCE", "Full Stack Dev", "2023"],
    description:
      "A personal finance platform that delivers 20%+ gains in budgeting accuracy through automated transaction categorization and 95% test-backed coverage to ensure reliability, maintainability, and confidence in user-facing workflows.",
    descriptionpop1: `A budget management platform developed with Ruby on Rails, PostgreSQL, and  deployed on Render. It features automated transaction categorization and robust role-based access control via Devise and CanCanCan. The codebase is backed by RSpec and Capybara tests, achieving 95% coverage to ensure reliability, maintainability, and confidence in user-facing workflows.`,
    liveversion: "images/Icon.png",
    liveLink: "https://smartbudgetapp-v1wv.onrender.com/",
    source: "images/Vector.png",
    sourceLink: "https://github.com/BenMKT/Budget-App",
    skills: ["Rspec", "Devise", "PostgreSQL", "CanCanCan", "Ruby on Rails"],
  },
  {
    class: "grid-item1 stories",
    snapshoot: "images/SchoolFees.png",
    Tonic: "School Fees Management System",
    offer: ["EDUCATION", "Full Stack Dev", "2025"],
    description:
      "A comprehensive education‑finance platform that streamlines school fees tracking for school administrators and parents, boosting collection and reconciliation efficiency by 55% and enhancing collaborative academic performance monitoring by 74% to deliver actionable financial and educational insights.",
    descriptionpop1:
      "A full-stack education finance platform built with Next.js, TypeScript, Radix UI, and deployed on Vercel. It leverages PostgreSQL for structured data storage and Prisma ORM for efficient querying. Authentication is handled securely via NextAuth, with Twilio integrated for messaging and the Google Sheets API used for real-time data synchronization with administrative workflows. The frontend features a responsive interface styled with Tailwind CSS and animated using Framer Motion. Interactive dashboards powered by Recharts provide live fee tracking and academic performance insights. Additional capabilities include role-based access controls, encrypted credential handling with Bcrypt, and intuitive management tools tailored for school administrators.",
    liveversion: "images/Icon.png",
    liveLink: "https://school-fees-virid.vercel.app/",
    source: "images/Vector.png",
    sourceLink: "https://github.com/BenMKT/school-fees",
    skills: [
      "Next.js",
      "TypeScript",
      "Recharts",
      "Tailwind",
      "Google Sheets API",
    ],
  },
  {
    class: "grid-item1 tonic",
    snapshoot: "images/Space Travellers Hub.png",
    Tonic: "Space Travelers Hub",
    offer: ["TRAVEL", "Front End Dev", "2023"],
    description:
      "A dynamic space exploration platform that integrates SpaceX's live API to offer real-time booking for commercial and scientific space travel services.",
    descriptionpop1:
      "Developed through pair programming, Space Travelers' Hub is a single-page React application powered by Redux Toolkit and RTK Query for efficient state management and API consumption. Built with Vite for rapid development and optimized bundling, the platform interfaces with the SpaceX REST API to enable users to browse and reserve rockets and missions. Bookings are managed in a centralized Redux store, ensuring consistent state across views. The codebase is rigorously tested with Vitest to maintain reliability and confidence in user interactions.",
    liveversion: "images/Icon.png",
    liveLink: "https://guileless-halva-645039.netlify.app/",
    source: "images/Vector.png",
    sourceLink: "https://github.com/BenMKT/Space-Travelers-Hub",
    skills: ["CSS3", "React", "Redux", "Vitest", "JavaScript"],
  },
];

const workscard = document.getElementById("works");

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
// popup section
const popupContainer = document.querySelector(".popupContainer");

function createPop() {
  for (let i = 0; i < 4; i += 1) {
    const pop = document.createElement("pop");
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

const seabtn = document.querySelectorAll("#prjbtn");
const sourcebtn = document.querySelectorAll("#sourceLink");
const livebtn = document.querySelectorAll("#liveLink");
const cancelbtn = document.querySelectorAll(".closepopup");
const overlay = document.getElementById("overlay");

seabtn[0].addEventListener("click", () => {
  const popup0 = document.querySelector(".popup0");
  popup0.classList.add("active");
  overlay.classList.add("active");
});

function close(popup0) {
  if (popup0 == null) return;
  popup0.classList.remove("active");
  overlay.classList.remove("active");
}

cancelbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup0 = button.closest(".popup0");
    close(popup0);
  });
});

sourcebtn[0].addEventListener("click", () => {
  window.open(`${worksection[0].sourceLink}`, "_blank");
});

livebtn[0].addEventListener("click", () => {
  window.open(`${worksection[0].liveLink}`, "_blank");
});

seabtn[1].addEventListener("click", () => {
  const popup1 = document.querySelector(".popup1");
  popup1.classList.add("active");
  overlay.classList.add("active");
});

function close1(popup1) {
  if (popup1 == null) return;
  popup1.classList.remove("active");
  overlay.classList.remove("active");
}

cancelbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup1 = button.closest(".popup1");
    close1(popup1);
  });
});

sourcebtn[1].addEventListener("click", () => {
  window.open(`${worksection[1].sourceLink}`, "_blank");
});

livebtn[1].addEventListener("click", () => {
  window.open(`${worksection[1].liveLink}`, "_blank");
});

seabtn[2].addEventListener("click", () => {
  const popup2 = document.querySelector(".popup2");
  popup2.classList.add("active");
  overlay.classList.add("active");
});

function close2(popup2) {
  if (popup2 == null) return;
  popup2.classList.remove("active");
  overlay.classList.remove("active");
}

cancelbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup2 = button.closest(".popup2");
    close2(popup2);
  });
});

sourcebtn[2].addEventListener("click", () => {
  window.open(`${worksection[2].sourceLink}`, "_blank");
});

livebtn[2].addEventListener("click", () => {
  window.open(`${worksection[2].liveLink}`, "_blank");
});

seabtn[3].addEventListener("click", () => {
  const popup3 = document.querySelector(".popup3");
  popup3.classList.add("active");
  overlay.classList.add("active");
});

function close3(popup3) {
  if (popup3 == null) return;
  popup3.classList.remove("active");
  overlay.classList.remove("active");
}

cancelbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const popup3 = button.closest(".popup3");
    close3(popup3);
  });
});

sourcebtn[3].addEventListener("click", () => {
  window.open(`${worksection[3].sourceLink}`, "_blank");
});

livebtn[3].addEventListener("click", () => {
  window.open(`${worksection[3].liveLink}`, "_blank");
});
