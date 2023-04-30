import styles from '@/styles/Education.module.scss'


interface IIntroProps {
}

export default function Education({ }: IIntroProps) {

    return (
        <>
            <section id="education" className={styles.education}>
                <h2>Education</h2>
                <div className={styles.description}>
                    <div className={styles.education_01}>
                        <div className={styles.header}>
                            <h1>Inha University</h1>
                            <p>Master of science in logistics</p>
                        </div>
                        <p>Incheon - South Korea</p>
                        <p>08/2016 to 08/2018</p>
                    </div>
                    <div className={styles.education_02}>
                        <div className={styles.header}>
                            <h1>Fatec</h1>
                            <p>Maritime Transportation</p>
                            <p>Bachelor</p>
                        </div>
                        <p>São Paulo - Brazil</p>
                        <p>01/2011 to 12/2014</p>
                    </div>
                </div>
            </section>
        </>
    )
}
