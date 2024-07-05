import React from 'react'
import Images from './Images'
import Flex from './Flex'
import {AiFillHeart} from "react-icons/ai"
import {BiGitCompare} from "react-icons/bi"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Product = ({className, label,labelShow,productImg ,productTitle,productPrice ,labelShow1,link}) => {
let setLabelShow=labelShow;
let setLabelShow1=labelShow1;
  return (
   <Link to={link}>
    <div className= {`w-[376px]  relative font-dm group  ${className}`}>
 
      {setLabelShow &&(<div className=' bg-black absolute top-10 z-10 left-12 text-white p-2 text-center w-[120px] 
      font-bold text-sm'> {label}</div>)}
    <div className='relative overflow-hidden'>
    < Images className={"w-[376px] h-[376px]  mt-7 "} src={productImg} imgClassName={"w-full w-382px h-382px"} />
      <div className='w-full absolute bottom-[-150px] left-0 bg-white text-right font-dm text-base text-[#767676]
       px-[25px] py-[30px] group-hover:bottom-0 transition-all'>

      <h6>Add to wish list <AiFillHeart className='inline-block text-black ml-4'/></h6> 
       <h6 className='my-5'>Compare <BiGitCompare className='inline-block text-black ml-4'/> </h6>
        <h6 className='text-black'>Add to wish Cart <FaShoppingCart className='inline-block text-black ml-4'/></h6>
     </div>
    </div>
  
    <Flex className={"justify-between "}>
    <h4 className='text-[#262626] font-bold pt-5 text-xl capitalize'>{productTitle}</h4>
    <h4 className='text-[#767676] font-bold pt-5 text-xl pr-2' >{productPrice}</h4>
    </Flex>
     <div className={`pt-8 text-[#767676] capitalize font-dm text-xl ${setLabelShow1 ? "visible" : "invisible	"} `}>   </div>
    </div>
   </Link>
  )
}

export default Product;