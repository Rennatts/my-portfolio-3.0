import React, { useState } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';


const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    const [openNavList, setOpenNavList] = useState(false);
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Renata Machado de Andrade",
        "jobTitle": "Software Engineer",
        "url": "https://www.renata-machado.com",
        "author": {
            "@type": "Person",
            "name": "Renata Machado de Andrade"
        },
    }


    return (
        <>
            <Head>
                <title>Renata software engineer</title>
                <meta name="description" content="software engineer developer resume portfolio job search" />
                <meta name="keywords" content="software engineer developer react native next nestjs node typescript technology web mobile" />
                <script type="application/ld+json">
                {JSON.stringify(structuredData)}
                </script>
            </Head>
                <header className={styles.header}>
                    <div className={styles.logo_box}>
                        <Link
                            legacyBehavior
                            href="#"
                            >
                            <a>Renata Machado</a>
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <span className={`${openNavList ? styles.faBars_open : styles.faBars}`} onClick={() => setOpenNavList(!openNavList)}>
                            <FaBars/>
                        </span>
                        <ul className={`${styles.nav_list_full} ${openNavList ? styles.nav_list : styles.nav_list_hidden}`}>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#about"
                                    >
                                    <a>01. About</a>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#experience"
                                    >
                                    <a>02. Experience</a>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#skills"
                                    >
                                    <a>03. Skills</a>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#projects"
                                    >
                                    <a>04. Projects</a>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#education"
                                    >
                                    <a>05. Education</a>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link
                                    legacyBehavior
                                    href="#contact"
                                    >
                                    <a>06. Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
        </>
    )
}
