import React,{useState} from 'react'

const UseStateHook = () => {

const initialForm = {
    name:"",
    age:""
}
const onchange= ({target:{name,value}})=>{
setForm((prev)=>({...prev,[name]:value}))
}
const [form, setForm] = useState({...initialForm})

console.log(form)
  return (
    <div>
        <h3>Name : {form.name}, Age : {form.age}</h3>
        <input type="text" onChange={onchange}name='name' /><br />
        <input type="text" onChange={onchange}name="age"/>
    </div>
  )
}

export default UseStateHook