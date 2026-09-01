import logo from '../../assets/d1.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">

                        <a href="/" className="footer-logo">
                            <span>
                                <img src={logo} alt="Dfive logo" />
                            </span>

                            {/* <span>
                                DFIVE Technologies
                            </span> */}
                        </a>

                        <p className="footer-description">
                            Building practical technology solutions
                            for real-world business challenges.
                        </p>

                        <div className="footer-tagline">
                            TECHNOLOGY <span>•</span> ENGINEERING <span>•</span> INNOVATION
                        </div>

                    </div>


                    {/* Company */}
                    <div className="footer-column">

                        <h3>Company</h3>

                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>

                    </div>


                    {/* Explore */}
                    <div className="footer-column">

                        <h3>Explore</h3>

                        <a
                            href="https://coaching.dfivetechnologies.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Coaching
                        </a>

                        <a
                            href="https://testing.dfivetechnologies.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Testing
                        </a>

                        <a href="#projects">
                            DFIVE AI
                        </a>

                    </div>


                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h3>Get in touch</h3>

                        <a href="mailto:info@dfivetechnologies.com">
                            info@dfivetechnologies.com
                        </a>

                        <a
                            href="https://dfivetechnologies.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dfivetechnologies.com
                        </a>

                    </div>

                </div>


                {/* Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} DFIVE Technologies.
                        All rights reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <a href="#contact">
                            Contact
                        </a>

                        <span>•</span>

                        <a href="/">
                            Back to top ↑
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;