function getPostTemplate(id, userId, title, body, activeUserId) {
  let postTemplate = `
    <div class="post" id="${"post" + id}">
        <div class="post__header">
            <h2>${title}</h2>
        </div>
        <hr class="line" />
        <div class="post__body">
            <p>${body}</p>
        </div>

    </div>`;

  if (activeUserId === userId) {
    postTemplate = `
      <div class="post" id="${"post" + id}">
          <div class="post__header">
              <h2 id="${"postHeader" + id}">${title}</h2>
          </div>
          <hr class="line" />
          <div class="post__body">
              <p id="${"postBody" + id}">${body}</p>
          </div>

          
          <button onclick="deleteClickHandler(${id})" class="btn">Delete</button>
          <button onclick="editClickHandler(${id})" class="btn">Edit</button>
      </div>`;
  }

  return postTemplate;
}

export { getPostTemplate };
