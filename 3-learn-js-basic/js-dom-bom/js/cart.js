const app = document.querySelector("#app");
const productCards = document.querySelector("#productCards");
const searchInput = document.querySelector("#searchInput");
const cart = document.querySelector("#cart");
const header = document.querySelector("#header");
const productCategories = document.querySelector("#productCategories");
const productDetailModal = new bootstrap.Modal("#productDetailModal");

const star = (no) => {
  let starStr = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.floor(no) < i) {
      starStr += "<i class='bi bi-star'></i>";
    } else {
      starStr += "<i class='bi bi-star-fill'></i>";
    }
  }
  return starStr;
};

const excerpt = (str, maxLength = 70) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + " ....";
  }
  return str;
};

const slugToText = (slug) => {
  return slug.replaceAll("-", " ");
};

const createProductCard = (product) => {
  const div = document.createElement("div");
  div.addEventListener("click", () => {
    renderProductDetailModal();
  });
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);

  div.innerHTML = `
  <div class="card">
    <div class="card-body">
       
        <h4 class="fw-bold mb-2 text-truncate">${product.title}</h4>
        <div
        class="d-flex justify-content-between align-items-center mb-2"
        >
        <div class="badge text-dark text-capitalize bg-light">${slugToText(
          product.category
        )}</div>
        <div class="">
            ${star(product.rating)}
        </div>
        </div>

        <p class="text-black-50 small product-card-description">${excerpt(
          product.description
        )}</p>
        <div
        class="d-flex border-top pt-3 justify-content-between align-items-center"
        >
        <p class="mb-0 price">$ ${product.price}</p>
        </div>
    </div>
    </div>
  `;

  const img = new Image();
  img.src = product.thumbnail;
  img.className = "product-card-img mb-3";
  div.querySelector(".card-body").prepend(img);

  const btn = document.createElement("button");
  btn.className = "btn btn-outline-dark add";
  btn.innerText = "Add to Cart";

  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (btn.classList.contains("active")) {
      btn.innerText = "Add to Cart";
      btn.classList.remove("active");
    } else {
      const img4ani = new Image();
      img4ani.src = product.thumbnail;

      img4ani.style.position = "fixed";
      img4ani.style.transition = "0.5s";
      img4ani.style.zIndex = 2000;
      img4ani.style.width = img.getBoundingClientRect().width + "px";
      img4ani.style.height = img.getBoundingClientRect().height + "px";
      img4ani.style.left = img.getBoundingClientRect().left + "px";
      img4ani.style.top = img.getBoundingClientRect().top + "px";

      document.body.append(img4ani);

      setTimeout(() => {
        img4ani.style.left = cart.getBoundingClientRect().left + 10 + "px";
        img4ani.style.top = cart.getBoundingClientRect().top + 20 + "px";
        img4ani.style.transform = "rotate(360deg)";
        img4ani.style.width = "0px";
        img4ani.style.height = "0px";
      }, 100);

      btn.classList.add("active");
      btn.innerText = "Added";
    }
  });

  div.querySelector(".price").after(btn);

  return div;
};

const productDetailCarouselItems = (arr) => {
  let slides = "";
  let indicators = "";

  arr.forEach((el, index) => {
    slides += `<div class="carousel-item ${index === 0 && "active"}">
        <img
          src="${el}"
          class="d-block w-100 product-detail-img"
          alt="..."
        />
      </div>`;

    indicators += `<button
      type="button"
      data-bs-target="#productDetailCarousel"
      data-bs-slide-to="${index}"
      class="${index === 0 && "active"}"
      aria-current="true"
      aria-label="Slide 1"
    ></button>`;
  });

  return { slides, indicators };
};

const createCategoryBtn = (name) => {
  const btn = document.createElement("button");
  btn.className = "btn btn-sm btn-outline-dark me-2 cat text-capitalize";
  btn.innerText = slugToText(name);
  btn.setAttribute("cat", name);
  return btn;
};

const renderProductCard = (products) => {
  productCards.innerHTML = null;
  products.forEach((product) => {
    productCards.append(createProductCard(product));
  });
};

const renderProductDetailModal = () => {
  const currentCard = event.target.closest(".product-card");
  const currentProductId = currentCard.getAttribute("product-id");
  const currentProduct = products.find(
    (product) => product.id == currentProductId
  );

  // console.log(currentProduct);

  productDetailModal._element.querySelector(".modal-title").innerText =
    currentProduct.title;

  productDetailModal._element.querySelector(
    ".modal-body"
  ).innerHTML = `<div id="productDetailCarousel" class="carousel slide">
        <div class="carousel-indicators">
          ${productDetailCarouselItems(currentProduct.images).indicators}
        </div>
        <div class="carousel-inner">
          ${productDetailCarouselItems(currentProduct.images).slides}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#productDetailCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#productDetailCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        class="d-flex mt-3 justify-content-between align-items-center mb-2"
      >
        <div class="badge text-dark text-capitalize bg-light">
        ${slugToText(currentProduct.category)}
        </div>
        <div class="">${star(currentProduct.rating)}</div>
      </div>

      <p class="mt-3">${currentProduct.description}</p>

      <p>$ ${currentProduct.price}</p>`;

  productDetailModal.show();
};

const renderProductCardByCategory = () => {
  const currentCategory = event.target.getAttribute("cat");
  if (currentCategory === "all") {
    renderProductCard(products);
  } else {
    renderProductCard(
      products.filter((product) => product.category === currentCategory)
    );
  }

  // remove old
  productCategories.querySelector(".active").classList.remove("active");

  // add new
  event.target.classList.add("active");
};

const renderBySearch = (keyword) => {
  renderProductCard(
    products.filter((product) => {
      return (
        product.title.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) !=
          -1 ||
        product.description
          .toLocaleLowerCase()
          .search(keyword.toLocaleLowerCase()) != -1
      );
    })
  );
};

// process
renderProductCard(products);

categories.forEach((category) =>
  productCategories.append(createCategoryBtn(category))
);

searchInput.addEventListener("keyup", (event) => {
  renderBySearch(searchInput.value);
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 150) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
});

// app.addEventListener("click", (event) => {
//   //   console.log(event.target);
//   if (
//     event.target.closest(".product-card") &&
//     !event.target.classList.contains("add")
//   ) {
//     renderProductDetailModal();
//   }

//   if (event.target.classList.contains("cat")) {
//     renderProductCardByCategory();
//   }

//   if (event.target.classList.contains("add")) {
//     console.log("add to cart");
//   }
// });
