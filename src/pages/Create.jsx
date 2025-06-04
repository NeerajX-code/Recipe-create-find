import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DataContext } from '../context/ContextCont';
import { nanoid } from 'nanoid';

const Create = () => {
    const { data, setdata } = useContext(DataContext);
    const { register, handleSubmit, reset ,formState:{errors}} = useForm();
    const submitHandler = (receipe) => {
        console.log(receipe);
        receipe.id = nanoid();
        let copydata = [...data, receipe]
        setdata(copydata);
        localStorage.setItem("data",JSON.stringify(copydata));
        reset();
    }
    return (
        <div className="w-full h-[92%] flex justify-center items-center bg-[#212121] py-10" style={{fontFamily:"Josefin Sans"}}>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full h-[90%] overflow-auto max-w-xl bg-white/10 rounded-2xl shadow-xl p-10 flex flex-col gap-6 backdrop-blur-lg border border-white/20"
            >
                <h2 className="text-3xl font-bold text-white mb-4 text-center tracking-wide">Create New Recipe</h2>
                <div className='flex flex-col gap-1'>
                <input
                    {...register("image",{required:"Enter Url"})}
                    className="w-full border-b-2 border-gray-400 bg-transparent py-3 px-2 outline-none text-white placeholder-gray-300 focus:border-orange-400 transition"
                    type="text"
                    placeholder="Enter Recipe Image URL"
                />
                <small className='text-red-600 text-xl font-semibold ml-2'>{errors?.image?.message}</small>
                </div>
                <input
                    {...register("title")}
                    className="w-full border-b-2 border-gray-400 bg-transparent py-3 px-2 outline-none text-white placeholder-gray-300 focus:border-orange-400 transition"
                    type="text"
                    placeholder="Enter Recipe Title"
                />
                <input
                    {...register("chef")}
                    className="w-full border-b-2 border-gray-400 bg-transparent py-3 px-2 outline-none text-white placeholder-gray-300 focus:border-orange-400 transition"
                    type="text"
                    placeholder="Enter Chef Name"
                />
                <textarea
                    {...register("description")}
                    className="w-full border-b-2 border-gray-400 bg-transparent py-7 px-2 outline-none text-white placeholder-gray-300 resize-none focus:border-orange-400 transition"
                    placeholder="About the Recipe"
                />
                <textarea
                    {...register("ingredients")}
                    className="w-full border-b-2 border-gray-400 bg-transparent align-middle py-7 px-2 outline-none text-white placeholder-gray-300 resize-none focus:border-orange-400 transition"
                    placeholder="Write Ingredients"
                    rows={3}
                />
                <textarea
                    {...register("instruction")}
                    className="w-full border-b-2 border-gray-400 bg-transparent py-7 px-2 outline-none text-white placeholder-gray-300 resize-none focus:border-orange-400 transition"
                    placeholder="Write Instruction"
                    rows={3}
                />
                <select
                    {...register("category")}
                    defaultValue=""
                    className="w-full bg-[#212121] text-white py-3 px-2 rounded-xl outline-none border-none focus:ring-2 focus:ring-orange-400 transition"
                >
                    <option value="" disabled>
                        Select Category
                    </option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
                </select>
                <input
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl cursor-pointer transition"
                    type="submit"
                    value="Save Recipe"
                />
            </form>
        </div>
    )
}

export default Create