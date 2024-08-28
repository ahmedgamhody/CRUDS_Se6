import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categorys() {
  const api = "http://localhost:9000";
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategoriesNames = () => {
    fetch(`${api}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getAllProducts = () => {
    fetch(`${api}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getChosenCategoryProducts = (chosenCat) => {
    fetch(`${api}/products`)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (pro) => pro.category === chosenCat
        );
        setProducts(filteredProducts);
      });
  };

  useEffect(() => {
    getAllProducts();
    getCategoriesNames();
  }, []);

  return (
    <>
      <h1>Categorys Page</h1>
      <div className="Categorys pt-5 pb-5">
        <h2 className="text-center">Our Products</h2>
        <div className="text-center">
          <button
            onClick={() => {
              getAllProducts();
            }}
            className="btn btn-info m-2"
          >
            All
          </button>
          {categories.map((category) => (
            <button
              onClick={() => {
                getChosenCategoryProducts(category);
              }}
              key={category}
              className="btn btn-info m-2"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="container">
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
      </div>
    </>
  );
}

export default Categorys;
