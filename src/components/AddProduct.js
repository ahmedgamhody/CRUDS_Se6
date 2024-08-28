// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

// import axios from "axios";
// function AddProduct() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");

//   let navigate = useNavigate();

//   const api = "http://localhost:9000/products";
//   const formSub = (e) => {
//     e.preventDefault();

//     axios
//       .post(api, {
//         title: title,
//         description: description,
//         price: price,
//       })
//       .then(() => {
//         navigate("/products");
//       });
//   };
//   return (
//     <>
//       <h1>Add Product Page</h1>
//       <form
//         onSubmit={(e) => {
//           formSub(e);
//         }}
//       >
//         <div className="mb-3">
//           <label htmlFor="productTitle" className="form-label fw-bold">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="productTitle"
//             placeholder="product Title"
//             aria-describedby="product Title"
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="productDescription" className="form-label fw-bold">
//             Description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="productDescription"
//             placeholder="product Description"
//             aria-describedby="product Description"
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="productPrice" className="form-label fw-bold">
//             Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="productPrice"
//             placeholder="product Price"
//             aria-describedby="product Price"
//             min="0"
//             onChange={(e) => {
//               setPrice(e.target.value);
//             }}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Add Product
//         </button>
//       </form>
//     </>
//   );
// }

// export default AddProduct;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
function AddProduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [categoriy, setCategoriy] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [maxId, setMaxId] = useState(0);

  let navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const getCategoriesNames = () => {
    fetch(`http://localhost:9000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const api = "http://localhost:9000/products";

  useEffect(() => {
    axios.get(api).then((response) => {
      const products = response.data;
      const ids = products.map((product) => parseInt(product.id, 10));
      const highestId = Math.max(...ids);
      setMaxId(highestId);
    });
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage("");
    }
  };

  const formSub = (e) => {
    e.preventDefault();

    const newId = maxId + 1;

    if (
      title !== "" &&
      description !== "" &&
      price !== "" &&
      categoriy !== ""
    ) {
      axios
        .post(api, {
          id: newId.toString(),
          title: title,
          description: description,
          price: price,
          image: image,
          category: categoriy,
        })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The product has been added successfully!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/products");
          });
        });
    } else {
      Swal.fire({
        title: "Please make sure the data is complete",
        icon: "info",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  };

  useEffect(() => {
    getCategoriesNames();
  }, []);
  return (
    <>
      <h1>Add Product Page</h1>
      <form
        onSubmit={(e) => {
          formSub(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label fw-bold">
            Image
          </label>
          <input
            type="file"
            className="form-control mb-2"
            id="productImage"
            placeholder="Product Image"
            aria-describedby="product Image"
            onChange={(e) => {
              handleImageChange(e);
            }}
          />
          <label htmlFor="productTitle" className="form-label fw-bold">
            Title
          </label>

          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="product Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            placeholder="Product Description"
            aria-describedby="product Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label fw-bold">
            category
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="productCategory"
            onChange={(e) => {
              setCategoriy(e.target.value);
            }}
          >
            <option>categories</option>
            {categories.map((cat, index) => {
              return (
                <option key={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label fw-bold">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="product Price"
            min="0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
