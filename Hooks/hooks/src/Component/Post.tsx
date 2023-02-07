import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Post() {
    
    const [firstName , setFirstName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [phone , setPhone] = React.useState<any>()
    const navigator = useNavigate()
const api ="https://63e213af3e12b193763728ac.mockapi.io/api/Turki"
const PostData = ()=> {
    if(firstName.length >=3 && lastName.length >=3 && email.length >= 3 ){
        axios.post(api, {
    firstName ,
     lastName,
     email,
     phone
     
})
.then
        ((res)=>{
            console.log(res);
    
})
    axios.get("https://63e213af3e12b193763728ac.mockapi.io/api/Turki")
    navigator("/")
    }else{
        alert("please write correct information")
    }

}
  return (
    <div>
        <input placeholder='  الاسم' type='text' onChange={e =>{setFirstName(e.target.value)}} ></input><br />
        <input placeholder='  اسم العائلة' type='text' onChange={e =>{setLastName(e.target.value)}} ></input><br />
        <input placeholder='  البريد الالكتروني' type='email' onChange={e =>{setEmail(e.target.value)}} ></input><br />
        <input placeholder='رقم التواصل ' onChange={e =>{setPhone(e.target.value)}} ></input><br />
        <button onClick={PostData}>تسجيل البيانات</button>
    </div>
  )
}
export default Post

