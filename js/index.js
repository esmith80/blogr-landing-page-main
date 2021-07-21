// todo use less code (don't use ids) to make event listeners but you shouldn't put event listeners inside of for loops

// const navLists = document.querySelectorAll("ul.nav-inner-list");
// const navListControls = document.querySelectorAll(".list-control");

// for(let i = 0; i < navLists.length; i++) {
//   navLists[i].addEventListener("mouseleave", () => { 
//     navLists[i].classList.replace('show', 'hide');
//     navListControls[i].childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
//     // navListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
//   });

//   for(let n = 0; n < navListControls.length; n++) {
//     navListControls[n].addEventListener("mouseenter", () => {
//       navLists[i].classList.replace('hide', 'show');
//     });
  
//     navListControls[n].addEventListener("mouseleave", (e) => {  
//       // if user navigates to an <li> they must be still in the menu, so don't hide it
//       if(e.toElement.nodeName === 'LI') return;    
//       navLists[i].classList.replace('show', 'hide');
//       navListControls[n].childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');  
//     });
// }

// }

// ? these are based on ids... how to make it generic for classes below is an implementation using IDs
// ? should these be html event handlers in index.html?

const productListArea = document.querySelector('#product-list-area');
const companyListArea = document.querySelector('#company-list-area');
const connectListArea = document.querySelector('#connect-list-area');

const productListControl = document.getElementById('product-list-control');
const companyListControl = document.getElementById('company-list-control');
const connectListControl = document.getElementById('connect-list-control');
const productList = document.getElementById('product-list');
const companyList = document.getElementById('company-list');
const connectList = document.getElementById('connect-list');


// product list event listeners

productListControl.addEventListener("mouseenter", () => {
  productList.classList.replace('hide', 'show');
  productListControl.childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
});

productListArea.addEventListener("mouseleave", () => {
  productList.classList.replace('show', 'hide');
  productListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

productList.addEventListener("mouseleave", () => { 
  productList.classList.replace('show', 'hide');
  productListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

// company list event listeners

companyListControl.addEventListener("mouseenter", () => {
  companyList.classList.replace('hide', 'show');
  companyListControl.childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
});

companyListArea.addEventListener("mouseleave", () => {
  companyList.classList.replace('show', 'hide');
  companyListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

companyList.addEventListener("mouseleave", () => { 
  companyList.classList.replace('show', 'hide');
  companyListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

// connect list event listeners

connectListControl.addEventListener("mouseenter", () => {
  connectList.classList.replace('hide', 'show');
  connectListControl.childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
});

connectListArea.addEventListener("mouseleave", () => {
  connectList.classList.replace('show', 'hide');
  connectListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

connectList.addEventListener("mouseleave", () => { 
  connectList.classList.replace('show', 'hide');
  connectListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

// mobile elements and event listeners

const mobileOverlay = document.querySelector('.mobile-overlay');
const hamburger = document.querySelector('.hamburger-icon');
const closeControl = document.querySelector('.close-mobile-control');
const mobileNavMenu = document.querySelector('#mobile-nav-menu');


hamburger.addEventListener("click", () => {
  mobileOverlay.style.display = "flex";
  hamburger.style.display = "none";
  closeControl.style.display = "block";
  mobileNavMenu.style.display = "flex";
});

closeControl.addEventListener("click", () => {
  mobileOverlay.style.display = "none";
  hamburger.style.display = "block";
  closeControl.style.display = "none";
  mobileNavMenu.style.display = "none";
});


// mobile menu controls 
// ? do these need to be different than desktop menu controls?

const productListControlMobile = document.querySelector('#product-list-control-mobile');
const productListMobile = document.querySelector('#product-list-mobile');

const companyListControlMobile = document.querySelector('#company-list-control-mobile');
const companyListMobile = document.querySelector('#company-list-mobile');

const connectListControlMobile = document.querySelector('#connect-list-control-mobile');
const connectListMobile = document.querySelector('#connect-list-mobile');

// add keys for logic based on menus being visible (open) or not

productListMobile.open = false;
companyListMobile.open = false;
connectListMobile.open = false;


const closeMenu = (menu, menuControl) => {
  menu.classList.replace('show', 'hide');
  menuControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
  menu.open = false;
}
const openMenu = (menu, menuControl) => {
  menu.classList.replace('hide', 'show');
  menuControl.childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
  menu.open = true;
}

const toggleMenu = (menu, menuControl) => {
  menu.open ? closeMenu(menu, menuControl) : openMenu(menu, menuControl);
}

// MOBILE event listeners

productListControlMobile.addEventListener("click", () => {
  toggleMenu(productListMobile, productListControlMobile);
  if (companyListMobile.open) closeMenu(companyListMobile, companyListControlMobile);
  if (connectListMobile.open) closeMenu(connectListMobile, connectListControlMobile);
});

companyListControlMobile.addEventListener("click", () => {
  toggleMenu(companyListMobile, companyListControlMobile);
  if (productListMobile.open) closeMenu(productListMobile, productListControlMobile);
  if (connectListMobile.open) closeMenu(connectListMobile, connectListControlMobile);
});

connectListControlMobile.addEventListener("click", () => {
  toggleMenu(connectListMobile, connectListControlMobile);
  if (companyListMobile.open) closeMenu(companyListMobile, companyListControlMobile);
  if (productListMobile.open) closeMenu(productListMobile, productListControlMobile);
});
