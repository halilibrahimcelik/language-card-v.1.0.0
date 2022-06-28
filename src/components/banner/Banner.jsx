import React from 'react'
import styles from "./banner.module.scss";
import Logo from "../../img/react.svg"

const Banner = () => {
  return (
    <div>
      <div className= {styles.header}>
    <img   src={Logo} alt="" />

      </div>

    </div>
  )
}

export default Banner