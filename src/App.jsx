import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import background from './assets/bg/background.gif';
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <div className="App bg-center bg-cover bg-no-repeat min-h-screen ">
      <VideoBackground>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <br></br>
          </Router>
        </ShopContextProvider>
      </VideoBackground>
    </div>
  );
}

export default App;
