/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.addEventListener("DOMContentLoaded", function () {
  function fullScreenMenu() {
    var section = document.querySelector(".fullscreen-menu__wrapper");
    if (section) {
      var show = function show() {
        gsap.to(section, {
          autoAlpha: 1,
          ease: "none",
          duration: 0.4
        });
        gsap.to(container, {
          xPercent: 0,
          ease: "power3.out",
          delay: 0.25,
          duration: 0.4
        });
        document.body.style.overflow = "hidden";
        openBtn.setAttribute("aria-expanded", "true");
      };
      var hide = function hide() {
        gsap.to(section, {
          autoAlpha: 0,
          ease: "none",
          delay: 0.25,
          duration: 0.4
        });
        gsap.to(container, {
          xPercent: 105,
          ease: "power3",
          duration: 0.4
        });
        document.body.style.overflow = "auto";
        openBtn.setAttribute("aria-expanded", "false");
      };
      var navbar = document.querySelector(".header-navbar__wrapper");
      var openBtn = navbar.querySelector(".toggle-btn");
      var closeBtn = section.querySelector(".close-btn");
      var container = section.querySelector(".fullscreen-menu__container");
      gsap.set(container, {
        xPercent: 105
      });
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
    var section = document.querySelector(".aboutpage-stats__container");
    if (section) {
      var animateNumbers = function animateNumbers() {
        var stats = _toConsumableArray(section.querySelectorAll(".number"));
        stats.forEach(function (stat) {
          var updateCounter = function updateCounter() {
            var val = +stat.getAttribute("data-val");
            var curVal = +stat.innerText;
            var increment = val / 20;
            if (curVal < val) {
              if (Number.isInteger(val)) {
                stat.innerText = "".concat(Math.ceil(curVal + increment));
                setTimeout(updateCounter, 100);
              } else {
                stat.innerText = "".concat((curVal + increment).toFixed(2));
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
      };
      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        onEnter: function onEnter() {
          animateNumbers();
        }
      });
    }
  }
  animateStats();
  function productsPopUp() {
    var section = document.querySelector(".product-categories");
    if (section) {
      var products = _toConsumableArray(section.querySelectorAll(".single-product__container"));
      var activeTab = 0;
      products.forEach(function (product, i) {
        var mainContainer = product.querySelector(".product__container");
        var popupContainer = product.querySelector(".product-popup__wrapper");
        var navContainer = product.querySelector(".navigation__container");
        var closeBtn = popupContainer.querySelector(".close-btn");
        var popupSlider = popupContainer.querySelector(".popup-products-slider");
        var prevBtn = navContainer.querySelector(".prev-btn");
        var nextBtn = navContainer.querySelector(".next-btn");
        var prevBtnContainer = navContainer.querySelector(".prev-btn__container");
        var nextBtnContainer = navContainer.querySelector(".next-btn__container");
        popupContainer.addEventListener("click", function (e) {
          if (e.target.classList.contains("navigation__container")) {
            gsap.to(popupContainer, {
              autoAlpha: 0,
              duration: 0.15,
              ease: "none"
            });
            activeTab = 0;
            document.body.style.overflow = "auto";
          }
        });
        if (i === 0) {
          gsap.to(prevBtnContainer, {
            autoAlpha: 0
          });
        } else if (i === products.length - 1) {
          gsap.to(nextBtnContainer, {
            autoAlpha: 0
          });
        }
        var productPopupSlider = new Swiper(popupSlider, {
          slidesPerView: 1,
          effect: "fade",
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
        mainContainer.addEventListener("click", function (e) {
          e.preventDefault();
          document.body.style.overflow = "hidden";
          gsap.to(popupContainer, {
            autoAlpha: 1,
            duration: 0.15,
            ease: "none"
          });
          activeTab = i;
        });
        closeBtn.addEventListener("click", function () {
          gsap.to(popupContainer, {
            autoAlpha: 0,
            duration: 0.15,
            ease: "none"
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
              ease: "none"
            });
            activeTab = 0;
            document.body.style.position = "relative";
            document.body.style.overflow = "auto";
          }
        });
        if (prevBtn) {
          prevBtn.addEventListener("click", function () {
            gsap.to(products[activeTab - 1].querySelector(".product-popup__wrapper"), {
              autoAlpha: 1,
              scale: 1,
              duration: 0,
              ease: "none"
            });
            gsap.to(popupContainer, {
              autoAlpha: 0,
              scale: 1,
              duration: 0,
              ease: "none"
            });
            activeTab = activeTab - 1;
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener("click", function () {
            gsap.to(products[activeTab + 1].querySelector(".product-popup__wrapper"), {
              autoAlpha: 1,
              scale: 1,
              duration: 0,
              ease: "none"
            });
            gsap.to(popupContainer, {
              autoAlpha: 0,
              scale: 1,
              duration: 0,
              ease: "none"
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
    var form = document.querySelector(".form");

    // Listen for form submission
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting if validation fails
      event.preventDefault();

      // Clear previous error messages
      clearErrors();

      // Validate form fields
      var isValid = validateForm();

      // If form is valid, submit the form
      if (isValid) {
        // Form is valid, submit the form here (or handle further actions)
        alert("Form submitted successfully!");
        form.submit();
      }
    });
    function validateForm() {
      var valid = true;

      // Validate Name field
      var name = document.getElementById("name");
      if (!name.value.trim()) {
        showError(name, "Name is required.");
        valid = false;
      }

      // Validate Email field
      var email = document.getElementById("email");
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.value.trim()) {
        showError(email, "Email is required.");
        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }

      // Validate Phone field
      var phone = document.getElementById("phone");
      var phonePattern = /^[0-9]{10}$/; // Example: Validating a 10-digit phone number
      if (!phone.value.trim()) {
        showError(phone, "Phone Number is required.");
        valid = false;
      } else if (phone.value && !phonePattern.test(phone.value.trim())) {
        showError(phone, "Please enter a valid 10-digit phone number.");
        valid = false;
      }

      // Validate Comments field (optional, but can be required if needed)
      var comments = document.getElementById("description");
      if (comments.value.length > 500) {
        showError(comments, "Comments cannot exceed 500 characters.");
        valid = false;
      }
      return valid;
    }

    // Function to show error messages
    function showError(input, message) {
      var errorMessage = document.createElement("div");
      errorMessage.classList.add("error-message");
      errorMessage.textContent = message;

      // Insert the error message after the input
      input.parentElement.appendChild(errorMessage);
    }

    // Function to clear all error messages
    function clearErrors() {
      var errorMessages = document.querySelectorAll(".error-message");
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
    var currentPath = window.location.pathname;
    var knownPages = ["/index.html", "/src/pages/about-us.html", "/src/pages/products.html", "/src/pages/services.html", "/src/pages/contact-us.html"];
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

/***/ })
/******/ ]);