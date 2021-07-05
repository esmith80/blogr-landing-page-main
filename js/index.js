const productListControl = document.getElementById('product-list-control');
const productList = document.getElementById('product-list');
// todo these are based on ids... how to make it generic for classes
productListControl.addEventListener("mouseenter", () => {
  productList.classList.replace('hide', 'show');
  console.log(productListControl.childNodes)
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