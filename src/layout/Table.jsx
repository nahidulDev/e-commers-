import React from 'react'

const Table = () => {
  return (
   <>

   <div className='w-full'>
   
          <table className=' border-2 border-solid w-[644px] h-[54px] text-center  mt-14 text-xl font-bold '>
             <tr className=' border-2 border-solid   '>
                 <th className=' border-2 border-solid '>Product</th>
                 <th className=' border-2 border-solid text-[#767676]'>Total</th>
             </tr>
             <tr className=' border-2 border-solid'>  
             <td className=' border-2 border-solid'>Product name x 1</td>
             <td className=' border-2 border-solid text-[#767676]'>389.99 $</td>
             </tr>
             <tr className=' border-2 border-solid'>
             <td className=' border-2 border-solid'>Subtotal</td>
             <td className=' border-2 border-solid text-[#767676]'>389.99 $</td>
             </tr>
             <tr className=' border-2 border-solid'>
             <td className=' border-2 border-solid'>Total</td>
             <td className=' border-2 border-solid text-[#767676]'>389.99 $</td>
             </tr>
          </table>
   </div>
   </>
  )
}

export default Table