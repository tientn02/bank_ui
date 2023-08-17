import React from 'react'
import { apple,bill, google } from '../assets'
import styles, {layout} from '../style'
const Billing = () => {
  return (
    <section id='product' 
    className={`${layout.sectionReverse} ml-8`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='bill ' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] top-0 
        -left-1/2 w-[50%] rounded-full h-[50%] white__gradient'/>
        <div className='absolute z-[3] bottom-0 
        w-[50%] rounded-full h-[50%] pink__gradient'/>
      </div>

      <div className={`${layout.sectionInfo} ml-16`}>
        <h2 className={`${styles.heading2}`}>
        Easily control your <br className='sm:block hidden'/> 
        billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, 
          you can improve your financial life by building
          credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <div className='flex flex-row flex-wrap mt-8'>
          <img src={apple} alt='apple' className='w-[128px] h-[42px]'/>
          <img src={google} alt='google' className='w-[128px] h-[42px] ml-8'/>
        </div>
      </div>
    </section>
  )
}

export default Billing