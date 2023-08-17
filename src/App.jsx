import React from 'react'
import styles from './style'
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats,
   Footer, Testimonials, Hero  } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <h1>Hello</h1>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

    <div className={`bg-primary ${styles.flexStar}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStar}`}>
      <div className={`${styles.boxWidth}`}>
          <Stats />           
          <Business /> 
          <Billing /> 
          <CardDeal />
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer />
      </div>
    </div>
    </div>
  )
}

export default App