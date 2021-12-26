exports.data = {
  layout: "base.11ty.js",
};

exports.render = function (data) {
  return `
  ${data.content}
  ${data.collections.posts.map(post =>
    `<li>
    <a href="${post.data.url}" alt="${post.data.title}">
    ${post.data.title}
    </a>
    </li>`
  )}
  `;
}