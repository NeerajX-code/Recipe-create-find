import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

import { NavLink } from 'react-router';
const OuterCard = (props) => {
  let navigate = useNavigate();
  const { data } = props;
  const navigationHandler = (id) => {
    console.log(id)
    navigate(`/receipe/others/details/${id}`)
  }
  return (
     <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-[190px] flex-shrink-0 aspect-[1/1.4] rounded-xl overflow-hidden  bg-[#baebc531] duration-300"
      >
        <motion.img
          transition={{ ease: "anticipate" }}
          className="w-full aspect-video object-cover"
          src={data?.image}
          alt={data?.title}
        />
        <motion.div className="flex flex-col justify-around p-2 gap-1 text-white">
          <h1 className="font-bold">{data?.title}</h1>
          <div className="flex items-center text-gray-300">
            <span className="text-sm">By:</span>
            <span className="text-sm mx-1 font-medium"> {data?.chef}</span>
          </div>
          <p className="text-base h-12 overflow-ellipsis line-clamp-5 text-gray-300" style={{ fontFamily: "monospace" }}>{data?.description}</p>
          <button onClick={() => navigationHandler(data?.id)} className="p-2 bg-[#03A791] text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-200">
            View Recipe
          </button>
        </motion.div>
      </motion.div>
  )
}

export default OuterCard