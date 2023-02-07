import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Effect() {
    const [data , setData] =React.useState([])

const navigate = useNavigate()


   
    React.useEffect (()=>{
        axios.get("https://63e213af3e12b193763728ac.mockapi.io/api/Turki").then(res =>{
            
            console.log(res.data);
            setData(res.data);
            
            
        })

    },[])

    const DeleteItam= (id:string)=>{
        console.log(id);
        axios.delete(`https://63e213af3e12b193763728ac.mockapi.io/api/Turki/${id}`).then(res=>{
            setData(data.filter((del)=>{
            console.log(res);
            return del.id !=id
    })
      )  })
        
    }
  return (
        
    <div>

<h2>Read</h2>
<button onClick={()=>{navigate('/creatBlog')}}>Post Data</button>
    {data.map((item:any)=>
    <ul>
    <li key={item.id}>
        {"Welcome : "+item.firstName + " " +item.lastName}
    </li>
    <li key={item.id}>
        {"Your Email :"+" "+ item.email}
    </li>
    <li key={item.id}>
        {"Phone Number : "+ " " + item.phone}

    </li>
    <button onClick={()=> {DeleteItam(item.id)}}>Delete</button>
    </ul>
    
    )}
    </div>
  )
    }
export default Effect