import React from 'react'
import "./cardInfo.module.scss"
export const CardInfo = (props) => {
    const {options,onVisibleHandler}=props;
  return (
    <div>
         {options.map((option,index)=>{
  return(<ul key={index} onClick={onVisibleHandler}> <li  > {option}</li></ul>)
 })}
    </div>
  )
}
