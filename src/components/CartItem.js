import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    function removeItem(){
        dispatch(remove(item.id));
        toast.error("item removed from cart");
    }

    const description = item.description.substring(0,108);

  return (
    <div className="flex p-10 gap-12 items-center border-b-2 border-slate-500">
      <div>
        <img width="300px" height="300px" src={item.image}></img>
      </div>
      <div className=" flex flex-col gap-6 justify-between">
        <p className="text-[20px] font-semibold text-[#374151] ">{item.title}</p>
        <p className="text-[#334155] text-[18px]">{description}...</p>
        <div className="flex justify-between items-center pr-10">
            <p className="text-[#16A34A] text-[18px] font-bold">${item.price}</p>
            <button className="bg-[#FECACA] p-3 group rounded-full hover:bg-[#FFCBA4]" onClick={removeItem}>
                <AiFillDelete className="text-red-800 group-hover:text-white"/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
