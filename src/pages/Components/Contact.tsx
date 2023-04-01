import styles from '@/styles/Contact.module.scss'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";

interface IIntroProps {
}

export default function Contact({ }: IIntroProps) {

    return (
        <>
            <section id="contact" className={styles.contact}>
                <div className={styles.header}>
                    <h1>Contact</h1>
                </div>
                <div className={styles.icons_container}>
                    <p className={styles.icon}><AiOutlineGithub size="1x"></AiOutlineGithub></p>
                    <p className={styles.icon}><AiFillLinkedin size="1x"></AiFillLinkedin></p>
                    <p className={styles.icon}><AiFillTwitterCircle size="1x"></AiFillTwitterCircle></p>
                    <p className={styles.icon}><AiOutlineMail className={styles.icon} size="1x"></AiOutlineMail></p>
                </div>
            </section>
        </>
    )
}
