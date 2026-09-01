import './Coaching.css';

const coachingPrograms = [
    {
        title: 'Full Stack Development',
        description:
            'Build modern web applications across frontend, backend and database technologies.',
    },
    {
        title: 'Java Development',
        description:
            'Develop strong Java programming and backend development skills.',
    },
    {
        title: 'SQL Essentials',
        description:
            'Learn SQL and database fundamentals required for modern software development.',
    },
    {
        title: 'UI & JavaScript',
        description:
            'Build strong foundations in UI development and modern JavaScript.',
    },
    {
        title: 'Spring Boot',
        description:
            'Learn to build robust, scalable backend systems and REST APIs with Spring Boot.',
    },
];

const coachingUrl = 'https://coaching.dfivetechnologies.com/';

function Coaching() {
    return (
        <section id="coaching" className="coaching section">
            <div className="container">

                <div className="coaching-header">

                    <div className="section-eyebrow">
                        DFIVE COACHING
                    </div>

                    <h2 className="coaching-title">
                        Learn technology.
                        <br />
                        Build real skills.
                    </h2>

                    <p className="coaching-description text-muted">
                        Practical technology coaching designed to help
                        learners build strong foundations and develop
                        real-world software engineering skills.
                    </p>

                </div>


                <div className="coaching-programs">

                    {coachingPrograms.map((program) => (
                        <a
                            href={coachingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="coaching-card"
                            key={program.title}
                        >
                            <div className="coaching-card-content">

                                <h3>{program.title}</h3>

                                <p>{program.description}</p>

                            </div>

                            <span className="coaching-card-link">
                                Explore <span>↗</span>
                            </span>
                        </a>
                    ))}

                </div>


                <div className="coaching-footer">

                    <a
                        href={coachingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Explore DFIVE Coaching
                        <span>↗</span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Coaching;