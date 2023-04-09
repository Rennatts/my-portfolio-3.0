import styles from '@/styles/Projects.module.scss'
import { motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';

interface IIntroProps {
    planet01Ref: any;
    planet02Ref: any;
    planet03Ref: any;
    planet04Ref: any;
    inView3: any;
    inView4: any;
    inView5: any;
    inView6: any;
}

export default function Projects({ 
    planet01Ref, 
    planet02Ref, 
    planet03Ref, 
    planet04Ref,
    inView3,
    inView4,
    inView5,
    inView6,
}: IIntroProps) {
    const controlPlanet01 = useAnimation();
    const controlPlanet02 = useAnimation();
    const controlPlanet03 = useAnimation();
    const controlPlanet04 = useAnimation();

    useEffect(() => {
        if (inView3) {
            controlPlanet01.start({ opacity: 1, y: 100 });
        }
        if (inView4) {
            controlPlanet02.start({ opacity: 1, x: 400 });
        }
        if (inView5) {
            controlPlanet03.start({ opacity: 1, y: 300 });
        }
        if (inView6) {
            controlPlanet04.start({ opacity: 1, y: 10 });
        }
    }, [controlPlanet01, controlPlanet02, controlPlanet03, controlPlanet04, inView3, inView4, inView5, inView6]);
    

    return (
        <>
            <section id="projects" className={styles.projects}>
                <h2>Side Projects</h2>
                <motion.div ref={planet01Ref}>
                    <motion.img
                        src="/planet_01.png" 
                        alt="planet_01"
                        className={styles.planet_01}
                        initial={{ opacity: 0, y: -100 }}
                        animate={controlPlanet01}
                        transition={{ duration: 1, delay: 2 }}
                        style={{marginTop: "2%", marginRight:"800px"}}
                    />
                </motion.div>
                <div className={styles.planet_box}>
                    <motion.p
                        className={styles.turn_space_exploration}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: 2 }}
                        >
                            Exploring my Universe <br/> One Project at a time
                    </motion.p>
                </div>
                <motion.div
                    className={styles.project_01}
                >
                    <div className={styles.header}>
                        <h3>Social Media</h3>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <span>React, Mongodb, AWS, Node, Express, css</span>
                        </div>
                        <div>
                            <motion.img
                                src="/social_media.gif" 
                                alt="social media"
                            ></motion.img>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={planet02Ref}>
                    <motion.img
                        src="/planet_02.png" 
                        alt="planet_02"
                        className={styles.planet_02}
                        initial={{ opacity: 0, x: -400 }}
                        animate={controlPlanet02}
                        transition={{ duration: 3 }}
                        style={{marginTop: "50%"}}
                    />
                </motion.div>

                <motion.div
                    className={styles.project_02}
                >
                    <div className={styles.header}>
                        <h3>Freelancer Directory</h3>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <span>React, Mongodb, NestJs, Tailwind</span>
                        </div>
                        <div>
                            <motion.img
                                src="/freelancer.gif" 
                                alt="freelancer directory"
                            ></motion.img>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet03Ref} whileHover={{ scale: 1.2, rotate: 90 }}>
                    <motion.img
                        src="/planet_03.png" 
                        alt="planet_03"
                        className={styles.planet_03}
                        initial={{ opacity: 0, y: -300 }}
                        animate={controlPlanet03}
                        transition={{ duration: 2.2 }}
                        style={{marginTop: "10%", marginLeft:"800px"}}
                    />
                </motion.div>

                <motion.div
                    className={styles.project_03}
                >
                    <div className={styles.header}>
                        <h3>Kanban</h3>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <span>React, Mongodb, NestJs, Tailwind</span>
                        </div>
                        <div>
                            <motion.img
                                src="/kanban.gif" 
                                alt="kanban"
                                height={350}
                                width={650}
                            ></motion.img>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet04Ref}>
                    <motion.img
                        src="/planet_04.png" 
                        alt="planet_04"
                        className={styles.planet_04}
                        initial={{ opacity: 0, y: -520 }}
                        animate={controlPlanet04}
                        transition={{ duration: 2 }}
                        style={{marginTop: "10%", marginRight:"1000px"}}
                    />
                </motion.div>
            </section>
        </>
    )
}
