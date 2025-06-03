import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Perfect Capital</div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
            </div>

            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                {/*<li><Link href="/">Home</Link></li>*/}
                {/*<li><Link href="/about">About</Link></li>*/}
                {/*<li><Link href="/products">Products</Link></li>*/}
                {/*<li><Link href="/faqs">FAQs</Link></li>*/}
                {/*<li><Link href="/contact">Contact</Link></li>*/}
                <li className={styles.partner}> <a
                    href="https://forms.gle/THo6Jv8rVSgHkt9J8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Become Partner
                </a></li>
            </ul>
        </header>
    );
}
