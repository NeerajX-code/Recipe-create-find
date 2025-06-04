import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Receipe from '../pages/Receipe'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleReceipe from '../pages/SingleReceipe'
import Fav from '../pages/Fav'
import OtherRecipe from '../pages/OtherRecipe'


const MainRoute = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/receipe' element={<Receipe />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
        <Route path='/favorite' element={<Fav />} />
        <Route path='/receipe/details/:id' element={<SingleReceipe />} />
        <Route path='/receipe/others/details/:id' element={<OtherRecipe />} />
      </Routes>
    </>
  )
}

export default MainRoute