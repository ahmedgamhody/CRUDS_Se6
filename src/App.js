import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Categorys from "./components/Categorys";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import EditItem from "./components/EditItem";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="row w-100">
        <div className="col-2 sidebar">
          <SideBar></SideBar>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="products" element={<Products></Products>}></Route>
            <Route
              path="edit/:productId"
              element={<EditItem></EditItem>}
            ></Route>
            <Route
              path="products/add"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route path="categories" element={<Categorys></Categorys>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route
              path="products/:productId"
              element={
                <div className="product-details">
                  <ProductDetails></ProductDetails>
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
