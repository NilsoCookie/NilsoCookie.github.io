const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`Element with selector ${selector} not found in the DOM.`);
};
const links = getElement(".navbar-links");
const checkbox = getElement("#checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }
});
