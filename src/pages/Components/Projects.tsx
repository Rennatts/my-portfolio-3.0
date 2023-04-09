import styles from '@/styles/Projects.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion';

interface IIntroProps {
    // projectRef1?: any
}

export default function Projects({ }: IIntroProps) {
    const controls = useAnimation();
    

    return (
        <>
            <section id="projects" className={styles.projects}>
                <h2>Side Projects</h2>
                <motion.div className={styles.planet_01}>
                    <motion.img
                        src="/planet_01.png" 
                        alt="planet_01"
                        className={styles.planet_or_satellite}
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3 }}
                        width={200}
                        height={190}
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

                <div>
                    <motion.div>
                        <motion.img
                            src="/planet_02.png" 
                            alt="planet_02"
                            className={styles.planet_or_satellite}
                            initial={{ opacity: 0, y: -60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 3 }}
                            width={200}
                            height={190}
                        />
                    </motion.div>
                    <motion.div>
                            <motion.img
                                src="/planet_03.png" 
                                alt="planet_03"
                                className={styles.planet_or_satellite}
                                initial={{ opacity: 0, y: -60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 3 }}
                                width={200}
                                height={190}
                            />
                    </motion.div>
                    <motion.div>
                            <motion.img
                                src="/planet_04.png" 
                                alt="planet_04"
                                className={styles.planet_or_satellite}
                                initial={{ opacity: 0, y: -60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 3 }}
                                width={200}
                                height={190}
                            />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
