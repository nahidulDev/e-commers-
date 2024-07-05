import React, { useRef,useEffect, useState } from 'react'
import { BiSolidUser} from "react-icons/bi"
import{GoTriangleDown} from "react-icons/go"
import DropDownItem from '../layout/DropDownItem'
import List from '../layout/List'
import Listitem from '../layout/Listitem'
const UserDropDown = () => {
 let [show ,setShow]=useState(false);
 let user=useRef();
 
  

      useEffect(()=>{
      document.body.addEventListener("click",(e)=>{
       if(user.current.contains(e.target)){
        setShow( !show)
       } else{
        setShow(false)
       }
      })
      })
  return (
    <div className='flex gap-x-2 relative z-10 ' ref={user}>< BiSolidUser/> < GoTriangleDown/>
    {show && ( 
   <DropDownItem className={"absolute top-10 right-10 w-[300px] "}>
     <List className={"list-none bg-[#262626] text-teal-400 rounded-md"}>
     <Listitem linkName={"block py-4 px-4 text-center bg-neutral-50 font-xl text-neutral-900 font-bold hover:pl-6 transition-all"}
      listitem="My account" link={"/home"}/>
     <Listitem linkName={"block py-4 px-4 text-center text-lime-100 capitalize font-xl font-bold  pl-5 hover:pl-6 transition-all"}
      listitem="logout" link={"/home/loging"} />
     
     </List>
    </DropDownItem>)}
    </div> 
  )
}

export default UserDropDown