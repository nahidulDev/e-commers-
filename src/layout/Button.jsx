import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link,className,linkClassName,title }) => {
  return (
    <>  <div className={`${className}`}>
              <Link to={link} className={`${linkClassName}`}>{title}</Link>
    </div>
    </>
  )
}

export default Button