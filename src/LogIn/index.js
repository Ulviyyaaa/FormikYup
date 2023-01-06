import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss"

function Login() {
  return (
    <Formik className="formikk"
      initialValues={{ Name: "", email: "", password: "",date: "" }}
      validationSchema={Yup.object({
        Name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required").trim(),
          email: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required").trim(),
          password: Yup.string().email("").required("Required"),
          date: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="formm">
        <div>
          <label htmlFor="Name">Name</label>
          <Field name="Name" type="text" />
          <div style={{color:"red"}}><ErrorMessage name="Name" /></div>
        </div>
        <br></br>
        <div>
        <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" />
          <div style={{color:"red"}}><ErrorMessage name="email" /></div>
         
        </div>
        <br></br>
        <div>
        <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <div style={{color:"red"}}><ErrorMessage name="password" /></div>
        </div>
        <br></br>
        <div>
        <label htmlFor="date">Birthday</label>
          <Field name="date" type="date" />
          <div style={{color:"red"}}><ErrorMessage name="date" /></div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default Login;
