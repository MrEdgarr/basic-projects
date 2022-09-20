import './App.css';

function App() {
  return (
    <>
      <section classname="section">
        <div classname="title">
          <h2>Basic Projects</h2>
          <div classname="title-underline" />
        </div>
        <div classname="section-center">
          <a href="https://basic-project-menu.netlify.app/" target="_blank">
            <div classname="img-container">
              <img src="./images/menu.png" />
            </div>
            <footer>
              <h5>Menu</h5>
            </footer>
          </a>
          <a href="https://basic-project-slide.netlify.app/" target="_blank">
            <div classname="img-container">
              <img src="./images/slider.png" alt="" />
            </div>
            <footer>
              <h5>Slider</h5>
            </footer>
          </a>
          <a href="https://basic-project-grocery-bud.netlify.app/" target="_blank">
            <div classname="img-container">
              <img src="./images/grocery-bud.png" alt="" />
            </div>
            <footer>
              <h5>Grocety Bud</h5>
            </footer>
          </a>
          <a href="https://basic-project-cart.netlify.app/" target="_blank">
            <div classname="img-container">
              <img src="./images/cart.png" alt="" />
            </div>
            <footer>
              <h5>Cart</h5>
            </footer>
          </a>
          <a href="https://basic-project-search.netlify.app/" target="_blank">
            <div classname="img-container">
              <img src="./images/search.png" alt="" />
            </div>
            <footer>
              <h5>Search</h5>
            </footer>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
