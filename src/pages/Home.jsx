import Recipe from "../assets/recipe.png";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion ,useAnimation } from "motion/react"
const Home = () => {
  const Navigate = useNavigate();
   const controls = useAnimation();

  useEffect(() => {
    // Start scale once
    controls.start({
      scale: 1,
      transition: { ease: "anticipate", duration: 1 }
    });

    // Loop rotation infinitely
    controls.start({
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 10,
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [controls]);
  return (
    <>
      <motion.div className="bg-[#1e1a14] h-[91%] overflow-x-hidden">
        <motion.div initial={{ scale: "0.8" }} animate={{ scale: "1" }} transition={{ ease: "easeIn", duration: "10" }}
          className="flex  flex-col "
          style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container w-full flex gap-[2rem] mt-[4rem] rounded-l-2xl rounded-r-full px-[4rem] h-[42%]">
            <div
              className="flex h-full bg-white/10 backdrop-blur-3xl rounded-4xl flex-col gap-6  @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8"
            >
              <div className="flex flex-col gap-2 overflow-hidden text-center">
                <motion.h1
                  initial={{ scaleY: 0.2 }}
                  animate={{ scaleY: 1 }}
                  transition={{ ease: "anticipate", duration: 1 }}
                  style={{ transformOrigin: "bottom", fontFamily: "Lilita One"}}
                  className="text-white text-4xl leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Welcome to <div className="text-amber-600 inline" >Spice & Simmer</div> - Where Every Recipe Tells a Story
                </motion.h1>
                <motion.h2
                  initial={{ transform: "translateY(150px)" }}
                  animate={{ transform: "translateY(0)" }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="text-gray-200 font-extralight text-[1.1rem] leading-normal" style={{ fontFamily: "Edu VIC WA NT Beginner" }}>
                  Step into a world of rich flavors, vibrant colors, and timeless Indian recipes. At Spice & Simmer, we serve more than just food — we serve culture, tradition, and a taste of home. Whether you're craving a creamy butter paneer, spicy biryani, or a refreshing masala chai, our modern layout and easy-to-follow recipes are crafted for every kind of cook.
                </motion.h2>
              </div>
              <button onClick={() => Navigate("/receipe")} className="flex min-w-[84px] max-w-[480px] font-mono cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-amber-600 text-gray-100  text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Explore Recipes</span>
              </button>
            </div>
            <motion.img initial={{scale:0.8,rotate:0}} animate={controls} className="w-[18%] h-full object-contain" src={Recipe} alt="" />
          </div>

          <h2 className="text-white text-center px-8 text-[25px] font-bold tracking-[4px] leading-tight pb-3 pt-5" style={{ fontFamily: "Josefin Sans" }} >
            Recipe Categories
          </h2>
          <div className="flex justify-center">
            <div className="flex p-4 gap-3">
              {[
                {
                  title: "Breakfast Delights",
                  url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJlYWtmYXN0fGVufDB8fDB8fHww",
                },
                {
                  title: "Lunch Specials",
                  url: "https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THVuY2h8ZW58MHx8MHx8fDA%3D",
                },
                {
                  title: "Supper Sensations",
                  url: "https://plus.unsplash.com/premium_photo-1737964908633-f59d9f124250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcGVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
                },
                {
                  title: "Dinner Delicacies",
                  url: "https://images.unsplash.com/photo-1595440432061-e6c25f9feaf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fERpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
                },
                {
                  title: "Desert treats",
                  url: "https://images.unsplash.com/photo-1711043484522-ad01c2bd769b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map(({ title, url }) => (
                <div
                  key={title}
                  className="flex w-[200px] h-full flex-1 flex-col gap-4 rounded-lg min-w-40"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: `url(${url})` }}
                  ></div>
                  <p className="text-white text-center text-xl font-medium leading-normal" style={{ fontFamily: "caveat" }}>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
