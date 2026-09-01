import { useState } from 'react';
import logo from '../../assets/d1.png';
import './Navbar.css';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar-header">
            <nav className="navbar" aria-label="Main navigation">

                <a
                    href="#home"
                    className="brand"
                    onClick={closeMobileMenu}
                    aria-label="DFIVE Technologies home"
                >
                    <img
                        src={logo}
                        alt="DFIVE Technologies"
                        className="brand-logo"
                    />
                </a>

                <button
                    type="button"
                    className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label={
                        isMobileMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="primary-navigation"
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>

                <div
                    id="primary-navigation"
                    className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
                >
                    <ul className="nav-links">

                        <li>
                            <a href="#home" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#about" onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#services" onClick={closeMobileMenu}>
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#projects" onClick={closeMobileMenu}>
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://coaching.dfivetechnologies.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                            >
                                Coaching
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://testing.dfivetechnologies.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                            >
                                Testing
                            </a>
                        </li>

                    </ul>

                    <div className="nav-actions">
                        <a
                            href="#contact"
                            className="btn btn-primary nav-cta-btn"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;