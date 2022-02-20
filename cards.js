const d = document;

const $template = d.querySelector("template").content;
const $fragment = d.createDocumentFragment();
const $containerCards = d.querySelector(".container-cards");

const arrayPersonas = [
  {
    name: "Lionel Messi",
    title: "Soccer Player",
    buttontext: "Follow",
    avatar: "items/img-messi.jpg",
  },
  {
    name: "Saul Canelo Alvarez",
    title: "Professional Boxing",
    buttontext: "Unfollow",
    avatar: "items/img-canelo.jpg",
  },
  {
    name: "Daniel Habif",
    title: "Lecturer and Speaker",
    buttontext: "View Proyect",
    avatar: "items/img-habif.jpg",
  },
  {
    name: "Jonathan Mircha",
    title: "Web Developer",
    buttontext: "Hire",
    avatar: "items/img-mircha.jpg",
  },
  {
    name: "Bear Grylls",
    title: "Adventurer",
    buttontext: "Add Friend",
    avatar: "items/img-bear.webp",
  },
  {
    name: "Pablo Imhoff",
    title: "Youtuber",
    buttontext: "Follow",
    avatar: "items/img-imhoff.jpg",
  },
  {
    name: "Justin Bieber",
    title: "Singer",
    buttontext: "Unfollow",
    avatar: "items/img-justin.jpg",
  },
  {
    name: "Dwayne Johnson",
    title: "Actor",
    buttontext: "Hire",
    avatar: "items/la-roca.jpg",
  },
  {
    name: "Rafael Nadal",
    title: "Tennis Player",
    buttontext: "Add Friend",
    avatar: "items/img-nadal.jpg",
  },
];

arrayPersonas.forEach((el) => {
  $template.querySelector(".img-card").setAttribute("src", `${el.avatar}`);
  $template.querySelector("h4").textContent = `${el.name}`;
  $template.querySelector("div.text-card").textContent = `${el.title}`;
  $template.querySelector("button").textContent = `${el.buttontext}`;

  let $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
});

$containerCards.appendChild($fragment);

const $arrayBtns = d.querySelectorAll("button");

$arrayBtns.forEach((el) => {
  if (el.textContent === "Follow") {
    el.innerHTML = `
    <i class="fa-solid fa-user-plus"></i> 
    Follow
    `;
    el.style.setProperty("background-color", "rgb(40, 167, 71)");
  }
  if (el.textContent === "Unfollow") {
    el.innerHTML = `
    <i class="fa-solid fa-minus"></i>
    Unfollow
    `;
    el.style.setProperty("background-color", "rgb(220, 53, 70)");
  }
  if (el.textContent === "Add Friend") {
    el.innerHTML = `
    <i class="fa-solid fa-user-plus"></i> 
    Add Friend
    `;
    el.style.setProperty("background-color", "rgb(0, 122, 254)");
  }
  if (el.textContent === "Hire") {
    el.innerHTML = `
    <i class="fa-solid fa-plus"></i>
    Hire
    `;
    el.style.setProperty("background-color", "rgb(50, 57, 63)");
  }
  if (el.textContent === "View Proyect") {
    el.innerHTML = `
    <i class="fa-solid fa-briefcase"></i>   
    View Proyect
    `;
    el.style.setProperty("background-color", "rgb(0, 122, 254)");
  }
});
