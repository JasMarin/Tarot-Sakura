import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import LecturePage from '../pages/LecturePage'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'
function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<App/>} />
            <Route path='/secondpage'  element={<SecondPage/>} />
            <Route path='/thirdpage' element={<ThirdPage/>} />
            <Route path='/lecturepage' element={<LecturePage/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router