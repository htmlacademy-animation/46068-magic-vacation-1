export default () => {
  let page = document.querySelector(`.page`);

  window.onload = function () {
    page.classList.add(`page--loaded`);
  };
};
