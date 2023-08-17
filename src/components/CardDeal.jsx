import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={`${layout.section} ml-8`}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal  
        <br className='sm:block hidden'/> 
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, 
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.      </p>
      <Button/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card'/>

      </div>
    </section>
  )
}

export default CardDeal