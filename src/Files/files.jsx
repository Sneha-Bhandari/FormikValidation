import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";

function Files() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen h-lvh bg-gray-500">
        <div className="w-full max-w-md p-8">
          <Formik
            className=""
            initialValues={{
              Photo: "",
              Video: "",
              PDF: "",
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className=" bg-green-200  flex  flex-col  p-2 shadow-lg rounded-xl">
                  <div>
                    <h1 className="text-black text-center font-bold text-3xl">
                      Login Form
                    </h1>
                  </div>

                  {/* image */}
                  <div className=" flex flex-col">
                    <h1>Photo</h1>
                  </div>
                  <label htmlFor="photo">
                    {values.Photo.length < 1 ? (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Photo)}
                          className="h-44 w-44"
                        />
                      </div>
                    )}
                  </label>
                  <input
                  
                    onChange={(e) => {
                      setFieldValue("Photo", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="photo"
                    name="photo"
                    className="hidden"
                    accept=".jpg"
                  />

                  {/* video */}
                  <div className=" flex flex-col">
                    <h1>Video</h1>
                  </div>
                  <label htmlFor="video">
                    {values.Video ? (
                      
                      <div>
                        <video
                          src={URL.createObjectURL(values.Video)}
                          className="h-44 w-44"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Video", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="video"
                    name="video"
                    className="hidden"
                    accept=".mp4"
                  />

                  {/* pdf  */}
                  <div className=" flex flex-col">
                    <h1>PDF</h1>
                  </div>
                  <label htmlFor="pdf">
                    {values.PDF ? (
                       <div>
                       <iframe
                         src={URL.createObjectURL(values.PDF)}
                         className="h-44 w-44"
                       />
                     </div>
                    ) : (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                     
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("PDF", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="pdf"
                    name="pdf"
                    className="hidden"
                    accept=".pdf"
                  />

                  <div className="flex items-center justify-center mx-2 my-2">
                    <button
                      className="bg-green-600 text-white rounded-lg p-3 w-fit shadow-lg "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Files;
