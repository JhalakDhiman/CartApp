import React, { useState,useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const[items,setItems] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setItems(data);
            console.log("prinintng items");
            console.log(items);
        }
        catch(error){

        }

        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

  return (
    <div className="w-10/12 max-w-6xl mx-auto mt-8 grid grid-cols-4  gap-x-6 gap-y-9">
      {
        loading ? <Spinner/>:(
          items.map((item)=>(
            <Product item={item}></Product>
        ))
        )
      }
    </div>
  )
}

export default Home
