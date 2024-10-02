const locators = {
  searchArticle: '#search-words',
  imputSearch: '[class="search--submit--2VTbd-T"]',
  promo: '[class="pop-close-btn"]',
  items: '[class="multi--container--1UZxxHY cards--card--3PJxwBm search-card-item"]',
  moreItems: '[class="comet-v2-input-number-btn comet-v2-input-number-btn-increase"]',
  addItem: '[class="comet-v2-btn comet-v2-btn-large add-to-cart--addtocart--Qhoji3M comet-v2-btn-important"]'
};

const data = {
  baseUrl: "https://es.aliexpress.com/",
  itemToSearch: ["Humidificador","Control"]
};

module.exports = { locators, data };

