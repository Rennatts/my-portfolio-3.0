import Image from 'next/image'
import styles from '@/styles/Experience.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAnimateOnView } from '@/hooks/useAnimateOnView';

interface IIntroProps {
    experience01Ref?: any;
    experience02Ref?: any;
    isExperience01InView?: any;
    isExperience02InView?: any;
}

export default function Experience({ experience01Ref, experience02Ref, isExperience01InView, isExperience02InView }: IIntroProps) {
    const controls = useAnimateOnView(isExperience01InView);
    const controls2 = useAnimateOnView(isExperience02InView);

    useEffect(() => {
        if (isExperience01InView) {
          controls.start({ x: 0, opacity: 1 });
        }
        if (isExperience02InView) {
          controls2.start({ x: 0, opacity: 1 });
        }
    }, [controls, controls2, isExperience01InView, isExperience02InView]);

    
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
                            <ul>
                                <li>Front-end development using React Native and back-end development with NestJS</li>
                                <li>Collaborated with UX/UI teams to improve payment flow in our app, reducing customer support costs by streamlining error messaging.</li>
                                <li>Engineered user-centric features allowing customizable transaction limits for day/night periods and a secure trusted contact list.</li>
                                <li>Contributed to a large-scale project involving micro-services architecture, Docker, AWS, Kafka, Firebase, ensuring robust and scalable solutions.</li>
                                <li>Partnered with product managers and UI designers to align technical strategies with business objectives for optimal outcomes.</li>
                                <li>Implemented analytics to monitor user behavior, guiding data-driven decisions for future development initiatives.</li>
                                <li>Integrated third-party services into the app, enhancing functionality and user experience.</li>
                                <li>Authored comprehensive technical documentation to support ongoing development and maintenance.</li>
                                <li>Conducted unit tests and behavior-driven development, participating in code reviews and task breakdown for efficient project management.</li>
                                <li>Employed Agile methodologies and continuous integration practices to maintain a dynamic and responsive development environment.</li>
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
                            <li>Front-end development in Angular for a robust OKR platform</li>
                            <li>Innovation in UI/UX, transforming task status indicators into interactive 3D buttons, improving navigation and usability of the platform.</li>
                            <li>Active engagement in technical discussions and task breakdown to optimize development.</li>
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
