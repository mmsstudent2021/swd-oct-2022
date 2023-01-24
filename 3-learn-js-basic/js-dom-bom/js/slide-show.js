const photoUpload = document.querySelector("#photoUpload");
const uploaderUI = document.querySelector("#uploaderUI");
const photos = document.querySelector("#photos");
const createSlideShow = document.querySelector("#createSlideShow");
const output = document.querySelector("#output");

uploaderUI.addEventListener("click", () => {
  photoUpload.click();
});

const createCarousel = (photoList) => {
  const id = "carousel" + Date.now();
  const carousel = document.createElement("div");
  carousel.className = "carousel slide";
  carousel.id = id;

  let slides = "";
  let indicators = "";

  photoList.forEach((photo, index) => {
    slides += ` <div class="carousel-item ${index === 0 && "active"}">
    <img src="${photo}" class="d-block w-100 " alt="...">
    </div>`;
    indicators += `<button type="button" ${
      index === 0 && 'class="active"'
    } data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" aria-label="Slide 2"></button>`;
  });

  carousel.innerHTML = `
    <div class="carousel-indicators">
       ${indicators}
    </div>
    <div class="carousel-inner">
        ${slides}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    `;

  output.append(carousel);
};

photoUpload.addEventListener("change", (event) => {
  console.log(event.target.files);

  [...event.target.files].forEach((file) => {
    const img = new Image();

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      img.classList.add("photo", "me-2");
      photos.append(img);
    });
    reader.readAsDataURL(file);
  });
});

createSlideShow.addEventListener("click", () => {
  const allPhoto = [...document.querySelectorAll(".photo")];
  createCarousel(allPhoto.map((el) => el.src));
  //   createCarousel();
});

uploaderUI.addEventListener("dragover", (event) => {
  event.preventDefault();
  // console.log(event);
});

uploaderUI.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log(event.dataTransfer.files);

  [...event.dataTransfer.files].forEach((file) => {
    const img = new Image();

    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      img.classList.add("photo", "me-2");
      photos.append(img);
    });
    reader.readAsDataURL(file);
  });
});
