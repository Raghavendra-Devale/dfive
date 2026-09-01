import Chatbot from '../Chatbot/Chatbot';
import './Projects.css';

const projects = [
    {
        number: '01',
        title: 'Botiq',
        category: 'Business Platform',
        description:
            'A business application available across web and Android, designed to support real-world operational workflows.',
        technologies: [
            'Angular',
            'Spring Boot',
            'Firebase',
            'Ionic',
            'Android',
        ],
        link: 'https://botiq.dfivetechnologies.com/',
        action: 'Visit Project',
        component: null,
    },
    {
        number: '02',
        title: 'DFIVE AI',
        category: 'Artificial Intelligence',
        description:
            'An AI-powered application exploring retrieval-augmented generation and intelligent information retrieval for practical business use cases.',
        technologies: [
            'Python',
            'FastAPI',
            'RAG',
            'AI',
        ],
        link: null,
        action: 'Explore',
        component: <Chatbot />,
    },
    {
        number: '03',
        title: 'Chatbot Capsule',
        category: 'Conversational AI',
        description:
            'An interactive AI chatbot experience designed to bring intelligent conversational capabilities into modern web applications.',
        technologies: [
            'Angular',
            'AI',
            'TypeScript',
        ],
        link: null,
        action: 'Explore',
        component: null,
    },
];

function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="container">

                <div className="projects-header">

                    <div className="section-eyebrow">
                        OUR WORK
                    </div>

                    <h2 className="projects-title">
                        Technology built
                        <br />
                        with purpose.
                    </h2>

                    <p className="projects-subtitle text-muted">
                        A selection of applications and technology
                        solutions built by DFIVE Technologies.
                    </p>

                </div>


                <div className="projects-grid">

                    {projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.number}
                        >

                            <div className="project-card-top">

                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-category">
                                    {project.category}
                                </span>

                            </div>


                            <div className="project-content">

                                <h3 className="project-title">
                                    {project.title}
                                </h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                            </div>


                            <div className="project-technologies">

                                {project.technologies.map((technology) => (
                                    <span
                                        className="technology-tag"
                                        key={technology}
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>


                            <div className="project-footer">

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        {project.action}
                                        <span>↗</span>
                                    </a>
                                ) : project.component ? (
                                    project.component
                                ) : (
                                    <span className="project-link project-link-disabled">
                                        {project.action}
                                    </span>
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;