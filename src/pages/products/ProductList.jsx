import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll, deleteProduct } from "../../redux/services/productService";
import DeleteModal from "../../components/DeleteModal";
import "./static/style.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const products = useSelector(({ products }) => {
    return products.list;
  });

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const remove = async () => {
    await dispatch(deleteProduct(deleteId));
    await setDeleteId(null);
    dispatch(getAll());
  };

  return (
    <>
      <div>
        <table
          className="table"
          style={{ borderCollapse: "collapse", border: "1px solid black" }}
        >
          <thead style={{ backgroundColor: "lightblue" }}>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/edit/${product.id}`}>
                    <button>EDIT</button>
                  </Link>
                  <button onClick={() => setDeleteId(product.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteId && <DeleteModal remove={remove} setDeleteId={setDeleteId} />}
    </>
  );
};

export default ProductList;
