const loadProduct = (product) => {
  const productObj = {
    image: product.parentNode.parentNode.querySelector(".image").src,
    name: product.parentNode.parentNode.querySelector(".product-name").textContent,
    price: product.parentNode.parentNode.querySelector(".price").textContent,
  };
  loadView(productObj);
};

const showProduct = (product) => {
  return `
  <h2 class="view-name title">${product.name}</h2>
  <div class="view">
    <div class="view-img">
      <img class="image" src="${product.image}" alt="${product.image}">
    </div>
    <div class="view-info">
      <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at saepe animi similique quis nulla, dicta adipisci totam minus, laudantium alias hic porro provident! Assumenda nemo illo, expedita voluptatum fugiat, quisquam, quibusdam tempore animi dignissimos blanditiis tempora quaerat eos hic ut labore. Deserunt exercitationem suscipit eos corrupti explicabo fugiat obcaecati minima beatae eaque vel maxime, molestias id porro praesentium autem qui natus rerum cumque distinctio perferendis sapiente! Ullam consequatur pariatur quidem, rerum aperiam qui vel molestias sed in! Quam, itaque.</p>
      </div>
      <div class="view-price"><i class="fas fa-tag"></i> Precio: ${product.price}</div>
    </div>
  </div>
  `;
};

const loadView = (product) => {
  document.write(`
  ${loadHead(product.name)}
  ${loadBody(product)}
  ${loadFooter(product)}
  `);
};

const loadHead = (title) => {
  return `  
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../css/style.css">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Pacifico&display=swap" rel="stylesheet">
      <link rel="shortcut icon" href="../img/icon-top.ico" type="image/x-icon">
      <script src="https://kit.fontawesome.com/2e9cad6e92.js" crossorigin="anonymous"></script>
      <title>Ver ${title}</title>
    </head>
  `;
};

const loadBody = (product) => {
  return `
    <body>
      <header>
        <div class="banner-top">
          <div class="info-shop">
            <div class="address">
              <i class="fas fa-map-marker-alt"></i>
              <p>Av. Este 7, La Candelaria Caracas.</p>
            </div>
            <div class="timetable">
              <i class="far fa-calendar-minus"></i>
              <p>L-V 09:00 AM a 08:00 PM</p>
              <p>S-D 9:00 AM a 12:00 M</p>
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="logo">
            <div class="logo-img">
              <a href="../../index.html">
                <img src="../img/icon.png" alt="icon">
              </a>
            </div>
          </div>
          <div class="search">
            <input type="search" name="search" id="search">
            <i class="fas fa-search"></i>
          </div>
          <div class="shopping_cart">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </header>
      <nav class="menu-options">
        <input type="checkbox" id="ckbox">
        <label for="ckbox" class="selector"><i class="fa fa-bars" aria-hidden="true"></i></label>
        <ul class="menu-box">
          <li><a href="catalog.html">Catálogo</a></li>
          <li><a href="infoPay.html">Delivery y Pago</a></li>
          <li><a href="tips.html">Consejos</a></li>
          <li><a href="contact.html">Contacto</a></li>
        </ul> 
      </nav>
      <div class="cont">
        <main>
          ${showProduct(product)}
        </main>
        <div class="to-return">
          <button class="btn-grad"><a href="../html/catalog.html"><i class="fas fa-arrow-left"></i> Volver al Catálogo</a></button>
        </div>
      </div>
    </body>
  `;
};

const loadFooter = (title) => {
  return `
    <footer>
      <nav class="social-bar">
        <a href="https://www.facebook.com/michuspetshop"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/michuspetshop/"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/584129614799"><i class="fab fa-whatsapp"></i></a>
      </nav>
      <div class="copyright">
        <p>CopyRight <i class="far fa-copyright"></i> 2021 sISAabel Todos los Derechos Reservados</p>
      </div>
      <div class="logo-footer">
        <img src="../img/logo_small.png" alt="logo">
      </div>
    </footer>
  `;
};
