import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetails() {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="product  w-50 ">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 p-3">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body">
              <h5 className="card-title mb-3">{product.title}</h5>
              <p className="card-text dis">{product.description}</p>
              <p className="card-text pri">
                <small className="text-body-secondary fw-bold">
                  {product.price}$
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
