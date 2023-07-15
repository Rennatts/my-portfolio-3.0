import Image from 'next/image'
import styles from '@/styles/Skills.module.scss'
import { InView } from 'react-intersection-observer'
import { useState } from 'react';


interface IIntroProps {
    // isAstronautInvisible: boolean;
    // setIsAstronautInvisible: (inView: any)  => void;
}

export default function Skills({  }: IIntroProps) {
    
    return (
        <>
            <section id="skills" className={styles.skills}>
                <h1>Skills</h1>
                <div>
                    <div className={styles.header}>
                        <h2>Front-end</h2>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.glass_image}>
                            <Image src="/react.png" alt="react" width={150} height={100} style={{zIndex: 100}}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/react_native.png" alt="react native" width={150} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/nextjs.png" alt="angular" width={150} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/angular.png" alt="angular" width={150} height={100}></Image>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.header}> 
                    <h2>Back-end</h2>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.glass_image}>
                            <Image src="/nodejs.png" alt="nodejs" width={200} height={120}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/nestjs.png" alt="nestjs" width={200} height={120}></Image>
                        </div>
                        {/* <Image src="/python.png" alt="python" width={100} height={100}></Image> */}
                    </div>
                </div>
                <div>
                    <div className={styles.header}>
                    <h2>Database</h2>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/mongodb.png" alt="mongodb" width={200} height={120}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/postgresql.png" alt="postgresql" width={200} height={120}></Image>
                    </div>
                    </div>
                </div>
                <div>
                    <div className={styles.header}>
                    <h2>UI Stack</h2>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.glass_image}>
                            <Image className={styles.logo} src="/styled_component.png" alt="styles components" width={200} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/tailwind.png" alt="tailwind" width={200} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image className={styles.logo} src="/css.png" alt="css" width={200} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image className={styles.logo} src="/material_ui.png" alt="material ui" width={210} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image className={styles.logo} src="/chakra_ui.png" alt="chakra ui" width={260} height={100}></Image>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.header}>
                    <h2>Cloud</h2>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.glass_image}>
                            <Image className={styles.logo} src="/aws_logo.png" alt="aws" width={200} height={100}></Image>
                        </div>
                        <div className={styles.glass_image}>
                            <Image src="/firebase_logo_03.png" alt="firebase" width={200} height={100}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
