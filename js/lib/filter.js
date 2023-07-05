export function filterByUser(userId, state) {
  state.forEach((post) => {
    if (post.userId !== userId) {
      const postEl = document.querySelector(`#post${post.id}`);
      postEl.classList.add("post--hide");
    }
  });
}

export function resetFilter(state, filterUserId) {
  state.forEach((post) => {
    const postEl = document.querySelector(`#post${post.id}`);
    postEl.classList.remove("post--hide");
  });
  filterUserId = -1;
}
