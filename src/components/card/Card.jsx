import React from 'react'
import styles from "./card.module.scss";
import { languages } from '../../utils/data';
import CardItem from '../cardItem/CardItem';
const Card = () => {
  console.log(languages)
  return (
    <div className={styles.wrapper}>
      <h2>Languages</h2>
      <div className={styles.container}  >
      
      {languages.map((language,index)=>{
        return( <CardItem key={index}  name={language.name} image={language.img} options={language.options} />)
      })}
      </div>
    </div>
  )
}

export default Card;