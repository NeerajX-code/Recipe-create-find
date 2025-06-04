import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { DataContext } from '../context/ContextCont';
import UpdateForm from '../components/UpdateForm';

const SingleReceipe = () => {
    const { id } = useParams();
    const { data } = useContext(DataContext);
    let recipe = data.find((r) => String(r.id) === String(id));
    let Navigate = useNavigate();

    const [fav,setfav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

    let favorite = () => {
        let copyfav = [...fav];
        copyfav = copyfav.filter(f => f.id != recipe.id); // Remove if already exists
        copyfav.push(recipe);
        setfav(copyfav)
        localStorage.setItem("fav",JSON.stringify(copyfav));
    }
    let unfavorite = () => {
        let filterfav = fav.filter(f => f.id != recipe.id) 
        setfav(filterfav);
        localStorage.setItem("fav",JSON.stringify(filterfav))
    }
    useEffect(() => {

    }, [fav])
    
   
    if (!recipe) {
        return <div>Recipe not found
            <button onClick={() => Navigate("/receipe")}>Back to recipe</button>
        </div>;
    }
    return (
        <div className='w-full h-[92%] flex '>
            <div className='left w-[50%] overflow-auto bg-[#FBF3C1] pt-4 px-4 pb-4 flex flex-col gap-4' style={{ fontFamily: "round8plus" }}>
                <div className='flex justify-between px-2'>
                     <h1 className='text-4xl' >{recipe?.title}</h1>
                     {fav.find(r => String(r.id) === String(recipe.id)) ? <i onClick={unfavorite} className="ri-heart-fill"></i> : <i onClick={favorite} className="ri-heart-line"></i>}
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl'>Chef: {recipe?.chef}</h2>
                    <h2 className='text-2xl'>{recipe?.category && "Category:" + recipe?.category}</h2>
                </div>
                <img src={recipe?.image} alt={recipe?.title} className='w-full aspect-video rounded-2xl object-cover' />
                <p className='text-lg'>{recipe?.description}</p>
                <h3 className='text-lg '><span className='font-semibold'>Ingredients:</span> {recipe?.ingredients}</h3>
                <h3 className='text-lg '><span className='font-semibold'>Instruction:</span> {recipe?.instruction}</h3>
                <div className='text-center pt-2'>
                    <button className='w-fit px-4 py-2 rounded-[32px] text-[20px] font-["General Sans"] bg-amber-300' onClick={() => Navigate("/receipe")}>Back to Recipes</button>
                </div>
            </div>
            <UpdateForm id={id} />
        </div>
    )
}

export default SingleReceipe