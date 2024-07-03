document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // MENU
  document.querySelectorAll(".navbar-collapse a").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".navbar-collapse").classList.remove("show");
    });
  });

  // CUSTOM LINK
  document.querySelectorAll(".smoothscroll").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const el = document.querySelector(this.getAttribute("href"));
      const headerHeight = document.querySelector(".navbar").offsetHeight;

      scrollToDiv(el, headerHeight);
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

//ClICK SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const sectionArray = [1, 2, 3, 4, 5, 6];

  sectionArray.forEach((value, index) => {
    document.addEventListener("scroll", function () {
      const offsetSection =
        document.getElementById("section_" + value).getBoundingClientRect()
          .top +
        window.pageYOffset -
        83;
      const docScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const docScroll1 = docScroll + 1;

      if (docScroll1 >= offsetSection) {
        document
          .querySelectorAll(".navbar-nav .nav-item .nav-link")
          .forEach((link) => {
            link.classList.remove("active");
            link.classList.add("inactive");
          });
        document
          .querySelectorAll(".navbar-nav .nav-item .nav-link")
          [index].classList.add("active");
        document
          .querySelectorAll(".navbar-nav .nav-item .nav-link")
          [index].classList.remove("inactive");
      }
    });

    document
      .querySelectorAll(".click-scroll")
      [index].addEventListener("click", function (e) {
        const offsetClick =
          document.getElementById("section_" + value).getBoundingClientRect()
            .top +
          window.pageYOffset -
          83;
        e.preventDefault();
        window.scrollTo({
          top: offsetClick,
          behavior: "smooth",
        });
      });
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
