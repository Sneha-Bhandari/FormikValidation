import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const Daythree = () => {
  const Formss = [
    { name: "Username", type: "text", Placeholder: "Enter your name" },
    { name: "Email", type: "email", Placeholder: "Enter your email" },
    { name: "Password", type: "password", Placeholder: "Enter your password" },
    { name: "Address", type: "text", Placeholder: "Enter your address" },
  ];
  const Schemas = yup.object().shape({
    Username: yup.string().required("This is required!!"),
    Email: yup
      .string()
      .email("please provide a valid  email")
      .required("please enter your email"),
    Password: yup
      .string()
      .max(5, "Password must be at least 5 character!!")
      .required("Password is required"),
    
  });
  return (
    <div className="h-lvh justify-center items-center bg-gray-200 mx-auto flex ">
      <div className="bg-purple-200 w-fit  flex justify-center items-center rounded-xl shadow-lg p-12 gap-3">
        <Formik
          className=""
          initialValues={{ Username: "", Email: "", Password: "", Address: "" }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form>
                <div className="text-3xl ">Sign up here</div>
                {Formss.map((val, i) => {
                  return (
                    <div key={i} className=" flex flex-col gap-2   ">
                      <div className="">{val.name}</div>
                      <Field
                        className="bg-white border "
                        name={val.name}
                        type={val.type}
                        Placeholder={val.Placeholder}
                      />
                    </div>
                  );
                })}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Daythree;
