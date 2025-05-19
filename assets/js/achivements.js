document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".projectcards");
  const fragment = document.createDocumentFragment();

  // Header section
  const headerDiv = document.createElement("div");
  headerDiv.style.width = "100%";
  headerDiv.style.textAlign = "center";
  headerDiv.style.margin = "20px 0";

  const headerH1 = document.createElement("h1");
  headerH1.style.fontWeight = "bold";
  headerH1.textContent = "My Achivements🏆";
  headerDiv.appendChild(headerH1);
  fragment.appendChild(headerDiv);

  // Group projects by year programmatically (you no longer need manual filtering)
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

  // Create a grouped object of projects by year
  const groupedProjects = projects.reduce((acc, project) => {
    (acc[project.year] = acc[project.year] || []).push(project);
    return acc;
  }, {});

  // Optionally, sort the years descending
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => b - a);

  // Render the groups
  sortedYears.forEach((year) => {
    // Year header
    const yearHeader = document.createElement("div");
    yearHeader.style.width = "100%";
    yearHeader.style.textAlign = "center";
    yearHeader.style.margin = "50px 0";

    const yearH1 = document.createElement("h1");
    yearH1.style.fontWeight = "bold";
    yearH1.textContent = year;
    yearHeader.appendChild(yearH1);
    fragment.appendChild(yearHeader);

    // Render each project for the year
    groupedProjects[year].forEach((project) => {
      const card = document.createElement("div");
      card.className = "column skill-card card";
      card.style.margin = "15px";
      card.dataset.aos = "zoom-in-up";
      card.dataset.aosEasing = "linear";
      card.dataset.aosDelay = "300";
      card.dataset.aosDuration = "600";

      const wrapper = document.createElement("div");
      wrapper.className = "wrapper";
      // Use inline background image for now or consider switching to an <img> tag with lazy loading
      wrapper.style.background = `url(${project.cardImage}) center / cover no-repeat`;

      // Create inner elements
      const headerDiv = document.createElement("div");
      headerDiv.className = "header";

      const dataDiv = document.createElement("div");
      dataDiv.className = "data";

      const contentDiv = document.createElement("div");
      contentDiv.className = "content";

      const titleDiv = document.createElement("div");
      titleDiv.className = "title-div";

      const hTitle = document.createElement("h1");
      hTitle.className = "title";

      const a = document.createElement("a");
      a.href = "#";
      a.textContent = project.title;

      hTitle.appendChild(a);
      titleDiv.appendChild(hTitle);
      contentDiv.appendChild(titleDiv);
      dataDiv.appendChild(contentDiv);
      wrapper.appendChild(headerDiv);
      wrapper.appendChild(dataDiv);
      card.appendChild(wrapper);
      fragment.appendChild(card);
    });
  });

  container.appendChild(fragment);

  // Refresh AOS once content is loaded
  AOS.refresh();
});
