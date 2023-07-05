export function addClickHandler() {
  openAddModel();
}

export function closeAddModel() {
  const titleInput = document.querySelector("#addModelTitle");
  const bodyInput = document.querySelector("#addModelBody");

  const addModelEl = getAddModelEl();
  addModelEl.classList.remove("model--open");
  titleInput.value = "";
  bodyInput.value = "";
}

function getAddModelEl() {
  return document.querySelector("#addModel");
}

function openAddModel() {
  const addModelEl = getAddModelEl();
  addModelEl.classList.add("model--open");
}
