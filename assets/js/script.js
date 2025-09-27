'use strict';




// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// PORTFOLIO RELATED
// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
// header buttons
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Click events
select.addEventListener("click", function () { elementToggleFunc(this); });


// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
    
  });
}

// FOR PORTFOLIO PROJECT CATEGORIES
// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
// checking what is selected value
console.log(selectValue);

// loop through list of all projects and filter by category
const filterFunc = function (selectedValue) {
  
  for (let i = 0; i < filterItems.length; i++) {
    
    if (selectedValue === "everything") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
    
  }
  
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  
  filterBtn[i].addEventListener("click", function () {
    
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
    
  });
  
}

// open links in new tab: https://developer.mozilla.org/en-US/docs/Web/API/Window/open
// unnecessary for pure on click and run on same tab:
// const clickIcons = document.querySelectorAll("a[href]");




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
    
  });
}

function navClickEventHandler() {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");
  for (let i = 0; i < navigationLinks.length; i++) {
  // navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (hashPortion.toLowerCase() === pages[i].dataset.page) {
        navigationLinks[i].click();
        // const activeLink = navigationLinks[i];
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        console.log(this.innerHTML.toLowerCase(), 'active');
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  }
}

// to navigate to 'correct page' when pasting link with anchor
function anchorLinker() {
  for (let i = 0; i < pages.length; i++) {
      // need to always check for updated hash
      const hashPortion = window.location.hash.split("#").slice(1)
      if (hashPortion[0] === pages[i].dataset.page) {
        document.getElementById(hashPortion[0] + "Button").click();
        console.log("clicked");

        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        console.log("clicked");
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
console.log(pages);

// using the current page's URL
const pathPortion = window.location.pathname.split("/").slice(1); // gives only index.html
console.log(pathPortion);
const hashPortion = window.location.hash.split("#").slice(1); // gives after # (the anchor) ... array in both cases ["", insertword] if .slice(0)
console.log('hash', hashPortion);

// check for any anchor link - ex. copy paste - while allowing for homepage default to land on 'about' page
if (hashPortion[0] == 'about' || hashPortion[0] == 'portfolio' || hashPortion[0] == 'contact') {
  anchorLinker();
  console.log('this is hashed');
} 

// detects change in anchor - only for typing into search bar
window.addEventListener(
  "hashchange", () => 
  {
    console.log("hash changed", window.location.hash.split("#").slice(1)); // hashPortion is an array
    anchorLinker();
  }
  );


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  // if clicked, will run nested for loops
  navigationLinks[i].addEventListener("click", function () {
  
  console.log('index' + i + navigationLinks[i].innerHTML);

    for (let i = 0; i < pages.length; i++) {
      console.log('inner' + pages[i] + 'BEFORE');
      console.log(pages[i].classList); // start with about active, about, portfolio, contact
      console.log( navigationLinks[i].classList);

      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {

        const activeLink = navigationLinks[i];
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        console.log(this.innerHTML.toLowerCase(), 'active - not with eventhandler');
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
      console.log('inner' + pages[i] + 'AFTER');
      console.log(pages[i].classList); // end with about, portfolio active, contact
      console.log( navigationLinks[i].classList);

    }

  });
}


