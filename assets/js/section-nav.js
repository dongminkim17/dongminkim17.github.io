document.addEventListener("DOMContentLoaded", () => {
  const sectionItems = document.querySelectorAll("[data-section-nav]");

  if (!sectionItems.length) {
    return;
  }

  const normalizePath = (path) => path.replace(/\/index\.html$/, "/");
  const aboutLink = document.querySelector('[data-section-nav="about"] a');

  if (!aboutLink || normalizePath(window.location.pathname) !== normalizePath(aboutLink.pathname)) {
    return;
  }

  const setActiveSection = (section) => {
    sectionItems.forEach((item) => {
      item.classList.toggle("active", item.dataset.sectionNav === section);
    });
  };

  const updateActiveSection = () => {
    const section = window.location.hash.replace("#", "") || "about";

    if (["about", "news", "publication"].includes(section)) {
      setActiveSection(section);
    }
  };

  sectionItems.forEach((item) => {
    item.addEventListener("click", () => setActiveSection(item.dataset.sectionNav));
  });

  updateActiveSection();
  window.addEventListener("hashchange", updateActiveSection);
});
