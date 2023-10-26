import Item from "./pages/Item";
import Home from "./pages/Home";
import About from "./pages/About";
import ItemList from "./pages/ItemList";
import ShoppingCart from "./pages/ShoppingCart";
import SignUpSignIn from "./pages/SignUpSignIn";
import Success from "./pages/Success";
import StorePicks from "./pages/StorePicks";
import InSeason from "./pages/InSeason";
import BestSellers from "./pages/BestSellers";
import  ExoticFruits from "./pages/ExoticFruits";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products/" element={<ItemList/>}/>
            <Route path="/products/:id" element={<Item/>}/>
            <Route path="/store-picks" element={<StorePicks/>}/>
            <Route path="/in-season" element={<InSeason/>}/>
            <Route path="/best-sellers" element={<BestSellers/>}/>
            <Route path="/exotic-fruits" element={<ExoticFruits/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={user ? <ShoppingCart/> : <SignUpSignIn/>}/>
            <Route path="/account-log-in-sign-up" element={user ? <Home/> : <SignUpSignIn/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
    </Router>
  )
};

export default App;
