import React, { useState } from 'react'
import  styles from "./cardItem.module.scss";
import { CardInfo } from '../cardInfo/CardInfo';


const CardItem = (props) => {
  const [isVisible,setVisible]=useState(false);
;
  const {name,image,options}=props;
 const onClickHandler=()=>{
 if(!isVisible){
  setVisible(true)
 }else{
  setVisible(false);
 }

 }
  return (
    <div  className={styles.container}>
      {!isVisible?<div>
         <img onClick={onClickHandler} src={image} alt="" />
        <h2>{name} </h2>
      </div>:null}
{isVisible?<CardInfo onVisibleHandler={onClickHandler} options={options}/>:null}

    </div>
  )
}

export default CardItem