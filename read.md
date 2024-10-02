# Proyecto Automatizacion aliexpress

El proyecto fue realizado con selenium-webdriver desde node.js y el sistema de resultados se realizo mediante mochawesome

## Ejecutar pruebas

```bash
npm run test
```

## Descripcion

Se creo un archivo de datos `POM` en donde contine textos y los selectores previos para su facil modificaion

```js
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
  itemToSearch: ["Humidificador"]
};

module.exports = { locators, data };


```

Al mismo timpo se define los items que se desean buscar y el link base para la verificacion de este

##Imagenes 
### Test de 1 solo item
![](https://i.imgur.com/NV1wk7h.png)
### Test de varios items
![](https://i.imgur.com/miGU2ZJ.png)

## Validaciones
- Cerrar PopUp de promociones para poder continuar con el funcionamiento basico

