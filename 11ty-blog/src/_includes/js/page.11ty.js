const html = require('./html');

exports.data = {
  layout: "base.11ty.js",
}

exports.render = function (data) {
  const { title, content } = data;
  return html`
  <h1>
    ${title}
  </h1>
  ${content}
  `;
}