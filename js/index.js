// write function to make menu appear on hover

// jQuery?

/* -- THIS IS THE CSS THAT USED TO DISPLAY THE MENU
.nav-heading:hover ul {
  display: inline;
}

.nav-inner-list > li:hover {
  font-weight: bold;
}

HTML FOR THE DOWN ARROW
<i class="fas fa-chevron-down arrow-sml"></i>

HTML for the UP ARROW

<i class="fas fa-chevron-up"></i>

so if i replace fa-chevron-down with fa-chevron-up

*/

// const menuHeadings = document.querySelectorAll(".nav-heading > li > i");
// console.log(menuHeadings);


const showMenu = (menuHeading) => {
  const chevron = menuHeading.childNodes[1].childNodes[1];
  const menu = menuHeading.childNodes[3];
 

  chevron.classList.replace('fa-chevron-down', 'fa-chevron-up');
  menu.classList.replace('hide', 'show');
}
const hideMenu = (menuHeading) => {

  const chevron = menuHeading.childNodes[1].childNodes[1];
  const menu = menuHeading.childNodes[3];

  chevron.classList.replace('fa-chevron-up', 'fa-chevron-down');
  menu.classList.replace('show', 'hide');

}


