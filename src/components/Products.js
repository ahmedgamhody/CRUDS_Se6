import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Products() {
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

  const deleteItem = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`${api}/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())

          .then(() => getAllProducts());
      }
    });
  };
  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro) => {
            return (
              <tr key={pro.id}>
                <td>{pro.id}</td>
                <td>{pro.title}</td>
                <td>{pro.description.slice(0, 20)}...</td>
                <td>{pro.price}$</td>
                <td>
                  <Link
                    to={`/products/${pro.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${pro.id}`}
                    className="btn btn-primary btn-sm  me-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      deleteItem(pro);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const api = "http://localhost:9000/products";

//   const getAllProducts = () => {
//     fetch(api)
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const deleteItem = (product) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success",
//         });
//         fetch(`${api}/${product.id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => getAllProducts());
//       }
//     });
//   };

//   return (
//     <>
//       <h1>Products Page</h1>
//       <Link to={"/products/add"} className="btn btn-success mt-3">
//         Add New Product
//       </Link>
//       <table className="table table-striped mt-5">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>operation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((pro) => {
//             return (
//               <tr key={pro.id}>
//                 <td>{pro.id}</td>
//                 <td>{pro.title}</td>
//                 <td>{pro.description.slice(0, 20)}...</td>
//                 <td>{pro.price}$</td>
//                 <td>
//                   <Link
//                     to={`/products/${pro.id}`}
//                     className="btn btn-info btn-sm me-2"
//                   >
//                     View
//                   </Link>
//                   <Link
//                     to={`/edit/${pro.id}`}
//                     className="btn btn-primary btn-sm  me-2"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     type="button"
//                     className="btn btn-danger btn-sm"
//                     onClick={() => {
//                       deleteItem(pro);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Products;
