import './About.css';

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">

                <div className="about-grid">

                    <div className="about-intro">

                        <div className="section-eyebrow">
                            ABOUT DFIVE
                        </div>

                        <h2 className="about-title">
                            Technology expertise
                            <br />
                            with a practical mindset.
                        </h2>

                    </div>


                    <div className="about-content">

                        <p className="about-lead">
                            DFIVE Technologies is a technology company
                            focused on building practical digital solutions
                            for real-world business challenges.
                        </p>

                        <p>
                            We bring together software engineering,
                            artificial intelligence, quality engineering
                            and technology education to help businesses
                            build, improve and scale their digital systems.
                        </p>

                        <p>
                            From business applications and mobile solutions
                            to AI-powered systems and software testing,
                            our focus is on creating technology that is
                            useful, reliable and built with purpose.
                        </p>

                    </div>

                </div>


                <div className="about-values">

                    <article className="about-value">

                        <span className="about-value-number">
                            01
                        </span>

                        <h3>
                            Practical
                        </h3>

                        <p>
                            We focus on solving real business problems
                            rather than building technology for technology's
                            sake.
                        </p>

                    </article>


                    <article className="about-value">

                        <span className="about-value-number">
                            02
                        </span>

                        <h3>
                            Engineering
                        </h3>

                        <p>
                            Strong engineering practices help us build
                            maintainable, scalable and reliable solutions.
                        </p>

                    </article>


                    <article className="about-value">

                        <span className="about-value-number">
                            03
                        </span>

                        <h3>
                            Continuous Learning
                        </h3>

                        <p>
                            We continuously explore modern technologies
                            and share that knowledge through our coaching
                            programs.
                        </p>

                    </article>

                </div>

            </div>
        </section>
    );
}

export default About;