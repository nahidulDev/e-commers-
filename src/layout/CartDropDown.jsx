import React, { useEffect, useRef, useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import DropDownItem from './DropDownItem'
import Flex from './Flex'
import CartImg from "../assets/cart.png"
import Images from './Images'
import {ImCross} from "react-icons/im"
import Button from './Button'
import { Link } from 'react-router-dom'

const CartDropDown = () => {

 let [cartshow ,setCartShow]=useState(false);
  
     let cart=useRef();
     
     useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
       if(cart.current.contains(e.target)){
        setCartShow( !cartshow)
       } else{
        setCartShow(false)
       }
      })
      })
     
  return (
  
    <div className='relative cursor-pointer z-10'  ref={cart}><FaShoppingCart/>
    { cartshow && (
    <DropDownItem className={"absolute top-10 right-0  w-[360px] rounded-md"}>
    <div className='bg-[#F5F5F3]'>
    <Flex className={"gap-x-5 items-center text-sm font-dm font-bold p-5"}>
    <Images src={CartImg}/>
    <div>
    <h5 className='mb-5'>Black Smart Watch</h5>
    <h6>$44.00</h6>
    </div>
    <ImCross className='pl-2 text-xl'/>
    </Flex>
    <div>
    <h5 className='text-[#767676] font-dm ml-2'>Subtotal:<span className='text-black font-bold ml-4'>$44.25</span></h5>
    </div>
           <div className='flex p-4 gap-3 items-center'>
           <Button
            link={"/cart"}
            title={"Vew Card"}
            className={"bg-black border-s-white border-2 text-white  p-5 text-center w-[170px] font-dm hover:text-gray-400 transition-all"}/>
          <Button 
           link={"/checkout"}
          title={"Checkout"}
           className='bg-white border-s-black border-2 text-slate-900 p-5 text-center w-[170px]  font-dm  border-red-700 hover:text-amber-400 transition-all' 
          />
           </div>
    </div>
    </DropDownItem>
    )}
    </div>
  )
}

export default CartDropDown;