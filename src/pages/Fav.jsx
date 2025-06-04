import React, { useEffect } from 'react'
import { NavLink } from 'react-router';
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
    let favorite = JSON.parse(localStorage.getItem("fav")) || [];
    useEffect(() => {
        console.log(favorite)
    },)
    let renderFav = favorite.map(data => {
     return <NavLink
      key={data?.id}
      to={`/receipe`}
      className="no-underline text-inherit"
    >
   <RecipeCard data={data} />
   </NavLink>
})
  return (
  <div className='w-full h-[91%] overflow-auto bg-[#1e1a14]  pt-4 px-4 pb-4 flex gap-4' style={{fontFamily:"Josefin Sans"}}>
    {renderFav}
  </div>
  )
}

export default Fav