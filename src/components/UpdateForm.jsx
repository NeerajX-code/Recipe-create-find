import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react'; 
import { DataContext } from '../context/ContextCont';
import { useNavigate } from 'react-router';

const UpdateForm = (props) => {
    const { data, setdata } = useContext(DataContext);
    const { id } = props;
     let recipe = data.find((r) => r.id === id);
    let Navigate = useNavigate();
     const { register, handleSubmit } = useForm({
        defaultValues: {
            image: recipe.image,
            title: recipe.title,
            chef: recipe.chef,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instruction: recipe.instruction,
            category: recipe.category
        }
    });
    const submitHandler = (receipe) => {
        let r = data.findIndex((r) => r.id === id);
        let copydata = [...data];
        copydata[r] = { ...receipe, id };
        setdata(copydata);
        localStorage.setItem("data",JSON.stringify(copydata));
    }
    const DeleteHandler = () => {
        let r = data.filter((r) => r.id !== id);
        setdata(r);
        localStorage.setItem("data",JSON.stringify(r));
        let fav = JSON.parse(localStorage.getItem("fav")) || [];
        let filterfav = fav.filter(f => f.id != id);
        localStorage.setItem("fav",JSON.stringify(filterfav))
        Navigate("/receipe");
    }

  return (
     <div className='right w-[50%] flex jusfify-center items-center bg-[#219B9D]'>
                <div className='w-full flex justify-center items-center'>
                    <form onSubmit={handleSubmit(submitHandler)} className='w-full h-fit overflow-auto flex flex-col gap-6 items-center backdrop-blur-2xl'>
                        <input {...register("image")} className='w-[80%] bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none text-black' type="text" placeholder='Enter Receipe Url' />
                        <input {...register("title")} className='w-[80%] bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none' type="text" placeholder='Enter Receipe Title' />
                        <input {...register("chef")} className='w-[80%] bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none' type="text" placeholder='Enter chef Name' />
                        <textarea {...register("description")} className='w-[80%] h-fit bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none resize-none' placeholder='About the Receipe' />
                        <textarea {...register("ingredients")} className='w-[80%] h-fit bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none resize-none' placeholder='Write Ingredients' />
                        <textarea {...register("instruction")} className='w-[80%] h-fit bg-[#fffffff0] p-2 rounded-xl pb-4 outline-none resize-none' placeholder='Write Instruction' />
                        <div className='flex gap-4 items-center justify-center w-full'>
                            <select {...register("category")} defaultValue="" className='w-fit bg-white text-black outline-none border-none p-4 flex justify-center rounded-2xl' style={{ backdropFilter: "blur(10px)" }}>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="supper">Supper</option>
                                <option value="dinner">Dinner</option>
                            </select>
                            <input className='w-fit bg-[#19ee32] outline-none font-semibold border-none p-4 rounded-2xl' type="submit" value={"Update Receipe"} />
                           <button type='button' className='w-fit bg-[#eb3114] text-white font-semibold outline-none border-none p-4 rounded-2xl' onClick={DeleteHandler} >Delete Receipe</button>
                        </div>
                    </form>
                </div>v
            </div>
  )
}

export default UpdateForm