const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];
console.log(teamMembers);

const container = document.querySelector(".row");
teamMembers.forEach((member) => {
  const card = document.createElement("div");
  card.classList.add("col", "mb-4");

  card.innerHTML = `
<div class="card mb-3">
  <div class="row bg-dark text-white">
    <div class="col-md-4 p-0">
        <img src="./assets/${member.img}" class="card-img" alt="${member.name}">
      </div>
      <div class="col-md-8">
        <p class="card-name m-0 fw-bold">${member.name}</p>
        <p class="card-role">${member.role}</p>
        <p class="card-email text-primary">${member.email}</p>
      </div>
    </div>
  </div>
  `;
  container.appendChild(card);
});
