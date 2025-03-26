import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import EditPage from './Pages/EditPage'
import ShowData from './Pages/ShowData'
import Test from './Pages/Test'

const App = () => {

   return (
      <>

         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='editpage' element={<EditPage />} />
               <Route path='showpage' element={<ShowData />} />
               <Route path='test' element={<Test />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default App
