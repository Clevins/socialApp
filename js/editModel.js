import { findPost } from "./lib/utils.js";

export function editClickHandler(id) {
  openEditModel();
  populateEditModel(id);
}
function getEditModelEl() {
  return document.querySelector("#editModel");
}

export function closeEditModel() {
  const editModelEl = getEditModelEl();
  editModelEl.classList.remove("model--open");
}
function populateEditModel(id) {
  const titleInput = document.querySelector("#editModelTitle");
  const bodyInput = document.querySelector("#editModelBody");
  const userIdInputValue = document.querySelector("#editModelId");

  const titleValue = document.querySelector(`#postHeader${id}`).textContent;
  const bodyValue = document.querySelector(`#postBody${id}`).textContent;

  //   console.log(titleValue);
  //   console.log(bodyValue);
  //   const activePost = findPost(id, state);

  titleInput.value = titleValue;
  bodyInput.value = bodyValue;
  userIdInputValue.value = id;
}

function openEditModel() {
  const editModelEl = getEditModelEl();
  editModelEl.classList.add("model--open");
}
