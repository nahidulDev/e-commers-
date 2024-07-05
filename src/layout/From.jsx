import React from 'react'
import Container from './Container'
import Images from './Images'
import Map from "../assets/map.png"


const From = () => {
  return (
    <>
    <Container>
    <section>
    <form className=' mt-10'>
      <label className=' text-lg font-bold font-dm mt-10' for ="name" > Name</label>
    <input className='block w-[780px] h-[68px] text-[#767676] p-3 outline-none ' id='name' type='text' name='name'placeholder='Your Name is Here'/>
     <label className=' text-lg font-bold font-dm mt-10' for ="email"> Email</label>
    <input className='block w-[780px] h-[68px] text-[#767676] p-3 outline-none ' id='Email' type='Email' name='Email'placeholder='Your Email is Here'/>
    <label className=' text-lg font-bold font-dm mt-10' for ="massages">Massages</label>
    <textarea className=' block w-[780px] h-[138px]  text-[#767676] p-3 outline-none '   placeholder='Your massages is here'></textarea>
    <button className=' w-[220px] h-[50px] p-4 bor bg-[#262626] text-white rounded-sm  text-center'> Post</button>
    </form>

    <Images src={Map} className={"mt-44"}/>
    </section>
    </Container>
    </>
  )
}

export default From;