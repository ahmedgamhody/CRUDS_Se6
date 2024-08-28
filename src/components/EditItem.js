// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useEffect, useState } from "react";

// function EditProduct() {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9000/products/${productId}`)
//       .then((response) => setProduct(response.data));
//   }, [productId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:9000/products/${productId}`, product)
//       .then(() => {
//         Swal.fire({
//           title: "Success!",
//           text: "Product has been updated.",
//           icon: "success",
//         }).then(() => {
//           navigate("/products");
//         });
//       });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="mb-3">
//         <label htmlFor="productTitle" className="form-label fw-bold">
//           Title
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="productTitle"
//           name="title"
//           value={product.title}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="productDescription" className="form-label fw-bold">
//           Description
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="productDescription"
//           name="description"
//           value={product.description}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="productPrice" className="form-label fw-bold">
//           Price
//         </label>
//         <input
//           type="number"
//           className="form-control"
//           id="productPrice"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Update Product
//       </button>
//     </form>
//   );
// }

// export default EditProduct;

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:9000/products/${productId}`, product)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Product has been updated.",
              icon: "success",
            }).then(() => {
              navigate("/products");
            });
          });
      }}
    >
      <div className="mb-3">
        <label htmlFor="productTitle" className="form-label fw-bold">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="productTitle"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label fw-bold">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="productDescription"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label fw-bold">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update Product
      </button>
    </form>
  );
}

export default EditProduct;
