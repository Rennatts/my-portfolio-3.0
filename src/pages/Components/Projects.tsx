import styles from '@/styles/Projects.module.scss'
import { motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';


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

    const SocialMediaId = 'NdrD06KLvww';
    const FreelancerVideoId = 'aNWeAtu9JzQ';
    const KanbanVideoId = '1-B1lVZsguA';

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

                <motion.div ref={planet02Ref}>
                    <motion.img
                        src="/planet_04.png" 
                        alt="planet_02"
                        className={styles.planet_02}
                        initial={{ opacity: 0, x: -400 }}
                        animate={controlPlanet02}
                        transition={{ duration: 3 }}
                        style={{marginTop: "50%"}}
                    />
                </motion.div>

                <motion.div
                    className={styles.project_01}
                >
                    <div className={styles.header}>
                        <h3>Freelancer Directory</h3>
                        <span>Technologies used: </span>
                        <span>React, Mongodb, NestJs, Tailwind</span>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Browse and search freelancers by service type and location</li>
                                <li>Give a review for freelancers with a comment and rating star</li>
                                <li>View freelancers profiles with their bio, ratings, and reviews</li>
                                <li>Register and login as a freelancer or regular user</li>
                                <li>Edit profile and manage offered services</li>
                            </ul>
                        </div>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${FreelancerVideoId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.project_02}
                >
                    <div className={styles.header}>
                        <h3>Kanban</h3>
                        <span>Technologies used: </span>
                        <span>React, Typescript, Chakra UI</span>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Create and delete tasks</li>
                                <li>Easily move task with grap and drop functionality</li>
                                <li>Save data on localstorage, no need of database</li>
                            </ul>
                        </div>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${KanbanVideoId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
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
                        <h3>Social Media</h3>
                        <span>Technologies used: </span>
                        <span>React, Redux, MongoDb, AWS, Node, Express, css</span>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Authentication to create profile, login, logout</li>
                                <li>Create & Edit profile</li>
                                <li>Create post with multiple images</li>
                                <li>Follow and Unfollow users</li>
                                <li>Like & Unlike posts</li>
                                <li>Comment post & delete comment</li>
                                <li>Ranking with most liked posts, most commented posts</li>
                                <li>Feed with the post of following users</li>
                                <li>Search posts</li>
                            </ul>
                        </div>
                        <div className={styles.image_box}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${SocialMediaId}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet04Ref}>
                    <motion.img
                        src="/planet_02.png" 
                        alt="planet_04"
                        className={styles.planet_04}
                        initial={{ opacity: 0, y: -520 }}
                        animate={controlPlanet04}
                        transition={{ duration: 2 }}
                        style={{marginTop: "10%", marginRight:"100px"}}
                    />
                </motion.div>
            </section>
        </>
    )
}
