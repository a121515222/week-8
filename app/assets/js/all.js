const logo = document.querySelector('.js-logo')
const search = document.querySelector('.js-search')
const searchButton = document.querySelector('.js-searchButton')
const searchButtonSpan = document.querySelector('.js-searchButton span')
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.js-mobileNav')
const mobileNavButton =document.querySelector('.js-mobileNavButton')
// mobil搜尋打開與隱藏logo與hamburger
function openSearch(){
  mobileNav.classList.toggle('w-full')
  logo.classList.toggle('hidden')
  hamburger.classList.toggle('hidden')
  search.classList.toggle('searchActive')
  searchButton.classList.toggle('flex-col')
  searchButtonSpan.classList.toggle('searchIconActive')
}
// hamburger動畫與mobileNavButton動畫
function hamburgerActive(){
  hamburger.classList.toggle('hamburgerActive')
  mobileNavButton.classList.toggle('navButtonActive')
}
searchButton.addEventListener('click',openSearch)
hamburger.addEventListener('click',hamburgerActive)


// swiper
const swiperEl = document.querySelector('.swiper');
if(swiperEl){
  const swiper = new Swiper(swiperEl, {
    pagination: {
      el: ".swiper-pagination",
      clickable :true,
    },
    autoplay:true,
    slidesPerView: 1,
    loop: true,
    
    breakpoints: {
      // when window width is >= 320px
      320: {},
      // when window width is >= 480px
      480: {},
      // when window width is >= 640px
      760: {
        centeredSlides:false,
        slidesPerView: 1,
      },
      1024:{
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
}

// masonry and imagesLoaded

const grid = document.querySelector('.MasonryGrid')
if(grid){
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter:'.gutter-sizer',
    percentPosition: true
  });
  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });
}


