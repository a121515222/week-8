const logo = document.querySelector('.js-logo')
const search = document.querySelector('.js-search')
const searchButton = document.querySelector('.js-searchButton')
const searchButtonSpan = document.querySelector('.js-searchButton span')
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.js-mobileNav')
const mobileNavButton =document.querySelector('.js-mobileNavButton')
const NavTabClicks = [...document.querySelectorAll('.js-NavTabClick')]
const TabSections = [...document.querySelectorAll('.js-Section')]
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

// artist tabNav切換

function buttonStyleChange(event,el){
  let index = null
  if(event){
    NavTabClicks.forEach((item)=>{
      item.classList.remove('buttonActive')
    })
    el.classList.add('buttonActive')
    index = el.dataset.index
  }
  return index
}
function pageSwitch(parIndex){
  TabSections.forEach((page)=>{
    page.classList.add('hidden')
    console.log('par',parIndex)
    if(page.dataset.index === parIndex){
      page.classList.remove('hidden')
    } 
  })
}


NavTabClicks.forEach((button)=>{
  button.addEventListener('click', function(e){
    const index = buttonStyleChange(e, button)
    console.log('index', index)
    pageSwitch(index)
  })
})



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


