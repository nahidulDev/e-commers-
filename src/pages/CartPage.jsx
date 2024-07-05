import React from 'react'
import Container from '../layout/Container'
import Breadcums from '../components/Breadcums'
import Flex from '../layout/Flex'
import { ImCross } from "react-icons/im";
import Glass from  "../assets/glass.png"
import Images from '../layout/Images';
import { FiMinus,FiPlus } from "react-icons/fi";
import Button from '../layout/Button';
const CartPage = () => {
  return (
    <> 
            <section className='py-32'>
            <Container>
             <Breadcums 
             title={window.location.pathname.split("/")[1]} 
             linkval={"Home"}
              link={"/"}
              currentpage={window.location.pathname.split("/")[1]}
              currentpagelink={window.location.pathname}/>
            </Container>
            <Flex className={"mt-10 flex-col ml-20"}>
            <Flex className={"bg-[#F5F5F3] w-full  justify-around py-8"}>
            <div className='w-[30%]'>Product</div>
            <div className='w-[20%]'>Price</div>
            <div className='w-[20%]'>Quentity</div>
            <div className='w-[20%]'>Total</div>
            </Flex>
            <Flex className={"flex-col border border-red-[#F0F0F0] border-t-0"}>
            <Flex className={"  w-full justify-around py-8 items-center"}>

            <Flex className={"items-center justify-around gap-x-3 "}> 
            <ImCross />
            <Images src={Glass} className={"w-[100px] h-[100px]"}/>
            <h5>Product Name</h5>
             </Flex>
            <div className='w-[20%] font-bold pl-24 '>$44.00</div>
            <div className='w-[20%]'>
               <Flex className={"w-[15  0px]  items-center border border-[#F0F0F0]"}>
                <button className='px-5'>
            <FiMinus />
            </button>
            <input type="number" for="" className='w-[40px] pl-3' value={1} />
            <button className='px-5'>
            <FiPlus/>
            </button>
               </Flex> 
            </div>
            <div className='w-[20%] font-bold '>$44.00</div>
            </Flex>
            <Flex className={"w-full justify-around  py-8 items-center border-y"}>
                 <Flex className=' w-[100%] items-center '>
                      <select name="" id="" className='w-[255px] px-2 py-10 outline-none border border-[#F0F0F0]'>
                     <option value="">Size</option>
                     </select>
                     <input type="text"  className='w-[255px] px-2 py-10 outline-none border border-[#F0F0F0] hidden' />
                     <h5 className='font-dm font-bold text-xl'>Apply coupon</h5>
                 </Flex>
            </Flex>
            </Flex>
            </Flex>
                           <div className='text-right mt-12   '>
                           <h6 className='font-bold pr-20 '>Cart totals</h6>
                           <Flex className={"w-[644px] ml-auto mt-6 border border-[#F0F0F0]  text-left flex-wrap"}>
                           <h6 className='w-1/2 py-4 px-5 border-r border-b border-[#F0F0F0] text-xl font-bold font-dm'>Subtotal</h6>
                           <h6 className='w-1/2 py-4 px-5  border-r border-b border-[#F0F0F0]'>389.36$</h6>
                             <h6 className='w-1/2 py-4 px-5 border-r border-b border-[#F0F0F0] text-xl font-bold font-dm'>Tutrial</h6>
                           <h6 className='w-1/2 py-4 px-5  border-r border-b border-[#F0F0F0]'>389.36$</h6>
                           </Flex>
                           <Button title={"Proceed to Checkout"} link={"/checkout"} className={"bg-black text-white w-[200px] h-[52px] mt-10 rounded-lg inline-block  px-6 py-4"}/>
                           </div>

            </section>

            

            d
    </>
  )
}

export default CartPage;