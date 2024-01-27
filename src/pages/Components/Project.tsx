import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineGithub } from "react-icons/ai";
import styles from '@/styles/Projects.module.scss';

const Project = ({ project, control, inView }: any) => {
    const openUrl = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <motion.div className={styles.project} ref={project.planetRef}>
            <motion.img
                src={project.planetImageSrc}
                alt={project.planetAltText}
                className={styles[`planet_${project.id}`]}
                initial={project.initialAnimationState}
                animate={control}
                transition={project.transition}
            />

            <div className={styles.header}>
                <h3>{project.title}</h3>
                <span>Technologies used: </span>
                <h5>{project.technologies}</h5>
            </div>

            <div className={styles.description}>
                <div className={styles.tech}>
                    <ul>
                        {project.features.map((feature: any, index: any) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div onClick={() => openUrl(project.githubUrl)} className={styles.github_icon_box}>
                    <AiOutlineGithub size="1x" />
                    <p>Click here to check out the project on GitHub</p>
                </div>

                <div className={styles.design}>
                    {project.images.map((image: any, index: any) => (
                        <Image 
                            key={index} 
                            src={image.src} 
                            alt={image.alt} 
                            width={image.width}
                            height={image.height} 
                            />
                        ))}
                    </div>
        
                    <div className={styles.video_container}>
                        <h5 className={styles.title}>Check out the Video!!</h5>
                        <iframe
                            className={styles.video}
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title={project.videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ cursor: "pointer" }}
                        ></iframe>
                    </div>
                </div>
         </motion.div>
    );
}

export default Project;