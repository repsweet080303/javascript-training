import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
});

/**
 * Select one element
 * @param {string} selectElement
 * @returns {Element} first element of DOM
 */
export const querySelectorElement = (selectElement) => document.querySelector(selectElement);

/**
 * Select list element
 * @param {string} selectElement
 * @returns {Element} nodelist
 */
export const querySelectorAllElement = (selectElement) => document.querySelectorAll(selectElement);
