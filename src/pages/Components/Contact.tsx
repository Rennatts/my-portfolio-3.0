import React, { useCallback, useState } from 'react';
import styles from '@/styles/Contact.module.scss'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { saveAs } from 'file-saver';

interface IIntroProps {
}

export default function Contact({ }: IIntroProps) {
    const [emailCopyText, setEmailCopyText] = useState<string>('Click me to copy the e-mail');

    const openUrl = (url: any) => {
        window.open(url, '_blank');
    };

    const copyToClipboard = useCallback((value: any) => {
        const el = document.createElement('textarea');
        el.value = value;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }, []);

    const handleEmailClick = () => {
        copyToClipboard('16.renata@gmail.com');
        setEmailCopyText('Value copied');
    };

    const fileUrl = "https://renata-resume.s3.amazonaws.com/CV-Renata-Machado.pdf";

    const downloadResume = async () => {
        try {
            const res = await fetch(fileUrl);
            const blob = await res.blob();

            saveAs(blob, 'renata-machado-resume.pdf');
        } catch (e) {
        }
    };
    

    return (
        <>
            <section id="contact" className={styles.contact}>
                <div className={styles.download_resume}>
                    <button onClick={downloadResume}>Download Renata{'\''} Resume :)</button>
                </div>

                <div className={styles.icons_container}>
                    <p 
                        onClick={() => openUrl('https://github.com/Rennatts')}
                        className={styles.icon}
                        ><AiOutlineGithub size="2x"></AiOutlineGithub>
                    </p>
                    <p
                        onClick={() => openUrl('https://www.linkedin.com/in/renata-machado11/')}
                        className={styles.icon}><AiFillLinkedin size="2x"></AiFillLinkedin>
                    </p>
                    <p 
                        onClick={() => openUrl('https://twitter.com/rennatts')}
                        className={styles.icon}><AiFillTwitterCircle size="2x"></AiFillTwitterCircle>
                    </p>
                    <p 
                        onClick={() => handleEmailClick()}
                        className={styles.icon}>
                            <AiOutlineMail size="2x"></AiOutlineMail>
                    </p>
                    <span>{emailCopyText}</span>
                </div>
            </section>
        </>
    )
}
