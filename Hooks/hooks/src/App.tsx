import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Component/Effect'
import { Route, Routes } from 'react-router-dom'
import Post from './Component/Post';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path='/' element={<Effect/>}></Route>
          <Route path='/creatBlog' element={<Post/>}></Route>
      </Routes>

    </div>
  )
}

export default App
