const refs = {
  body: document.querySelector("body"),
  btnNav: document.querySelector(".ourplants-button-wrapper"),
  galleryDiv: document.querySelector(".gallery"),
  btnIndr: document.querySelector("button[data-indoor]"),
  btnOutd: document.querySelector("button[data-outdoor]"),
};

refs.btnNav.addEventListener("click", (e) => {
  refs.galleryDiv.insertAdjacentHTML("afterbegin", hendlIndoor);

  if (e.target.classList.contains("ourplants-button-wrapper")) {
    return;
  }

  if (e.target.innerText === "INDOOR") {
    refs.galleryDiv.insertAdjacentHTML("afterbegin", hendlIndoor);
    return (refs.galleryDiv.innerHTML = hendlIndoor());
  }

  if (e.target.innerText === "OUTDOOR") {
    refs.galleryDiv.insertAdjacentHTML("afterbegin", hendlOutdoor);
    return (refs.galleryDiv.innerHTML = hendlOutdoor());
  }
});

const hendlIndoor = () => {
  return ` <ul class="ourplants-list">
      <li class="ourplants-card">
        <img class="ourplants-img" src="../images/indoor-1.png" alt="flowers" />
        <p class="ourplants-description-title">Small Ornamental Plants</p>
        <p class="ourplants-description-subtitle">
          Such plants will fit on any windowsill, decorate your home or work
          table. Chlorophytum, money plants, aglaonema are not demanding in care
          but very beautiful.
        </p>
      </li>
      <li class="ourplants-card">
        <img class="ourplants-img" src="../images/indoor-2.png" alt="flowers" />
        <p class="ourplants-description-title">Indoor Trees</p>
        <p class="ourplants-description-subtitle">
          It's a beautiful and original option for a large room. A small indoor
          tree will add some zest to the office or a large living room. Large
          dracaena, ficus, alocasia will be a great option for your space.
        </p>
      </li>
      <li class="ourplants-card">
        <img class="ourplants-img" src="../images/indoor-3.png" alt="flowers" />
        <p class="ourplants-description-title">Plants in Florarium</p>
        <p class="ourplants-description-subtitle">
          These are neatly planted compositions of succulents, grassroots,
          decorative ferns. Plants are selected so that they are in perfect
          harmony. Order your unique set of plants!
        </p>
      </li>
      <li class="ourplants-card">
        <img class="ourplants-img" src="../images/indoor-4.png" alt="flowers" />
        <p class="ourplants-description-title">Big Ornamental Plants</p>
        <p class="ourplants-description-subtitle">
          Charming pachypodium, yucca, monstera will become a stunning
          decoration of your room or office. These plants will make a great
          impression on your guests.
        </p>
      </li>
    </ul>`;
};

const hendlOutdoor = () => {
  return `<ul class="ourplants-list">
      <li class="ourplants-card">
        <img
          class="ourplants-img"
          src="../images/outdoor-1.png"
          alt="flowers"
        />
        <p class="ourplants-description-title">Outdoor Flowers</p>
        <p class="ourplants-description-subtitle">
          Flowers form the basis of the exterior and are the first 
          to catch the eye. Charming anemones, freesia, lilies will 
          provide brightness and a pleasant aroma. Choose your outdoor
           flower! 
        </p>
      </li>
      <li class="ourplants-card">
        <img
          class="ourplants-img"
          src="../images/outdoor-2.png"
          alt="flowers"
        />
        <p class="ourplants-description-title">Succulents</p>
        <p class="ourplants-description-subtitle">
         Succulents do not require constant care, perfectly take 
         root in any yard, look nice, and stylish. We will help you
          to create the optimal composition of succulents in your garden.
        </p>
      </li>
      <li class="ourplants-card">
        <img
          class="ourplants-img"
          src="../images/outdoor-3.png"
          alt="flowers"
        />
        <p class="ourplants-description-title">Decorative Moss</p>
        <p class="ourplants-description-subtitle">
         Decorative moss and lichen will make the garden truly 
         special. Thanks to their density, coloring, and appearance,
          you can create a unique picture on the site. 
        </p>
      </li>
      <li class="ourplants-card">
        <img
          class="ourplants-img"
          src="../images/outdoor-4.png"
          alt="flowers"
        />
        <p class="ourplants-description-title">Decorative Conifers</p>
        <p class="ourplants-description-subtitle">
         The real decoration of any yard is decorative coniferous trees. 
         Thuja, mountain pines, cedar pines will charm anyone! These are 
         unpretentious, but very beautiful trees.
        </p>
      </li>
    </ul>`;
};

refs.btnIndr.addEventListener("click", hendlIndoor);
refs.btnOutd.addEventListener("click", hendlOutdoor);
