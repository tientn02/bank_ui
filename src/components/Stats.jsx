import React from 'react'
import {stats} from '../constants'
import styles from '../style'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-5 mx-auto`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`text-white ${styles.flexStart} flex-1 flex flex-row ml-4 
        items-center justify-start leading-[50px] my-4`}>
          <h4 className='font-poppins font-semibold 
          xs:text-[40px] text-[30px] leading-[35px] xs:leading-[45px] '>{stat.value}</h4>
          <p className='font-poppins font-semibold 
          xs:text-[20px] text-[15px] leading-[22px] xs:leading-[32px]
          text-gradient uppercase ml-2 '>{stat.title}</p>
        </div>)
      )}
    </section>
  )
}

export default Stats