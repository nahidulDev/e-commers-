import React from 'react'
import DropDown from './DropDown'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import {ImSearch} from "react-icons/im"
import CartDropDown from '../layout/CartDropDown'
import UserDropDown from '../layout/UserDropDown'
const NavHader = () => {
      
     
  return (
    <>
    <section className='bg-[#dce2ee] py-6 px-2 '>
     <Container>
     <Flex className={"sm:justify-between justify-around"}>
     <DropDown />
     <div className='flex items-center '>
     <input type="search" name="" id="" className=' lg:w-[600px] sm:w-[450px] py-4 pl-2 sm:pr-4 outline-transparent placeholder:font-dm text-sm text-blue-950' placeholder=' Search product' />
      <ImSearch className='ml-[-40px] cursor-pointer'/>
      </div>
      <div className='flex items-center sm:gap-x-4 text-xl cursor-pointer' >
       <UserDropDown/>
      <CartDropDown/>
      </div>
     </Flex>
     </Container>
    </section>
    </>
  )
}

export default NavHader