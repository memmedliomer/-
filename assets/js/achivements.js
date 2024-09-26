AOS.init();
/* Project Card */

const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  {
    title: "SafeOrbitNet\nMobil Application",
    cardImage: "assets/images/project-page/1.png",
  },
  {
    title: "Line Follower Robot",
    cardImage: "assets/images/project-page/2.png",
  },
  {
    title: "Third Project",
    cardImage: "assets/images/project-page/3.png", // Üçüncü resim
  },
  {
    title: "Fourth Project",
    cardImage: "assets/images/project-page/4.png", // Dördüncü resim
  },
  {
    title: "Fifth Project",
    cardImage: "assets/images/project-page/5.png", // Beşinci resim
  },
];

// Function for rendering project cards data
const showCards = () => {
  let output = "";
  
  // İlk iki projeyi göster
  projects.slice(0, 2).forEach(({ title, cardImage }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <ul class="menu-content"><br></ul>
              </div>
            </div>
          </div>
        </div>`;
  });

  // 2025 yazısını iki resmin altına ortala
  output += `
    <div style="width: 100%; text-align: center; margin: 50px 0;">
      <h1 style="font-size: 36px; color: white;">2025</h1>
    </div>`;

  // Üçüncü ve diğer projeleri göster (2025 yazısının altında)
  projects.slice(2).forEach(({ title, cardImage }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <ul class="menu-content"><br></ul>
              </div>
            </div>
          </div>
        </div>`;
  });

  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
