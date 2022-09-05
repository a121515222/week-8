const logo = document.querySelector('.js-logo')
const search = document.querySelector('.js-search')
const searchButton = document.querySelector('.js-searchButton')
const searchButtonSpan = document.querySelector('.js-searchButton span')
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.js-mobileNav')
const mobileNavButton = document.querySelector('.js-mobileNavButton')
const navTabClicks = [...document.querySelectorAll('.js-NavTabClick')]
const tabSections = [...document.querySelectorAll('.js-Section')]
const filterClick = [...document.querySelectorAll('.js-filterClick')]
const filterNum = document.querySelector('.js-filterNum')
const jsInput = [...document.querySelectorAll('input')]
const filterOpener = document.querySelector('.js-showFilterOpener')
const filter = document.querySelector('.js-filter')
const filterCloser = document.querySelector('.js-showFilterCloser')
const select = document.querySelector('select')
let countfilter = 0
const filterData = {
  net: [],
  status: [],
  price: {
    typeOfPrice: '',
    minPrice: 0,
    maxPrice: 0
  },
  typeOfBird: [],
  flower: '',
  birdColor: [],
}

// 手機板filter顯示開關

filterOpener.addEventListener('click', () => {
  filter.classList.toggle('\!left-0')
})
filterCloser.addEventListener('click', () => {
  filter.classList.toggle('\!left-0')
})


//

function filterCounter() {
  // 寫入input資料到filterData內
  countfilter = 0
  filterData.net = []
  filterData.status = []
  filterData.price.typeOfPrice = ''
  filterData.price.minPrice = 0
  filterData.price.maxPrice = 0
  filterData.typeOfBird = []
  filterData.flower = ''
  filterData.birdColor = []
  const jsTypeOfNet = [...document.querySelectorAll('.js-typeNet input[type="checkbox"]:checked')]
  const jsTypeStatus = [...document.querySelectorAll('.js-typeStatus input[type="checkbox"]:checked')]
  const jsTypeOfPrice = document.querySelector('.js-typePrice')
  const jsMinPrice = document.querySelector('.js-minPrice')
  const jsMaxPrice = document.querySelector('.js-maxPrice')
  const jsTypeOfBird = [...document.querySelectorAll('.js-typeBird input[type="checkbox"]:checked')]
  const jsFlower = document.querySelector('.js-flower input[type="radio"]:checked')
  const jsBirdColor = [...document.querySelectorAll('.js-birdColor input[type="checkbox"]:checked')]

  const selectOptionIndex = jsTypeOfPrice.selectedIndex
  filterData.price.typeOfPrice = jsTypeOfPrice.options[selectOptionIndex].text
  filterData.price.minPrice = jsMinPrice.value
  filterData.price.maxPrice = jsMaxPrice.value
  jsTypeOfBird.forEach((data) => {
    filterData.typeOfBird.push(data.value)
  })
  jsTypeOfNet.forEach((data) => {
    filterData.net.push(data.value)
  })
  jsTypeStatus.forEach((data) => {
    filterData.status.push(data.value)
  })
  filterData.flower = jsFlower?.value === undefined ? '':jsFlower.value
  jsBirdColor.forEach((data) => {
    filterData.birdColor.push(data.value)
  })
  findAll(filterData)
  filterNum.textContent = countfilter
}
// 遞迴 計算filterData有多少資料
function findAll(obj) {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (typeof obj[key] !== "object" && obj[key] !== '' && obj[key] !== 0) {
      countfilter+=1
    }
    else if (obj[key] instanceof Array === true && obj[key].length >= 1) {
      countfilter+=1
    }
    else {
        return findAll(obj[key])
    }
  })
}

jsInput.forEach((input) => {
  input.addEventListener('click', filterCounter)
  input.addEventListener('change', filterCounter)
})
select.addEventListener('change', filterCounter)
// mobil搜尋打開與隱藏logo與hamburger
function openSearch() {
  mobileNav.classList.toggle('w-full')
  logo.classList.toggle('hidden')
  hamburger.classList.toggle('hidden')
  search.classList.toggle('searchActive')
  searchButton.classList.toggle('flex-col')
  searchButtonSpan.classList.toggle('searchIconActive')
}
// hamburger動畫與mobileNavButton動畫
function hamburgerActive() {
  hamburger.classList.toggle('hamburgerActive')
  mobileNavButton.classList.toggle('navButtonActive')
}
searchButton.addEventListener('click', openSearch)
hamburger.addEventListener('click', hamburgerActive)

// artist tabNav切換

function buttonStyleChange(event, el) {
  let index = null
  if (event) {
    navTabClicks.forEach((item) => {
      item.classList.remove('buttonActive')
    })
    el.classList.add('buttonActive')
    index = el.dataset.index
  }
  return index
}
function pageSwitch(parIndex) {
  tabSections.forEach((page) => {
    page.classList.add('hidden')
    console.log('par', parIndex)
    if (page.dataset.index === parIndex) {
      page.classList.remove('hidden')
    }
  })
}


navTabClicks.forEach((button) => {
  button.addEventListener('click', function (e) {
    const index = buttonStyleChange(e, button)
    console.log('index', index)
    pageSwitch(index)
  })
})

// filter頁filter開關

filterClick.forEach((click) => {
  click.addEventListener('click', function () {
    this.classList.toggle('rotate-180')
    this.parentNode.parentNode.lastChild.previousSibling.classList.toggle('\!h-0')
  })
})

// swiper
const swiperEl = document.querySelector('.swiper');
if (swiperEl) {
  const swiper = new Swiper(swiperEl, {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    slidesPerView: 1,
    loop: true,

    breakpoints: {
      760: {
        centeredSlides: false,
        slidesPerView: 1,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
}

// masonry and imagesLoaded

const grid = document.querySelector('.MasonryGrid')
if (grid) {
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
  imagesLoaded(grid).on(function () {
    // layout Masonry after each image loads
    msnry.layout();
  });
}

const filterGrid = document.querySelector('.filterMasonryGrid')
if (filterGrid) {
  const msnry = new Masonry(filterGrid, {
    itemSelector: '.filter-grid-item',
    columnWidth: '.filter-grid-sizer',
    gutter: '.filter-gutter-sizer',
    percentPosition: true
  });
  imagesLoaded(filterGrid).on(function () {
    // layout Masonry after each image loads
    msnry.layout();
  });
}

// if(grid){
//   var $grid = $(grid).imagesLoaded( function() {
//     // init Masonry after all images have loaded
//     $grid.masonry({
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     gutter:'.gutter-sizer',
//     percentPosition: true
//     });
//   });
// }