const loadProduct = (product) => {
  console.log(
    product.parentNode.parentNode.querySelector(".img-product img").src
  );
  const productObj = {
    image: product.parentNode.parentNode.querySelector(".img-product img").src,
    name: product.parentNode.parentNode.querySelector(
      ".info-product .title-product"
    ).textContent,
    rating: 4,
    price:
      product.parentNode.parentNode.querySelector(".info-product p")
        .textContent,
  };
  loadView(productObj);
};

const showProduct = (product) => {
  return `
  <div class="product-view">
    <img class="image" src="${product.image}" alt="${product.image}">
    <h2 class="product-name">${product.name}</h2>
    <div class="rating">${product.rating}</div>
    <div class="price">${product.price}</div>
    <div class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum minima tempore est delectus consectetur
    labore consequatur repudiandae. Et pariatur eos quae minima nemo, commodi illum sunt adipisci temporibus qui?</div>
  </div>
  `;
};

const loadView = (product) => {
  document.write(`
  ${loadHeader(product.name)}
  ${loadBody(product)}
  ${loadFooter()}
  `);
};

const loadHeader = (title) => {
  return `  
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="src/css/style.css">
      <title>Ver ${title}</title>
    </head>
  `;
};

const loadNavbar = () => {
  return `
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
          <a href="index.html">
            <img src="src/img/icon.png" alt="icon">
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
    <nav class="menu-options">
      <input type="checkbox" id="ckbox">
      <label for="ckbox" class="selector"><i class="fa fa-bars" aria-hidden="true"></i></label>
      <ul class="menu-box">
        <li><a href="#catalog">Catálogo</a></li>
        <li><a href="src/html/infoPay.html">Delivery y Método de Pago</a></li>
        <li><a href="#">Consejos</a></li>
        <li><a href="#">Contacto</a></li>
        <li>
          <div class="logo-img">
            <a href="index.html">
              <img src="src/img/icon.png" alt="icon">
            </a>
          </div>
        </li>
      </ul> 
    </nav>
  </header>
  `;
};

const loadBody = (product) => {
  return `
    <body>
      ${loadNavbar()}
      <a href="index.html">regresar</a>
      <h1>vista</h1>
      <main>
        ${showProduct(product)}
      </main>
    </body>
  `;
};

const loadFooter = () => {
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
      <img src="src/img/logo_small.png" alt="logo">
    </div>
  </footer>
  `;
};
