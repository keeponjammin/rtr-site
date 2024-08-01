document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // MENU
  const navbarCollapseLinks = document.querySelectorAll(".navbar-collapse a");
  const toggler = document.querySelector(".navbar-toggler");
  navbarCollapseLinks.forEach((item) => {
    item.addEventListener("click", function () {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse) {
        navbarCollapse.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  // CUSTOM LINK
  const smoothScrollLinks = document.querySelectorAll(".smoothscroll");
  smoothScrollLinks.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const el = document.querySelector(href);
      if (el) {
        const headerHeight = document.querySelector(".navbar").offsetHeight;
        scrollToDiv(el, headerHeight);
      }
    });
  });

  function scrollToDiv(element, navHeight) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    const totalScroll = offsetTop - navHeight;
    window.scrollTo({
      top: totalScroll,
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sectionArray = [1, 2, 3, 4, 5, 6];
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
  const clickScrollElements = document.querySelectorAll(".click-scroll");

  // Single scroll event listener
  document.addEventListener("scroll", function () {
    let activeIndex = -1; // Default to -1 if no sections match
    sectionArray.forEach((value, index) => {
      const section = document.getElementById("section_" + value);
      if (section) {
        const offsetSection =
          section.getBoundingClientRect().top + window.pageYOffset - 83;
        const docScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (docScroll + 1 >= offsetSection) {
          activeIndex = index;
        }
      }
    });

    // Update link states based on activeIndex
    navLinks.forEach((link, index) => {
      link.classList.remove("active", "inactive");
      if (index === activeIndex) {
        link.classList.add("active");
      } else {
        link.classList.add("inactive");
      }
    });
  });

  // Attach click event listeners
  clickScrollElements.forEach((element, index) => {
    if (sectionArray[index] !== undefined) {
      // Check if corresponding section exists
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.getElementById(
          "section_" + sectionArray[index]
        );
        if (section) {
          const offsetClick =
            section.getBoundingClientRect().top + window.pageYOffset - 83;
          window.scrollTo({
            top: offsetClick,
            behavior: "smooth",
          });
        }
      });
    }
  });

  // Initial state
  document
    .querySelectorAll(".navbar-nav .nav-item .nav-link")
    .forEach((link) => {
      link.classList.add("inactive");
    });
  document
    .querySelectorAll(".navbar-nav .nav-item .nav-link")[0]
    .classList.add("active");
  document
    .querySelectorAll(".navbar-nav .nav-item .nav-link")[0]
    .classList.remove("inactive");
});

//STICKY
// Define the Sticky class
class Sticky {
  constructor(element, options) {
    this.element = element;
    this.options = Object.assign(
      {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: false,
        getWidthFrom: "",
        widthFromWrapper: true,
        responsiveWidth: false,
      },
      options
    );
    this.init();
  }

  init() {
    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("class", this.options.wrapperClassName);
    this.element.parentNode.insertBefore(this.wrapper, this.element);
    this.wrapper.appendChild(this.element);

    this.calculateWidth();
    this.setWrapperHeight();

    window.addEventListener("scroll", this.scrollCheck.bind(this));
    window.addEventListener("resize", this.resize.bind(this));

    this.scrollCheck();
  }

  calculateWidth() {
    let width = null;
    if (this.options.getWidthFrom) {
      width = document.querySelector(this.options.getWidthFrom).offsetWidth;
    } else if (this.options.widthFromWrapper) {
      width = this.wrapper.offsetWidth;
    }
    if (width !== null) {
      this.element.style.width = `${width}px`;
    }
  }

  setWrapperHeight() {
    this.wrapper.style.height = `${this.element.offsetHeight}px`;
  }

  scrollCheck() {
    const elementTop =
      this.wrapper.getBoundingClientRect().top + window.pageYOffset;
    const isActive = elementTop - this.options.topSpacing < window.pageYOffset;

    if (isActive) {
      this.element.classList.add(this.options.className);
      this.element.style.position = "fixed";
      this.element.style.top = `${this.options.topSpacing}px`;
    } else {
      this.element.classList.remove(this.options.className);
      this.element.style.position = "";
      this.element.style.top = "";
    }
  }

  resize() {
    this.calculateWidth();
    this.setWrapperHeight();
    this.scrollCheck();
  }

  update() {
    this.scrollCheck();
  }

  unstick() {
    this.element.parentNode.removeChild(this.wrapper);
    this.element.style.width = "";
    this.element.style.position = "";
    this.element.style.top = "";
    this.element.classList.remove(this.options.className);
  }
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  new Sticky(navbar, { topSpacing: 0 });
});
