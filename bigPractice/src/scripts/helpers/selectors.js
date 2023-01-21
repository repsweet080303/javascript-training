/**
 * Select one element
 * @param {string} selectElement
 * @returns {Element} first element of DOM
 */
const querySelectorElement = (selectElement) => document.querySelector(selectElement);

/**
 * Select list element
 * @param {string} selectElement
 * @returns {Element} nodelist
 */
const querySelectorAllElement = (selectElement) => document.querySelectorAll(selectElement);

export { querySelectorElement, querySelectorAllElement };
