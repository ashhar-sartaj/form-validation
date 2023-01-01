import { useRef, useState } from 'react'
import './App.css'
import FormInputs from './Components/FormInputs'
function App() {
  const [username, setUsername] = useState("")
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })
  console.log(values)
  console.log(values.username)
  //Inputs array
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      label: "Username"
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email"
    },
    {
      id:3,
      name: "birthday",
      type: "text",
      placeholder: "Dat of Birth",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "ConfirmPassword"
    }
  ] 
  // const usernameRef = useRef();
  // console.log(username)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ashhar")
  }
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  console.log(values) 
  
  return (
   <>
   <div className='app'>
    <form onSubmit={handleSubmit}>
    {/* <FormInputs  placeholder="Username" setUsername={setUsername}/>
   <FormInputs placeholder="email"/>
   <FormInputs placeholder="full-name"/>
   <FormInputs placeholder="sth"/> */}
      {inputs.map((input, key)=> (
        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
    <button type='submit'>Submit</button>
    </form>
    
   </div>
   
   </>
  ) 
}

export default App
