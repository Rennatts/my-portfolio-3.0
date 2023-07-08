import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

interface IIntroProps {
    yPosition: any
}

export default function Intro({ yPosition }: IIntroProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const aboutMeRef = useRef<HTMLImageElement>(null);

    const [isRocketVisible, setIsRocketVisible] = useState(false);
    
    return (
        <>
            <section id="home" className={styles.home}>
            <div className={styles.intro}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={styles.intro_box}
                    style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        flexDirection: "row",
                        alignItems: "center", 
                        width: "200%", 
                        height: "100%", 
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
                    Im RENATA MACHADO
                    </motion.p>
                    <motion.img
                    ref={imageRef}
                    src="/astronaut.png"
                    alt="My Image"                  
                    className={styles.astronaut_img}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.2 }}
                    style={{
                        position: "relative",
                        top: `${yPosition * 1}px`,
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
        </>
    )
}
