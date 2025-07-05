import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add,remove } from '../redux/slices/CartSlice';

const Product = ({item}) => {

    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();
    console.log(cart);

    function removeProductItem(){
        dispatch(remove(item.id));
        toast.error("item removed from cart");
    }

    function addProductItem(){
        dispatch(add(item));
        toast.success("item added to cart");
    }
    const title = item.title.substring(0,15);
    const description = item.description.substring(0,80);

  return ( 
    <div className="myDiv border group shadow-xl gap-5 flex flex-col items-center justify-center rounded-lg h-[400px] transition-all duration-500 hover:scale-110 ">
      <div className="flex flex-col gap-5 items-center justify-center mx-8">
        
        <div>
          <p className="font-semibold text-[#374151] text-[18px]">{title}...</p>
        </div>

        <div>
          <p className="text-[12px] text-[#9CA3AF]">{description}...</p>
        </div>

        <div>
          <img className="w-[120px] h-[150px]" src={item.image}></img>
        </div>

      </div>
      <div className="flex justify-between items-center w-full p-5">
        <p className="text-[#16A34A] font-bold">${item.price}</p>
        <button>
            {
                cart.some((p)=>(item.id===p.id))?
                (<button className="px-4 py-1 ease-in-out font-semibold rounded-full border-2 text-[14px] text-[#374151] border-[#374151] group-hover:text-white group-hover:bg-[#374151]" onClick={removeProductItem}>
                    Remove Item
                </button>):
                (<button className="px-4 py-1 ease-in-out font-semibold rounded-full border-2 text-[14px] text-[#374151] border-[#374151] group-hover:text-white group-hover:bg-[#374151]"  onClick={addProductItem}>
                    Add To Cart
                </button>)
            }
        </button>
      </div>
    </div>
    
  )
}

export default Product
