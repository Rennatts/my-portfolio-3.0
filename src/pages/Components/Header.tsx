import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return (
        <>
            <Head>
                <header className={styles.header}>
                    <div className={styles.logo_box}>
                        <Link
                            legacyBehavior
                            href="#about"
                            >
                            <a>Renata Machado</a>
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
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
            </Head>
        </>
    )
}
