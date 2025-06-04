import React from 'react'
import { motion} from "motion/react"

const RecipeCard = (props) => {
  let data = props.data;
  return (
    <>
     
      {data.title && data.description && data.title && <motion.div whileHover={{scale:"1.02"}} initial={{scale:"0.9"}} animate={{scale:"1"}} transition={{ease:"circOut",duration:"5",delay:"2"}} className="w-[190px] flex-shrink-0 aspect-[1/1.4] rounded-xl overflow-hidden  bg-[#baebc531] duration-300">
        <motion.img transition={{ease:"anticipate"}}
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
          <p className="text-base h-12 overflow-ellipsis line-clamp-3 text-gray-300" style={{fontFamily:"monospace"}} >{data?.description}</p>
           <button className="px-4 py-2 bg-[#03A791] text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-200">
            View Recipe
          </button>
        </motion.div>
      </motion.div>}
    </>
  )
}

export default RecipeCard