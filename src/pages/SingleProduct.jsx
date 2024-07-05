import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Container from '../layout/Container'
import Breadcums from '../components/Breadcums'
import Flex from '../layout/Flex'
import Images from '../layout/Images'
import { FaPlus } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Title from '../layout/Title'
import From from '../layout/From'
const SingleProduct = () => {
let {productId}= useParams();
const [loading, setLoding]=useState(true);
const [accordian, setAccordian]=useState(false);
const [accordian1, setAccordian1]=useState(false);
const [accordian2, setAccordian2]=useState(false);
const[product,setProduct]=useState([]);
useEffect(()=>{

 const getProduct=async ()=>{
 await fetch(`https://dummyjson.com/product/${productId}`)
 .then((result)=>result.json())
 .then ((data)=> setProduct(data))
 .finally(()=>setLoding(false));
 };
 getProduct();
},[]);
  return (
   <>
      <section>
           <Container>
            <Breadcums title={"product"} linkval={"Home"} link={"/"} 
            currentpage={"Products"} currentpagelink={window.location.pathname}/>
            {loading ?(
            
            "Loading..") :(<Flex className={"flex-wrap gap-10 justify-center items-center pt-10 pl-60"}>
            {product.images.map((value) =>(
            <Images src={value} className={"w-[48%]"}
             imgClassName={"w-[382px] h-[382px] object-cover"}
            />
            ))}
            </Flex>)}
            <h2 className='text-3xl font-dm font-bold text-black pt-10 pl-10'>{product.title}</h2>
           <Flex>
         <strike>
         
            <h5 h2 className='text-xl font-dm font-bold text-black pt-5 pl-10'>{product.price}</h5>
         </strike>
            <h5 className='text-xl font-dm font-bold text-black pt-5 pl-10'> {Math.ceil(product.price * product.discountPercentage)/100}</h5>
          
           </Flex>
               <Flex className={"gap-x-5"}>
                    <div className='text-black font-dm text-xl font-bold pl-10 mb-7 pm-5 mt-5'>Size</div>
             <select className='text-[#767676] font-dm text-xl font-bold ml-10 mb-7 pm-5 mt-5 border-none'>
            <option value="S">S</option>
               <option value="M">M</option>
                  <option value="L">L</option>
                     <option value="XL">XL</option>
            </select>
               </Flex>
                <Flex className={"gap-x-2"}>
                 <h5 className='text-black font-dm text-xl font-bold pl-10 '>Status:</h5>
                   <h5 className='text-[#767676]  font-dm text-xl font-bold pl-10 '>{product.stock==0?"Out of Stock" :"In Stock"}</h5>
                </Flex>
                <Flex className={"gap-x-4"}>
                <button className=' bg-red-400 text-center  hover:bg-sky-700 ml-10 mt-5 text-black border-solid border-black w-[200px] h-[50px] '>Add to Wish List</button>
                <button className='bg-black text-white  bor  hover:bg-sky-900  mt-5 l-10 w-[200px] h-[50px] text-center'>Add to Cart</button>
                </Flex>
                <Flex className={"flex-col"}>
               <div className='flex justify-between'> <div className='mt-10 ml-10 text-black text-2xl font-dm font-bold relative ' >EATURES  & DETAILS</div> <FaPlus className='mt-10' onClick={()=>setAccordian(!accordian)} /></div>
                <div className={` text-[#767676] font-dm text-xl pl-10  ${accordian ? "visible ": " absolute opacity-0 translate-y-[-50px] w-full"} transition-all duration-1000`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
                </Flex>

                <div className='flex gap-x-20 mt-10 ml-10 font-dm'>
                <div onClick={()=>setAccordian1(!accordian1)}  className='text-[#767676] text-2xl'> Description</div>
                <div onClick={()=>setAccordian2(!accordian2)} className='text-[#262626] text-2xl font-dm font-bold'>Reviews (1)</div>
                </div>
                <div className='mt-5 ml-10 text-[#767676] font-xl '>1 review for Product</div>
                  <div className='flex gap-x-7 mt-10 ml-10 text-2xl'>
                  <div>John Ford</div>
                  <div className='flex text-[#FFD881] pt-1 '><IoStar /> <IoStar /> <IoStar /><IoStar /><IoStar /></div>
                  </div>
                           <div className="text-right text-[#767676] text-xl">6 months ago</div>
                           <div className={`mt-5 ml-5 text-[#767676] font-dm text-xl ${!accordian1 ? "visible opacity-100 translate-y-0": " hidden opacity-0 translate-y-[-50px]"} transition-all duration-1000}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                           <div className={"text-black text-3xl mt-5 ml-10 font-bold"}>Add a Review</div> 
                             <form className={`mt-10 ml-10 ${!accordian2 ? "visible opacity-100 translate-y-0": " hidden opacity-0 translate-y-[-50px]"} transition-all duration-1000}`}>
      <label className=' text-lg font-bold font-dm mt-10' for ="name" > Name</label>
    <input className='block w-[780px] h-[68px] text-[#767676] p-3 outline-none ' id='name' type='text' name='name'placeholder='Your Name is Here'/>
     <label className=' text-lg font-bold font-dm mt-10' for ="email"> Email</label>
    <input className='block w-[780px] h-[68px] text-[#767676] p-3 outline-none ' id='Email' type='Email' name='Email'placeholder='Your Email is Here'/>
    <label className=' text-lg font-bold font-dm mt-10' for ="massages">Massages</label>
    <textarea className=' block w-[780px] h-[138px]  text-[#767676] pt-3 outline-none '   placeholder='Your massages is here'></textarea>
    <button className=' w-[220px] h-[50px] p-3 bor bg-[#262626] text-white rounded-sm font-xl font-bold  text-center'> Post</button>
    </form>
           </Container>
      </section>
   </>
  )
}

export default SingleProduct