import './Services.css';

const services = [
    {
        number: '01',
        title: 'Software Engineering',
        description:
            'Design and development of modern web, mobile and business applications built around real operational requirements.',
        highlights: ['Web Applications', 'Backend Systems', 'Mobile Applications'],
    },
    {
        number: '02',
        title: 'AI & Data Solutions',
        description:
            'Build practical AI-powered systems that help businesses retrieve information, automate workflows and make better use of their data.',
        highlights: ['AI Applications', 'RAG Systems', 'Intelligent Search'],
    },
    {
        number: '03',
        title: 'Quality Engineering',
        description:
            'Improve software reliability through structured testing, automation and quality-focused engineering practices.',
        highlights: ['Software Testing', 'Test Automation', 'Quality Assurance'],
    },
    {
        number: '04',
        title: 'Technology Coaching',
        description:
            'Practical technology training designed to help learners build strong foundations and develop real-world engineering skills.',
        highlights: ['Full Stack', 'Java & Spring Boot', 'SQL & JavaScript'],
    },
];

function Services() {
    return (
        <section id="services" className="services section">
            <div className="container">

                <div className="services-header">

                    <div className="section-eyebrow">
                        WHAT WE DO
                    </div>

                    <h2 className="services-title">
                        Technology solutions
                        <br />
                        built around your needs.
                    </h2>

                    <p className="services-subtitle text-muted">
                        From software engineering and AI to quality
                        engineering and technology coaching, we combine
                        technical expertise with a practical approach.
                    </p>

                </div>


                <div className="services-grid">

                    {services.map((service) => (
                        <article
                            className="service-card"
                            key={service.number}
                        >

                            <div className="service-card-top">
                                <span className="service-number">
                                    {service.number}
                                </span>

                                <span className="service-arrow">
                                    ↗
                                </span>
                            </div>

                            <h3>
                                {service.title}
                            </h3>

                            <p>
                                {service.description}
                            </p>

                            <ul className="service-highlights">
                                {service.highlights.map((highlight) => (
                                    <li key={highlight}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Services;