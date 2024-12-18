import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from "yup"


function App() {
  
  const Forms=[
    {
      name:"Username", type:"text", placeholder:"Enter your name"
    },
    {
      name:"Email", type:"email", placeholder:"Enter your email"
    },
    {
      name:"Password", type:"password", placeholder:"Enter your password"
    },
    {
      name:"ConfirmPassword", type:"password", placeholder:"Confirm your password"
    }
  ]


  const [count, setCount] = useState(0)
  const Schemas=yup.object().shape({
    Username: yup.string().required("This is required!!"),
    Email: yup.string().email("please provide a valid  email").required("please enter your email"),
    Password: yup.string().max(5,"Password must be at least 5 character!!").required("Password is required"),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password")]," Confirm password must match the password").required("Confirm password is required")
  })
  return (
    
    <div className='flex justify-center items-center min-h-screen h-lvh bg-gray-500'>
      <div className='w-full max-w-md p-8'>
    <Formik className=""initialValues={{
      Username:"",
      Email:"",
      Password:"",
      ConfirmPassword:""

    }} 
    validationSchema={Schemas}
    onSubmit={(values)=>{
      console.log(values)
      alert("Submitted Sucessfully!!!")
    }}
    >
      <Form className=' bg-green-200  flex  flex-col  p-2 shadow-lg rounded-xl'>
        <div>
          <h1 className='text-black text-center font-bold text-3xl'>Login Form</h1>
          </div>
          {
          Forms.map((val,i)=>{
            return(
              <div key={i} className='flex flex-col gap-1 px-2 py-3' >
                {val.name}
                <Field className='bg-white border  w-full rounded-md px-2 py-2 outline-none' name= {val.name} type={val.type} placeholder={val.placeholder}/>
                <ErrorMessage  name={val.name} component={'div'} className='text-red-700'/>
              </div>
            )
          })
          }
        <div className='flex items-center justify-center mx-2 my-2'>
          <button  className='bg-green-600 text-white rounded-lg p-3 w-fit shadow-lg ' type='submit'>Submit</button>
        </div>
        
      </Form>
    </Formik>

      </div>
    </div>
    

      
    
  )
}

export default App
