import React from 'react'
import Images from '../layout/Images'
import Img14 from "../assets/img15.png"
import Img5 from "../assets/img16.png"
import Flex from '../layout/Flex'
import Container from '../layout/Container'

const About_Banner = () => {
  return (
   <>
    <Container>
    <section className='w-full'>
    <div className='mb-10' >
     <Flex className={" justify-between"}>
     <Images  src={Img14} className={" w-[700px] h-[700px]"}/>
     <Images  src={Img5} className={"w-[700px] h-[700px]"}/>
     </Flex>
    </div>
    </section>
    </Container>
    </>
  )
}

export default About_Banner;