AOS.init();
/* Project Card */

const projectcards = document.querySelector(".projectcards");

// Array of objects for projects
const projects = [
  { title: "IWISE Olimpiyadası\n    III yer", cardImage: "assets/images/project-page/25.png", year: "2025" },
  { title: "SAF24\n    II yer", cardImage: "assets/images/project-page/24.png", year: "2024" },
  { title: "Gənc Proqramçılar\n    Müsabiqəsi", cardImage: "assets/images/project-page/22.png", year: "2024" },
  { title: "İTi Zəka Hakaton\n      Finalistlik", cardImage: "assets/images/project-page/21.png", year: "2024" },
  { title: "İDDA Cup Finalistlik", cardImage: "assets/images/project-page/20.png", year: "2024" },
  { title: "Aerokosmik Modelçilik\n  Festivalı İştirakı", cardImage: "assets/images/project-page/19.png", year: "2024" },
  
  { title: "Beynəlxalq SAFSTEAM2023\n     III yer", cardImage: "assets/images/project-page/18.png", year: "2023" },
  { title: "Dünya Robot Olimpiadası\n      Fİnalistik", cardImage: "assets/images/project-page/17.png", year: "2023" },
  { title: "EAS Üzgüçülük Yarışı\n      III yer", cardImage: "assets/images/project-page/16.png", year: "2023" },
  { title: "Şosse Velosiped Yarışı\n         II yer", cardImage: "assets/images/project-page/15.png", year: "2023" },
  { title: "Trek Velosiped Yarışı\n      III yer", cardImage: "assets/images/project-page/14.png", year: "2023" },
  { title: "7 möhür altında\n   İştirak", cardImage: "assets/images/project-page/13.png", year: "2023" },
  { title: "500M Velosiped Yarışı\n  IV yer Fərqlənmə", cardImage: "assets/images/project-page/12.png", year: "2023" },
  
  { title: "Tədbirlərdə Fəal\n    İştirak", cardImage: "assets/images/project-page/11.png", year: "2022" },
  { title: "Beynəlxalq STEM Olimpiadası\n              Dijital III yer", cardImage: "assets/images/project-page/10.png", year: "2022" },
  { title: "Kimya və Yaşam konferansı\n  Çıxışçı", cardImage: "assets/images/project-page/9.png", year: "2022" },
  
  { title: "Kenquru Müsabiqəsi\n    İştirak", cardImage: "assets/images/project-page/8.png", year: "2021" },
  { title: "Tədbirdə İştirak", cardImage: "assets/images/project-page/7.png", year: "2021" },
  { title: "Zəfər Kursları\n  Sınaq yüksək nəticə", cardImage: "assets/images/project-page/6.png", year: "2021" },
  { title: "Zəfər Kursları\n  Sınaq yüksək nəticə", cardImage: "assets/images/project-page/5.png", year: "2021" },
  
  { title: "Mars Academy\n  Uğurlu tamamlama", cardImage: "assets/images/project-page/4.png", year: "2020" },
  
  { title: "4-cü Sinif\n  Uğurla bitirmə", cardImage: "assets/images/project-page/3.png", year: "2019" },
  
  { title: "2-cü Sinif\n  Uğurla bitirmə", cardImage: "assets/images/project-page/2.png", year: "2017" },
  
  { title: "Məktəbəqədər \nUğurla bitirmə", cardImage: "assets/images/project-page/1.png", year: "2015" },
];

// Function for rendering project cards data
const showCards = () => {
  let output = `
    <div style="width: 100%; text-align: center; margin: 20px 0;">
      <h1 style="font-weight: bold;">My Achivements🏆</h1>
    </div>`; // Added My Projects header

  // Function to group projects by year and render them
  const renderProjectsForYear = (year, projects) => {
    output += `
      <div style="width: 100%; text-align: center; margin: 50px 0;">
        <h1 style="font-weight: bold;">${year}</h1>
      </div>`;

    projects.forEach(({ title, cardImage }) => {
      output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });
  };

  // Render projects by year
  renderProjectsForYear("2025", projects.filter(p => p.year === "2025"));
  renderProjectsForYear("2024", projects.filter(p => p.year === "2024"));
  renderProjectsForYear("2023", projects.filter(p => p.year === "2023"));
  renderProjectsForYear("2022", projects.filter(p => p.year === "2022"));
  renderProjectsForYear("2021", projects.filter(p => p.year === "2021"));
  renderProjectsForYear("2020", projects.filter(p => p.year === "2020"));
  renderProjectsForYear("2019", projects.filter(p => p.year === "2019"));
  renderProjectsForYear("2017", projects.filter(p => p.year === "2017"));
  renderProjectsForYear("2015", projects.filter(p => p.year === "2015"));

  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all cards, and hide those who don't match the search query
  for (i = 0; i < card.length; i++) {
    if (
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
