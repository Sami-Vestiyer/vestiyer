import PopoverCart from "./components/popoverCart";
import ProductCart from "./components/productCart";
import SideProductCart from "./components/sideProductCart";
import Custom404 from "./pages/404";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/Homepage";
import OrderDetails from "./pages/OrderDetails";
import OrderHistory from "./pages/OrderHistory";
import Pricing from "./pages/Pricing";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
{/* <HomePage/> */}
{/* <ProductPage/> */}
{/* <PopoverCart/> */}
{/* <Products/> */}
{/* <SideProductCart/> */}
{/* <CheckOutPage/> */}
{/* <OrderDetails/> */}
<OrderHistory/>
{/* <Custom404/> */}
<Pricing/>
      </header>
      <div className="bg-black"> 

<ProductCart/>

      </div>
    </div>
  );
}

export default App;
