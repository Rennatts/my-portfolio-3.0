import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from './Components/Header'
import { useEffect, useRef, useState } from 'react'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Intro from './Components/Intro';
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
  const [experience01Ref, inView] = useInView({ threshold: 0.5 }); 
  const [experienceRef2, inView2] = useInView({ threshold: 0.7 });

  const [isRocketVisible, setIsRocketVisible] = useState(false);
  const [isAstronautInvisible, setIsAstronautInvisible] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.pageYOffset;
        setYPosition(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }

  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls2, inView2]);

  
  return (
    <div className={styles.background_image_container}>
      <Header></Header>
        <div className={styles.topics_container}>
          <section id="home" className={styles.home}>
            <div className={styles.intro}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      flexDirection: "row",
                      alignItems: "center", 
                      width: "45vw", 
                      height: "100%", 
                      marginTop: "25%"
                    }}
                >
                    <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.2 }}
                    style={{ width: "75%", fontSize: "30px"}}
                    animate={{
                      x: ["0%", "40%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                      loop: Infinity,
                    }}
                    >
                    I am RENATA MACHADO
                    </motion.p>
                        <motion.img
                          ref={imageRef}
                          src="/astronaut.png"
                          alt="My Image"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.2 }}
                          style={{
                              width: "35%",
                              position: "relative",
                              top: `${yPosition * 1}px`,
                              zIndex: -100,
                              opacity: isAstronautInvisible ? 0 : 1,
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
            </div>
            <div className={styles.description}>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    width: "200%", 
                    height: "100%", 
                    fontSize: "25px",
                }}
                >
                <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                style={{marginRight: "10px"}}
                >
                    Full
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.0 }}
                style={{marginRight: "10px"}}
                >
                    Stack 
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
                >
                    Developer
                </motion.p>
                </motion.div>
            </div>
            <div className={styles.comet_box}>
                <motion.img
                src="/comet-01.png"
                alt="comet"
                className={styles.coffee}
                initial={{ opacity: 0, x: -400, y: -400 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    x: [-400, 400],
                    y: [-400, 400],
                }}
                transition={{
                    duration: 4,
                    delay: 1.2,
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
                    initial={{ opacity: 0, y: 400 }}
                    animate={{
                      opacity: isRocketVisible ? [0, 1, 1] : 0,
                      y: isRocketVisible ? [400, -250] : 400,
                    }}
                    transition={{
                      duration: 4,
                      delay: 1.0,
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
                    Fueled by coffee and a fascination with the universe.
                </p>
                <p>
                    I find joy in building innovative tech solutions
                </p>
                <p>
                    that prioritize user experience.
                </p>
                </motion.div>
            </motion.div>
          </section>
          <Experience 
            experience01Ref={experience01Ref} 
            experienceRef2={experienceRef2} 
            inView={inView} 
            inView2={inView2}
          ></Experience>
          <Skills></Skills>
          <InView
            as="div"
            onChange={(inView) => setIsAstronautInvisible(inView)}
          >
            <div className={styles.black_hole}>
              <Image  src="/black_hole.png" alt="black_hole" width={500} height={300}></Image>
            </div>
          </InView>
          <Projects></Projects>
          <Education></Education>
          <Contact></Contact>
        </div>
    </div>
  )
}