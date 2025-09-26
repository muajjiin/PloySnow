import React from 'react'
import TitleHeader from '../components/TitleHeader'
import GlowCard from '../components/GlowCard'
import { expCards } from '../constants'
const Experience = () => {
  return (
    <section id='exprience' className=' w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title='Professional Work Experience' sub='My Carrer Overview' />
        <div className='mt-32 relative'>
          <div className=' relativ z-50 sl:space-y-32 space-y-10'>
            {expCards.map((card) => (
              <div key={card.title} className='exp-card-wrapper'>
                {card.title}
                <div className='sl:w-2/6'>
                  <GlowCard card={card}>
                    <img src={card.imgPath} alt={card.title} />
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
