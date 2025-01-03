const menu = document.getElementById('food_menu');
const targetSection1 = document.getElementById('food_menu');


menu.addEventListener('click', function() {
  targetSection1.scrollIntoView({
    behavior: 'smooth'
  });
});




const about = document.getElementById('about');
const targetSection2 = document.getElementById('about');


about.addEventListener('click', function() {
  targetSection2.scrollIntoView({
    behavior: 'smooth'
  });
});



const book_table = document.getElementById('book_table');
const targetSection3 = document.getElementById('book_table');


book_table.addEventListener('click', function() {
  targetSection3.scrollIntoView({
    behavior: 'smooth'
  });
});