import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  editProduct,
} from "../../redux/services/productService";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector(({ products }) => {
    return products.product;
  });

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const edit = (product) => {
    dispatch(editProduct({ id, product })).then(() => {
      navigate("/products/list", { state: { message: "Edit Success" } });
    });
  };

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.number()
      .positive("Must be a positive number")
      .integer("Must be an integer")
      .required("Field is Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          title: product?.title,
          description: product?.description,
          price: product?.price,
        }}
        onSubmit={edit}
        validationSchema={ProductSchema}
        enableReinitialize={true}
      >
        <Form>
          <Field name={"title"} placeholder={"Title"} type={"text"} />
          <span style={{ color: "red" }}>
            <ErrorMessage name={"title"} />
          </span>
          <br />
          <Field
            name={"description"}
            placeholder={"Description"}
            type={"text"}
          />
          <span style={{ color: "red" }}>
            <ErrorMessage name={"description"} />
          </span>
          <br />
          <Field name={"price"} placeholder={"Price"} type={"text"} />
          <span style={{ color: "red" }}>
            <ErrorMessage name={"price"} />
          </span>
          <br />
          <button type={"submit"}>Edit</button>
        </Form>
      </Formik>
    </>
  );
};

export default EditProduct;
