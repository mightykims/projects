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
  
    <nav class="nav">
      <div class="container">
        <div>
          <a href="/" alt="Home">
            Home
          </a>
        </div>
  
        <ul>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/newsletter">
              Newsletter
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  
    <main class="main">
      <div class="container">
        ${content}
      </div>
    </main>
  
    <footer class="footer">
      <div class="container">
        ©2022
      </div>
    </footer>
  </body>
  
  </html>

  `;
}