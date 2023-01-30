/**
 * Select one element
 * @param {String} selectElement - The name class of the element to select
 */
const querySelectorElement = (selectElement) => document.querySelector(selectElement);

/**
 * Select list element
 * @param {String} selectElement - The name class of the element to select
 */
const querySelectorAllElement = (selectElement) => document.querySelectorAll(selectElement);

export { querySelectorElement, querySelectorAllElement };
