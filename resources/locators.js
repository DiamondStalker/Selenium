const locators = {
  searchArticle: '#search-words',
  imputSearch: '[class="search--submit--2VTbd-T"]',
  promo: '[class="pop-close-btn"]',
  items: '[class="multi--container--1UZxxHY cards--card--3PJxwBm search-card-item"]',
  moreItems: '[class="comet-v2-input-number-btn comet-v2-input-number-btn-increase"]',
  addItem: '[class*="add-to-cart"]'
};

const data = {
  baseUrl: "https://es.aliexpress.com/",
  itemToSearch: ["Humidificador","Control"]
};

module.exports = { locators, data };

