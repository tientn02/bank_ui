/* eslint-disable no-unused-vars */
import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'
import { features } from '../constants'
const FeatureCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {icon, title, content, index} = props
  return (
    <div  className={`${index !== features.length -1 ? "mb-6" : 'mb-0'} 
    flex flex-row p-6 rounded-[20px] feature-card items-center`}>
      <div className={`${styles.flexCenter} 
        rounded-full w-[64px] h-[64px] bg-dimBlue`}>
        <img src={icon} alt='icon' 
        className='w-[50%] h-[50%] 
        object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold
        text-white text-[18px] leading-[23px] mb-1'>
          {title}
          </h4>
        <p className='font-poppins font-normal max-w-[420px]
        text-white text-[16px] leading-[23px] mb-1'>{content }</p>
      </div>
    </div>
  )
}
const Business = () => {
  return (
    <section id='features' 
    className={`${layout.section} ml-8`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        You do the business,<br className='sm:block hidden'/> 
        we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>With the right credit card, 
          you can improve your financial life by building
          credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business