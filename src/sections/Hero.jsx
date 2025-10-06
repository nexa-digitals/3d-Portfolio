import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP} from '@gsap/react';
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      },
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src='/images/bg.png' alt="background" />
      </div>

      <div className="hero-layout">
        {/*LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
             <div className="hero-text">
              <h1>
                Shaping 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white" src={word.imgPath} alt={word.text} />
                        <span>{word.text}</span>
                      </span>
                    ))}

                  </span>
                </span>
              </h1>
              <h1>into real Projects</h1>
              <h1>that Deliver Results</h1>
              
             </div>
             <Button
               className="md:w-80 md:h-16 w-60 h-12"
               id="button"
               text="See my Work"
               />
          </div>
        </header>

        {/*RIGHT: 3D MODEL */}
        <figure>
          <div className="hero-3d-layout">
          <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  )
}

export default Hero