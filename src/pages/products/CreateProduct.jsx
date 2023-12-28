import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/services/productService";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const add = (values) => {
    values.price = +values.price;
    console.log(values);
    dispatch(addProduct(values)).then(() => {
      navigate("/products/list", { state: { message: "Edit Success" } });
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
        }}
        onSubmit={add}
        validationSchema={ProductSchema}
      >
        <Form>
          <Field name={"title"} placeholder={"title"} type={"text"} />
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
          <button type={"submit"}>Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default CreateProduct;
