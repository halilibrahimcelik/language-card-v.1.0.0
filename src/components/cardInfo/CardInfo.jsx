import React from 'react'
import  styles from "./cardInfo.module.scss"
export const CardInfo = (props) => {
    const {options,onVisibleHandler}=props;
  return (
    <div className={styles.wrapper}>
         {options.map((option,index)=>{
  return(<ul key={index} onClick={onVisibleHandler}> <li  > {option}</li></ul>)
 })}
    </div>
  )
}
