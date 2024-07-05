import React, {useRef,useEffect, useState } from 'react'
import {FaBarsStaggered}from "react-icons/fa6"
import DropDownItem from '../layout/DropDownItem'
import List from '../layout/List'
import Listitem from '../layout/Listitem'
const DropDown = () => {
let [show ,setShow]=useState(false);
let category = useRef();

  
      useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
       if(category.current.contains(e.target)){
        setShow(!show)
       } else{
        setShow(false)
       }
      })
      })
  return (
  <>
   
    <div className= 'text-blue-900 sm:w-[150px]  font-dm capitalize text-sm flex items-center cursor-pointer relative '  ref={category}> 
    < FaBarsStaggered className='mr-2 '/> <span className='hidden lg:inline-block'> Shop By Category</span></div>
   {show && ( 
   <DropDownItem className={"absolute top-44 left-26  w-[200px] rounded-md z-10"}>
     <List className={"list-none bg-[#262626] text-teal-400 rounded-md"}>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all "}
      listitem="Accesories"/>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all"}
      listitem="Firniture"/>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all"}
      listitem="Electronic"/>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all"}
      listitem="Clothes"/>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all"} 
     listitem="Bags"/>
     <Listitem linkName={"block py-4 pl-5 hover:pl-6 transition-all"} 
     listitem="Home applicatioins"/>
     </List>
    </DropDownItem>)}
  </>
  )
}

export default DropDown