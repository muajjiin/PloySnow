 
import { counterItems } from '../constants'
import CountUp from 'react-countup'
const AnimatedCounter = () => {
  return (
  <section id="counter" className="px-6 xl:px-32 mt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-white text-5xl font-extrabold mb-2">
              <CountUp end={item.value} suffix={item.suffix} duration={2} />
            </div>
            <div className="text-white/60 text-lg text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AnimatedCounter
