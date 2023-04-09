import styles from '@/styles/Education.module.scss'


interface IIntroProps {
}

export default function Education({ }: IIntroProps) {

    return (
        <>
            <section id="education" className={styles.education}>
                <div>
                    <h1>Education</h1>
                </div>
                <div className={styles.description}>
                    <div className={styles.small_container}>
                        <h2>Inha University</h2>
                        <h4>Incheon - South Korea</h4>
                        <p>Master of science in logistics</p>
                        <p>08/2016 to 08/2018</p>
                    </div>
                    <div>
                        <h2>Fatec</h2>
                        <h4>São Paulo - Brazil</h4>
                        <p>Maritime Transportation</p>
                        <p>01/2011 to 12/2014</p>
                    </div>
                </div>
            </section>
        </>
    )
}
