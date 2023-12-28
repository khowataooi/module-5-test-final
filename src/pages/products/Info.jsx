import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductById } from "../../redux/services/productService";
function Info() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(({ products }) => {
    return products.product;
  });

  useEffect(() => {
    dispatch(getProductById(id));
  });

  return (
    <>
      <div>Chi tiết sản phẩm</div>
      <div>
        <label>Title: {product.title}</label>
      </div>
      <div>
        <label>Price: {product.price}</label>
      </div>
      <div>
        <label>Description: {product.description}</label>
      </div>
    </>
  );
}

export default Info;
