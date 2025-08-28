AOS.init();

/* Project Card */
const projectcardsContainer = document.querySelector(".projectcards"); // Renamed for clarity

// Array of objects for projects
const projects = [
  { title: "Milli Hakaton\n    Olimpiada Mərhələsi uğurla tamamlama! Sertifikatı.", cardImage: "assets/images/project-page/30.png", year: "2025" },
  { title: "World Robotics Championship\n    Finalist Sertifikatı.", cardImage: "assets/images/project-page/29.jpg", year: "2025" },
  { title: "ADA AI challeenge\n    İştirak Sertifikatı.", cardImage: "assets/images/project-page/28.jpg", year: "2025" },
  { title: "Milli Hakaton\n    Seçim Mərhələsi uğurla tamamlama!", cardImage: "assets/images/project-page/27.png", year: "2025" },
  { title: "IWISE Olimpiyadası\n    III yer", cardImage: "assets/images/project-page/26.png", year: "2025" },
  { title: "STEAM-7\n    Sərgi çıxışçısı.", cardImage: "assets/images/project-page/28.png", year: "2025" },
  { title: "SAF24\n    II yer", cardImage: "assets/images/project-page/25.png", year: "2024" },
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

// Function to create a single project card element
const createProjectCard = ({ title, cardImage }) => {
  const colDiv = document.createElement("div");
  // Assuming you use Bootstrap or a similar grid system. Adjust classes as needed.
  colDiv.className = "col-lg-4 col-md-6 col-sm-12 mb-4"; // mb-4 for margin-bottom

  const cardDiv = document.createElement("div");
  cardDiv.className = "card project-card h-100"; // 'project-card' for specific targeting, h-100 for equal height if desired
  cardDiv.setAttribute("data-aos", "fade-up"); // Keep your AOS animation

  const img = document.createElement("img");
  img.src = cardImage;
  img.alt = title.split('\n')[0].trim(); // Use the first line of the title as alt text
  img.className = "card-img-top";
  img.loading = "lazy"; // CRITICAL: Native lazy loading for images

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title title"; // Keep 'title' class for your search function
  cardTitle.style.whiteSpace = "pre-line"; // Respects newline characters in the title
  cardTitle.textContent = title;

  // === YENİ EKLENEN STİLLER ===
  cardTitle.style.color = "#000000"; // Yazı rengini tam siyah yapar
  cardTitle.style.fontWeight = "bold"; // Yazıyı kalınlaştırır
  // İsteğe bağlı: Yazı tipi boyutunu biraz artırmak isterseniz aşağıdaki satırı aktifleştirin
  // cardTitle.style.fontSize = "1.1rem";
  // === /YENİ EKLENEN STİLLER ===

  cardBody.appendChild(cardTitle);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);

  return colDiv;
};

// Function for rendering project cards data
const showCards = () => {
  if (!projectcardsContainer) {
    console.error("Element with class 'projectcards' not found.");
    return;
  }

  // Use a DocumentFragment for better performance when adding multiple elements
  const fragment = document.createDocumentFragment();

  // Add "My Achievements" header
  const mainHeader = document.createElement("h1");
  // Adjust classes based on your styling framework (e.g., Bootstrap)
  mainHeader.className = "col-12 text-center text-uppercase my-4";
  mainHeader.textContent = "My Achievements 🏆";
  fragment.appendChild(mainHeader);

  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  // Get sorted years in descending order
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  // Render projects for each year
  sortedYears.forEach(year => {
    const yearSectionContainer = document.createElement("div");
    yearSectionContainer.className = "year-section mb-5"; // Container for a year's projects

    const yearHeader = document.createElement("h2");
    yearHeader.className = "text-center year-title mb-4"; // Styling for the year
    yearHeader.textContent = year;
    yearSectionContainer.appendChild(yearHeader);

    const yearProjectsRow = document.createElement("div");
    yearProjectsRow.className = "row justify-content-center"; // Bootstrap row for cards

    projectsByYear[year].forEach(project => {
      const cardElement = createProjectCard(project);
      yearProjectsRow.appendChild(cardElement);
    });

    yearSectionContainer.appendChild(yearProjectsRow);
    fragment.appendChild(yearSectionContainer);
  });

  // Clear previous content and append the new fragment once
  projectcardsContainer.innerHTML = "";
  projectcardsContainer.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", showCards);

// Debounce function to limit the rate at which a function can fire.
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Optimized search function
function myFunction() {
  const inputElement = document.getElementById("myInput");
  if (!inputElement) {
    console.error("Input element with ID 'myInput' not found.");
    return;
  }
  const filterText = inputElement.value.toUpperCase();
  
  // Get all project cards. Ensure 'project-card' class is on the card element itself.
  const cards = projectcardsContainer.getElementsByClassName("project-card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const titleElement = card.querySelector(".title"); // Get title within the current card
    
    if (titleElement) {
      const titleText = titleElement.textContent || titleElement.innerText;
      // The card's parent is the column div (e.g., .col-lg-4)
      // We hide/show the column div to maintain layout structure.
      const columnWrapper = card.parentElement; 
      if (columnWrapper) { // Check if parentElement exists
          if (titleText.toUpperCase().includes(filterText)) {
            columnWrapper.style.display = "";
          } else {
            columnWrapper.style.display = "none";
          }
      }
    }
  }
}

// Add debounced event listener for the search input
const searchInput = document.getElementById("myInput");
if (searchInput) {
  searchInput.addEventListener("keyup", debounce(myFunction, 300)); // 300ms delay
} else {
  // Fallback if script runs before 'myInput' is in DOM (though DOMContentLoaded should handle showCards)
  document.addEventListener('DOMContentLoaded', () => {
    const inputElem = document.getElementById("myInput");
    if (inputElem) {
      inputElem.addEventListener("keyup", debounce(myFunction, 300));
    } else {
      console.warn("Search input with ID 'myInput' was not found.");
    }
  });
}
