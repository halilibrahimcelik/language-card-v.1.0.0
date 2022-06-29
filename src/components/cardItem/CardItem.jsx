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
      {!isVisible?<div className={styles["language-container"]}>
         <img onClick={onClickHandler} src={image} alt="" />
        <h4>{name} </h4>
      </div>:null}
{isVisible?<CardInfo onVisibleHandler={onClickHandler} options={options}/>:null}

    </div>
  )
}

export default CardItem