import Breadcums from '../components/Breadcums'
import Container from '../layout/Container'
import React from 'react'
import Flex from '../layout/Flex'
import Title from '../layout/Title'
import From from '../layout/From'
const Contract = () => {
  return (
    <>

        <section className='pt-[100px] pb-36'>
       <Container>
          <Breadcums title={"Contract"} linkval={"Home"} link={"/"} currentpage={"Contract"} currentpagelink={window.location.pathname}/>
    <Flex className={"gap-x-10 mt-32 s  relative"}></Flex>

    <Title  title={"Fill up a From"} className={"text-[#262626]  text-5xl font-dm font-bold "}/>

       <From/>

       </Container>
   </section>                              
    </>
  )
}

export default Contract