import "./App.scss"
import imgDesktop from "./image-product-desktop.jpg";
import imgCart from "./icon-cart.svg";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="leftBox">
          {/* <img src={imgDesktop} alt=''/> */}
          <div className="img"></div>
        </div>
        <div className="rightBox">
          <div className="rightContainer">
            <div className="italic">PERFUME</div>
            <div className="titleBold">Gabrielle Essence Eau De Parfum</div>
            <div className="text">A floral, solar and voluptuous interpretation composed by Oliver Polgem, Perfumer-Creator for the House of CHANEL.</div>
            <div className="price">
              <p>$149.99</p>
              <p className="bigPrice">$169.99</p>
            </div>
            <button className="button"><img src={imgCart} alt='' />Add to Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;


