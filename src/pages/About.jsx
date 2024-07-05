import React from 'react'
import Product from '../layout/Product'
import Container from '../layout/Container'
import Flex from '../layout/Flex'
import Breadcums from '../components/Breadcums'
import About_Banner from '../components/About_Banner'
import CartInfo from '../layout/CartInfo'
import { Cart } from '../layout/Cart'

const About = () => {
  return (
    <>
    <section className='pt-[100px] pb-36'>
    <Container>
    
       <Breadcums title={"About"} linkval={"Home"} link={"/"} currentpage={"About"} currentpagelink={window.location.pathname}/>
    <Flex className={"gap-x-10 mt-32 s  relative"}></Flex>
      <About_Banner></About_Banner> 
    
      <p className=' text-3xl  text-[#262626] font-normal font-dm w-[1602px] h-[106px] mt-20 '> Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p> 
         <Cart>
         
        </Cart>
    </Container>
    </section>
    </>
  )
}

export default About