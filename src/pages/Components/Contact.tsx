import React, { useCallback, useState } from 'react';
import styles from '@/styles/Contact.module.scss'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { saveAs } from 'file-saver';

interface IIntroProps {
}

export default function Contact({ }: IIntroProps) {
    const fileUrl = process.env.NEXT_PUBLIC_RESUME_PDF;

    const downloadResume = async () => {
        if (!fileUrl) {
            console.error('Resume PDF URL is not defined.');
            return;
        }
    
        try {
            const res = await fetch(fileUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch the resume.');
            }
            const blob = await res.blob();
            saveAs(blob, 'Renata-Machado-Resume.pdf');
        } catch (error) {
            console.error('An error occurred while downloading the resume:', error);
        }
    };
    
    

    return (
        <>
            <section id="contact" className={styles.contact}>
                <div className={styles.download_resume}>
                    <button onClick={downloadResume}>Download Renata{'\''} Resume :)</button>
                </div>

                <div className={styles.icons_container}>
                    <div className={styles.icon_box}>
                        <p 
                            className={styles.icon}
                            ><AiOutlineGithub size="2x"></AiOutlineGithub>
                        </p>
                        <p className={styles.contact_info}>Rennatts</p>
                    </div>
                    <div className={styles.icon_box}>
                        <p
                            className={styles.icon}><AiFillLinkedin size="2x"></AiFillLinkedin>
                        </p>
                        <p className={styles.contact_info}>renata-machado11</p>
                    </div>
                    <div className={styles.icon_box}>
                        <p 
                            className={styles.icon}><AiFillTwitterCircle size="2x"></AiFillTwitterCircle>
                        </p>
                        <p className={styles.contact_info}>rennatts</p>
                    </div>
                    <div className={styles.icon_box}>
                        <p
                            className={styles.icon}>
                                <AiOutlineMail size="2x"></AiOutlineMail>
                        </p>
                        <p className={styles.contact_info}>16.renata@gmail.com</p>
                    </div>
                </div>
            </section>
        </>
    )
}
