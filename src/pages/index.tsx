import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from './Components/Header'
import { useEffect, useRef, useState } from 'react'
import { useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Education from './Components/Education'
import Contact from './Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const aboutMeRef = useRef<HTMLImageElement>(null);
  const [yPosition, setYPosition] = useState(0);
  const controls = useAnimation();
  const controls2 = useAnimation();
  // const [experience01Ref, isExperience01InView01] = useInView({ threshold: 0.5 }); 
  // const [experience02Ref, isExperience01InView02] = useInView({ threshold: 0.7 });
  const { ref: experience01Ref, inView: isExperience01InView } = useInView({ triggerOnce: true });
  const { ref: experience02Ref, inView: isExperience02InView } = useInView({ triggerOnce: true });


  const [planet01Ref, inView3] = useInView({ threshold: 0.2 }); 
  const [planet02Ref, inView4] = useInView({ threshold: 0.4 }); 
  const [planet03Ref, inView5] = useInView({ threshold: 0.6 }); 
  const [planet04Ref, inView6] = useInView({ threshold: 0.8 }); 


  const [isRocketVisible, setIsRocketVisible] = useState(false);
  const [hasPassedBlackHole, setHasPassedBlackHole] = useState(false);
  const blackHoleRef = useRef<Element | null>(null);
  const setBlackHoleRef = (node: Element | null) => {
    blackHoleRef.current = node;
  };

  const [astronautOpacity, setAstronautOpacity] = useState(1);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial window width
      setWindowWidth(window.innerWidth);
      
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, []); 
  
  



  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && blackHoleRef.current) {
        const scrollPosition = window.pageYOffset;
        setYPosition(scrollPosition);
  
        const blackHolePosition =
          blackHoleRef.current.getBoundingClientRect().top + scrollPosition;
        const astronautBottomPosition = imageRef.current.offsetTop + imageRef.current.offsetHeight;
  
        if (astronautBottomPosition > blackHolePosition) {
          setAstronautOpacity(0);
        } else {
          setAstronautOpacity(1);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  useEffect(() => {
    if (isExperience01InView) {
      controls.start({ x: 0, opacity: 1 });
    }

  }, [controls, isExperience01InView]);

  useEffect(() => {
    if (isExperience02InView) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls2, isExperience02InView]);


  const position = useMotionValue("relative");

  const [astronautY, setAstronautY] = useState(0);
  const [targetY, setTargetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Set the target Y position based on scroll position
      setTargetY(window.pageYOffset);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const smoothScroll = () => {
      // Interpolate towards the target Y position
      setAstronautY(astronautY => astronautY + (targetY - astronautY) * 0.1);
      requestAnimationFrame(smoothScroll);
    };
  
    // Start the smooth scroll loop
    smoothScroll();
  }, [targetY]);
  

  return (
    <>
      <Header />
      <div className={styles.background_image_container}>
        <div className={styles.topics_container}>
          <section id="about" className={styles.about}>
            <div className={styles.intro_container}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`${styles.intro_box}`}
              >
                <div className={`${styles.intro_text}`}>
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.2 }}
                    className={`${styles.name}`}
                    animate={{
                      x: ["0%", "40%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                      loop: Infinity,
                    }}
                  > 
                    Hi! I'm 
                  </motion.p>
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.2 }}
                    className={`${styles.name}`}
                    animate={{
                      x: ["0%", "40%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                      loop: Infinity,
                    }}
                  > 
                    RENATA MACHADO
                  </motion.p>

                </div>
                <motion.img
                  ref={imageRef}
                  src="/astronaut.png"
                  alt="My Image"
                  className={`${styles.astronaut_img}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.2 }}
                  style={{
                    top: `${astronautY}px`,
                    opacity: astronautOpacity,
                  }}
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "linear",
                    loop: Infinity,
                  }}
                  height={250}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.description}
              >
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  style={{marginRight: "13px"}}
                  className={`${styles.full_stack}`}
                >
                  Full
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.0 }}
                  style={{marginRight: "13px"}}
                  className={`${styles.full_stack}`}
                >
                  Stack 
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  className={`${styles.full_stack}`}
                >
                  Developer
                </motion.p>
              </motion.div>
            </div>
            <div className={styles.comet_box}>
              <motion.img
                src="/comet-01.png"
                alt="comet"
                className={styles.comet}
                initial={{ opacity: 0, x: -400, y: -400 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  x: [-400, 400],
                  y: [-400, 400],
                }}
                transition={{
                  duration: 4,
                  delay: 0.8,
                  times: [0, 0.5, 0.9, 1], 
                }}
                width={250}
                height={224}
              />
            </div>
            <motion.div
              className={styles.about_me}
              ref={aboutMeRef}
            >
              <InView
                as="div"
                onChange={(inView) => setIsRocketVisible(inView)}
              >
                <motion.img
                  src="/rocket.png"
                  alt="rocket"
                  width={250}
                  height={224}
                  initial={{ opacity: 0, y: 200 }}
                  animate={{
                    opacity: isRocketVisible ? [0, 1, 1] : 0,
                    y: isRocketVisible ? [800, -150] : 800,
                  }}
                  transition={{
                    duration: 4,
                    delay: 0.5,
                    times: [0, 0.5, 1],
                    ease: 'easeInOut',
                  }}
                />
              </InView>
              <motion.div
                className={styles.intro}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 1.2,
                }}
              >
                <p>
                    I find joy in building innovative tech solutions
                </p>
                <p>
                    that prioritize user experience.
                </p>
                <br/>
                <br/>
                <br/>
                <p>Enjoy this cosmic journey through my portfolio!</p>
              </motion.div>
            </motion.div>
          </section>
          <Experience 
            experience01Ref={experience01Ref}
            experience02Ref={experience02Ref}
            isExperience01InView={isExperience01InView}
            isExperience02InView={isExperience02InView}
          />
          <Skills />
          <InView
            as="div"
            onChange={(inView) => !inView && setHasPassedBlackHole(true)} 
            threshold={0.1}
          >
            <div className={styles.black_hole} ref={setBlackHoleRef}>
              <Image  className={styles.black_hole_img} src="/black_hole.png" alt="black_hole" width={200} height={300} />
            </div>
          </InView>
          <Projects 
            planet01Ref={planet01Ref} 
            planet02Ref={planet02Ref} 
            planet03Ref={planet03Ref} 
            planet04Ref={planet04Ref}
            inView3={inView3}
            inView4={inView4}
            inView5={inView5}
            inView6={inView6}
          />
          <Education /> 
          <Contact />
        </div>
      </div>
    </>
  )
  

}