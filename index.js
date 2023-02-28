// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setup.js';
// specific imports
import fetchProducts from './src/fetchProduct.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProduct.js';
import { getElement } from './src/util.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);
