const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamCard = document.getElementById("team-card");

const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const { name, role, email, img } = teamMembers[i];
    const card =
    `<div class="col card bg-black">
         <div class="row gap-5">
           <div class="col-auto ps-0 ">
               <img src="${img}" alt="${name}">
            </div>
            <div class="col">
              <h5 class="card-title">${name}</h5>
              <p class="card-text role">${role}</p>
              <p class="card-text email">${email}</p>
            </div>
         </div>
      </div>`




    items += card;
  }
  teamCard.innerHTML = items;
};
renderTeam()