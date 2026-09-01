import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="container">

                <div className="hero-grid">

                    <div className="hero-content">

                        <div className="section-eyebrow">
                            TECHNOLOGY • ENGINEERING • INNOVATION...
                        </div>

                        <h1 className="hero-title">
                            Building technology
                            <br />
                            <span className="text-gradient">
                                for real-world business.
                            </span>
                        </h1>

                        <p className="hero-subtitle text-muted">
                            DFIVE Technologies builds practical digital
                            solutions across software engineering, AI,
                            quality engineering and technology education.
                        </p>

                        <div className="hero-actions">

                            <a
                                href="#services"
                                className="btn btn-primary"
                            >
                                Explore Services
                            </a>

                            <a
                                href="#projects"
                                className="btn btn-outline"
                            >
                                View Our Work
                            </a>

                        </div>

                    </div>


                    <div className="hero-visual">

                        <div className="hero-card">

                            <div className="hero-card-header">
                                <span className="hero-card-dot"></span>

                                <span>
                                    DFIVE TECHNOLOGIES
                                </span>
                            </div>

                            <div className="hero-card-content">

                                <div className="hero-card-item">
                                    <span className="hero-card-number">
                                        01
                                    </span>

                                    <div>
                                        <strong>
                                            Software Engineering
                                        </strong>

                                        <p>
                                            Modern applications & platforms
                                        </p>
                                    </div>
                                </div>

                                <div className="hero-card-item">
                                    <span className="hero-card-number">
                                        02
                                    </span>

                                    <div>
                                        <strong>
                                            AI & RAG
                                        </strong>

                                        <p>
                                            Intelligent information systems
                                        </p>
                                    </div>
                                </div>

                                <div className="hero-card-item">
                                    <span className="hero-card-number">
                                        03
                                    </span>

                                    <div>
                                        <strong>
                                            Quality Engineering
                                        </strong>

                                        <p>
                                            Reliable software & automation
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;