import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({className, listitem,linkName,link}) => {
  return (
   <li className={`${className}`}><Link to={link} className={`${linkName}`}> {listitem}</Link></li>
  )
}

export default Listitem