import React from 'react'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import { PiNumberTwoBold} from "react-icons/pi"
import {FaTruck} from "react-icons/fa"
import { RxReload} from "react-icons/rx"
const Icons = () => {
  return (
    <>
   <Container>
   <div className="w-full mt-5 ">
   <Flex className={"justify-around gap-x-3"}> 
   <div className="flex items-center gap-x-2">
   <PiNumberTwoBold className="text-xl"/>
   <h6 className='font-dm text-[#6D6D6D]'>Two Years Waranty</h6>
   </div>
   <div className="flex items-center gap-x-2">
   <FaTruck className="text-xl"/>
   <h6 className='font-dm text-[#6D6D6D]'>Free Shipping</h6>
   </div>
   <div className='flex items-center gap-x-2'>
   <RxReload className="text-xl"/>
   <h6 className='font-dm text-[#6D6D6D]'>Return Policy in 30 dayes</h6>
   </div>
   </Flex>
   </div>
   </Container>
    </>
  )
}

export default Icons