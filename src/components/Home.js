import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
function Home() {
  const [products, setProducts] = useState([]);
  const api = "http://localhost:9000/products";
  const getAllProducts = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <h1 className="text-center mt-2 fw-bold">Products</h1>
      <div className="home p-5">
        <div className="row">
          {products.map((pro) => {
            return (
              <div key={pro.id} className=" col-lg-3 col-md-4 col-sm-6 ">
                <div className="box m-3">
                  <div className="imge">
                    <img src={pro.image} alt={pro.title} />
                  </div>
                  <div className="info">
                    <h4>{pro.title.slice(0, 25)}..</h4>
                    <p>{pro.description.slice(0, 60)}.....</p>
                    <span>{pro.price}$</span>
                  </div>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <Link
                    to={`/products/${pro.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
