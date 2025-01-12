import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

// loading 
const Daytwo = () => {
  const Forms = [
    {
      name: "Username",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm your password",
    },

  ];

  const [Loading, setLoading]=useState(false)


  //const [slide, setSlide]=useState(false)
  useEffect(() => {
   if(Loading==true){
    const timeoutId = setTimeout(() => {
        toast.info(" Form is Submitted Successfully");
        setLoading(false)
    
    }, 6000);
    return () => clearTimeout(timeoutId);
   }
  }, [Loading]);
  
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
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password")], " Confirm password must match the password")
      .required("Confirm password is required"),
  });

  return (

  <div>
      <div className="flex justify-center items-center min-h-screen h-lvh bg-gray-500">
        <ToastContainer/>
      <div className="w-full max-w-md p-8">
        <Formik
          className=""
          initialValues={{
            Username: "",
            Email: "",
            Password: "",
            ConfirmPassword: "",
            Image: "",
          }}
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);

            setLoading(true)
          //  setTimeout(()=>setLoading(false),5000)
            // alert("Submitted Sucessfully!!!");
          }}
        >
         {({setFieldValue,values})=>{
          return(
            <Form className=" bg-blue-300  flex  flex-col  p-2 shadow-lg rounded-xl">
            <div>
              <h1 className="text-black text-center font-bold text-3xl">
                Login Form
              </h1>
            </div>
            {Forms.map((val, i) => {
              return (
                <div key={i} className="flex flex-col  px-2 py-2">
                    <div className="text-lg font-light text-green-900">
                    {val.name}
                    </div>
                  <Field
                
                    className="bg-white border gap-4  w-full rounded-md px-2 py-2 outline-none"
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage
                    name={val.name}
                    component={"div"}
                    className="text-red-700"
                  />
                </div>
              );
            })}

            <div className=" flex flex-col">
              <h1>Image</h1>
            </div>
            <label htmlFor="images">
              {
                values.Image.length<1?
              <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                {" "}
                <MdOutlineBrowserUpdated />
              </div>
                :
                <div>
                  <img src={URL.createObjectURL(values.Image)} className="h-44 w-44" />
                </div>
              }
            </label>
            <input onChange={(e)=>{
              setFieldValue('Image',e.target.files[0])
              console.log(e.target.files)}} type="file" id="images" name="images" className="hidden" />


            
            <div className="flex items-center justify-center mx-2 my-2">
              <button
                className="bg-green-600 text-white rounded-lg p-3 w-fit shadow-lg "
                type="submit">
            {
                Loading?< FaSpinner className="animate-spin"/>:"submit"
            }
              </button>
            </div>
          </Form>
          )
         }}
        </Formik>
      </div>
    </div>
    </div>
  )
}


export default Daytwo;
