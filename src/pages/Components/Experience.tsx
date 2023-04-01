import Image from 'next/image'
import styles from '@/styles/Experience.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface IIntroProps {
    experience01Ref?: any;
    experienceRef2?: any;
    inView?: any;
    inView2?: any;
}

export default function Experience({ experience01Ref, experienceRef2, inView, inView2 }: IIntroProps) {
    const controls = useAnimation();
    const controls2 = useAnimation();

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
        <>
            <section id="experience" className={styles.experience}>
                <h2>Experience</h2>
                <div className={styles.experiences_list}>
                <motion.div
                    className={styles.experience_01}
                    ref={experience01Ref}
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.experience_01}>
                    <div className={styles.header}>
                        <h3>Banqi</h3>
                        <span>From 04/2022 to current</span>
                    </div>
                    <div className={styles.image_box}>
                        <Image src="/banqi.png" alt="banqi" width={300} height={300}></Image>
                    </div>
                    <ul>
                        <li data-icon="🪐">React Native and NestJS</li>
                        <li data-icon="🪐">Contributed to the process of improving error messages, reducing contact rate and costs</li>
                        <li data-icon="🪐">Large-scale project, with micro-services architecture, clean architecture, Docker, AWS ...</li>
                        <li data-icon="🪐">Aligned business goals with product managers and UI team</li>
                        <li data-icon="🪐">Technical documentation</li>
                        <li data-icon="🪐">Unit tests and BDD. Participated in code reviews, technical refinements, and breaking down stories into small tasks</li>
                        <li data-icon="🪐">Involved in upstream processes for story prioritization based on data</li>
                        <li data-icon="🪐">Agile methodology and continuous integration</li>
                    </ul> 
                    </div>
                </motion.div>

                <motion.div
                    className={styles.experience_01}
                    ref={experienceRef2}
                    initial={{ x: -200, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <div className={styles.experience_02}>
                    <div className={styles.header}>
                        <h3>ViewB</h3>
                        <span>From 08/2021 to 03/2022</span>
                    </div>
                    <ul>
                        <li data-icon="🪐">Angular</li>
                        <li data-icon="🪐">Contributed to the process of improving error messages, reducing contact rate and costs</li>
                        <li data-icon="🪐">Experience in a large-scale project, with micro-services architecture, clean architecture, Docker, AWS, BDD</li>
                        <li data-icon="🪐">Implemented new features and aligned business goals with product managers and UI team</li>
                        <li data-icon="🪐">Implemented push notifications and wrote technical documentation</li>
                        <li data-icon="🪐">Fixed bugs, applied unit tests and BDD. Participated in code reviews, technical refinements, and breaking down stories into small batches</li>
                        <li data-icon="🪐">Involved in upstream processes for story prioritization based on data</li>
                        <li data-icon="🪐">Experience with agile methodology and continuous integration</li>
                    </ul>
                    </div>
                </motion.div>
                </div>
            </section>
        </>
    )
}
