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

const productListControl = document.getElementById('product-list-control');
const companyListControl = document.getElementById('company-list-control');
const connectListControl = document.getElementById('connect-list-control');
const productList = document.getElementById('product-list');
const companyList = document.getElementById('company-list');
const connectList = document.getElementById('connect-list');

productListControl.addEventListener("mouseenter", () => {
  productList.classList.replace('hide', 'show');
  productListControl.childNodes[2].classList.replace('fa-chevron-down', 'fa-chevron-up');
});

productListControl.addEventListener("mouseleave", (e) => {  
  // if user navigates to an <li> they must be still in the menu, so don't hide it
  if(e.toElement.nodeName === 'LI') return;

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

companyListControl.addEventListener("mouseleave", (e) => {  
  // if user navigates to an <li> they must be still in the menu, so don't hide it
  if(e.toElement.nodeName === 'LI') return;

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

connectListControl.addEventListener("mouseleave", (e) => {  
  // if user navigates to an <li> they must be still in the menu, so don't hide it
  if(e.toElement.nodeName === 'LI') return;

  connectList.classList.replace('show', 'hide');
  connectListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');  
});

connectList.addEventListener("mouseleave", () => { 
  connectList.classList.replace('show', 'hide');
  connectListControl.childNodes[2].classList.replace('fa-chevron-up', 'fa-chevron-down');
});

