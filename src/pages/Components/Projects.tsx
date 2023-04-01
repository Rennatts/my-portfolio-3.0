import styles from '@/styles/Projects.module.scss'
import { motion } from 'framer-motion';


interface IIntroProps {
}

export default function Projects({ }: IIntroProps) {

    return (
        <>
            <section id="projects" className={styles.projects}>
                <div className={styles.drip}></div>
                    <h2>Skills</h2>
                    <p>Some text about yourself.</p>
                    <p>Some text about yourself.</p>
                <div className={styles.coffee_box}>
                    <motion.div>
                        <motion.img
                            src="/coffee_03.gif"
                            alt="coffee"
                            className={styles.coffee}
                            initial={{ opacity: 0, y: -60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 3 }}
                            width={250}
                            height={224}
                        />
                    </motion.div>
                    <motion.p
                        className={styles.turn_coffee_code}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3 }}
                        >
                            I turn <br/> coffee <br/> into code
                    </motion.p>
                </div>
            </section>
        </>
    )
}
