const html = require('./html');

module.exports = function (data) {
  const { title, content } = data;
  return html`

  <!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="circle.png">
    <title>${title}</title>
    <link rel="stylesheet" href="/css/styles.css">
  </head>
  
  <body>
    <header>
      <h1>${title}</h1>
    </header>
    <main>
      <article>
        ${content}
      </article>
    </main>
    <button onclick="helloAlert()">
      Click me!
    </button>
    <script src="script.js"></script>
  </body>
  
  </html>

  `;
}