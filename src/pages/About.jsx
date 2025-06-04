import React from 'react'
import akash from "../assets/Akash.jpg"
import Dhanes from "../assets/Dhanes.jpg"
import Neeraj from "../assets/Neeraj.webp"

const About = () => {
  return (
    <div className='bg-[#1e1a14] h-[91%] overflow-hidden'>
      <div className="flex w-full flex-col h-full justify-between items-center">
        <main className="w-[60%] flex-grow px-6 py-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-600" style={{ fontFamily: "Josefin Sans" }}>About Spice & Simmer</h2>
          <p className="text-2xl text-white" style={{ fontFamily: "caveat" }}>
            Spice refers to the flavorful ingredients like chili, turmeric, and cumin that add aroma, taste, and character to dishes. They are essential in transforming simple food into something exciting and delicious. Simmer, on the other hand, is a gentle cooking method where food is cooked slowly over low heat, allowing flavors to blend perfectly and the dish to develop a rich, smooth texture without boiling vigorously.
          </p>
        </main>
        <h1 className='text-amber-600 text-3xl font-bold w-[48%]' style={{ fontFamily:"Josefin Sans"}}>Our Team :</h1>
        <section className='w-[60%] h-full grid grid-cols-3 gap-5 justify-center'>
          <div className='w-fit flex flex-col gap-2 justify-center items-center'>
            <img className='w-[60%] aspect-square rounded-full object-center object-cover shadow-[0_0_8px_2px_#fffbeb]' src={Neeraj} alt="" />
            <div className='text-center'>
              <h1 className='text-[1.5rem] text-amber-600 font-mono font-medium' style={{ fontFamily: "Josefin Sans" }}>Neeraj Rathore</h1>
              <h2 className='text-white font-semibold text-[1.4rem]' style={{ fontFamily: "caveat" }}>Founder & CEO</h2>
            </div>
          </div>
          <div className='w-full flex flex-col gap-2 justify-center items-center'>
            <img className='w-[60%] aspect-square rounded-full object-center object-cover shadow-[0_0_8px_2px_#fffbeb]' src={akash} alt="" />
            <div className='text-center'>
              <h1 className='text-[1.5rem] text-amber-600 font-mono font-medium' style={{ fontFamily: "Josefin Sans" }}>Akash Rathore</h1>
              <h2 className='text-white font-semibold text-[1.4rem]' style={{ fontFamily: "caveat" }}>Head Of Culinary Content</h2>
            </div>
          </div>
          <div className='w-fit flex flex-col gap-2 justify-center items-center'>
            <img className='w-[60%] aspect-square rounded-full object-center object-cover shadow-[0_0_8px_2px_#fffbeb]' src={Dhanes} alt="" />
            <div className='text-center'>
              <h1 className='text-[1.5rem] text-amber-600 font-mono font-medium' style={{ fontFamily: "Josefin Sans" }}>Master Dhanesh</h1>
              <h2 className='text-white font-semibold text-[1.4rem]' style={{ fontFamily: "caveat" }}>Head Of The Head</h2>
            </div>
          </div>
        </section>

        <footer className="border-t w-full border-slate-200 px-6 py-4 text-center text-sm text-white" style={{ fontFamily: "Josefin Sans" }}>
          &copy; {new Date().getFullYear()} Spice & Simmer All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default About