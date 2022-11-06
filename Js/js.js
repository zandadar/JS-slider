let images = [{
    title: "Rostov-on-Don, Admiral",
    url: "Images/2-projects.jpg",
    city: "Rostov-on-Don LCD admiral",
    apartment_area: "81 m2",
    repair_time: "3.5 months",
    repair_cost: "Upon request"
  }, {
    title: "Sochi Thieves",
    url: "Images/2-projects-2.jpg",
    city: "Sochi Thieves",
    apartment_area: "105 m2",
    repair_time: "4 months",
    repair_cost: "Upon request"
  }, {
    title: "Rostov-on-Don Patriotic",
    url: "Images/2-projects-3.jpg",
    city: "Rostov-on-Don Patriotic",
    apartment_area: "93 m2",
    repair_time: "3 months",
    repair_cost: "Upon request"
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
options = options || {
  city: false,
  dots: true,
  title: true,
  play: false
};

let sliderImages = document.querySelector(".projects__slider-images");
let sliderArrows = document.querySelector(".projects__slider-arrows");
let sliderDots = document.querySelector(".projects__slider-dots");
let slidergridCity = document.querySelector(".projects__grid-city");
let slidergridArea = document.querySelector(".projects__grid-area");
let slidergridTime = document.querySelector(".projects__grid-time");
let slidergridCost = document.querySelector(".projects__grid-cost");
let sliderTitle = document.querySelector(".projects__link-container");
  
initImages();
initArrows();
  
if (options.dots) {
  initDots();
}

if (options.title) {
  initTitle();
}
  
if (options.grid) {
  initGrid();
}
  
if (options.play) {
  initPlay();
}
  
function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
    sliderArrows.querySelectorAll(".projects__slider-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="projects__slider-dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".projects__slider-dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }


  function initTitle() {
    images.forEach((image, index) => {
      let title = `<div class="projects__slider-title n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
      sliderTitle.innerHTML += title;
    });
    sliderTitle.querySelectorAll(".projects__slider-title").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.title) {
      sliderTitle.querySelector(".active").classList.remove("active");
      sliderTitle.querySelector(".n" + num).classList.add("active");
    }
    if (options.grid) changeGrid(num);
  }
  
  function initGrid() {
    let cityDiv = `<div class="city">${images[0].city}</div>`;
    slidergridCity.innerHTML += cityDiv;
    let areaDiv = `<div class="area">${images[0].apartment_area}</div>`;
    slidergridArea.innerHTML += areaDiv;
    let timeDiv = `<div class="time">${images[0].repair_time}</div>`;
    slidergridTime.innerHTML += timeDiv;
    let costDiv = `<div class="cost">${images[0].repair_cost}</div>`;
    slidergridCost.innerHTML += costDiv;
  }
  function changeGrid(num) {
    if (!images[num].city) return;
    let sliderCity = slidergridCity.querySelector(".city");
    sliderCity.innerText = images[num].city;
    let sliderArea = slidergridArea.querySelector(".area");
    sliderArea.innerText = images[num].apartment_area;
    let sliderTime = slidergridTime.querySelector(".time");
    sliderTime.innerText = images[num].repair_time;
    let sliderCost = slidergridCost.querySelector(".cost");
    sliderCost.innerText = images[num].repair_cost;
  }
  
  function initPlay() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        moveSlider(nextNumber);
    }
  }
  
  let sliderOptions = {
    dots: true,
    title: true,
    grid: true,
    play: true
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
  })
  