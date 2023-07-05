export function sortByTitle(state) {
  return state.sort(function (a, b) {
    if (a.title !== b.title) {
      return a.title < b.title ? -1 : 1;
    }
    return 0;
  });
}

export function sortByWordCount(state) {
  return state.sort(function (a, b) {
    if (a.body.length !== b.body.length) {
      return a.body.length < b.body.length ? -1 : 1;
    }
    return 0;
  });
}
