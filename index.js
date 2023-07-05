import { getPostTemplate } from "./js/lib/templates.js";
import { addPost, deletePost, editPost } from "./js/lib/utils.js";
import { sortByTitle, sortByWordCount } from "./js/lib/sort.js";
import { filterByUser, resetFilter } from "./js/lib/filter.js";
import { addClickHandler, closeAddModel } from "./js/addModel.js";
import { editClickHandler, closeEditModel } from "./js/editModel.js";

const API_URL = "https://jsonplaceholder.typicode.com";

let state = {};
let filterUserId = -1;
let users = {};
let activeUserId = 1;

function setState(callback) {
  const newState = callback(state);
  state = newState;
  displayData(state);
  if (filterUserId !== -1) {
    filterByUserClickHandler(filterUserId);
  }
}

function setUsers(callback) {
  const newUsers = callback();
  users = newUsers;
  displayUserOptions(users);
}

async function fetchPostData(url) {
  const response = await fetch(`${url}/posts`);
  return await response.json();
}

async function fetchUsersData(url) {
  const response = await fetch(`${url}/users`);
  return await response.json();
}

function deleteClickHandler(id) {
  setState((state) => deletePost(id, state));
}

export function addSubmitClickHandler(event) {
  event.preventDefault();

  const titleInputValue = document.querySelector("#addModelTitle").value;
  const bodyInputValue = document.querySelector("#addModelBody").value;

  setState((state) =>
    addPost(titleInputValue, bodyInputValue, state, activeUserId)
  );

  closeAddModel();
}

function editSubmitClickHandler(event) {
  event.preventDefault();

  const titleInputValue = document.querySelector("#editModelTitle").value;
  const bodyInputValue = document.querySelector("#editModelBody").value;
  const userIdInputValue = Number(document.querySelector("#editModelId").value);

  setState((state) =>
    editPost(userIdInputValue, titleInputValue, bodyInputValue, state)
  );
  closeEditModel();
}

function sortByTitleClickHandler(event) {
  setState(() => sortByTitle(state));
}

function sortByWordCountClickHandler(event) {
  setState(() => sortByWordCount(state));
}

function filterByUserClickHandler(userId) {
  resetFilter(state, filterUserId);
  const dropdown = document.querySelector("#filterByFriends");

  if (userId === -1) {
    filterUserId = -1;
    dropdown.value = "-1";
    return;
  }

  filterByUser(userId, state);
  filterUserId = userId;
}

function filterByUserSelectHandler() {
  resetFilter(state, filterUserId);

  const dropdown = document.querySelector("#filterByFriends");
  const userId = Number(dropdown.value);

  if (userId === -1) {
    filterUserId = -1;
    dropdown.value = "-1";
    return;
  }
  filterByUser(userId, state);
  filterUserId = userId;
}

function displayData(data) {
  const list = document.querySelector(".posts");
  let posts = "";

  data.forEach((post) => {
    const { id, userId, title, body } = post;
    posts += getPostTemplate(id, userId, title, body, activeUserId);
  });

  list.innerHTML = posts;
}

function displayUserOptions(data) {
  const dropdown = document.querySelector("#filterByFriends");

  data.forEach((user) => {
    const option = document.createElement("option");
    option.text = user.name;
    option.value = user.id;
    dropdown.add(option);
  });
}

fetchPostData(API_URL).then((res) => {
  setState(() => res);
});

fetchUsersData(API_URL).then((res) => {
  setUsers(() => res);
});

window.addClickHandler = addClickHandler;
window.editClickHandler = editClickHandler;
window.deleteClickHandler = deleteClickHandler;

window.closeAddModel = closeAddModel;
window.closeEditModel = closeEditModel;

window.addSubmitClickHandler = addSubmitClickHandler;
window.editSubmitClickHandler = editSubmitClickHandler;

window.sortByTitleClickHandler = sortByTitleClickHandler;
window.sortByWordCountClickHandler = sortByWordCountClickHandler;

window.filterByUserClickHandler = filterByUserClickHandler;
window.filterByUserSelectHandler = filterByUserSelectHandler;
