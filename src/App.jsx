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
      name:"ConfirmPassword", type:"password", placeholder:"Enter your name"
    }
  ]


  const [count, setCount] = useState(0)
  const Schemas=yup.object().shape({
    Username: yup.string().required("This is required!!"),
    Email: yup.string().email("please provide a valid  email"),
    Password: yup.string().max(8,"Password must be at least 8 character").required("Password is required"),
    ConfirmPassword: yup.string().oneOf([yup.ref("password")],"Confirm password must match the password").required("Confirm password is required")
  })
  return (
    <>
    
    
    <Formik initialValues={{
      Username:"",
      Email:"",
      Password:"",
      ConfirmPassword:""

    }} 
    validationSchema={Schemas}
    onSubmit={(values)=>{
      console.log(values)
    }}
    >
      <Form className=''>
        <div>
          {
          Forms.map((val,i)=>{
            return(
              <div key={i} >
                {val.name}
                <Field name= {val.name} type={val.type} placeholder={val.placeholder}/>
                <ErrorMessage  name={val.name} component={'div'} className='text-red-700'/>
              </div>
            )
          })
          }
        <div>
          <button type='submit'>Submit</button>
        </div>
        </div>
      </Form>
    </Formik>
      
    </>
  )
}

export default App
