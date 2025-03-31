document.addEventListener("DOMContentLoaded", function () {
  function fullScreenMenu() {
    const section = document.querySelector(".fullscreen-menu__wrapper");
    if (section) {
      const navbar = document.querySelector(".header-navbar__wrapper");
      const openBtn = navbar.querySelector(".toggle-btn");
      const closeBtn = section.querySelector(".close-btn");
      const container = section.querySelector(".fullscreen-menu__container");

      gsap.set(container, {
        xPercent: 105,
      });

      function show() {
        gsap.to(section, {
          autoAlpha: 1,
          ease: "none",
          duration: 0.4,
        });
        gsap.to(container, {
          xPercent: 0,
          ease: "power3.out",
          delay: 0.25,
          duration: 0.4,
        });

        document.body.style.overflow = "hidden";

        openBtn.setAttribute("aria-expanded", "true");
      }

      function hide() {
        gsap.to(section, {
          autoAlpha: 0,
          ease: "none",
          delay: 0.25,
          duration: 0.4,
        });
        gsap.to(container, {
          xPercent: 105,
          ease: "power3",
          duration: 0.4,
        });

        document.body.style.overflow = "auto";

        openBtn.setAttribute("aria-expanded", "false");
      }

      openBtn.addEventListener("click", function () {
        show();
      });

      closeBtn.addEventListener("click", function () {
        hide();
      });
    }
  }
  fullScreenMenu();

  function animateStats() {
    const section = document.querySelector(".aboutpage-stats__container");
    if (section) {
      function animateNumbers() {
        const stats = [...section.querySelectorAll(".number")];

        stats.forEach((stat) => {
          const updateCounter = () => {
            let val = +stat.getAttribute("data-val");
            let curVal = +stat.innerText;
            let increment = val / 20;

            if (curVal < val) {
              if (Number.isInteger(val)) {
                stat.innerText = `${Math.ceil(curVal + increment)}`;
                setTimeout(updateCounter, 100);
              } else {
                stat.innerText = `${(curVal + increment).toFixed(2)}`;
                setTimeout(updateCounter, 150);

                if ((curVal + increment).toFixed(2) > val) {
                  stat.innerText = val;
                }
              }
            } else {
              stat.innerText = val;
            }
          };
          updateCounter();
        });
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        onEnter: () => {
          animateNumbers();
        },
      });
    }
  }
  animateStats();

  function productsPopUp() {
    const section = document.querySelector(".product-categories");
    if (section) {
      const products = [
        ...section.querySelectorAll(".single-product__container"),
      ];

      let activeTab = 0;

      products.forEach((product, i) => {
        const mainContainer = product.querySelector(".product__container");
        const popupContainer = product.querySelector(".product-popup__wrapper");
        const navContainer = product.querySelector(".navigation__container");

        const closeBtn = popupContainer.querySelector(".close-btn");
        const popupSlider = popupContainer.querySelector(
          ".popup-products-slider"
        );

        const prevBtn = navContainer.querySelector(".prev-btn");
        const nextBtn = navContainer.querySelector(".next-btn");

        const prevBtnContainer = navContainer.querySelector(
          ".prev-btn__container"
        );
        const nextBtnContainer = navContainer.querySelector(
          ".next-btn__container"
        );

        popupContainer.addEventListener("click", function (e) {
          if (e.target.classList.contains("navigation__container")) {
            gsap.to(popupContainer, {
              autoAlpha: 0,
              duration: 0.15,
              ease: "none",
            });

            activeTab = 0;

            document.body.style.overflow = "auto";
          }
        });

        if (i === 0) {
          gsap.to(prevBtnContainer, {
            autoAlpha: 0,
          });
        } else if (i === products.length - 1) {
          gsap.to(nextBtnContainer, {
            autoAlpha: 0,
          });
        }

        let productPopupSlider = new Swiper(popupSlider, {
          slidesPerView: 1,
          effect: "fade",
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        mainContainer.addEventListener("click", function (e) {
          e.preventDefault();

          document.body.style.overflow = "hidden";

          gsap.to(popupContainer, {
            autoAlpha: 1,
            duration: 0.15,
            ease: "none",
          });

          activeTab = i;
        });

        closeBtn.addEventListener("click", function () {
          gsap.to(popupContainer, {
            autoAlpha: 0,
            duration: 0.15,
            ease: "none",
          });

          activeTab = 0;

          document.body.style.position = "relative";
          document.body.style.overflow = "auto";
        });

        window.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            gsap.to(popupContainer, {
              autoAlpha: 0,
              duration: 0.15,
              ease: "none",
            });

            activeTab = 0;

            document.body.style.position = "relative";
            document.body.style.overflow = "auto";
          }
        });

        if (prevBtn) {
          prevBtn.addEventListener("click", function () {
            gsap.to(
              products[activeTab - 1].querySelector(".product-popup__wrapper"),
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0,
                ease: "none",
              }
            );

            gsap.to(popupContainer, {
              autoAlpha: 0,
              scale: 1,
              duration: 0,
              ease: "none",
            });

            activeTab = activeTab - 1;
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener("click", function () {
            gsap.to(
              products[activeTab + 1].querySelector(".product-popup__wrapper"),
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0,
                ease: "none",
              }
            );

            gsap.to(popupContainer, {
              autoAlpha: 0,
              scale: 1,
              duration: 0,
              ease: "none",
            });

            activeTab = activeTab + 1;
          });
        }
      });
    }
  }
  productsPopUp();

  function validateContactForm() {
    // Get the form element
    const form = document.querySelector(".form");

    // Listen for form submission
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting if validation fails
      event.preventDefault();

      // Clear previous error messages
      clearErrors();

      // Validate form fields
      const isValid = validateForm();

      // If form is valid, submit the form
      if (isValid) {
        // Form is valid, submit the form here (or handle further actions)
        alert("Form submitted successfully!");
        form.submit();
      }
    });

    function validateForm() {
      let valid = true;

      // Validate Name field
      const name = document.getElementById("name");
      if (!name.value.trim()) {
        showError(name, "Name is required.");
        valid = false;
      }

      // Validate Email field
      const email = document.getElementById("email");
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.value.trim()) {
        showError(email, "Email is required.");
        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }

      // Validate Phone field
      const phone = document.getElementById("phone");
      const phonePattern = /^[0-9]{10}$/; // Example: Validating a 10-digit phone number
      if (!phone.value.trim()) {
        showError(phone, "Phone Number is required.");
        valid = false;
      } else if (phone.value && !phonePattern.test(phone.value.trim())) {
        showError(phone, "Please enter a valid 10-digit phone number.");
        valid = false;
      }

      // Validate Comments field (optional, but can be required if needed)
      const comments = document.getElementById("description");
      if (comments.value.length > 500) {
        showError(comments, "Comments cannot exceed 500 characters.");
        valid = false;
      }

      return valid;
    }

    // Function to show error messages
    function showError(input, message) {
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = message;

      // Insert the error message after the input
      input.parentElement.appendChild(errorMessage);
    }

    // Function to clear all error messages
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(function (error) {
        error.remove();
      });
    }
  }
  // validateContactForm();

  function disableRightClick() {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
  // disableRightClick();

  function handle404() {
    const currentPath = window.location.pathname;

    const knownPages = [
      "/index.html",
      "/src/pages/about-us.html",
      "/src/pages/products.html",
      "/src/pages/services.html",
      "/src/pages/contact-us.html",
    ];

    if (!knownPages.includes(currentPath)) {
      window.location.href = "../../src/pages/404.html";
      console.log("page");
    }
  }
  // handle404();
});

/*
add images and content
responsive --
semantic tags --
add partners in about --
add products popup in home --
check overall font and styles
work on products popup on service page --
change slug --
disable right click except contact --
*/
