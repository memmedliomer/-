// Initialize AOS (Animate on Scroll) library
AOS.init({
  // Optimize AOS settings for better performance
  disable: window.innerWidth < 768, // Disable on mobile
  once: true, // Animations occur only once
  mirror: false // No re-animation when scrolling back up
});

// Get the container for project cards
const projectcards = document.querySelector(".projectcards");

// Array of objects for projects (kept as is for your content)
const projects = [
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

// Group projects by year for more efficient rendering
const projectsByYear = {};
projects.forEach(project => {
  if (!projectsByYear[project.year]) {
    projectsByYear[project.year] = [];
  }
  projectsByYear[project.year].push(project);
});

// Function for rendering project cards data with performance optimizations
const showCards = () => {
  // Clear any existing content
  projectcards.innerHTML = '';
  
  // Create main header
  const mainHeader = document.createElement('div');
  mainHeader.style.width = '100%';
  mainHeader.style.textAlign = 'center';
  mainHeader.style.margin = '20px 0';
  mainHeader.innerHTML = '<h1 style="font-weight: bold;">My Achievements🏆</h1>';
  projectcards.appendChild(mainHeader);

  // Sort years in descending order
  const years = Object.keys(projectsByYear).sort((a, b) => b - a);
  
  // Render each year section
  years.forEach(year => {
    // Create year header
    const yearHeader = document.createElement('div');
    yearHeader.style.width = '100%';
    yearHeader.style.textAlign = 'center';
    yearHeader.style.margin = '50px 0';
    yearHeader.innerHTML = `<h1 style="font-weight: bold;">${year}</h1>`;
    projectcards.appendChild(yearHeader);
    
    // Create a fragment to batch append cards for this year
    const fragment = document.createDocumentFragment();
    
    // Add cards for this year
    projectsByYear[year].forEach(project => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'column skill-card card';
      cardDiv.style.margin = '15px';
      cardDiv.dataset.aos = 'zoom-in-up';
      cardDiv.dataset.aosEasing = 'linear';
      cardDiv.dataset.aosDelay = '300';
      cardDiv.dataset.aosDuration = '600';
      
      cardDiv.innerHTML = `
        <div class="wrapper" style="background: url(${project.cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${project.title}</a></h1>
              </div>
            </div>
          </div>
        </div>
      `;
      
      fragment.appendChild(cardDiv);
    });
    
    // Append all cards for this year at once (better performance)
    projectcards.appendChild(fragment);
  });
};

// Add event listener for search functionality
document.getElementById("myInput").addEventListener("input", myFunction);

// Optimize search function
function myFunction() {
  const input = document.getElementById("myInput").value.toUpperCase();
  const cards = document.getElementsByClassName("card");
  
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector(".title");
    if (title && title.textContent.toUpperCase().includes(input)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Load cards when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showCards);
} else {
  // DOM is already ready
  showCards();
}

// Implement lazy loading of images
document.addEventListener('DOMContentLoaded', function() {
  // Set a small timeout to let the initial render complete
  setTimeout(() => {
    const wrappers = document.querySelectorAll('.wrapper');
    wrappers.forEach(wrapper => {
      const bgUrl = wrapper.style.backgroundImage;
      // Remove the background image initially
      wrapper.style.backgroundImage = 'none';
      
      // Add a placeholder color
      wrapper.style.backgroundColor = '#f0f0f0';
      
      // Create an image to preload
      const img = new Image();
      img.onload = function() {
        // Once loaded, apply the background image
        wrapper.style.backgroundImage = bgUrl;
        wrapper.style.backgroundColor = '';
      };
      
      // Extract the URL from the background-image style
      const url = bgUrl.replace(/url\(['"]?([^'"]*)['"]?\)/i, '$1');
      img.src = url;
    });
  }, 100);
});
