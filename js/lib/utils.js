export function deletePost(postId, state) {
  return state.filter(function (post) {
    return post.id != postId;
  });
}

export function findPost(postId, state) {
  return state.filter(function (post) {
    return post.id == postId;
  });
}

export function addPost(title, body, state, activeUserId) {
  const id = Number(Math.random().toString().slice(2, 11));

  const updatedState = [...state, { userId: activeUserId, id, title, body }];

  return updatedState;
}

export function editPost(postId, title, body, state) {
  const updatedState = state;

  const postIndex = updatedState.findIndex((post) => post.id === postId);

  updatedState[postIndex].title = title;
  updatedState[postIndex].body = body;

  return updatedState;
}
