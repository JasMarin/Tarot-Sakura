import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
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
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router