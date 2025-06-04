import React, { useContext, useState } from 'react'
import { DataContext } from '../context/ContextCont'
import RecipeCard from '../components/RecipeCard';
import { motion } from "motion/react"
import OuterCard from '../components/OuterCard';
import { outerData } from '../context/outerData';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid'

const Receipe = () => {

  const { data, outerDataState, setOuterDataState } = useContext(DataContext);
  let renderData = data.map(data => {
    return (
      <NavLink
        key={data.id}
        to={`/receipe/details/${data.id}`}
        className="no-underline text-inherit" style={{ fontFamily: "Josefin Sans" }}
      >
        <RecipeCard data={data} />
      </NavLink>
    )
  })


  const outerRenderData = outerDataState.map(data => {
    return (
      <NavLink
        key={data.id}
        to={`/receipe/others/details/${data.id}`}
        className="no-underline text-inherit" style={{ fontFamily: "Josefin Sans" }}
      >
        <OuterCard data={data} />
      </NavLink>
    )
  });

  const [activeFilter, setActiveFilter] = useState(null);

  const filterHandler = (type) => {
    if (activeFilter === type) {
      // Reset filter
      setOuterDataState(outerData.map(data => ({ ...data, id: nanoid() })));
      setActiveFilter(null);
    } else {
      // Apply filter
      const filteredData = outerData.filter(item => item.category === type);
      setOuterDataState(filteredData.map(data => ({ ...data, id: nanoid() })));
      setActiveFilter(type);
    }
  };

  return (
    <motion.div className='recipe w-full flex flex-col overflow-hidden h-[91%] bg-[#1e1a14]'>
      <div className='w-full px-4 py-2 justify-center flex items-center text-white gap-2' style={{ fontFamily: "Josefin Sans" }}>
        <h2>Filters:</h2>
        <button className='py-2 px-4 rounded-full border-1 border-white transition-all ease-in hover:bg-white hover:text-black hover:border-0 focus:bg-white focus:text-black focus:border-0' onClick={() => filterHandler("Breakfast")}>Breakfast</button>
        <button className='py-2 px-4 rounded-full border-1 border-white transition-all ease-in hover:bg-white hover:text-black hover:border-0 focus:bg-white focus:text-black focus:border-0' onClick={() => filterHandler("Lunch")}>Lunch</button>
        <button className='py-2 px-4 rounded-full border-1 border-white transition-all ease-in hover:bg-white hover:text-black hover:border-0 focus:bg-white focus:text-black focus:border-0' onClick={() => filterHandler("Supper")}>Supper</button>
        <button className='py-2 px-4 rounded-full border-1 border-white transition-all ease-in hover:bg-white hover:text-black hover:border-0 focus:bg-white focus:text-black focus:border-0' onClick={() => filterHandler("Dinner")}>Dinner</button>
        <button className='py-2 px-4 rounded-full border-1 border-white transition-all ease-in hover:bg-white hover:text-black hover:border-0 focus:bg-white focus:text-black focus:border-0' onClick={() => filterHandler("Dessert")}>Desert</button>
      </div>
      <div className='w-[100%] min-h-[270px] flex gap-4 overflow-x-auto p-2'>
        {outerRenderData}
      </div>
      <h2 className='w-full text-center p-2 text-white text-2xl' style={{ fontFamily: "Josefin Sans" }}>OUR Recipes</h2>
      <div className="w-full flex gap-4 overflow-x-auto p-2">
        {data.length > 0 ? renderData : <div className='text-white flex p-2 justify-center items-center min-h-[250px] w-full text-2xl' style={{ fontFamily: "Josefin Sans" }}>
          <h1>You don't Create Recipe Yet</h1>
          </div>}
      </div>
    </motion.div>
  )
}

export default Receipe