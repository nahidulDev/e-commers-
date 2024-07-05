import React from 'react'
import Container from '../layout/Container'
import Images from '../layout/Images'
import banner4 from "../assets/banner4.png"

const Phone = () => {
  return (
    <>
    <section className='mb-20 '>
    <Container>
   <Images src={banner4}/>
    </Container>
    </section>
    </>
  )
}

export default Phone