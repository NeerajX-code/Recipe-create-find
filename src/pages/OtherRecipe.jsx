import { useEffect , useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router'
import { DataContext } from '../context/ContextCont';
const OtherRecipe = () => {
  const {id} = useParams();
  let {outerDataState} = useContext(DataContext)
  let recipe = outerDataState.find(r => r.id == id);
  console.log(recipe);

  let Navigate = useNavigate();

    const [fav, setfav] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem("fav")) || [];
      } catch {
        return [];
      }
    });

    const favorite = () => {
      if (!fav.some(f => f.id === recipe?.id)) {
        const updatedFav = [...fav, recipe];
        setfav(updatedFav);
      }
    };

    const unfavorite = () => {
      const updatedFav = fav.filter(f => f.id !== recipe?.id);
      setfav(updatedFav);
    };

    // Sync localStorage when fav changes
    useEffect(() => {
      localStorage.setItem("fav", JSON.stringify(fav));
    }, [fav]);
  return (
    <div className='w-full h-[91%] overflow-auto bg-[#FBF3C1] pt-4 px-4 pb-4 flex flex-col gap-4' style={{fontFamily:"Josefin Sans"}}>
                <div className='flex justify-between px-2'>
                     <h1 className='text-4xl' >{recipe?.title}</h1>
                     {fav.find(r => r.id === recipe?.id) ? <i onClick={unfavorite} className="ri-heart-fill"></i> : <i onClick={favorite} className="ri-heart-line"></i>}
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl'>Chef: {recipe?.chef}</h2>
                    <h2 className='text-2xl'>{recipe?.category && "Category: " + recipe?.category}</h2>
                </div>
                <img src={recipe?.image} alt={recipe?.title} className='w-[100%] aspect-video rounded-2xl object-contain' />
                <p className='text-lg'>{recipe?.description}</p>
                <h3 className='text-lg '><span className='font-semibold'>Ingredients:</span> {recipe?.ingredients}</h3>
                <h3 className='text-lg '><span className='font-semibold'>Instruction:</span> {recipe?.instruction}</h3>
                <div className='text-center pt-2'>
                    <button className='w-fit px-4 py-2 rounded-[32px] text-[20px] font-["General Sans"] bg-amber-300' onClick={() => Navigate("/receipe")}>Back to Recipes</button>
                </div>
            </div>
  )
}

export default OtherRecipe