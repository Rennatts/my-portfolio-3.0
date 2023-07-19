import Image from 'next/image'
import styles from '@/styles/Experience.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface IIntroProps {
    experience01Ref?: any;
    experience02Ref?: any;
    isExperience01InView?: any;
    isExperience02InView?: any;
}

export default function Experience({ experience01Ref, experience02Ref, isExperience01InView, isExperience02InView }: IIntroProps) {
    const controls = useAnimation();
    const controls2 = useAnimation();

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

    
    return (
        <>
            <section id="experience" className={styles.experience}>
                <h1>Experience</h1>
                <div className={styles.experiences_list}>
                    <motion.div
                        ref={experience01Ref}
                        initial={{ x: -100, opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.experience_01}>
                            <div className={styles.header}>
                                <h2>Banqi</h2>
                                <h4>Full stack developer</h4>
                                <span>From 04/2022 to current</span>
                            </div>
                            <div className={styles.image_box}>
                                <Image src="/banqi.png" alt="banqi" width={300} height={300}></Image>
                            </div>
                            <ul>
                                <li>Utilized React Native for front-end development and NestJS for back-end development</li>
                                <li>Developer responsible for collaborative project with the UX/UI team to enhance our app{'\''}s payment flow, while also restructuring error messages to streamline the process and minimize customer support costs</li>
                                <li>Developed functionalities that enable users to set distinct transaction limits for daytime and nighttime periods and implementing a secure contact list for trusted contacts</li>
                                <li>Large-scale project, with micro-services architecture, clean architecture, Docker, AWS, Firebase</li>
                                <li>Closely collaborated with product managers and the UI team to ensure that business objectives were reflected in our technical strategies and implementations</li>
                                <li>Implemented analytics events to track user behavior and inform future development priorities</li>
                                <li>Developer responsible for integration of third-party services into the app to enhance functionality and user experience</li>
                                <li>Writing of technical documentation</li>
                                <li>Unit tests and BDD. Participated in code reviews, technical refinements, and breaking down stories into small tasks</li>
                                <li>Involved in upstream processes for story prioritization based on data</li>
                                <li>Agile methodology and continuous integration</li>
                            </ul> 
                        </div>
                    </motion.div>

                    <motion.div
                        ref={experience02Ref}
                        initial={{ x: -200, opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <div className={styles.experience_02}>
                        <div className={styles.header}>
                            <h2>ViewB</h2>
                            <h4>Front-end developer</h4>
                            <span>From 08/2021 to 03/2022</span>
                        </div>
                        <ul>
                            <li>Engaged in front-end development utilizing Angular, contributing to the creation of a robust OKR platform</li>
                            <li>Distinguished in the UI/UX space by transforming static numerical indicators of task statuses (e.g., completed, in-progress, to-do, paused) into interactive 3D buttons. This feature enhancement allowed users to filter tasks by status on-demand, greatly enhancing navigation and usability</li>
                            <li>Participation in technical discussions and task breakdowns to optimize project development</li>
                            <li>Debugging API errors with effective communication with back-end team</li>
                            <li>Close collaboration with Product Owner to ensure delivery of high-quality results within established deadlines</li>
                            <li>Agile methodology (Scrum)</li>
                        </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
